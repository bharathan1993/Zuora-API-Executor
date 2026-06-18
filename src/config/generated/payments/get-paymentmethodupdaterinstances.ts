import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentmethodupdaterinstancesEndpoint: ApiEndpoint = {
  "id": "get-paymentmethodupdaterinstances",
  "name": "List Payment Method Updater instances",
  "description": "Retrieves the detailed information of all Payment Method Updater (PMU) instances on your tenant, except for American Express (AMEX).",
  "method": "GET",
  "path": "/v1/payment-method-updaters",
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
