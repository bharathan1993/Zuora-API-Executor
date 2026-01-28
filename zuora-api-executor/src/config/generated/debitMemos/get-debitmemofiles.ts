import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemofilesEndpoint: ApiEndpoint = {
  "id": "get-debitmemofiles",
  "name": "List all files of a debit memo",
  "description": "Retrieves the information about all PDF files of a specified debit memo. ",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoKey}/files",
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
      "description": "Path parameter: debitMemoKey",
      "placeholder": "Enter debit memo key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
