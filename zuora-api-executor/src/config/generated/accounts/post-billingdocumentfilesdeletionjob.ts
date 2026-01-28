import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_billingdocumentfilesdeletionjobEndpoint: ApiEndpoint = {
  "id": "post-billingdocumentfilesdeletionjob",
  "name": "Create a job to hard delete billing document files",
  "description": "Creates an asynchronous job to permanently delete all billing document PDF files for specific accounts. ",
  "method": "POST",
  "path": "/v1/accounts/billing-documents/files/deletion-jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountIds",
      "label": "Account Ids",
      "type": "array",
      "required": false,
      "description": "Container for the IDs of the accounts that you want to create the billing document files deletion job for.\n\n**Note**: When creating jobs to delete billing document PDF files, you must specify either set of `accountIds` or `accountKeys` in the request body.\n",
      "itemType": "string",
      "section": "Account Settings"
    },
    {
      "name": "accountKeys",
      "label": "Account Keys",
      "type": "array",
      "required": false,
      "description": "Container for the IDs and/or numbers of the accounts that you want to create the billing document files deletion job for.\n\n**Note**: When creating jobs to delete billing document PDF files, you must specify either set of `accountIds` or `accountKeys` in the request body.\n",
      "itemType": "string",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
