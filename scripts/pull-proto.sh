#!/bin/bash
# Update proto files from https://opensource.tbank.ru/invest/invest-contracts
# Usage: ./scripts/pull-proto.sh

set -euo pipefail

rm -rf invest-contracts-master
wget "https://opensource.tbank.ru/invest/invest-contracts/-/archive/master/invest-contracts-master.zip" -O proto.zip
unzip -o proto.zip
rm -f proto.zip
