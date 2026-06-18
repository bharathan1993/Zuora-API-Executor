import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_debitmemofrominvoiceEndpoint: ApiEndpoint = {
  "id": "post-debitmemofrominvoice",
  "name": "Create a debit memo from an invoice",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/debit-memos/invoice/{invoiceKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true,
      "description": "The ID or number of an invoice that you want to create a debit memo from. For example, 2c93808457d787030157e030d10f3f64 or INV00000001."
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
      "name": "autoPost",
      "label": "Auto Post",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically post the debit memo after it is created. Setting this field to `true`, you do not need to separately call the [Post debit memo](https://developer.zuora.com/api-references/api/operation/PUT_PostDebitMemo) operation to post the debit memo.",
      "defaultValue": false,
      "section": "Additional Fields"
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
      "description": "Container for items. The maximum number of items is 1,000.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The amount of the debit memo item.",
          "section": "Additional Fields"
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
          "name": "invoiceItemId",
          "label": "Invoice Item Id",
          "type": "string",
          "required": false,
          "description": "The ID of the invoice item.",
          "section": "Invoice & Document Settings"
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
          "required": true,
          "description": "The name of the charge associated with the invoice.",
          "section": "Account Settings"
        },
        {
          "name": "taxItems",
          "label": "Tax Items",
          "type": "array",
          "required": false,
          "description": "Container for taxation items.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": true,
              "description": "The amount of the debit memo taxation item.",
              "section": "Additional Fields"
            },
            {
              "name": "financeInformation",
              "label": "Finance Information",
              "type": "object",
              "required": false,
              "description": "Container for the finance information related to the source taxation item.",
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
              "name": "sourceTaxItemId",
              "label": "Source Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the source taxation item.",
              "section": "Tax Settings"
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
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "The tax mode of the debit memo item, indicating whether the amount of the debit memo item includes tax. **Note**: You can set this field to `TaxInclusive` only if the `taxAutoCalculation` field is set to `true`. If you set `taxMode` to `TaxInclusive`, you cannot input tax amounts for debit memo items. The corresponding invoice item must use the same tax engine as the debit memo item to calculate tax amounts.",
          "defaultValue": "TaxExclusive",
          "enum": [
            "TaxExclusive",
            "TaxInclusive"
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
      "description": "A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.",
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
      "name": "billToContactId",
      "label": "Bill To Contact Id",
      "type": "string",
      "required": false,
      "description": "The ID of the bill-to contact associated with the debit memo. **Note**: This field is available only if you have Flexible Billing Attributes enabled for your tenant.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceId",
      "label": "Invoice Id",
      "type": "string",
      "required": true,
      "description": "The ID of the invoice that the debit memo is created from.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "soldToSameAsBillTo",
      "label": "Sold To Same As Bill To",
      "type": "boolean",
      "required": false,
      "description": "Whether the sold-to contact and bill-to contact are the same entity. The created debit memo has the same bill-to contact and sold-to contact entity only when all the following conditions are met in the request body: - This field is set to `true`. - The `billToContactId` field is specified. - The `soldToContactId` field is not specified.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "soldToContactId",
      "label": "Sold To Contact Id",
      "type": "string",
      "required": false,
      "description": "The ID of the sold-to contact associated with the debit memo. **Note**: This field is available only if you have Flexible Billing Attributes enabled for your tenant.",
      "section": "Contact Information"
    },
    {
      "name": "taxAutoCalculation",
      "label": "Tax Auto Calculation",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically calculate taxes in the debit memo.",
      "defaultValue": true,
      "section": "Tax Settings"
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
