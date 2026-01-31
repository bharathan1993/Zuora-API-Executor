import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deleteaspecificuserEndpoint: ApiEndpoint = {
  "id": "deleteaspecificuser",
  "name": "Delete a user",
  "description": "Deactivates a specific user identified by the user ID.",
  "method": "DELETE",
  "path": "/scim/v2/Users/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
