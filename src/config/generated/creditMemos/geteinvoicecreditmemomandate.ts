import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const geteinvoicecreditmemomandateEndpoint: ApiEndpoint = {
  "id": "geteinvoicecreditmemomandate",
  "name": "Retrieve a mandate for downloading a credit memo",
  "description": "Fetches mandates for downloading a Credit Memo file based on the country code, category, and process type selection.",
  "method": "GET",
  "path": "/v1/credit-memos/{creditMemoKey}/e-invoice/mandate",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoKey",
      "label": "Credit Memo Key",
      "type": "string",
      "required": true,
      "description": "The unique number or ID of the Credit Memo."
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
