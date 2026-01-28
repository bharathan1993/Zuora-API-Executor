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
      "description": "Path parameter: je-number",
      "placeholder": "Enter je number"
    }
  ],
  "bodyFields": [
    {
      "name": "journalEntryItems",
      "label": "Journal Entry Items",
      "type": "array",
      "required": false,
      "description": "Key name that represents the list of journal entry items.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountingCodeName",
          "label": "Accounting Code Name",
          "type": "string",
          "required": true,
          "description": "Name of the accounting code.\n\nIf the Journal Entry Item has a blank accounting code, enter the empty string.\n",
          "section": "Account Settings"
        },
        {
          "name": "accountingCodeType",
          "label": "Accounting Code Type",
          "type": "string",
          "required": false,
          "description": "Accounting code type.\n\nNote that `On-Account Receivable` is only available if you enable the Invoice Settlement feature. \n",
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
          "description": "Type of journal entry item. ",
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
      "description": "Additional information about this record.\n\n***Character limit:*** 2,000\n",
      "section": "Additional Fields"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "description": "Status shows whether the journal entry has been transferred to an accounting system. \n\nThis field cannot be changed after the summary journal entry has been canceled.\n\n**Note:** The Zuora Finance ***Override Transferred to Accounting*** permission is required to change `transferredToAccounting` from `Yes` to any other value.\n",
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
    "Content-Type": "application/json"
  }
};
