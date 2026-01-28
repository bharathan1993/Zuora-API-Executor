import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const putremoveinovicefromcycleEndpoint: ApiEndpoint = {
  "id": "putremoveinovicefromcycle",
  "name": "Remove an invoice from retry cycle",
  "description": "Stops any active retry cycles associated with the invoice provided.",
  "method": "PUT",
  "path": "/api/v1/payments/remove_invoice_from_retry_cycle/{invoice_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoice_id",
      "label": "Invoice Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: invoice_id",
      "placeholder": "Enter invoice id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
