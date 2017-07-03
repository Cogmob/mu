#!/bin/bash
cd ../lambda_pattern
npm version patch
cp package.json ../../gen/dev/src/lambda_pattern
cp package.json ../../gen/release
cd ../../gen/release
npm publish ./
