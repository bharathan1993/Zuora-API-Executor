import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querydailyconsumptionsummarybykeyEndpoint: ApiEndpoint = {
  "id": "querydailyconsumptionsummarybykey",
  "name": "Retrieve a daily consumption summary",
  "description": "Retrieve the details of a specific Daily Consumption Summary object.",
  "method": "GET",
  "path": "/object-query/daily-consumption-summaries/{key}",
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
