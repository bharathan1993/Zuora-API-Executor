import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_cm_taxationitemsEndpoint: ApiEndpoint = {
  "id": "post-cm-taxationitems",
  "name": "Create taxation items for a credit memo",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/credit-memos/{creditMemoKey}/taxation-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoKey",
      "label": "Credit Memo Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: creditMemoKey",
      "placeholder": "Enter credit memo key"
    }
  ],
  "bodyFields": [
    {
      "name": "taxationItems",
      "label": "Taxation Items",
      "type": "array",
      "required": false,
      "description": "Container for taxation items.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "exemptAmount",
          "label": "Exempt Amount",
          "type": "number",
          "required": false,
          "description": "The calculated tax amount excluded due to the exemption.\n",
          "section": "Additional Fields"
        },
        {
          "name": "financeInformation",
          "label": "Finance Information",
          "type": "object",
          "required": false,
          "description": "Container for the finance information related to the taxation item.\n",
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
          "name": "jurisdiction",
          "label": "Jurisdiction",
          "type": "string",
          "required": true,
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
          "name": "memoItemId",
          "label": "Memo Item Id",
          "type": "string",
          "required": false,
          "description": "The ID of the credit memo that the taxation item is created for.\n",
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "The name of the taxation item.\n",
          "section": "Account Settings"
        },
        {
          "name": "sourceTaxItemId",
          "label": "Source Tax Item Id",
          "type": "string",
          "required": false,
          "description": "The ID of the taxation item of the invoice, which the credit memo is created from. \n\nIf you want to use this REST API to create taxation items for a credit memo created from an invoice, the taxation items of the invoice must be created or imported through the SOAP API call.\n\n**Note:** \n  - This field is only used if the credit memo is created from an invoice. \n  - If you do not contain this field in the request body, Zuora will automatically set a value for the `sourceTaxItemId` field based on the tax location code, tax jurisdiction, and tax rate.\n",
          "section": "Tax Settings"
        },
        {
          "name": "taxAmount",
          "label": "Tax Amount",
          "type": "number",
          "required": true,
          "description": "The amount of the tax applied to the credit memo.\n",
          "section": "Tax Settings"
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
          "description": "The date when the tax is applied to the credit memo.\n",
          "section": "Tax Settings"
        },
        {
          "name": "taxRate",
          "label": "Tax Rate",
          "type": "number",
          "required": true,
          "description": "The tax rate applied to the credit memo.\n",
          "section": "Tax Settings"
        },
        {
          "name": "taxRateDescription",
          "label": "Tax Rate Description",
          "type": "string",
          "required": false,
          "description": "The description of the tax rate.\n",
          "section": "Tax Settings"
        },
        {
          "name": "taxRateType",
          "label": "Tax Rate Type",
          "type": "string",
          "required": true,
          "description": "The type of the tax rate applied to the credit memo.\n",
          "enum": [
            "Percentage",
            "FlatFee"
          ],
          "section": "Tax Settings"
        }
      ],
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
