import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getomnichannelsubscriptionEndpoint: ApiEndpoint = {
  "id": "getomnichannelsubscription",
  "name": "Retrieve an omnichannel subscription",
  "description": "Retrieves the information about a specific omnichannel subscription. ",
  "method": "GET",
  "path": "/v1/omni-channel-subscriptions/{subscriptionKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscriptionKey",
      "label": "Subscription Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: subscriptionKey",
      "placeholder": "Enter subscription key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
