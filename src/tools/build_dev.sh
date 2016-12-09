#!/bin/bash
cd ../..
mv gen/dev/src/lambda_pattern/node_modules project_node_modules
mv gen/dev/src/node_modules tools_node_modules
rm -rf gen/dev/src
cp -r src gen/dev
mv project_node_modules gen/dev/src/lambda_pattern/node_modules
mv tools_node_modules gen/dev/src/node_modules
cp src/lambda_pattern/npm/gulpfile.js gen/dev/src
cd gen/dev/src
./node_modules/.bin/gulp build_dev
