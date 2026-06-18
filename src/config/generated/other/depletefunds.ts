import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const depletefundsEndpoint: ApiEndpoint = {
  "id": "depletefunds",
  "name": "Deplete funds",
  "description": "Depleting a prepaid balance fund enables you to expire the remaining balance, which can be recognized by revenue. When an expiry request is received, the remaining fund balance is reduced to zero, and the related objects like PrepaidBalance, ValidityPeriodSummary, PrepaidBalanceTransaction, and DailyConsumption will be updated.",
  "method": "POST",
  "path": "/v1/prepaid-balance-funds/deplete",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "fundIds",
      "label": "Fund Ids",
      "type": "object",
      "required": false,
      "description": "The unique ID of the fund. A maximum of 100 fund Ids are allowed.",
      "section": "Additional Fields"
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
