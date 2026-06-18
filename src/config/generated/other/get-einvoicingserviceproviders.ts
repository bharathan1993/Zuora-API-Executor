import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_einvoicingserviceprovidersEndpoint: ApiEndpoint = {
  "id": "get-einvoicingserviceproviders",
  "name": "List e-invoicing service providers",
  "description": "Lists information about e-invoicing service providers.",
  "method": "GET",
  "path": "/v1/einvoice/service-providers",
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
