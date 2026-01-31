import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const syncdeploymenttemplateEndpoint: ApiEndpoint = {
  "id": "syncdeploymenttemplate",
  "name": "Sync a deployment template with latest changes",
  "description": "Synchronizes an existing deployment template with the latest changes in the source tenant.",
  "method": "POST",
  "path": "/deployment-manager/deployment_templates/sync",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
