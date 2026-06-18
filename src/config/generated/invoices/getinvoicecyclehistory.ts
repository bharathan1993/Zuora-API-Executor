import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getinvoicecyclehistoryEndpoint: ApiEndpoint = {
  "id": "getinvoicecyclehistory",
  "name": "List the retry cycle history for an invoice",
  "description": "Gets information of all retry cycles for an invoice in Configurable Payment Retry.",
  "method": "GET",
  "path": "/api/v1/payments/invoice_cycle_history/{invoice_id}",
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
