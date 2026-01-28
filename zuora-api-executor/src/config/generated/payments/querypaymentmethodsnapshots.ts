import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querypaymentmethodsnapshotsEndpoint: ApiEndpoint = {
  "id": "querypaymentmethodsnapshots",
  "name": "List payment method snapshots",
  "description": "Lists payment method snapshots. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/payment-method-snapshots",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
