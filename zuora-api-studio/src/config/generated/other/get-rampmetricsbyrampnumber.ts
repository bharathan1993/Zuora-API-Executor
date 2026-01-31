import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_rampmetricsbyrampnumberEndpoint: ApiEndpoint = {
  "id": "get-rampmetricsbyrampnumber",
  "name": "List all ramp metrics of a ramp",
  "description": "**Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information coming October 2020.",
  "method": "GET",
  "path": "/v1/ramps/{rampNumber}/ramp-metrics",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "rampNumber",
      "label": "Ramp Number",
      "type": "string",
      "required": true,
      "description": "Path parameter: rampNumber",
      "placeholder": "Enter ramp number"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
