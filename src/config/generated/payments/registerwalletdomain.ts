import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const registerwalletdomainEndpoint: ApiEndpoint = {
  "id": "registerwalletdomain",
  "name": "Register a wallet domain",
  "description": "Before adding Apple Pay to your checkout flow by integrating with the JavaScript SDK provided by Zuora, your domains that will show the Apple Pay button must be registered with Apple. Use this operation to register a domain.",
  "method": "POST",
  "path": "/v1/payment-methods/wallet/domains",
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
      "description": "The name of the domain to be registered. for example, `testapplepay.zuora.com`.",
      "section": "Account Settings"
    },
    {
      "name": "walletType",
      "label": "Wallet Type",
      "type": "string",
      "required": true,
      "description": "The type of digital wallet for the domain registration. This field is required and determines which wallet-specific domain management flow is executed.",
      "enum": [
        "ApplePay",
        "GooglePay"
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
