import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_uploadfileforinvoiceEndpoint: ApiEndpoint = {
  "id": "post-uploadfileforinvoice",
  "name": "Upload a file for an invoice",
  "description": "Uploads an externally generated invoice PDF file for an invoice that is in Draft or Posted status.",
  "method": "POST",
  "path": "/v1/invoices/{invoiceKey}/files",
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
      "description": "The ID or number of the invoice that you want to upload a PDF file for. For example, 2c92c8955bd63cc1015bd7c151af02ab or INV00000001."
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
