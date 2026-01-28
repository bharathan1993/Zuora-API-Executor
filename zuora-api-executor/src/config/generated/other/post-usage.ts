import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_usageEndpoint: ApiEndpoint = {
  "id": "post-usage",
  "name": "Upload a usage file",
  "description": "This REST API reference describes how to post or import usage data for one or more accounts in the CSV format. There are no path or query parameters. The data is uploaded using the HTTP multipart/form-data POST method and applied to the user's tenant. ",
  "method": "POST",
  "path": "/v1/usage",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
