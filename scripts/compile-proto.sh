#!/bin/bash
# Build TS services from proto files.
# See: https://github.com/stephenh/ts-proto
# Proto contracts: https://opensource.tbank.ru/invest/invest-contracts
# Usage: ./scripts/compile-proto.sh

OUT_DIR=./src/generated

mkdir -p $OUT_DIR
rm -rf $OUT_DIR/**

protoc \
--plugin="./node_modules/.bin/protoc-gen-ts_proto" \
--ts_proto_out="$OUT_DIR" \
--ts_proto_opt="outputServices=nice-grpc" \
--ts_proto_opt="outputServices=generic-definitions" \
--ts_proto_opt="useExactTypes=false" \
--ts_proto_opt="env=node" \
--ts_proto_opt="esModuleInterop=true" \
--ts_proto_opt="outputPartialMethods=false" \
--ts_proto_opt="useOptionals=messages" \
--proto_path=./invest-contracts-master/src/docs/contracts \
  ./invest-contracts-master/src/docs/contracts/*.proto

# Some magic to make it work with native ESM.
# See: https://github.com/grpc/grpc-node/issues/2009
find $OUT_DIR -name "*.ts" -exec sed -E -i '' 's|import _m0 from "protobufjs/minimal";|import _m0 from "protobufjs/minimal.js";|g' {} +
find $OUT_DIR -name "*.ts" -exec sed -E -i '' 's|from "\./([^"]+)";|from "\./\1.js";|g' {} +
