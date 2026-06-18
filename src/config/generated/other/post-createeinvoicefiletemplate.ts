import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createeinvoicefiletemplateEndpoint: ApiEndpoint = {
  "id": "post-createeinvoicefiletemplate",
  "name": "Create an e-invoice file template",
  "description": "Creates an e-invoice file templates for your billing documents, including invoices, credit memos, and debit memos.",
  "method": "POST",
  "path": "/v1/einvoice/templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "content",
      "label": "Content",
      "type": "string",
      "required": true,
      "description": "The content of the e-invoice file template, which must be encoded in Base64 format.",
      "section": "Additional Fields"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": true,
      "description": "The short name of a country or region where you must comply with e-invoicing requirements. For example, `IN` for India. For the full list of country names and codes, see View countries or regions.",
      "section": "Additional Fields"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": true,
      "description": "The name of an e-invoicing service provider that assists in generating e-invoice files.",
      "enum": [
        "Sovos"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "string",
      "required": true,
      "description": "The type of billing documents, which the e-invoice file template is intended for.",
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
      "required": true,
      "description": "The name of the e-invoice file template.",
      "maxLength": 255,
      "section": "Account Settings"
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
