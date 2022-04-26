#!/bin/sh

DIR="$(cd "$(dirname "$0")" && pwd)"

node $DIR/clean-node-modules.js
node $DIR/clean-ios.js
node $DIR/clean-android.js
sh $DIR/clean-bundler.sh
