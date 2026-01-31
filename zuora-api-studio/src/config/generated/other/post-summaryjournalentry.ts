import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_summaryjournalentryEndpoint: ApiEndpoint = {
  "id": "post-summaryjournalentry",
  "name": "Create a summary journal entry",
  "description": "This REST API reference describes how to manually create a summary journal entry. Request and response field descriptions and sample code are provided.",
  "method": "POST",
  "path": "/v1/journal-entries",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountingPeriodName",
      "label": "Accounting Period Name",
      "type": "string",
      "required": true,
      "description": "Name of the accounting period. The open-ended accounting period is named `Open-Ended`.\n",
      "section": "Account Settings"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "description": "Status shows whether the journal entry has been transferred to an accounting system.\n",
      "enum": [
        "No",
        "Processing",
        "Yes",
        "Error",
        "Ignore"
      ],
      "section": "Account Settings"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "description": "The type of currency used. Currency must be active.\n",
      "section": "Additional Fields"
    },
    {
      "name": "journalEntryDate",
      "label": "Journal Entry Date",
      "type": "date",
      "required": true,
      "description": "Date of the journal entry.\n",
      "section": "Additional Fields"
    },
    {
      "name": "journalEntryItems",
      "label": "Journal Entry Items",
      "type": "array",
      "required": true,
      "description": "Key name that represents the list of journal entry items.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountingCodeName",
          "label": "Accounting Code Name",
          "type": "string",
          "required": true,
          "description": "Name of the accounting code.\n",
          "section": "Account Settings"
        },
        {
          "name": "accountingCodeType",
          "label": "Accounting Code Type",
          "type": "string",
          "required": false,
          "description": "Accounting code type. This field is required if `accountingCodeName` is not unique.\n\nNote that `On-Account Receivable` is only available if you enable the Invoice Settlement feature. \n",
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
          "name": "amount",
          "label": "Amount",
          "type": "string",
          "required": true,
          "description": "Journal entry item amount in transaction currency.\n",
          "section": "Additional Fields"
        },
        {
          "name": "homeCurrencyAmount",
          "label": "Home Currency Amount",
          "type": "string",
          "required": false,
          "description": "Journal entry item amount in home currency.\n\nThis field is required if you have set your home currency for foreign currency conversion. Otherwise, do not pass this field.\n",
          "section": "Additional Fields"
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
      "description": "The number associated with the revenue event.\n\nCharacter limit: 2,000\n",
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabel",
      "label": "Organization Label",
      "type": "string",
      "required": false,
      "description": "Name of the organization that the journal entry belongs to.  \n\nThis field is only required when you have already turned on Multi-Org feature.    \n",
      "section": "Additional Fields"
    },
    {
      "name": "segments",
      "label": "Segments",
      "type": "array",
      "required": false,
      "description": "List of segments that apply to the summary journal entry.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "segmentName",
          "label": "Segment Name",
          "type": "string",
          "required": true,
          "description": "Name of segment. You must use the segment name that has already been specified in the default segment rule. In addition, segments need to be passed in the order where they were defined in the segmentation rule. If multiple segments are configured in the default rule, you need to specify all of them in order. ",
          "section": "Account Settings"
        },
        {
          "name": "segmentValue",
          "label": "Segment Value",
          "type": "string",
          "required": true,
          "description": "Value of segment in this summary journal entry.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
