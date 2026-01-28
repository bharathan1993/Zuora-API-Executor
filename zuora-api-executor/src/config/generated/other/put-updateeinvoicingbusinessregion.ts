import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateeinvoicingbusinessregionEndpoint: ApiEndpoint = {
  "id": "put-updateeinvoicingbusinessregion",
  "name": "Update an e-invoicing business region",
  "description": "Updates an e-invoicing business region by key. The key can be the unique ID or number of an e-invoicing business region.",
  "method": "PUT",
  "path": "/v1/einvoice/business-regions/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [
    {
      "name": "addressLine1",
      "label": "Address Line1",
      "type": "string",
      "required": false,
      "description": "The first line of the Seller's address, which is often a street address or business name.\n",
      "section": "Additional Fields"
    },
    {
      "name": "addressLine2",
      "label": "Address Line2",
      "type": "string",
      "required": false,
      "description": "The second line of the Seller's address, which is often the name of a building.\n",
      "section": "Additional Fields"
    },
    {
      "name": "city",
      "label": "City",
      "type": "string",
      "required": false,
      "description": "The the name of the city where the business is located.\n",
      "section": "Additional Fields"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": false,
      "description": "The short name of a country or region where you must comply with e-invoicing requirements. For example, `IN` for India. For the full list of country names and codes, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_countries_or_regions\" target=\"_blank\">View countries or regions</a>.\n",
      "section": "Additional Fields"
    },
    {
      "name": "digitalSignatureEnable",
      "label": "Digital Signature Enable",
      "type": "boolean",
      "required": false,
      "description": "Whether the e-invoicing service provider signs PDF files for billing documents.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "digitalSignatureBoxEnable",
      "label": "Digital Signature Box Enable",
      "type": "boolean",
      "required": false,
      "description": "Whether the digital signature box is displayed on PDF files for billing documents.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "digitalSignatureBoxPosX",
      "label": "Digital Signature Box Pos X",
      "type": "number",
      "required": false,
      "description": "The X-coordinate to determine where the digital signature box is displayed on PDF files for billing documents.\n",
      "section": "Additional Fields"
    },
    {
      "name": "digitalSignatureBoxPosY",
      "label": "Digital Signature Box Pos Y",
      "type": "number",
      "required": false,
      "description": "The Y-coordinate to determine where the digital signature box is displayed on PDF files for billing documents. \n",
      "section": "Additional Fields"
    },
    {
      "name": "endpointId",
      "label": "Endpoint Id",
      "type": "string",
      "required": false,
      "description": "The Seller's electronic address, to which the application-level response to the e-invoice file might be delivered.\n",
      "section": "Additional Fields"
    },
    {
      "name": "endpointSchemeId",
      "label": "Endpoint Scheme Id",
      "type": "string",
      "required": false,
      "description": "The identification scheme identifier of the Seller's electronic address.\n",
      "section": "Additional Fields"
    },
    {
      "name": "postalCode",
      "label": "Postal Code",
      "type": "string",
      "required": false,
      "description": "The short code that can identify the business address.\n",
      "section": "Additional Fields"
    },
    {
      "name": "responseMapping",
      "label": "Response Mapping",
      "type": "object",
      "required": false,
      "description": "Container for e-invoicing response field mappings that map values from Sovos response data to fields on the EInvoiceData object in Zuora. Each response field mapping consists of a field name and a field path.\n\nNote that this field is applicable only to the Sovos service provider.\n\nFor more information, see <a href=\"https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview/B_Configure_the_E-Invoicing_feature/Configure_e-invoicing_response_field_mappings\" target=\"_blank\">Configure e-invoicing response field mappings</a>.\n",
      "section": "Additional Fields"
    },
    {
      "name": "serviceProviderId",
      "label": "Service Provider Id",
      "type": "string",
      "required": false,
      "description": "The unique ID of the e-invoicing service provider that is associated to the business region.\n",
      "section": "Additional Fields"
    },
    {
      "name": "state",
      "label": "State",
      "type": "string",
      "required": false,
      "description": "The name of the state or province where the business is located.\n",
      "section": "Additional Fields"
    },
    {
      "name": "fileFormat",
      "label": "File Format",
      "type": "array",
      "required": false,
      "description": "\nYou can define the file format for each business category as shwown in the following example:   \n  \nfileFormat\" : {\n  \n  \"B2B\" : [ \"XML\" ],\n  \n  \"B2C\" : [ ],\n  \n  \"B2G\" : [ \"XML\" ]\n\n}\n\n **Note:** This field is optional; however, if you use Avalara integration, it becomes a mandatory field.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "businessName",
      "label": "Business Name",
      "type": "string",
      "required": false,
      "description": "The full official name that the Seller is registered with the relevant legal authority.\n",
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "businessNumber",
      "label": "Business Number",
      "type": "string",
      "required": false,
      "description": "The specify the unique identifier number of the legal entity or person that you do business with.\n\nFor example, you must use a GSTIN for India and Tax Identification Number (TIN) for Saudi Arabia.\n",
      "section": "Account Settings"
    },
    {
      "name": "businessNumberSchemaId",
      "label": "Business Number Schema Id",
      "type": "string",
      "required": false,
      "description": "The identification scheme identifier that an official registrar issues to identify the Seller as a legal entity or person.\n",
      "section": "Account Settings"
    },
    {
      "name": "contactName",
      "label": "Contact Name",
      "type": "string",
      "required": false,
      "description": "The name of the Seller contact to receive e-invoicing data.\n",
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "phoneNumber",
      "label": "Phone Number",
      "type": "string",
      "required": false,
      "description": "The business phone number of the Seller contact to receive e-invoicing data.\n",
      "section": "Account Settings"
    },
    {
      "name": "taxRegisterNumber",
      "label": "Tax Register Number",
      "type": "string",
      "required": false,
      "description": "The Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller’s address) of the Seller for tax purposes, or a reference that enables the Seller to state the registered tax status.\n",
      "section": "Account Settings"
    },
    {
      "name": "tradeName",
      "label": "Trade Name",
      "type": "string",
      "required": false,
      "description": "The name that the Seller is known as, other than the legal business name.\n",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "string",
      "required": false,
      "description": "The email address of the Seller contact to receive e-invoicing data.\n",
      "section": "Communication Settings"
    },
    {
      "name": "invoiceEnabled",
      "label": "Invoice Enabled",
      "type": "boolean",
      "required": false,
      "description": "This field controls whether the invoice should be supported by the process type or not. For some countries, this field is required to be set to `true`. For more information, see <a href=\"https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview/B_Configure_the_E-Invoicing_feature/Manage_country-specific_configurations\" target=\"_blank\">Manage country-specific configurations</a>.\n",
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceFilters",
      "label": "Invoice Filters",
      "type": "array",
      "required": false,
      "description": "The documents belonging to the e-invoicing business region. \n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "condition",
          "label": "Condition",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "conditions",
              "label": "Conditions",
              "type": "array",
              "required": false,
              "description": "Multiple `conditions` fields are combined by the `relation` fields. These `conditions` fields form a custom filter.\nEach `conditions` field is a formula combined by the `field`, `operator`, and `value` fields.\n",
              "section": "Additional Fields"
            },
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": false,
              "description": "The field name of a single condition that is indicated by the `conditions` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": false,
              "description": "The operator of a single condition that is indicated by the `conditions` field.  The operator is added between the `field` and `value` fields.\n- eq: equal (`field` = `value`)\n- neq: not equal (`field` != `value`) \n- gt: greater than (`field` > `value`) \n- lt: less than (`field` < `value`) \n- gte: greater than or equal (`field` >= `value`)\n- lte: less than or equal (`field` <= `value`)\n- lk: like (`field` like `value`) \n- in: in (`field` in `value`, the values are separated by comma)\n- nl: null (`field` is null)\n- nnl: not null (`field` is not null)\n",
              "enum": [
                "eq",
                "neq",
                "gt",
                "lt",
                "gte",
                "lte",
                "lk",
                "in",
                "nl",
                "nnl"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "relation",
              "label": "Relation",
              "type": "string",
              "required": false,
              "description": "The relation among the `conditions` fields.\n",
              "enum": [
                "and",
                "or"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "description": "The value of a single condition that is indicated by the `conditions` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "objectType",
              "label": "Object Type",
              "type": "string",
              "required": false,
              "description": "The target object type of the condition when the `filterType` field is specified as `FilterCondition`.\n",
              "enum": [
                "Invoice",
                "InvoiceItem"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "creditMemoEnabled",
      "label": "Credit Memo Enabled",
      "type": "boolean",
      "required": false,
      "description": "This field controls whether the credit memo should be supported by the process type or not. For some countries, this field is required to be set to `true`. For more information, see <a href=\"https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview/B_Configure_the_E-Invoicing_feature/Manage_country-specific_configurations\" target=\"_blank\">Manage country-specific configurations</a>.\n",
      "defaultValue": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "debitMemoEnabled",
      "label": "Debit Memo Enabled",
      "type": "boolean",
      "required": false,
      "description": "This field controls whether the debit memo should be supported by the process type or not. For some countries, this field is required to be set to `true`. For more information, see <a href=\"https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview/B_Configure_the_E-Invoicing_feature/Manage_country-specific_configurations\" target=\"_blank\">Manage country-specific configurations</a>.\n",
      "defaultValue": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "creditMemoFilters",
      "label": "Credit Memo Filters",
      "type": "array",
      "required": false,
      "description": "The documents belonging to the e-invoicing business region. \n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "condition",
          "label": "Condition",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "conditions",
              "label": "Conditions",
              "type": "array",
              "required": false,
              "description": "Multiple `conditions` fields are combined by the `relation` fields. These `conditions` fields form a custom filter.\nEach `conditions` field is a formula combined by the `field`, `operator`, and `value` fields.\n",
              "section": "Additional Fields"
            },
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": false,
              "description": "The field name of a single condition that is indicated by the `conditions` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": false,
              "description": "The operator of a single condition that is indicated by the `conditions` field.  The operator is added between the `field` and `value` fields.\n- eq: equal (`field` = `value`)\n- neq: not equal (`field` != `value`) \n- gt: greater than (`field` > `value`) \n- lt: less than (`field` < `value`) \n- gte: greater than or equal (`field` >= `value`)\n- lte: less than or equal (`field` <= `value`)\n- lk: like (`field` like `value`) \n- in: in (`field` in `value`, the values are separated by comma)\n- nl: null (`field` is null)\n- nnl: not null (`field` is not null)\n",
              "enum": [
                "eq",
                "neq",
                "gt",
                "lt",
                "gte",
                "lte",
                "lk",
                "in",
                "nl",
                "nnl"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "relation",
              "label": "Relation",
              "type": "string",
              "required": false,
              "description": "The relation among the `conditions` fields.\n",
              "enum": [
                "and",
                "or"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "description": "The value of a single condition that is indicated by the `conditions` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "objectType",
              "label": "Object Type",
              "type": "string",
              "required": false,
              "description": "The target object type of the condition when the `filterType` field is specified as `FilterCondition`.\n",
              "enum": [
                "CreditMemo",
                "CreditMemoItem"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "debitMemoFilters",
      "label": "Debit Memo Filters",
      "type": "array",
      "required": false,
      "description": "The documents belonging to the e-invoicing business region. \n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "condition",
          "label": "Condition",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "conditions",
              "label": "Conditions",
              "type": "array",
              "required": false,
              "description": "Multiple `conditions` fields are combined by the `relation` fields. These `conditions` fields form a custom filter.\nEach `conditions` field is a formula combined by the `field`, `operator`, and `value` fields.\n",
              "section": "Additional Fields"
            },
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": false,
              "description": "The field name of a single condition that is indicated by the `conditions` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": false,
              "description": "The operator of a single condition that is indicated by the `conditions` field.  The operator is added between the `field` and `value` fields.\n- eq: equal (`field` = `value`)\n- neq: not equal (`field` != `value`) \n- gt: greater than (`field` > `value`) \n- lt: less than (`field` < `value`) \n- gte: greater than or equal (`field` >= `value`)\n- lte: less than or equal (`field` <= `value`)\n- lk: like (`field` like `value`) \n- in: in (`field` in `value`, the values are separated by comma)\n- nl: null (`field` is null)\n- nnl: not null (`field` is not null)\n",
              "enum": [
                "eq",
                "neq",
                "gt",
                "lt",
                "gte",
                "lte",
                "lk",
                "in",
                "nl",
                "nnl"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "relation",
              "label": "Relation",
              "type": "string",
              "required": false,
              "description": "The relation among the `conditions` fields.\n",
              "enum": [
                "and",
                "or"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "description": "The value of a single condition that is indicated by the `conditions` field.\n",
              "section": "Additional Fields"
            },
            {
              "name": "objectType",
              "label": "Object Type",
              "type": "string",
              "required": false,
              "description": "The target object type of the condition when the `filterType` field is specified as `FilterCondition`.\n",
              "enum": [
                "DebitMemo",
                "DebitMemoItem"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Credit & Settlement Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
