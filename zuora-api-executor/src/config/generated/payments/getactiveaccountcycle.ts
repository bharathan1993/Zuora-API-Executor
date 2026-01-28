import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getactiveaccountcycleEndpoint: ApiEndpoint = {
  "id": "getactiveaccountcycle",
  "name": "List the active retry cycles for an account",
  "description": "Gets information of active retry cycles that have not been completed for an account in Configurable Payment Retry.",
  "method": "GET",
  "path": "/api/v1/payments/active_account_cycle_information/{account_id}",
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
