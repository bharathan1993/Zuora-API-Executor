import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_billingdocumentfilesdeletionjobEndpoint: ApiEndpoint = {
  "id": "get-billingdocumentfilesdeletionjob",
  "name": "Retrieve a job of hard deleting billing document files",
  "description": "Retrieves information about an asynchronous job of permanently deleting all billing document PDF files for specific accounts.",
  "method": "GET",
  "path": "/v1/accounts/billing-documents/files/deletion-jobs/{jobId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of a billing document file deletion job. For example, 2c92c8f83dc4f752013dc72c24ee016c."
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
