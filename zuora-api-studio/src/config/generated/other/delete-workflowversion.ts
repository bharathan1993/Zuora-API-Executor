import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_workflowversionEndpoint: ApiEndpoint = {
  "id": "delete-workflowversion",
  "name": "Delete a workflow version",
  "description": "Delete a workflow version based on the version id. ",
  "method": "DELETE",
  "path": "/workflows/versions/{version_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "version_id",
      "label": "Version Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: version_id",
      "placeholder": "Enter version id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
