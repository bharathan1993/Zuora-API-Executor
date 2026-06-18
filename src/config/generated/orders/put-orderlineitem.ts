import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_orderlineitemEndpoint: ApiEndpoint = {
  "id": "put-orderlineitem",
  "name": "Update an order line item",
  "description": "**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default. If you are a new customer who onboard on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) and want to enable the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature, submit a request at [Zuora Global Support](https://support.zuora.com/). If you are an existing [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) customer and want to enable the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature, submit a request at [Zuora Global Support](https://support.zuora.com/).",
  "method": "PUT",
  "path": "/v1/order-line-items/{itemId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "itemId",
      "label": "Item Id",
      "type": "string",
      "required": true,
      "description": "The id of the Order Line Item to update."
    }
  ],
  "bodyFields": [
    {
      "name": "UOM",
      "label": "U O M",
      "type": "string",
      "required": false,
      "description": "Specifies the units to measure usage. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Additional Fields"
    },
    {
      "name": "amountPerUnit",
      "label": "Amount Per Unit",
      "type": "number",
      "required": false,
      "description": "The actual charged amount per unit for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Additional Fields"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of an Order Line Item object.",
      "section": "Additional Fields"
    },
    {
      "name": "inlineDiscountPerUnit",
      "label": "Inline Discount Per Unit",
      "type": "number",
      "required": false,
      "description": "You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`). Use this field in accordance with the `inlineDiscountType` field, in the following manner: * If the `inlineDiscountType` field is set as `Percentage`, this field specifies the discount percentage for each unit of the order line item. For exmaple, if you specify `5` in this field, the discount percentage is 5%. * If the `inlineDiscountType` field is set as `FixedAmount`, this field specifies the discount amount on each unit of the order line item. For exmaple, if you specify `10` in this field, the discount amount on each unit of the order line item is 10. Once you set the `inlineDiscountType`, `inlineDiscountPerUnit`, and `listPricePerUnit` fields, the system will automatically generate the `amountPerUnit` field. You shall not set the `amountPerUnit` field by yourself.",
      "section": "Additional Fields"
    },
    {
      "name": "inlineDiscountType",
      "label": "Inline Discount Type",
      "type": "string",
      "required": false,
      "description": "You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`). Use this field to specify the inline discount type, which can be `Percentage`, `FixedAmount`, or `None`. The default value is `Percentage`. Use this field together with the `inlineDiscountPerUnit` field to specify inline discounts for order line items. The inline discount is applied to the list price of an order line item. Once you set the `inlineDiscountType`, `inlineDiscountPerUnit`, and `listPricePerUnit` fields, the system will automatically generate the `amountPerUnit` field. You shall not set the `amountPerUnit` field by yourself.",
      "enum": [
        "Percentage",
        "FixedAmount",
        "None"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "isAllocationEligible",
      "label": "Is Allocation Eligible",
      "type": "boolean",
      "required": false,
      "description": "This field is used to identify if the charge segment is allocation eligible in revenue recognition. **Note**: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.",
      "section": "Additional Fields"
    },
    {
      "name": "itemState",
      "label": "Item State",
      "type": "string",
      "required": false,
      "description": "The state of the Order Line Item (OLI). See [State transitions for an order, order line item, and fulfillment](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information. To generate invoice for an OLI, you must set this field to `SentToBilling` and set the `billTargetDate` field . You can update this field for a sales or return OLI only when the OLI is in the `Executing` or 'Booked' or `SentToBilling`state (when the `itemState` field is set as `Executing` or `SentToBilling`).",
      "enum": [
        "Executing",
        "Booked",
        "SentToBilling",
        "Complete",
        "Canceled"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "itemType",
      "label": "Item Type",
      "type": "string",
      "required": false,
      "description": "The type of the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "enum": [
        "Product",
        "Fee",
        "Services"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "listPricePerUnit",
      "label": "List Price Per Unit",
      "type": "number",
      "required": false,
      "description": "The list price per unit for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Additional Fields"
    },
    {
      "name": "productCode",
      "label": "Product Code",
      "type": "string",
      "required": false,
      "description": "The product code for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Additional Fields"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "number",
      "required": false,
      "description": "The quantity of units, such as the number of authors in a hosted wiki service. You can update this field for a sales or return OLI only when the OLI in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Additional Fields"
    },
    {
      "name": "revenueRecognitionRule",
      "label": "Revenue Recognition Rule",
      "type": "string",
      "required": false,
      "description": "The Revenue Recognition rule for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Additional Fields"
    },
    {
      "name": "revenueRecognitionTiming",
      "label": "Revenue Recognition Timing",
      "type": "string",
      "required": false,
      "description": "Specifies the type of revenue recognition timing. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`). **Note**: This field is only available if you have the Order to Revenue feature enabled.",
      "enum": [
        "Upon Billing Document Posting Date",
        "Upon Order Activation Date"
      ],
      "maxLength": 200,
      "section": "Additional Fields"
    },
    {
      "name": "revenueAmortizationMethod",
      "label": "Revenue Amortization Method",
      "type": "string",
      "required": false,
      "description": "Specifies the type of revenue amortization method. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`). **Note**: This field is only available if you have the Order to Revenue feature enabled.",
      "enum": [
        "Immediate",
        "Ratable Using Start And End Dates"
      ],
      "maxLength": 200,
      "section": "Additional Fields"
    },
    {
      "name": "sequenceSetId",
      "label": "Sequence Set Id",
      "type": "string",
      "required": false,
      "description": "The ID or number of the sequence set associated with the order line item. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body. - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.",
      "section": "Additional Fields"
    },
    {
      "name": "transactionEndDate",
      "label": "Transaction End Date",
      "type": "date",
      "required": false,
      "description": "The date a transaction is completed. The default value of this field is the transaction start date. Also, the value of this field should always equal or be later than the value of the `transactionStartDate` field. You can update this field for a sales or return OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Additional Fields"
    },
    {
      "name": "transactionStartDate",
      "label": "Transaction Start Date",
      "type": "date",
      "required": false,
      "description": "The date a transaction starts. The default value of this field is the order date. You can update this field for a sales or return OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Additional Fields"
    },
    {
      "name": "accountingCode",
      "label": "Accounting Code",
      "type": "string",
      "required": false,
      "description": "The accountingCode for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "adjustmentLiabilityAccountingCode",
      "label": "Adjustment Liability Accounting Code",
      "type": "string",
      "required": false,
      "description": "The accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "adjustmentRevenueAccountingCode",
      "label": "Adjustment Revenue Accounting Code",
      "type": "string",
      "required": false,
      "description": "The accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "contractAssetAccountingCode",
      "label": "Contract Asset Accounting Code",
      "type": "string",
      "required": false,
      "description": "The accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "contractLiabilityAccountingCode",
      "label": "Contract Liability Accounting Code",
      "type": "string",
      "required": false,
      "description": "The accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "contractRecognizedRevenueAccountingCode",
      "label": "Contract Recognized Revenue Accounting Code",
      "type": "string",
      "required": false,
      "description": "The accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "deferredRevenueAccountingCode",
      "label": "Deferred Revenue Accounting Code",
      "type": "string",
      "required": false,
      "description": "The deferred revenue accounting code for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "excludeItemBillingFromRevenueAccounting",
      "label": "Exclude Item Billing From Revenue Accounting",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to exclude the related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.",
      "section": "Account Settings"
    },
    {
      "name": "excludeItemBookingFromRevenueAccounting",
      "label": "Exclude Item Booking From Revenue Accounting",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to exclude the related rate plan charges and order line items from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.",
      "section": "Account Settings"
    },
    {
      "name": "itemName",
      "label": "Item Name",
      "type": "string",
      "required": false,
      "description": "The name of the Order Line Item (OLI). You can update this field for a sales or return OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "ownerAccountNumber",
      "label": "Owner Account Number",
      "type": "string",
      "required": false,
      "description": "Use this field to assign an existing account as the owner of an order line item. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "purchaseOrderNumber",
      "label": "Purchase Order Number",
      "type": "string",
      "required": false,
      "description": "Used by customers to specify the Purchase Order Number provided by the buyer. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "recognizedRevenueAccountingCode",
      "label": "Recognized Revenue Accounting Code",
      "type": "string",
      "required": false,
      "description": "The recognized revenue accounting code for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "relatedSubscriptionNumber",
      "label": "Related Subscription Number",
      "type": "string",
      "required": false,
      "description": "Use this field to relate an order line item to an subscription. Specify this field to the subscription number of the subscription to relate. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "invoiceGroupNumber",
      "label": "Invoice Group Number",
      "type": "string",
      "required": false,
      "description": "The number of the invoice group associated with the order line item. After enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping). **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body. - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.",
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "unbilledReceivablesAccountingCode",
      "label": "Unbilled Receivables Accounting Code",
      "type": "string",
      "required": false,
      "description": "The accounting code on the Order Line Item object. This field is available only if you have enabled Order to Revenue or Zuora Billing - Revenue Integration feature. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Account Settings"
    },
    {
      "name": "billTargetDate",
      "label": "Bill Target Date",
      "type": "date",
      "required": false,
      "description": "The target date for the Order Line Item (OLI) to be picked up by bill run for generating billing documents. To generate billing documents for an OLI, you must set this field and set the `itemState` field to `SentToBilling`. You can update this field for a sales or return OLI only when the OLI is in the `Executing` or `Booked` state.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billTo",
      "label": "Bill To",
      "type": "string",
      "required": false,
      "description": "The ID of the bill-to contact of an order line item. Specify an existing contact under the billing account as the bill-to contact of the order line item. The billing account is the order account. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billingRule",
      "label": "Billing Rule",
      "type": "string",
      "required": false,
      "description": "The rule for billing of the Order Line Item (OLI). You can update this field for a sales or return OLI only when it is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "defaultValue": "TriggerWithoutFulfillment",
      "enum": [
        "TriggerWithoutFulfillment",
        "TriggerAsFulfillmentOccurs"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "isUnbilled",
      "label": "Is Unbilled",
      "type": "boolean",
      "required": false,
      "description": "This field is used to dictate how to perform the accounting during revenue recognition. **Note**: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceTemplateId",
      "label": "Invoice Template Id",
      "type": "string",
      "required": false,
      "description": "The ID of the invoice template associated with the order line item. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body. - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "paymentTerm",
      "label": "Payment Term",
      "type": "string",
      "required": false,
      "description": "The payment term name associated with the order line item. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body. - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.",
      "section": "Payment Settings"
    },
    {
      "name": "shipTo",
      "label": "Ship To",
      "type": "string",
      "required": false,
      "description": "Use this field to assign an existing account as the ship-to contact of an order line item, by the following rules: * If the `ownerAccountNumber` field is set, then this field must be the ID of a contact that belongs to the owner account of the order line item. * If the `ownerAccountNumber` field is not set, then this field must be the ID of a contact that belongs to the billing account of the order line item. The billing account is the order account. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Contact Information"
    },
    {
      "name": "soldTo",
      "label": "Sold To",
      "type": "string",
      "required": false,
      "description": "Use this field to assign an existing account as the sold-to contact of an order line item, by the following rules: * If the `ownerAccountNumber` field is set, then this field must be the ID of a contact that belongs to the owner account of the order line item. * If the `ownerAccountNumber` field is not set, then this field must be the ID of a contact that belongs to the billing account of the order line item. The billing account is the order account. You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Contact Information"
    },
    {
      "name": "taxCode",
      "label": "Tax Code",
      "type": "string",
      "required": false,
      "description": "The tax code for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "section": "Tax Settings"
    },
    {
      "name": "taxMode",
      "label": "Tax Mode",
      "type": "string",
      "required": false,
      "description": "The tax mode for the Order Line Item (OLI). You can update this field only for a sales OLI and only when the sales OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).",
      "enum": [
        "TaxInclusive",
        "TaxExclusive"
      ],
      "section": "Tax Settings"
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
