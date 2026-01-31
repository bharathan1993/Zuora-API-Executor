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
      "description": "Path parameter: adjustment-key",
      "placeholder": "Enter adjustment key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
