import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const putremovedebitmemofromcycleEndpoint: ApiEndpoint = {
  "id": "putremovedebitmemofromcycle",
  "name": "Remove a debit memo from retry cycle",
  "description": "Stops any active retry cycles associated with the debit memo provided.",
  "method": "PUT",
  "path": "/api/v1/payments/remove_debit_memo_from_retry_cycle/{debit_memo_id}",
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
