#!/usr/bin/env python3
"""
A utility to watch and stream outputs of local ipykernel events.
"""

import asyncio
from jupyter_client.asynchronous import AsyncKernelClient
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import glob
import os
import janus


class NewFileHandler(FileSystemEventHandler):
    def __init__(self, queue):
        self.queue = queue

    def on_created(self, event):
        if event.is_directory or not event.src_path.endswith(".json"):
            return
        print(f"New kernel detected: {event.src_path}")
        self.queue.sync_q.put(event.src_path)


def process_msg(msg):
    if msg["msg_type"] in ["stream", "execute_result"]:
        output = (
            msg["content"]["data"].get("text/plain", "")
            if "data" in msg["content"]
            else msg["content"].get("text", "")
        )
        print(f"Output: {output}")
    else:
        print(f"Unhandled message type: {msg['msg_type']}")
        print(msg)


async def watch_kernel(connection_file):
    kc = AsyncKernelClient(connection_file=connection_file)
    kc.load_connection_file()
    kc.start_channels()

    while True:
        msg = await kc.iopub_channel.get_msg()
        process_msg(msg)


async def watch_queue(queue, watched_files):
    while True:
        new_file = await queue.async_q.get()
        if new_file not in watched_files:
            print(f"Processing new kernel: {new_file}")
            watched_files.add(new_file)
            asyncio.create_task(watch_kernel(new_file))


async def main():
    paths_to_watch = [
        f"{os.path.expanduser('~')}/Library/Jupyter/runtime/",  # only works on mac OS
        "/private/var/folders/9n/1rd9yjf913s10bzn5w9mdf_m0000gn/T/",  # I'm certain this is not portable as is
    ]

    existing_files = {
        f for path in paths_to_watch for f in glob.glob(os.path.join(path, "*.json"))
    }
    print(f"Watching {len(existing_files)} existing files")

    queue = janus.Queue()

    tasks = [watch_kernel(config_file) for config_file in existing_files]

    observer = Observer()
    for path in paths_to_watch:
        observer.schedule(NewFileHandler(queue), path, recursive=True)

    observer_task = asyncio.get_event_loop().run_in_executor(None, observer.start)
    queue_watcher = watch_queue(queue, existing_files)

    await asyncio.gather(*tasks, observer_task, queue_watcher)


# Run the main loop
asyncio.run(main())
