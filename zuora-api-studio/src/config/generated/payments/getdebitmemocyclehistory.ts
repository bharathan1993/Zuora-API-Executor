import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getdebitmemocyclehistoryEndpoint: ApiEndpoint = {
  "id": "getdebitmemocyclehistory",
  "name": "List the retry cycle history for a debit memo.",
  "description": "Gets information of all retry cycles for a debit memo in Configurable Payment Retry.",
  "method": "GET",
  "path": "/api/v1/payments/debit_memo_cycle_history/{debit_memo_id}",
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
      "description": "Path parameter: debit_memo_id",
      "placeholder": "Enter debit memo id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
