import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentschedulesEndpoint: ApiEndpoint = {
  "id": "post-paymentschedules",
  "name": "Create multiple payment schedules at once",
  "description": "Creates multiple payment schedules at once. You can create both recurring payment schedules and custom payment schedules in one request.",
  "method": "POST",
  "path": "/v1/payment-schedules/batch",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "paymentSchedules",
      "label": "Payment Schedules",
      "type": "array",
      "required": false,
      "description": "Container of the payment schedules to be created.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountId",
          "label": "Account Id",
          "type": "string",
          "required": false,
          "description": "ID of the customer account the payment schedule belongs to. **Note:** `accountId` and `accountNumber` cannot both be `null`. When both fields are specified, the two values must match each other.",
          "section": "Account Settings"
        },
        {
          "name": "accountNumber",
          "label": "Account Number",
          "type": "string",
          "required": false,
          "description": "Account number of the customer account the payment schedule belongs to. **Note:** `accountId` and `accountNumber` cannot both be `null`. When both fields are specified, the two values must match each other.",
          "section": "Account Settings"
        },
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": false,
          "description": "The amount of each payment schedule item in the payment schedule. **Note:** - This field is required when `items` is not specified. - This field will be ignored when `items` is specified. - When creating recurring payment schedules, there are 2 options to specify amounts: - Specify `totalAmount` and `occurrences`, `amount` will be calculated. - Specify `amount` and `occurrences`, `totalAmount` will be calculated. You must specify either `totalAmount` or `amount`. Specifying both fields at the same time is not allowed.",
          "section": "Additional Fields"
        },
        {
          "name": "billingDocument",
          "label": "Billing Document",
          "type": "object",
          "required": false,
          "description": "Object of the billing document with which the payment schedule is associated. **Note:** - This field is optional. If you have the Standalone Payment feature enabled, you can leave this field blank and set `standalone` to `true` to create standalone payments. You can also choose to create unapplied payments by leaving this object blank and setting `standalone` to `false`. - If Standalone Payment is not enabled, leaving this object unspecified will create unapplied payments. - This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `330.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "fields": [
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "description": "ID of the billing document. **Note:** If a billing document is specified, either `id` or `number` of the billing document must be specified. You cannot specify both of them or skip both.",
              "section": "Additional Fields"
            },
            {
              "name": "number",
              "label": "Number",
              "type": "string",
              "required": false,
              "description": "Number of the billing document. **Note:** If a billing document is specified, either `id` or `number` of the billing document must be specified. You cannot specify both of them or skip both.",
              "section": "Account Settings"
            },
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": true,
              "description": "The type of the billing document.",
              "defaultValue": "Invoice",
              "enum": [
                "Invoice",
                "DebitMemo"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "billingDocuments",
          "label": "Billing Documents",
          "type": "array",
          "required": false,
          "description": "Container array of the multiple billing documents associated with the payment schedule. If multiple billing documents are associated to a payment schedule, when collecting the payment schedule item, the payment belongs to the payment schedule item will be applied to billing documents based on the due date of the billing document, in the ascending order.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "description": "ID of the billing document. **Note:** If a billing document is specified, either `id` or `number` of the billing document must be specified. You cannot specify both of them or skip both.",
              "section": "Additional Fields"
            },
            {
              "name": "number",
              "label": "Number",
              "type": "string",
              "required": false,
              "description": "Number of the billing document. If the billing document is a debit memo, it contains the debit memo number. If the billing document is an invoice, it contains the invoice number. **Note:** If a billing document is specified, either `id` or `number` of the billing document must be specified. You cannot specify both of them or skip both.",
              "section": "Account Settings"
            },
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": true,
              "description": "Denotes if the billing document is of the type invoice or debit memo.",
              "enum": [
                "Invoice",
                "DebitMemo"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": false,
          "description": "Currency of the payment schedule. **Note:** - This field is optional. The default value is the account's default currency. - This field will be ignored when `items` is specified. - For custom payments, if Multi-currency is enabled, the payment currency can be different from the account currency for custom payment. - For recurring payments, if Multi-currency is enabled, the payment currency can be different from the account currency but should be the same as billing currency for a recurring payment.",
          "section": "Additional Fields"
        },
        {
          "name": "items",
          "label": "Items",
          "type": "array",
          "required": false,
          "description": "Container array for payment schedule items.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": false,
              "description": "The amount that needs to be collected by this payment schedule item.",
              "section": "Additional Fields"
            },
            {
              "name": "billingDocument",
              "label": "Billing Document",
              "type": "object",
              "required": false,
              "description": "Object for the billing document with which the payment schedule item is associated. **Note:** You must specify the same billing document for all the payment schedule items in one payment schedule.",
              "fields": [
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the billing document. **Note:** If a billing document is specified, one of `id` or `number` must be specified. You cannot specify both of them or or skip both.",
                  "section": "Additional Fields"
                },
                {
                  "name": "number",
                  "label": "Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the billing document. **Note:** If a billing document is specified, one of `id` or `number` must be specified. You cannot specify both of them or skip both.",
                  "section": "Account Settings"
                },
                {
                  "name": "type",
                  "label": "Type",
                  "type": "string",
                  "required": true,
                  "description": "The type of the billing document. The default value is `Invoice`.",
                  "enum": [
                    "Invoice",
                    "DebitMemo"
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Invoice & Document Settings"
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
              "description": "Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported. Here is an example: ``` \"paymentOption\": [ { \"type\": \"GatewayOptions\", \"detail\": { \"SecCode\":\"WEB\" } } ] ``` `paymentOption` of the payment schedule takes precedence over `paymentOption` of the payment schedule item. To enable this field, submit a request at [Zuora Global Support](https://support.zuora.com/). This field is only available if `Zuora-Version` is set to `337.0` or later [available versions](https://developer.zuora.com/api-references/api/overview/#section/API-Versions/Minor-Version).",
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
              "description": "At which hour in the day in the tenant’s timezone this payment will be collected. Available values:`[0,1,2,~,22,23]`. If the time difference between your tenant’s timezone and the timezone where Zuora servers are is not in full hours, for example, 2.5 hours, the payment schedule items will be triggered half hour later than your scheduled time. The default value is `0`. If the payment `runHour` and `scheduledDate` are backdated, the system will collect the payment when the next runHour occurs.",
              "section": "Additional Fields"
            },
            {
              "name": "scheduledDate",
              "label": "Scheduled Date",
              "type": "date",
              "required": false,
              "description": "The date to collect the payment.",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "occurrences",
          "label": "Occurrences",
          "type": "number",
          "required": false,
          "description": "The number of payment schedule item to be created. Maximum value is 1000. **Note:** - This field is required when `items` is not specified. - This field will be ignored when `items` is specified.",
          "section": "Additional Fields"
        },
        {
          "name": "paymentGatewayId",
          "label": "Payment Gateway Id",
          "type": "string",
          "required": false,
          "description": "ID of the payment gateway. **Note:** - This field is optional. The default value is the account's default payment gateway ID. If no payment gateway ID is found on the cusotmer account level, the default value will be the tenant's default payment gateway ID. - This field will be ignored when `items` is specified.",
          "section": "Payment Settings"
        },
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": false,
          "description": "ID of the payment method. **Note:** - This field is optional. The default value is the account's default payment method ID. - This field will be ignored when `items` is specified.",
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
          "name": "paymentScheduleNumber",
          "label": "Payment Schedule Number",
          "type": "string",
          "required": false,
          "description": "You can use this field to specify the number of the payment schedule. Only characters from the following sets are allowed: A-Z, a-z, 0-9, and `-`. Payment numbers must start with a letter. In addition,`-` can only be used at most once and cannot be placed at the beginning or the end of the payment numbers.",
          "section": "Account Settings"
        },
        {
          "name": "period",
          "label": "Period",
          "type": "string",
          "required": false,
          "description": "The frequency for the payment collection since the `startDate`. **Note:** - Thie field is required when `items` is not specified. - This field will be ignored when `items` is specified. - If `startDate` is `30` or `31` and `period` is `Monthly`, when in February, payment schedule will use the last day of February for payment collection.",
          "enum": [
            "Monthly",
            "Weekly",
            "BiWeekly"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "prepayment",
          "label": "Prepayment",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether the payments created by the payment schedule will be used as reserved payments. This field will only be available if the prepaid cash drawdown permission is enabled. See [Prepaid Cash with Drawdown](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Invoicing/JA_Advanced_Consumption_Billing/Prepaid_Cash_with_Drawdown) for more information.",
          "section": "Payment Settings"
        },
        {
          "name": "runHour",
          "label": "Run Hour",
          "type": "number",
          "required": false,
          "description": "Specifies at which hour in the day in the tenant’s time zone when this payment will be collected. Available values: `[0,1,2,~,22,23]`. **Note:** - If the time difference between your tenant’s timezone and the timezone where Zuora servers are is not in full hours, for example, 2.5 hours, the payment schedule items will be triggered half hour later than your scheduled time. - If the payment `runHour` and `scheduledDate` are backdated, the system will collect the payment when the next runHour occurs. - This field is optional. The default value is `0`. - This field will be ignored when `items` is specified.",
          "section": "Additional Fields"
        },
        {
          "name": "standalone",
          "label": "Standalone",
          "type": "boolean",
          "required": false,
          "description": "Indicate whether the payments created by the payment schedule are standalone payments or not. When setting to `true`, standalone payments will be created. When setting to `false`, you can either specify a billing document, or not specifying any billing documents. In the later case, unapplied payments will be created. If set to `null`, standalone payment will be created. **Note**: - This field is only available if the Standalone Payment is enabled. Do not include this field if Standalone Payment is not enabled. - If Standalone Payment is enabled, default value is `true`.",
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": false,
          "description": "The date for the first payment collection. **Note:** - This field is required when `items` is not specified. - This field will be ignored when `items` is specified.",
          "section": "Additional Fields"
        },
        {
          "name": "totalAmount",
          "label": "Total Amount",
          "type": "number",
          "required": false,
          "description": "The total amount of that the payment schedule will collect. This field is only available for recurring payment schedules. **Note**: - When creating recurring payment schedules, there are 2 options to specify amounts: - Specify `totalAmount` and `occurrences`, `amount` will be calculated. - Specify `amount` and `occurrences`, `totalAmount` will be calculated. You must specify either `totalAmount` or `amount`. Specifying both fields at the same time is not allowed. - If the Standalone Payments feature is enabled and `standalone` is set to `true` for the payment schedule, `totalAmount` will be ignored.",
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
