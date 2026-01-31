import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_einvoicefiletemplatesEndpoint: ApiEndpoint = {
  "id": "get-einvoicefiletemplates",
  "name": "List e-invoice file templates",
  "description": "Lists information about e-invoice file templates.",
  "method": "GET",
  "path": "/v1/einvoice/templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
