#!/bin/bash
# Build TS services from proto files.
# See: https://github.com/stephenh/ts-proto
# Usage: ./scripts/compile-proto.sh

OUT_DIR=./src/generated

mkdir -p $OUT_DIR
rm -rf $OUT_DIR/**

protoc \
--plugin="./node_modules/.bin/protoc-gen-ts_proto" \
--ts_proto_out="$OUT_DIR" \
--ts_proto_opt="outputServices=generic-definitions,useExactTypes=false,env=node,esModuleInterop=true" \
--proto_path=./investAPI-main/src/docs/contracts \
  ./investAPI-main/src/docs/contracts/*.proto

# Some magic to make it work with native ESM.
# See: https://github.com/grpc/grpc-node/issues/2009
sed -E -i '' 's|import \* as _m0 from "protobufjs/minimal";|import _m0 from "protobufjs/minimal\.js";|g' $OUT_DIR/*.ts $OUT_DIR/google/protobuf/timestamp.ts
sed -E -i '' 's|from "\./([^"]+)";|from "\./\1\.js";|g' $OUT_DIR/*.ts
