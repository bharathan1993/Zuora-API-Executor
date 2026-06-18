import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const geteinvoicemandateoninvoiceEndpoint: ApiEndpoint = {
  "id": "geteinvoicemandateoninvoice",
  "name": "Retrieve a mandate for downloading a file",
  "description": "Fetches mandates for downloading e-invoice based on the country code, category, and process type selection.",
  "method": "GET",
  "path": "/v1/invoices/{invoiceKey}/e-invoice/mandate",
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
      "description": "The unique number or ID of the invoice."
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
