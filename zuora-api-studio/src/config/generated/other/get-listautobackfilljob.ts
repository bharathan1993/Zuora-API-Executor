import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_listautobackfilljobEndpoint: ApiEndpoint = {
  "id": "get-listautobackfilljob",
  "name": "List all auto backfill jobs",
  "description": "Use this operation to list all auto backfill jobs.",
  "method": "GET",
  "path": "/v1/uno/data-backfill/propagation/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
