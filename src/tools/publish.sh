#!/bin/bash
cd ../lambda_pattern
npm version patch
cd ../../gen/dev/lambda_pattern
npm version patch
cd ../../release
npm version patch
npm publish ./
