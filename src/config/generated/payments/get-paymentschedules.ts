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
  "queryParams": [
    {
      "name": "lastProcessedItems",
      "label": "Last Processed Items",
      "type": "number",
      "required": false,
      "description": "Number of the most recent processed payment schedules dispalyed in the response body."
    },
    {
      "name": "nextPendingItems",
      "label": "Next Pending Items",
      "type": "number",
      "required": false,
      "description": "Number of next pending payment schedule items displayed in the response body."
    },
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the customer account. If neither `accountId` nor `accountNumber` is specified, all payment schedules will be returned."
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "number",
      "required": false,
      "description": "The number of the customer account. If neither `accountId` nor `accountNumber` is specified, all payment schedules will be returned."
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
