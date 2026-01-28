import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const putexecuteaccountpaymentsEndpoint: ApiEndpoint = {
  "id": "putexecuteaccountpayments",
  "name": "Execute the account payments",
  "description": "For all active retry cycles associated with an account, schedules the next payment retry attempt to occur in the next hourly payment processor run.",
  "method": "PUT",
  "path": "/api/v1/payments/execute_account_payments/{account_id}",
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
