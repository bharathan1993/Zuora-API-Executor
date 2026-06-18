import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const upsertpaymentprofilesEndpoint: ApiEndpoint = {
  "id": "upsertpaymentprofiles",
  "name": "Create or update payment profiles in bulk",
  "description": "Bulk creates payment profiles or updates payment profiles if they already exist.",
  "method": "PUT",
  "path": "/v1/payment-profile",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "bulkPaymentOptionItems",
      "label": "Bulk Payment Option Items",
      "type": "array",
      "required": false,
      "description": "An array of payment profiles you want to create or update.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "subscriptionId",
          "label": "Subscription Id",
          "type": "string",
          "required": false,
          "description": "The ID of the subscription associated with the payment profile fields.",
          "section": "Subscription Settings"
        },
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": false,
          "description": "The ID of the payment method that processes the payment.",
          "section": "Payment Settings"
        },
        {
          "name": "paymentGatewayId",
          "label": "Payment Gateway Id",
          "type": "string",
          "required": false,
          "description": "The ID of the gateway instance that processes the payment.",
          "section": "Payment Settings"
        }
      ],
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
