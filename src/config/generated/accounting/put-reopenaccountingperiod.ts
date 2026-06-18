import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_reopenaccountingperiodEndpoint: ApiEndpoint = {
  "id": "put-reopenaccountingperiod",
  "name": "Reopen an accounting period",
  "description": "Re-opens an accounting period.",
  "method": "PUT",
  "path": "/v1/accounting-periods/{ap-id}/reopen",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ap-id",
      "label": "Ap Id",
      "type": "string",
      "required": true,
      "description": "ID of the accounting period that you want to re-open."
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
