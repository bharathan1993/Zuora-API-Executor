import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryusagebykeyEndpoint: ApiEndpoint = {
  "id": "queryusagebykey",
  "name": "Retrieve a usage record",
  "description": "Retrieve the details of a specific Usage Record object.",
  "method": "GET",
  "path": "/object-query/usages/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
