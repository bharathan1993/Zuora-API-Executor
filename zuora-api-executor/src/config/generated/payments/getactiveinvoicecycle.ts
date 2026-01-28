import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getactiveinvoicecycleEndpoint: ApiEndpoint = {
  "id": "getactiveinvoicecycle",
  "name": "List the active retry cycles for an invoice",
  "description": "Gets information of active retry cycles that have not been completed for an invoice in Configurable Payment Retry.",
  "method": "GET",
  "path": "/api/v1/payments/active_invoice_cycle_information/{invoice_id}",
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
