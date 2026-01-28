import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const revertdeploymentEndpoint: ApiEndpoint = {
  "id": "revertdeployment",
  "name": "Revert a deployment",
  "description": "Revert a deployment.",
  "method": "POST",
  "path": "/deployment-manager/deployments/{migrationId}/revert",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "migrationId",
      "label": "Migration Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: migrationId",
      "placeholder": "Enter migration id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
