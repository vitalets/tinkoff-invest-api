/**
 * Nice-grpc middleware to attach headers to thrown error.
 * See: https://github.com/deeplay-io/nice-grpc/issues/125
 */

import {
  ClientMiddlewareCall,
  CallOptions,
  ClientError,
  Metadata,
  Status,
} from 'nice-grpc';

export class TinkoffApiError extends ClientError {
  trackingId = '';
  envoyUpstreamServiceTime = '';
  ratelimit = '';
  ratelimitRemaining = '';
  ratelimitReset = '';

  constructor(
    path: string,
    code: Status,
    details: string,
  ) {
    super(path, code, details);
    this.name = 'TinkoffApiError';
  }
}

export async function* errorMiddleware<Request, Response>(
  call: ClientMiddlewareCall<Request, Response>,
  options: CallOptions,
) {
  let trailer: Metadata | undefined;
  options.onTrailer = _trailer => trailer = _trailer;
  try {
    return yield* call.next(call.request, options);
  } catch (error) {
    if (error instanceof ClientError && trailer) {
      throw buildTinkoffApiError(error, trailer as Metadata);
    } else {
      throw error;
    }
  }
}

// eslint-disable-next-line complexity
function buildTinkoffApiError({ path, code, details }: ClientError, metadata: Metadata) {
  const message = metadata.get('message');
  const error = new TinkoffApiError(path, code, message || details);
  error.trackingId = metadata.get('x-tracking-id') || '';
  error.envoyUpstreamServiceTime = metadata.get('x-envoy-upstream-service-time') || '';
  error.ratelimit = metadata.get('x-ratelimit-limit') || '';
  error.ratelimitRemaining = metadata.get('x-ratelimit-remaining') || '';
  error.ratelimitReset = metadata.get('x-ratelimit-reset') || '';
  return error;
}
