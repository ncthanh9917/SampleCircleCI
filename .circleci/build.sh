#!/bin/bash

# Build the site
echo "==================="
echo "Build the site"
yarn
yarn generate

# Prepare test scripts
echo "==================="
echo "Prepare test scripts"
npm ci
npm run compile
cd ..

echo "==================="
echo "Finish build"