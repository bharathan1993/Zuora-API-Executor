import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_systemhealthbillingdocvolumesummaryEndpoint: ApiEndpoint = {
  "id": "get-systemhealthbillingdocvolumesummary",
  "name": "List billing document volume summary records",
  "description": "Returns a summary of billing documents generated within a specified time range, including invoices and credit memos, and the total number of accounts that failed to process.",
  "method": "GET",
  "path": "/system-health/billing-documents/volume-summary",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
