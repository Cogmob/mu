#!/bin/bash
cd ../..
mv gen/release/cached gen
rm -rf gen/release
cp -r src/lambda_pattern/skeleton_data/generated gen/release
cp src/lambda_pattern/npm/gulpfile.js gen/release
mv gen/cached gen/release/cached
cp src/lambda_pattern/npm/package.json gen/release/cached
cp readme.md gen/release
cd gen/release/cached
npm install
rm -rf src
node_modules/.bin/gulp build_release
