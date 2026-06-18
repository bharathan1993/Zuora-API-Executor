import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_debitmemoEndpoint: ApiEndpoint = {
  "id": "put-debitmemo",
  "name": "Update a debit memo",
  "description": "**Notes:**",
  "method": "PUT",
  "path": "/v1/debit-memos/{debitMemoKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoKey",
      "label": "Debit Memo Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or number of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e or DM00000001."
    }
  ],
  "bodyFields": [
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "description": "Whether debit memos are automatically picked up for processing in the corresponding payment run. By default, debit memos are automatically picked up for processing in the corresponding payment run.",
      "section": "Payment Settings"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Comments about the debit memo.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "dueDate",
      "label": "Due Date",
      "type": "date",
      "required": false,
      "description": "The date by which the payment for the debit memo is due, in `yyyy-mm-dd` format.",
      "section": "Additional Fields"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "date",
      "required": false,
      "description": "The date when the debit memo takes effect.",
      "section": "Additional Fields"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "array",
      "required": false,
      "description": "Container for debit memo items.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": false,
          "description": "The amount of the debit memo item. For tax-inclusive debit memo items, the amount indicates the debit memo item amount including tax. For tax-exclusive debit memo items, the amount indicates the debit memo item amount excluding tax.",
          "section": "Additional Fields"
        },
        {
          "name": "comment",
          "label": "Comment",
          "type": "string",
          "required": false,
          "description": "Comments about the debit memo item.",
          "section": "Additional Fields"
        },
        {
          "name": "delete",
          "label": "Delete",
          "type": "boolean",
          "required": false,
          "description": "Whether to delete the existing debit memo item. **Note**: To delete a debit memo item, set this field to `true` and specify a debit memo item ID in the `id` field.",
          "section": "Additional Fields"
        },
        {
          "name": "excludeItemBillingFromRevenueAccounting",
          "label": "Exclude Item Billing From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude the debit memo item from revenue accounting. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "financeInformation",
          "label": "Finance Information",
          "type": "object",
          "required": false,
          "description": "Container for the finance information related to the debit memo item.",
          "fields": [
            {
              "name": "deferredRevenueAccountingCode",
              "label": "Deferred Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the deferred revenue, such as Monthly Recurring Liability.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "recognizedRevenueAccountingCode",
              "label": "Recognized Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "revenueRecognitionRuleName",
              "label": "Revenue Recognition Rule Name",
              "type": "string",
              "required": false,
              "description": "The name of the revenue recognition rule governing the revenue schedule.",
              "maxLength": 100,
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "The ID of the debit memo item. - Specify this field when updating or deleting an existing memo item. - Do not specify this field when creating a memo item.",
          "maxLength": 32,
          "minLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanChargeId",
          "label": "Product Rate Plan Charge Id",
          "type": "string",
          "required": false,
          "description": "The ID of the product rate plan charge that the debit memo is created from. **Note**: Do not specify the debit memo item `id` when specifying this field.",
          "section": "Additional Fields"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "number",
          "required": false,
          "description": "The number of units for the debit memo item.",
          "section": "Additional Fields"
        },
        {
          "name": "serviceEndDate",
          "label": "Service End Date",
          "type": "date",
          "required": false,
          "description": "The service end date of the debit memo item.",
          "section": "Additional Fields"
        },
        {
          "name": "serviceStartDate",
          "label": "Service Start Date",
          "type": "date",
          "required": false,
          "description": "The service start date of the debit memo item.",
          "section": "Additional Fields"
        },
        {
          "name": "skuName",
          "label": "Sku Name",
          "type": "string",
          "required": false,
          "description": "The name of the SKU.",
          "section": "Account Settings"
        },
        {
          "name": "taxItems",
          "label": "Tax Items",
          "type": "array",
          "required": false,
          "description": "Container for debit memo taxation items.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": false,
              "description": "The amount of the taxation item in the debit memo item.",
              "section": "Additional Fields"
            },
            {
              "name": "financeInformation",
              "label": "Finance Information",
              "type": "object",
              "required": false,
              "description": "Container for the finance information related to the taxation item in the debit memo item.",
              "fields": [
                {
                  "name": "salesTaxPayableAccountingCode",
                  "label": "Sales Tax Payable Accounting Code",
                  "type": "string",
                  "required": false,
                  "description": "The accounting code for the sales taxes payable.",
                  "maxLength": 100,
                  "section": "Account Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": true,
              "description": "The ID of the taxation item in the debit memo item.",
              "section": "Additional Fields"
            },
            {
              "name": "jurisdiction",
              "label": "Jurisdiction",
              "type": "string",
              "required": false,
              "description": "The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.",
              "section": "Additional Fields"
            },
            {
              "name": "locationCode",
              "label": "Location Code",
              "type": "string",
              "required": false,
              "description": "The identifier for the location based on the value of the `taxCode` field.",
              "section": "Additional Fields"
            },
            {
              "name": "taxCode",
              "label": "Tax Code",
              "type": "string",
              "required": false,
              "description": "The tax code identifies which tax rules and tax rates to apply to a specific debit memo.",
              "section": "Tax Settings"
            },
            {
              "name": "taxCodeDescription",
              "label": "Tax Code Description",
              "type": "string",
              "required": false,
              "description": "The description of the tax code.",
              "section": "Tax Settings"
            },
            {
              "name": "taxDate",
              "label": "Tax Date",
              "type": "date",
              "required": false,
              "description": "The date that the tax is applied to the debit memo, in `yyyy-mm-dd` format.",
              "section": "Tax Settings"
            },
            {
              "name": "taxExemptAmount",
              "label": "Tax Exempt Amount",
              "type": "number",
              "required": false,
              "description": "The calculated tax amount excluded due to the exemption.",
              "section": "Tax Settings"
            },
            {
              "name": "taxName",
              "label": "Tax Name",
              "type": "string",
              "required": false,
              "description": "The name of taxation.",
              "section": "Account Settings"
            },
            {
              "name": "taxRate",
              "label": "Tax Rate",
              "type": "number",
              "required": false,
              "description": "The tax rate applied to the debit memo.",
              "section": "Tax Settings"
            },
            {
              "name": "taxRateDescription",
              "label": "Tax Rate Description",
              "type": "string",
              "required": false,
              "description": "The description of the tax rate.",
              "section": "Tax Settings"
            },
            {
              "name": "taxRateType",
              "label": "Tax Rate Type",
              "type": "string",
              "required": false,
              "description": "The type of the tax rate applied to the debit memo.",
              "enum": [
                "Percentage",
                "FlatFee"
              ],
              "section": "Tax Settings"
            }
          ],
          "section": "Tax Settings"
        },
        {
          "name": "unitOfMeasure",
          "label": "Unit Of Measure",
          "type": "string",
          "required": false,
          "description": "The definable unit that you measure when determining charges.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "reasonCode",
      "label": "Reason Code",
      "type": "string",
      "required": false,
      "description": "A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code",
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "description": "Status of the debit memo's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the debit memo was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "description": "Whether the debit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.",
      "enum": [
        "Processing",
        "Yes",
        "No",
        "Error",
        "Ignore"
      ],
      "section": "Account Settings"
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
