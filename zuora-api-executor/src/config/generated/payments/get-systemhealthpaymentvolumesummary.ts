import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_systemhealthpaymentvolumesummaryEndpoint: ApiEndpoint = {
  "id": "get-systemhealthpaymentvolumesummary",
  "name": "List payment volume summary records",
  "description": "Returns a summary of electronic payments handled by your Zuora tenant within a specified time range.",
  "method": "GET",
  "path": "/system-health/payments/volume-summary",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
