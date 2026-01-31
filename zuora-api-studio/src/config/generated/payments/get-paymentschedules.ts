import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentschedulesEndpoint: ApiEndpoint = {
  "id": "get-paymentschedules",
  "name": "List payment schedules by customer account",
  "description": "Retrieves payment schedules of a customer account.",
  "method": "GET",
  "path": "/v1/payment-schedules",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
