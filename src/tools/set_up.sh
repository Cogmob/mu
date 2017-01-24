#!/bin/bash
cd ../..
rm -rf gen/dev
mkdir -p gen/dev/src/lambda_pattern
cp -r src gen/dev
mkdir -p gen/release/cached
cp -r src gen/release/cached
cd gen/dev/src
npm install
cd lambda_pattern
npm install
