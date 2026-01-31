import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_listbookingdatebackfilljobsEndpoint: ApiEndpoint = {
  "id": "get-listbookingdatebackfilljobs",
  "name": "List all booking date backfill jobs",
  "description": "Use this operation to list all booking date backfill jobs.",
  "method": "GET",
  "path": "/v1/uno/data-backfill/bookingdate/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
