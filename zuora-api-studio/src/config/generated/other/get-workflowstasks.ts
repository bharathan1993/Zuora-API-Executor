import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowstasksEndpoint: ApiEndpoint = {
  "id": "get-workflowstasks",
  "name": "List workflow tasks",
  "description": "Retrieves a list of workflow tasks available in your Zuora tenant.",
  "method": "GET",
  "path": "/workflows/tasks",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
