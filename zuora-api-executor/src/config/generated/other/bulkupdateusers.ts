import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const bulkupdateusersEndpoint: ApiEndpoint = {
  "id": "bulkupdateusers",
  "name": "Bulk update users",
  "description": "Updates an existing multiple user resource, overwriting values for specified attributes.",
  "method": "PATCH",
  "path": "/scim/v2/Users/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
