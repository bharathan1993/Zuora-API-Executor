import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaccountcyclehistoryEndpoint: ApiEndpoint = {
  "id": "getaccountcyclehistory",
  "name": "List the retry cycle history for an account",
  "description": "Gets information of all retry cycles for an account in Configurable Payment Retry.",
  "method": "GET",
  "path": "/api/v1/payments/account_cycle_history/{account_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account_id",
      "label": "Account Id",
      "type": "string",
      "required": true,
      "description": "ID of an account."
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
