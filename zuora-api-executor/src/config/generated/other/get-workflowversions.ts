import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowversionsEndpoint: ApiEndpoint = {
  "id": "get-workflowversions",
  "name": "List all versions of a workflow definition",
  "description": "Return a list of all workflow versions under a workflow definition",
  "method": "GET",
  "path": "/workflows/{workflow_id}/versions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "workflow_id",
      "label": "Workflow Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: workflow_id",
      "placeholder": "Enter workflow id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
