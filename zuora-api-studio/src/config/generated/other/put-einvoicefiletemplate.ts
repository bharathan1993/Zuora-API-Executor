import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_einvoicefiletemplateEndpoint: ApiEndpoint = {
  "id": "put-einvoicefiletemplate",
  "name": "Update an e-invoice file template",
  "description": "Updates information about an e-invoice file template.",
  "method": "PUT",
  "path": "/v1/einvoice/templates/{key}",
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
      "name": "content",
      "label": "Content",
      "type": "string",
      "required": false,
      "description": "The content of the e-invoice file template, which must be encoded in Base64 format.\n",
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
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": false,
      "description": "The name of an e-invoicing service provider that assists in generating e-invoice files.\n",
      "enum": [
        "Sovos"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "string",
      "required": false,
      "description": "The type of billing documents, which the e-invoice file template is intended for.\n",
      "enum": [
        "Invoice",
        "CreditMemo",
        "DebitMemo"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the e-invoice file template.\n",
      "maxLength": 255,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
