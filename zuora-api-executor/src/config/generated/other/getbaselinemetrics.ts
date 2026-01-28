import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getbaselinemetricsEndpoint: ApiEndpoint = {
  "id": "getbaselinemetrics",
  "name": "List the baseline metrics",
  "description": "Gets baseline metrics for Configurable Payment Retry, including Retry Success Rate and trend, Document Success Rate and trend, and Average Days Outstanding and trend. See Response Schema for detailed descriptions of the metrics.",
  "method": "GET",
  "path": "/api/v1/metrics/baseline",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
