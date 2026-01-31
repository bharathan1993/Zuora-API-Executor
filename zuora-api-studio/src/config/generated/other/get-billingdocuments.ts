import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_billingdocumentsEndpoint: ApiEndpoint = {
  "id": "get-billingdocuments",
  "name": "List billing documents for an account",
  "description": "Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos.",
  "method": "GET",
  "path": "/v1/billing-documents",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
