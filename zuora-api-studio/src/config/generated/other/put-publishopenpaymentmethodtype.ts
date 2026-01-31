import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_publishopenpaymentmethodtypeEndpoint: ApiEndpoint = {
  "id": "put-publishopenpaymentmethodtype",
  "name": "Publish a custom payment method type",
  "description": "Publish the latest draft revision of a specific custom payment method type.",
  "method": "PUT",
  "path": "/open-payment-method-types/publish/{paymentMethodTypeName}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentMethodTypeName",
      "label": "Payment Method Type Name",
      "type": "string",
      "required": true,
      "description": "Path parameter: paymentMethodTypeName",
      "placeholder": "Enter payment method type name"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
