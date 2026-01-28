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
      "description": "Path parameter: paymentScheduleKey",
      "placeholder": "Enter payment schedule key"
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
          "description": "The amount that needs to be collected by this payment schedule item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": false,
          "description": "The currency of the payment.\n\n**Note**:\n- This field is optional. If not specified, the default value is the currency set for the account.\n- For custom payments, if Multi-currency is enabled, the payment currency can be different from the account currency for custom payment.\n- For recurring payments, if Multi-currency is enabled, the payment currency can be different from the account currency but should be the same as billing currency for a recurring payment.\n",
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "Description of the payment schedule item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "paymentGatewayId",
          "label": "Payment Gateway Id",
          "type": "string",
          "required": false,
          "description": "The ID of the payment gateway.\n\n**Note**:\n- This field is optional. If not specified, the default value is the payment gateway id set for the account.\n",
          "section": "Payment Settings"
        },
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": false,
          "description": "The ID of the payment method.\n\n**Note**:\n- This field is optional. If not specified, the default value is the payment method id set for the account.\n",
          "section": "Payment Settings"
        },
        {
          "name": "paymentOption",
          "label": "Payment Option",
          "type": "array",
          "required": false,
          "description": "Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported.\n\nHere is an example:\n```\n\"paymentOption\": [\n  {\n    \"type\": \"GatewayOptions\",\n    \"detail\": {\n      \"SecCode\":\"WEB\"\n    }\n  }\n]\n```\n\n`paymentOption` of the payment schedule takes precedence over `paymentOption` of the payment schedule item.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "detail",
              "label": "Detail",
              "type": "object",
              "required": false,
              "description": "The field used to pass the transactional payment data to the gateway side in the key-value format.\n",
              "fields": [
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "The name of the field.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "value",
                  "label": "Value",
                  "type": "string",
                  "required": false,
                  "description": "The value of the field.\n",
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
              "description": "The type of the payment option. Currently, only `GatewayOptions` is supported for specifying Gateway Options fields supported by a payment gateway.\n",
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
          "description": "At which hour of the day in the tenant’s timezone this payment will be collected. Available values:`[0,1,2,~,22,23]`.\nIf the payment `runHour` and `scheduledDate` are backdated, the system will collect the payment when the next runHour occurs.\nThe default value is `0`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "scheduledDate",
          "label": "Scheduled Date",
          "type": "date",
          "required": true,
          "description": "The date to collect the payment.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
