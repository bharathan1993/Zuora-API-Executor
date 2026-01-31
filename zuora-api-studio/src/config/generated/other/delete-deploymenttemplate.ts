import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_deploymenttemplateEndpoint: ApiEndpoint = {
  "id": "delete-deploymenttemplate",
  "name": "Delete a template",
  "description": "Deletes a specific template by passing the ID.",
  "method": "DELETE",
  "path": "/deployment-manager/deployment_templates/{id}",
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
