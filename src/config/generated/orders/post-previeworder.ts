import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_previeworderEndpoint: ApiEndpoint = {
  "id": "post-previeworder",
  "name": "Preview an order",
  "description": "**Notes**:",
  "method": "POST",
  "path": "/v1/orders/preview",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "summarizeInvoiceItem",
      "label": "Summarize Invoice Item",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to return aggregated invoice item summaries for each invoice. With this parameter set to `true`, the `invoices` > `invoiceItemSummary` field is returned in the preview result. The aggregated `invoiceItemSummary` field provides a forecast of the number of future invoices (`previewInvoiceSequence`), and the following information for each invoice: - `subTotal` - `total` - `taxAmount` - `discountAmount` - `servicePeriodStartDate` - `servicePeriodEndDate`",
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": false,
      "description": "Category of the order to indicate a product sale or return. Default value is `NewSales`.",
      "defaultValue": "NewSales",
      "enum": [
        "NewSales",
        "Return"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of an Order object.",
      "section": "Additional Fields"
    },
    {
      "name": "orderDate",
      "label": "Order Date",
      "type": "date",
      "required": true,
      "description": "The date when the order is signed. All of the order actions under this order will use this order date as the contract effective date.",
      "section": "Additional Fields"
    },
    {
      "name": "orderLineItems",
      "label": "Order Line Items",
      "type": "array",
      "required": false,
      "description": "[Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) are non subscription based items created by an Order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services. With the Order Line Items feature enabled, you can now launch non-subscription and unified monetization business models in Zuora, in addition to subscription business models. If you do not have the **Create Order Line Items Without Product Catalog** billing permission, you can only create order line items from existing products by specifying the product rate plan charge ID in the `productRatePlanChargeId` field. For more information about billing permissions, see Billing Roles. **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "UOM",
          "label": "U O M",
          "type": "string",
          "required": false,
          "description": "Specifies the units to measure usage.",
          "section": "Additional Fields"
        },
        {
          "name": "accountingCode",
          "label": "Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for the Order Line Item.",
          "section": "Account Settings"
        },
        {
          "name": "adjustmentLiabilityAccountingCode",
          "label": "Adjustment Liability Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).",
          "section": "Account Settings"
        },
        {
          "name": "adjustmentRevenueAccountingCode",
          "label": "Adjustment Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).",
          "section": "Account Settings"
        },
        {
          "name": "amountPerUnit",
          "label": "Amount Per Unit",
          "type": "number",
          "required": false,
          "description": "The actual charged amount per unit for the Order Line Item. If you set the `inlineDiscountType`, `inlineDiscountPerUnit`, and `listPricePerUnit` fields, the system will automatically generate the `amountPerUnit` field. You shall not set the `amountPerUnit` field by yourself.",
          "section": "Additional Fields"
        },
        {
          "name": "billTargetDate",
          "label": "Bill Target Date",
          "type": "date",
          "required": false,
          "description": "The target date for the Order Line Item to be picked up by bill run for billing.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "billTo",
          "label": "Bill To",
          "type": "string",
          "required": false,
          "description": "The ID of the bill-to contact of an order line item. Specify an existing contact under the billing account as the bill-to contact of the order line item. The billing account is the order account. **Note**: If an order's category is set to **Return** in a return Order Line Item, it will inherit the original Order Line Item's `billTo` contact automatically. You cannot specify a different value.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "billingRule",
          "label": "Billing Rule",
          "type": "string",
          "required": false,
          "description": "The billing rule for the Order Line Item.",
          "defaultValue": "TriggerWithoutFulfillment",
          "enum": [
            "TriggerWithoutFulfillment",
            "TriggerAsFulfillmentOccurs"
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "contractAssetAccountingCode",
          "label": "Contract Asset Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).",
          "section": "Account Settings"
        },
        {
          "name": "contractLiabilityAccountingCode",
          "label": "Contract Liability Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).",
          "section": "Account Settings"
        },
        {
          "name": "contractRecognizedRevenueAccountingCode",
          "label": "Contract Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).",
          "section": "Account Settings"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": false,
          "description": "The currency for the order line item. You can specify a currency when creating an order line item through the \"Create an order\" operation.",
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
          "name": "deferredRevenueAccountingCode",
          "label": "Deferred Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The deferred revenue accounting code for the Order Line Item.",
          "section": "Account Settings"
        },
        {
          "name": "excludeItemBillingFromRevenueAccounting",
          "label": "Exclude Item Billing From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude Order Line Item related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.",
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "excludeItemBookingFromRevenueAccounting",
          "label": "Exclude Item Booking From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude Order Line Item from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.",
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "inlineDiscountPerUnit",
          "label": "Inline Discount Per Unit",
          "type": "number",
          "required": false,
          "description": "Use this field in accordance with the `inlineDiscountType` field, in the following manner: * If the `inlineDiscountType` field is set as `Percentage`, this field specifies the discount percentage for each unit of the order line item. For exmaple, if you specify `5` in this field, the discount percentage is 5%. * If the `inlineDiscountType` field is set as `FixedAmount`, this field specifies the discount amount on each unit of the order line item. For exmaple, if you specify `10` in this field, the discount amount on each unit of the order line item is 10. Once you set the `inlineDiscountType`, `inlineDiscountPerUnit`, and `listPricePerUnit` fields, the system will automatically generate the `amountPerUnit` field. You shall not set the `amountPerUnit` field by yourself.",
          "section": "Additional Fields"
        },
        {
          "name": "inlineDiscountType",
          "label": "Inline Discount Type",
          "type": "string",
          "required": false,
          "description": "Use this field to specify the inline discount type, which can be `Percentage`, `FixedAmount`, or `None`. The default value is `Percentage`. Use this field together with the `inlineDiscountPerUnit` field to specify inline discounts for order line items. The inline discount is applied to the list price of an order line item. Once you set the `inlineDiscountType`, `inlineDiscountPerUnit`, and `listPricePerUnit` fields, the system will automatically generate the `amountPerUnit` field. You shall not set the `amountPerUnit` field by yourself.",
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
          "name": "isUnbilled",
          "label": "Is Unbilled",
          "type": "boolean",
          "required": false,
          "description": "This field is used to dictate how to perform the accounting during revenue recognition. **Note**: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "itemCategory",
          "label": "Item Category",
          "type": "string",
          "required": false,
          "description": "The category for the Order Line Item, to indicate a product sale or return.",
          "defaultValue": "Sales",
          "enum": [
            "Sales",
            "Return"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "itemName",
          "label": "Item Name",
          "type": "string",
          "required": false,
          "description": "The name of the Order Line Item.",
          "section": "Account Settings"
        },
        {
          "name": "itemNumber",
          "label": "Item Number",
          "type": "string",
          "required": false,
          "description": "The number of the Order Line Item. Use this field to specify a custom item number for your Order Line Item. If you are to use this field, you must set all the item numbers in an order when there are several order line items in the order.",
          "section": "Account Settings"
        },
        {
          "name": "itemState",
          "label": "Item State",
          "type": "string",
          "required": false,
          "description": "The state of an Order Line Item. If you want to generate billing documents for order line items, you must set this field to `SentToBilling`. For invoice preview, you do not need to set this field. See [State transitions for an order, order line item, and fulfillment](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.",
          "enum": [
            "Executing",
            "Booked",
            "SentToBilling",
            "Complete",
            "Cancelled"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "itemType",
          "label": "Item Type",
          "type": "string",
          "required": false,
          "description": "The type of the Order Line Item.",
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
          "description": "The list price per unit for the Order Line Item.",
          "section": "Additional Fields"
        },
        {
          "name": "originalOrderLineItemNumber",
          "label": "Original Order Line Item Number",
          "type": "string",
          "required": false,
          "description": "The number of the original sale order line item for a return order line item.",
          "section": "Account Settings"
        },
        {
          "name": "originalOrderNumber",
          "label": "Original Order Number",
          "type": "string",
          "required": false,
          "description": "The number of the original sale order for a return order line item.",
          "section": "Account Settings"
        },
        {
          "name": "ownerAccountNumber",
          "label": "Owner Account Number",
          "type": "string",
          "required": false,
          "description": "Use this field to assign an existing account as the owner of an order line item.",
          "section": "Account Settings"
        },
        {
          "name": "productCode",
          "label": "Product Code",
          "type": "string",
          "required": false,
          "description": "The product code for the Order Line Item.",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanChargeId",
          "label": "Product Rate Plan Charge Id",
          "type": "string",
          "required": false,
          "description": "ID of a product rate plan charge. Only one-time charges are supported. If you do not have the **Create Order Line Items Without Product Catalog** billing permission, you must specify this field to create the order line item from an existing product rate plan charge.",
          "section": "Additional Fields"
        },
        {
          "name": "purchaseOrderNumber",
          "label": "Purchase Order Number",
          "type": "string",
          "required": false,
          "description": "Used by customers to specify the Purchase Order Number provided by the buyer.",
          "section": "Account Settings"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "number",
          "required": false,
          "description": "The quantity of units, such as the number of authors in a hosted wiki service.",
          "section": "Additional Fields"
        },
        {
          "name": "recognizedRevenueAccountingCode",
          "label": "Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The recognized revenue accounting code for the Order Line Item.",
          "section": "Account Settings"
        },
        {
          "name": "relatedSubscriptionNumber",
          "label": "Related Subscription Number",
          "type": "string",
          "required": false,
          "description": "Use this field to relate an order line item to a subscription when you create the order line item. * To relate an order line item to a new subscription which is yet to create in the same \"Create an order\" call, use this field in combination with the `subscriptions` > `subscriptionNumber` field in the \"Create an order\" operation. Specify this field to the same value as that of the `subscriptions` > `subscriptionNumber` field when you make the \"Create an order\" call. * To relate an order line item to an existing subscription, specify this field to the subscription number of the existing subscription.",
          "section": "Account Settings"
        },
        {
          "name": "revenueRecognitionRule",
          "label": "Revenue Recognition Rule",
          "type": "string",
          "required": false,
          "description": "The Revenue Recognition rule for the Order Line Item.",
          "section": "Additional Fields"
        },
        {
          "name": "revenueRecognitionTiming",
          "label": "Revenue Recognition Timing",
          "type": "string",
          "required": false,
          "description": "Specifies the type of revenue recognition timing. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. **Note**: This field is only available if you have the Order to Revenue feature enabled.",
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
          "description": "Specifies the type of revenue amortization method. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. **Note**: This field is only available if you have the Order to Revenue feature enabled.",
          "enum": [
            "Immediate",
            "Ratable Using Start And End Dates"
          ],
          "maxLength": 200,
          "section": "Additional Fields"
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
          "name": "sequenceSetId",
          "label": "Sequence Set Id",
          "type": "string",
          "required": false,
          "description": "The ID of the sequence set associated with the order line item. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body. - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.",
          "section": "Additional Fields"
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
          "name": "invoiceTemplateId",
          "label": "Invoice Template Id",
          "type": "string",
          "required": false,
          "description": "The ID of the invoice template associated with the order line item. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body. - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "shipTo",
          "label": "Ship To",
          "type": "string",
          "required": false,
          "description": "Use this field to assign an existing account as the ship-to contact of an order line item, by the following rules: * If the `ownerAccountNumber` field is set, then this field must be the ID of a contact that belongs to the owner account of the order line item. * If the `ownerAccountNumber` field is not set, then this field must be the ID of a contact that belongs to the billing account of the order line item. The billing account is the order account. **Note**: If an order's category is set to **Return** in a return Order Line Item, it will inherit the original Order Line Item's `shipTo` contact automatically. You cannot specify a different value.",
          "section": "Contact Information"
        },
        {
          "name": "soldTo",
          "label": "Sold To",
          "type": "string",
          "required": false,
          "description": "Use this field to assign an existing account as the sold-to contact of an order line item, by the following rules: * If the `ownerAccountNumber` field is set, then this field must be the ID of a contact that belongs to the owner account of the order line item. * If the `ownerAccountNumber` field is not set, then this field must be the ID of a contact that belongs to the billing account of the order line item. The billing account is the order account. **Note**: If an order's category is set to **Return** in a return Order Line Item, it will inherit the original Order Line Item's `soldTo` contact automatically. You cannot specify a different value.",
          "section": "Contact Information"
        },
        {
          "name": "taxCode",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "description": "The tax code for the Order Line Item.",
          "section": "Tax Settings"
        },
        {
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "The tax mode for the Order Line Item.",
          "enum": [
            "TaxInclusive",
            "TaxExclusive"
          ],
          "section": "Tax Settings"
        },
        {
          "name": "transactionEndDate",
          "label": "Transaction End Date",
          "type": "date",
          "required": false,
          "description": "The date a transaction is completed. The default value of this field is the transaction start date. Also, the value of this field should always equal or be later than the value of the `transactionStartDate` field.",
          "section": "Additional Fields"
        },
        {
          "name": "transactionStartDate",
          "label": "Transaction Start Date",
          "type": "date",
          "required": false,
          "description": "The date a transaction starts. The default value of this field is the order date.",
          "section": "Additional Fields"
        },
        {
          "name": "unbilledReceivablesAccountingCode",
          "label": "Unbilled Receivables Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "previewOptions",
      "label": "Preview Options",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "previewNumberOfPeriods",
          "label": "Preview Number Of Periods",
          "type": "number",
          "required": false,
          "description": "The number of periods to preview when the value of the `previewThroughType` field is set to `NumberOfPeriods`.",
          "minLength": 1,
          "section": "Account Settings"
        },
        {
          "name": "previewThruType",
          "label": "Preview Thru Type",
          "type": "string",
          "required": false,
          "description": "The options on how the preview through date is calculated. Available for preview only. - If you set this field to `SpecificDate`, you must specify a specific date in the `specificPreviewThruDate` field. If you also set `billTargetDate` in the `orderLineItems` field, order line items whose `billTargetDate` is no later than `specificPreviewThruDate` are returned. - If you set this field to `NumberOfPeriods`, you must use the `previewNumberOfPeriods` field to specify how many periods you want to preview. In case the order only contains an order line item but not contains a subscription, if you also set `billTargetDate` in the `orderLineItems` field, order line items whose `billTargetDate` is no later than today are returned. - The `TermEnd` option is invalid when any subscription included in this order is evergreen. In case the order only contains an order line item but not contains a subscription, if you set this field to `TermEnd` and set `billTargetDate` in the `orderLineItems` field, order line items whose `billTargetDate` is no later than today are returned.",
          "enum": [
            "SpecificDate",
            "TermEnd",
            "NumberOfPeriods"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "previewTypes",
          "label": "Preview Types",
          "type": "array",
          "required": false,
          "description": "One or more types of the preview. It can include: * ChargeMetrics: charge level metrics will be returned in the response, including: `cmrr`, `tcv`, `tcb`, and `tax`. * BillingDocs: `invoices` and `creditMemos` will be returned in the response. Note `creditMemos` is only available if the Invoice Settlement feature is enabled. * OrderDeltaMetrics: order delta metrics will be returned in the response, including: `orderDeltaMrr`, `orderDeltaTcb` and `orderDeltaTcv`. * OrderMetrics: order metrics will be returned in the response, including: `quantity`, `mrr`, `tcb`, `tcv`, and `elp`. **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the OrderDeltaMetrics. It is recommended that all customers use the [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/). Whereas new customers, and existing customers not currently on [Order Metrics](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders/Key_Metrics_for_Orders), will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported. * RampMetrics: ramp metrics will be returned in the response, including: `quantity`, `mrr`, `tcb`, `tcv` metrics for each charge and each ramp interval. * RampDeltaMetrics: ramp metrics changes will be returned in the response, including: `deltaQuantity`, `deltaMrr`, `deltaTcb`, `deltaTcv` metrics for each charge and each ramp interval.",
          "itemType": "string",
          "itemEnum": [
            "ChargeMetrics",
            "BillingDocs",
            "OrderDeltaMetrics",
            "OrderMetrics",
            "RampMetrics",
            "RampDeltaMetrics"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "skipTax",
          "label": "Skip Tax",
          "type": "boolean",
          "required": false,
          "description": "If set to true, the system will bypass the tax calculation during order preview.",
          "defaultValue": false,
          "section": "Tax Settings"
        },
        {
          "name": "specificPreviewThruDate",
          "label": "Specific Preview Thru Date",
          "type": "date",
          "required": false,
          "description": "The end date of the order preview. You can preview the invoice charges through the preview through date. (Invoice preview only) **Note:** This field is only applicable if the 'previewThruType' field is set to 'SpecificDate'.",
          "section": "Additional Fields"
        },
        {
          "name": "validateScheduledOrders",
          "label": "Validate Scheduled Orders",
          "type": "boolean",
          "required": false,
          "description": "By default, scheduled orders are validated during order preview to ensure all orders can be executed successfully. If you do not want to validate all scheduled orders during order preview, set this field to `false`.",
          "defaultValue": true,
          "section": "Additional Fields"
        },
        {
          "name": "chargeTypeToExclude",
          "label": "Charge Type To Exclude",
          "type": "array",
          "required": false,
          "description": "The charge types to exclude from the forecast run.",
          "itemType": "string",
          "itemEnum": [
            "OneTime",
            "Recurring",
            "Usage"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "reasonCode",
      "label": "Reason Code",
      "type": "string",
      "required": false,
      "description": "Values of reason code configured in **Billing Settings** > **Configure Reason Codes** through Zuora UI. Indicates the reason when a return order line item occurs.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "existingAccountId",
      "label": "Existing Account Id",
      "type": "string",
      "required": false,
      "description": "The account ID under which this order will be created. This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the `subscriptionOwnerAccountNumber` and `invoiceOwnerAccountNumber` nested fields in the `subscriptions` field. **Note:** You can specify either the `existingAccountNumber` or `existingAccountId` field, but not both.",
      "section": "Account Settings"
    },
    {
      "name": "existingAccountNumber",
      "label": "Existing Account Number",
      "type": "string",
      "required": false,
      "description": "The account number under which this order will be created. This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the `subscriptionOwnerAccountNumber` and `invoiceOwnerAccountNumber` nested fields in the `subscriptions` field.",
      "maxLength": 70,
      "section": "Account Settings"
    },
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": false,
      "description": "The order number of this order. **Note:** The characters `#`, `?`, and `/` are not allowed in this field. Additionally, to ensure compatibility with the UI when viewing orders, use only the following special characters: `_`,`-`, `.`, `~`, `*`, `(`, `)`, and `'`.",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "previewAccountInfo",
      "label": "Preview Account Info",
      "type": "object",
      "required": false,
      "description": "Information about the account that will own the order.",
      "fields": [
        {
          "name": "billCycleDay",
          "label": "Bill Cycle Day",
          "type": "number",
          "required": true,
          "description": "Day of the month that the account prefers billing periods to begin on. If set to 0, the bill cycle day will be set as \"AutoSet\".",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "description": "ISO 3-letter currency code (uppercase). For example, USD.",
          "maxLength": 3,
          "section": "Additional Fields"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields of an Account object.",
          "section": "Additional Fields"
        },
        {
          "name": "shipToContact",
          "label": "Ship To Contact",
          "type": "object",
          "required": false,
          "description": "Contact details associated with an account.",
          "fields": [
            {
              "name": "address1",
              "label": "Address1",
              "type": "string",
              "required": false,
              "description": "First line of the contact's address. This is often a street address or a business name.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country to calculate tax.",
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Tax Settings"
            }
          ],
          "section": "Contact Information"
        },
        {
          "name": "soldToContact",
          "label": "Sold To Contact",
          "type": "object",
          "required": false,
          "description": "Contact details associated with an account.",
          "fields": [
            {
              "name": "address1",
              "label": "Address1",
              "type": "string",
              "required": false,
              "description": "First line of the contact's address. This is often a street address or a business name.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country to calculate tax.",
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Tax Settings"
            }
          ],
          "section": "Contact Information"
        },
        {
          "name": "taxInfo",
          "label": "Tax Info",
          "type": "object",
          "required": false,
          "description": "Information about the tax exempt status of a customer account.",
          "fields": [
            {
              "name": "VATId",
              "label": "V A T Id",
              "type": "string",
              "required": false,
              "description": "EU Value Added Tax ID. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
              "maxLength": 25,
              "section": "Tax Settings"
            },
            {
              "name": "companyCode",
              "label": "Company Code",
              "type": "string",
              "required": false,
              "description": "Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
              "maxLength": 50,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateId",
              "label": "Exempt Certificate Id",
              "type": "string",
              "required": false,
              "description": "ID of the customer tax exemption certificate. Applicable if you use Zuora Tax or Connect tax engines.",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateType",
              "label": "Exempt Certificate Type",
              "type": "string",
              "required": false,
              "description": "Type of tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptDescription",
              "label": "Exempt Description",
              "type": "string",
              "required": false,
              "description": "Description of the tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.",
              "maxLength": 500,
              "section": "Additional Fields"
            },
            {
              "name": "exemptEffectiveDate",
              "label": "Exempt Effective Date",
              "type": "date",
              "required": false,
              "description": "Date when the customer tax exemption starts, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.",
              "section": "Additional Fields"
            },
            {
              "name": "exemptExpirationDate",
              "label": "Exempt Expiration Date",
              "type": "date",
              "required": false,
              "description": "Date when the customer tax exemption expires, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.",
              "section": "Additional Fields"
            },
            {
              "name": "exemptIssuingJurisdiction",
              "label": "Exempt Issuing Jurisdiction",
              "type": "string",
              "required": false,
              "description": "Jurisdiction in which the customer tax exemption certificate was issued.",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptStatus",
              "label": "Exempt Status",
              "type": "string",
              "required": false,
              "description": "Status of the account tax exemption. Applicable if you use Zuora Tax or Connect tax engines. Required if you use Zuora Tax.",
              "defaultValue": "No",
              "enum": [
                "No",
                "Yes",
                "PendingVerification"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Tax Settings"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "subscriptions",
      "label": "Subscriptions",
      "type": "array",
      "required": false,
      "description": "Each item includes a set of order actions, which will be applied to the same base subscription. When you create an order that involves multiple subscriptions, these subscriptions can have different invoice owner accounts or subscription owner accounts.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields of a Subscription object.",
          "section": "Additional Fields"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "textarea",
          "required": false,
          "description": "Notes about the subscription. These notes are only visible to Zuora users. Notes set in this field will override the value of the `notes` field within the createSubscription order action.",
          "maxLength": 1000,
          "section": "Additional Fields"
        },
        {
          "name": "orderActions",
          "label": "Order Actions",
          "type": "array",
          "required": false,
          "description": "The actions to be applied to the subscription. Order actions will be stored with the sequence when it was provided in the request.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "addProduct",
              "label": "Add Product",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `AddProduct`.",
              "fields": [
                {
                  "name": "chargeOverrides",
                  "label": "Charge Overrides",
                  "type": "array",
                  "required": false,
                  "description": "List of charges associated with the rate plan.",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "accountReceivableAccountingCode",
                      "label": "Account Receivable Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The accountReceivableAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders, Zuora Finance, and Invoice Settlement features are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "adjustmentLiabilityAccountingCode",
                      "label": "Adjustment Liability Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The adjustmentLiabilityAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "adjustmentRevenueAccountingCode",
                      "label": "Adjustment Revenue Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The adjustmentRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "billing",
                      "label": "Billing",
                      "type": "object",
                      "required": false,
                      "description": "Billing information about the charge.",
                      "fields": [
                        {
                          "name": "billCycleDay",
                          "label": "Bill Cycle Day",
                          "type": "number",
                          "required": false,
                          "description": "Day of the month that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofMonth`.",
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billCycleType",
                          "label": "Bill Cycle Type",
                          "type": "string",
                          "required": false,
                          "description": "Specifies how Zuora determines the day that each billing period begins on. * `DefaultFromCustomer` - Each billing period begins on the bill cycle day of the account that owns the subscription. * `SpecificDayofMonth` - Use the `billCycleDay` field to specify the day of the month that each billing period begins on. * `SubscriptionStartDay` - Each billing period begins on the same day of the month as the start date of the subscription. * `ChargeTriggerDay` - Each billing period begins on the same day of the month as the date when the charge becomes active. * `SpecificDayofWeek` - Use the `weeklyBillCycleDay` field to specify the day of the week that each billing period begins on.",
                          "enum": [
                            "DefaultFromCustomer",
                            "SpecificDayofMonth",
                            "SubscriptionStartDay",
                            "ChargeTriggerDay",
                            "SpecificDayofWeek"
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billingPeriod",
                          "label": "Billing Period",
                          "type": "string",
                          "required": false,
                          "description": "Billing frequency of the charge. The value of this field controls the duration of each billing period. If the value of this field is `Specific_Days`, `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.",
                          "enum": [
                            "Month",
                            "Quarter",
                            "Semi_Annual",
                            "Annual",
                            "Eighteen_Months",
                            "Two_Years",
                            "Three_Years",
                            "Five_Years",
                            "Specific_Months",
                            "Subscription_Term",
                            "Week",
                            "Specific_Weeks",
                            "Specific_Days"
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billingPeriodAlignment",
                          "label": "Billing Period Alignment",
                          "type": "string",
                          "required": false,
                          "description": "Specifies how Zuora determines when to start new billing periods. You can use this field to align the billing periods of different charges. * `AlignToCharge` - Zuora starts a new billing period on the first billing day that falls on or after the date when the charge becomes active. * `AlignToSubscriptionStart` - Zuora starts a new billing period on the first billing day that falls on or after the start date of the subscription. * `AlignToTermStart` - For each term of the subscription, Zuora starts a new billing period on the first billing day that falls on or after the start date of the term. See the `billCycleType` field for information about how Zuora determines the billing day. **Note**: This field is not supported in one time charges.",
                          "enum": [
                            "AlignToCharge",
                            "AlignToSubscriptionStart",
                            "AlignToTermStart"
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billingTiming",
                          "label": "Billing Timing",
                          "type": "string",
                          "required": false,
                          "description": "Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).",
                          "enum": [
                            "IN_ADVANCE",
                            "IN_ARREARS"
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "specificBillingPeriod",
                          "label": "Specific Billing Period",
                          "type": "number",
                          "required": false,
                          "description": "Duration of each billing period in months or weeks, depending on the value of the `billingPeriod` field. Only applicable if the value of the `billingPeriod` field is `Specific_Months` or `Specific_Weeks`.",
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "weeklyBillCycleDay",
                          "label": "Weekly Bill Cycle Day",
                          "type": "string",
                          "required": false,
                          "description": "Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.",
                          "enum": [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                          ],
                          "section": "Invoice & Document Settings"
                        }
                      ],
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "chargeFunction",
                      "label": "Charge Function",
                      "type": "string",
                      "required": false,
                      "description": "**Note**: This field is only available if you have both the Prepaid with Drawdown and Standalone Orders features enabled. With this field, you can use a standalone order to subscribe to a minimum commitment subscription. This field defines what type of charge it is: * CommitmentTrueUp: For recurring charges. Currency based minimum commitment charge. * CreditCommitment: For usage charges. Credit to minimum commitment funds.",
                      "enum": [
                        "CommitmentTrueUp",
                        "CreditCommitment"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "commitmentType",
                      "label": "Commitment Type",
                      "type": "string",
                      "required": false,
                      "enum": [
                        "CURRENCY"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "creditOption",
                      "label": "Credit Option",
                      "type": "string",
                      "required": false,
                      "description": "**Note**: This field is only available if you have both the Minimum Commitment and Standalone Orders features enabled. With this field, you can use a standalone order to subscribe to a minimum commitment subscription. This field defines the way to calculate credit. See [Credit Option](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge#Credit_Option) for more information.",
                      "enum": [
                        "TimeBased",
                        "ConsumptionBased",
                        "FullCreditBack"
                      ],
                      "section": "Credit & Settlement Settings"
                    },
                    {
                      "name": "chargeModel",
                      "label": "Charge Model",
                      "type": "string",
                      "required": false,
                      "description": "The chargeModel of a standalone charge. Supported charge models: * `FlatFee` * `PerUnit` * `Volume` * `Tiered` * `DiscountFixedAmount` * `DiscountPercentage` **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "chargeNumber",
                      "label": "Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "Charge number of the charge. For example, C-00000307. * If you do not set this field, Zuora will generate a charge number starting with a default prefix, for example, C-. This default prefix is predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. * If you want to use a custom charge number, do not use the default prefix predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. Use your own prefix, for example, SC-.",
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "chargeType",
                      "label": "Charge Type",
                      "type": "string",
                      "required": false,
                      "description": "The chargeType of a standalone charge. Supported charge types: * `OneTime` * `Recurring` * `Usage` **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "contractAssetAccountingCode",
                      "label": "Contract Asset Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The contractAssetAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "contractLiabilityAccountingCode",
                      "label": "Contract Liability Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The contractLiabilityAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "contractRecognizedRevenueAccountingCode",
                      "label": "Contract Recognized Revenue Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The contractRecognizedRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of a Rate Plan Charge object.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "deferredRevenueAccountingCode",
                      "label": "Deferred Revenue Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The deferredRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders and Zuora Finance features are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "drawdownRate",
                      "label": "Drawdown Rate",
                      "type": "number",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The [conversion rate](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge#UOM_Conversion) between Usage UOM and Drawdown UOM for a [drawdown charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge). Must be a positive number (>0).",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "endDate",
                      "label": "End Date",
                      "type": "object",
                      "required": false,
                      "description": "Specifies when a charge becomes inactive.",
                      "fields": [
                        {
                          "name": "endDateCondition",
                          "label": "End Date Condition",
                          "type": "string",
                          "required": false,
                          "description": "Condition for the charge to become inactive. - If the value of this field is `Fixed_Period`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields. - If the value of this field is `Specific_End_Date`, use the `specificEndDate` field to specify the date when the charge becomes inactive.",
                          "enum": [
                            "Subscription_End",
                            "Fixed_Period",
                            "Specific_End_Date"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDatePolicy",
                          "label": "End Date Policy",
                          "type": "string",
                          "required": false,
                          "description": "End date policy of the discount charge to become active when the **Apply to billing period partially** checkbox is selected from the product catalog UI or the `applyToBillingPeriodPartially` field is set as true from the \"CRUD: Create a product rate plan charge\" operation. - If the value of this field is `FixedPeriod`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields. - If the value of this field is `SpecificEndDate`, use the `specificEndDate` field to specify the date when the charge becomes inactive. **Notes**: - You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field. - You can use either `endDateCondition` or `endDatePolicy` to define when a discount charge ends, but not both at the same time.",
                          "enum": [
                            "AlignToApplyToCharge",
                            "SpecificEndDate",
                            "FixedPeriod"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "specificEndDate",
                          "label": "Specific End Date",
                          "type": "date",
                          "required": false,
                          "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `endDateCondition` field is `Specific_End_Date`.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upToPeriods",
                          "label": "Up To Periods",
                          "type": "number",
                          "required": false,
                          "description": "Duration of the charge in billing periods, days, weeks, months, or years, depending on the value of the `upToPeriodsType` field. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upToPeriodsType",
                          "label": "Up To Periods Type",
                          "type": "string",
                          "required": false,
                          "description": "Unit of time that the charge duration is measured in. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.",
                          "enum": [
                            "Billing_Periods",
                            "Days",
                            "Weeks",
                            "Months",
                            "Years"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "estimatedStartDate",
                      "label": "Estimated Start Date",
                      "type": "date",
                      "required": false,
                      "description": "The estimated start date of the pending charge in an active subscription. If you specify `SpecificDate` in the `startDate` > `triggerEvent` field and want to create a completed order and an active subscription, you must specify either the `estimatedStartDate` or `startDate` > `specificTriggerDate` field: - `estimatedStartDate`: The charge will be in pending status. - `specificTriggerDate`: The charge will be in active status. The value of this field must be a date within the subscription term. The system will then automatically calculate the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge. **Note:** This field is available only when the Pending Subscription Processing feature is turned on.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "excludeItemBillingFromRevenueAccounting",
                      "label": "Exclude Item Billing From Revenue Accounting",
                      "type": "boolean",
                      "required": false,
                      "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting. If both the following features are enabled in your tenant, you must ensure the `excludeItemBillingFromRevenueAccounting` field is set consistently for a prepayment charge and the corresponding drawdown charge. In addition, if the `excludeItemBookingFromRevenueAccounting` field in a Create Subscription or Add Product order action is set to `false`, you must also set the `excludeItemBillingFromRevenueAccounting` field in this order action to `false`. * Prepaid with Drawdown * Unbilled Usage **Note**: This field is only available if you have the Order to Revenue or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.",
                      "defaultValue": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "excludeItemBookingFromRevenueAccounting",
                      "label": "Exclude Item Booking From Revenue Accounting",
                      "type": "boolean",
                      "required": false,
                      "description": "The flag to exclude rate plan charges from revenue accounting. If both the following features are enabled in your tenant, you must ensure the `excludeItemBookingFromRevenueAccounting` field is set consistently for a prepayment charge and the corresponding drawdown charge. * Prepaid with Drawdown * Unbilled Usage **Note**: This field is only available if you have the Order to Revenue or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.",
                      "defaultValue": false,
                      "section": "Account Settings"
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
                      "name": "isRollover",
                      "label": "Is Rollover",
                      "type": "boolean",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The value is either \"True\" or \"False\". It determines whether the rollover fields are needed.",
                      "section": "Additional Fields"
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
                      "name": "name",
                      "label": "Name",
                      "type": "string",
                      "required": false,
                      "description": "The name of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "negotiatedPriceTable",
                      "label": "Negotiated Price Table",
                      "type": "array",
                      "required": false,
                      "description": "Array of negotiated price table information. The rate card entries provided in the array will override the existing rate card entries in the standard price table to form a negotiated price table that will be used during pricing evaluation. **Note:** To enable the Negotiated Price Table feature, submit a request to Zuora Global Support.",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "items",
                          "label": "Items",
                          "type": "object",
                          "required": false,
                          "description": "The rate card entry object. **Note:** For more information, refer to the rate card definition in the product catalog.",
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pobPolicy",
                      "label": "Pob Policy",
                      "type": "string",
                      "required": false,
                      "description": "The pobPolicy of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "prepaidQuantity",
                      "label": "Prepaid Quantity",
                      "type": "number",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number (>0).",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricing",
                      "label": "Pricing",
                      "type": "object",
                      "required": false,
                      "description": "Pricing information about the charge.",
                      "fields": [
                        {
                          "name": "chargeModelData",
                          "label": "Charge Model Data",
                          "type": "object",
                          "required": false,
                          "description": "Container for charge model configuration data. **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The High Water Mark and Pre-Rated Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                          "fields": [
                            {
                              "name": "chargeModelConfiguration",
                              "label": "Charge Model Configuration",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "customFieldPerUnitRate",
                                  "label": "Custom Field Per Unit Rate",
                                  "type": "string",
                                  "required": false,
                                  "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "customFieldTotalAmount",
                                  "label": "Custom Field Total Amount",
                                  "type": "string",
                                  "required": false,
                                  "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "formula",
                                  "label": "Formula",
                                  "type": "string",
                                  "required": false,
                                  "description": "The pricing formula to calculate actual rating amount. This field is only available for charges that use the Multi-Attribute Pricing charge model.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased. This field is used if the Multi-Attribute Pricing formula uses the `quantity()` function. This field is only available for one-time and recurring charges that use the Multi-Attribute Pricing charge model.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of cumulative pricing tiers in the charge. **Note**: When you override the tiers of a usage-based charge using High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "description": "Number of units at which the tier becomes effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "discount",
                          "label": "Discount",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about a discount charge.",
                          "fields": [
                            {
                              "name": "applyDiscountTo",
                              "label": "Apply Discount To",
                              "type": "string",
                              "required": false,
                              "description": "Specifies which type of charge the discount charge applies to.",
                              "enum": [
                                "ONETIME",
                                "RECURRING",
                                "USAGE",
                                "ONETIMERECURRING",
                                "ONETIMEUSAGE",
                                "RECURRINGUSAGE",
                                "ONETIMERECURRINGUSAGE"
                              ],
                              "section": "Credit & Settlement Settings"
                            },
                            {
                              "name": "applyToBillingPeriodPartially",
                              "label": "Apply To Billing Period Partially",
                              "type": "boolean",
                              "required": false,
                              "description": "Allow the discount duration to be aligned with the billing period partially. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "discountAmount",
                              "label": "Discount Amount",
                              "type": "number",
                              "required": false,
                              "description": "Only applicable if the discount charge is a fixed-amount discount.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountApplyDetails",
                              "label": "Discount Apply Details",
                              "type": "array",
                              "required": false,
                              "description": "Charge list of discount be applied to. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "productRatePlanChargeId",
                                  "label": "Product Rate Plan Charge Id",
                                  "type": "string",
                                  "required": true,
                                  "description": "Product Rate Plan Charge Id of the discount apply to.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "productRatePlanId",
                                  "label": "Product Rate Plan Id",
                                  "type": "string",
                                  "required": true,
                                  "description": "Product Rate Plan Id of the discount apply to.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Credit & Settlement Settings"
                            },
                            {
                              "name": "discountClass",
                              "label": "Discount Class",
                              "type": "string",
                              "required": false,
                              "description": "The discount class defines the sequence in which discount product rate plan charges are applied. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountLevel",
                              "label": "Discount Level",
                              "type": "string",
                              "required": false,
                              "description": "Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.",
                              "enum": [
                                "rateplan",
                                "subscription",
                                "account"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountPercentage",
                              "label": "Discount Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Only applicable if the discount charge is a percentage discount.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalDiscountAmount",
                              "label": "Original Discount Amount",
                              "type": "number",
                              "required": false,
                              "description": "The manufacturer's suggested retail discount price for standalone charge. Only applicable if the standalone discount charge is a fixed-amount discount. **Note:** This field is available when the Standalone Orders feature is enabled.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalDiscountPercentage",
                              "label": "Original Discount Percentage",
                              "type": "number",
                              "required": false,
                              "description": "The manufacturer's suggested retail discount percentage for standalone charge. Only applicable if the standalone discount charge is a percentage discount. **Note:** This field is available when the Standalone Orders feature is enabled.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListDiscountAmount",
                              "label": "Original List Discount Amount",
                              "type": "number",
                              "required": false,
                              "description": "The original discount amount listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListDiscountPercentage",
                              "label": "Original List Discount Percentage",
                              "type": "number",
                              "required": false,
                              "description": "The original discount percentage listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.",
                              "enum": [
                                "NoChange",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "oneTimeFlatFee",
                          "label": "One Time Flat Fee",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about a one-time charge that uses the \"flat fee\" charge model. In this charge model, the charge has a fixed price.",
                          "fields": [
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": true,
                              "description": "Price of the charge.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "oneTimePerUnit",
                          "label": "One Time Per Unit",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about a one-time charge that uses the \"per unit\" charge model. In this charge model, the charge has a fixed price per unit purchased.",
                          "fields": [
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "description": "Per-unit price of the charge.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "oneTimeTiered",
                          "label": "One Time Tiered",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about a one-time charge that uses the \"tiered pricing\" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.",
                          "fields": [
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of cumulative pricing tiers in the charge.",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "description": "Number of units at which the tier becomes effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "oneTimeVolume",
                          "label": "One Time Volume",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about a one-time charge that uses the \"volume pricing\" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.",
                          "fields": [
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of variable pricing tiers in the charge.",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "description": "Number of units at which the tier becomes effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringCalculated",
                          "label": "Recurring Calculated",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "clearingExistingMinimumAmount",
                              "label": "Clearing Existing Minimum Amount",
                              "type": "boolean",
                              "required": false,
                              "description": "Set this field to `true` to reset the minimum amount to null.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "clearingExistingMaximumAmount",
                              "label": "Clearing Existing Maximum Amount",
                              "type": "boolean",
                              "required": false,
                              "description": "Set this field to `true` to reset the maximum amount to null.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "eligibleAccountConditions",
                              "label": "Eligible Account Conditions",
                              "type": "object",
                              "required": false,
                              "description": "A filter expression (single condition or nested condition groups with logical relations) that defines which accounts’ charges are considered in the calculation. If omitted, the system defaults to the calculated charge’s subscription account. See Orders for more information. - relation: the logical relation with the condition group. Supported values are: and, or. Only two levels of nested condition groups are supported. - conditions: - field: name of the condition field. Refer to the legitimate condition fields. - operator: the logical operator. Supported values are: `eq`, `neq`, `nl` (is null), `nnl` (is not null). - value: the value of the condition field. You can either enter specific values manually or use the predefined condition values.",
                              "section": "Account Settings"
                            },
                            {
                              "name": "eligibleChargeConditions",
                              "label": "Eligible Charge Conditions",
                              "type": "object",
                              "required": false,
                              "description": "A filter expression (single condition or nested condition groups with logical relations) that defines which rate plan charges contribute to the calculation; if omitted, the scope defaults to “All charges” (i.e., all charges under the selected accounts are eligible). See Orders for more information. - relation: the logical relation with the condition group. Supported values are: and, or. Only two levels of nested condition groups are supported. - conditions: - field: name of the condition field. Refer to the legitimate condition fields. - operator: the logical operator. Supported values are: `eq`, `neq`, `nl` (is null), `nnl` (is not null). - value: the value of the condition field. You can either enter specific values manually or use the predefined condition values.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "minimumAmount",
                              "label": "Minimum Amount",
                              "type": "number",
                              "required": false,
                              "description": "Non-negative currency amount that establishes the lower bound for the calculated charge in a billing period. If the calculated amount is less than this value, the invoice amount will be set to the minimum value.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "maximumAmount",
                              "label": "Maximum Amount",
                              "type": "number",
                              "required": false,
                              "description": "Non-negative currency amount that establishes the upper bound for the calculated charge in a billing period. If the calculated amount exceeds this value, the invoice amount will be set to the maximum value.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "percentage",
                              "label": "Percentage",
                              "type": "number",
                              "required": false,
                              "description": "The specific rate applied to the total eligible spend to determine the base invoice amount before any minimum or maximum amount is applied.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringDeliveryBased",
                          "label": "Recurring Delivery Based",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "deliverySchedule",
                              "label": "Delivery Schedule",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "frequency",
                                  "label": "Frequency",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the frequency for delivery schedule",
                                  "enum": [
                                    "Weekly"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "friday",
                                  "label": "Friday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on friday.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "monday",
                                  "label": "Monday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on monday.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "saturday",
                                  "label": "Saturday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on saturday.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "sunday",
                                  "label": "Sunday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on sunday.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "thursday",
                                  "label": "Thursday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on thursday.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tuesday",
                                  "label": "Tuesday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on tuesday.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "wednesday",
                                  "label": "Wednesday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on wednesday.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "description": "Price of the charge in each recurring period.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringFlatFee",
                          "label": "Recurring Flat Fee",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "description": "Price of the charge in each recurring period.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "description": "Specifies the duration of each recurring period.",
                              "enum": [
                                "Per_Billing_Period",
                                "Per_Month",
                                "Per_Week",
                                "Per_Year",
                                "Per_Specific_Months"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringPerUnit",
                          "label": "Recurring Per Unit",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "description": "Per-unit price of the charge in each recurring period.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "description": "Specifies the duration of each recurring period.",
                              "enum": [
                                "Per_Billing_Period",
                                "Per_Month",
                                "Per_Week",
                                "Per_Year",
                                "Per_Specific_Months"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringTiered",
                          "label": "Recurring Tiered",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "description": "Specifies the duration of each recurring period.",
                              "enum": [
                                "Per_Billing_Period",
                                "Per_Month",
                                "Per_Week",
                                "Per_Year",
                                "Per_Specific_Months"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of cumulative pricing tiers in the charge.",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "description": "Number of units at which the tier becomes effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringVolume",
                          "label": "Recurring Volume",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "description": "Specifies the duration of each recurring period.",
                              "enum": [
                                "Per_Billing_Period",
                                "Per_Month",
                                "Per_Week",
                                "Per_Year",
                                "Per_Specific_Months"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of variable pricing tiers in the charge.",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "description": "Number of units at which the tier becomes effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricingAttributes",
                      "label": "Pricing Attributes",
                      "type": "object",
                      "required": false,
                      "description": "Container for pricing attribute and value that provide additional context for dynamic pricing. The pricing attribute values are used to get the charge’s list price from the product catalog. For the pricing attribute mapped to a Zuora object field, Zuora will retrieve the value automatically, you don’t need to pass its value explicitly. If you pass a value that doesn’t match the actual value of the Zuora object, an error will be returned. Note that for any pricing attribute mapped to the field of Zuora object Usage, because its value is only determined when the usage record arrives, you can’t provide a value via Orders API payload and Zuora will not retrieve its value automatically. **Note:** To enable Dynamic Pricing, submit a request to Zuora Global Support.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productCategory",
                      "label": "Product Category",
                      "type": "string",
                      "required": false,
                      "description": "The productCategory of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productClass",
                      "label": "Product Class",
                      "type": "string",
                      "required": false,
                      "description": "The productClass of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productFamily",
                      "label": "Product Family",
                      "type": "string",
                      "required": false,
                      "description": "The productFamily of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productLine",
                      "label": "Product Line",
                      "type": "string",
                      "required": false,
                      "description": "The productLine of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeId",
                      "label": "Product Rate Plan Charge Id",
                      "type": "string",
                      "required": true,
                      "description": "Internal identifier of the product rate plan charge that the charge is based on.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeNumber",
                      "label": "Product Rate Plan Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate-plan charge for this subscription.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "prorationOption",
                      "label": "Proration Option",
                      "type": "string",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Usage charge proration and Charge level proration option for a recurring charge. You can use this field to specify the charge-level proration option for a usage charge or recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden. * `NoProration`: charge-level proration option that you can set for a usage charge. This option means to not use any proration, which is the default current system behavior for a usage charge. * `TimeBasedProration`: charge-level proration option that you can set for a usage charge. This option means to prorate the usage charge amount using the actual number of days if the billing period is a partial period. * `DefaultFromTenantSetting`: charge-level proration option that you can set for a recurring charge. This option means to follow the customer billing rule proration setting. * `ChargeFullPeriod`: charge-level proration option that you can set for a recurring charge. This options means to charge the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period. * `CustomizeProrationOptionOverrides`: charge-level proration option that you can set for a recurring charge. This option means to use the customized charge proration settings that is specified by the `ratingPropertiesOverride` field.",
                      "enum": [
                        "NoProration",
                        "TimeBasedProration",
                        "DefaultFromTenantSetting",
                        "ChargeFullPeriod",
                        "CustomizeProrationOptionOverrides"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "ratingPropertiesOverride",
                      "label": "Rating Properties Override",
                      "type": "object",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. This field is used only when the value of the `prorationOption` field is set to `CustomizeProrationOptionOverrides`. Use this field to specify more customized proration options for a recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.",
                      "fields": [
                        {
                          "name": "isProratePartialMonth",
                          "label": "Is Prorate Partial Month",
                          "type": "boolean",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify whether to prorate the recurring charge for a partial month. The tenant-level proration option will be overridden.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prorationUnit",
                          "label": "Proration Unit",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify the unit of proration for a recurring charge. The tenant-level proration option will be overridden.",
                          "enum": [
                            "ProrateByDay",
                            "ProrateByMonthFirst"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "daysInMonth",
                          "label": "Days In Month",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify the number of days counted for a month when prorating a recurring charge. The tenant-level proration option will be overridden. See more details for each of the following enum values in Proration.",
                          "enum": [
                            "UseActualDays",
                            "Assume30Days",
                            "Assume30DaysStrict"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "recognizedRevenueAccountingCode",
                      "label": "Recognized Revenue Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The recognizedRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders and Zuora Finance features are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "revRecCode",
                      "label": "Rev Rec Code",
                      "type": "string",
                      "required": false,
                      "description": "Revenue Recognition Code",
                      "maxLength": 70,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "revRecTriggerCondition",
                      "label": "Rev Rec Trigger Condition",
                      "type": "string",
                      "required": false,
                      "description": "Specifies the revenue recognition trigger condition. * `Contract Effective Date` * `Service Activation Date` * `Customer Acceptance Date`",
                      "enum": [
                        "Contract Effective Date",
                        "Service Activation Date",
                        "Customer Acceptance Date"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "revenueRecognitionRuleName",
                      "label": "Revenue Recognition Rule Name",
                      "type": "string",
                      "required": false,
                      "description": "Specifies the revenue recognition rule, such as `Recognize upon invoicing` or `Recognize daily over time`.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "revenueRecognitionTiming",
                      "label": "Revenue Recognition Timing",
                      "type": "string",
                      "required": false,
                      "description": "Specifies the type of revenue recognition timing. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. **Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled.",
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
                      "description": "Specifies the type of revenue amortization method. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. **Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled.",
                      "enum": [
                        "Immediate",
                        "Ratable Using Start And End Dates"
                      ],
                      "maxLength": 200,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "rolloverApply",
                      "label": "Rollover Apply",
                      "type": "string",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. This field defines the priority of rollover, which is either first or last.",
                      "enum": [
                        "ApplyFirst",
                        "ApplyLast"
                      ],
                      "section": "Credit & Settlement Settings"
                    },
                    {
                      "name": "rolloverPeriodLength",
                      "label": "Rollover Period Length",
                      "type": "number",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. Use this field when you want to set the rollover fund's period length shorter than the prepayment charge's validity period. In this case, you must set the `rolloverPeriods` field to 1. For example, you can define the rollover fund's period length as 5 months, shorter than the prepayment charge's validity period: a year.",
                      "defaultValue": null,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "rolloverPeriods",
                      "label": "Rollover Periods",
                      "type": "number",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. This field defines the number of rollover periods, it is restricted to 3.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "startDate",
                      "label": "Start Date",
                      "type": "object",
                      "required": false,
                      "description": "Specifies when a charge becomes active.",
                      "fields": [
                        {
                          "name": "specificTriggerDate",
                          "label": "Specific Trigger Date",
                          "type": "date",
                          "required": false,
                          "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`. While this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "triggerEvent",
                          "label": "Trigger Event",
                          "type": "string",
                          "required": false,
                          "description": "Condition for the charge to become active. If the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.",
                          "enum": [
                            "ContractEffective",
                            "ServiceActivation",
                            "CustomerAcceptance",
                            "SpecificDate"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "unBilledReceivablesAccountingCode",
                      "label": "Un Billed Receivables Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The unBilledReceivablesAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "description": "Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora. For instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the charge. Then when you update the product, you can use the same unique identifier to specify which charge to modify.",
                      "maxLength": 50,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "upsellOriginChargeNumber",
                      "label": "Upsell Origin Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "The identifier of the original upselling charge associated with the current charge. For a termed subscription, you can now use the \"Create an order\" API operation to perform an Add Product order action to make a product quantity upsell for per unit recurring charges. The benefit is that the charge added by this approach will be automatically combined with the original existing charge for which you want to upsell when the subscription is renewed. The approach is as follows: * Use an Add Product order action to add a charge that is of the same charge type, charge model, and charge end date as the existing per unit recurring charge for which you want to make a quantity upsell. * In the preceding charge to add, use the `upsellOriginChargeNumber` field to specify the existing rate plan charge for which you want to make the quantity upsell. Note that a termed subscription with such upsell charges can not be changed to an evergreen subscription. **Note**: The Quantity Upsell feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com).",
                      "section": "Account Settings"
                    },
                    {
                      "name": "validityPeriodType",
                      "label": "Validity Period Type",
                      "type": "string",
                      "required": false,
                      "description": "**Note**: This field is only available if you have enabled either of the following: * Prepaid with Drawdown * Minimum Commitment * Both Minimum Commitment and Standalone Orders You can use this field in the following scenarios: * When you create a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge), use this field to define the period in which the prepayment units are valid to use. * When you override the setting of commitment true-up charge from the product catalog, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge. * When you use a standalone order to create a commitment true-up charge, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.",
                      "enum": [
                        "SUBSCRIPTION_TERM",
                        "ANNUAL",
                        "SEMI_ANNUAL",
                        "QUARTER",
                        "MONTH"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "taxCode",
                      "label": "Tax Code",
                      "type": "string",
                      "required": false,
                      "description": "The tax code of a charge. This field is available when the `taxable` field is set to `true`.",
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxMode",
                      "label": "Tax Mode",
                      "type": "string",
                      "required": false,
                      "description": "The tax mode of a charge. This field is available when the `taxable` field is set to `true`.",
                      "enum": [
                        "TaxInclusive",
                        "TaxExclusive"
                      ],
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxable",
                      "label": "Taxable",
                      "type": "boolean",
                      "required": false,
                      "description": "The flag indicates whether the charge is taxable. If this field is set to `true`, you must specify the `taxCode` and `taxMode` fields.",
                      "section": "Tax Settings"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingFeatures",
                  "label": "Clearing Existing Features",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether all features in the rate plan will be cleared.",
                  "section": "Additional Fields"
                },
                {
                  "name": "customFields",
                  "label": "Custom Fields",
                  "type": "object",
                  "required": false,
                  "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.",
                  "section": "Additional Fields"
                },
                {
                  "name": "isAddingSubsetCharges",
                  "label": "Is Adding Subset Charges",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether to add a subset of charges to the subscription. **Note:** To access this field for adding a subset of charges, submit a request at Zuora Global Support.",
                  "section": "Additional Fields"
                },
                {
                  "name": "isFromExternalCatalog",
                  "label": "Is From External Catalog",
                  "type": "boolean",
                  "required": false,
                  "description": "Indicates whether the rate plan is created from the Zuora product catalog or from an external product catalog. **Note:** This field is available when the Standalone Orders feature is enabled.",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanId",
                  "label": "Product Rate Plan Id",
                  "type": "string",
                  "required": true,
                  "description": "Internal identifier of the product rate plan that the rate plan is based on.",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate plan for this subscription.",
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanName",
                  "label": "Rate Plan Name",
                  "type": "string",
                  "required": false,
                  "description": "Name of the standalone rate plan. **Note:** This field is available when the Standalone Orders feature is enabled.",
                  "section": "Account Settings"
                },
                {
                  "name": "subscriptionProductFeatures",
                  "label": "Subscription Product Features",
                  "type": "array",
                  "required": false,
                  "description": "List of features associated with the rate plan. The system compares the `subscriptionProductFeatures` and `featureId` fields in the request with the counterpart fields in a rate plan. The comparison results are as follows: * If there is no `subscriptionProductFeatures` field or the field is empty, features in the rate plan remain unchanged. But if the `clearingExistingFeatures` field is additionally set to true, all features in the rate plan are cleared. * If the `subscriptionProductFeatures` field contains the `featureId` nested fields, as well as the optional `description` and `customFields` nested fields, the features indicated by the featureId nested fields in the request overwrite all features in the rate plan.",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "A container for custom fields of the feature.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "featureId",
                      "label": "Feature Id",
                      "type": "string",
                      "required": true,
                      "description": "Internal identifier of the feature in the product catalog.",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Subscription Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
                  "required": false,
                  "description": "Unique identifier for the rate plan. This identifier enables you to refer to the rate plan before the rate plan has an internal identifier in Zuora. For instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the rate plan. Then when you update the product, you can use the same unique identifier to specify which rate plan to modify.",
                  "maxLength": 50,
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a subscription rate plan for this subscription.",
                  "maxLength": 50,
                  "section": "Account Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "cancelSubscription",
              "label": "Cancel Subscription",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `CancelSubscription`.",
              "fields": [
                {
                  "name": "cancellationEffectiveDate",
                  "label": "Cancellation Effective Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "cancellationPolicy",
                  "label": "Cancellation Policy",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "EndOfCurrentTerm",
                    "EndOfLastInvoicePeriod",
                    "SpecificDate"
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Subscription Settings"
            },
            {
              "name": "changePlan",
              "label": "Change Plan",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `ChangePlan`. Use the change plan type of order action to replace the existing rate plans in a subscription with other rate plans. **Note**: The change plan type of order action is supported for the Order to Revenue feature. However, it is currently not supported for the Billing - Revenue Integration feature. When Billing - Revenue Integration is enabled, the change plan type of order action will no longer be applicable in Zuora Billing. If you want to create a pending order through the \"change plan\" order action, and if the charge's trigger condition is `Specific Date`, you must set a charge number in the `chargeNumber` field for the \"change plan\" order action. In this case, if you do not set it, Zuora will not generate the charge number for you. See more information about pending orders in Pending orders and subscriptions.",
              "fields": [
                {
                  "name": "effectivePolicy",
                  "label": "Effective Policy",
                  "type": "string",
                  "required": false,
                  "description": "The default value for the `effectivePolicy` field is as follows: * If the rate plan change (from old to new) is an upgrade, the effective policy is `EffectiveImmediately` by default. * If the rate plan change (from old to new) is a downgrade, the effective policy is `EffectiveEndOfBillingPeriod` by default. * Otherwise, the effective policy is `SpecificDate` by default. **Notes**: * When setting this field to `EffectiveEndOfBillingPeriod`, you cannot set the billing trigger dates for the subscription as the system will automatically set the trigger dates to the end of billing period, and you cannot set the following billing trigger date settings to `Yes`: * Require Customer Acceptance of Orders? * Require Service Activation of Orders? * When setting this field to `SpecificDate`, you must also set the contract effective date in the `triggerDates` field as follows: * Set the `name` field as `ContractEffective` * Specify a date for the `triggerDate` field",
                  "enum": [
                    "EffectiveImmediately",
                    "EffectiveEndOfBillingPeriod",
                    "SpecificDate"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "externalCatalogPlanId",
                  "label": "External Catalog Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "An external ID of the rate plan to be removed. You can use this field to specify an existing rate plan in your subscription. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. However, if there are multiple rate plans with the same `productRatePlanId` value existing in the subscription, you must use the `ratePlanId` field to remove the rate plan. The `externalCatalogPlanId` field cannot be used to distinguish multiple rate plans in this case. **Note:** Please provide only one of `externalCatalogPlanId`, `ratePlanId` or `productRatePlanId`. If more than 1 field is provided then the request would fail.",
                  "section": "Additional Fields"
                },
                {
                  "name": "newProductRatePlan",
                  "label": "New Product Rate Plan",
                  "type": "object",
                  "required": true,
                  "description": "Information about the new product rate plan to add.",
                  "fields": [
                    {
                      "name": "chargeOverrides",
                      "label": "Charge Overrides",
                      "type": "array",
                      "required": false,
                      "description": "List of charges associated with the rate plan.",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "accountReceivableAccountingCode",
                          "label": "Account Receivable Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The accountReceivableAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders, Zuora Finance, and Invoice Settlement features are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "adjustmentLiabilityAccountingCode",
                          "label": "Adjustment Liability Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The adjustmentLiabilityAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "adjustmentRevenueAccountingCode",
                          "label": "Adjustment Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The adjustmentRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "billing",
                          "label": "Billing",
                          "type": "object",
                          "required": false,
                          "description": "Billing information about the charge.",
                          "fields": [
                            {
                              "name": "billCycleDay",
                              "label": "Bill Cycle Day",
                              "type": "number",
                              "required": false,
                              "description": "Day of the month that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofMonth`.",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billCycleType",
                              "label": "Bill Cycle Type",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora determines the day that each billing period begins on. * `DefaultFromCustomer` - Each billing period begins on the bill cycle day of the account that owns the subscription. * `SpecificDayofMonth` - Use the `billCycleDay` field to specify the day of the month that each billing period begins on. * `SubscriptionStartDay` - Each billing period begins on the same day of the month as the start date of the subscription. * `ChargeTriggerDay` - Each billing period begins on the same day of the month as the date when the charge becomes active. * `SpecificDayofWeek` - Use the `weeklyBillCycleDay` field to specify the day of the week that each billing period begins on.",
                              "enum": [
                                "DefaultFromCustomer",
                                "SpecificDayofMonth",
                                "SubscriptionStartDay",
                                "ChargeTriggerDay",
                                "SpecificDayofWeek"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingPeriod",
                              "label": "Billing Period",
                              "type": "string",
                              "required": false,
                              "description": "Billing frequency of the charge. The value of this field controls the duration of each billing period. If the value of this field is `Specific_Days`, `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.",
                              "enum": [
                                "Month",
                                "Quarter",
                                "Semi_Annual",
                                "Annual",
                                "Eighteen_Months",
                                "Two_Years",
                                "Three_Years",
                                "Five_Years",
                                "Specific_Months",
                                "Subscription_Term",
                                "Week",
                                "Specific_Weeks",
                                "Specific_Days"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingPeriodAlignment",
                              "label": "Billing Period Alignment",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora determines when to start new billing periods. You can use this field to align the billing periods of different charges. * `AlignToCharge` - Zuora starts a new billing period on the first billing day that falls on or after the date when the charge becomes active. * `AlignToSubscriptionStart` - Zuora starts a new billing period on the first billing day that falls on or after the start date of the subscription. * `AlignToTermStart` - For each term of the subscription, Zuora starts a new billing period on the first billing day that falls on or after the start date of the term. See the `billCycleType` field for information about how Zuora determines the billing day. **Note**: This field is not supported in one time charges.",
                              "enum": [
                                "AlignToCharge",
                                "AlignToSubscriptionStart",
                                "AlignToTermStart"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingTiming",
                              "label": "Billing Timing",
                              "type": "string",
                              "required": false,
                              "description": "Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).",
                              "enum": [
                                "IN_ADVANCE",
                                "IN_ARREARS"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "specificBillingPeriod",
                              "label": "Specific Billing Period",
                              "type": "number",
                              "required": false,
                              "description": "Duration of each billing period in months or weeks, depending on the value of the `billingPeriod` field. Only applicable if the value of the `billingPeriod` field is `Specific_Months` or `Specific_Weeks`.",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "weeklyBillCycleDay",
                              "label": "Weekly Bill Cycle Day",
                              "type": "string",
                              "required": false,
                              "description": "Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.",
                              "enum": [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                              ],
                              "section": "Invoice & Document Settings"
                            }
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "chargeFunction",
                          "label": "Charge Function",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have both the Prepaid with Drawdown and Standalone Orders features enabled. With this field, you can use a standalone order to subscribe to a minimum commitment subscription. This field defines what type of charge it is: * CommitmentTrueUp: For recurring charges. Currency based minimum commitment charge. * CreditCommitment: For usage charges. Credit to minimum commitment funds.",
                          "enum": [
                            "CommitmentTrueUp",
                            "CreditCommitment"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "commitmentType",
                          "label": "Commitment Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "CURRENCY"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "creditOption",
                          "label": "Credit Option",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have both the Minimum Commitment and Standalone Orders features enabled. With this field, you can use a standalone order to subscribe to a minimum commitment subscription. This field defines the way to calculate credit. See [Credit Option](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge#Credit_Option) for more information.",
                          "enum": [
                            "TimeBased",
                            "ConsumptionBased",
                            "FullCreditBack"
                          ],
                          "section": "Credit & Settlement Settings"
                        },
                        {
                          "name": "chargeModel",
                          "label": "Charge Model",
                          "type": "string",
                          "required": false,
                          "description": "The chargeModel of a standalone charge. Supported charge models: * `FlatFee` * `PerUnit` * `Volume` * `Tiered` * `DiscountFixedAmount` * `DiscountPercentage` **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "chargeNumber",
                          "label": "Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "Charge number of the charge. For example, C-00000307. * If you do not set this field, Zuora will generate a charge number starting with a default prefix, for example, C-. This default prefix is predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. * If you want to use a custom charge number, do not use the default prefix predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. Use your own prefix, for example, SC-.",
                          "maxLength": 50,
                          "section": "Account Settings"
                        },
                        {
                          "name": "chargeType",
                          "label": "Charge Type",
                          "type": "string",
                          "required": false,
                          "description": "The chargeType of a standalone charge. Supported charge types: * `OneTime` * `Recurring` * `Usage` **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contractAssetAccountingCode",
                          "label": "Contract Asset Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractAssetAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "contractLiabilityAccountingCode",
                          "label": "Contract Liability Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractLiabilityAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "contractRecognizedRevenueAccountingCode",
                          "label": "Contract Recognized Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractRecognizedRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "description": "Container for custom fields of a Rate Plan Charge object.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "deferredRevenueAccountingCode",
                          "label": "Deferred Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The deferredRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders and Zuora Finance features are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "drawdownRate",
                          "label": "Drawdown Rate",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The [conversion rate](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge#UOM_Conversion) between Usage UOM and Drawdown UOM for a [drawdown charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge). Must be a positive number (>0).",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDate",
                          "label": "End Date",
                          "type": "object",
                          "required": false,
                          "description": "Specifies when a charge becomes inactive.",
                          "fields": [
                            {
                              "name": "endDateCondition",
                              "label": "End Date Condition",
                              "type": "string",
                              "required": false,
                              "description": "Condition for the charge to become inactive. - If the value of this field is `Fixed_Period`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields. - If the value of this field is `Specific_End_Date`, use the `specificEndDate` field to specify the date when the charge becomes inactive.",
                              "enum": [
                                "Subscription_End",
                                "Fixed_Period",
                                "Specific_End_Date"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "endDatePolicy",
                              "label": "End Date Policy",
                              "type": "string",
                              "required": false,
                              "description": "End date policy of the discount charge to become active when the **Apply to billing period partially** checkbox is selected from the product catalog UI or the `applyToBillingPeriodPartially` field is set as true from the \"CRUD: Create a product rate plan charge\" operation. - If the value of this field is `FixedPeriod`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields. - If the value of this field is `SpecificEndDate`, use the `specificEndDate` field to specify the date when the charge becomes inactive. **Notes**: - You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field. - You can use either `endDateCondition` or `endDatePolicy` to define when a discount charge ends, but not both at the same time.",
                              "enum": [
                                "AlignToApplyToCharge",
                                "SpecificEndDate",
                                "FixedPeriod"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificEndDate",
                              "label": "Specific End Date",
                              "type": "date",
                              "required": false,
                              "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `endDateCondition` field is `Specific_End_Date`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriods",
                              "label": "Up To Periods",
                              "type": "number",
                              "required": false,
                              "description": "Duration of the charge in billing periods, days, weeks, months, or years, depending on the value of the `upToPeriodsType` field. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriodsType",
                              "label": "Up To Periods Type",
                              "type": "string",
                              "required": false,
                              "description": "Unit of time that the charge duration is measured in. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.",
                              "enum": [
                                "Billing_Periods",
                                "Days",
                                "Weeks",
                                "Months",
                                "Years"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "estimatedStartDate",
                          "label": "Estimated Start Date",
                          "type": "date",
                          "required": false,
                          "description": "The estimated start date of the pending charge in an active subscription. If you specify `SpecificDate` in the `startDate` > `triggerEvent` field and want to create a completed order and an active subscription, you must specify either the `estimatedStartDate` or `startDate` > `specificTriggerDate` field: - `estimatedStartDate`: The charge will be in pending status. - `specificTriggerDate`: The charge will be in active status. The value of this field must be a date within the subscription term. The system will then automatically calculate the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge. **Note:** This field is available only when the Pending Subscription Processing feature is turned on.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "excludeItemBillingFromRevenueAccounting",
                          "label": "Exclude Item Billing From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.",
                          "defaultValue": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "excludeItemBookingFromRevenueAccounting",
                          "label": "Exclude Item Booking From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag to exclude rate plan charges from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.",
                          "defaultValue": false,
                          "section": "Account Settings"
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
                          "name": "isRollover",
                          "label": "Is Rollover",
                          "type": "boolean",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The value is either \"True\" or \"False\". It determines whether the rollover fields are needed.",
                          "section": "Additional Fields"
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
                          "name": "negotiatedPriceTable",
                          "label": "Negotiated Price Table",
                          "type": "array",
                          "required": false,
                          "description": "Array of negotiated price table information. The rate card entries provided in the array will override the existing rate card entries in the standard price table to form a negotiated price table that will be used during pricing evaluation. **Note:** To enable the Negotiated Price Table feature, submit a request to Zuora Global Support.",
                          "itemType": "object",
                          "itemFields": [
                            {
                              "name": "items",
                              "label": "Items",
                              "type": "object",
                              "required": false,
                              "description": "The rate card entry object. **Note:** For more information, refer to the rate card definition in the product catalog.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "name",
                          "label": "Name",
                          "type": "string",
                          "required": false,
                          "description": "The name of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "pobPolicy",
                          "label": "Pob Policy",
                          "type": "string",
                          "required": false,
                          "description": "The pobPolicy of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prepaidQuantity",
                          "label": "Prepaid Quantity",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number (>0).",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricing",
                          "label": "Pricing",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about the charge.",
                          "fields": [
                            {
                              "name": "chargeModelData",
                              "label": "Charge Model Data",
                              "type": "object",
                              "required": false,
                              "description": "Container for charge model configuration data. **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The High Water Mark and Pre-Rated Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                              "fields": [
                                {
                                  "name": "chargeModelConfiguration",
                                  "label": "Charge Model Configuration",
                                  "type": "object",
                                  "required": false,
                                  "fields": [
                                    {
                                      "name": "customFieldPerUnitRate",
                                      "label": "Custom Field Per Unit Rate",
                                      "type": "string",
                                      "required": false,
                                      "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "customFieldTotalAmount",
                                      "label": "Custom Field Total Amount",
                                      "type": "string",
                                      "required": false,
                                      "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "formula",
                                      "label": "Formula",
                                      "type": "string",
                                      "required": false,
                                      "description": "The pricing formula to calculate actual rating amount. This field is only available for charges that use the Multi-Attribute Pricing charge model.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased. This field is used if the Multi-Attribute Pricing formula uses the `quantity()` function. This field is only available for one-time and recurring charges that use the Multi-Attribute Pricing charge model.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge. **Note**: When you override the tiers of a usage-based charge using High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discount",
                              "label": "Discount",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a discount charge.",
                              "fields": [
                                {
                                  "name": "applyDiscountTo",
                                  "label": "Apply Discount To",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies which type of charge the discount charge applies to.",
                                  "enum": [
                                    "ONETIME",
                                    "RECURRING",
                                    "USAGE",
                                    "ONETIMERECURRING",
                                    "ONETIMEUSAGE",
                                    "RECURRINGUSAGE",
                                    "ONETIMERECURRINGUSAGE"
                                  ],
                                  "section": "Credit & Settlement Settings"
                                },
                                {
                                  "name": "applyToBillingPeriodPartially",
                                  "label": "Apply To Billing Period Partially",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Allow the discount duration to be aligned with the billing period partially. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                                  "section": "Invoice & Document Settings"
                                },
                                {
                                  "name": "discountAmount",
                                  "label": "Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "Only applicable if the discount charge is a fixed-amount discount.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountApplyDetails",
                                  "label": "Discount Apply Details",
                                  "type": "array",
                                  "required": false,
                                  "description": "Charge list of discount be applied to. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "productRatePlanChargeId",
                                      "label": "Product Rate Plan Charge Id",
                                      "type": "string",
                                      "required": true,
                                      "description": "Product Rate Plan Charge Id of the discount apply to.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "productRatePlanId",
                                      "label": "Product Rate Plan Id",
                                      "type": "string",
                                      "required": true,
                                      "description": "Product Rate Plan Id of the discount apply to.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Credit & Settlement Settings"
                                },
                                {
                                  "name": "discountClass",
                                  "label": "Discount Class",
                                  "type": "string",
                                  "required": false,
                                  "description": "The discount class defines the sequence in which discount product rate plan charges are applied. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountLevel",
                                  "label": "Discount Level",
                                  "type": "string",
                                  "required": false,
                                  "description": "Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.",
                                  "enum": [
                                    "rateplan",
                                    "subscription",
                                    "account"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountPercentage",
                                  "label": "Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Only applicable if the discount charge is a percentage discount.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountAmount",
                                  "label": "Original Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "The manufacturer's suggested retail discount price for standalone charge. Only applicable if the standalone discount charge is a fixed-amount discount. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountPercentage",
                                  "label": "Original Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "The manufacturer's suggested retail discount percentage for standalone charge. Only applicable if the standalone discount charge is a percentage discount. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListDiscountAmount",
                                  "label": "Original List Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original discount amount listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListDiscountPercentage",
                                  "label": "Original List Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original discount percentage listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.",
                                  "enum": [
                                    "NoChange",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeFlatFee",
                              "label": "One Time Flat Fee",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a one-time charge that uses the \"flat fee\" charge model. In this charge model, the charge has a fixed price.",
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price of the charge.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimePerUnit",
                              "label": "One Time Per Unit",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a one-time charge that uses the \"per unit\" charge model. In this charge model, the charge has a fixed price per unit purchased.",
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Per-unit price of the charge.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeTiered",
                              "label": "One Time Tiered",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a one-time charge that uses the \"tiered pricing\" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.",
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeVolume",
                              "label": "One Time Volume",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a one-time charge that uses the \"volume pricing\" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.",
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of variable pricing tiers in the charge.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringDeliveryBased",
                              "label": "Recurring Delivery Based",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "deliverySchedule",
                                  "label": "Delivery Schedule",
                                  "type": "object",
                                  "required": false,
                                  "fields": [
                                    {
                                      "name": "frequency",
                                      "label": "Frequency",
                                      "type": "string",
                                      "required": false,
                                      "description": "Specifies the frequency for delivery schedule",
                                      "enum": [
                                        "Weekly"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "friday",
                                      "label": "Friday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on friday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "monday",
                                      "label": "Monday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on monday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "saturday",
                                      "label": "Saturday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on saturday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "sunday",
                                      "label": "Sunday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on sunday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "thursday",
                                      "label": "Thursday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on thursday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tuesday",
                                      "label": "Tuesday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on tuesday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "wednesday",
                                      "label": "Wednesday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on wednesday.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Price of the charge in each recurring period.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringFlatFee",
                              "label": "Recurring Flat Fee",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Price of the charge in each recurring period.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.",
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringPerUnit",
                              "label": "Recurring Per Unit",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Per-unit price of the charge in each recurring period.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.",
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringTiered",
                              "label": "Recurring Tiered",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.",
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringVolume",
                              "label": "Recurring Volume",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.",
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of variable pricing tiers in the charge.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricingAttributes",
                          "label": "Pricing Attributes",
                          "type": "object",
                          "required": false,
                          "description": "Container for pricing attribute and value that provide additional context for dynamic pricing. The pricing attribute values are used to get the charge’s list price from the product catalog. For the pricing attribute mapped to a Zuora object field, Zuora will retrieve the value automatically, you don’t need to pass its value explicitly. If you pass a value that doesn’t match the actual value of the Zuora object, an error will be returned. Note that for any pricing attribute mapped to the field of Zuora object Usage, because its value is only determined when the usage record arrives, you can’t provide a value via Orders API payload and Zuora will not retrieve its value automatically. **Note:** To enable Dynamic Pricing, submit a request to Zuora Global Support.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productCategory",
                          "label": "Product Category",
                          "type": "string",
                          "required": false,
                          "description": "The productCategory of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productClass",
                          "label": "Product Class",
                          "type": "string",
                          "required": false,
                          "description": "The productClass of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productFamily",
                          "label": "Product Family",
                          "type": "string",
                          "required": false,
                          "description": "The productFamily of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productLine",
                          "label": "Product Line",
                          "type": "string",
                          "required": false,
                          "description": "The productLine of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeId",
                          "label": "Product Rate Plan Charge Id",
                          "type": "string",
                          "required": true,
                          "description": "Internal identifier of the product rate plan charge that the charge is based on.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeNumber",
                          "label": "Product Rate Plan Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "Number of a product rate-plan charge for this subscription.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "prorationOption",
                          "label": "Proration Option",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Usage charge proration and Charge level proration option for a recurring charge. You can use this field to specify the charge-level proration option for a usage charge or recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden. * `NoProration`: charge-level proration option that you can set for a usage charge. This option means to not use any proration, which is the default current system behavior for a usage charge. * `TimeBasedProration`: charge-level proration option that you can set for a usage charge. This option means to prorate the usage charge amount using the actual number of days if the billing period is a partial period. * `DefaultFromTenantSetting`: charge-level proration option that you can set for a recurring charge. This option means to follow the customer billing rule proration setting. * `ChargeFullPeriod`: charge-level proration option that you can set for a recurring charge. This options means to charge the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period. * `CustomizeProrationOptionOverrides`: charge-level proration option that you can set for a recurring charge. This option means to use the customized charge proration settings that is specified by the `ratingPropertiesOverride` field.",
                          "enum": [
                            "NoProration",
                            "TimeBasedProration",
                            "DefaultFromTenantSetting",
                            "ChargeFullPeriod",
                            "CustomizeProrationOptionOverrides"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "ratingPropertiesOverride",
                          "label": "Rating Properties Override",
                          "type": "object",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. This field is used only when the value of the `prorationOption` field is set to `CustomizeProrationOptionOverrides`. Use this field to specify more customized proration options for a recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.",
                          "fields": [
                            {
                              "name": "isProratePartialMonth",
                              "label": "Is Prorate Partial Month",
                              "type": "boolean",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify whether to prorate the recurring charge for a partial month. The tenant-level proration option will be overridden.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "prorationUnit",
                              "label": "Proration Unit",
                              "type": "string",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify the unit of proration for a recurring charge. The tenant-level proration option will be overridden.",
                              "enum": [
                                "ProrateByDay",
                                "ProrateByMonthFirst"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "daysInMonth",
                              "label": "Days In Month",
                              "type": "string",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify the number of days counted for a month when prorating a recurring charge. The tenant-level proration option will be overridden. See more details for each of the following enum values in Proration.",
                              "enum": [
                                "UseActualDays",
                                "Assume30Days",
                                "Assume30DaysStrict"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recognizedRevenueAccountingCode",
                          "label": "Recognized Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The recognizedRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders and Zuora Finance features are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "revRecCode",
                          "label": "Rev Rec Code",
                          "type": "string",
                          "required": false,
                          "description": "Revenue Recognition Code",
                          "maxLength": 70,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "revRecTriggerCondition",
                          "label": "Rev Rec Trigger Condition",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the revenue recognition trigger condition. * `Contract Effective Date` * `Service Activation Date` * `Customer Acceptance Date`",
                          "enum": [
                            "Contract Effective Date",
                            "Service Activation Date",
                            "Customer Acceptance Date"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "revenueRecognitionRuleName",
                          "label": "Revenue Recognition Rule Name",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the revenue recognition rule, such as `Recognize upon invoicing` or `Recognize daily over time`.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "revenueRecognitionTiming",
                          "label": "Revenue Recognition Timing",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the type of revenue recognition timing. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. **Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled.",
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
                          "description": "Specifies the type of revenue amortization method. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. **Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled.",
                          "enum": [
                            "Immediate",
                            "Ratable Using Start And End Dates"
                          ],
                          "maxLength": 200,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "rolloverApply",
                          "label": "Rollover Apply",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. This field defines the priority of rollover, which is either first or last.",
                          "enum": [
                            "ApplyFirst",
                            "ApplyLast"
                          ],
                          "section": "Credit & Settlement Settings"
                        },
                        {
                          "name": "rolloverPeriodLength",
                          "label": "Rollover Period Length",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The period length of the rollover fund.",
                          "defaultValue": null,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "rolloverPeriods",
                          "label": "Rollover Periods",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. This field defines the number of rollover periods, it is restricted to 3.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "startDate",
                          "label": "Start Date",
                          "type": "object",
                          "required": false,
                          "description": "Specifies when a charge becomes active.",
                          "fields": [
                            {
                              "name": "periodsAfterChargeStart",
                              "label": "Periods After Charge Start",
                              "type": "number",
                              "required": false,
                              "description": "Duration of the discount charge in days, weeks, months, or years, depending on the value of the `startPeriodsType` field. Only applicable if the value of the `startDatePolicy` field is `FixedPeriodAfterApplyToChargeStartDate`. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificTriggerDate",
                              "label": "Specific Trigger Date",
                              "type": "date",
                              "required": false,
                              "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`. While this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created. While this field is applicable, if this field is not set, the following order actions create a `Pending` order but do not impact the subscription status. **Note**: This feature is in **Limited Availability**. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). * AddProduct * UpdateProduct * RemoveProduct * RenewSubscription * TermsAndConditions",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "startDatePolicy",
                              "label": "Start Date Policy",
                              "type": "string",
                              "required": false,
                              "description": "Start date policy of the discount charge to become active when the **Apply to billing period partially** checkbox is selected from the product catalog UI or the `applyToBillingPeriodPartially` field is set as true from the \"CRUD: Create a product rate plan charge\" operation. - If the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active. - If the value of this field is `FixedPeriodAfterApplyToChargeStartDate`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields. **Notes**: - You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field. - You can use either `triggerEvent` or `startDatePolicy` to define when a discount charge starts, but not both at the same time.",
                              "enum": [
                                "AlignToApplyToCharge",
                                "SpecificDate",
                                "EndOfLastInvoicePeriodOfApplyToCharge",
                                "FixedPeriodAfterApplyToChargeStartDate"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "startPeriodsType",
                              "label": "Start Periods Type",
                              "type": "string",
                              "required": false,
                              "description": "Unit of time that the discount charge duration is measured in. Only applicable if the value of the `startDatePolicy` field is `FixedPeriodAfterApplyToChargeStartDate`. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                              "enum": [
                                "Days",
                                "Weeks",
                                "Months",
                                "Years"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "triggerEvent",
                              "label": "Trigger Event",
                              "type": "string",
                              "required": false,
                              "description": "Condition for the charge to become active. If the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.",
                              "enum": [
                                "ContractEffective",
                                "ServiceActivation",
                                "CustomerAcceptance",
                                "SpecificDate"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "taxCode",
                          "label": "Tax Code",
                          "type": "string",
                          "required": false,
                          "description": "The taxCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Tax Settings"
                        },
                        {
                          "name": "taxMode",
                          "label": "Tax Mode",
                          "type": "string",
                          "required": false,
                          "description": "The taxMode of a standalone charge. Values: * `TaxExclusive` * `TaxInclusive` **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Tax Settings"
                        },
                        {
                          "name": "unBilledReceivablesAccountingCode",
                          "label": "Un Billed Receivables Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The unBilledReceivablesAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "uniqueToken",
                          "label": "Unique Token",
                          "type": "string",
                          "required": false,
                          "description": "Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora. For instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the charge. Then when you update the product, you can use the same unique identifier to specify which charge to modify.",
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upsellOriginChargeNumber",
                          "label": "Upsell Origin Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "The identifier of the original upselling charge associated with the current charge. For a termed subscription, you can now use the \"Create an order\" API operation to perform an Add Product order action to make a product quantity upsell for per unit recurring charges. The benefit is that the charge added by this approach will be automatically combined with the original existing charge for which you want to upsell when the subscription is renewed. The approach is as follows: * Use an Add Product order action to add a charge that is of the same charge type, charge model, and charge end date as the existing per unit recurring charge for which you want to make a quantity upsell. * In the preceding charge to add, use the `upsellOriginChargeNumber` field to specify the existing rate plan charge for which you want to make the quantity upsell. Note that a termed subscription with such upsell charges can not be changed to an evergreen subscription. **Note**: The Quantity Upsell feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com).",
                          "section": "Account Settings"
                        },
                        {
                          "name": "validityPeriodType",
                          "label": "Validity Period Type",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have enabled either of the following: * Prepaid with Drawdown * Minimum Commitment * Both Minimum Commitment and Standalone Orders You can use this field in the following scenarios: * When you create a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge), use this field to define the period in which the prepayment units are valid to use. * When you override the setting of commitment true-up charge from the product catalog, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge. * When you use a standalone order to create a commitment true-up charge, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.",
                          "enum": [
                            "SUBSCRIPTION_TERM",
                            "ANNUAL",
                            "SEMI_ANNUAL",
                            "QUARTER",
                            "MONTH"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "clearingExistingFeatures",
                      "label": "Clearing Existing Features",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether all features in the rate plan will be cleared.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "externalCatalogPlanId",
                      "label": "External Catalog Plan Id",
                      "type": "string",
                      "required": false,
                      "description": "An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. **Note:** If both `externalCatalogPlanId` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "externallyManagedPlanId",
                      "label": "Externally Managed Plan Id",
                      "type": "string",
                      "required": false,
                      "description": "Indicates the unique identifier for the rate plan purchased on a third-party store. This field is used to represent a subscription rate plan created through third-party stores.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "subscriptionRatePlanNumber",
                      "label": "Subscription Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a subscription rate plan for this subscription.",
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "isFromExternalCatalog",
                      "label": "Is From External Catalog",
                      "type": "boolean",
                      "required": false,
                      "description": "Indicates whether the rate plan is created from the Zuora product catalog or from an external product catalog. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanId",
                      "label": "Product Rate Plan Id",
                      "type": "string",
                      "required": false,
                      "description": "Internal identifier of the product rate plan that the rate plan is based on.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate plan for this subscription.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "ratePlanName",
                      "label": "Rate Plan Name",
                      "type": "string",
                      "required": false,
                      "description": "Name of the standalone rate plan. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "subscriptionProductFeatures",
                      "label": "Subscription Product Features",
                      "type": "array",
                      "required": false,
                      "description": "List of features associated with the rate plan. The system compares the `subscriptionProductFeatures` and `featureId` fields in the request with the counterpart fields in a rate plan. The comparison results are as follows: * If there is no `subscriptionProductFeatures` field or the field is empty, features in the rate plan remain unchanged. But if the `clearingExistingFeatures` field is additionally set to true, all features in the rate plan are cleared. * If the `subscriptionProductFeatures` field contains the `featureId` nested fields, as well as the optional `description` and `customFields` nested fields, the features indicated by the featureId nested fields in the request overwrite all features in the rate plan.",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "description": "A container for custom fields of the feature.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "featureId",
                          "label": "Feature Id",
                          "type": "string",
                          "required": true,
                          "description": "Internal identifier of the feature in the product catalog.",
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Subscription Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "description": "Unique identifier for the rate plan. This identifier enables you to refer to the rate plan before the rate plan has an internal identifier in Zuora. For instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the rate plan. Then when you update the product, you can use the same unique identifier to specify which rate plan to modify.",
                      "maxLength": 50,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanId",
                  "label": "Product Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "ID of the product rate plan that the removed rate plan is based on.",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate plan for this subscription.",
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "ID of the rate plan to remove. This can be the latest version or any history version of ID. Note that the removal of a rate plan through the Change Plan order action supports the function of removal before future-dated removals, as in a Remove Product order action.",
                  "section": "Additional Fields"
                },
                {
                  "name": "resetBcd",
                  "label": "Reset Bcd",
                  "type": "boolean",
                  "required": false,
                  "description": "If resetBcd is true then reset the Account BCD to the effective date; if it is false keep the original BCD. **Note**: If the rate plan change is an upgrade (the `subType` field is `Upgrade`), then the effective policy is `EffectiveImmediately` by default. In this case, if you do not specify the `resetBcd` field, the system sets this field to `true` while BCD is the effective date.",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "subType",
                  "label": "Sub Type",
                  "type": "string",
                  "required": false,
                  "description": "Use this field to choose the sub type for your change plan order action. However, if you do not set this field, the field will be automatically generated by the system according to the following rules: When the old and new rate plans are within the same Grading catalog group: * If the grade of new plan is greater than that of the old plan, this is an \"Upgrade\". * If the grade of new plan is less than that of the old plan, this is a \"Downgrade\". * If the grade of new plan equals that of the old plan, this is a \"Crossgrade\". When the old and new rate plans are not in the same Grading catalog group, or either has no group, this is \"PlanChanged\".",
                  "enum": [
                    "Upgrade",
                    "Downgrade",
                    "Crossgrade",
                    "PlanChanged"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a rate plan for this subscription.",
                  "section": "Account Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "changeReason",
              "label": "Change Reason",
              "type": "string",
              "required": false,
              "description": "The change reason set for an order action when an order is created.",
              "section": "Additional Fields"
            },
            {
              "name": "createSubscription",
              "label": "Create Subscription",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `CreateSubscription`.",
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the bill-to contact associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "currency",
                  "label": "Currency",
                  "type": "string",
                  "required": false,
                  "description": "The code of currency that is used for this subscription. If the currency is not selected, the default currency from the account will be used. All subscriptions in the same order must use the same currency. The currency for a subscription cannot be changed. **Note**: This field is available only if you have the Multiple Currencies feature enabled.",
                  "maxLength": 3,
                  "section": "Additional Fields"
                },
                {
                  "name": "invoiceGroupNumber",
                  "label": "Invoice Group Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the invoice group associated with the subscription. After enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping). **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "maxLength": 255,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceSeparately",
                  "label": "Invoice Separately",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether the subscription appears on a separate invoice when Zuora generates invoices.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "invoiceTemplateId",
                  "label": "Invoice Template Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the invoice template associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Template from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "newSubscriptionOwnerAccount",
                  "label": "New Subscription Owner Account",
                  "type": "object",
                  "required": false,
                  "description": "Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature. **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.",
                  "fields": [
                    {
                      "name": "accountNumber",
                      "label": "Account Number",
                      "type": "string",
                      "required": false,
                      "description": "Account number. For example, A00000001.",
                      "maxLength": 70,
                      "section": "Account Settings"
                    },
                    {
                      "name": "additionalEmailAddresses",
                      "label": "Additional Email Addresses",
                      "type": "textarea",
                      "required": false,
                      "description": "List of additional email addresses to receive emailed invoices. Values should be a comma-separated list of email addresses.",
                      "maxLength": 1200,
                      "section": "Communication Settings"
                    },
                    {
                      "name": "allowInvoiceEdit",
                      "label": "Allow Invoice Edit",
                      "type": "boolean",
                      "required": false,
                      "description": "Indicates if associated invoices can be edited. Values are: * `true` * `false` (default)",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "autoPay",
                      "label": "Auto Pay",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether future payments are automatically billed when they are due.",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "batch",
                      "label": "Batch",
                      "type": "string",
                      "required": false,
                      "description": "Name of the billing batch that the account belongs to. For example, Batch1.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "billCycleDay",
                      "label": "Bill Cycle Day",
                      "type": "number",
                      "required": true,
                      "description": "Day of the month that the account prefers billing periods to begin on. If set to 0, the bill cycle day will be set as \"AutoSet\".",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "billToContact",
                      "label": "Bill To Contact",
                      "type": "object",
                      "required": true,
                      "fields": [
                        {
                          "name": "address1",
                          "label": "Address1",
                          "type": "string",
                          "required": false,
                          "description": "First line of the contact's address. This is often a street address or a business name.",
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "address2",
                          "label": "Address2",
                          "type": "string",
                          "required": false,
                          "description": "Second line of the contact's address.",
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
                          "description": "City of the contact's address.",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contactDescription",
                          "label": "Contact Description",
                          "type": "string",
                          "required": false,
                          "description": "A description for the contact.",
                          "maxLength": 100,
                          "section": "Contact Information"
                        },
                        {
                          "name": "country",
                          "label": "Country",
                          "type": "string",
                          "required": false,
                          "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the bill-to contact to calculate tax.",
                          "maxLength": 64,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "county",
                          "label": "County",
                          "type": "string",
                          "required": false,
                          "description": "County of the contact's address.",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "fax",
                          "label": "Fax",
                          "type": "string",
                          "required": false,
                          "description": "Fax number of the contact.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "firstName",
                          "label": "First Name",
                          "type": "string",
                          "required": true,
                          "description": "First name of the contact.",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "homePhone",
                          "label": "Home Phone",
                          "type": "string",
                          "required": false,
                          "description": "Home phone number of the contact.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "lastName",
                          "label": "Last Name",
                          "type": "string",
                          "required": true,
                          "description": "Last name of the contact.",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "mobilePhone",
                          "label": "Mobile Phone",
                          "type": "string",
                          "required": false,
                          "description": "Mobile phone number of the contact.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "nickname",
                          "label": "Nickname",
                          "type": "string",
                          "required": false,
                          "description": "Nickname of the contact.",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "otherPhone",
                          "label": "Other Phone",
                          "type": "string",
                          "required": false,
                          "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "otherPhoneType",
                          "label": "Other Phone Type",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the type of phone number in the `otherPhone` field.",
                          "enum": [
                            "Work",
                            "Mobile",
                            "Home",
                            "Other"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "personalEmail",
                          "label": "Personal Email",
                          "type": "email",
                          "required": false,
                          "description": "Personal email address of the contact.",
                          "maxLength": 80,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "postalCode",
                          "label": "Postal Code",
                          "type": "string",
                          "required": false,
                          "description": "ZIP code or other postal code of the contact's address.",
                          "maxLength": 20,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "description": "State or province of the contact's address.",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "taxRegion",
                          "label": "Tax Region",
                          "type": "string",
                          "required": false,
                          "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.",
                          "maxLength": 100,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "workEmail",
                          "label": "Work Email",
                          "type": "email",
                          "required": false,
                          "description": "Business email address of the contact.",
                          "maxLength": 80,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "workPhone",
                          "label": "Work Phone",
                          "type": "string",
                          "required": false,
                          "description": "Business phone number of the contact.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "communicationProfileId",
                      "label": "Communication Profile Id",
                      "type": "string",
                      "required": false,
                      "description": "Internal identifier of the communication profile that Zuora uses when sending notifications to the account's contacts.",
                      "section": "Communication Settings"
                    },
                    {
                      "name": "creditCard",
                      "label": "Credit Card",
                      "type": "object",
                      "required": false,
                      "description": "Default payment method associated with an account. Only credit card payment methods are supported.",
                      "fields": [
                        {
                          "name": "cardHolderInfo",
                          "label": "Card Holder Info",
                          "type": "object",
                          "required": false,
                          "description": "Information about the cardholder of a credit card payment method associated with an account. If you do not provide information about the cardholder, Zuora uses the account's bill-to contact.",
                          "fields": [
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "description": "First line of the cardholder's address.",
                              "maxLength": 255,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "description": "Second line of the cardholder's address.",
                              "maxLength": 255,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "cardHolderName",
                              "label": "Card Holder Name",
                              "type": "string",
                              "required": false,
                              "description": "Full name of the cardholder as it appears on the card. For example, \"John J Smith\", 50 characters or less. The value must consist only of US-ASCII characters and must not include special characters.",
                              "maxLength": 50,
                              "section": "Account Settings"
                            },
                            {
                              "name": "city",
                              "label": "City",
                              "type": "string",
                              "required": false,
                              "description": "City of the cardholder's address. It is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.",
                              "maxLength": 40,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "country",
                              "label": "Country",
                              "type": "string",
                              "required": false,
                              "description": "Country of the cardholder's address. The value of this field must be a valid country name or abbreviation. It is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.",
                              "maxLength": 64,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "description": "Email address of the cardholder.",
                              "maxLength": 80,
                              "section": "Communication Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "description": "Phone number of the cardholder.",
                              "maxLength": 40,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "description": "State or province of the cardholder's address.",
                              "maxLength": 50,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "zipCode",
                              "label": "Zip Code",
                              "type": "string",
                              "required": false,
                              "description": "ZIP code or other postal code of the cardholder's address.",
                              "maxLength": 20,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "cardNumber",
                          "label": "Card Number",
                          "type": "string",
                          "required": false,
                          "description": "Card number. Once set, you cannot update or query the value of this field. The value of this field is only available in masked format. For example, XXXX-XXXX-XXXX-1234 (hyphens must not be used when you set the credit card number).",
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardType",
                          "label": "Card Type",
                          "type": "string",
                          "required": false,
                          "description": "Type of card.",
                          "enum": [
                            "Visa",
                            "MasterCard",
                            "AmericanExpress",
                            "Discover",
                            "JCB",
                            "Diners",
                            "CUP",
                            "Maestro",
                            "Electron",
                            "AppleVisa",
                            "AppleMasterCard",
                            "AppleAmericanExpress",
                            "AppleDiscover",
                            "AppleJCB",
                            "Elo",
                            "Hipercard",
                            "Naranja",
                            "Nativa",
                            "TarjetaShopping",
                            "Cencosud",
                            "Argencard",
                            "Cabal"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationMonth",
                          "label": "Expiration Month",
                          "type": "number",
                          "required": false,
                          "description": "Expiration date of the card.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationYear",
                          "label": "Expiration Year",
                          "type": "number",
                          "required": false,
                          "description": "Expiration year of the card.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "securityCode",
                          "label": "Security Code",
                          "type": "string",
                          "required": false,
                          "description": "CVV or CVV2 security code of the card. To ensure PCI compliance, Zuora does not store the value of this field.",
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Payment Settings"
                    },
                    {
                      "name": "creditMemoTemplateId",
                      "label": "Credit Memo Template Id",
                      "type": "string",
                      "required": false,
                      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. The unique ID of the credit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08a6246fdf101626b1b3fe0144b.",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "crmId",
                      "label": "Crm Id",
                      "type": "string",
                      "required": false,
                      "description": "External identifier of the account in a CRM system.",
                      "maxLength": 100,
                      "section": "Account Settings"
                    },
                    {
                      "name": "currency",
                      "label": "Currency",
                      "type": "string",
                      "required": true,
                      "description": "ISO 3-letter currency code (uppercase). For example, USD.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of an Account object.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customerServiceRepName",
                      "label": "Customer Service Rep Name",
                      "type": "string",
                      "required": false,
                      "description": "Name of the account's customer service representative, if applicable.",
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "debitMemoTemplateId",
                      "label": "Debit Memo Template Id",
                      "type": "string",
                      "required": false,
                      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. The unique ID of the debit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08d62470a8501626b19d24f19e2.",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "hpmCreditCardPaymentMethodId",
                      "label": "Hpm Credit Card Payment Method Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the payment method associated with this account. The payment method specified for this field will be set as the default payment method of the account. If the `autoPay` field is set to `true`, you must provide the credit card payment method ID for either this field or the `creditCard` field, but not both. For a specified credit card payment method, it is recommended that [the support for stored credential transactions](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Stored_credential_transactions) for this payment method is already enabled.",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "invoiceDeliveryPrefsEmail",
                      "label": "Invoice Delivery Prefs Email",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether to turn on the invoice delivery method 'Email' for the new account. Values are: * `true` (default). Turn on the invoice delivery method 'Email' for the new account. * `false`. Turn off the invoice delivery method 'Email' for the new account.",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "invoiceDeliveryPrefsPrint",
                      "label": "Invoice Delivery Prefs Print",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether to turn on the invoice delivery method 'Print' for the new account. Values are: * `true`. Turn on the invoice delivery method 'Print' for the new account. * `false` (default). Turn off the invoice delivery method 'Print' for the new account.",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "invoiceTemplateId",
                      "label": "Invoice Template Id",
                      "type": "string",
                      "required": false,
                      "description": "Internal identifier of the invoice template that Zuora uses when generating invoices for the account.",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "name",
                      "label": "Name",
                      "type": "string",
                      "required": true,
                      "description": "Account name.",
                      "maxLength": 255,
                      "section": "Account Settings"
                    },
                    {
                      "name": "notes",
                      "label": "Notes",
                      "type": "textarea",
                      "required": false,
                      "description": "Notes about the account. These notes are only visible to Zuora users.",
                      "maxLength": 65535,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "parentId",
                      "label": "Parent Id",
                      "type": "string",
                      "required": false,
                      "description": "Identifier of the parent customer account for this Account object. Use this field if you have Customer Hierarchy enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "paymentGateway",
                      "label": "Payment Gateway",
                      "type": "string",
                      "required": false,
                      "description": "The payment gateway that Zuora uses when processing electronic payments and refunds for the account. If you do not specify this field or if the value of this field is null, Zuora uses your default payment gateway.",
                      "maxLength": 40,
                      "section": "Payment Settings"
                    },
                    {
                      "name": "paymentMethod",
                      "label": "Payment Method",
                      "type": "object",
                      "required": false,
                      "description": "Payment method information associated with an account.",
                      "fields": [
                        {
                          "name": "type",
                          "label": "Type",
                          "type": "string",
                          "required": true,
                          "enum": [
                            "CreditCard",
                            "CreditCardReferenceTransaction",
                            "ACH",
                            "SEPA",
                            "Betalingsservice",
                            "Autogiro",
                            "Bacs",
                            "Becs",
                            "Becsnz",
                            "PAD",
                            "PayPalCP",
                            "PayPalEC",
                            "PayPalNativeEC",
                            "PayPalAdaptive",
                            "AdyenApplePay",
                            "AdyenGooglePay",
                            "GooglePay",
                            "AmazonPay"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "cardHolderInfo",
                          "label": "Card Holder Info",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "cardHolderName",
                              "label": "Card Holder Name",
                              "type": "string",
                              "required": true,
                              "section": "Account Settings"
                            },
                            {
                              "name": "city",
                              "label": "City",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "country",
                              "label": "Country",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "section": "Communication Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "zipCode",
                              "label": "Zip Code",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "cardMaskNumber",
                          "label": "Card Mask Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardNumber",
                          "label": "Card Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardType",
                          "label": "Card Type",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "checkDuplicated",
                          "label": "Check Duplicated",
                          "type": "boolean",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationMonth",
                          "label": "Expiration Month",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationYear",
                          "label": "Expiration Year",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "identityNumber",
                          "label": "Identity Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "mitConsentAgreementRef",
                          "label": "Mit Consent Agreement Ref",
                          "type": "string",
                          "required": false,
                          "maxLength": 128,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mitConsentAgreementSrc",
                          "label": "Mit Consent Agreement Src",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "External"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mitNetworkTransactionId",
                          "label": "Mit Network Transaction Id",
                          "type": "string",
                          "required": false,
                          "maxLength": 128,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mitProfileAction",
                          "label": "Mit Profile Action",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Activate",
                            "Persist"
                          ],
                          "section": "Communication Settings"
                        },
                        {
                          "name": "mitProfileAgreedOn",
                          "label": "Mit Profile Agreed On",
                          "type": "date",
                          "required": false,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "mitProfileType",
                          "label": "Mit Profile Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "Recurring",
                            "Unscheduled"
                          ],
                          "section": "Communication Settings"
                        },
                        {
                          "name": "screeningAmount",
                          "label": "Screening Amount",
                          "type": "number",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "securityCode",
                          "label": "Security Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "tokens",
                          "label": "Tokens",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "gatewayType",
                              "label": "Gateway Type",
                              "type": "string",
                              "required": true,
                              "section": "Payment Settings"
                            },
                            {
                              "name": "secondTokenId",
                              "label": "Second Token Id",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "thirdTokenId",
                              "label": "Third Token Id",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tokenId",
                              "label": "Token Id",
                              "type": "string",
                              "required": true,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "tokenize",
                          "label": "Tokenize",
                          "type": "boolean",
                          "required": false,
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mandateInfo",
                          "label": "Mandate Info",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "mandateId",
                              "label": "Mandate Id",
                              "type": "string",
                              "required": false,
                              "maxLength": 36,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "mandateReason",
                              "label": "Mandate Reason",
                              "type": "string",
                              "required": false,
                              "maxLength": 64,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "mandateStatus",
                              "label": "Mandate Status",
                              "type": "string",
                              "required": false,
                              "maxLength": 64,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "processingOptions",
                          "label": "Processing Options",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "checkDuplicated",
                              "label": "Check Duplicated",
                              "type": "boolean",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "accountKey",
                          "label": "Account Key",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "authGateway",
                          "label": "Auth Gateway",
                          "type": "string",
                          "required": false,
                          "section": "Payment Settings"
                        },
                        {
                          "name": "currencyCode",
                          "label": "Currency Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "gatewayOptions",
                          "label": "Gateway Options",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "key",
                              "label": "Key",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "value",
                              "label": "Value",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Payment Settings"
                        },
                        {
                          "name": "ipAddress",
                          "label": "Ip Address",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "makeDefault",
                          "label": "Make Default",
                          "type": "boolean",
                          "required": false,
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "skipValidation",
                          "label": "Skip Validation",
                          "type": "boolean",
                          "required": false,
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "creditCardMaskNumber",
                          "label": "Credit Card Mask Number",
                          "type": "string",
                          "required": false,
                          "maxLength": 19,
                          "section": "Account Settings"
                        },
                        {
                          "name": "secondTokenId",
                          "label": "Second Token Id",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "tokenId",
                          "label": "Token Id",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "addressLine1",
                          "label": "Address Line1",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "addressLine2",
                          "label": "Address Line2",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "bankABACode",
                          "label": "Bank A B A Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "bankAccountMaskNumber",
                          "label": "Bank Account Mask Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountName",
                          "label": "Bank Account Name",
                          "type": "string",
                          "required": false,
                          "maxLength": 70,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountNumber",
                          "label": "Bank Account Number",
                          "type": "string",
                          "required": false,
                          "maxLength": 30,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountType",
                          "label": "Bank Account Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "BusinessChecking",
                            "Checking",
                            "Saving"
                          ],
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankName",
                          "label": "Bank Name",
                          "type": "string",
                          "required": false,
                          "maxLength": 70,
                          "section": "Account Settings"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "country",
                          "label": "Country",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "phone",
                          "label": "Phone",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "zipCode",
                          "label": "Zip Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "IBAN",
                          "label": "I B A N",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "accountHolderInfo",
                          "label": "Account Holder Info",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "accountHolderName",
                              "label": "Account Holder Name",
                              "type": "string",
                              "required": false,
                              "maxLength": 60,
                              "section": "Account Settings"
                            },
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "city",
                              "label": "City",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "country",
                              "label": "Country",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "section": "Communication Settings"
                            },
                            {
                              "name": "firstName",
                              "label": "First Name",
                              "type": "string",
                              "required": false,
                              "section": "Account Settings"
                            },
                            {
                              "name": "lastName",
                              "label": "Last Name",
                              "type": "string",
                              "required": false,
                              "section": "Account Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "zipCode",
                              "label": "Zip Code",
                              "type": "string",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Account Settings"
                        },
                        {
                          "name": "accountMaskNumber",
                          "label": "Account Mask Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "businessIdentificationCode",
                          "label": "Business Identification Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "accountNumber",
                          "label": "Account Number",
                          "type": "string",
                          "required": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankCode",
                          "label": "Bank Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "branchCode",
                          "label": "Branch Code",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "BAID",
                          "label": "B A I D",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "email",
                          "label": "Email",
                          "type": "email",
                          "required": false,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "preapprovalKey",
                          "label": "Preapproval Key",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "applePaymentData",
                          "label": "Apple Payment Data",
                          "type": "string",
                          "required": false,
                          "section": "Payment Settings"
                        },
                        {
                          "name": "googlePaymentToken",
                          "label": "Google Payment Token",
                          "type": "string",
                          "required": false,
                          "section": "Payment Settings"
                        },
                        {
                          "name": "amazonPayToken",
                          "label": "Amazon Pay Token",
                          "type": "string",
                          "required": false,
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Payment Settings"
                    },
                    {
                      "name": "paymentTerm",
                      "label": "Payment Term",
                      "type": "string",
                      "required": false,
                      "description": "Name of the payment term associated with the account. For example, \"Net 30\". The payment term determines the due dates of invoices.",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "purchaseOrderNumber",
                      "label": "Purchase Order Number",
                      "type": "string",
                      "required": false,
                      "description": "The number of the purchase order associated with this account. Purchase order information generally comes from customers.",
                      "maxLength": 100,
                      "section": "Account Settings"
                    },
                    {
                      "name": "salesRep",
                      "label": "Sales Rep",
                      "type": "string",
                      "required": false,
                      "description": "The name of the sales representative associated with this account, if applicable.",
                      "maxLength": 50,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "soldToContact",
                      "label": "Sold To Contact",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "address1",
                          "label": "Address1",
                          "type": "string",
                          "required": false,
                          "description": "First line of the contact's address. This is often a street address or a business name.",
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "address2",
                          "label": "Address2",
                          "type": "string",
                          "required": false,
                          "description": "Second line of the contact's address.",
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
                          "description": "City of the contact's address.",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contactDescription",
                          "label": "Contact Description",
                          "type": "string",
                          "required": false,
                          "description": "A description for the contact.",
                          "maxLength": 100,
                          "section": "Contact Information"
                        },
                        {
                          "name": "country",
                          "label": "Country",
                          "type": "string",
                          "required": false,
                          "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided.",
                          "maxLength": 64,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "county",
                          "label": "County",
                          "type": "string",
                          "required": false,
                          "description": "County of the contact's address.",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "fax",
                          "label": "Fax",
                          "type": "string",
                          "required": false,
                          "description": "Fax number of the contact.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "firstName",
                          "label": "First Name",
                          "type": "string",
                          "required": true,
                          "description": "First name of the contact.",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "homePhone",
                          "label": "Home Phone",
                          "type": "string",
                          "required": false,
                          "description": "Home phone number of the contact.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "lastName",
                          "label": "Last Name",
                          "type": "string",
                          "required": true,
                          "description": "Last name of the contact.",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "mobilePhone",
                          "label": "Mobile Phone",
                          "type": "string",
                          "required": false,
                          "description": "Mobile phone number of the contact.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "nickname",
                          "label": "Nickname",
                          "type": "string",
                          "required": false,
                          "description": "Nickname of the contact.",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "otherPhone",
                          "label": "Other Phone",
                          "type": "string",
                          "required": false,
                          "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "otherPhoneType",
                          "label": "Other Phone Type",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the type of phone number in the `otherPhone` field.",
                          "enum": [
                            "Work",
                            "Mobile",
                            "Home",
                            "Other"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "personalEmail",
                          "label": "Personal Email",
                          "type": "email",
                          "required": false,
                          "description": "Personal email address of the contact.",
                          "maxLength": 80,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "postalCode",
                          "label": "Postal Code",
                          "type": "string",
                          "required": false,
                          "description": "ZIP code or other postal code of the contact's address.",
                          "maxLength": 20,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "description": "State or province of the contact's address.",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "taxRegion",
                          "label": "Tax Region",
                          "type": "string",
                          "required": false,
                          "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.",
                          "maxLength": 100,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "workEmail",
                          "label": "Work Email",
                          "type": "email",
                          "required": false,
                          "description": "Business email address of the contact.",
                          "maxLength": 80,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "workPhone",
                          "label": "Work Phone",
                          "type": "string",
                          "required": false,
                          "description": "Business phone number of the contact.",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Contact Information"
                    },
                    {
                      "name": "taxInfo",
                      "label": "Tax Info",
                      "type": "object",
                      "required": false,
                      "description": "Information about the tax exempt status of a customer account.",
                      "fields": [
                        {
                          "name": "VATId",
                          "label": "V A T Id",
                          "type": "string",
                          "required": false,
                          "description": "EU Value Added Tax ID. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
                          "maxLength": 25,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "companyCode",
                          "label": "Company Code",
                          "type": "string",
                          "required": false,
                          "description": "Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptCertificateId",
                          "label": "Exempt Certificate Id",
                          "type": "string",
                          "required": false,
                          "description": "ID of the customer tax exemption certificate. Applicable if you use Zuora Tax or Connect tax engines.",
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptCertificateType",
                          "label": "Exempt Certificate Type",
                          "type": "string",
                          "required": false,
                          "description": "Type of tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.",
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptDescription",
                          "label": "Exempt Description",
                          "type": "string",
                          "required": false,
                          "description": "Description of the tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.",
                          "maxLength": 500,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptEffectiveDate",
                          "label": "Exempt Effective Date",
                          "type": "date",
                          "required": false,
                          "description": "Date when the customer tax exemption starts, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptExpirationDate",
                          "label": "Exempt Expiration Date",
                          "type": "date",
                          "required": false,
                          "description": "Date when the customer tax exemption expires, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptIssuingJurisdiction",
                          "label": "Exempt Issuing Jurisdiction",
                          "type": "string",
                          "required": false,
                          "description": "Jurisdiction in which the customer tax exemption certificate was issued.",
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptStatus",
                          "label": "Exempt Status",
                          "type": "string",
                          "required": false,
                          "description": "Status of the account tax exemption. Applicable if you use Zuora Tax or Connect tax engines. Required if you use Zuora Tax.",
                          "defaultValue": "No",
                          "enum": [
                            "No",
                            "Yes",
                            "PendingVerification"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Tax Settings"
                    }
                  ],
                  "section": "Account Settings"
                },
                {
                  "name": "notes",
                  "label": "Notes",
                  "type": "string",
                  "required": false,
                  "description": "Notes about the subscription. These notes are only visible to Zuora users.",
                  "maxLength": 500,
                  "section": "Additional Fields"
                },
                {
                  "name": "paymentTerm",
                  "label": "Payment Term",
                  "type": "string",
                  "required": false,
                  "description": "The name of the payment term associated with the subscription. For example, `Net 30`. The payment term determines the due dates of invoices. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Term from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Payment Settings"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sequence set associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Set from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the ship-to contact associated with the subscription. It must be a contact of the subscription owner. **Note**: To access this field, you must have the ShipToContactSupport permission. If you want to enable this permission, submit a request at Zuora Global Support.",
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sold-to contact associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Contact Information"
                },
                {
                  "name": "subscribeToRatePlans",
                  "label": "Subscribe To Rate Plans",
                  "type": "array",
                  "required": false,
                  "description": "List of rate plans associated with the subscription.",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "chargeOverrides",
                      "label": "Charge Overrides",
                      "type": "array",
                      "required": false,
                      "description": "List of charges associated with the rate plan.",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "accountReceivableAccountingCode",
                          "label": "Account Receivable Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The accountReceivableAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders, Zuora Finance, and Invoice Settlement features are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "adjustmentLiabilityAccountingCode",
                          "label": "Adjustment Liability Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The adjustmentLiabilityAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "adjustmentRevenueAccountingCode",
                          "label": "Adjustment Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The adjustmentRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "billing",
                          "label": "Billing",
                          "type": "object",
                          "required": false,
                          "description": "Billing information about the charge.",
                          "fields": [
                            {
                              "name": "billCycleDay",
                              "label": "Bill Cycle Day",
                              "type": "number",
                              "required": false,
                              "description": "Day of the month that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofMonth`.",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billCycleType",
                              "label": "Bill Cycle Type",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora determines the day that each billing period begins on. * `DefaultFromCustomer` - Each billing period begins on the bill cycle day of the account that owns the subscription. * `SpecificDayofMonth` - Use the `billCycleDay` field to specify the day of the month that each billing period begins on. * `SubscriptionStartDay` - Each billing period begins on the same day of the month as the start date of the subscription. * `ChargeTriggerDay` - Each billing period begins on the same day of the month as the date when the charge becomes active. * `SpecificDayofWeek` - Use the `weeklyBillCycleDay` field to specify the day of the week that each billing period begins on.",
                              "enum": [
                                "DefaultFromCustomer",
                                "SpecificDayofMonth",
                                "SubscriptionStartDay",
                                "ChargeTriggerDay",
                                "SpecificDayofWeek"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingPeriod",
                              "label": "Billing Period",
                              "type": "string",
                              "required": false,
                              "description": "Billing frequency of the charge. The value of this field controls the duration of each billing period. If the value of this field is `Specific_Days`, `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.",
                              "enum": [
                                "Month",
                                "Quarter",
                                "Semi_Annual",
                                "Annual",
                                "Eighteen_Months",
                                "Two_Years",
                                "Three_Years",
                                "Five_Years",
                                "Specific_Months",
                                "Subscription_Term",
                                "Week",
                                "Specific_Weeks",
                                "Specific_Days"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingPeriodAlignment",
                              "label": "Billing Period Alignment",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora determines when to start new billing periods. You can use this field to align the billing periods of different charges. * `AlignToCharge` - Zuora starts a new billing period on the first billing day that falls on or after the date when the charge becomes active. * `AlignToSubscriptionStart` - Zuora starts a new billing period on the first billing day that falls on or after the start date of the subscription. * `AlignToTermStart` - For each term of the subscription, Zuora starts a new billing period on the first billing day that falls on or after the start date of the term. See the `billCycleType` field for information about how Zuora determines the billing day. **Note**: This field is not supported in one time charges.",
                              "enum": [
                                "AlignToCharge",
                                "AlignToSubscriptionStart",
                                "AlignToTermStart"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billingTiming",
                              "label": "Billing Timing",
                              "type": "string",
                              "required": false,
                              "description": "Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).",
                              "enum": [
                                "IN_ADVANCE",
                                "IN_ARREARS"
                              ],
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "specificBillingPeriod",
                              "label": "Specific Billing Period",
                              "type": "number",
                              "required": false,
                              "description": "Duration of each billing period in months or weeks, depending on the value of the `billingPeriod` field. Only applicable if the value of the `billingPeriod` field is `Specific_Months` or `Specific_Weeks`.",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "weeklyBillCycleDay",
                              "label": "Weekly Bill Cycle Day",
                              "type": "string",
                              "required": false,
                              "description": "Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.",
                              "enum": [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                              ],
                              "section": "Invoice & Document Settings"
                            }
                          ],
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "chargeFunction",
                          "label": "Charge Function",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have both the Prepaid with Drawdown and Standalone Orders features enabled. With this field, you can use a standalone order to subscribe to a minimum commitment subscription. This field defines what type of charge it is: * CommitmentTrueUp: For recurring charges. Currency based minimum commitment charge. * CreditCommitment: For usage charges. Credit to minimum commitment funds.",
                          "enum": [
                            "CommitmentTrueUp",
                            "CreditCommitment"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "commitmentType",
                          "label": "Commitment Type",
                          "type": "string",
                          "required": false,
                          "enum": [
                            "CURRENCY"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "creditOption",
                          "label": "Credit Option",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have both the Minimum Commitment and Standalone Orders features enabled. With this field, you can use a standalone order to subscribe to a minimum commitment subscription. This field defines the way to calculate credit. See [Credit Option](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge#Credit_Option) for more information.",
                          "enum": [
                            "TimeBased",
                            "ConsumptionBased",
                            "FullCreditBack"
                          ],
                          "section": "Credit & Settlement Settings"
                        },
                        {
                          "name": "chargeModel",
                          "label": "Charge Model",
                          "type": "string",
                          "required": false,
                          "description": "The chargeModel of a standalone charge. Supported charge models: * `FlatFee` * `PerUnit` * `Volume` * `Tiered` * `DiscountFixedAmount` * `DiscountPercentage` **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "chargeNumber",
                          "label": "Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "Charge number of the charge. For example, C-00000307. * If you do not set this field, Zuora will generate a charge number starting with a default prefix, for example, C-. This default prefix is predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. * If you want to use a custom charge number, do not use the default prefix predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. Use your own prefix, for example, SC-.",
                          "maxLength": 50,
                          "section": "Account Settings"
                        },
                        {
                          "name": "chargeType",
                          "label": "Charge Type",
                          "type": "string",
                          "required": false,
                          "description": "The chargeType of a standalone charge. Supported charge types: * `OneTime` * `Recurring` * `Usage` **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contractAssetAccountingCode",
                          "label": "Contract Asset Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractAssetAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "contractLiabilityAccountingCode",
                          "label": "Contract Liability Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractLiabilityAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "contractRecognizedRevenueAccountingCode",
                          "label": "Contract Recognized Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractRecognizedRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "description": "Container for custom fields of a Rate Plan Charge object.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "deferredRevenueAccountingCode",
                          "label": "Deferred Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The deferredRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders and Zuora Finance features are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "drawdownRate",
                          "label": "Drawdown Rate",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The [conversion rate](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge#UOM_Conversion) between Usage UOM and Drawdown UOM for a [drawdown charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge). Must be a positive number (>0).",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDate",
                          "label": "End Date",
                          "type": "object",
                          "required": false,
                          "description": "Specifies when a charge becomes inactive.",
                          "fields": [
                            {
                              "name": "endDateCondition",
                              "label": "End Date Condition",
                              "type": "string",
                              "required": false,
                              "description": "Condition for the charge to become inactive. - If the value of this field is `Fixed_Period`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields. - If the value of this field is `Specific_End_Date`, use the `specificEndDate` field to specify the date when the charge becomes inactive.",
                              "enum": [
                                "Subscription_End",
                                "Fixed_Period",
                                "Specific_End_Date"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "endDatePolicy",
                              "label": "End Date Policy",
                              "type": "string",
                              "required": false,
                              "description": "End date policy of the discount charge to become active when the **Apply to billing period partially** checkbox is selected from the product catalog UI or the `applyToBillingPeriodPartially` field is set as true from the \"CRUD: Create a product rate plan charge\" operation. - If the value of this field is `FixedPeriod`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields. - If the value of this field is `SpecificEndDate`, use the `specificEndDate` field to specify the date when the charge becomes inactive. **Notes**: - You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field. - You can use either `endDateCondition` or `endDatePolicy` to define when a discount charge ends, but not both at the same time.",
                              "enum": [
                                "AlignToApplyToCharge",
                                "SpecificEndDate",
                                "FixedPeriod"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificEndDate",
                              "label": "Specific End Date",
                              "type": "date",
                              "required": false,
                              "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `endDateCondition` field is `Specific_End_Date`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriods",
                              "label": "Up To Periods",
                              "type": "number",
                              "required": false,
                              "description": "Duration of the charge in billing periods, days, weeks, months, or years, depending on the value of the `upToPeriodsType` field. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriodsType",
                              "label": "Up To Periods Type",
                              "type": "string",
                              "required": false,
                              "description": "Unit of time that the charge duration is measured in. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.",
                              "enum": [
                                "Billing_Periods",
                                "Days",
                                "Weeks",
                                "Months",
                                "Years"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "estimatedStartDate",
                          "label": "Estimated Start Date",
                          "type": "date",
                          "required": false,
                          "description": "The estimated start date of the pending charge in an active subscription. If you specify `SpecificDate` in the `startDate` > `triggerEvent` field and want to create a completed order and an active subscription, you must specify either the `estimatedStartDate` or `startDate` > `specificTriggerDate` field: - `estimatedStartDate`: The charge will be in pending status. - `specificTriggerDate`: The charge will be in active status. The value of this field must be a date within the subscription term. The system will then automatically calculate the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge. **Note:** This field is available only when the Pending Subscription Processing feature is turned on.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "excludeItemBillingFromRevenueAccounting",
                          "label": "Exclude Item Billing From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting. If both the following features are enabled in your tenant, you must ensure the `excludeItemBillingFromRevenueAccounting` field is set consistently for a prepayment charge and the corresponding drawdown charge. In addition, if the `excludeItemBookingFromRevenueAccounting` field in a Create Subscription or Add Product order action is set to `false`, you must also set the `excludeItemBillingFromRevenueAccounting` field in this order action to `false`. * Prepaid with Drawdown * Unbilled Usage **Note**: This field is only available if you have the Order to Revenue or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.",
                          "defaultValue": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "excludeItemBookingFromRevenueAccounting",
                          "label": "Exclude Item Booking From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag to exclude rate plan charges from revenue accounting. If both the following features are enabled in your tenant, you must ensure the `excludeItemBookingFromRevenueAccounting` field is set consistently for a prepayment charge and the corresponding drawdown charge. * Prepaid with Drawdown * Unbilled Usage **Note**: This field is only available if you have the Order to Revenue or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.",
                          "defaultValue": false,
                          "section": "Account Settings"
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
                          "name": "isRollover",
                          "label": "Is Rollover",
                          "type": "boolean",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The value is either \"True\" or \"False\". It determines whether the rollover fields are needed.",
                          "section": "Additional Fields"
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
                          "name": "name",
                          "label": "Name",
                          "type": "string",
                          "required": false,
                          "description": "The name of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "negotiatedPriceTable",
                          "label": "Negotiated Price Table",
                          "type": "array",
                          "required": false,
                          "description": "Array of negotiated price table information. The rate card entries provided in the array will override the existing rate card entries in the standard price table to form a negotiated price table that will be used during pricing evaluation. **Note:** To enable the Negotiated Price Table feature, submit a request to Zuora Global Support.",
                          "itemType": "object",
                          "itemFields": [
                            {
                              "name": "items",
                              "label": "Items",
                              "type": "object",
                              "required": false,
                              "description": "The rate card entry object. **Note:** For more information, refer to the rate card definition in the product catalog.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pobPolicy",
                          "label": "Pob Policy",
                          "type": "string",
                          "required": false,
                          "description": "The pobPolicy of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prepaidQuantity",
                          "label": "Prepaid Quantity",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number (>0).",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricing",
                          "label": "Pricing",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about the charge.",
                          "fields": [
                            {
                              "name": "chargeModelData",
                              "label": "Charge Model Data",
                              "type": "object",
                              "required": false,
                              "description": "Container for charge model configuration data. **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The High Water Mark and Pre-Rated Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                              "fields": [
                                {
                                  "name": "chargeModelConfiguration",
                                  "label": "Charge Model Configuration",
                                  "type": "object",
                                  "required": false,
                                  "fields": [
                                    {
                                      "name": "customFieldPerUnitRate",
                                      "label": "Custom Field Per Unit Rate",
                                      "type": "string",
                                      "required": false,
                                      "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "customFieldTotalAmount",
                                      "label": "Custom Field Total Amount",
                                      "type": "string",
                                      "required": false,
                                      "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "formula",
                                      "label": "Formula",
                                      "type": "string",
                                      "required": false,
                                      "description": "The pricing formula to calculate actual rating amount. This field is only available for charges that use the Multi-Attribute Pricing charge model.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased. This field is used if the Multi-Attribute Pricing formula uses the `quantity()` function. This field is only available for one-time and recurring charges that use the Multi-Attribute Pricing charge model.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge. **Note**: When you override the tiers of a usage-based charge using High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discount",
                              "label": "Discount",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a discount charge.",
                              "fields": [
                                {
                                  "name": "applyDiscountTo",
                                  "label": "Apply Discount To",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies which type of charge the discount charge applies to.",
                                  "enum": [
                                    "ONETIME",
                                    "RECURRING",
                                    "USAGE",
                                    "ONETIMERECURRING",
                                    "ONETIMEUSAGE",
                                    "RECURRINGUSAGE",
                                    "ONETIMERECURRINGUSAGE"
                                  ],
                                  "section": "Credit & Settlement Settings"
                                },
                                {
                                  "name": "applyToBillingPeriodPartially",
                                  "label": "Apply To Billing Period Partially",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Allow the discount duration to be aligned with the billing period partially. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                                  "section": "Invoice & Document Settings"
                                },
                                {
                                  "name": "discountAmount",
                                  "label": "Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "Only applicable if the discount charge is a fixed-amount discount.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountApplyDetails",
                                  "label": "Discount Apply Details",
                                  "type": "array",
                                  "required": false,
                                  "description": "Charge list of discount be applied to. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "productRatePlanChargeId",
                                      "label": "Product Rate Plan Charge Id",
                                      "type": "string",
                                      "required": true,
                                      "description": "Product Rate Plan Charge Id of the discount apply to.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "productRatePlanId",
                                      "label": "Product Rate Plan Id",
                                      "type": "string",
                                      "required": true,
                                      "description": "Product Rate Plan Id of the discount apply to.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Credit & Settlement Settings"
                                },
                                {
                                  "name": "discountClass",
                                  "label": "Discount Class",
                                  "type": "string",
                                  "required": false,
                                  "description": "The discount class defines the sequence in which discount product rate plan charges are applied. **Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountLevel",
                                  "label": "Discount Level",
                                  "type": "string",
                                  "required": false,
                                  "description": "Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.",
                                  "enum": [
                                    "rateplan",
                                    "subscription",
                                    "account"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountPercentage",
                                  "label": "Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Only applicable if the discount charge is a percentage discount.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountAmount",
                                  "label": "Original Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "The manufacturer's suggested retail discount price for standalone charge. Only applicable if the standalone discount charge is a fixed-amount discount. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountPercentage",
                                  "label": "Original Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "The manufacturer's suggested retail discount percentage for standalone charge. Only applicable if the standalone discount charge is a percentage discount. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListDiscountAmount",
                                  "label": "Original List Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original discount amount listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListDiscountPercentage",
                                  "label": "Original List Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original discount percentage listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.",
                                  "enum": [
                                    "NoChange",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeFlatFee",
                              "label": "One Time Flat Fee",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a one-time charge that uses the \"flat fee\" charge model. In this charge model, the charge has a fixed price.",
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price of the charge.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimePerUnit",
                              "label": "One Time Per Unit",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a one-time charge that uses the \"per unit\" charge model. In this charge model, the charge has a fixed price per unit purchased.",
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Per-unit price of the charge.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeTiered",
                              "label": "One Time Tiered",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a one-time charge that uses the \"tiered pricing\" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.",
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "oneTimeVolume",
                              "label": "One Time Volume",
                              "type": "object",
                              "required": false,
                              "description": "Pricing information about a one-time charge that uses the \"volume pricing\" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.",
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of variable pricing tiers in the charge.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringCalculated",
                              "label": "Recurring Calculated",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "clearingExistingMinimumAmount",
                                  "label": "Clearing Existing Minimum Amount",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Set this field to `true` to reset the minimum amount to null.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "clearingExistingMaximumAmount",
                                  "label": "Clearing Existing Maximum Amount",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Set this field to `true` to reset the maximum amount to null.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "eligibleAccountConditions",
                                  "label": "Eligible Account Conditions",
                                  "type": "object",
                                  "required": false,
                                  "description": "A filter expression (single condition or nested condition groups with logical relations) that defines which accounts’ charges are considered in the calculation. If omitted, the system defaults to the calculated charge’s subscription account. See Orders for more information. - relation: the logical relation with the condition group. Supported values are: and, or. Only two levels of nested condition groups are supported. - conditions: - field: name of the condition field. Refer to the legitimate condition fields. - operator: the logical operator. Supported values are: `eq`, `neq`, `nl` (is null), `nnl` (is not null). - value: the value of the condition field. You can either enter specific values manually or use the predefined condition values.",
                                  "section": "Account Settings"
                                },
                                {
                                  "name": "eligibleChargeConditions",
                                  "label": "Eligible Charge Conditions",
                                  "type": "object",
                                  "required": false,
                                  "description": "A filter expression (single condition or nested condition groups with logical relations) that defines which rate plan charges contribute to the calculation; if omitted, the scope defaults to “All charges” (i.e., all charges under the selected accounts are eligible). See Orders for more information. - relation: the logical relation with the condition group. Supported values are: and, or. Only two levels of nested condition groups are supported. - conditions: - field: name of the condition field. Refer to the legitimate condition fields. - operator: the logical operator. Supported values are: `eq`, `neq`, `nl` (is null), `nnl` (is not null). - value: the value of the condition field. You can either enter specific values manually or use the predefined condition values.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "minimumAmount",
                                  "label": "Minimum Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "Non-negative currency amount that establishes the lower bound for the calculated charge in a billing period. If the calculated amount is less than this value, the invoice amount will be set to the minimum value.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "maximumAmount",
                                  "label": "Maximum Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "Non-negative currency amount that establishes the upper bound for the calculated charge in a billing period. If the calculated amount exceeds this value, the invoice amount will be set to the maximum value.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "percentage",
                                  "label": "Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "The specific rate applied to the total eligible spend to determine the base invoice amount before any minimum or maximum amount is applied.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringDeliveryBased",
                              "label": "Recurring Delivery Based",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "deliverySchedule",
                                  "label": "Delivery Schedule",
                                  "type": "object",
                                  "required": false,
                                  "fields": [
                                    {
                                      "name": "frequency",
                                      "label": "Frequency",
                                      "type": "string",
                                      "required": false,
                                      "description": "Specifies the frequency for delivery schedule",
                                      "enum": [
                                        "Weekly"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "friday",
                                      "label": "Friday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on friday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "monday",
                                      "label": "Monday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on monday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "saturday",
                                      "label": "Saturday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on saturday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "sunday",
                                      "label": "Sunday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on sunday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "thursday",
                                      "label": "Thursday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on thursday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tuesday",
                                      "label": "Tuesday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on tuesday.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "wednesday",
                                      "label": "Wednesday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on wednesday.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Price of the charge in each recurring period.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringFlatFee",
                              "label": "Recurring Flat Fee",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Price of the charge in each recurring period.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.",
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringPerUnit",
                              "label": "Recurring Per Unit",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Per-unit price of the charge in each recurring period.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.",
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringTiered",
                              "label": "Recurring Tiered",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.",
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "recurringVolume",
                              "label": "Recurring Volume",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                                  "enum": [
                                    "NoChange",
                                    "SpecificPercentageValue",
                                    "UseLatestProductCatalogPricing"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceIncreasePercentage",
                                  "label": "Price Increase Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.",
                                  "enum": [
                                    "Per_Billing_Period",
                                    "Per_Month",
                                    "Per_Week",
                                    "Per_Year",
                                    "Per_Specific_Months"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of variable pricing tiers in the charge.",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                      "enum": [
                                        "FlatFee",
                                        "PerUnit"
                                      ],
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "startingUnit",
                                      "label": "Starting Unit",
                                      "type": "number",
                                      "required": true,
                                      "description": "Number of units at which the tier becomes effective.",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.",
                                      "section": "Additional Fields"
                                    }
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricingAttributes",
                          "label": "Pricing Attributes",
                          "type": "object",
                          "required": false,
                          "description": "Container for pricing attribute and value that provide additional context for dynamic pricing. The pricing attribute values are used to get the charge’s list price from the product catalog. For the pricing attribute mapped to a Zuora object field, Zuora will retrieve the value automatically, you don’t need to pass its value explicitly. If you pass a value that doesn’t match the actual value of the Zuora object, an error will be returned. Note that for any pricing attribute mapped to the field of Zuora object Usage, because its value is only determined when the usage record arrives, you can’t provide a value via Orders API payload and Zuora will not retrieve its value automatically. **Note:** To enable Dynamic Pricing, submit a request to Zuora Global Support.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productCategory",
                          "label": "Product Category",
                          "type": "string",
                          "required": false,
                          "description": "The productCategory of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productClass",
                          "label": "Product Class",
                          "type": "string",
                          "required": false,
                          "description": "The productClass of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productFamily",
                          "label": "Product Family",
                          "type": "string",
                          "required": false,
                          "description": "The productFamily of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productLine",
                          "label": "Product Line",
                          "type": "string",
                          "required": false,
                          "description": "The productLine of a standalone charge. **Note:** This field is available when the Standalone Orders feature is enabled.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeId",
                          "label": "Product Rate Plan Charge Id",
                          "type": "string",
                          "required": true,
                          "description": "Internal identifier of the product rate plan charge that the charge is based on.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeNumber",
                          "label": "Product Rate Plan Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "Number of a product rate-plan charge for this subscription.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "prorationOption",
                          "label": "Proration Option",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Usage charge proration and Charge level proration option for a recurring charge. You can use this field to specify the charge-level proration option for a usage charge or recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden. * `NoProration`: charge-level proration option that you can set for a usage charge. This option means to not use any proration, which is the default current system behavior for a usage charge. * `TimeBasedProration`: charge-level proration option that you can set for a usage charge. This option means to prorate the usage charge amount using the actual number of days if the billing period is a partial period. * `DefaultFromTenantSetting`: charge-level proration option that you can set for a recurring charge. This option means to follow the customer billing rule proration setting. * `ChargeFullPeriod`: charge-level proration option that you can set for a recurring charge. This options means to charge the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period. * `CustomizeProrationOptionOverrides`: charge-level proration option that you can set for a recurring charge. This option means to use the customized charge proration settings that is specified by the `ratingPropertiesOverride` field.",
                          "enum": [
                            "NoProration",
                            "TimeBasedProration",
                            "DefaultFromTenantSetting",
                            "ChargeFullPeriod",
                            "CustomizeProrationOptionOverrides"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "ratingPropertiesOverride",
                          "label": "Rating Properties Override",
                          "type": "object",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. This field is used only when the value of the `prorationOption` field is set to `CustomizeProrationOptionOverrides`. Use this field to specify more customized proration options for a recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.",
                          "fields": [
                            {
                              "name": "isProratePartialMonth",
                              "label": "Is Prorate Partial Month",
                              "type": "boolean",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify whether to prorate the recurring charge for a partial month. The tenant-level proration option will be overridden.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "prorationUnit",
                              "label": "Proration Unit",
                              "type": "string",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify the unit of proration for a recurring charge. The tenant-level proration option will be overridden.",
                              "enum": [
                                "ProrateByDay",
                                "ProrateByMonthFirst"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "daysInMonth",
                              "label": "Days In Month",
                              "type": "string",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Charge level proration option for a recurring charge. Use this field to specify the number of days counted for a month when prorating a recurring charge. The tenant-level proration option will be overridden. See more details for each of the following enum values in Proration.",
                              "enum": [
                                "UseActualDays",
                                "Assume30Days",
                                "Assume30DaysStrict"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recognizedRevenueAccountingCode",
                          "label": "Recognized Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The recognizedRevenueAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders and Zuora Finance features are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "revRecCode",
                          "label": "Rev Rec Code",
                          "type": "string",
                          "required": false,
                          "description": "Revenue Recognition Code",
                          "maxLength": 70,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "revRecTriggerCondition",
                          "label": "Rev Rec Trigger Condition",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the revenue recognition trigger condition. * `Contract Effective Date` * `Service Activation Date` * `Customer Acceptance Date`",
                          "enum": [
                            "Contract Effective Date",
                            "Service Activation Date",
                            "Customer Acceptance Date"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "revenueRecognitionRuleName",
                          "label": "Revenue Recognition Rule Name",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the revenue recognition rule, such as `Recognize upon invoicing` or `Recognize daily over time`.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "revenueRecognitionTiming",
                          "label": "Revenue Recognition Timing",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the type of revenue recognition timing. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. **Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled.",
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
                          "description": "Specifies the type of revenue amortization method. Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI. **Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled.",
                          "enum": [
                            "Immediate",
                            "Ratable Using Start And End Dates"
                          ],
                          "maxLength": 200,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "rolloverApply",
                          "label": "Rollover Apply",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. This field defines the priority of rollover, which is either first or last.",
                          "enum": [
                            "ApplyFirst",
                            "ApplyLast"
                          ],
                          "section": "Credit & Settlement Settings"
                        },
                        {
                          "name": "rolloverPeriodLength",
                          "label": "Rollover Period Length",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. Use this field when you want to set the rollover fund's period length shorter than the prepayment charge's validity period. In this case, you must set the `rolloverPeriods` field to 1. For example, you can define the rollover fund's period length as 5 months, shorter than the prepayment charge's validity period: a year.",
                          "defaultValue": null,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "rolloverPeriods",
                          "label": "Rollover Periods",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. This field defines the number of rollover periods, it is restricted to 3.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "startDate",
                          "label": "Start Date",
                          "type": "object",
                          "required": false,
                          "description": "Specifies when a charge becomes active.",
                          "fields": [
                            {
                              "name": "specificTriggerDate",
                              "label": "Specific Trigger Date",
                              "type": "date",
                              "required": false,
                              "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`. While this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "triggerEvent",
                              "label": "Trigger Event",
                              "type": "string",
                              "required": false,
                              "description": "Condition for the charge to become active. If the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.",
                              "enum": [
                                "ContractEffective",
                                "ServiceActivation",
                                "CustomerAcceptance",
                                "SpecificDate"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "unBilledReceivablesAccountingCode",
                          "label": "Un Billed Receivables Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The unBilledReceivablesAccountingCode of a standalone charge. **Note:** This field is available when the Standalone Orders feature and the Billing - Revenue Integration or Order to Revenue feature are enabled.",
                          "section": "Account Settings"
                        },
                        {
                          "name": "uniqueToken",
                          "label": "Unique Token",
                          "type": "string",
                          "required": false,
                          "description": "Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora. For instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the charge. Then when you update the product, you can use the same unique identifier to specify which charge to modify.",
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upsellOriginChargeNumber",
                          "label": "Upsell Origin Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "The identifier of the original upselling charge associated with the current charge. For a termed subscription, you can now use the \"Create an order\" API operation to perform an Add Product order action to make a product quantity upsell for per unit recurring charges. The benefit is that the charge added by this approach will be automatically combined with the original existing charge for which you want to upsell when the subscription is renewed. The approach is as follows: * Use an Add Product order action to add a charge that is of the same charge type, charge model, and charge end date as the existing per unit recurring charge for which you want to make a quantity upsell. * In the preceding charge to add, use the `upsellOriginChargeNumber` field to specify the existing rate plan charge for which you want to make the quantity upsell. Note that a termed subscription with such upsell charges can not be changed to an evergreen subscription. **Note**: The Quantity Upsell feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com).",
                          "section": "Account Settings"
                        },
                        {
                          "name": "validityPeriodType",
                          "label": "Validity Period Type",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have enabled either of the following: * Prepaid with Drawdown * Minimum Commitment * Both Minimum Commitment and Standalone Orders You can use this field in the following scenarios: * When you create a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge), use this field to define the period in which the prepayment units are valid to use. * When you override the setting of commitment true-up charge from the product catalog, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge. * When you use a standalone order to create a commitment true-up charge, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.",
                          "enum": [
                            "SUBSCRIPTION_TERM",
                            "ANNUAL",
                            "SEMI_ANNUAL",
                            "QUARTER",
                            "MONTH"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "taxCode",
                          "label": "Tax Code",
                          "type": "string",
                          "required": false,
                          "description": "The tax code of a charge. This field is available when the `taxable` field is set to `true`.",
                          "section": "Tax Settings"
                        },
                        {
                          "name": "taxMode",
                          "label": "Tax Mode",
                          "type": "string",
                          "required": false,
                          "description": "The tax mode of a charge. This field is available when the `taxable` field is set to `true`.",
                          "enum": [
                            "TaxInclusive",
                            "TaxExclusive"
                          ],
                          "section": "Tax Settings"
                        },
                        {
                          "name": "taxable",
                          "label": "Taxable",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag indicates whether the charge is taxable. If this field is set to `true`, you must specify the `taxCode` and `taxMode` fields.",
                          "section": "Tax Settings"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "clearingExistingFeatures",
                      "label": "Clearing Existing Features",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether all features in the rate plan will be cleared.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isAddingSubsetCharges",
                      "label": "Is Adding Subset Charges",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether to add a subset of charges to the subscription. **Note:** To access this field for adding a subset of charges, submit a request at Zuora Global Support.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isFromExternalCatalog",
                      "label": "Is From External Catalog",
                      "type": "boolean",
                      "required": false,
                      "description": "Indicates whether the rate plan is created from the Zuora product catalog or from an external product catalog. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanId",
                      "label": "Product Rate Plan Id",
                      "type": "string",
                      "required": true,
                      "description": "Internal identifier of the product rate plan that the rate plan is based on.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate plan for this subscription.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "ratePlanName",
                      "label": "Rate Plan Name",
                      "type": "string",
                      "required": false,
                      "description": "Name of the standalone rate plan. **Note:** This field is available when the Standalone Orders feature is enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "subscriptionProductFeatures",
                      "label": "Subscription Product Features",
                      "type": "array",
                      "required": false,
                      "description": "List of features associated with the rate plan. The system compares the `subscriptionProductFeatures` and `featureId` fields in the request with the counterpart fields in a rate plan. The comparison results are as follows: * If there is no `subscriptionProductFeatures` field or the field is empty, features in the rate plan remain unchanged. But if the `clearingExistingFeatures` field is additionally set to true, all features in the rate plan are cleared. * If the `subscriptionProductFeatures` field contains the `featureId` nested fields, as well as the optional `description` and `customFields` nested fields, the features indicated by the featureId nested fields in the request overwrite all features in the rate plan.",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "description": "A container for custom fields of the feature.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "featureId",
                          "label": "Feature Id",
                          "type": "string",
                          "required": true,
                          "description": "Internal identifier of the feature in the product catalog.",
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Subscription Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "description": "Unique identifier for the rate plan. This identifier enables you to refer to the rate plan before the rate plan has an internal identifier in Zuora. For instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the rate plan. Then when you update the product, you can use the same unique identifier to specify which rate plan to modify.",
                      "maxLength": 50,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "subscriptionRatePlanNumber",
                      "label": "Subscription Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a subscription rate plan for this subscription.",
                      "maxLength": 50,
                      "section": "Account Settings"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionNumber",
                  "label": "Subscription Number",
                  "type": "string",
                  "required": false,
                  "description": "Subscription number of the subscription. For example, A-S00000001. If you do not set this field, Zuora will generate the subscription number.",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "subscriptionOwnerAccountNumber",
                  "label": "Subscription Owner Account Number",
                  "type": "string",
                  "required": false,
                  "description": "Account number of an existing account that will own the subscription. For example, A00000001. If you do not set this field or the `newSubscriptionOwnerAccount` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `newSubscriptionOwnerAccount` field.",
                  "maxLength": 70,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceOwnerAccountNumber",
                  "label": "Invoice Owner Account Number",
                  "type": "string",
                  "required": false,
                  "description": "Account number of an existing account that will own the invoice. For example, A00000001. If you do not set this field, the account that owns the order will also own this invoice.",
                  "maxLength": 70,
                  "section": "Account Settings"
                },
                {
                  "name": "terms",
                  "label": "Terms",
                  "type": "object",
                  "required": false,
                  "description": "Container for the terms and renewal settings of the subscription.",
                  "fields": [
                    {
                      "name": "autoRenew",
                      "label": "Auto Renew",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether the subscription automatically renews at the end of the each term. Only applicable if the type of the first term is `TERMED`.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "initialTerm",
                      "label": "Initial Term",
                      "type": "object",
                      "required": true,
                      "description": "Information about the first term of the subscription.",
                      "fields": [
                        {
                          "name": "period",
                          "label": "Period",
                          "type": "number",
                          "required": false,
                          "description": "Duration of the first term in months, years, days, or weeks, depending on the value of the `periodType` field. Only applicable if the value of the `termType` field is `TERMED`.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "periodType",
                          "label": "Period Type",
                          "type": "string",
                          "required": false,
                          "description": "Unit of time that the first term is measured in. Only applicable if the value of the `termType` field is `TERMED`.",
                          "enum": [
                            "Month",
                            "Year",
                            "Day",
                            "Week"
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "startDate",
                          "label": "Start Date",
                          "type": "date",
                          "required": false,
                          "description": "Start date of the first term, in YYYY-MM-DD format.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDate",
                          "label": "End Date",
                          "type": "date",
                          "required": false,
                          "description": "End date of the first term, in YYYY-MM-DD format.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "termType",
                          "label": "Term Type",
                          "type": "string",
                          "required": true,
                          "description": "Type of the first term. If the value of this field is `TERMED`, the first term has a predefined duration based on the value of the `period` field. If the value of this field is `EVERGREEN`, the first term does not have a predefined duration.",
                          "enum": [
                            "TERMED",
                            "EVERGREEN"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "renewalSetting",
                      "label": "Renewal Setting",
                      "type": "string",
                      "required": false,
                      "description": "Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is `TERMED`. * `RENEW_WITH_SPECIFIC_TERM` - Each renewal term has a predefined duration. The first entry in `renewalTerms` specifies the duration of the second term of the subscription, the second entry in `renewalTerms` specifies the duration of the third term of the subscription, and so on. The last entry in `renewalTerms` specifies the ultimate duration of each renewal term. * `RENEW_TO_EVERGREEN` - The second term of the subscription does not have a predefined duration.",
                      "enum": [
                        "RENEW_WITH_SPECIFIC_TERM",
                        "RENEW_TO_EVERGREEN"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "renewalTerms",
                      "label": "Renewal Terms",
                      "type": "array",
                      "required": false,
                      "description": "List of renewal terms of the subscription. Only applicable if the type of the first term is `TERMED` and the value of the `renewalSetting` field is `RENEW_WITH_SPECIFIC_TERM`.",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "period",
                          "label": "Period",
                          "type": "number",
                          "required": false,
                          "description": "Duration of the renewal term in months, years, days, or weeks, depending on the value of the `periodType` field.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "periodType",
                          "label": "Period Type",
                          "type": "string",
                          "required": false,
                          "description": "Unit of time that the renewal term is measured in.",
                          "enum": [
                            "Month",
                            "Year",
                            "Day",
                            "Week"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Subscription Settings"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields of an Order Action object.",
              "section": "Additional Fields"
            },
            {
              "name": "ownerTransfer",
              "label": "Owner Transfer",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `OwnerTransfer`. **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).",
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The contact id of the bill to contact that the subscription is being transferred to. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing bill-to contact ID at the subscription level. This field is mutually exclusive with the `billToContactId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice group number at the subscription level. This field is mutually exclusive with the `invoiceGroupNumber` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice template ID at the subscription level. This field is mutually exclusive with the `invoiceTemplateId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing payment term at the subscription level. This field is mutually exclusive with the `paymentTerm` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sequence set ID at the subscription level. This field is mutually exclusive with the `sequenceSetId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing ship-to contact ID at the subscription level. This field is mutually exclusive with the `shipToContactId` field. **Note:** To access this field, you must have the ShipToContactSupport permission. If you want to enable this permission, submit a request at Zuora Global Support.",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sold-to contact ID at the subscription level. This field is mutually exclusive with the `soldToContactId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "destinationAccountNumber",
                  "label": "Destination Account Number",
                  "type": "string",
                  "required": false,
                  "description": "The account number of the account that the subscription is being transferred to.",
                  "section": "Account Settings"
                },
                {
                  "name": "destinationInvoiceAccountNumber",
                  "label": "Destination Invoice Account Number",
                  "type": "string",
                  "required": false,
                  "description": "The account number of the invoice owner account that the subscription is being transferred to.",
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceGroupNumber",
                  "label": "Invoice Group Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the invoice group associated with the subscription. After enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping). **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "maxLength": 255,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceTemplateId",
                  "label": "Invoice Template Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the invoice template associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Template from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "paymentProfile",
                  "label": "Payment Profile",
                  "type": "object",
                  "required": false,
                  "description": "Container for payment gateway and payment method details of a payment. If you do not set this field, the payment method and payment gateway values cannot be set in the subscription. **Note:** - If multiple order actions are specified, they will be applied in the same order they appear in the API payload. - If one or more of these order actions include the `paymentProfile` element, the changes will be applied in sequence, and the result will be consistent with the last `paymentProfile` element.",
                  "fields": [
                    {
                      "name": "paymentGatewayId",
                      "label": "Payment Gateway Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the gateway instance that processes the payment. This field remains unset, if you do not provide value.",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "paymentMethodId",
                      "label": "Payment Method Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the payment method. This field remains unset, if you do not provide value.",
                      "section": "Payment Settings"
                    }
                  ],
                  "section": "Payment Settings"
                },
                {
                  "name": "paymentTerm",
                  "label": "Payment Term",
                  "type": "string",
                  "required": false,
                  "description": "Name of the payment term associated with the account. For example, \"Net 30\". The payment term determines the due dates of invoices. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Term from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Payment Settings"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sequence set associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Set from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the ship-to contact associated with the subscription. **Note**: To access this field, you must have the ShipToContactSupport permission. If you want to enable this permission, submit a request at Zuora Global Support.",
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sold-to contact associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Contact Information"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "removeProduct",
              "label": "Remove Product",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `RemoveProduct`.",
              "fields": [
                {
                  "name": "externalCatalogPlanId",
                  "label": "External Catalog Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "An external ID of the rate plan to be removed. You can use this field to specify an existing rate plan in your subscription. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. However, if there are multiple rate plans with the same `productRatePlanId` value existing in the subscription, you must use the `ratePlanId` field to remove the rate plan. The `externalCatalogPlanId` field cannot be used to distinguish multiple rate plans in this case. **Note:** If both `externalCatalogPlanId` and `ratePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate plan for this subscription.",
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "ID of the rate plan to remove. This can be the latest version or any history version of ID.",
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a rate plan for this subscription.",
                  "section": "Account Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
                  "required": false,
                  "description": "Unique identifier for the rate plan. This identifier enables you to refer to the rate plan before the rate plan has an internal identifier in Zuora.",
                  "section": "Additional Fields"
                },
                {
                  "name": "customFields",
                  "label": "Custom Fields",
                  "type": "object",
                  "required": false,
                  "description": "Container for custom fields of a Rate Plan object.",
                  "section": "Additional Fields"
                },
                {
                  "name": "chargeUpdates",
                  "label": "Charge Updates",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "chargeNumber",
                      "label": "Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "Read only. Identifies the charge to be updated.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "productRatePlanChargeId",
                      "label": "Product Rate Plan Charge Id",
                      "type": "string",
                      "required": false,
                      "description": "Identifier of the rate plan that was updated.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate plan for this subscription.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "description": "A unique string to represent the rate plan charge in the order. The unique token is used to perform multiple actions against a newly added rate plan. For example, if you want to add and update a product in the same order, you would assign a unique token to the product rate plan when added and use that token in future order actions.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of a Rate Plan Charge object.",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "renewSubscription",
              "label": "Renew Subscription",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `RenewSubscription`.",
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the bill-to contact associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing bill-to contact ID at the subscription level. This field is mutually exclusive with the `billToContactId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice group number at the subscription level. This field is mutually exclusive with the `invoiceGroupNumber` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice template ID at the subscription level. This field is mutually exclusive with the `invoiceTemplateId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing payment term at the subscription level. This field is mutually exclusive with the `paymentTerm` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sequence set ID at the subscription level. This field is mutually exclusive with the `sequenceSetId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing ship-to contact ID at the subscription level. This field is mutually exclusive with the `shipToContactId` field. **Note:** To access this field, you must have the ShipToContactSupport permission. If you want to enable this permission, submit a request at Zuora Global Support.",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sold-to contact ID at the subscription level. This field is mutually exclusive with the `soldToContactId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "invoiceGroupNumber",
                  "label": "Invoice Group Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the invoice group associated with the subscription. After enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping). **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "maxLength": 255,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceTemplateId",
                  "label": "Invoice Template Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the invoice template associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Template from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "paymentTerm",
                  "label": "Payment Term",
                  "type": "string",
                  "required": false,
                  "description": "The name of the payment term associated with the subscription. For example, `Net 30`. The payment term determines the due dates of invoices. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Term from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body..",
                  "section": "Payment Settings"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sequence set associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Set from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the ship-to contact associated with the subscription. **Note:** To access this field, you must have the ShipToContactSupport permission. If you want to enable this permission, submit a request at Zuora Global Support.",
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sold-to contact associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Contact Information"
                }
              ],
              "section": "Subscription Settings"
            },
            {
              "name": "resume",
              "label": "Resume",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `Resume`.",
              "fields": [
                {
                  "name": "extendsTerm",
                  "label": "Extends Term",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether to extend the subscription term by the length of time the suspension is in effect.",
                  "section": "Additional Fields"
                },
                {
                  "name": "resumePeriods",
                  "label": "Resume Periods",
                  "type": "number",
                  "required": false,
                  "description": "This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriodsType` field. The total number of the periods used to specify when a subscription resumption takes effect. The subscription resumption will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.",
                  "section": "Additional Fields"
                },
                {
                  "name": "resumePeriodsType",
                  "label": "Resume Periods Type",
                  "type": "string",
                  "required": false,
                  "description": "This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriods` field. The period type used to specify when a subscription resumption takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.",
                  "enum": [
                    "Day",
                    "Week",
                    "Month",
                    "Year"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "resumePolicy",
                  "label": "Resume Policy",
                  "type": "string",
                  "required": true,
                  "description": "Resume methods. Specify a way to resume a subscription. See [Resume Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Resume_a_Subscription#Resume_Date) for more information. If `SuspendDate` is specfied, the resumption will take place on the same day as the suspension.",
                  "enum": [
                    "Today",
                    "FixedPeriodsFromSuspendDate",
                    "FixedPeriodsFromToday",
                    "SpecificDate",
                    "SuspendDate"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "resumeSpecificDate",
                  "label": "Resume Specific Date",
                  "type": "date",
                  "required": false,
                  "description": "This field is applicable only when the `resumePolicy` field is set to `SpecificDate`. A specific date when the subscription resumption takes effect, in YYYY-MM-DD format. The value should not be earlier than the subscription suspension date.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "suspend",
              "label": "Suspend",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `Suspend`.",
              "fields": [
                {
                  "name": "suspendPeriods",
                  "label": "Suspend Periods",
                  "type": "number",
                  "required": false,
                  "description": "This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriodsType` field. The total number of the periods used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.",
                  "section": "Additional Fields"
                },
                {
                  "name": "suspendPeriodsType",
                  "label": "Suspend Periods Type",
                  "type": "string",
                  "required": false,
                  "description": "This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriods` field. The period type used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.",
                  "enum": [
                    "Day",
                    "Week",
                    "Month",
                    "Year"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "suspendPolicy",
                  "label": "Suspend Policy",
                  "type": "string",
                  "required": true,
                  "description": "Suspend methods. Specify a way to suspend a subscription. See [Suspend Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Suspend_a_Subscription#Suspend_Date) for more information.",
                  "enum": [
                    "Today",
                    "EndOfLastInvoicePeriod",
                    "FixedPeriodsFromToday",
                    "SpecificDate"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "suspendSpecificDate",
                  "label": "Suspend Specific Date",
                  "type": "date",
                  "required": false,
                  "description": "This field is applicable only when the `suspendPolicy` field is set to `SpecificDate`. A specific date when the subscription suspension takes effect, in YYYY-MM-DD format. The value should not be earlier than the subscription's contract effective date or later [available versions](https://developer.zuora.com/api-references/api/overview/#section/API-Versions/Minor-Version) than the subscription's term end date.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "termsAndConditions",
              "label": "Terms And Conditions",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `TermsAndConditions`.",
              "fields": [
                {
                  "name": "autoRenew",
                  "label": "Auto Renew",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the bill-to contact associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing bill-to contact ID at the subscription level. This field is mutually exclusive with the `billToContactId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice group number at the subscription level. This field is mutually exclusive with the `invoiceGroupNumber` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice template ID at the subscription level. This field is mutually exclusive with the `invoiceTemplateId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing payment term at the subscription level. This field is mutually exclusive with the `paymentTerm` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sequence set ID at the subscription level. This field is mutually exclusive with the `sequenceSetId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing ship-to contact ID at the subscription level. This field is mutually exclusive with the `shipToContactId` field. **Note**: To access this field, you must have the ShipToContactSupport permission. If you want to enable this permission, submit a request at Zuora Global Support.",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sold-to contact ID at the subscription level. This field is mutually exclusive with the `soldToContactId` field. **Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "communicationProfileId",
                  "label": "Communication Profile Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the communication profile associated with the subscription. **Note**: This field is available in the request body only if you have the Flexible Billing Attributes feature turned on. The value is `null` in the response body without this feature turned on.",
                  "section": "Communication Settings"
                },
                {
                  "name": "clearingExistingCommunicationProfile",
                  "label": "Clearing Existing Communication Profile",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing communication profile at the subscription level. This field is mutually exclusive with the `communicationProfileId` field.",
                  "defaultValue": false,
                  "section": "Communication Settings"
                },
                {
                  "name": "invoiceGroupNumber",
                  "label": "Invoice Group Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the invoice group associated with the subscription. After enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping). **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "maxLength": 255,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceSeparately",
                  "label": "Invoice Separately",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether the subscription appears on a separate invoice while generating invoices.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "invoiceTemplateId",
                  "label": "Invoice Template Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the invoice template associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Template from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "lastTerm",
                  "label": "Last Term",
                  "type": "object",
                  "required": false,
                  "description": "The length of the period for the current subscription term.",
                  "fields": [
                    {
                      "name": "period",
                      "label": "Period",
                      "type": "number",
                      "required": false,
                      "description": "Specify only when the termType is 'TERMED'.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "periodType",
                      "label": "Period Type",
                      "type": "string",
                      "required": false,
                      "description": "Specify only when the termType is 'TERMED'.",
                      "enum": [
                        "Month",
                        "Year",
                        "Day",
                        "Week"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "startDate",
                      "label": "Start Date",
                      "type": "date",
                      "required": false,
                      "description": "The start date of the current term. You can change the term start date of a renewed subscription through a T&Cs order action. However, when changing it to an earlier date, this date must not be earlier than the term start date of the current term before this T&Cs.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "endDate",
                      "label": "End Date",
                      "type": "date",
                      "required": false,
                      "description": "The end date of the current term, in YYYY-MM-DD format.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "termType",
                      "label": "Term Type",
                      "type": "string",
                      "required": true,
                      "enum": [
                        "TERMED",
                        "EVERGREEN"
                      ],
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "paymentProfile",
                  "label": "Payment Profile",
                  "type": "object",
                  "required": false,
                  "description": "Container for payment gateway and payment method details of a payment. If you do not set this field, the payment method and payment gateway values cannot be set in the subscription. **Note:** - If multiple order actions are specified, they will be applied in the same order they appear in the API payload. - If one or more of these order actions include the `paymentProfile` element, the changes will be applied in sequence, and the result will be consistent with the last `paymentProfile` element.",
                  "fields": [
                    {
                      "name": "paymentGatewayId",
                      "label": "Payment Gateway Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the gateway instance that processes the payment. This field remains unset, if you do not provide value.",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "paymentMethodId",
                      "label": "Payment Method Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the payment method. This field remains unset, if you do not provide value.",
                      "section": "Payment Settings"
                    }
                  ],
                  "section": "Payment Settings"
                },
                {
                  "name": "paymentTerm",
                  "label": "Payment Term",
                  "type": "string",
                  "required": false,
                  "description": "The name of the payment term associated with the subscription. For example, `Net 30`. The payment term determines the due dates of invoices. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Term from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Payment Settings"
                },
                {
                  "name": "renewalSetting",
                  "label": "Renewal Setting",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "RENEW_WITH_SPECIFIC_TERM",
                    "RENEW_TO_EVERGREEN"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "renewalTerms",
                  "label": "Renewal Terms",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "period",
                      "label": "Period",
                      "type": "number",
                      "required": false,
                      "description": "Duration of the renewal term in months, years, days, or weeks, depending on the value of the `periodType` field.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "periodType",
                      "label": "Period Type",
                      "type": "string",
                      "required": false,
                      "description": "Unit of time that the renewal term is measured in.",
                      "enum": [
                        "Month",
                        "Year",
                        "Day",
                        "Week"
                      ],
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "scheduledCancelDate",
                  "label": "Scheduled Cancel Date",
                  "type": "date",
                  "required": false,
                  "description": "The date when the subscription is scheduled to be canceled. The subscription is not canceled until the date specified in this field.",
                  "section": "Additional Fields"
                },
                {
                  "name": "scheduledSuspendDate",
                  "label": "Scheduled Suspend Date",
                  "type": "date",
                  "required": false,
                  "description": "The date when the subscription is scheduled to be suspended. The subscription is not suspended until the date specified in this field.",
                  "section": "Additional Fields"
                },
                {
                  "name": "scheduledResumeDate",
                  "label": "Scheduled Resume Date",
                  "type": "date",
                  "required": false,
                  "description": "The date when the subscription is scheduled to be resumed. The subscription is not resumed until the date specified in this field.",
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledCancelDate",
                  "label": "Clearing Scheduled Cancel Date",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the value of the `scheduledCancelDate` field. **Note**: Do not set this field and the `scheduledCancelDate` field simultaneously.",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledSuspendDate",
                  "label": "Clearing Scheduled Suspend Date",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the value of the `scheduledSuspendDate` field. **Note**: Do not set this field and the `scheduledSuspendDate` field simultaneously.",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledResumeDate",
                  "label": "Clearing Scheduled Resume Date",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the value of the `scheduledResumeDate` field. **Note**: Do not set this field and the `scheduledResumeDate` field simultaneously.",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sequence set associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Set from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the ship-to contact associated with the subscription. **Note**: To access this field, you must have the ShipToContactSupport permission. If you want to enable this permission, submit a request at Zuora Global Support.",
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sold-to contact associated with the subscription. **Note**: - If you have the Flexible Billing Attributes feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.",
                  "section": "Contact Information"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "triggerDates",
              "label": "Trigger Dates",
              "type": "array",
              "required": false,
              "description": "Container for the contract effective, service activation, and customer acceptance dates of the order action. If the service activation date is set as a required field in Default Subscription Settings, skipping this field in a `CreateSubscription` order action of your JSON request will result in a `Pending` order and a `Pending Activation` subscription. If the customer acceptance date is set as a required field in Default Subscription Settings, skipping this field in a `CreateSubscription` order action of your JSON request will result in a `Pending` order and a `Pending Acceptance` subscription. If the service activation date field is at the same time required and skipped (or set as null), it will be a `Pending Activation` subscription.",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": false,
                  "description": "Name of the trigger date of the order action.",
                  "enum": [
                    "ContractEffective",
                    "ServiceActivation",
                    "CustomerAcceptance"
                  ],
                  "section": "Account Settings"
                },
                {
                  "name": "triggerDate",
                  "label": "Trigger Date",
                  "type": "date",
                  "required": false,
                  "description": "Trigger date in YYYY-MM-DD format.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": true,
              "description": "Type of order action. Unless the type of order action is `RenewSubscription`, you must use the corresponding field to provide information about the order action. For example, if the type of order action is `AddProduct`, you must set the `addProduct` field. Zuora returns an error if you set a field that corresponds to a different type of order action. For example, if the type of order action is `AddProduct`, Zuora returns an error if you set the `updateProduct` field. **Note**: The change plan type of order action is supported for the Order to Revenue feature. However, it is currently not supported for the Billing - Revenue Integration feature. When Billing - Revenue Integration is enabled, the change plan type of order action will no longer be applicable in Zuora Billing.",
              "enum": [
                "CreateSubscription",
                "TermsAndConditions",
                "AddProduct",
                "UpdateProduct",
                "RemoveProduct",
                "RenewSubscription",
                "CancelSubscription",
                "OwnerTransfer",
                "Suspend",
                "Resume",
                "ChangePlan"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "updateProduct",
              "label": "Update Product",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `UpdateProduct`.",
              "fields": [
                {
                  "name": "chargeUpdates",
                  "label": "Charge Updates",
                  "type": "array",
                  "required": false,
                  "description": "Array of the JSON objects containing the information for a charge update in the `updateProduct` type of order action. When previewing an `updateProduct` order action, either the `chargeNumber` or `uniqueToken` field is required to specify the charge to update.",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "billing",
                      "label": "Billing",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "billingPeriodAlignment",
                          "label": "Billing Period Alignment",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is not supported in one time charges.",
                          "enum": [
                            "AlignToCharge",
                            "AlignToSubscriptionStart",
                            "AlignToTermStart"
                          ],
                          "section": "Invoice & Document Settings"
                        }
                      ],
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "chargeNumber",
                      "label": "Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "The number of the charge to be updated. The value of this field is inherited from the `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeNumber` field.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of a Rate Plan Charge object.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "effectiveDate",
                      "label": "Effective Date",
                      "type": "object",
                      "required": false,
                      "description": "Specifies when a charge becomes active.",
                      "fields": [
                        {
                          "name": "specificTriggerDate",
                          "label": "Specific Trigger Date",
                          "type": "date",
                          "required": false,
                          "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`. While this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created.",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "triggerEvent",
                          "label": "Trigger Event",
                          "type": "string",
                          "required": false,
                          "description": "Condition for the charge to become active. If the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.",
                          "enum": [
                            "ContractEffective",
                            "ServiceActivation",
                            "CustomerAcceptance",
                            "SpecificDate"
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "estimatedStartDate",
                      "label": "Estimated Start Date",
                      "type": "date",
                      "required": false,
                      "description": "The estimated start date of the pending charge in an active subscription. The value of this field must be a date within the subscription term. The system will then automatically calculate the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge. **Note:** This field is available only when the Pending Subscription Processing feature is turned on.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "negotiatedPriceTable",
                      "label": "Negotiated Price Table",
                      "type": "array",
                      "required": false,
                      "description": "Array of negotiated price table information. The rate card entries provided in the array will override the existing rate card entries in the standard price table to form a negotiated price table that will be used during pricing evaluation. **Note:** To enable the Negotiated Price Table feature, submit a request to Zuora Global Support.",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "items",
                          "label": "Items",
                          "type": "object",
                          "required": false,
                          "description": "The rate card entry object. **Note:** For more information, refer to the rate card definition in the product catalog.",
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "prepaidQuantity",
                      "label": "Prepaid Quantity",
                      "type": "number",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled. The number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number (>0).",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricingAttributes",
                      "label": "Pricing Attributes",
                      "type": "object",
                      "required": false,
                      "description": "Container for pricing attribute and value that provide additional context for dynamic pricing. The pricing attribute values included in the array will update the existing values. For the pricing attribute mapped to a Zuora object field, Zuora will retrieve the value automatically, you don’t need to pass its value explicitly. If you pass a value that doesn’t match the actual value of the Zuora object, an error will be returned. Note that for any pricing attribute mapped to the field of Zuora object Usage, because its value is only determined when the usage record arrives, you can’t provide a value via Orders API payload and Zuora will not retrieve its value automatically. **Note:** To enable Dynamic Pricing, submit a request to Zuora Global Support.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricing",
                      "label": "Pricing",
                      "type": "object",
                      "required": false,
                      "fields": [
                        {
                          "name": "chargeModelData",
                          "label": "Charge Model Data",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "chargeModelConfiguration",
                              "label": "Charge Model Configuration",
                              "type": "object",
                              "required": false,
                              "fields": [
                                {
                                  "name": "customFieldPerUnitRate",
                                  "label": "Custom Field Per Unit Rate",
                                  "type": "string",
                                  "required": false,
                                  "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "customFieldTotalAmount",
                                  "label": "Custom Field Total Amount",
                                  "type": "string",
                                  "required": false,
                                  "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "formula",
                                  "label": "Formula",
                                  "type": "string",
                                  "required": false,
                                  "description": "The pricing formula to calculate actual rating amount. This field is only available for charges that use the Multi-Attribute Pricing charge model.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased. This field is used if the Multi-Attribute Pricing formula uses the `quantity()` function. This field is only available for one-time and recurring charges that use the Multi-Attribute Pricing charge model.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of cumulative pricing tiers in the charge. **Note**: When you override the tiers of a usage-based charge using High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "description": "Number of units at which the tier becomes effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "discount",
                          "label": "Discount",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "applyDiscountTo",
                              "label": "Apply Discount To",
                              "type": "string",
                              "required": false,
                              "description": "Specifies which type of charge the discount charge applies to.",
                              "enum": [
                                "ONETIME",
                                "RECURRING",
                                "USAGE",
                                "ONETIMERECURRING",
                                "ONETIMEUSAGE",
                                "RECURRINGUSAGE",
                                "ONETIMERECURRINGUSAGE"
                              ],
                              "section": "Credit & Settlement Settings"
                            },
                            {
                              "name": "discountLevel",
                              "label": "Discount Level",
                              "type": "string",
                              "required": false,
                              "description": "Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.",
                              "enum": [
                                "rateplan",
                                "subscription",
                                "account"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountPercentage",
                              "label": "Discount Percentage",
                              "type": "number",
                              "required": false,
                              "description": "The amount of the discount as a percentage. This field is only used for percentage discounts.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListDiscountPercentage",
                              "label": "Original List Discount Percentage",
                              "type": "number",
                              "required": false,
                              "description": "The original discount percentage listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.",
                              "enum": [
                                "NoChange",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringCalcualated",
                          "label": "Recurring Calcualated",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "clearingExistingMinimumAmount",
                              "label": "Clearing Existing Minimum Amount",
                              "type": "boolean",
                              "required": false,
                              "description": "Set it to `true` to reset the minimum amount to null.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "clearingExistingMaximumAmount",
                              "label": "Clearing Existing Maximum Amount",
                              "type": "boolean",
                              "required": false,
                              "description": "Set it to `true` to reset the maximum amount to null.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "minimumAmount",
                              "label": "Minimum Amount",
                              "type": "number",
                              "required": false,
                              "description": "Non-negative currency amount that establishes the lower bound for the calculated charge in a billing period. If the calculated amount is less than this value, the invoice amount will be set to the minimum value.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "maximumAmount",
                              "label": "Maximum Amount",
                              "type": "number",
                              "required": false,
                              "description": "Non-negative currency amount that establishes the upper bound for the calculated charge in a billing period. If the calculated amount exceeds this value, the invoice amount will be set to the maximum value.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "percentage",
                              "label": "Percentage",
                              "type": "number",
                              "required": false,
                              "description": "The specific rate applied to the total eligible spend to determine the base invoice amount before any minimum or maximum amount is applied.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringFlatFee",
                          "label": "Recurring Flat Fee",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringPerUnit",
                          "label": "Recurring Per Unit",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringTiered",
                          "label": "Recurring Tiered",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "description": "Number of units at which the tier becomes effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        },
                        {
                          "name": "recurringVolume",
                          "label": "Recurring Volume",
                          "type": "object",
                          "required": false,
                          "fields": [
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews. If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.",
                              "enum": [
                                "NoChange",
                                "SpecificPercentageValue",
                                "UseLatestProductCatalogPricing"
                              ],
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceIncreasePercentage",
                              "label": "Price Increase Percentage",
                              "type": "number",
                              "required": false,
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.",
                                  "enum": [
                                    "FlatFee",
                                    "PerUnit"
                                  ],
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "startingUnit",
                                  "label": "Starting Unit",
                                  "type": "number",
                                  "required": true,
                                  "description": "Number of units at which the tier becomes effective.",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.",
                                  "section": "Additional Fields"
                                }
                              ],
                              "section": "Additional Fields"
                            }
                          ],
                          "section": "Additional Fields"
                        }
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeId",
                      "label": "Product Rate Plan Charge Id",
                      "type": "string",
                      "required": false,
                      "description": "ID of a product rate plan charge for this subscription. When `isAddingSubsetCharges` is set to true, the product rate charge specified by `productRatePlanChargeId` is added to the existing rate plan specified by `ratePlanId`.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeNumber",
                      "label": "Product Rate Plan Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate plan charge for this subscription. When `isAddingSubsetCharges` is set to true, the product rate charge specified by `productRatePlanChargeNumber` is added to the existing rate plan specified by `ratePlanId`.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "description": "A unique string to represent the rate plan charge in the order. The unique token is used to perform multiple actions against a newly added rate plan charge. For example, if you want to add and update a product in the same order, assign a unique token to the newly added rate plan charge and use that token in future order actions.",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingFeatures",
                  "label": "Clearing Existing Features",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether all features in the rate plan will be cleared.",
                  "section": "Additional Fields"
                },
                {
                  "name": "customFields",
                  "label": "Custom Fields",
                  "type": "object",
                  "required": false,
                  "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.",
                  "section": "Additional Fields"
                },
                {
                  "name": "isAddingSubsetCharges",
                  "label": "Is Adding Subset Charges",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether to add a subset of charges to the subscription. **Note:** To access this field for adding a subset of charges, submit a request at Zuora Global Support.",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate plan for this subscription.",
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "The id of the rate plan to be updated. It can be the latest version or any history version id.",
                  "section": "Additional Fields"
                },
                {
                  "name": "specificUpdateDate",
                  "label": "Specific Update Date",
                  "type": "date",
                  "required": false,
                  "description": "The specific date when the Update Product order action takes effect. This field allows you to update a charge before a future-dated Update Product order action on the subscription. The format of the date is yyyy-mm-dd. **Note**: After you use this option, the charge's `TriggerEvent` field value will be changed to `SpecificDate`. See [Update a Product on Subscription with Future-dated Updates](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Update_a_Product_in_a_Subscription/Update_a_Product_on_Subscription_with_Future-dated_Updates) for more information about this feature.",
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionProductFeatures",
                  "label": "Subscription Product Features",
                  "type": "array",
                  "required": false,
                  "description": "List of features associated with the rate plan. The system compares the `subscriptionProductFeatures` and `featureId` fields in the request with the counterpart fields in a rate plan. The comparison results are as follows: * If there is no `subscriptionProductFeatures` field or the field is empty, features in the rate plan remain unchanged. But if the `clearingExistingFeatures` field is additionally set to true, all features in the rate plan are cleared. * If the `subscriptionProductFeatures` field contains the `featureId` nested fields, as well as the optional `description` and `customFields` nested fields, the features indicated by the featureId nested fields in the request overwrite all features in the rate plan.",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "A container for custom fields of the feature.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "featureId",
                      "label": "Feature Id",
                      "type": "string",
                      "required": true,
                      "description": "Internal identifier of the feature in the product catalog.",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Subscription Settings"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a rate plan for this subscription.",
                  "section": "Account Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
                  "required": false,
                  "description": "A unique string to represent the rate plan in the order. The unique token is used to perform multiple actions against a newly added rate plan. For example, if you want to add and update a product in the same order, assign a unique token to the newly added rate plan and use that token in future order actions.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "quote",
          "label": "Quote",
          "type": "object",
          "required": false,
          "description": "The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.",
          "fields": [
            {
              "name": "OpportunityCloseDate__QT",
              "label": "Opportunity Close Date Q T",
              "type": "string",
              "required": false,
              "description": "The closing date of the Opportunity. This field is used in Zuora Reporting Data Sources to report on Subscription metrics. If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.",
              "section": "Additional Fields"
            },
            {
              "name": "OpportunityName__QT",
              "label": "Opportunity Name Q T",
              "type": "string",
              "required": false,
              "description": "The unique identifier of the Opportunity. This field is used in the Zuora Reporting Data Sources to report on Subscription metrics. If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. **Character limit**: 100",
              "section": "Account Settings"
            },
            {
              "name": "QuoteBusinessType__QT",
              "label": "Quote Business Type Q T",
              "type": "string",
              "required": false,
              "description": "The specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn. This field is used in the Zuora Reporting Data Sources to report on Subscription metrics. If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. **Character limit**: 32",
              "section": "Additional Fields"
            },
            {
              "name": "QuoteNumber__QT",
              "label": "Quote Number Q T",
              "type": "string",
              "required": false,
              "description": "The unique identifier of the Quote. This field is used in the Zuora Reporting Data Sources to report on Subscription metrics. If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. **Character limit**: 32",
              "section": "Account Settings"
            },
            {
              "name": "QuoteType__QT",
              "label": "Quote Type Q T",
              "type": "string",
              "required": false,
              "description": "The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel. This field is used in the Zuora Reporting Data Sources to report on Subscription metrics. If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. **Character limit**: 32",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "ramp",
          "label": "Ramp",
          "type": "object",
          "required": false,
          "description": "Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.",
          "fields": [
            {
              "name": "charges",
              "label": "Charges",
              "type": "array",
              "required": false,
              "description": "Container for the rate plan charges that are considered as part of the ramp deal. * If this field is not specified, all the one-time and recurring regular charges of the new subscription are automatically considered as part of the ramp deal. * If this field is specified, either 'chargeNumber' or 'uniqueToken' must be specified.",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "chargeNumber",
                  "label": "Charge Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the rate plan charge.",
                  "section": "Account Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
                  "required": false,
                  "description": "Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "delete",
              "label": "Delete",
              "type": "boolean",
              "required": false,
              "description": "Whether to remove the ramp definition from the new subscription. If you want to remove the ramp definition, this field is the only required field for the `ramp` object.",
              "section": "Additional Fields"
            },
            {
              "name": "intervals",
              "label": "Intervals",
              "type": "array",
              "required": false,
              "description": "Container for the intervals that the ramp is split into in its timeline. It is required when you want to create or update the ramp definition. The ramp intervals cannot have any overlap or gap between each other.",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "endDate",
                  "label": "End Date",
                  "type": "date",
                  "required": true,
                  "description": "The end date of the interval.",
                  "section": "Additional Fields"
                },
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": false,
                  "description": "The name of the interval.",
                  "section": "Account Settings"
                },
                {
                  "name": "startDate",
                  "label": "Start Date",
                  "type": "date",
                  "required": true,
                  "description": "The start date of the interval.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": false,
              "description": "The name of the ramp.",
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": false,
          "description": "Leave this field empty to represent new subscription creation, or specify a subscription number to update an existing subscription.",
          "section": "Account Settings"
        }
      ],
      "section": "Subscription Settings"
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
