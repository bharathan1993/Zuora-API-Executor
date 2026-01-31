import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_taxationitemsofinvoiceitemEndpoint: ApiEndpoint = {
  "id": "get-taxationitemsofinvoiceitem",
  "name": "List all taxation items of an invoice item",
  "description": "Retrieves information about the taxation items of a specific invoice item. ",
  "method": "GET",
  "path": "/v1/invoices/{invoiceKey}/items/{itemId}/taxation-items",
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
    },
    {
      "name": "itemId",
      "label": "Item Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: itemId",
      "placeholder": "Enter item id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
