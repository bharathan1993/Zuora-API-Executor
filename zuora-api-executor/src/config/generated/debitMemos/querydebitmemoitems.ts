import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querydebitmemoitemsEndpoint: ApiEndpoint = {
  "id": "querydebitmemoitems",
  "name": "List debit memo items",
  "description": "Lists debit memo items. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/debit-memo-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
