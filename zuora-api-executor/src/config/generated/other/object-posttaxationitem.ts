import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_posttaxationitemEndpoint: ApiEndpoint = {
  "id": "object-posttaxationitem",
  "name": "CRUD: Create a taxation item",
  "description": "Creates a Taxation Item object.",
  "method": "POST",
  "path": "/v1/object/taxation-item",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "AccountingCode",
      "label": "Accounting Code",
      "type": "string",
      "required": false,
      "description": " The Chart of Accounts ",
      "section": "Account Settings"
    },
    {
      "name": "Name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": " The name of the tax rate, such as sales tax or GST. This name is displayed on invoices.\n**Character limit**: 128 **Values**: a string of 128 characters or fewer ",
      "section": "Account Settings"
    },
    {
      "name": "ExemptAmount",
      "label": "Exempt Amount",
      "type": "number",
      "required": false,
      "description": " The calculated tax amount excluded due to the exemption.\n**Character limit**: 16 **Values**: a decimal value ",
      "section": "Additional Fields"
    },
    {
      "name": "Jurisdiction",
      "label": "Jurisdiction",
      "type": "string",
      "required": true,
      "description": " The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.\n**Character limit**: 32 **Values**: a string of 32 characterrs or fewer ",
      "section": "Additional Fields"
    },
    {
      "name": "LocationCode",
      "label": "Location Code",
      "type": "string",
      "required": false,
      "description": " The identifier for the location based on the value of the `TaxCode` field.\n**Character limit**: 32 **Values**: automatically generated ",
      "section": "Additional Fields"
    },
    {
      "name": "InvoiceItemId",
      "label": "Invoice Item Id",
      "type": "string",
      "required": true,
      "description": " The ID of the specific invoice item that the taxation information applies to.\n**Character limit**: 32 **Values**: a valid invoice item ID ",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "TaxAmount",
      "label": "Tax Amount",
      "type": "number",
      "required": true,
      "description": " The amount of the tax applied to the charge.\n**Character limit**: 16 **Values**: a decimal value ",
      "section": "Tax Settings"
    },
    {
      "name": "TaxCode",
      "label": "Tax Code",
      "type": "string",
      "required": false,
      "description": " The tax code identifies which tax rules and tax rates to apply to a specific charge.\n**Character limit**: 32 **Values**: a string of 32 characters or fewer ",
      "section": "Tax Settings"
    },
    {
      "name": "TaxCodeDescription",
      "label": "Tax Code Description",
      "type": "string",
      "required": false,
      "description": " The description for the tax code.\n**Character limit**: 255 **Values**: a string of 255 characters or fewer ",
      "section": "Tax Settings"
    },
    {
      "name": "TaxDate",
      "label": "Tax Date",
      "type": "date",
      "required": true,
      "description": " The date that the tax is applied to the charge, in `yyyy-mm-dd` format.\n**Character limit**: 29 ",
      "section": "Tax Settings"
    },
    {
      "name": "TaxRate",
      "label": "Tax Rate",
      "type": "number",
      "required": true,
      "description": " The tax rate applied to the charge.\n**Character limit**: 16 **Values**: a valid decimal value ",
      "section": "Tax Settings"
    },
    {
      "name": "TaxRateDescription",
      "label": "Tax Rate Description",
      "type": "string",
      "required": false,
      "description": " The description of the tax rate.\n**Character limit**: 255 **Values**: a string of 255 characters or fewer ",
      "section": "Tax Settings"
    },
    {
      "name": "TaxRateType",
      "label": "Tax Rate Type",
      "type": "string",
      "required": true,
      "description": " The type of the tax rate applied to the charge.\n**Character limit**: 10 **Values**: `Percentage`, `FlatFee` ",
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
