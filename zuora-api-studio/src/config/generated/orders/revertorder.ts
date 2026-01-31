import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const revertorderEndpoint: ApiEndpoint = {
  "id": "revertorder",
  "name": "Revert an order",
  "description": "Reverts an order though this operation.",
  "method": "POST",
  "path": "/v1/orders/{orderNumber}/revert",
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
  "bodyFields": [
    {
      "name": "orderDate",
      "label": "Order Date",
      "type": "date",
      "required": true,
      "description": "The order date when order is booked in YYYY-MM-DD format.",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
