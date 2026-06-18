import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_postusageEndpoint: ApiEndpoint = {
  "id": "object-postusage",
  "name": "CRUD: Create a usage record",
  "description": "Creates a usage record.",
  "method": "POST",
  "path": "/v1/object/usage",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "rejectUnknownFields",
      "label": "Reject Unknown Fields",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether the call fails if the request body contains unknown fields. With `rejectUnknownFields` set to `true`, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is: ```json { \"message\": \"Error - unrecognised fields\" } ``` By default, Zuora ignores unknown fields in the request body.",
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "AccountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the account associated with the usage data. This field is only required if no value is specified for the `AccountNumber` field. **Character limit**: 32 **Values**: a valid account ID.",
      "section": "Account Settings"
    },
    {
      "name": "AccountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the account associated with the usage data. This field is only required if no value is specified for the `AccountId` field. **Character limit**: 50 **Values**: a valid account number.",
      "section": "Account Settings"
    },
    {
      "name": "ChargeNumber",
      "label": "Charge Number",
      "type": "string",
      "required": false,
      "description": "A unique number for the rate plan charge related to the usage record. For example, C-00000007.",
      "maxLength": 50,
      "section": "Account Settings"
    },
    {
      "name": "ProductRatePlanChargeNumber",
      "label": "Product Rate Plan Charge Number",
      "type": "string",
      "required": false,
      "description": "Specify a product rate plan charge number so that you can charge your customer with a dynamic usage charge for the corresponding uploaded usage record. To use this field, you must set the `X-Zuora-WSDL-Version` request header to `146` or higher. Otherwise, an error occurs. **Note**: This field is only available if you have the Dynamic Usage Charges feature enabled.",
      "section": "Account Settings"
    },
    {
      "name": "SubscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": false,
      "description": "The unique identifier number of the subscription that contains the fees related to the usage data. It is good practice to use this field when creating usage records.",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "ChargeId",
      "label": "Charge Id",
      "type": "string",
      "required": false,
      "description": "The OrginalId of the rate plan charge related to the usage record, e.g., `2c9081a03c63c94c013c6873357a0117` **Character limit**: 32 **Values**: a valid rate plan charge OriginalID.",
      "section": "Additional Fields"
    },
    {
      "name": "Description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "A description of the usage record.",
      "maxLength": 200,
      "section": "Additional Fields"
    },
    {
      "name": "EndDateTime",
      "label": "End Date Time",
      "type": "date",
      "required": false,
      "description": "The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation. **Character limit**: 29 **Values**: a valid date and time value.",
      "section": "Additional Fields"
    },
    {
      "name": "Quantity",
      "label": "Quantity",
      "type": "number",
      "required": true,
      "description": "Indicates the number of units used. **Character limit**: 16 **Values**: A valid decimal amount.",
      "section": "Additional Fields"
    },
    {
      "name": "StartDateTime",
      "label": "Start Date Time",
      "type": "date",
      "required": true,
      "description": "The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the `EndDateTime`, the `StartDateTime` field does affect usage calculation. **Character limit**: 29 **Values**: a valid date and time value",
      "section": "Additional Fields"
    },
    {
      "name": "UOM",
      "label": "U O M",
      "type": "string",
      "required": true,
      "description": "Specifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in **Billing Settings**. **Character limit**: **Values**: a valid unit of measure",
      "section": "Additional Fields"
    },
    {
      "name": "UniqueKey",
      "label": "Unique Key",
      "type": "string",
      "required": false,
      "description": "The unique external reference of the usage record. See [Upload usage record with unique key](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Unbilled_Usage#Upload_usage_record_with_unique_key) for information on how to use this field. **Note**: This field is only available if you set the `X-Zuora-WSDL-Version` request header to `114` or later. This field is only available if you have the Prepaid with Drawdown feature or the Unbilled Usage feature enabled. See [Upload usage record with unique key](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Prepaid_balance_transactions#Upload_usage_record_with_unique_key) for more information.",
      "section": "Additional Fields"
    },
    {
      "name": "SubscriptionId",
      "label": "Subscription Id",
      "type": "string",
      "required": false,
      "description": "The original ID of the subscription that contains the fees related to the usage data. The ID of a subscription might change when you create amendments to the subscription. It is good practice to use the unique subscription number that you can specify in the `SubscriptionNumber` field.",
      "maxLength": 32,
      "section": "Subscription Settings"
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
