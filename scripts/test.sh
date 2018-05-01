#!/usr/bin/env sh

export NODE_ENV='test'
export TS_NODE_PROJECT='./tsconfig.test.json'
export NODE_PATH
NODE_PATH=$(jqn 'get("compilerOptions.baseUrl")' <'./tsconfig.json')

mocha --opts './mocha.opts' './src/**/*.test.ts?(x)'
