import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const comparedeploytemplateEndpoint: ApiEndpoint = {
  "id": "comparedeploytemplate",
  "name": "Compare and deploy a template to a tenant",
  "description": "Compare and deploy a template to a tenant.",
  "method": "POST",
  "path": "/deployment-manager/deployments/templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
