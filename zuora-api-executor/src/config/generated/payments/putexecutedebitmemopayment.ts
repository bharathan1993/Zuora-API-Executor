import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const putexecutedebitmemopaymentEndpoint: ApiEndpoint = {
  "id": "putexecutedebitmemopayment",
  "name": "Execute the debit memo payment",
  "description": "For all active retry cycles associated with a debit memo, schedules the next payment retry attempt to occur in the next hourly payment processor run.",
  "method": "PUT",
  "path": "/api/v1/payments/execute_debit_memo_payment/{debit_memo_id}",
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
