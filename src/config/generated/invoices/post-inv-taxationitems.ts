import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_inv_taxationitemsEndpoint: ApiEndpoint = {
  "id": "post-inv-taxationitems",
  "name": "Create taxation items for an invoice",
  "description": "Creates taxation items for an invoice.",
  "method": "POST",
  "path": "/v1/invoices/{invoiceKey}/taxation-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or number of an invoice. For example, 8a8082e65b27f6c3015ba45ff82c7172 or INV00000001."
    }
  ],
  "bodyFields": [
    {
      "name": "taxationItems",
      "label": "Taxation Items",
      "type": "array",
      "required": false,
      "description": "Container for taxation items.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "exemptAmount",
          "label": "Exempt Amount",
          "type": "string",
          "required": false,
          "description": "The calculated tax amount excluded due to the exemption.",
          "section": "Additional Fields"
        },
        {
          "name": "financeInformation",
          "label": "Finance Information",
          "type": "object",
          "required": false,
          "description": "Container for the finance information related to the taxation item.",
          "fields": [
            {
              "name": "accountsReceivableAccountingCode",
              "label": "Accounts Receivable Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for accounts receivable.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "salesTaxPayableAccountingCode",
              "label": "Sales Tax Payable Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the sales taxes payable.",
              "maxLength": 100,
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "invoiceItemId",
          "label": "Invoice Item Id",
          "type": "string",
          "required": true,
          "description": "The ID of the invoice associated with the taxation item.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "jurisdiction",
          "label": "Jurisdiction",
          "type": "string",
          "required": true,
          "description": "The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.",
          "section": "Additional Fields"
        },
        {
          "name": "locationCode",
          "label": "Location Code",
          "type": "string",
          "required": false,
          "description": "The identifier for the location based on the value of the `taxCode` field.",
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "The name of taxation.",
          "section": "Account Settings"
        },
        {
          "name": "taxAmount",
          "label": "Tax Amount",
          "type": "string",
          "required": true,
          "description": "The amount of the taxation item in the invoice item.",
          "section": "Tax Settings"
        },
        {
          "name": "taxCode",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "description": "The tax code identifies which tax rules and tax rates to apply to a specific invoice item.",
          "section": "Tax Settings"
        },
        {
          "name": "taxCodeDescription",
          "label": "Tax Code Description",
          "type": "string",
          "required": false,
          "description": "The description of the tax code.",
          "section": "Tax Settings"
        },
        {
          "name": "taxDate",
          "label": "Tax Date",
          "type": "date",
          "required": true,
          "description": "The date that the tax is applied to the invoice item, in `yyyy-mm-dd` format.",
          "section": "Tax Settings"
        },
        {
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.",
          "enum": [
            "TaxInclusive",
            "TaxExclusive"
          ],
          "section": "Tax Settings"
        },
        {
          "name": "taxRate",
          "label": "Tax Rate",
          "type": "string",
          "required": true,
          "description": "The tax rate applied to the invoice item.",
          "section": "Tax Settings"
        },
        {
          "name": "taxRateDescription",
          "label": "Tax Rate Description",
          "type": "string",
          "required": false,
          "description": "The description of the tax rate.",
          "section": "Tax Settings"
        },
        {
          "name": "taxRateType",
          "label": "Tax Rate Type",
          "type": "string",
          "required": true,
          "description": "The type of the tax rate applied to the invoice item.",
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
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
