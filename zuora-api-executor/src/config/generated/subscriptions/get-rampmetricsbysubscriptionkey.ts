import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_rampmetricsbysubscriptionkeyEndpoint: ApiEndpoint = {
  "id": "get-rampmetricsbysubscriptionkey",
  "name": "List ramp metrics by subscription key",
  "description": "**Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information coming October 2020.",
  "method": "GET",
  "path": "/v1/subscriptions/{subscriptionKey}/ramp-metrics",
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
