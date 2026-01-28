import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_creditmemofrominvoiceEndpoint: ApiEndpoint = {
  "id": "post-creditmemofrominvoice",
  "name": "Create a credit memo from an invoice",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. ",
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
      "description": "Path parameter: invoiceKey",
      "placeholder": "Enter invoice key"
    }
  ],
  "bodyFields": [
    {
      "name": "autoApplyToInvoiceUponPosting",
      "label": "Auto Apply To Invoice Upon Posting",
      "type": "boolean",
      "required": false,
      "description": "Whether the credit memo automatically applies to the invoice upon posting.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceId",
      "label": "Invoice Id",
      "type": "string",
      "required": true,
      "description": "The ID of the invoice that the credit memo is created from.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "autoPost",
      "label": "Auto Post",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically post the credit memo after it is created. \nSetting this field to `true`, you do not need to separately call the [Post credit memo](https://developer.zuora.com/api-references/api/operation/PUT_PostCreditMemo) operation to post the credit memo.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Comments about the credit memo.\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "date",
      "required": false,
      "description": "The date when the credit memo takes effect.\n",
      "section": "Additional Fields"
    },
    {
      "name": "items",
      "label": "Items",
      "type": "array",
      "required": false,
      "description": "Container for items. The maximum number of items is 1,000.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The amount of the credit memo item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "The description of the credit memo item.\n**Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `257.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n",
          "section": "Additional Fields"
        },
        {
          "name": "financeInformation",
          "label": "Finance Information",
          "type": "object",
          "required": false,
          "description": "Container for the finance information related to the credit memo item.\n",
          "fields": [
            {
              "name": "deferredRevenueAccountingCode",
              "label": "Deferred Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the deferred revenue, such as Monthly Recurring Liability.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "onAccountAccountingCode",
              "label": "On Account Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code that maps to an on account in your accounting system.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "recognizedRevenueAccountingCode",
              "label": "Recognized Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "revenueRecognitionRuleName",
              "label": "Revenue Recognition Rule Name",
              "type": "string",
              "required": false,
              "description": "The name of the revenue recognition rule governing the revenue schedule.\n",
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
          "description": "The ID of the invoice item.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "number",
          "required": false,
          "description": "The number of units for the credit memo item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "serviceEndDate",
          "label": "Service End Date",
          "type": "date",
          "required": false,
          "description": "The service end date of the credit memo item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "serviceStartDate",
          "label": "Service Start Date",
          "type": "date",
          "required": false,
          "description": "The service start date of the credit memo item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "skuName",
          "label": "Sku Name",
          "type": "string",
          "required": true,
          "description": "The name of the charge associated with the invoice.\n",
          "section": "Account Settings"
        },
        {
          "name": "taxItems",
          "label": "Tax Items",
          "type": "array",
          "required": false,
          "description": "Container for taxation items.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": false,
              "description": "The amount of the credit memo taxation item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "financeInformation",
              "label": "Finance Information",
              "type": "object",
              "required": false,
              "description": "Container for the finance information related to the source taxation item.\n",
              "fields": [
                {
                  "name": "onAccountAccountingCode",
                  "label": "On Account Accounting Code",
                  "type": "string",
                  "required": false,
                  "description": "The accounting code that maps to an on account in your accounting system.\n",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "salesTaxPayableAccountingCode",
                  "label": "Sales Tax Payable Accounting Code",
                  "type": "string",
                  "required": false,
                  "description": "The accounting code for the sales taxes payable.\n",
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
              "description": "The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. \n",
              "section": "Additional Fields"
            },
            {
              "name": "locationCode",
              "label": "Location Code",
              "type": "string",
              "required": false,
              "description": "The identifier for the location based on the value of the `taxCode` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "sourceTaxItemId",
              "label": "Source Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the source taxation item.\n",
              "section": "Tax Settings"
            },
            {
              "name": "taxCode",
              "label": "Tax Code",
              "type": "string",
              "required": false,
              "description": "The tax code identifies which tax rules and tax rates to apply to a specific credit memo. \n",
              "section": "Tax Settings"
            },
            {
              "name": "taxCodeDescription",
              "label": "Tax Code Description",
              "type": "string",
              "required": false,
              "description": "The description of the tax code.\n",
              "section": "Tax Settings"
            },
            {
              "name": "taxDate",
              "label": "Tax Date",
              "type": "date",
              "required": false,
              "description": "The date that the tax is applied to the credit memo, in `yyyy-mm-dd` format.\n",
              "section": "Tax Settings"
            },
            {
              "name": "taxExemptAmount",
              "label": "Tax Exempt Amount",
              "type": "number",
              "required": false,
              "description": "The calculated tax amount excluded due to the exemption.\n",
              "section": "Tax Settings"
            },
            {
              "name": "taxName",
              "label": "Tax Name",
              "type": "string",
              "required": false,
              "description": "The name of taxation.\n",
              "section": "Account Settings"
            },
            {
              "name": "taxRate",
              "label": "Tax Rate",
              "type": "number",
              "required": false,
              "description": "The tax rate applied to the credit memo.\n",
              "section": "Tax Settings"
            },
            {
              "name": "taxRateDescription",
              "label": "Tax Rate Description",
              "type": "string",
              "required": false,
              "description": "The description of the tax rate. \n",
              "section": "Tax Settings"
            },
            {
              "name": "taxRateType",
              "label": "Tax Rate Type",
              "type": "string",
              "required": false,
              "description": "The type of the tax rate applied to the credit memo. \n",
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
          "description": "The tax mode of the credit memo item, indicating whether the amount of the credit memo item includes tax.\n**Note**: \n  - Only includes the `taxMode` field if the credit memo needs to be processed with a different tax mode than what was processed during invoice generation or the product rate plan charge was defined with. Otherwise, do not specify a tax mode.\n  - You can set this field to `TaxInclusive` only if the `taxAutoCalculation` field is set to `true`.\n  - If you set `taxMode` to `TaxInclusive`, you cannot input tax amounts for credit memo items. The corresponding invoice item must use the same tax engine as the credit memo item to calculate tax amounts.\n",
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
          "description": "The definable unit that you measure when determining charges.\n",
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
      "description": "A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.\n",
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "description": "Status of the credit memo's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Origin__NS",
      "label": "Origin N S",
      "type": "string",
      "required": false,
      "description": "Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the credit memo was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Transaction__NS",
      "label": "Transaction N S",
      "type": "string",
      "required": false,
      "description": "Related transaction in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "excludeFromAutoApplyRules",
      "label": "Exclude From Auto Apply Rules",
      "type": "boolean",
      "required": false,
      "description": "Whether the credit memo is excluded from the rule of automatically applying credit memos to invoices.\n",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "taxAutoCalculation",
      "label": "Tax Auto Calculation",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically calculate taxes in the credit memo.\n",
      "defaultValue": true,
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
