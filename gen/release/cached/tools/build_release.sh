#!/bin/bash
cd ../..
mv gen/release/cached gen
rm -rf gen/release
cp -r src/lambda_pattern/skeleton_data/generated gen/release
mv gen/cached gen/release/cached
cp src/lambda_pattern/npm/gulpfile.js gen/release/cached
cp src/lambda_pattern/package.json gen/release/cached
cp readme.md gen/release
cd gen/release/cached
npm install
node_modules/.bin/gulp build_release
