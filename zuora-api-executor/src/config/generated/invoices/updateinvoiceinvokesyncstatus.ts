import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateinvoiceinvokesyncstatusEndpoint: ApiEndpoint = {
  "id": "updateinvoiceinvokesyncstatus",
  "name": "Sync the e-Invoice status of an invoice",
  "description": "Initiates a background polling process to retrieve the latest notification response from the configured e-Invoicing provider and update the e-Invoice status of the e-Invoice.",
  "method": "PUT",
  "path": "/v1/invoices/{invoiceKey}/e-invoice/sync-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: invoiceKey",
      "placeholder": "Enter invoice key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
