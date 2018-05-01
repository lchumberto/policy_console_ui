#!/bin/sh +x

npm install

if [ "${ENVIRONMENT}" != "production" ] ; then
  npm run lint
  npm run test
fi

npm run build

set x