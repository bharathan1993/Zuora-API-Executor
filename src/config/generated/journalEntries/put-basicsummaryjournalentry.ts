import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_basicsummaryjournalentryEndpoint: ApiEndpoint = {
  "id": "put-basicsummaryjournalentry",
  "name": "Update a summary journal entry",
  "description": "",
  "method": "PUT",
  "path": "/v1/journal-entries/{je-number}/basic-information",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "je-number",
      "label": "Je Number",
      "type": "string",
      "required": true,
      "description": "Journal entry number in the format JE-00000001."
    }
  ],
  "bodyFields": [
    {
      "name": "journalEntryItems",
      "label": "Journal Entry Items",
      "type": "array",
      "required": false,
      "description": "Key name that represents the list of journal entry items.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountingCodeName",
          "label": "Accounting Code Name",
          "type": "string",
          "required": true,
          "description": "Name of the accounting code. If the Journal Entry Item has a blank accounting code, enter the empty string.",
          "section": "Account Settings"
        },
        {
          "name": "accountingCodeType",
          "label": "Accounting Code Type",
          "type": "string",
          "required": false,
          "description": "Accounting code type. Note that `On-Account Receivable` is only available if you enable the Invoice Settlement feature.",
          "enum": [
            "AccountsReceivable",
            "On-Account Receivable",
            "Cash",
            "OtherAssets",
            "CustomerCashOnAccount",
            "DeferredRevenue",
            "SalesTaxPayable",
            "OtherLiabilities",
            "SalesRevenue",
            "SalesDiscounts",
            "OtherRevenue",
            "OtherEquity",
            "BadDebt",
            "OtherExpenses"
          ],
          "section": "Account Settings"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "description": "Type of journal entry item.",
          "enum": [
            "Credit",
            "Debit"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "description": "Additional information about this record. ***Character limit:*** 2,000",
      "section": "Additional Fields"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "description": "Status shows whether the journal entry has been transferred to an accounting system. This field cannot be changed after the summary journal entry has been canceled. **Note:** The Zuora Finance ***Override Transferred to Accounting*** permission is required to change `transferredToAccounting` from `Yes` to any other value.",
      "enum": [
        "No",
        "Processing",
        "Yes",
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
