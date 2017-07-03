#!/bin/bash
cd ../..
rm -rf gen/dev
mkdir -p gen/dev/src/lambda_pattern
cp -r src gen/dev
cp src/lambda_pattern/package.json gen/release
cd gen/release
npm install
cd ../dev/src
npm install
cd lambda_pattern
npm install
