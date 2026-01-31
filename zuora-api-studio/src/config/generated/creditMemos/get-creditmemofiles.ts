import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_creditmemofilesEndpoint: ApiEndpoint = {
  "id": "get-creditmemofiles",
  "name": "List all files of a credit memo",
  "description": "Retrieves the information about all PDF files of a specified credit memo. ",
  "method": "GET",
  "path": "/v1/credit-memos/{creditMemoKey}/files",
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
      "description": "Path parameter: creditMemoKey",
      "placeholder": "Enter credit memo key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
