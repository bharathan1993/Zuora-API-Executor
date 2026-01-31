import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allaccountingcodesEndpoint: ApiEndpoint = {
  "id": "get-allaccountingcodes",
  "name": "List all accounting codes",
  "description": "This reference describes how to query all accounting codes in your chart of accounts through the REST API.",
  "method": "GET",
  "path": "/v1/accounting-codes",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
