import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsubscriptionchangelogbyversionEndpoint: ApiEndpoint = {
  "id": "getsubscriptionchangelogbyversion",
  "name": "Retrieve a change history of a subscription by version",
  "description": "Retrieves the change history of a single version subscription by version. This version indicates the creation sequence of the orders associated with the subscription and starts from `1`. ",
  "method": "GET",
  "path": "/v1/subscription-change-logs/{subscriptionNumber}/versions/{version}",
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
