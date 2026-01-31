import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getmetricsbysubscriptionnumbersEndpoint: ApiEndpoint = {
  "id": "getmetricsbysubscriptionnumbers",
  "name": "List subscription metrics by subscription numbers",
  "description": "Lists subscription metrics for the subscriptions that you specify by subscription numbers.",
  "method": "GET",
  "path": "/v1/subscriptions/subscription-metrics",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
