#!/bin/bash
cd ../../gen/dev/src
clear
node_modules/.bin/tape lambda_pattern/**/*$1 | node_modules/.bin/tap-difflet
