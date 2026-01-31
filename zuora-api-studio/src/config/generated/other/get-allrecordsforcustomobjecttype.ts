import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allrecordsforcustomobjecttypeEndpoint: ApiEndpoint = {
  "id": "get-allrecordsforcustomobjecttype",
  "name": "List records for a custom object",
  "description": "Lists all object records of the given type. You can also use the `q` query parameter to filter the output records.",
  "method": "GET",
  "path": "/objects/records/default/{object}",
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
