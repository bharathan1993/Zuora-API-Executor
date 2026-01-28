import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const canceleinvoicebyinvoicekeyEndpoint: ApiEndpoint = {
  "id": "canceleinvoicebyinvoicekey",
  "name": "Cancel the e-invoice file for an invoice",
  "description": "Cancels the E-Invoice for the given billing document",
  "method": "PUT",
  "path": "/v1/invoices/{invoiceKey}/e-invoice/cancel",
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
  "bodyFields": [
    {
      "name": "reason",
      "label": "Reason",
      "type": "string",
      "required": false,
      "description": "The reason code for cancelation.\n",
      "enum": [
        "01",
        "02",
        "03",
        "04"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "documentReferenceID",
      "label": "Document Reference I D",
      "type": "string",
      "required": false,
      "description": "The ID or number of the billing document that replaces the e-invoice being canceled. You can replace the canceled e-invoice with a new invoice or debit memo.\n\n**Note:** The documentReferenceID is applicable only for the reason 01 when you cancel E-Invoice for Mexico.\n",
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
