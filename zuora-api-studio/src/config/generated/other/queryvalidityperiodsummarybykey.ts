import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryvalidityperiodsummarybykeyEndpoint: ApiEndpoint = {
  "id": "queryvalidityperiodsummarybykey",
  "name": "Retrieve a validity period summary",
  "description": "Retrieve the details of a specific Validity Period Summary object.",
  "method": "GET",
  "path": "/object-query/validity-period-summaries/{key}",
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
