import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentgatewaysEndpoint: ApiEndpoint = {
  "id": "get-paymentgateways",
  "name": "List all payment gateways",
  "description": "Retrieves the basic information about all the payment gateways.",
  "method": "GET",
  "path": "/v1/paymentgateways",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
