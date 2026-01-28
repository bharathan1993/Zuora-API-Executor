import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsubscriptionchangelogsbysubscriptionnumberEndpoint: ApiEndpoint = {
  "id": "getsubscriptionchangelogsbysubscriptionnumber",
  "name": "List change histories of a subscription",
  "description": "Lists subscription change histories of a single version subscription. Each history maps to an order.",
  "method": "GET",
  "path": "/v1/subscription-change-logs/{subscriptionNumber}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": true,
      "description": "Path parameter: subscriptionNumber",
      "placeholder": "Enter subscription number"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
