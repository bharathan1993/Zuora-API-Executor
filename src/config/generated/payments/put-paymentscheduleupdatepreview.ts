import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentscheduleupdatepreviewEndpoint: ApiEndpoint = {
  "id": "put-paymentscheduleupdatepreview",
  "name": "Preview the result of payment schedule updates",
  "description": "Preview the result of a payment schedule update. This operation only provides a preview. No changes will be made to the database. For custom payment schedules, only the custom fields on the payment schedules can be udpated. Use the [Update a payment schedule item](https://developer.zuora.com/api-references/api/tag/PUT_PaymentScheduleItem) operation to update payment schedule items of custom payment schedule.",
  "method": "PUT",
  "path": "/v1/payment-schedules/{paymentScheduleKey}/preview",
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
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": false,
      "description": "Indicates the updated amount of the pending payment schedule items.",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "description": "Indicates the updated currency of the pending payment schedule items.",
      "section": "Additional Fields"
    },
    {
      "name": "occurrences",
      "label": "Occurrences",
      "type": "number",
      "required": false,
      "description": "Indicates the updated number of payment schedule items that are created by the payment schedule.",
      "section": "Additional Fields"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "string",
      "required": false,
      "description": "Indicates the updated period of the pending payment schedule items.",
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
      "description": "Indicates the updated collection date for the next pending payment schedule item.",
      "section": "Additional Fields"
    },
    {
      "name": "runHour",
      "label": "Run Hour",
      "type": "number",
      "required": false,
      "description": "Specifies at which hour of the day in the tenant’s time zone this payment will be collected. Available values: `[0,1,2,~,22,23]`. If the time difference between your tenant’s timezone and the timezone where Zuora servers are is not in full hours, for example, 2.5 hours, the payment schedule items will be triggered half hour later than your scheduled time. If the payment `runHour` and `scheduledDate` are backdated, the system will collect the payment when the next runHour occurs.",
      "section": "Additional Fields"
    },
    {
      "name": "paymentGatewayId",
      "label": "Payment Gateway Id",
      "type": "string",
      "required": false,
      "description": "Indicates the updated payment gateway ID of the pending payment schedule items.",
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethodId",
      "label": "Payment Method Id",
      "type": "string",
      "required": false,
      "description": "Indicates the updated payment method ID of the pending payment schedule items.",
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
