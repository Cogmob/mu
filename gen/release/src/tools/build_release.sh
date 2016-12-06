#!/bin/bash
cp ../lambda_pattern/npm/gulpfile.js ../../gen/release
cd ../../gen/release
cp ../../src/lambda_pattern/npm/package.json .
cp ../../README.md .
npm install
rm -rf src
clear
node_modules/.bin/gulp build_release
