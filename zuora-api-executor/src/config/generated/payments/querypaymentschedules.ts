import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querypaymentschedulesEndpoint: ApiEndpoint = {
  "id": "querypaymentschedules",
  "name": "List payment schedules",
  "description": "Lists payment schedules. You can use the query parameters to filter, expand, and sort the returned results.  ",
  "method": "GET",
  "path": "/object-query/payment-schedules",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
