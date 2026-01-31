import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deletealistofusersEndpoint: ApiEndpoint = {
  "id": "deletealistofusers",
  "name": "Delete a list of users",
  "description": "Sets multiple users to deactivate.",
  "method": "POST",
  "path": "/scim/v2/Users/delete",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
