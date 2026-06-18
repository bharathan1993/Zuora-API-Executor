import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_einvoicefiletemplatesEndpoint: ApiEndpoint = {
  "id": "get-einvoicefiletemplates",
  "name": "List e-invoice file templates",
  "description": "Lists information about e-invoice file templates.",
  "method": "GET",
  "path": "/v1/einvoice/templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": true,
      "description": "The short name of a country or region where you must comply with e-invoicing requirements. For example, `IN` for India. For the full list of country names and codes, see View countries or regions."
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "string",
      "required": true,
      "description": "The type of billing documents for which the e-invoice file template is intended.",
      "enum": [
        "Invoice",
        "CreditMemo",
        "DebitMemo"
      ]
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": true,
      "description": "The name of the e-invoicing service provider that assists in generating e-invoice files."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
