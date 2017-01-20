#!/bin/bash

rm -rf ./dist/*
cp ./web.config ./dist
webpack --config config/webpack.prod.js --progress --profile --bail
