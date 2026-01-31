import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getlistofusersEndpoint: ApiEndpoint = {
  "id": "getlistofusers",
  "name": "List users",
  "description": "Returns a paginated list of users, 100 users per page by default.",
  "method": "GET",
  "path": "/scim/v2/Users",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
