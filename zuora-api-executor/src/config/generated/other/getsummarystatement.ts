import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsummarystatementEndpoint: ApiEndpoint = {
  "id": "getsummarystatement",
  "name": "Retrieve a summary statement",
  "description": "Retrieves a statement based on the specified summary statement key.",
  "method": "GET",
  "path": "/object-query/summarystatements/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
