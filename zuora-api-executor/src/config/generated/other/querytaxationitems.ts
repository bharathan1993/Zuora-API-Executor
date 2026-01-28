import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querytaxationitemsEndpoint: ApiEndpoint = {
  "id": "querytaxationitems",
  "name": "List taxation items",
  "description": "Lists Taxation Item objects. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/taxation-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
