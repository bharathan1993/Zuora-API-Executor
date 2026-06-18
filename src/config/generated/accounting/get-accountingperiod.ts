import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_accountingperiodEndpoint: ApiEndpoint = {
  "id": "get-accountingperiod",
  "name": "Retrieve an accounting period",
  "description": "Retrieves an accounting period.",
  "method": "GET",
  "path": "/v1/accounting-periods/{ap-id}",
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
      "description": "ID of the accounting period you want to get."
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
