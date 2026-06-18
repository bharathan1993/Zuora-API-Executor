import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_subscription_adjustmentsEndpoint: ApiEndpoint = {
  "id": "get-subscription-adjustments",
  "name": "List all delivery adjustments of a subscription",
  "description": "Describes how to retrieve detailed information about delivery adjustments of a subscription.",
  "method": "GET",
  "path": "/v1/adjustments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "subscription-number",
      "label": "Subscription Number",
      "type": "string",
      "required": true,
      "description": "A subscription number."
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
