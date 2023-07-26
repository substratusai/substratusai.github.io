#!/usr/bin/env bash

set -e

repo=$(git rev-parse --show-toplevel)

clearnb() {
  jupyter nbconvert $1 \
    --clear-output \
    --inplace
}

for nbfile in $repo/docs/*.ipynb; do
  echo "Clearing: $(basename $nbfile)"
  clearnb $nbfile
done

for nbfile in $repo/docs/**/*.ipynb; do
  echo "Clearing: $(basename $nbfile)"
  clearnb $nbfile
done
