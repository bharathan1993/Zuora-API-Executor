import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemopdfstatusEndpoint: ApiEndpoint = {
  "id": "get-debitmemopdfstatus",
  "name": "Retrieve the PDF file generation status of debit memos",
  "description": "Retrieves the PDF generation statuses of a batch of debit memos.",
  "method": "GET",
  "path": "/v1/debit-memos/pdf-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "debitMemoKeys",
      "label": "Debit Memo Keys",
      "type": "string",
      "required": true,
      "description": "The IDs or numbers of the debit memos separated by commas. For example - `?debitMemoKeys=2c92c8955bd63cc1015bd7c151af02ab,4b65b8605bd63cc1015bd7c151af02cd,DM0000001`. A maximum of 50 keys can be entered in this field."
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
