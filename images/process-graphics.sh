#!/bin/bash

echo 'Typesetting graphics...'
latexmk -pdf -shell-escape -cd --output-directory=build tex/*.tex

echo 'Converting to svg...'
for file in tex/build/*.pdf;
  do echo "processing ${file}"
  inkscape --export-plain-svg --export-type=svg --export-overwrite --export-text-to-path ${file}
  done
  
echo 'Moving the svg'
mv tex/build/*.svg svg/

# Could be better to setup 'standalone' tikz document to produce svg directly. Alternatively solve the colour gradient problem which creates huge files.

# Or just save them from inkscape selecting "optimized svg"

# Or use Scour directly https://github.com/scour-project/scour

# Force white background for all images