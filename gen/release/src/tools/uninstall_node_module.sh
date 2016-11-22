#!/bin/bash
cd ../../gen/dev
npm uninstall $1
cp package.json ../../src/npm
