#!/usr/bin/env bash

set -e

repo=$(git rev-parse --show-toplevel)

convert() {
  #
  # Removing all output cells instead of just excluding some, but if that changes, try:
  # --TagRemovePreprocessor.remove_all_outputs_tags remove_output
  #
  jupyter nbconvert $1 \
    --output $2 \
    --to markdown \
    --template substratusmd \
    --TemplateExporter.extra_template_basedirs=$repo/nbconvert/templates \
    --TagRemovePreprocessor.enabled=True \
    --TagRemovePreprocessor.remove_cell_tags remove_cell
}

for nbfile in $repo/docs/*.ipynb; do
  mdfile="${nbfile%.ipynb}.md"
  echo "Converting: $(basename $nbfile) --> $(basename $mdfile)"
  convert $nbfile $mdfile
done

for nbfile in $repo/docs/**/*.ipynb; do
  mdfile="${nbfile%.ipynb}.md"
  echo "Converting: $(basename $nbfile) --> $(basename $mdfile)"
  convert $nbfile $mdfile
done
