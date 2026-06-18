import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_creditmemofrominvoiceEndpoint: ApiEndpoint = {
  "id": "post-creditmemofrominvoice",
  "name": "Create a credit memo from an invoice",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/credit-memos/invoice/{invoiceKey}",
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
      "description": "The ID or number of an invoice that you want to create a credit memo from. For example, 2c93808457d787030157e030d10f3f64 or INV00000001."
    }
  ],
  "bodyFields": [
    {
      "name": "autoApplyToInvoiceUponPosting",
      "label": "Auto Apply To Invoice Upon Posting",
      "type": "boolean",
      "required": false,
      "description": "Whether the credit memo automatically applies to the invoice upon posting.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceId",
      "label": "Invoice Id",
      "type": "string",
      "required": true,
      "description": "The ID of the invoice that the credit memo is created from.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "autoPost",
      "label": "Auto Post",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically post the credit memo after it is created. Setting this field to `true`, you do not need to separately call the [Post credit memo](https://developer.zuora.com/api-references/api/operation/PUT_PostCreditMemo) operation to post the credit memo.",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Comments about the credit memo.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "date",
      "required": false,
      "description": "The date when the credit memo takes effect.",
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
          "description": "The amount of the credit memo item.",
          "section": "Additional Fields"
        },
        {
          "name": "financeInformation",
          "label": "Finance Information",
          "type": "object",
          "required": false,
          "description": "Container for the finance information related to the credit memo item.",
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
              "name": "onAccountAccountingCode",
              "label": "On Account Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code that maps to an on account in your accounting system.",
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
          "required": true,
          "description": "The ID of the invoice item.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "number",
          "required": false,
          "description": "The number of units for the credit memo item.",
          "section": "Additional Fields"
        },
        {
          "name": "serviceEndDate",
          "label": "Service End Date",
          "type": "date",
          "required": false,
          "description": "The service end date of the credit memo item.",
          "section": "Additional Fields"
        },
        {
          "name": "serviceStartDate",
          "label": "Service Start Date",
          "type": "date",
          "required": false,
          "description": "The service start date of the credit memo item.",
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
              "required": false,
              "description": "The amount of the credit memo taxation item.",
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
                  "name": "onAccountAccountingCode",
                  "label": "On Account Accounting Code",
                  "type": "string",
                  "required": false,
                  "description": "The accounting code that maps to an on account in your accounting system.",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
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
              "description": "The tax code identifies which tax rules and tax rates to apply to a specific credit memo.",
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
              "description": "The date that the tax is applied to the credit memo, in `yyyy-mm-dd` format.",
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
              "description": "The tax rate applied to the credit memo.",
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
              "description": "The type of the tax rate applied to the credit memo.",
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
          "description": "The tax mode of the credit memo item, indicating whether the amount of the credit memo item includes tax. **Note**: - Only includes the `taxMode` field if the credit memo needs to be processed with a different tax mode than what was processed during invoice generation or the product rate plan charge was defined with. Otherwise, do not specify a tax mode. - You can set this field to `TaxInclusive` only if the `taxAutoCalculation` field is set to `true`. - If you set `taxMode` to `TaxInclusive`, you cannot input tax amounts for credit memo items. The corresponding invoice item must use the same tax engine as the credit memo item to calculate tax amounts.",
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
      "description": "Status of the credit memo's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Origin__NS",
      "label": "Origin N S",
      "type": "string",
      "required": false,
      "description": "Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the credit memo was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Transaction__NS",
      "label": "Transaction N S",
      "type": "string",
      "required": false,
      "description": "Related transaction in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "excludeFromAutoApplyRules",
      "label": "Exclude From Auto Apply Rules",
      "type": "boolean",
      "required": false,
      "description": "Whether the credit memo is excluded from the rule of automatically applying credit memos to invoices.",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "taxAutoCalculation",
      "label": "Tax Auto Calculation",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically calculate taxes in the credit memo.",
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
