#!/bin/bash
cd ../../gen/dev/src
clear
node lambda_pattern/__test.js | node_modules/.bin/tap-difflet
