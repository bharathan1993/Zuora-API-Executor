import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentscheduleEndpoint: ApiEndpoint = {
  "id": "put-paymentschedule",
  "name": "Update a payment schedule",
  "description": "Updates a payment schedule. For custom payment schedules, only the custom fields on the payment schedules can be udpated. Use the [Update a payment schedule item](https://developer.zuora.com/api-references/api/operation/PUT_PaymentScheduleItem/) operation to update payment schedule items of custom payment schedule.",
  "method": "PUT",
  "path": "/v1/payment-schedules/{paymentScheduleKey}",
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
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": false,
      "description": "Indicates the updated amount of the pending payment schedule items.\n",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "description": "Indicates the updated currency of the pending payment schedule items.   \n**Note:**\n- For custom payments, if Multi-currency is enabled, the payment currency can be different from the account currency for custom payment.\n- For recurring payments, if Multi-currency is enabled, the payment currency can be different from the account currency but should be the same as billing currency for a recurring payment.\n  \n",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "Description of the payment schedule.\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "occurrences",
      "label": "Occurrences",
      "type": "number",
      "required": false,
      "description": "Indicates the updated number of payment schedule items that are created by the payment schedule.\n\n**Note:**\n  - If \"updated `occurrences` > existing `occurrences`\", the following number of pending payment schedule item will be added to the payment schedule: “updated `occurrences` - existing `occurrences`”.\n  - If \"existing `occurrences` > updated `occurrences` >= the number of `processed`/`errored`/`canceled` payment schedule items\", the following number of pending items will be removed by descending order of the schedule dates: \"existing `occurrences` - updated `occurrences`\".\n  - If \"updated `occurrences` < the number of `processed`/`erroed`/`canceled` payment schedule items\", a validation error will be returned.\n",
      "section": "Additional Fields"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "string",
      "required": false,
      "description": "Indicates the updated period of the pending payment schedule items.\n",
      "enum": [
        "Monthly",
        "Weekly",
        "BiWeekly"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "periodStartDate",
      "label": "Period Start Date",
      "type": "date",
      "required": false,
      "description": "Indicates the updated collection date for the next pending payment schedule item.\n",
      "section": "Additional Fields"
    },
    {
      "name": "runHour",
      "label": "Run Hour",
      "type": "number",
      "required": false,
      "description": "Specifies at which hour of the day in the tenant’s time zone this payment will be collected. Available values: `[0,1,2,~,22,23]`.\n  \nIf the time difference between your tenant’s timezone and the timezone where Zuora servers are is not in full hours, for example, 2.5 hours, the payment schedule items will be triggered half hour later than your scheduled time. If the payment `runHour` and `scheduledDate` are backdated, the system will collect the payment when the next runHour occurs.\n",
      "section": "Additional Fields"
    },
    {
      "name": "paymentGatewayId",
      "label": "Payment Gateway Id",
      "type": "string",
      "required": false,
      "description": "Indicates the updated payment gateway ID of the pending payment schedule items.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethodId",
      "label": "Payment Method Id",
      "type": "string",
      "required": false,
      "description": "Indicates the updated payment method ID of the pending payment schedule items. \n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentOption",
      "label": "Payment Option",
      "type": "array",
      "required": false,
      "description": "Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported.\n\nHere is an example:\n```\n\"paymentOption\": [\n  {\n    \"type\": \"GatewayOptions\",\n    \"detail\": {\n      \"SecCode\":\"WEB\"\n    }\n  }\n]\n```\n\n`paymentOption` of the payment schedule takes precedence over `paymentOption` of the payment schedule item.\n\n **Note:** To enable this field, submit a request at [Zuora Global Support](https://support.zuora.com/).\n",
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
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
