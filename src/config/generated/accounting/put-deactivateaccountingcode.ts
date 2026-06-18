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
      "description": "ID of the accounting code you want to deactivate."
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
