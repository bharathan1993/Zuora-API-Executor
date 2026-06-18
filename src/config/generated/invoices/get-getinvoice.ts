import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_getinvoiceEndpoint: ApiEndpoint = {
  "id": "get-getinvoice",
  "name": "Retrieve an invoice",
  "description": "Retrieves a specific invoice.",
  "method": "GET",
  "path": "/v1/invoices/{invoiceKey}",
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
      "description": "The ID or number of the invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab or INV-0000001."
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
