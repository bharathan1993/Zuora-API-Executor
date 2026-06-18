import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_closeaccountingperiodEndpoint: ApiEndpoint = {
  "id": "put-closeaccountingperiod",
  "name": "Close an accounting period",
  "description": "Close an accounting period by accounting period ID.",
  "method": "PUT",
  "path": "/v1/accounting-periods/{ap-id}/close",
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
      "description": "ID of the accounting period you want to close."
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
