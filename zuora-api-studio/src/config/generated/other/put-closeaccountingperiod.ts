import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_closeaccountingperiodEndpoint: ApiEndpoint = {
  "id": "put-closeaccountingperiod",
  "name": "Close an accounting period",
  "description": "Close an accounting period by accounting period ID.",
  "method": "PUT",
  "path": "/v1/accounting-periods/{ap-id}/close",
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
