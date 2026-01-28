import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deletecallouttemplateEndpoint: ApiEndpoint = {
  "id": "deletecallouttemplate",
  "name": "Delete a callout template",
  "description": "Deletes a callout template. This operation supports deleting a callout template for all event types.",
  "method": "DELETE",
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
