import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_customobjectdefinitionbytypeEndpoint: ApiEndpoint = {
  "id": "delete-customobjectdefinitionbytype",
  "name": "Delete a custom object definition",
  "description": "Deletes the custom object definition for the provided type.",
  "method": "DELETE",
  "path": "/objects/definitions/default/{object}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true,
      "description": "Path parameter: object",
      "placeholder": "Enter object"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
