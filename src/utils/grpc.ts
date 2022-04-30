import * as grpc from '@grpc/grpc-js';

type Headers = Record<string, string | undefined>;

export function createGrpcCredentials(headers: Headers = {}) {
  const sslCredentials = grpc.credentials.createSsl();
  const metadataCredentials = createMetadataCredentials(headers);
  return grpc.credentials.combineChannelCredentials(sslCredentials, metadataCredentials);
}

function createMetadataCredentials(headers: Headers) {
  const metadata = new grpc.Metadata();
  Object.keys(headers).forEach(key => {
    const header = headers[key];
    if (header) metadata.set(key, header);
  });
  return grpc.credentials.createFromMetadataGenerator((_, cb) => cb(null, metadata));
}

