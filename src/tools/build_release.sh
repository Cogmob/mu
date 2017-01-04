#!/bin/bash
cd ../..
mv gen/release/cached gen
rm -rf gen/release
cp src/skeleton/release gen
cp src/lambda_pattern/npm/gulpfile.js gen/release
cp src/lambda_pattern/npm/package.json gen/release/cached
cp README.md gen/release
cd gen/release/cached
npm install
rm -rf src
node_modules/.bin/gulp build_release
