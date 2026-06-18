import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_creditmemopdfstatusEndpoint: ApiEndpoint = {
  "id": "get-creditmemopdfstatus",
  "name": "Retrieve the PDF file generation status of credit memos",
  "description": "Retrieves the PDF generation statuses of a batch of credit memos.",
  "method": "GET",
  "path": "/v1/credit-memos/pdf-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "creditMemoKeys",
      "label": "Credit Memo Keys",
      "type": "string",
      "required": true,
      "description": "The IDs or numbers of the credit memos separated by commas. For example - `?creditMemoKeys=2c92c8955bd63cc1015bd7c151af02ab,4b65b8605bd63cc1015bd7c151af02cd,CM0000001`. A maximum of 50 keys can be entered in this field."
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
