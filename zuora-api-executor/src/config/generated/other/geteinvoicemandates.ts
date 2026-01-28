import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const geteinvoicemandatesEndpoint: ApiEndpoint = {
  "id": "geteinvoicemandates",
  "name": "List mandates for downloading files",
  "description": "Fetches mandates for downloading files based on the country code, category, and process type selection. ",
  "method": "GET",
  "path": "/v1/e-invoice/mandates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
