#!/bin/sh

export PUBLIC_URL="http://robsonperassoli.com.br/resume/"
rm -Rf ../resume
yarn build
mv build ../resume
