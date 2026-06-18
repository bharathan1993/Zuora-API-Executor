import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getwalletdomainsEndpoint: ApiEndpoint = {
  "id": "getwalletdomains",
  "name": "List registered domains",
  "description": "Use this operation to retreive list of registered domains.",
  "method": "GET",
  "path": "/v1/payment-methods/wallet/domains",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "domainName",
      "label": "Domain Name",
      "type": "string",
      "required": false,
      "description": "Specifies a domain name such as `zuora.com` and the registered domains containing the specified domain name will be returned. For example, `test1.zuora.com` and `test2.zuora.com` are two registered domains, but `zuora.com` is not registered. If you specify `zuora.com` in this query field, the data of `test1.zuora.com` and `test2.zuora.com` will be returned."
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
      ]
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
