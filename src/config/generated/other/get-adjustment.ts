import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_adjustmentEndpoint: ApiEndpoint = {
  "id": "get-adjustment",
  "name": "Retrieve a delivery adjustment",
  "description": "Describes how to retrieve detailed information about a delivery adjustment.",
  "method": "GET",
  "path": "/v1/adjustments/{adjustment-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "adjustment-key",
      "label": "Adjustment Key",
      "type": "string",
      "required": true,
      "description": "The delivery adjustment ID or number to retrieve."
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
