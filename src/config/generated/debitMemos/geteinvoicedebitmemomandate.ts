import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const geteinvoicedebitmemomandateEndpoint: ApiEndpoint = {
  "id": "geteinvoicedebitmemomandate",
  "name": "Retrieve a mandate for downloading a debit memo",
  "description": "Fetches mandates for downloading a Debit Memo file based on the country code, category, and process type selection.",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoKey}/e-invoice/mandate",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoKey",
      "label": "Debit Memo Key",
      "type": "string",
      "required": true,
      "description": "The unique number or ID of the Debit Memo."
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
