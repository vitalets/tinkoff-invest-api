import * as grpc from '@grpc/grpc-js';

type Headers = Record<string, string | undefined>;

export function createGrpcCredentials(endpoint: string, headers: Headers = {}) {
  const protocolCredentials = createProtocolCredentials(endpoint);
  const metadataCredentials = createMetadataCredentials(headers);
  return grpc.credentials.combineChannelCredentials(protocolCredentials, metadataCredentials);
}

function createMetadataCredentials(headers: Headers) {
  const metadata = new grpc.Metadata();
  Object.keys(headers).forEach(key => {
    const header = headers[key];
    if (header) metadata.set(key, header);
  });
  return grpc.credentials.createFromMetadataGenerator((_, cb) => cb(null, metadata));
}

function createProtocolCredentials(endpoint: string) {
  return /^localhost/i.test(endpoint)
    ? grpc.credentials.createInsecure()
    : grpc.credentials.createSsl();
}
