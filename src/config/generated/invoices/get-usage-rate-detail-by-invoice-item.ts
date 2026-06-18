import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_usage_rate_detail_by_invoice_itemEndpoint: ApiEndpoint = {
  "id": "get-usage-rate-detail-by-invoice-item",
  "name": "Retrieve usage rate detail for an invoice item",
  "description": "Use this REST API operation to retrieve the usage rate detail for an invoice item to understand how the total amount is calculated. The information is the same as the Rate Detail presented on [PDF invoices](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/IA_Invoices/Create_a_custom_invoice_template/DD_Display_Usage_Charge_Breakdown#How_UsageSummary.RateDetail_is_displayed_on_invoices).",
  "method": "GET",
  "path": "/v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoice-item-id",
      "label": "Invoice Item Id",
      "type": "string",
      "required": true,
      "description": "Invoice item ID. For example, `402880e57f725d85017f7267c4ad002b`. Available through Data Source export."
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
