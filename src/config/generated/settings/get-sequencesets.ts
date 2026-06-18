import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_sequencesetsEndpoint: ApiEndpoint = {
  "id": "get-sequencesets",
  "name": "List sequence sets",
  "description": "Retrieves information about all sequence sets configured for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.",
  "method": "GET",
  "path": "/v1/sequence-sets",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
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
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name or number of a specific sequence set."
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
