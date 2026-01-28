import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_sequencesetsEndpoint: ApiEndpoint = {
  "id": "get-sequencesets",
  "name": "List sequence sets",
  "description": "Retrieves information about all sequence sets configured for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.",
  "method": "GET",
  "path": "/v1/sequence-sets",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
