import * as grpc from '@grpc/grpc-js';

export function createCredentialsWithToken(token: string) {
  const sslCredentials = grpc.credentials.createSsl();
  const authCredentials = createTokenCredentials(token);
  return grpc.credentials.combineChannelCredentials(sslCredentials, authCredentials);
}

function createTokenCredentials(token: string) {
  return grpc.credentials.createFromMetadataGenerator((_, cb) => cb(null, createTokenMetadata(token)));
}

function createTokenMetadata(token: string) {
  const metadata = new grpc.Metadata();
  metadata.set('Authorization', 'Bearer ' + token);
  return metadata;
}

