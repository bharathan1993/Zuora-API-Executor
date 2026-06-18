import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_accountingcodeEndpoint: ApiEndpoint = {
  "id": "put-accountingcode",
  "name": "Update an accounting code",
  "description": "This reference describes how to update an existing accounting code through the REST API.",
  "method": "PUT",
  "path": "/v1/accounting-codes/{ac-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ac-id",
      "label": "Ac Id",
      "type": "string",
      "required": true,
      "description": "ID of the accounting code you want to update."
    }
  ],
  "bodyFields": [
    {
      "name": "glAccountName",
      "label": "Gl Account Name",
      "type": "string",
      "required": false,
      "description": "Name of the account in your general ledger. Field only available if you have Zuora Finance enabled. Maximum of 255 characters.",
      "section": "Account Settings"
    },
    {
      "name": "glAccountNumber",
      "label": "Gl Account Number",
      "type": "string",
      "required": false,
      "description": "Account number in your general ledger. Field only available if you have Zuora Finance enabled. Maximum of 255 characters.",
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "Name of the accounting code. Accounting code name must be unique. Maximum of 100 characters.",
      "section": "Account Settings"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "description": "Maximum of 2,000 characters.",
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": false,
      "description": "Accounting code type. You cannot change the type of an accounting code from `AccountsReceivable` to a different type. Note that `OnAccountReceivable` is only available if you enable the Invoice Settlement feature.",
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
      "section": "Additional Fields"
    },
    {
      "name": "segmentConstantValues",
      "label": "Segment Constant Values",
      "type": "object",
      "required": false,
      "description": "Segment constant values. The field is available only if you have GL Segmentation 2.0 enabled. This field is additional property.",
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
