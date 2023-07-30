#!/usr/bin/env python3
"""
A utility to watch and stream outputs of local ipykernel events.
"""

import glob
import logging
import os
import re
import threading
import time
from queue import Queue

from jupyter_client.blocking.client import BlockingKernelClient
from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer

ansi_escape = re.compile(r"\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])")
logger = logging.getLogger(__name__)


class NewFileHandler(FileSystemEventHandler):
    def __init__(self, queue):
        self.queue = queue

    def on_created(self, event):
        if event.is_directory or not event.src_path.endswith(".json"):
            return
        logger.debug(f"New kernel detected: {event.src_path}")
        self.queue.put(event.src_path)


def process_msg(msg):
    if msg["msg_type"] in ["stream", "execute_result"]:
        output = (
            msg["content"]["data"].get("text/plain", "")
            if "data" in msg["content"]
            else msg["content"].get("text", "")
        )
        clean_text = ansi_escape.sub("", output)
        logger.info(clean_text.rstrip("\n"))
    else:
        logger.debug(f"Unhandled message type: {msg['msg_type']}")
        logger.debug(msg)


def watch_kernel(connection_file, stop_event):
    kc = BlockingKernelClient(connection_file=connection_file)
    kc.load_connection_file()
    kc.start_channels()

    while not stop_event.is_set():
        try:
            msg = kc.get_iopub_msg(timeout=1)
            if msg:
                process_msg(msg)
        except Exception as _:
            continue


def watch_queue(queue, watched_files, stop_event):
    while not stop_event.is_set():
        new_file = queue.get()
        if new_file not in watched_files:
            logger.debug(f"Processing new kernel: {new_file}")
            watched_files.add(new_file)
            threading.Thread(target=watch_kernel, args=(new_file, stop_event)).start()


def start_watches():
    stop_event = threading.Event()
    threads = []
    paths_to_watch = [
        f"{os.path.expanduser('~')}/Library/Jupyter/runtime/",
        "/private/var/folders/9n/1rd9yjf913s10bzn5w9mdf_m0000gn/T/",
        "/tmp/",
    ]

    existent_paths_to_watch = [path for path in paths_to_watch if os.path.exists(path)]
    existing_runtime_config_files = {
        f
        for path in existent_paths_to_watch
        for f in glob.glob(os.path.join(path, "*.json"))
    }
    logger.info(f"Watching {len(existing_runtime_config_files)} existing files")

    queue = Queue()
    watched_files = set(existing_runtime_config_files)
    for config_file in existing_runtime_config_files:
        watch_thread = threading.Thread(
            target=watch_kernel,
            args=(
                config_file,
                stop_event,
            ),
        )
        watch_thread.start()
        threads.append(watch_thread)

    observer = Observer()
    for path in existent_paths_to_watch:
        observer.schedule(NewFileHandler(queue), path, recursive=True)

    observer.start()

    # Start the watch_queue function in a separate thread
    watch_queue_thread = threading.Thread(
        target=watch_queue,
        args=(
            queue,
            watched_files,
            stop_event,
        ),
    )
    watch_queue_thread.start()
    threads.append(watch_queue_thread)
    return threads, stop_event


def main():
    logging.basicConfig(
        level=logging.INFO, format="%(levelname)s:%(name)s:%(message)s"
    )  # Configure logging here
    threads, stop_event = start_watches()

    try:
        while True:  # Keep the script running
            time.sleep(1)
    except KeyboardInterrupt:
        stop_event.set()  # Signal the threads to stop
        for thread in threads:
            thread.join()  # Wait for all threads to finish

    print("Exiting...")


if __name__ == "__main__":
    main()
