#!/bin/bash
mkdir -p ../../gen/dev
cp ../lambda_pattern/npm/gulpfile.js ../../gen/dev
cd ../../gen/dev
cp ../../src/lambda_pattern/npm/package.json .
rm -rf src
node_modules/.bin/gulp build_dev
