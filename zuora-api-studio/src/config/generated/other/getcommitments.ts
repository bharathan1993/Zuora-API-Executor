import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcommitmentsEndpoint: ApiEndpoint = {
  "id": "getcommitments",
  "name": "List commitments for an account",
  "description": "Retrieves a paginated list of commitments for a commitment owner account.",
  "method": "GET",
  "path": "/v1/commitments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
