import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_listapplepaydomainsEndpoint: ApiEndpoint = {
  "id": "get-listapplepaydomains",
  "name": "List registered Apple Pay domains",
  "description": "Use this operation to retrieve details of your domains that are already registered with Apple for Apple Pay button integration implemented through Zuora's JavaScript SDK.",
  "method": "GET",
  "path": "/v1/payment-methods/apple-pay/domains",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
