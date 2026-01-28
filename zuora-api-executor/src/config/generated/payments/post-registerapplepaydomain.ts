import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_registerapplepaydomainEndpoint: ApiEndpoint = {
  "id": "post-registerapplepaydomain",
  "name": "Register an Apple Pay domain",
  "description": "Before adding Apple Pay to your checkout flow by integrating with the JavaScript SDK provided by Zuora, your domains that will show the Apple Pay button must be registered with Apple. Use this operation to register a domain. ",
  "method": "POST",
  "path": "/v1/payment-methods/apple-pay/domains",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "domainName",
      "label": "Domain Name",
      "type": "string",
      "required": true,
      "description": "The name of the domain to be registered with Apple Pay, such as `testapplepay.zuora.com`.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
