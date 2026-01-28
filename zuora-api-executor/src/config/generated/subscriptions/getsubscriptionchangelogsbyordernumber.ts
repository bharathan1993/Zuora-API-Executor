import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsubscriptionchangelogsbyordernumberEndpoint: ApiEndpoint = {
  "id": "getsubscriptionchangelogsbyordernumber",
  "name": "List change histories of subscriptions by order number",
  "description": "List the change histories of single version subscriptions that are included in and processed by an order. Each history maps to a subscription associated with this order.",
  "method": "GET",
  "path": "/v1/subscription-change-logs/orders/{orderNumber}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": true,
      "description": "Path parameter: orderNumber",
      "placeholder": "Enter order number"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
