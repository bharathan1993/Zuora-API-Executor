import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_invoiceitemsEndpoint: ApiEndpoint = {
  "id": "get-invoiceitems",
  "name": "List all items of an invoice",
  "description": "Retrieves the information about all items of a specified invoice. ",
  "method": "GET",
  "path": "/v1/invoices/{invoiceKey}/items",
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
