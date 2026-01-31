import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deletereusableblockEndpoint: ApiEndpoint = {
  "id": "deletereusableblock",
  "name": "Delete a reusable block",
  "description": "Deletes a reusable block.",
  "method": "DELETE",
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
