import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcallouttemplteEndpoint: ApiEndpoint = {
  "id": "getcallouttemplte",
  "name": "Retrieve a callout template",
  "description": "Queries the callout template based on the specified ID. This operation supports retrieving the callout template for all event types.",
  "method": "GET",
  "path": "/notifications/callout-templates/{id}",
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
