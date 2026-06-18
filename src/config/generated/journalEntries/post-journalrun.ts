import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_journalrunEndpoint: ApiEndpoint = {
  "id": "post-journalrun",
  "name": "Create a journal run",
  "description": "This REST API reference describes how to create a journal run. Request and response field descriptions and sample code are provided.",
  "method": "POST",
  "path": "/v1/journal-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountingPeriodName",
      "label": "Accounting Period Name",
      "type": "string",
      "required": false,
      "description": "Name of the accounting period. This field determines the target start and end dates of the journal run. Required if you do not include `targetStartDate` and `targetEndDate`.",
      "section": "Account Settings"
    },
    {
      "name": "journalEntryDate",
      "label": "Journal Entry Date",
      "type": "date",
      "required": true,
      "description": "Date of the journal entry.",
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "object",
      "required": false,
      "description": "The organization that this run is created for. For each item in the array, either the `organizationId` or the `organizationName` field is required. This field is only required when you have already turned on Multi-Org feature.",
      "fields": [
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "description": "The organization ID.",
          "section": "Additional Fields"
        },
        {
          "name": "organizationName",
          "label": "Organization Name",
          "type": "string",
          "required": false,
          "description": "The organization name.",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "targetEndDate",
      "label": "Target End Date",
      "type": "date",
      "required": false,
      "description": "The target end date of the journal run. If you include `accountingPeriodName`, the `targetEndDate` must be empty or the same as the end date of the accounting period specified in `accountingPeriodName`.",
      "section": "Additional Fields"
    },
    {
      "name": "targetStartDate",
      "label": "Target Start Date",
      "type": "date",
      "required": false,
      "description": "The target start date of the journal run. Required if you include targetEndDate. If you include `accountingPeriodName`, the `targetStartDate` must be empty or the same as the start date of the accounting period specified in `accountingPeriodName`.",
      "section": "Additional Fields"
    },
    {
      "name": "transactionTypes",
      "label": "Transaction Types",
      "type": "array",
      "required": true,
      "description": "Transaction types included in the journal run. You can include one or more transaction types.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "description": "Transaction type. Invoice Adjustment is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustment instead. If you enable the Invoice Settlement feature, Debit Memo Item, Credit Memo Item, and Credit Memo Application Item are available, Payment and Refund will be replaced by Payment Application and Refund Application. If you enable both the Invoice Settlement feature and the Invoice Item Settlement feature, Payment and Refund will be replaced by Payment Application Item and Refund Application Item.",
          "enum": [
            "Invoice Item",
            "Taxation Item",
            "Invoice Item Adjustment (Invoice)",
            "Invoice Item Adjustment (Tax)",
            "Invoice Adjustment",
            "Electronic Payment",
            "External Payment",
            "Electronic Refund",
            "External Refund",
            "Electronic Credit Balance Payment",
            "External Credit Balance Payment",
            "Electronic Credit Balance Refund",
            "External Credit Balance Refund",
            "Credit Balance Adjustment (Applied from Credit Balance)",
            "Credit Balance Adjustment (Transferred to Credit Balance)",
            "Revenue Event Item",
            "Debit Memo Item (Charge)",
            "Debit Memo Item (Tax)",
            "Credit Memo Item (Charge)",
            "Credit Memo Item (Tax)",
            "Credit Memo Application Item",
            "Electronic Payment Application",
            "External Payment Application",
            "Electronic Refund Application",
            "External Refund Application",
            "Electronic Payment Application Item",
            "External Payment Application Item",
            "Electronic Refund Application Item",
            "External Refund Application Item"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
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
