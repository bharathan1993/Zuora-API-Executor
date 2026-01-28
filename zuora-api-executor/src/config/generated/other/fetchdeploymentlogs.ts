import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const fetchdeploymentlogsEndpoint: ApiEndpoint = {
  "id": "fetchdeploymentlogs",
  "name": "Retrieve a deployment log",
  "description": "Retrieve a deployment log.",
  "method": "GET",
  "path": "/deployment-manager/deployments/{migrationId}",
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
