import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updatecreditmemosEndpoint: ApiEndpoint = {
  "id": "put-updatecreditmemos",
  "name": "Update credit memos",
  "description": "**Notes:** ",
  "method": "PUT",
  "path": "/v1/credit-memos/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "memos",
      "label": "Memos",
      "type": "array",
      "required": false,
      "description": "The container for a list of credit memos. The maximum number of credit memos is 50.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "The ID of the credit memo.\n",
          "section": "Additional Fields"
        },
        {
          "name": "autoApplyUponPosting",
          "label": "Auto Apply Upon Posting",
          "type": "boolean",
          "required": false,
          "description": "Whether the credit memo automatically applies to the invoice upon posting.\n",
          "section": "Credit & Settlement Settings"
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
          "name": "excludeFromAutoApplyRules",
          "label": "Exclude From Auto Apply Rules",
          "type": "boolean",
          "required": false,
          "description": "Whether the credit memo is excluded from the rule of automatically applying unapplied credit memos to invoices and debit memos during payment runs. If you set this field to `true`, a payment run does not pick up this credit memo or apply it to other invoices or debit memos.\n",
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "items",
          "label": "Items",
          "type": "array",
          "required": false,
          "description": "Container for credit memo items.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": false,
              "description": "The amount of the credit memo item. For tax-inclusive credit memo items, the amount indicates the credit memo item amount including tax. For tax-exclusive credit memo items, the amount indicates the credit memo item amount excluding tax\n",
              "section": "Additional Fields"
            },
            {
              "name": "comment",
              "label": "Comment",
              "type": "string",
              "required": false,
              "description": "Comments about the credit memo item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "delete",
              "label": "Delete",
              "type": "boolean",
              "required": false,
              "description": "Whether to delete the existing credit memo item.\n\n\n**Note**: To delete a credit memo item, set this field to `true` and specify a credit memo item ID in the `id` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "excludeItemBillingFromRevenueAccounting",
              "label": "Exclude Item Billing From Revenue Accounting",
              "type": "boolean",
              "required": false,
              "description": "The flag to exclude the credit memo item from revenue accounting.\n\n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled. \n",
              "defaultValue": false,
              "section": "Account Settings"
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
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "description": "The ID of the credit memo item. \n- Specify this field when updating or deleting an existing memo item. \n- Do not specify this field when creating a memo item.\n",
              "maxLength": 32,
              "minLength": 32,
              "section": "Additional Fields"
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
              "name": "productRatePlanChargeId",
              "label": "Product Rate Plan Charge Id",
              "type": "string",
              "required": false,
              "description": "The ID of the product rate plan charge that the credit memo is created from.\n\n\n**Note**: Do not specify the credit memo item `id` when specifying this field.\n",
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
              "required": false,
              "description": "The name of the SKU.\n",
              "section": "Account Settings"
            },
            {
              "name": "taxItems",
              "label": "Tax Items",
              "type": "array",
              "required": false,
              "description": "Container for credit memo taxation items.\n",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "amount",
                  "label": "Amount",
                  "type": "number",
                  "required": false,
                  "description": "The amount of the taxation item in the credit memo item.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "financeInformation",
                  "label": "Finance Information",
                  "type": "object",
                  "required": false,
                  "description": "Container for the finance information related to the taxation item in the credit memo item.\n",
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
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": true,
                  "description": "The ID of the taxation item in the credit memo item.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "jurisdiction",
                  "label": "Jurisdiction",
                  "type": "string",
                  "required": false,
                  "description": "The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.\n",
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
                  "name": "taxCode",
                  "label": "Tax Code",
                  "type": "string",
                  "required": false,
                  "description": "The tax code identifies which tax rules and tax rates to apply to a specific credit memo.\n",
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
                  "description": "The type of the tax rate applied to the credit memo.\n",
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
          "name": "transferredToAccounting",
          "label": "Transferred To Accounting",
          "type": "string",
          "required": false,
          "description": "Whether the credit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite. \n",
          "enum": [
            "Processing",
            "Yes",
            "No",
            "Error",
            "Ignore"
          ],
          "section": "Account Settings"
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
        }
      ],
      "section": "Credit & Settlement Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
