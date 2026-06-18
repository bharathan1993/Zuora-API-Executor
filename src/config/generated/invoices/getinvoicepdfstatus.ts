import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getinvoicepdfstatusEndpoint: ApiEndpoint = {
  "id": "getinvoicepdfstatus",
  "name": "Retrieve the PDF file generation status of invoices",
  "description": "Retrieves the PDF generation statuses of a batch of invoices.",
  "method": "GET",
  "path": "/v1/invoices/pdf-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "invoiceKeys",
      "label": "Invoice Keys",
      "type": "string",
      "required": true,
      "description": "The IDs or numbers of the invoices separated by commas. For example - `?invoiceKeys=2c92c8955bd63cc1015bd7c151af02ab,4b65b8605bd63cc1015bd7c151af02cd,INV-0000001`. A maximum of 50 keys can be entered in this field."
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
