# Agent Notes

## Proto Update Process

Proto contracts come from [invest-contracts](https://opensource.tbank.ru/invest/invest-contracts).

### Steps

1. **Pull latest proto files:**
   ```
   ./scripts/pull-proto.sh
   ```
   Downloads and extracts the archive into `invest-contracts-master/`.

2. **Compile to TypeScript:**
   ```
   ./scripts/compile-proto.sh
   ```
   Runs `protoc` with `ts-proto` plugin, outputs to `src/generated/`.  
   Post-processes all generated files with `sed` to fix ESM imports (adds `.js` extensions), including `google/protobuf/descriptor.ts`.

3. **Verify:**
   ```
   npm run tsc && npm test
   ```

### Key Notes

- `src/generated/` is fully regenerated on each run — never edit files there manually.
- The sed commands in `compile-proto.sh` use macOS BSD syntax (`-i ''`); on Linux, remove the `''`.
- Proto source contracts are in `invest-contracts-master/src/docs/contracts/*.proto`.
