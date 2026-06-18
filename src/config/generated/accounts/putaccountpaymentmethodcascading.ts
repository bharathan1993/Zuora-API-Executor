import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const putaccountpaymentmethodcascadingEndpoint: ApiEndpoint = {
  "id": "putaccountpaymentmethodcascading",
  "name": "Configure cascading payment methods for an account",
  "description": "Zuora provides the Cascading Payment Method feature to dynamically retry the failed payment with alternative payment methods according to a predefined priority list. Use this API operation to configure the cascading consent for a specified account and set up the priority list of payment methods to be used in Cascading Payment Method.",
  "method": "PUT",
  "path": "/v1/accounts/{account-key}/payment-methods/cascading",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account-key",
      "label": "Account Key",
      "type": "string",
      "required": true,
      "description": "Account ID."
    }
  ],
  "bodyFields": [
    {
      "name": "consent",
      "label": "Consent",
      "type": "boolean",
      "required": false,
      "description": "`true` indicates that you have collected consent from your customer to use the Cascading Payment Method feature. `false` indicates the consent was not collected and the Cascading Payment Method feature is not enabled. The `priorities` field can be specified only if `consent` is `true`.",
      "section": "Additional Fields"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "array",
      "required": false,
      "description": "Container for the priority configuration of payment methods. You can add up to three payment methods to this container. For more information, see Cascade payment methods. `priorities` is required if `consent` is `true`.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": true,
          "description": "The ID of a payment method.",
          "section": "Payment Settings"
        },
        {
          "name": "order",
          "label": "Order",
          "type": "number",
          "required": true,
          "description": "The order of the payment method in the priority list. For example, `1` indicates the payment method is the first one in the priority list, and `2` indicates it is the second. The first payment method in the priority list will be the default payment method of the customer account.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
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
