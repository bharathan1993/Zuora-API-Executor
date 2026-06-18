import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getactivedebitmemocycleEndpoint: ApiEndpoint = {
  "id": "getactivedebitmemocycle",
  "name": "List the active retry cycles for a debit memo",
  "description": "Gets information of active retry cycles that have not been completed for a debit memo in Configurable Payment Retry.",
  "method": "GET",
  "path": "/api/v1/payments/active_debit_memo_cycle_information/{debit_memo_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debit_memo_id",
      "label": "Debit Memo Id",
      "type": "string",
      "required": true,
      "description": "ID of a debit memo."
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
