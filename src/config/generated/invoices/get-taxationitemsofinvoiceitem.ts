import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_taxationitemsofinvoiceitemEndpoint: ApiEndpoint = {
  "id": "get-taxationitemsofinvoiceitem",
  "name": "List all taxation items of an invoice item",
  "description": "Retrieves information about the taxation items of a specific invoice item.",
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
      "description": "The unique ID or number of an invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab or INV00000001."
    },
    {
      "name": "itemId",
      "label": "Item Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of an invoice item. For example, 2c86c8955bd63cc1015bd7c151af02ef."
    }
  ],
  "queryParams": [
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "The number of records returned per page in the response.",
      "defaultValue": 20
    },
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "The index number of the page that you want to retrieve. This parameter is dependent on `pageSize`. You must set `pageSize` before specifying `page`. For example, if you set `pageSize` to `20` and `page` to `2`, the 21st to 40th records are returned in the response.",
      "defaultValue": 1
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
