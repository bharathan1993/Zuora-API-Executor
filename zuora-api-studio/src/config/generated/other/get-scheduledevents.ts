import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_scheduledeventsEndpoint: ApiEndpoint = {
  "id": "get-scheduledevents",
  "name": "List all scheduled events",
  "description": "",
  "method": "GET",
  "path": "/events/scheduled-events",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
