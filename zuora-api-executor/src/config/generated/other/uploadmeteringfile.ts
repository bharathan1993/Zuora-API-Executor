import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const uploadmeteringfileEndpoint: ApiEndpoint = {
  "id": "uploadmeteringfile",
  "name": "Upload a file",
  "description": "Uploads and stores a file in Zuora Mediation for use in meter processing. Supported formats include CSV, Excel, and JSON. You can specify metadata like headers,",
  "method": "POST",
  "path": "/meters/files",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
