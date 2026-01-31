import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_customobjectdefinitionbytypeEndpoint: ApiEndpoint = {
  "id": "get-customobjectdefinitionbytype",
  "name": "Retrieve a custom object definition",
  "description": "Retrieves the custom object definition by type for the given tenant.",
  "method": "GET",
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
