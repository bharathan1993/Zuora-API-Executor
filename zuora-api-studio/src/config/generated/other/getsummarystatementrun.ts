import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsummarystatementrunEndpoint: ApiEndpoint = {
  "id": "getsummarystatementrun",
  "name": "Retrieve a summary statement run",
  "description": "Retrieves a statement run by using the statement run ID or number.",
  "method": "GET",
  "path": "/object-query/summarystatementruns/{key}",
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
