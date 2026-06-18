import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_activateaccountingcodeEndpoint: ApiEndpoint = {
  "id": "put-activateaccountingcode",
  "name": "Activate an accounting code",
  "description": "This reference describes how to activate an accounting code through the REST API.",
  "method": "PUT",
  "path": "/v1/accounting-codes/{ac-id}/activate",
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
      "description": "ID of the accounting code you want to activate."
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
