import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const patch_updateworkflowEndpoint: ApiEndpoint = {
  "id": "patch-updateworkflow",
  "name": "Update a workflow",
  "description": "Updates a specific workflow by its ID, which allows you to [configure the settings of a workflow](https://knowledgecenter.zuora.com/CE_Workflow/Using_Workflow/B_Configure_a_Workflow) via API.",
  "method": "PATCH",
  "path": "/workflows/{workflow_id}",
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
  "bodyFields": [
    {
      "name": "active_workflow_version_id",
      "label": "Active Workflow Version Id",
      "type": "number",
      "required": false,
      "description": "The id of a version. This version will then be set to the active version of the workflow definition.\n",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "The description of the workflow defintion\n",
      "section": "Additional Fields"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "description": "Can be `Active` or `Inactive`. Active workfow definitions run like normal. Inactive workflow definitions cannot be run.\n",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the workflow definition\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
