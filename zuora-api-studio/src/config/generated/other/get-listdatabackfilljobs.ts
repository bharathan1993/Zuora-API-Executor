import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_listdatabackfilljobsEndpoint: ApiEndpoint = {
  "id": "get-listdatabackfilljobs",
  "name": "List all data backfill jobs",
  "description": "",
  "method": "GET",
  "path": "/v1/uno/data-backfill/listjobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
