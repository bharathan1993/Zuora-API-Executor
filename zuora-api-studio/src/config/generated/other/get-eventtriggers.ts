import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_eventtriggersEndpoint: ApiEndpoint = {
  "id": "get-eventtriggers",
  "name": "List event triggers",
  "description": "",
  "method": "GET",
  "path": "/events/event-triggers",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
