import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getpaymentmethodsnapshotEndpoint: ApiEndpoint = {
  "id": "object-getpaymentmethodsnapshot",
  "name": "CRUD: Retrieve a payment method snapshot",
  "description": "This REST API reference describes how to retrieve a Payment Method Snapshot.",
  "method": "GET",
  "path": "/v1/object/payment-method-snapshot/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
