import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_customexchangeratesEndpoint: ApiEndpoint = {
  "id": "get-customexchangerates",
  "name": "List custom exchange rates by currency",
  "description": "This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). ",
  "method": "GET",
  "path": "/v1/custom-exchange-rates/{currency}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "description": "Path parameter: currency",
      "placeholder": "Enter currency"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
