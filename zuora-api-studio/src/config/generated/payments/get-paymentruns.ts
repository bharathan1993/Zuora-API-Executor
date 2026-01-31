import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentrunsEndpoint: ApiEndpoint = {
  "id": "get-paymentruns",
  "name": "List payment runs",
  "description": "Retrieves the information about all payment runs. You can define filterable fields to restrict the data returned in the response.",
  "method": "GET",
  "path": "/v1/payment-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
