import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_sequencesetEndpoint: ApiEndpoint = {
  "id": "get-sequenceset",
  "name": "Retrieve a sequence set",
  "description": "Retrieves information about a specific sequence set configured for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos",
  "method": "GET",
  "path": "/v1/sequence-sets/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "The ID or number of the sequence set to retrieve information about."
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
