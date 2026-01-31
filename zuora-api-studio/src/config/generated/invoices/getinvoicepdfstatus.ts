import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getinvoicepdfstatusEndpoint: ApiEndpoint = {
  "id": "getinvoicepdfstatus",
  "name": "Retrieve the PDF file generation status of invoices",
  "description": "Retrieves the PDF generation statuses of a batch of invoices. ",
  "method": "GET",
  "path": "/v1/invoices/pdf-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
