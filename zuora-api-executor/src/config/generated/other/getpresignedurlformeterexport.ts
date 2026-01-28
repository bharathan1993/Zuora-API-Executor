import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getpresignedurlformeterexportEndpoint: ApiEndpoint = {
  "id": "getpresignedurlformeterexport",
  "name": "Retrieve the presigned URL for an export job",
  "description": "Returns a pre-signed URL that you can use to download a specific export file (usually from object storage such as S3). The `fileKey` corresponds to one entry from the `fileList` array in the List API. Use the returned URL in the data field directly in a browser or via a HTTP client to download the export file.",
  "method": "GET",
  "path": "/meters/auditTrail/presignedUrl",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
