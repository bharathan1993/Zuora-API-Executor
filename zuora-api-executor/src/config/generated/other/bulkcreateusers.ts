import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const bulkcreateusersEndpoint: ApiEndpoint = {
  "id": "bulkcreateusers",
  "name": "Bulk create users",
  "description": "Creates multiple users within an organization.",
  "method": "POST",
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
