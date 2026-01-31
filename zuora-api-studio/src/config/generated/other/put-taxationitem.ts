import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_taxationitemEndpoint: ApiEndpoint = {
  "id": "put-taxationitem",
  "name": "Update a taxation item",
  "description": "Updates a specific taxation item by ID.",
  "method": "PUT",
  "path": "/v1/taxation-items/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [
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
      "required": false,
      "description": "The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.\n",
      "section": "Additional Fields"
    },
    {
      "name": "locationCode",
      "label": "Location Code",
      "type": "string",
      "required": false,
      "description": "The identifier for the location based on the value of the `taxCode` field. \n",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the taxation item to be updated.\n",
      "section": "Account Settings"
    },
    {
      "name": "taxAmount",
      "label": "Tax Amount",
      "type": "number",
      "required": false,
      "description": "The amount of the tax applied to the credit or debit memo.\n",
      "section": "Tax Settings"
    },
    {
      "name": "taxCode",
      "label": "Tax Code",
      "type": "string",
      "required": false,
      "description": "The tax code identifies which tax rules and tax rates to apply to a specific credit or debit memo.\n",
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
      "description": "The date when the tax is applied to the credit or debit memo.\n",
      "section": "Tax Settings"
    },
    {
      "name": "taxRate",
      "label": "Tax Rate",
      "type": "number",
      "required": false,
      "description": "The tax rate applied to the credit or debit memo.\n",
      "section": "Tax Settings"
    },
    {
      "name": "taxRateDescription",
      "label": "Tax Rate Description",
      "type": "string",
      "required": false,
      "description": "The description of the tax rate. \n",
      "section": "Tax Settings"
    },
    {
      "name": "taxRateType",
      "label": "Tax Rate Type",
      "type": "string",
      "required": false,
      "description": "The type of the tax rate applied to the credit or debit memo.\n",
      "enum": [
        "Percentage",
        "FlatFee"
      ],
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
