import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getreusableblockEndpoint: ApiEndpoint = {
  "id": "getreusableblock",
  "name": "Retrieve a reusable block",
  "description": "Queries the reusable block based on the specified ID or name.",
  "method": "GET",
  "path": "/notifications/reusable-blocks/{blockKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "blockKey",
      "label": "Block Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: blockKey",
      "placeholder": "Enter block key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
