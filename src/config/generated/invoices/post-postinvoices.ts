import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_postinvoicesEndpoint: ApiEndpoint = {
  "id": "post-postinvoices",
  "name": "Post invoices",
  "description": "Posts multiple invoices.",
  "method": "POST",
  "path": "/v1/invoices/bulk-post",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "description": "The container for invoices to be posted. The maximum number of invoices to be posted is 50 in one request.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "The ID of the invoice to be posted.",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceDate",
          "label": "Invoice Date",
          "type": "date",
          "required": false,
          "description": "The date that appears on the invoice being created, in `yyyy-mm-dd` format. The value cannot fall in a closed accounting period.",
          "section": "Invoice & Document Settings"
        }
      ],
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
