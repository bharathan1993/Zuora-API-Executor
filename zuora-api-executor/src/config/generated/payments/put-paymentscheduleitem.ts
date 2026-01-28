import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentscheduleitemEndpoint: ApiEndpoint = {
  "id": "put-paymentscheduleitem",
  "name": "Update a payment schedule item",
  "description": "Updates a payment schedule item by ID.",
  "method": "PUT",
  "path": "/v1/payment-schedule-items/{psi-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "psi-id",
      "label": "Psi Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: psi-id",
      "placeholder": "Enter psi id"
    }
  ],
  "bodyFields": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": false,
      "description": "The amount of the payment.\n",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "description": "The currency of the payment.   \n\n**Note:**\n\n- For custom payments, if Multi-currency is enabled, the payment currency can be different from the account currency for custom payment.\n\n- For recurring payments, if Multi-currency is enabled, the payment currency can be different from the account currency but should be the same as billing currency for a recurring payment.\n  \n",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "The description of the payment schedule item.\n",
      "section": "Additional Fields"
    },
    {
      "name": "runHour",
      "label": "Run Hour",
      "type": "number",
      "required": false,
      "description": "At which hour of the day in the tenant’s timezone this payment will be collected. If the payment `runHour` and `scheduledDate` are backdated, the system will collect the payment when the next runHour occurs.\n",
      "section": "Additional Fields"
    },
    {
      "name": "scheduledDate",
      "label": "Scheduled Date",
      "type": "date",
      "required": false,
      "description": "The scheduled date when the payment is processed.\n",
      "section": "Additional Fields"
    },
    {
      "name": "linkPayments",
      "label": "Link Payments",
      "type": "array",
      "required": false,
      "description": "Container for payments linked to the payment schedule item.\n",
      "itemType": "string",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGatewayId",
      "label": "Payment Gateway Id",
      "type": "string",
      "required": false,
      "description": "ID of the payment gateway of the payment schedule item.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethodId",
      "label": "Payment Method Id",
      "type": "string",
      "required": false,
      "description": "ID of the payment method of the payment schedule item.\n",
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
      "name": "unlinkPayments",
      "label": "Unlink Payments",
      "type": "array",
      "required": false,
      "description": "Container for payments to be unlinked from the payment schedule item.\n",
      "itemType": "string",
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
