import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_creditmemofromprpcEndpoint: ApiEndpoint = {
  "id": "post-creditmemofromprpc",
  "name": "Create a credit memo from a charge",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/credit-memos",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the account associated with the credit memo. **Note**: When creating credit memos from product rate plan charges, you must specify `accountNumber`, `accountId`, or both in the request body. If both fields are specified, they must correspond to the same account.",
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the customer account associated with the credit memo. **Note**: When creating credit memos from product rate plan charges, you must specify `accountNumber`, `accountId`, or both in the request body. If both fields are specified, they must correspond to the same account.",
      "section": "Account Settings"
    },
    {
      "name": "number",
      "label": "Number",
      "type": "string",
      "required": false,
      "description": "A customized credit memo number with the following format requirements: - Max length: 32 characters - Acceptable characters: a-z,A-Z,0-9,-,_ The value must be unique in the system, otherwise it may cause issues with bill runs and subscriptions. If not provided, Zuora will generate a unique number per the sequence set on the account level. If the account-level sequence set is not specified, the system default sequence set is used. For more information, see Configure prefix and numbering for billing documents.",
      "maxLength": 32,
      "section": "Account Settings"
    },
    {
      "name": "autoPost",
      "label": "Auto Post",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically post the credit memo after it is created. Setting this field to `true`, you do not need to separately call the [Post a credit memo](https://developer.zuora.com/api-references/api/operation/PUT_PostCreditMemo) operation to post the credit memo.",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "charges",
      "label": "Charges",
      "type": "array",
      "required": false,
      "description": "Container for product rate plan charges. The maximum number of items is 1,000.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": false,
          "description": "The amount of the credit memo item. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        },
        {
          "name": "excludeItemBillingFromRevenueAccounting",
          "label": "Exclude Item Billing From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude the credit memo item from revenue accounting. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "financeInformation",
          "label": "Finance Information",
          "type": "object",
          "required": false,
          "description": "Container for the finance information related to the product rate plan charge associated with the credit memo.",
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
          "name": "productRatePlanChargeId",
          "label": "Product Rate Plan Charge Id",
          "type": "string",
          "required": true,
          "description": "The ID of the product rate plan charge that the credit memo is created from. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `257.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
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
          "description": "The service end date of the credit memo item. If not specified, the effective end date of the corresponding product rate plan will be used.",
          "section": "Additional Fields"
        },
        {
          "name": "serviceStartDate",
          "label": "Service Start Date",
          "type": "date",
          "required": false,
          "description": "The service start date of the credit memo item. If not specified, the effective start date of the corresponding product rate plan will be used.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Comments about the credit memo.",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "description": "The code of a currency as defined in Billing Settings through the Zuora UI. If you do not specify a currency during credit memo creation, the default account currency is applied. The currency that you specify in the request must be configured and activated in Billing Settings. **Note**: This field is available only if you have the Multiple Currencies feature enabled.",
      "section": "Additional Fields"
    },
    {
      "name": "customRates",
      "label": "Custom Rates",
      "type": "array",
      "required": false,
      "description": "It contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item or Reporting currency item or both). **Note**: - The API custom rate feature is permission controlled. - You cannot set the custom rates, if both the **Automatically include additional Currency Conversion information in data source exports** option and **Fx data** feature are enabled. - CreditMemo, CreditMemoItem, and CreditMemoItemTax will utilize the provided custom Fx rate to convert amounts from the transactional currency to the home currency.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "description": "The currency code for either Reporting or Home currency. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        },
        {
          "name": "customFxRate",
          "label": "Custom Fx Rate",
          "type": "number",
          "required": true,
          "description": "The Custom FX conversion rate between Home/Reporting and Transactional currency items. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        },
        {
          "name": "rateDate",
          "label": "Rate Date",
          "type": "date",
          "required": false,
          "description": "The date on which a particular currency rate is fixed or obtained on. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        }
      ],
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
      "description": "Whether the credit memo is excluded from the rule of automatically applying unapplied credit memos to invoices and debit memos during payment runs. If you set this field to `true`, a payment run does not pick up this credit memo or apply it to other invoices or debit memos.",
      "defaultValue": false,
      "section": "Credit & Settlement Settings"
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
