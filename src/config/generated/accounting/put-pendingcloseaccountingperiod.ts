import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_pendingcloseaccountingperiodEndpoint: ApiEndpoint = {
  "id": "put-pendingcloseaccountingperiod",
  "name": "Set an accounting period to pending close",
  "description": "Sets an accounting period to pending close.",
  "method": "PUT",
  "path": "/v1/accounting-periods/{ap-id}/pending-close",
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
      "description": "ID of the accounting period you want to set to pending close."
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
