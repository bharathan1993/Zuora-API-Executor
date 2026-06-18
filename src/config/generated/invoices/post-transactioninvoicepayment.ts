import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_transactioninvoicepaymentEndpoint: ApiEndpoint = {
  "id": "post-transactioninvoicepayment",
  "name": "Invoice and collect",
  "description": "Generates and posts invoices and credit memos and collects payments for posted invoices. Credit memos are only available if you have the Invoice Settlement feature enabled and negative charges exist. Credit memos will not be applied to invoices. If draft invoices and credit memos exist when you run this operation, this operation will post the invoices and credit memos. Note that draft credit memos created from an invoice or a product rate plan charge will not be posted.",
  "method": "POST",
  "path": "/v1/operations/invoice-collect",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": true,
      "description": "Customer account ID or account number.",
      "section": "Account Settings"
    },
    {
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
      "required": false,
      "description": "The date that should appear on the invoice and credit memo being generated, in `yyyy-mm-dd` format. If this field is omitted and `invoiceId` is not specified, the current date is used by default. **Note:** The credit memo is only available if you have the Invoice Settlement feature enabled. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `215.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceId",
      "label": "Invoice Id",
      "type": "string",
      "required": false,
      "description": "The ID or number of an existing invoice for which to collect payment using the account's default payment method. If this value is specified, no new invoice is generated, and the following fields are ignored: - `invoiceDate` and `invoiceTargetDate` (if the Zuora minor API version is 214.0 or earlier) - `documentDate` and `targetDate` (if the Zuora minor API version is 215.0 or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version))",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "description": "The name of the gateway that will be used for the payment. Must be a valid gateway name and the gateway must support the specific payment method. If a value is not specified, the default gateway on the Account will be used.",
      "section": "Payment Settings"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "description": "The date through which to calculate charges on this account if an invoice or a credit memo is generated, in `yyyy-mm-dd` format. If this field is omitted and `invoiceId` is not specified, the current date is used by default. This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `215.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version). **Note:** The credit memo is only available if you have the Invoice Settlement feature enabled.",
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
