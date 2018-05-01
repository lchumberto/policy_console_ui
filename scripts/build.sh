#!/usr/bin/env sh

if [ -z  "$GENERATE_SOURCEMAP" ]; then
  export GENERATE_SOURCEMAP='false'
fi

react-scripts-ts build
