import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_comparetemplateEndpoint: ApiEndpoint = {
  "id": "post-comparetemplate",
  "name": "Compare settings between a source tenant and a target tenant",
  "description": "To Compare the configurations from the template downloaded and used in deployment manager for migration which is available in source and target tenant.",
  "method": "POST",
  "path": "/deployment-manager/deployment_artifacts/compare",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
