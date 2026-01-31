import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_deactivateaccountingcodeEndpoint: ApiEndpoint = {
  "id": "put-deactivateaccountingcode",
  "name": "Deactivate an accounting code",
  "description": "This reference describes how to deactivate an accounting code through the REST API.",
  "method": "PUT",
  "path": "/v1/accounting-codes/{ac-id}/deactivate",
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
