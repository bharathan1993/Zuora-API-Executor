import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const triggerpredebitnotificationEndpoint: ApiEndpoint = {
  "id": "triggerpredebitnotification",
  "name": "Trigger a pre-debit notification",
  "description": "To support processing recurring UPI payments through Adyen Integration v2.0,",
  "method": "POST",
  "path": "/v1/payment-gateways/pre-debit-notification",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true,
      "description": "The unique identifier for an invoice. It can be either a UUID such as `2c92c8955bd63cc1015bd7c151af0000`, or an invoice number such as `INV-0000001`.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "paymentGatewayId",
      "label": "Payment Gateway Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment gateway used to process the payment, such as `8ad08aef83d0c3000183d4b5a2d51933`. If it is not provided, the ID of the default payment gateway is used.",
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethodId",
      "label": "Payment Method Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment method used for the payment, such as `4ad08aef83d0c30102183d4b5a2d51733`. If it is not provided, the ID of the default payment method is used.",
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
