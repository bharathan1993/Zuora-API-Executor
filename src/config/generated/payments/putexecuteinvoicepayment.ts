import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const putexecuteinvoicepaymentEndpoint: ApiEndpoint = {
  "id": "putexecuteinvoicepayment",
  "name": "Execute the invoice payment",
  "description": "For all active retry cycles associated with an invoice, schedules the next payment retry attempt to occur in the next hourly payment processor run.",
  "method": "PUT",
  "path": "/api/v1/payments/execute_invoice_payment/{invoice_id}",
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
      "description": "ID of an invoice."
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
