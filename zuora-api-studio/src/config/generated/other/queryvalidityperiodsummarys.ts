import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryvalidityperiodsummarysEndpoint: ApiEndpoint = {
  "id": "queryvalidityperiodsummarys",
  "name": "List validity period summaries",
  "description": "Lists Validity Period Summary objects. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/validity-period-summaries",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
