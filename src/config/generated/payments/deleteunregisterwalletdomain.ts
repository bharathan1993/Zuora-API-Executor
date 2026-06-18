import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deleteunregisterwalletdomainEndpoint: ApiEndpoint = {
  "id": "deleteunregisterwalletdomain",
  "name": "Unregister a wallet domain",
  "description": "Use this operation to unregister a wallet domain.",
  "method": "DELETE",
  "path": "/v1/payment-methods/wallet/domains/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "The ID of the domain, such as `402881a38924ff1001892502da090021`."
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
