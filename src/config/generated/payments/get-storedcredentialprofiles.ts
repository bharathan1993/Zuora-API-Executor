import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_storedcredentialprofilesEndpoint: ApiEndpoint = {
  "id": "get-storedcredentialprofiles",
  "name": "List stored credential profiles of a payment method",
  "description": "Retrieves the stored credential profiles within a payment method.",
  "method": "GET",
  "path": "/v1/payment-methods/{payment-method-id}/profiles",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
      "type": "string",
      "required": true,
      "description": "ID of a payment method."
    }
  ],
  "queryParams": [
    {
      "name": "includeAll",
      "label": "Include All",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether to retrieve all the stored credential profiles within the payment method. By default, Zuora returns only the stored credential profiles with `Agreed` or `Active` status. If you set this parameter to `true`, Zuora returns all the stored credential profiles.",
      "defaultValue": false
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
