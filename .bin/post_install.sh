#!/bin/bash
pwd
TMP_FILE=/tmp/parse.tmp
if [ -e /tmp/parse.tmp ]; then
  echo "Cleaning up from previous install failure"
  rm -f /tmp/parse.tmp
fi
echo "Fetching latest version ..."
curl --progress-bar https://www.parse.com/downloads/cloud_code/parse -o /tmp/parse.tmp
echo "Installing ..."
mv /tmp/parse.tmp ./.bin/parse
chmod 755 ./.bin/parse