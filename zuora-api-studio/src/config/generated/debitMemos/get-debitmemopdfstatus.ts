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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
