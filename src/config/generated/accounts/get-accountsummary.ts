import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_accountsummaryEndpoint: ApiEndpoint = {
  "id": "get-accountsummary",
  "name": "Retrieve an account summary",
  "description": "Retrieves detailed information about the specified customer account.",
  "method": "GET",
  "path": "/v1/accounts/{account-key}/summary",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account-key",
      "label": "Account Key",
      "type": "string",
      "required": true,
      "description": "Account number or account ID."
    }
  ],
  "queryParams": [
    {
      "name": "excludeUsage",
      "label": "Exclude Usage",
      "type": "boolean",
      "required": false,
      "description": "Indicate whether to exclude usage information in the response. The default value is `false`."
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
