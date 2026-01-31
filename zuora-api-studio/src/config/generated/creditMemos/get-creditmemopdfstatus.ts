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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
