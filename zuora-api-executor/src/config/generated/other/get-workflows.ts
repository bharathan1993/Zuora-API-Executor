import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowsEndpoint: ApiEndpoint = {
  "id": "get-workflows",
  "name": "List workflows",
  "description": "Retrieves a list of workflow definitions available in your Zuora tenant.",
  "method": "GET",
  "path": "/workflows",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
