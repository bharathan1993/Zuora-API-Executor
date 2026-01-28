import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querydailyconsumptionsummariesEndpoint: ApiEndpoint = {
  "id": "querydailyconsumptionsummaries",
  "name": "List daily consumption summaries",
  "description": "Lists daily consumption summaries. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/daily-consumption-summaries",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
