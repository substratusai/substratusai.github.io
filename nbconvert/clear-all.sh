#!/usr/bin/env bash

set -e

repo=$(git rev-parse --show-toplevel)
exclude_files=("loading-models.ipynb" "serving-models.ipynb")

clearnb() {
  jupyter nbconvert $1 \
    --clear-output \
    --inplace
}

for nbfile in $repo/docs/*.ipynb; do
  if ! echo "${exclude_files[@]}" | grep -q "$(basename $nbfile)"; then
    echo "Clearing: $(basename $nbfile)"
    clearnb $nbfile
  fi
done

for nbfile in $repo/docs/**/*.ipynb; do
  if ! echo "${exclude_files[@]}" | grep -q "$(basename $nbfile)"; then
    echo "Clearing: $(basename $nbfile)"
    clearnb $nbfile
  fi
done
