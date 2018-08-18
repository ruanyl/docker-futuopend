#!/bin/bash

# create config file
npm run config

# Start the first process
./FutuOpenD -console=0
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start FutuOpenD: $status"
  exit $status
fi

echo "FutuOpenD started"
echo "Start to sleep for 60s"
sleep 60
echo "sleep end"

# Start the second process
./FutuHistData
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start FutuHistData: $status"
  exit $status
fi
