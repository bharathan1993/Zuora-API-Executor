import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryrateplansEndpoint: ApiEndpoint = {
  "id": "queryrateplans",
  "name": "List rate plans",
  "description": "Lists Rate Plan objects. You can use the query parameters to filter, expand, and sort the returned results.  ",
  "method": "GET",
  "path": "/object-query/rate-plans",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
