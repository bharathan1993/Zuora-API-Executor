import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_subscriptionsbyaccountEndpoint: ApiEndpoint = {
  "id": "get-subscriptionsbyaccount",
  "name": "List subscriptions by account key",
  "description": "Retrieves all subscriptions associated with the specified account. Zuora only returns the latest version of the subscriptions.",
  "method": "GET",
  "path": "/v1/subscriptions/accounts/{account-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account-key",
      "label": "Account Key",
      "type": "string",
      "required": true,
      "description": "Possible values are: * an account number * an account ID"
    }
  ],
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "The index number of the page that you want to retrieve. This parameter is dependent on `pageSize`. You must set `pageSize` before specifying `page`. For example, if you set `pageSize` to `20` and `page` to `2`, the 21st to 40th records are returned in the response.",
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "The number of records returned per page in the response.",
      "defaultValue": 20
    },
    {
      "name": "charge-detail",
      "label": "Charge Detail",
      "type": "string",
      "required": false,
      "description": "The segmented rate plan charges. When an amendment results in a change to a charge, Zuora creates a segmented rate plan charge. Use this field to track segment charges. Possible values are: * __last-segment__: (Default) The last rate plan charge on the subscription, that is, the last segmented rate plan charge with the maximum start and end dates. * __current-segment__: The segmented charge that is active on today’s date (effectiveStartDate <= today’s date <= effectiveEndDate). * __all-segments__: All the segmented charges. The `chargeSegments` field is returned in the response. The `chargeSegments` field contains an array of the charge information for all the charge segments. * __specific-segment&as-of-date=date__: The segmented charge that is active on a date you specified (effectiveStartDate <= specific date < effectiveEndDate). The format of the date is yyyy-mm-dd."
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
