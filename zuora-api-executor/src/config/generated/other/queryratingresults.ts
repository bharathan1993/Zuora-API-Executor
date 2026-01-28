import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryratingresultsEndpoint: ApiEndpoint = {
  "id": "queryratingresults",
  "name": "List rating results",
  "description": "Lists Rating Result objects. You can use the query parameters to filter, expand, and sort the returned results.  ",
  "method": "GET",
  "path": "/object-query/rating-results",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
