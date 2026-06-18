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
      "description": "The API name of the custom payment method type, such as `AmazonPay__c_12368`."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
