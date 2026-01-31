import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_generationeinvoicegenerationforinvoicesEndpoint: ApiEndpoint = {
  "id": "put-generationeinvoicegenerationforinvoices",
  "name": "Generate an e-invoice file for an invoice",
  "description": "Generates an e-invoice file for an invoice. ",
  "method": "PUT",
  "path": "/v1/invoices/{invoiceKey}/einvoice/generate",
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
