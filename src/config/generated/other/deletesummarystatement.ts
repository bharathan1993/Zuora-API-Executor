import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deletesummarystatementEndpoint: ApiEndpoint = {
  "id": "deletesummarystatement",
  "name": "Delete a summary statement",
  "description": "Deletes a specific summary statement.",
  "method": "DELETE",
  "path": "/v1/summary-statements/{summaryStatementKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "summaryStatementKey",
      "label": "Summary Statement Key",
      "type": "string",
      "required": true,
      "description": "The ID or number of the summary statement to delete. For example, `2c92c8955bd63cc1015bd7c151af02ab` or `SS-00000001`."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
