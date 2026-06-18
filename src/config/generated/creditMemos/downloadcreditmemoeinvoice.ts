import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const downloadcreditmemoeinvoiceEndpoint: ApiEndpoint = {
  "id": "downloadcreditmemoeinvoice",
  "name": "Download a credit memo in the specified file format",
  "description": "Downloads the credit memo based on the specified file format.",
  "method": "GET",
  "path": "/v1/credit-memos/{creditMemoKey}/e-invoice/download",
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
      "description": "The unique number or ID of Credit Memo."
    }
  ],
  "queryParams": [
    {
      "name": "fileFormat",
      "label": "File Format",
      "type": "string",
      "required": false,
      "description": "This parameter is exclusively accessible for documents submitted via the Avalara E-Invoice integration. When an invoice is processed through Sovos or PEPPOL, this parameter cannot be specified, and the document can only be downloaded in its default file format. Following mapping will be used for user representation of file formats: - XML: `application/xml` - PDF: `application/pdf` - ZIP: `application/zip` - OASIS_Universal_Business_Language_XML: `application/vnd.oasis.ubl+xml`",
      "enum": [
        "XML",
        "PDF",
        "ZIP",
        "OASIS_Universal_Business_Language_XML"
      ]
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
