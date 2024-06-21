#!/bin/bash
# Update proto files from https://github.com/Tinkoff/investAPI
# Usage: ./scripts/pull-proto.sh

set -euo pipefail

wget "https://github.com/RussianInvestments/investAPI/archive/master.zip" -O proto.zip
unzip -o proto.zip
rm -f proto.zip
