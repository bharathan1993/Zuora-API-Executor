import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_accountingcodeEndpoint: ApiEndpoint = {
  "id": "delete-accountingcode",
  "name": "Delete an accounting code",
  "description": "This reference describes how to delete an accounting code through the REST API.",
  "method": "DELETE",
  "path": "/v1/accounting-codes/{ac-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ac-id",
      "label": "Ac Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: ac-id",
      "placeholder": "Enter ac id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
