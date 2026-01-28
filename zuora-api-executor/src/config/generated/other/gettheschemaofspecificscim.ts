import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const gettheschemaofspecificscimEndpoint: ApiEndpoint = {
  "id": "gettheschemaofspecificscim",
  "name": "List schemas of a resource",
  "description": "Gets a specific resource schema by ID.",
  "method": "GET",
  "path": "/scim/v2/Schemas/{id}",
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
