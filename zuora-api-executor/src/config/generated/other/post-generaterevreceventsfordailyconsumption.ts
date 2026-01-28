import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_generaterevreceventsfordailyconsumptionEndpoint: ApiEndpoint = {
  "id": "post-generaterevreceventsfordailyconsumption",
  "name": "Regenerate revenue recognition events transactions for Daily Consumption",
  "description": "Use this operation to generate Daily Consumption based revenue recognition events transactions when the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a> feature is enabled.",
  "method": "POST",
  "path": "/v1/uno-regenerate/rev-rec-events/daily-consumption",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "chargeSegmentNumber",
      "label": "Charge Segment Number",
      "type": "string",
      "required": false,
      "description": "Rate plan charge number.\n",
      "section": "Account Settings"
    },
    {
      "name": "fundId",
      "label": "Fund Id",
      "type": "string",
      "required": false,
      "description": "Fund ID. For more information about fund, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a>.\n",
      "section": "Additional Fields"
    },
    {
      "name": "originalChargeId",
      "label": "Original Charge Id",
      "type": "string",
      "required": true,
      "description": "Original rate plan charge ID.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
