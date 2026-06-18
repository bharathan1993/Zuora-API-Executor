import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_additemstocustompaymentscheduleEndpoint: ApiEndpoint = {
  "id": "post-additemstocustompaymentschedule",
  "name": "Add payment schedule items to a custom payment schedule",
  "description": "Adds payment schedule items to a custom payment schedule. You cannot use this operation to add payment schedule items to recurring payment schedules.",
  "method": "POST",
  "path": "/v1/payment-schedules/{paymentScheduleKey}/items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentScheduleKey",
      "label": "Payment Schedule Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or number of a payment schedule. For example, `8a90857b822459cd018224dcb9eb13be`, or `PS-00000007`."
    }
  ],
  "bodyFields": [
    {
      "name": "items",
      "label": "Items",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The amount that needs to be collected by this payment schedule item.",
          "section": "Additional Fields"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": false,
          "description": "The currency of the payment. **Note**: - This field is optional. If not specified, the default value is the currency set for the account. - For custom payments, if Multi-currency is enabled, the payment currency can be different from the account currency for custom payment. - For recurring payments, if Multi-currency is enabled, the payment currency can be different from the account currency but should be the same as billing currency for a recurring payment.",
          "section": "Additional Fields"
        },
        {
          "name": "paymentGatewayId",
          "label": "Payment Gateway Id",
          "type": "string",
          "required": false,
          "description": "The ID of the payment gateway. **Note**: - This field is optional. If not specified, the default value is the payment gateway id set for the account.",
          "section": "Payment Settings"
        },
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": false,
          "description": "The ID of the payment method. **Note**: - This field is optional. If not specified, the default value is the payment method id set for the account.",
          "section": "Payment Settings"
        },
        {
          "name": "paymentOption",
          "label": "Payment Option",
          "type": "array",
          "required": false,
          "description": "Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported. Here is an example: ``` \"paymentOption\": [ { \"type\": \"GatewayOptions\", \"detail\": { \"SecCode\":\"WEB\" } } ] ``` `paymentOption` of the payment schedule takes precedence over `paymentOption` of the payment schedule item.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "detail",
              "label": "Detail",
              "type": "object",
              "required": false,
              "description": "The field used to pass the transactional payment data to the gateway side in the key-value format.",
              "fields": [
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "The name of the field.",
                  "section": "Additional Fields"
                },
                {
                  "name": "value",
                  "label": "Value",
                  "type": "string",
                  "required": false,
                  "description": "The value of the field.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": false,
              "description": "The type of the payment option. Currently, only `GatewayOptions` is supported for specifying Gateway Options fields supported by a payment gateway.",
              "section": "Additional Fields"
            }
          ],
          "section": "Payment Settings"
        },
        {
          "name": "runHour",
          "label": "Run Hour",
          "type": "string",
          "required": false,
          "description": "At which hour of the day in the tenant’s timezone this payment will be collected. Available values:`[0,1,2,~,22,23]`. If the payment `runHour` and `scheduledDate` are backdated, the system will collect the payment when the next runHour occurs. The default value is `0`.",
          "section": "Additional Fields"
        },
        {
          "name": "scheduledDate",
          "label": "Scheduled Date",
          "type": "date",
          "required": true,
          "description": "The date to collect the payment.",
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
