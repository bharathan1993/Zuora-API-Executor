import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const comparedeploytenantEndpoint: ApiEndpoint = {
  "id": "comparedeploytenant",
  "name": "Compare and deploy a source tenant to a target tenant",
  "description": "Compare and deploy a source tenant to a target tenant.",
  "method": "POST",
  "path": "/deployment-manager/deployments/tenants",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
