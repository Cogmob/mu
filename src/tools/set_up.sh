#!/bin/bash
cd ../..
rm -rf gen/dev
# mkdir -p gen/dev/src/lambda_pattern
cp -r src gen/dev
cd gen/dev/src
yarn install
cd lambda_pattern
yarn install
