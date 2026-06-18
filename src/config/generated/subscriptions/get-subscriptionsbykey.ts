import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_subscriptionsbykeyEndpoint: ApiEndpoint = {
  "id": "get-subscriptionsbykey",
  "name": "Retrieve a subscription by key",
  "description": "This REST API reference describes how to retrieve detailed information",
  "method": "GET",
  "path": "/v1/subscriptions/{subscription-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscription-key",
      "label": "Subscription Key",
      "type": "string",
      "required": true,
      "description": "Possible values are: * a subscription number * a subscription ID"
    }
  ],
  "queryParams": [
    {
      "name": "charge-detail",
      "label": "Charge Detail",
      "type": "string",
      "required": false,
      "description": "The segmented rate plan charges. When an amendment results in a change to a charge, Zuora creates a segmented rate plan charge. Use this field to track segment charges. Possible values are: * __last-segment__: (Default) The last rate plan charge on the subscription, that is, the last segmented rate plan charge with the maximum start and end dates. * __current-segment__: The segmented charge that is active on today’s date (effectiveStartDate `ratePlanCharges` >`chargeSegments` nested field is returned in the response. The `chargeSegments` field contains an array of the charge information for all the charge segments. * __specific-segment__: Use this value together with `as-of-date={specificDate}`. The segmented charge that is active on a date you specified ((specific date = effectiveStartDate) OR (effectiveStartDate < specific date < effectiveEndDate)) is returned. The format of the date is `yyyy-mm-dd`."
    },
    {
      "name": "as-of-date",
      "label": "As Of Date",
      "type": "string",
      "required": false,
      "description": "The date for `charge-detail`. It is only available when `charge-detail` is `specific-segment`. The date should be in the format `YYYY-MM-DD`."
    },
    {
      "name": "exclude-rate-plans-with-no-charges",
      "label": "Exclude Rate Plans With No Charges",
      "type": "boolean",
      "required": false,
      "description": "When a rate plan charge has multiple segments, the last segment is returned by default. If this charge has been removed before the start date of the last segment (the latest one), with this parameter set to `true`, this charge is excluded from the response; If all the charges under a rate plan are excluded, the rate plan is not returned in the response. The default value is `false`."
    },
    {
      "name": "getDetailedMetrics",
      "label": "Get Detailed Metrics",
      "type": "boolean",
      "required": false,
      "description": "If the `getDetailedMetrics` field is `true`, `contractedNetMrr`, `asOfDayGrossMrr`, `asOfDayNetMrr`, and `netTotalContractedValue` will be in the response. The default value is `false`.",
      "defaultValue": false
    },
    {
      "name": "asOfDay",
      "label": "As Of Day",
      "type": "string",
      "required": false,
      "description": "The date for detailed metrics. Only available when `getDetailedMetrics` is `true`. The date should be in the format `YYYY-MM-DD`. The default value is the current date."
    },
    {
      "name": "getInvoiceOwnerDetails",
      "label": "Get Invoice Owner Details",
      "type": "boolean",
      "required": false,
      "description": "Retrieves the invoice owner of a subscription. If this parameter is set to `true`, the invoice owner account details `invoiceOwnerAccountDetails` will be in the response."
    },
    {
      "name": "getSubscriptionOwnerDetails",
      "label": "Get Subscription Owner Details",
      "type": "boolean",
      "required": false,
      "description": "Retrieves the owner of a subscription. If this parameter is set to `true`, the subscription owner account details `accountOwnerDetails` will be in the response."
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
