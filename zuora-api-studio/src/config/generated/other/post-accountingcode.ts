import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_accountingcodeEndpoint: ApiEndpoint = {
  "id": "post-accountingcode",
  "name": "Create an accounting code",
  "description": "This reference describes how to create a new accounting code through the REST API. ",
  "method": "POST",
  "path": "/v1/accounting-codes",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "glAccountName",
      "label": "Gl Account Name",
      "type": "string",
      "required": false,
      "description": "Name of the account in your general ledger.\n\nField only available if you have Zuora Finance enabled. Maximum of 255 characters.\n",
      "section": "Account Settings"
    },
    {
      "name": "glAccountNumber",
      "label": "Gl Account Number",
      "type": "string",
      "required": false,
      "description": "Account number in your general ledger.\n\nField only available if you have Zuora Finance enabled. Maximum of 255 characters.\n",
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Name of the accounting code.\n\nAccounting code name must be unique. Maximum of 100 characters.\n",
      "section": "Account Settings"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "description": "Maximum of 2,000 characters.\n",
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "description": "If you want to create multiple accounting codes of the type `AccountsReceivable`, you need to have [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) enabled and contact [Zuora Global Support](http://support.zuora.com) to access the Multiple AR Accounting Codes feature. \n\nNote that `On-Account Receivable` is only available if you enable the Invoice Settlement feature. \n",
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
      "description": "Segment constant values. The field is available only if you have GL Segmentation 2.0 enabled.\n\nThis field is additional property.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
