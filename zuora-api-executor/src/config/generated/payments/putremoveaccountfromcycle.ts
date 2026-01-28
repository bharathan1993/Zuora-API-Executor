import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const putremoveaccountfromcycleEndpoint: ApiEndpoint = {
  "id": "putremoveaccountfromcycle",
  "name": "Remove an account from retry cycle",
  "description": "Stops any active retry cycles associated with the account provided.",
  "method": "PUT",
  "path": "/api/v1/payments/remove_account_from_retry_cycle/{account_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account_id",
      "label": "Account Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: account_id",
      "placeholder": "Enter account id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
