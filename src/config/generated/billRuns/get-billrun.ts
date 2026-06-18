import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_billrunEndpoint: ApiEndpoint = {
  "id": "get-billrun",
  "name": "Retrieve a bill run",
  "description": "Retrieves the information about a specific bill run.",
  "method": "GET",
  "path": "/v1/bill-runs/{billRunId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "billRunId",
      "label": "Bill Run Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of a bill run."
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
