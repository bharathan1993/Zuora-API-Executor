import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getamountrecoveredEndpoint: ApiEndpoint = {
  "id": "getamountrecovered",
  "name": "List the amount recovered metrics",
  "description": "Gets the Amount Recovered metrics, including the total amount recovered and the amount recovered over the last 30 days broken down by currency.",
  "method": "GET",
  "path": "/api/v1/metrics/amount_recovered",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
