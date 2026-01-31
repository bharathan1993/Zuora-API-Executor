import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_retrypaymentscheduleitemEndpoint: ApiEndpoint = {
  "id": "post-retrypaymentscheduleitem",
  "name": "Retry failed payment schedule items",
  "description": "Retries failed payment schedule items. The payment method and payment gateway of the failed payment can be updated to new values before the retry.",
  "method": "POST",
  "path": "/v1/payment-schedule-items/retry-payment",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "items",
      "label": "Items",
      "type": "array",
      "required": false,
      "description": "The maximum number of items allowable to pass is 10.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "Specifies the ID of the payment schedule item to be retried.\n",
          "section": "Additional Fields"
        },
        {
          "name": "paymentGatewayId",
          "label": "Payment Gateway Id",
          "type": "string",
          "required": false,
          "description": "Specifies the ID of a payment gateway that will be used in the retry.\n",
          "section": "Payment Settings"
        },
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": false,
          "description": "Specifies the ID of a payment method that will be used in the retry.\n",
          "section": "Payment Settings"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
