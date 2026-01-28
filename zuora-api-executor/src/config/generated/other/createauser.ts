import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createauserEndpoint: ApiEndpoint = {
  "id": "createauser",
  "name": "Create a user",
  "description": "Creates a user. Must include the userName attribute and an email address. User will be created as an SSO user by default and a federated ID must be provided for the user.",
  "method": "POST",
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
