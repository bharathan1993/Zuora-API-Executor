import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_accountingperiodEndpoint: ApiEndpoint = {
  "id": "delete-accountingperiod",
  "name": "Delete an accounting period",
  "description": "Deletes an accounting period.",
  "method": "DELETE",
  "path": "/v1/accounting-periods/{ap-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ap-id",
      "label": "Ap Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: ap-id",
      "placeholder": "Enter ap id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
