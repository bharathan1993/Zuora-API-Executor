import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createbillrunEndpoint: ApiEndpoint = {
  "id": "post-createbillrun",
  "name": "Create a bill run",
  "description": "Creates an ad-hoc bill run or a scheduled bill run. Support the following:",
  "method": "POST",
  "path": "/v1/bill-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "autoEmail",
      "label": "Auto Email",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically send emails after Auto-Post is complete.\n\n**Note:** To use this field, you must first set the <a href=\"https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Billing_Rules\" target=\"_blank\">Support Bill Run Auto-Post?</a> billing rule to **Yes** through the Zuora UI.\n",
      "defaultValue": false,
      "section": "Communication Settings"
    },
    {
      "name": "autoPost",
      "label": "Auto Post",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically post the bill run after the bill run is created.\n\n**Note:** To use this field, you must first set the <a href=\"https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Billing_Rules\" target=\"_blank\">Support Bill Run Auto-Post?</a> billing rule to **Yes** through the Zuora UI.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "autoRenewal",
      "label": "Auto Renewal",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically renew auto-renew subscriptions that are up for renewal.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "chargeTypeToExclude",
      "label": "Charge Type To Exclude",
      "type": "array",
      "required": false,
      "description": "The types of the charges to be excluded from the generation of billing documents. You can specify at most two charge types in the array.\n",
      "itemType": "string",
      "itemEnum": [
        "OneTime",
        "Recurring",
        "Usage"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "includeOrderLineItems",
      "label": "Include Order Line Items",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to bill order line items in the bill run.\n",
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "array",
      "required": false,
      "description": "The organization(s) that the bill run is created for. \n\nFor each item in the array, either the `organizationId` or the `organizationName` field is required.\n\nThis field is only required when you have already turned on Multi-Org feature.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "description": "The organization ID.\n",
          "section": "Additional Fields"
        },
        {
          "name": "organizationName",
          "label": "Organization Name",
          "type": "string",
          "required": false,
          "description": "The organization name.\n",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "schedule",
      "label": "Schedule",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "repeatFrom",
          "label": "Repeat From",
          "type": "date",
          "required": true,
          "description": "The start date of the scheduled bill run.\n",
          "section": "Additional Fields"
        },
        {
          "name": "repeatTo",
          "label": "Repeat To",
          "type": "date",
          "required": false,
          "description": "The end date of of the scheduled bill run.\n",
          "section": "Additional Fields"
        },
        {
          "name": "repeatType",
          "label": "Repeat Type",
          "type": "string",
          "required": true,
          "description": "The repeat type of the bill run.\n",
          "enum": [
            "None",
            "Daily",
            "Weekly",
            "Monthly"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "runTime",
          "label": "Run Time",
          "type": "number",
          "required": true,
          "description": "The scheduled run time (hour) of day.\n\n**Values:** 0 - 23\n",
          "section": "Additional Fields"
        },
        {
          "name": "weeklyOnDay",
          "label": "Weekly On Day",
          "type": "array",
          "required": false,
          "description": "The repeat day in a week. \n\nThis field is required if you set `repeatType` field to `Weekly`.\n",
          "itemType": "string",
          "itemEnum": [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "monthlyOnEndOfMonth",
          "label": "Monthly On End Of Month",
          "type": "boolean",
          "required": false,
          "description": "Whether to schedule monthly bill run on the end of month or the specific day of month.\n\n\n**Note**: This field is available only when the `repeatType` field is set to `Monthly` and the `repeatFrom` field is set to the end of month.\n  \nFor example:\n  - When repeatFrom = `2024-04-30` and `monthlyOnEndOfMonth` = `true`, next bill run will be scheduled on `2024-05-31`.\n  - When repeatFrom = `2024-04-30` and `monthlyOnEndOfMonth` = `false`, next bill run will be scheduled on `2024-05-30`.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "description": "The target date for this bill run. \n\n- You must specify this field when creating an ad-hoc bill run.\n- For scheduled bill runs, if you do not specify any value for this field, the target date is the value of the `repeatFrom` field.\n",
      "section": "Additional Fields"
    },
    {
      "name": "targetDateMonthOffset",
      "label": "Target Date Month Offset",
      "type": "number",
      "required": false,
      "description": "The month offset of target date for this bill run compared to bill run execution date.\n\n\n**Note**: This field is only valid when the `repeatType` field is set to `Monthly`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "targetDateDayOfMonth",
      "label": "Target Date Day Of Month",
      "type": "number",
      "required": false,
      "description": "The day of month of target date for this bill run. Specify a day of the month. If you specify 31, even though the month doesn't have 31, for example, February or April, the date recurs on the end day of each scheduled month. \n\n\n**Note**: This field is only valid when the `repeatType` field is set to `Monthly`. \n",
      "section": "Additional Fields"
    },
    {
      "name": "batches",
      "label": "Batches",
      "type": "array",
      "required": false,
      "description": "The batch of accounts for this bill run. \n\nYou can only specify either this field or the `billRunFilters` field.\n\n**Values:** `AllBatches` or an array of `Batch*n*` where *n* is one of numbers 1 - 50, for example, `Batch7`.\n\n**Note**: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Performance_Booster_Elite\" target=\"_blank\">Performance Booster Elite</a> package.\n",
      "itemType": "string",
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the bill run.\n",
      "section": "Account Settings"
    },
    {
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "string",
      "required": false,
      "description": "The day of the bill cycle. This field is only valid if the `batches` field is specified.\n\n**Values:** \n- `AllBillCycleDays` or one of numbers 1 - 31 for an ad-hoc bill run\n- `AllBillCycleDays`, one of numbers 1 - 31, or `AsRunDay` for a scheduled bill run\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billRunFilters",
      "label": "Bill Run Filters",
      "type": "array",
      "required": false,
      "description": "The target account, subscriptions, invoice schedule, or a combination of objects for this bill run. You can only specify either this field or the `batches` field. \n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountId",
          "label": "Account Id",
          "type": "string",
          "required": true,
          "description": "The target account of the bill run. \n\nIf multiple subscriptions are specified, the account ID must be the same.\n",
          "section": "Account Settings"
        },
        {
          "name": "filterType",
          "label": "Filter Type",
          "type": "string",
          "required": true,
          "description": "To create bill runs based on the selected filter type:\n  - `Account`: Create bill runs by account. \n  - `Subscription`: Create bill runs by subscription, you must specify the `subscriptionId` field.\n  - `FilterCondition`: Create bill runs by custom filter combining the Account, Subscription, and Rate Plan objects, you must specify the `condition` and `objectType` fields. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Automate_billing_document_generation/Bill_runs/Bill_Run_Advanced_Filter\" target=\"_blank\">Bill Run Advanced Filter</a>.\n",
          "enum": [
            "Account",
            "Subscription",
            "FilterCondition"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "condition",
          "label": "Condition",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "conditions",
              "label": "Conditions",
              "type": "array",
              "required": false,
              "description": "Multiple `conditions` fields are combined by the `relation` fields. These `conditions` fields form a custom filter.\nEach `conditions` field is a formula combined by the `field`, `operator`, and `value` fields. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Automate_billing_document_generation/Bill_runs/Bill_Run_Advanced_Filter/B_Common_use_cases_of_Bill_Run_Advanced_Filter\" target=\"_blank\">Common use cases of Bill Run Advanced Filter</a>.\n",
              "section": "Additional Fields"
            },
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": false,
              "description": "The field name of a single condition that is indicated by the `conditions` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": false,
              "description": "The operator of a single condition that is indicated by the `conditions` field.  The operator is added between the `field` and `value` fields.\n- eq: equal (`field` = `value`)\n- neq: not equal (`field` != `value`) \n- gt: greater than (`field` > `value`) \n- lt: less than (`field` < `value`) \n- gte: greater than or equal (`field` >= `value`)\n- lte: less than or equal (`field` <= `value`)\n- lk: like (`field` like `value`) \n- in: in (`field` in `value`, the values are separated by comma)\n- nl: null (`field` is null)\n- nnl: not null (`field` is not null)\n",
              "enum": [
                "eq",
                "neq",
                "gt",
                "lt",
                "gte",
                "lte",
                "lk",
                "in",
                "nl",
                "nnl"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "relation",
              "label": "Relation",
              "type": "string",
              "required": false,
              "description": "The relation among the `conditions` fields.\n",
              "enum": [
                "and",
                "or"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "description": "The value of a single condition that is indicated by the `conditions` field.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "objectType",
          "label": "Object Type",
          "type": "string",
          "required": false,
          "description": "The target object type of the condition when the `filterType` field is specified as `FilterCondition`. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Automate_billing_document_generation/Bill_runs/Bill_Run_Advanced_Filter\" target=\"_blank\">Bill Run Advanced Filter</a>.\n",
          "enum": [
            "Account",
            "Subscription",
            "RatePlanCharge"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionId",
          "label": "Subscription Id",
          "type": "string",
          "required": false,
          "description": "The target subscripiton ID of the account. \n\nIf you set the `filterType` field to `Subscription`, you must specify the `subscriptionId` field.\n",
          "section": "Subscription Settings"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billRunType",
      "label": "Bill Run Type",
      "type": "string",
      "required": false,
      "description": "The type of the bill run. If you do not specify any value for this field, the default value is `Regular`.\n\n- You can use this field only if the \"Catch-Up Bill Run\" feature is enabled. \n- You must specify this field to create a catch up bill run.\n\n**Values:** \n- `Regular`\n- `CatchUp`\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDate",
      "label": "Invoice Date",
      "type": "date",
      "required": false,
      "description": "The invoice date for the bill run.\n\n- When creating an ad-hoc bill run, if you do not specify any value for this field, the default value is the current date.\n- When creating a scheduled bill run, if you do not specify any value for this field, the invoice date is the value of the `repeatFrom` field.\n\n**Note**: You can use one of the following methods to specify the invoice date:\n\n- Specify `invoiceDate`\n- Specify `invoiceDateMonthOffset` and `InvoiceDateDayOfMonth`\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDateMonthOffset",
      "label": "Invoice Date Month Offset",
      "type": "number",
      "required": false,
      "description": "The month offset of invoice date for this bill run compared to bill run execution date.\n\n\n**Notes**: \n- This field is only valid when the `repeatType` field is set to `Monthly`. \n- You can use one of the following methods to specify the invoice date:\n  - Specify `invoiceDate`\n  - Specify `invoiceDateMonthOffset` and `InvoiceDateDayOfMonth`\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDateDayOfMonth",
      "label": "Invoice Date Day Of Month",
      "type": "number",
      "required": false,
      "description": "The day of month of invoice date for this bill run. Specify a day of the month. If you specify 31, even though the month doesn't have 31, for example, February or April, the date recurs on the end day of each scheduled month. \n\n\n**Notes**: \n  - This field is only valid when the `repeatType` field is set to `Monthly`. \n  - You can use one of the following methods to specify the invoice date:\n    - Specify `invoiceDate`\n    - Specify `invoiceDateMonthOffset` and `InvoiceDateDayOfMonth`\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "noEmailForZeroAmountInvoice",
      "label": "No Email For Zero Amount Invoice",
      "type": "boolean",
      "required": false,
      "description": "Whether to suppress emails for invoices with zero total amount generated in this bill run after the bill run is complete. \n\nIt is best practice to not send emails for invoices with zero amount.\n",
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "includeSubscriptions",
      "label": "Include Subscriptions",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to bill subscriptions in the bill run.\n",
      "defaultValue": true,
      "section": "Subscription Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
