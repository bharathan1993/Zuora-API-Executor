import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createdebitmemosEndpoint: ApiEndpoint = {
  "id": "post-createdebitmemos",
  "name": "Create debit memos",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/debit-memos/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "sourceType",
      "label": "Source Type",
      "type": "string",
      "required": true,
      "enum": [
        "Standalone"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "memos",
      "label": "Memos",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountId",
          "label": "Account Id",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "accountNumber",
          "label": "Account Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "autoPay",
          "label": "Auto Pay",
          "type": "boolean",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "autoPost",
          "label": "Auto Post",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "charges",
          "label": "Charges",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "excludeItemBillingFromRevenueAccounting",
              "label": "Exclude Item Billing From Revenue Accounting",
              "type": "boolean",
              "required": false,
              "defaultValue": false,
              "section": "Account Settings"
            },
            {
              "name": "financeInformation",
              "label": "Finance Information",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "deferredRevenueAccountingCode",
                  "label": "Deferred Revenue Accounting Code",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "recognizedRevenueAccountingCode",
                  "label": "Recognized Revenue Accounting Code",
                  "type": "string",
                  "required": false,
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "revenueRecognitionRuleName",
                  "label": "Revenue Recognition Rule Name",
                  "type": "string",
                  "required": false,
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
              "section": "Additional Fields"
            },
            {
              "name": "quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "serviceEndDate",
              "label": "Service End Date",
              "type": "date",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "serviceStartDate",
              "label": "Service Start Date",
              "type": "date",
              "required": false,
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
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "customRates",
          "label": "Custom Rates",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "currency",
              "label": "Currency",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "customFxRate",
              "label": "Custom Fx Rate",
              "type": "number",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "rateDate",
              "label": "Rate Date",
              "type": "date",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "dueDate",
          "label": "Due Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "effectiveDate",
          "label": "Effective Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "number",
          "label": "Number",
          "type": "string",
          "required": false,
          "maxLength": 32,
          "section": "Account Settings"
        },
        {
          "name": "reasonCode",
          "label": "Reason Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "IntegrationId__NS",
          "label": "Integration Id N S",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "IntegrationStatus__NS",
          "label": "Integration Status N S",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SyncDate__NS",
          "label": "Sync Date N S",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        }
      ],
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
