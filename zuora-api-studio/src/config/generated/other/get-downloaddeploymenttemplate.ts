import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_downloaddeploymenttemplateEndpoint: ApiEndpoint = {
  "id": "get-downloaddeploymenttemplate",
  "name": "Download a template",
  "description": "Download a template for migration in the Deployment manager from the source tenant to the target tenant.",
  "method": "GET",
  "path": "/deployment-manager/deployment_artifacts",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
