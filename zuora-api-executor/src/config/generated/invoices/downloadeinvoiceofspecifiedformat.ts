import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const downloadeinvoiceofspecifiedformatEndpoint: ApiEndpoint = {
  "id": "downloadeinvoiceofspecifiedformat",
  "name": "Download a file in the specified file format",
  "description": "Downloads the e-invoice based on the selected file format. ",
  "method": "GET",
  "path": "/v1/invoices/{invoiceKey}/e-invoice/download",
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
