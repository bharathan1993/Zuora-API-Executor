import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowsusagesEndpoint: ApiEndpoint = {
  "id": "get-workflowsusages",
  "name": "Retrieve workflow task usage",
  "description": "Gets workflow task usage sorted by day within a specified time frame.",
  "method": "GET",
  "path": "/workflows/metrics.json",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
