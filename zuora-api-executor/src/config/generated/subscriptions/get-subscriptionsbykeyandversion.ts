import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_subscriptionsbykeyandversionEndpoint: ApiEndpoint = {
  "id": "get-subscriptionsbykeyandversion",
  "name": "Retrieve a subscription by key and version",
  "description": "This REST API reference describes how to retrieve detailed information about a specified subscription in a specified version. When you create a subscription amendment, you create a new version of the subscription. You can use this method to retrieve information about a subscription in any version.",
  "method": "GET",
  "path": "/v1/subscriptions/{subscription-key}/versions/{version}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscription-key",
      "label": "Subscription Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: subscription-key",
      "placeholder": "Enter subscription key"
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true,
      "description": "Path parameter: version",
      "placeholder": "Enter version"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
