#!/bin/bash
cd ../../gen/dev/src
clear
node lambda_pattern/lambda_pattern_test.js | node_modules/.bin/tap-difflet
