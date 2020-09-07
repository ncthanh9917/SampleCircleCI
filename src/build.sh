#!/bin/bash

# Build the site
echo "==================="
echo "Build the site"
yarn
yarn generate

# Prepare test scripts
echo "==================="
echo "Prepare test scripts"
cd ..
npm ci
npm run compile

echo "==================="
echo "Finish build"