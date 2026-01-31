import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_einvoicingbusinessregionsEndpoint: ApiEndpoint = {
  "id": "get-einvoicingbusinessregions",
  "name": "List e-invoicing business regions",
  "description": "Lists information about e-invoicing business regions.",
  "method": "GET",
  "path": "/v1/einvoice/business-regions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
