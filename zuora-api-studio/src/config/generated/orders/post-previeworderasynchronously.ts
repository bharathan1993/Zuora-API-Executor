import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_previeworderasynchronouslyEndpoint: ApiEndpoint = {
  "id": "post-previeworderasynchronously",
  "name": "Preview an order asynchronously",
  "description": "**Notes:** ",
  "method": "POST",
  "path": "/v1/async/orders/preview",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": false,
      "description": "Category of the order to indicate a product sale or return. Default value is `NewSales`.\n",
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
      "description": "Container for custom fields of an Order object.\n",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "A description of the order.",
      "maxLength": 500,
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
      "description": "[Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) are non subscription based items created by an Order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services. \n\nWith the Order Line Items feature enabled, you can now launch non-subscription and unified monetization business models in Zuora, in addition to subscription business models. \n\nIf you do not have the **Create Order Line Items Without Product Catalog** billing permission, you can only create order  line items from existing products by specifying the product rate plan charge ID in the `productRatePlanChargeId` field.  For more information about billing permissions, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Platform/System_Management/Administrator_Settings/User_Roles/d_Billing_Roles\" target=\"_blank\">Billing Roles</a>.\n\n**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default.       \n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "UOM",
          "label": "U O M",
          "type": "string",
          "required": false,
          "description": "Specifies the units to measure usage.\n",
          "section": "Additional Fields"
        },
        {
          "name": "accountingCode",
          "label": "Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for the Order Line Item.\n",
          "section": "Account Settings"
        },
        {
          "name": "adjustmentLiabilityAccountingCode",
          "label": "Adjustment Liability Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).\n",
          "section": "Account Settings"
        },
        {
          "name": "adjustmentRevenueAccountingCode",
          "label": "Adjustment Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).\n",
          "section": "Account Settings"
        },
        {
          "name": "amountPerUnit",
          "label": "Amount Per Unit",
          "type": "number",
          "required": false,
          "description": "The actual charged amount per unit for the Order Line Item.\n\nIf you set the `inlineDiscountType`, `inlineDiscountPerUnit`, and `listPricePerUnit` fields, the system will automatically generate the `amountPerUnit` field. You shall not set the `amountPerUnit` field by yourself.\n",
          "section": "Additional Fields"
        },
        {
          "name": "billTargetDate",
          "label": "Bill Target Date",
          "type": "date",
          "required": false,
          "description": "The target date for the Order Line Item to be picked up by bill run for billing.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "billTo",
          "label": "Bill To",
          "type": "string",
          "required": false,
          "description": "The ID of the bill-to contact of an order line item. Specify an existing contact under the billing account as the bill-to contact of the order line item. The billing account is the order account.\n\n**Note**: If an order's category is set to **Return** in a return Order Line Item, it will inherit the original Order Line Item's `billTo` contact automatically. You cannot specify a different value.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "billingRule",
          "label": "Billing Rule",
          "type": "string",
          "required": false,
          "description": "The billing rule for the Order Line Item.\n",
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
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).\n",
          "section": "Account Settings"
        },
        {
          "name": "contractLiabilityAccountingCode",
          "label": "Contract Liability Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).\n",
          "section": "Account Settings"
        },
        {
          "name": "contractRecognizedRevenueAccountingCode",
          "label": "Contract Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).\n",
          "section": "Account Settings"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": false,
          "description": "The currency for the order line item. You can specify a currency when creating an order line item through the \"Create an order\" operation.\n",
          "section": "Additional Fields"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields of an Order Line Item object.\n",
          "section": "Additional Fields"
        },
        {
          "name": "deferredRevenueAccountingCode",
          "label": "Deferred Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The deferred revenue accounting code for the Order Line Item.\n",
          "section": "Account Settings"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "The description of the Order Line Item.\n",
          "maxLength": 500,
          "section": "Additional Fields"
        },
        {
          "name": "excludeItemBillingFromRevenueAccounting",
          "label": "Exclude Item Billing From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude Order Line Item related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled. \n",
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "excludeItemBookingFromRevenueAccounting",
          "label": "Exclude Item Booking From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude Order Line Item from revenue accounting.\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.\n",
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "inlineDiscountPerUnit",
          "label": "Inline Discount Per Unit",
          "type": "number",
          "required": false,
          "description": "Use this field in accordance with the `inlineDiscountType` field, in the following manner:\n* If the `inlineDiscountType` field is set as `Percentage`, this field specifies the discount percentage for each unit of the order line item. For exmaple, if you specify `5` in this field, the discount percentage is 5%.\n* If the `inlineDiscountType` field is set as `FixedAmount`, this field specifies the discount amount on each unit of the order line item. For exmaple, if you specify `10` in this field, the discount amount on each unit of the order line item is 10.\n\nOnce you set the `inlineDiscountType`, `inlineDiscountPerUnit`, and `listPricePerUnit` fields, the system will automatically generate the `amountPerUnit` field. You shall not set the `amountPerUnit` field by yourself.\n",
          "section": "Additional Fields"
        },
        {
          "name": "inlineDiscountType",
          "label": "Inline Discount Type",
          "type": "string",
          "required": false,
          "description": "Use this field to specify the inline discount type, which can be `Percentage`, `FixedAmount`, or `None`. The default value is `Percentage`.\n\nUse this field together with the `inlineDiscountPerUnit` field to specify inline discounts for order line items. The inline discount is applied to the list price of an order line item. \n\nOnce you set the `inlineDiscountType`, `inlineDiscountPerUnit`, and `listPricePerUnit` fields, the system will automatically generate the `amountPerUnit` field. You shall not set the `amountPerUnit` field by yourself.\n",
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
          "description": "This field is used to identify if the charge segment is allocation\neligible in revenue recognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
          "section": "Additional Fields"
        },
        {
          "name": "isUnbilled",
          "label": "Is Unbilled",
          "type": "boolean",
          "required": false,
          "description": "This field is used to dictate how to perform the accounting during revenue\nrecognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "itemCategory",
          "label": "Item Category",
          "type": "string",
          "required": false,
          "description": "The category for the Order Line Item, to indicate a product sale or return.\n",
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
          "description": "The name of the Order Line Item.\n",
          "section": "Account Settings"
        },
        {
          "name": "itemNumber",
          "label": "Item Number",
          "type": "string",
          "required": false,
          "description": "The number of the Order Line Item. Use this field to specify a custom item number for your Order Line Item. If you are to use this field,  you must set all the item numbers in an order when there are several order line items in the order.\n",
          "section": "Account Settings"
        },
        {
          "name": "itemState",
          "label": "Item State",
          "type": "string",
          "required": false,
          "description": "The state of an Order Line Item. If you want to generate billing documents for order line items, you must set this field to `SentToBilling`. For invoice preview, you do not need to set this field.\n\nSee [State transitions for an order, order line item, and fulfillment](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.\n",
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
          "description": "The type of the Order Line Item. \n",
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
          "description": "The list price per unit for the Order Line Item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "originalOrderLineItemNumber",
          "label": "Original Order Line Item Number",
          "type": "string",
          "required": false,
          "description": "The number of the original sale order line item for a return order line item. \n",
          "section": "Account Settings"
        },
        {
          "name": "originalOrderNumber",
          "label": "Original Order Number",
          "type": "string",
          "required": false,
          "description": "The number of the original sale order for a return order line item. \n",
          "section": "Account Settings"
        },
        {
          "name": "ownerAccountNumber",
          "label": "Owner Account Number",
          "type": "string",
          "required": false,
          "description": "Use this field to assign an existing account as the owner of an order line item.\n",
          "section": "Account Settings"
        },
        {
          "name": "productCode",
          "label": "Product Code",
          "type": "string",
          "required": false,
          "description": "The product code for the Order Line Item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanChargeId",
          "label": "Product Rate Plan Charge Id",
          "type": "string",
          "required": false,
          "description": "ID of a product rate plan charge. Only one-time charges are supported.\n\nIf you do not have the **Create Order Line Items Without Product Catalog** billing permission, you must specify this field to create the order line item from an existing product rate plan charge.\n",
          "section": "Additional Fields"
        },
        {
          "name": "purchaseOrderNumber",
          "label": "Purchase Order Number",
          "type": "string",
          "required": false,
          "description": "Used by customers to specify the Purchase Order Number provided by the buyer.\n",
          "section": "Account Settings"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "number",
          "required": false,
          "description": "The quantity of units, such as the number of authors in a hosted wiki service.\n",
          "section": "Additional Fields"
        },
        {
          "name": "recognizedRevenueAccountingCode",
          "label": "Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The recognized revenue accounting code for the Order Line Item.\n",
          "section": "Account Settings"
        },
        {
          "name": "relatedSubscriptionNumber",
          "label": "Related Subscription Number",
          "type": "string",
          "required": false,
          "description": "Use this field to relate an order line item to a subscription when you create the order line item.\n\n* To relate an order line item to a new subscription which is yet to create in the same \"Create an order\" call, use this field in combination with the `subscriptions` > `subscriptionNumber` field in the \"Create an order\" operation. Specify this field to the same value as that of the `subscriptions` > `subscriptionNumber` field when you make the \"Create an order\" call.\n* To relate an order line item to an existing subscription, specify this field to the subscription number of the existing subscription.\n",
          "section": "Account Settings"
        },
        {
          "name": "revenueRecognitionRule",
          "label": "Revenue Recognition Rule",
          "type": "string",
          "required": false,
          "description": "The Revenue Recognition rule for the Order Line Item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "revenueRecognitionTiming",
          "label": "Revenue Recognition Timing",
          "type": "string",
          "required": false,
          "description": "Specifies the type of revenue recognition timing.\n\nPredefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have the Order to Revenue feature enabled. \n",
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
          "description": "Specifies the type of revenue amortization method.\n\nPredefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have the Order to Revenue feature enabled. \n",
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
          "description": "The number of the invoice group associated with the order line item.\n\nAfter enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping).\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.\n  - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.\n",
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "sequenceSetId",
          "label": "Sequence Set Id",
          "type": "string",
          "required": false,
          "description": "The ID of the sequence set associated with the order line item.\n\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.\n  - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "paymentTerm",
          "label": "Payment Term",
          "type": "string",
          "required": false,
          "description": "The payment term name associated with the order line item.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.\n  - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.\n",
          "section": "Payment Settings"
        },
        {
          "name": "invoiceTemplateId",
          "label": "Invoice Template Id",
          "type": "string",
          "required": false,
          "description": "The ID of the invoice template associated with the order line item.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.\n  - You can specify this field on a sales order line item when its state (that is, the `itemState` field) is `Executing`, `Booked`, or `SentToBilling`.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "shipTo",
          "label": "Ship To",
          "type": "string",
          "required": false,
          "description": "Use this field to assign an existing account as the ship-to contact of an order line item, by the following rules:\n\n* If the `ownerAccountNumber` field is set, then this field must be the ID of a contact that belongs to the owner account of the order line item. \n\n* If the `ownerAccountNumber` field is not set, then this field must be the ID of a contact that belongs to the billing account of the order line item. The billing account is the order account.\n\n\n**Note**: If an order's category is set to **Return** in a return Order Line Item, it will inherit the original Order Line Item's `shipTo` contact automatically. You cannot specify a different value.\n",
          "section": "Contact Information"
        },
        {
          "name": "soldTo",
          "label": "Sold To",
          "type": "string",
          "required": false,
          "description": "Use this field to assign an existing account as the sold-to contact of an order line item, by the following rules:\n\n* If the `ownerAccountNumber` field is set, then this field must be the ID of a contact that belongs to the owner account of the order line item. \n* If the `ownerAccountNumber` field is not set, then this field must be the ID of a contact that belongs to the billing account of the order line item. The billing account is the order account.\n\n**Note**: If an order's category is set to **Return** in a return Order Line Item, it will inherit the original Order Line Item's `soldTo` contact automatically. You cannot specify a different value.\n",
          "section": "Contact Information"
        },
        {
          "name": "taxCode",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "description": "The tax code for the Order Line Item.\n",
          "section": "Tax Settings"
        },
        {
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "The tax mode for the Order Line Item.\n",
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
          "description": "The date a transaction is completed. The default value of this field is the transaction start date. Also, the value of this field should always equal or be later than the value of the `transactionStartDate` field.\n",
          "section": "Additional Fields"
        },
        {
          "name": "transactionStartDate",
          "label": "Transaction Start Date",
          "type": "date",
          "required": false,
          "description": "The date a transaction starts. The default value of this field is the order date.\n",
          "section": "Additional Fields"
        },
        {
          "name": "unbilledReceivablesAccountingCode",
          "label": "Unbilled Receivables Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code on the Order Line Item object for customers using [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration).\n",
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
          "description": "The number of periods to preview when the value of the `previewThroughType` field is set to `NumberOfPeriods`.\n",
          "minLength": 1,
          "section": "Account Settings"
        },
        {
          "name": "previewThruType",
          "label": "Preview Thru Type",
          "type": "string",
          "required": false,
          "description": "The options on how the preview through date is calculated. Available for preview only. \n- If you set this field to `SpecificDate`, you must specify a specific date in the `specificPreviewThruDate` field. If you also set `billTargetDate` in the `orderLineItems` field, order line items whose `billTargetDate` is no later than `specificPreviewThruDate` are returned.\n\n- If you set this field to `NumberOfPeriods`, you must use the `previewNumberOfPeriods` field to specify how many periods you want to preview. In case the order only contains an order line item but not contains a subscription, if you also set `billTargetDate` in the `orderLineItems` field, order line items whose `billTargetDate` is no later than today are returned.\n\n- The `TermEnd` option is invalid when any subscription included in this order is evergreen. In case the order only contains an order line item but not contains a subscription, if you set this field to `TermEnd` and set `billTargetDate` in the `orderLineItems` field, order line items whose `billTargetDate` is no later than today are returned.\n",
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
          "description": "One or more types of the preview. It can include:\n\n* ChargeMetrics: charge level metrics will be returned in the response, including: `cmrr`, `tcv`, `tcb`, and `tax`.\n* BillingDocs: `invoices` and `creditMemos` will be returned in the response. Note `creditMemos` is only available if the Invoice Settlement feature is enabled.\n* OrderDeltaMetrics: order delta metrics will be returned in the response, including: `orderDeltaMrr`, `orderDeltaTcb` and  `orderDeltaTcv`.\n* OrderMetrics: order metrics will be returned in the response, including: `quantity`, `mrr`, `tcb`, `tcv`, and `elp`. **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the OrderDeltaMetrics. It is recommended that all customers use the [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/). Whereas new customers, and existing customers not currently on [Order Metrics](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders/Key_Metrics_for_Orders), will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.\n* RampMetrics: ramp metrics will be returned in the response, including: `quantity`, `mrr`, `tcb`, `tcv` metrics for each charge and each ramp interval.\n* RampDeltaMetrics: ramp metrics changes will be returned in the response, including: `deltaQuantity`, `deltaMrr`, `deltaTcb`, `deltaTcv` metrics for each charge and each ramp interval.\n",
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
          "description": "The end date of the order preview. You can preview the invoice charges through the preview through date. (Invoice preview only)\n\n\n**Note:** This field is only applicable if the 'previewThruType' field is set to 'SpecificDate'.\n",
          "section": "Additional Fields"
        },
        {
          "name": "chargeTypeToExclude",
          "label": "Charge Type To Exclude",
          "type": "array",
          "required": false,
          "description": "The charge types to exclude from the forecast run.\n",
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
      "description": "Values of reason code configured in **Billing Settings** > **Configure Reason Codes** through Zuora UI. Indicates the reason when a return order line item occurs.\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "existingAccountId",
      "label": "Existing Account Id",
      "type": "string",
      "required": false,
      "description": "The account ID under which this order will be created.  This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order.  To override these defaults for individual subscriptions, use the `subscriptionOwnerAccountNumber` and `invoiceOwnerAccountNumber` nested fields in the `subscriptions` field. \n\n**Note:** You can specify either the `existingAccountNumber` or `existingAccountId` field, but not both.\n",
      "section": "Account Settings"
    },
    {
      "name": "existingAccountNumber",
      "label": "Existing Account Number",
      "type": "string",
      "required": false,
      "description": "The account number under which this order will be created.  This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the `subscriptionOwnerAccountNumber` and `invoiceOwnerAccountNumber` nested fields in the `subscriptions` field.\n",
      "maxLength": 70,
      "section": "Account Settings"
    },
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": false,
      "description": "The order number of this order.   \n**Note:** The characters `#`, `?`, and `/` are not allowed in this field. Additionally, to ensure compatibility with the UI when viewing orders, use only the following special characters: `_`,`-`, `.`, `~`, `*`, `(`, `)`, and `'`.\n",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "previewAccountInfo",
      "label": "Preview Account Info",
      "type": "object",
      "required": false,
      "description": "Information about the account that will own the order.\n",
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
          "description": "ISO 3-letter currency code (uppercase). For example, USD.\n",
          "maxLength": 3,
          "section": "Additional Fields"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields of an Account object.\n",
          "section": "Additional Fields"
        },
        {
          "name": "shipToContact",
          "label": "Ship To Contact",
          "type": "object",
          "required": false,
          "description": "Contact details associated with an account.\n",
          "fields": [
            {
              "name": "address1",
              "label": "Address1",
              "type": "string",
              "required": false,
              "description": "First line of the contact's address. This is often a street address or a business name.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.\n",
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
          "description": "Contact details associated with an account.\n",
          "fields": [
            {
              "name": "address1",
              "label": "Address1",
              "type": "string",
              "required": false,
              "description": "First line of the contact's address. This is often a street address or a business name.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.\n",
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
          "description": "Information about the tax exempt status of a customer account.\n",
          "fields": [
            {
              "name": "VATId",
              "label": "V A T Id",
              "type": "string",
              "required": false,
              "description": "EU Value Added Tax ID.\n\n**Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).\n",
              "maxLength": 25,
              "section": "Tax Settings"
            },
            {
              "name": "companyCode",
              "label": "Company Code",
              "type": "string",
              "required": false,
              "description": "Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara.\n\n**Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).\n",
              "maxLength": 50,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateId",
              "label": "Exempt Certificate Id",
              "type": "string",
              "required": false,
              "description": "ID of the customer tax exemption certificate. Applicable if you use Zuora Tax or Connect tax engines.\n",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateType",
              "label": "Exempt Certificate Type",
              "type": "string",
              "required": false,
              "description": "Type of tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.\n",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptDescription",
              "label": "Exempt Description",
              "type": "string",
              "required": false,
              "description": "Description of the tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.\n",
              "maxLength": 500,
              "section": "Additional Fields"
            },
            {
              "name": "exemptEffectiveDate",
              "label": "Exempt Effective Date",
              "type": "date",
              "required": false,
              "description": "Date when the customer tax exemption starts, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.\n",
              "section": "Additional Fields"
            },
            {
              "name": "exemptExpirationDate",
              "label": "Exempt Expiration Date",
              "type": "date",
              "required": false,
              "description": "Date when the customer tax exemption expires, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.\n",
              "section": "Additional Fields"
            },
            {
              "name": "exemptIssuingJurisdiction",
              "label": "Exempt Issuing Jurisdiction",
              "type": "string",
              "required": false,
              "description": "Jurisdiction in which the customer tax exemption certificate was issued.\n",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptStatus",
              "label": "Exempt Status",
              "type": "string",
              "required": false,
              "description": "Status of the account tax exemption. Applicable if you use Zuora Tax or Connect tax engines. Required if you use Zuora Tax. \n",
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
      "description": "Each item includes a set of order actions, which will be applied to the same base subscription. When you create an order that involves multiple subscriptions, these subscriptions can have different invoice owner accounts or subscription owner accounts. ",
      "itemType": "object",
      "itemFields": [
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields of a Subscription object.\n",
          "section": "Additional Fields"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "textarea",
          "required": false,
          "description": "Notes about the subscription. These notes are only visible to Zuora users. Notes set in this field will override the value of the `notes` field within the createSubscription order action.\n",
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
              "description": "Information about an order action of type `AddProduct`.\n",
              "fields": [
                {
                  "name": "chargeOverrides",
                  "label": "Charge Overrides",
                  "type": "array",
                  "required": false,
                  "description": "List of charges associated with the rate plan.\n",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "accountReceivableAccountingCode",
                      "label": "Account Receivable Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The accountReceivableAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a>, <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a>, and <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Invoice_Settlement/Get_started_with_Invoice_Settlement/AA_Overview_of_Invoice_Settlement\" target=\"_blank\">Invoice Settlement</a> features are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "adjustmentLiabilityAccountingCode",
                      "label": "Adjustment Liability Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The adjustmentLiabilityAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "adjustmentRevenueAccountingCode",
                      "label": "Adjustment Revenue Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The adjustmentRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "billing",
                      "label": "Billing",
                      "type": "object",
                      "required": false,
                      "description": "Billing information about the charge.\n",
                      "fields": [
                        {
                          "name": "billCycleDay",
                          "label": "Bill Cycle Day",
                          "type": "number",
                          "required": false,
                          "description": "Day of the month that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofMonth`.\n",
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "billCycleType",
                          "label": "Bill Cycle Type",
                          "type": "string",
                          "required": false,
                          "description": "Specifies how Zuora determines the day that each billing period begins on.\n\n  * `DefaultFromCustomer` - Each billing period begins on the bill cycle day of the account that owns the subscription.\n  * `SpecificDayofMonth` - Use the `billCycleDay` field to specify the day of the month that each billing period begins on.\n  * `SubscriptionStartDay` - Each billing period begins on the same day of the month as the start date of the subscription.\n  * `ChargeTriggerDay` - Each billing period begins on the same day of the month as the date when the charge becomes active.\n  * `SpecificDayofWeek` - Use the `weeklyBillCycleDay` field to specify the day of the week that each billing period begins on.\n",
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
                          "description": "Billing frequency of the charge. The value of this field controls the duration of each billing period.\n\nIf the value of this field is `Specific_Days`, `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.\n",
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
                          "description": "Specifies how Zuora determines when to start new billing periods. You can use this field to align the billing periods of different charges.\n\n* `AlignToCharge` - Zuora starts a new billing period on the first billing day that falls on or after the date when the charge becomes active.\n* `AlignToSubscriptionStart` - Zuora starts a new billing period on the first billing day that falls on or after the start date of the subscription.\n* `AlignToTermStart` - For each term of the subscription, Zuora starts a new billing period on the first billing day that falls on or after the start date of the term.\n\nSee the `billCycleType` field for information about how Zuora determines the billing day.\n\n**Note**: This field is not supported in one time charges.\n",
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
                          "description": "Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).\n",
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
                          "description": "Duration of each billing period in months or weeks, depending on the value of the `billingPeriod` field. Only applicable if the value of the `billingPeriod` field is `Specific_Months` or `Specific_Weeks`.\n",
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "weeklyBillCycleDay",
                          "label": "Weekly Bill Cycle Day",
                          "type": "string",
                          "required": false,
                          "description": "Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.\n",
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
                      "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines what type of charge it is:\n* CommitmentTrueUp: For recurring charges. Currency based minimum commitment charge. \n* CreditCommitment: For usage charges. Credit to minimum commitment funds.\n",
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
                      "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a> target=\"_blank\">Minimum Commitment</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines the type of the commitment for both the commitment true-up charge and credit commitment charge, and so you must define the type as `CURRENCY`.\n",
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
                      "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines the way to calculate credit. See [Credit Option](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge#Credit_Option) for more information.\n",
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
                      "description": "The chargeModel of a standalone charge.\n\n\nSupported charge models:\n\n* `FlatFee`\n\n* `PerUnit`\n\n* `Volume`\n\n* `Tiered`\n\n* `DiscountFixedAmount`\n\n* `DiscountPercentage`\n\n**Note:** This field is available when the <a\nhref=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\"\ntarget=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "chargeNumber",
                      "label": "Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "Charge number of the charge. For example, C-00000307.\n\n* If you do not set this field, Zuora will generate a charge number starting with a default prefix, for example, C-. This default prefix is predefined in **Billing Settings** > **Define Default Subscription and Order Settings**.\n* If you want to use a custom charge number, do not use the default prefix predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. Use your own prefix, for example, SC-. \n",
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "chargeType",
                      "label": "Charge Type",
                      "type": "string",
                      "required": false,
                      "description": "The chargeType of a standalone charge.\n\nSupported charge types:\n\n* `OneTime`\n\n* `Recurring`\n\n* `Usage`\n\n**Note:** This field is available when the <a\nhref=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\"\ntarget=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "contractAssetAccountingCode",
                      "label": "Contract Asset Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The contractAssetAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "contractLiabilityAccountingCode",
                      "label": "Contract Liability Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The contractLiabilityAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "contractRecognizedRevenueAccountingCode",
                      "label": "Contract Recognized Revenue Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The contractRecognizedRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of a Rate Plan Charge object.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "deferredRevenueAccountingCode",
                      "label": "Deferred Revenue Accounting Code",
                      "type": "string",
                      "required": false,
                      "description": "The deferredRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a> features are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "description",
                      "label": "Description",
                      "type": "string",
                      "required": false,
                      "description": "Description of the charge.\n",
                      "maxLength": 500,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "drawdownRate",
                      "label": "Drawdown Rate",
                      "type": "number",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe [conversion rate](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge#UOM_Conversion) between Usage UOM and Drawdown UOM for a [drawdown charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge). Must be a positive number (>0).\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "endDate",
                      "label": "End Date",
                      "type": "object",
                      "required": false,
                      "description": "Specifies when a charge becomes inactive.\n",
                      "fields": [
                        {
                          "name": "endDateCondition",
                          "label": "End Date Condition",
                          "type": "string",
                          "required": false,
                          "description": "Condition for the charge to become inactive.\n\n- If the value of this field is `Fixed_Period`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.\n- If the value of this field is `Specific_End_Date`, use the `specificEndDate` field to specify the date when the charge becomes inactive.\n",
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
                          "description": "End date policy of the discount charge to become active when the **Apply to billing period partially** checkbox is selected from the product catalog UI or the `applyToBillingPeriodPartially` field is set as true from the \"CRUD: Create a product rate plan charge\" operation. \n\n- If the value of this field is `FixedPeriod`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.\n- If the value of this field is `SpecificEndDate`, use the `specificEndDate` field to specify the date when the charge becomes inactive.\n\n**Notes**: \n- You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n- You can use either `endDateCondition` or `endDatePolicy` to define when a discount charge ends, but not both at the same time.\n",
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
                          "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `endDateCondition` field is `Specific_End_Date`.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upToPeriods",
                          "label": "Up To Periods",
                          "type": "number",
                          "required": false,
                          "description": "Duration of the charge in billing periods, days, weeks, months, or years, depending on the value of the `upToPeriodsType` field. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upToPeriodsType",
                          "label": "Up To Periods Type",
                          "type": "string",
                          "required": false,
                          "description": "Unit of time that the charge duration is measured in. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.\n",
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
                      "description": "The estimated start date of the pending charge in an active subscription.\n\nIf you specify `SpecificDate` in the `startDate` > `triggerEvent` field and want to create a completed order and an active subscription, you must specify either the `estimatedStartDate` or `startDate` > `specificTriggerDate` field:\n\n- `estimatedStartDate`: The charge will be in pending status.\n\n- `specificTriggerDate`: The charge will be in active status.\n\nThe value of this field must be a date within the subscription term. The system will then automatically calculate the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge.\n\n**Note:** This field is available only when the Pending Subscription Processing feature is turned on.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "excludeItemBillingFromRevenueAccounting",
                      "label": "Exclude Item Billing From Revenue Accounting",
                      "type": "boolean",
                      "required": false,
                      "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.\n\nIf both the following features are enabled in your tenant, you must ensure the `excludeItemBillingFromRevenueAccounting` field is set consistently for a prepayment charge and the corresponding drawdown charge. In addition, if the `excludeItemBookingFromRevenueAccounting` field in a Create Subscription or Add Product order action is set to `false`, you must also set the `excludeItemBillingFromRevenueAccounting` field in this order action to `false`.\n  * Prepaid with Drawdown\n  * Unbilled Usage\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.\n",
                      "defaultValue": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "excludeItemBookingFromRevenueAccounting",
                      "label": "Exclude Item Booking From Revenue Accounting",
                      "type": "boolean",
                      "required": false,
                      "description": "The flag to exclude rate plan charges from revenue accounting.\n\nIf both the following features are enabled in your tenant, you must ensure the `excludeItemBookingFromRevenueAccounting` field is set consistently for a prepayment charge and the corresponding drawdown charge.\n  * Prepaid with Drawdown\n  * Unbilled Usage\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.\n",
                      "defaultValue": false,
                      "section": "Account Settings"
                    },
                    {
                      "name": "isAllocationEligible",
                      "label": "Is Allocation Eligible",
                      "type": "boolean",
                      "required": false,
                      "description": "This field is used to identify if the charge segment is allocation\neligible in revenue recognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isRollover",
                      "label": "Is Rollover",
                      "type": "boolean",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe value is either \"True\" or \"False\". It determines whether the rollover fields are needed.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isUnbilled",
                      "label": "Is Unbilled",
                      "type": "boolean",
                      "required": false,
                      "description": "This field is used to dictate how to perform the accounting during revenue\nrecognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "name",
                      "label": "Name",
                      "type": "string",
                      "required": false,
                      "description": "The name of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "negotiatedPriceTable",
                      "label": "Negotiated Price Table",
                      "type": "array",
                      "required": false,
                      "description": "Array of negotiated price table information. The rate card entries provided in the array will override \nthe existing rate card entries in the standard price table to form a negotiated price table that will be    \nused during pricing evaluation.\n\n\n**Note:** To enable the Negotiated Price Table feature, submit a request to <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.                  \n",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "items",
                          "label": "Items",
                          "type": "object",
                          "required": false,
                          "description": "The rate card entry object.\n\n\n  **Note:** For more information, refer to the rate card definition in the product catalog.",
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
                      "description": "The pobPolicy of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "prepaidQuantity",
                      "label": "Prepaid Quantity",
                      "type": "number",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number (>0).\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricing",
                      "label": "Pricing",
                      "type": "object",
                      "required": false,
                      "description": "Pricing information about the charge.\n",
                      "fields": [
                        {
                          "name": "chargeModelData",
                          "label": "Charge Model Data",
                          "type": "object",
                          "required": false,
                          "description": "Container for charge model configuration data.\n\n**Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The High Water Mark and Pre-Rated Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
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
                                  "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`.\n\nThis field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "customFieldTotalAmount",
                                  "label": "Custom Field Total Amount",
                                  "type": "string",
                                  "required": false,
                                  "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. \n\nThis field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "formula",
                                  "label": "Formula",
                                  "type": "string",
                                  "required": false,
                                  "description": "The pricing formula to calculate actual rating amount.\n\nThis field is only available for charges that use the Multi-Attribute Pricing charge model.\n",
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
                              "description": "Number of units purchased. This field is used if the Multi-Attribute Pricing formula uses the `quantity()` function.\n\nThis field is only available for one-time and recurring charges that use the Multi-Attribute Pricing charge model.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of cumulative pricing tiers in the charge.\n\n**Note**: When you override the tiers of a usage-based charge using High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                  "description": "Number of units at which the tier becomes effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.\n",
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
                          "description": "Pricing information about a discount charge.\n",
                          "fields": [
                            {
                              "name": "applyDiscountTo",
                              "label": "Apply Discount To",
                              "type": "string",
                              "required": false,
                              "description": "Specifies which type of charge the discount charge applies to.\n",
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
                              "description": "Allow the discount duration to be aligned with the billing period partially.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "discountAmount",
                              "label": "Discount Amount",
                              "type": "number",
                              "required": false,
                              "description": "Only applicable if the discount charge is a fixed-amount discount.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountApplyDetails",
                              "label": "Discount Apply Details",
                              "type": "array",
                              "required": false,
                              "description": "Charge list of discount be applied to.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "productRatePlanChargeId",
                                  "label": "Product Rate Plan Charge Id",
                                  "type": "string",
                                  "required": true,
                                  "description": "Product Rate Plan Charge Id of the discount apply to.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "productRatePlanId",
                                  "label": "Product Rate Plan Id",
                                  "type": "string",
                                  "required": true,
                                  "description": "Product Rate Plan Id of the discount apply to.\n",
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
                              "description": "The discount class defines the sequence in which discount product rate plan charges are applied.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "discountLevel",
                              "label": "Discount Level",
                              "type": "string",
                              "required": false,
                              "description": "Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.\n",
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
                              "description": "Only applicable if the discount charge is a percentage discount.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalDiscountAmount",
                              "label": "Original Discount Amount",
                              "type": "number",
                              "required": false,
                              "description": "The manufacturer's suggested retail discount price for standalone charge.\n\nOnly applicable if the standalone discount charge is a fixed-amount discount.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalDiscountPercentage",
                              "label": "Original Discount Percentage",
                              "type": "number",
                              "required": false,
                              "description": "The manufacturer's suggested retail discount percentage for standalone charge.\n\nOnly applicable if the standalone discount charge is a percentage discount.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n",
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
                          "description": "Pricing information about a one-time charge that uses the \"flat fee\" charge model. In this charge model, the charge has a fixed price.\n",
                          "fields": [
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": true,
                              "description": "Price of the charge.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
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
                          "description": "Pricing information about a one-time charge that uses the \"per unit\" charge model. In this charge model, the charge has a fixed price per unit purchased.\n",
                          "fields": [
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "description": "Per-unit price of the charge.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "originalListPrice",
                              "label": "Original List Price",
                              "type": "number",
                              "required": false,
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                          "description": "Pricing information about a one-time charge that uses the \"tiered pricing\" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.\n",
                          "fields": [
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of cumulative pricing tiers in the charge.\n",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                  "description": "Number of units at which the tier becomes effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.\n",
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
                              "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                          "description": "Pricing information about a one-time charge that uses the \"volume pricing\" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.\n",
                          "fields": [
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of variable pricing tiers in the charge.\n",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                  "description": "Number of units at which the tier becomes effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.\n",
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
                              "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
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
                                  "description": "Specifies the frequency for delivery schedule\n",
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
                                  "description": "Indicates whether delivery on friday.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "monday",
                                  "label": "Monday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on monday.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "saturday",
                                  "label": "Saturday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on saturday.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "sunday",
                                  "label": "Sunday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on sunday.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "thursday",
                                  "label": "Thursday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on thursday.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tuesday",
                                  "label": "Tuesday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on tuesday.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "wednesday",
                                  "label": "Wednesday",
                                  "type": "boolean",
                                  "required": false,
                                  "description": "Indicates whether delivery on wednesday.\n",
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
                              "description": "Price of the charge in each recurring period.\n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "description": "Price of the charge in each recurring period.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "description": "Specifies the duration of each recurring period.\n",
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
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPrice",
                              "label": "List Price",
                              "type": "number",
                              "required": false,
                              "description": "Per-unit price of the charge in each recurring period.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "description": "Specifies the duration of each recurring period.\n",
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
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "quantity",
                              "label": "Quantity",
                              "type": "number",
                              "required": false,
                              "description": "Number of units purchased.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "uom",
                              "label": "Uom",
                              "type": "number",
                              "required": false,
                              "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "description": "Specifies the duration of each recurring period.\n",
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
                              "description": "Number of units purchased.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of cumulative pricing tiers in the charge.\n",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                  "description": "Number of units at which the tier becomes effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.\n",
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
                              "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "listPriceBase",
                              "label": "List Price Base",
                              "type": "string",
                              "required": false,
                              "description": "Specifies the duration of each recurring period.\n",
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
                              "description": "Number of units purchased.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificListPriceBase",
                              "label": "Specific List Price Base",
                              "type": "number",
                              "required": false,
                              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of variable pricing tiers in the charge.\n",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                  "description": "Number of units at which the tier becomes effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.\n",
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
                              "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                      "description": "Container for pricing attribute and value that provide additional context for dynamic pricing. The pricing attribute values are used to get the charge’s list price from the product catalog. For the pricing attribute mapped to a Zuora object field, Zuora will retrieve the value automatically, you don’t need to pass its value explicitly. If you pass a value that doesn’t match the actual value of the Zuora object, an error will be returned. \nNote that for any pricing attribute mapped to the field of Zuora object Usage, because its value is only determined when the usage record arrives, you can’t provide a value via Orders API payload and Zuora will not retrieve its value automatically.    \n\n\n**Note:** To enable Dynamic Pricing, submit a request to <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productCategory",
                      "label": "Product Category",
                      "type": "string",
                      "required": false,
                      "description": "The productCategory of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productClass",
                      "label": "Product Class",
                      "type": "string",
                      "required": false,
                      "description": "The productClass of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productFamily",
                      "label": "Product Family",
                      "type": "string",
                      "required": false,
                      "description": "The productFamily of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productLine",
                      "label": "Product Line",
                      "type": "string",
                      "required": false,
                      "description": "The productLine of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeId",
                      "label": "Product Rate Plan Charge Id",
                      "type": "string",
                      "required": true,
                      "description": "Internal identifier of the product rate plan charge that the charge is based on.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeNumber",
                      "label": "Product Rate Plan Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate-plan charge for this subscription.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "prorationOption",
                      "label": "Proration Option",
                      "type": "string",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Unbilled_Usage/Usage_charge_proration\" target=\"_blank\">Usage charge proration</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nYou can use this field to specify the charge-level proration option for a usage charge or recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.\n  * `NoProration`: charge-level proration option that you can set for a usage charge. This option means to not use any proration, which is the default current system behavior for a usage charge.\n  * `TimeBasedProration`: charge-level proration option that you can set for a usage charge. This option means to prorate the usage charge amount using the actual number of days if the billing period is a partial period.\n  * `DefaultFromTenantSetting`: charge-level proration option that you can set for a recurring charge. This option means to follow the customer billing rule proration setting.\n  * `ChargeFullPeriod`: charge-level proration option that you can set for a recurring charge. This options means to charge the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period.\n  * `CustomizeProrationOptionOverrides`: charge-level proration option that you can set for a recurring charge. This option means to use the customized charge proration settings that is specified by the `ratingPropertiesOverride` field.\n",
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
                      "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nThis field is used only when the value of the `prorationOption` field is set to `CustomizeProrationOptionOverrides`. \n\nUse this field to specify more customized proration options for a recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.\n",
                      "fields": [
                        {
                          "name": "isProratePartialMonth",
                          "label": "Is Prorate Partial Month",
                          "type": "boolean",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify whether to prorate the recurring charge for a partial month. The tenant-level proration option will be overridden.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prorationUnit",
                          "label": "Proration Unit",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify the unit of proration for a recurring charge. The tenant-level proration option will be overridden.\n",
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
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify the number of days counted for a month when prorating a recurring charge. The tenant-level proration option will be overridden. See more details for each of the following enum values in <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Common_subscription_information/F_Proration#When_prorating_a_month.2C_assume_30_days_in_a_month_or_use_actual_days.3F\" target=\"_blank\">Proration</a>.\n",
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
                      "description": "The recognizedRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a> features are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "revRecCode",
                      "label": "Rev Rec Code",
                      "type": "string",
                      "required": false,
                      "description": "Revenue Recognition Code\n",
                      "maxLength": 70,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "revRecTriggerCondition",
                      "label": "Rev Rec Trigger Condition",
                      "type": "string",
                      "required": false,
                      "description": "Specifies the revenue recognition trigger condition.\n\n  * `Contract Effective Date` \n  * `Service Activation Date`\n  * `Customer Acceptance Date`\n",
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
                      "description": "Specifies the revenue recognition rule, such as `Recognize upon invoicing` or `Recognize daily over time`.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "revenueRecognitionTiming",
                      "label": "Revenue Recognition Timing",
                      "type": "string",
                      "required": false,
                      "description": "Specifies the type of revenue recognition timing.\n\nPredefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled. \n",
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
                      "description": "Specifies the type of revenue amortization method.\n\nPredefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled. \n",
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
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThis field defines the priority of rollover, which is either first or last.\n",
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
                      "description": "**Note**: This field is only available if you have the [Prepaid with\nDrawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown)\nfeature enabled.\n\nUse this field when you want to set the rollover fund's period length shorter than the prepayment charge's validity period. In this case, you must set the `rolloverPeriods` field to 1. For example, you can define the rollover fund's period length as 5 months, shorter than the prepayment charge's validity period: a year.\n",
                      "defaultValue": null,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "rolloverPeriods",
                      "label": "Rollover Periods",
                      "type": "number",
                      "required": false,
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThis field defines the number of rollover periods, it is restricted to 3.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "startDate",
                      "label": "Start Date",
                      "type": "object",
                      "required": false,
                      "description": "Specifies when a charge becomes active.\n",
                      "fields": [
                        {
                          "name": "specificTriggerDate",
                          "label": "Specific Trigger Date",
                          "type": "date",
                          "required": false,
                          "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`. \n\nWhile this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "triggerEvent",
                          "label": "Trigger Event",
                          "type": "string",
                          "required": false,
                          "description": "Condition for the charge to become active.\n\nIf the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.\n",
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
                      "description": "The unBilledReceivablesAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "description": "Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora.\n\nFor instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the charge. Then when you update the product, you can use the same unique identifier to specify which charge to modify.\n",
                      "maxLength": 50,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "upsellOriginChargeNumber",
                      "label": "Upsell Origin Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "The identifier of the original upselling charge associated with the current charge.\n\nFor a termed subscription, you can now use the \"Create an order\" API operation to perform an Add Product order action to make a product quantity upsell for per unit recurring charges. The benefit is that the charge added by this approach will be automatically combined with the original existing charge for which you want to upsell when the subscription is renewed. The approach is as follows:\n* Use an Add Product order action to add a charge that is of the same charge type, charge model, and charge end date as the existing per unit recurring charge for which you want to make a quantity upsell.\n\n* In the preceding charge to add, use the `upsellOriginChargeNumber` field to specify the existing rate plan charge for which you want to make the quantity upsell.\n\nNote that a termed subscription with such upsell charges can not be changed to an evergreen subscription.   \n\n**Note**: The Quantity Upsell feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global\n  Support](https://support.zuora.com).  \n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "validityPeriodType",
                      "label": "Validity Period Type",
                      "type": "string",
                      "required": false,
                      "description": "**Note**: This field is only available if you have enabled either of the following:\n* <a href=\"https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a>\n* <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a>\n* Both <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a>\n\nYou can use this field in the following scenarios: \n* When you create a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge), use this field to define the period in which the prepayment units are valid to use.\n\n* When you override the setting of <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment#Commitment_true-up_charge_specific_settings\" target=\"_blank\">commitment true-up charge</a> from the product catalog, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.\n\n* When you use a standalone order to create a commitment true-up charge, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.\n",
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
                      "description": "The tax code of a charge. This field is available when the `taxable` field is set to `true`. \n",
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxMode",
                      "label": "Tax Mode",
                      "type": "string",
                      "required": false,
                      "description": "The tax mode of a charge.  This field is available when the `taxable` field is set to `true`.\n",
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
                      "description": "The flag indicates whether the charge is taxable. If this field is set to `true`, you must specify the `taxCode` and `taxMode` fields.\n",
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
                  "description": "Specifies whether all features in the rate plan will be cleared.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "customFields",
                  "label": "Custom Fields",
                  "type": "object",
                  "required": false,
                  "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "isAddingSubsetCharges",
                  "label": "Is Adding Subset Charges",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether to add a subset of charges to the subscription.\n\n\n**Note:** To access this field for adding a subset of charges, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "isFromExternalCatalog",
                  "label": "Is From External Catalog",
                  "type": "boolean",
                  "required": false,
                  "description": "Indicates whether the rate plan is created from the Zuora product catalog or from an external product catalog.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanId",
                  "label": "Product Rate Plan Id",
                  "type": "string",
                  "required": true,
                  "description": "Internal identifier of the product rate plan that the rate plan is based on.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate plan for this subscription.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanName",
                  "label": "Rate Plan Name",
                  "type": "string",
                  "required": false,
                  "description": "Name of the standalone rate plan.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "subscriptionProductFeatures",
                  "label": "Subscription Product Features",
                  "type": "array",
                  "required": false,
                  "description": "List of features associated with the rate plan.\nThe system compares the `subscriptionProductFeatures` and `featureId` fields in the request with the counterpart fields in a rate plan. The comparison results are as follows:\n* If there is no `subscriptionProductFeatures` field or the field is empty, features in the rate plan remain unchanged. But if the `clearingExistingFeatures` field is additionally set to true, all features in the rate plan are cleared.\n* If the `subscriptionProductFeatures` field contains the `featureId` nested fields, as well as the optional `description` and `customFields` nested fields, the features indicated by the featureId nested fields in the request overwrite all features in the rate plan.\n",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "A container for custom fields of the feature.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "description",
                      "label": "Description",
                      "type": "string",
                      "required": false,
                      "description": "A description of the feature.",
                      "maxLength": 500,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "featureId",
                      "label": "Feature Id",
                      "type": "string",
                      "required": true,
                      "description": "Internal identifier of the feature in the product catalog.\n",
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
                  "description": "Unique identifier for the rate plan. This identifier enables you to refer to the rate plan before the rate plan has an internal identifier in Zuora.\n\nFor instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the rate plan. Then when you update the product, you can use the same unique identifier to specify which rate plan to modify.\n",
                  "maxLength": 50,
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a subscription rate plan for this subscription.\n",
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
              "description": "Information about an order action of type `CancelSubscription`.\n",
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
              "description": "Information about an order action of type `ChangePlan`. \n\nUse the change plan type of order action to replace the existing rate plans in a subscription with other rate plans.\n\n**Note**: The change plan type of order action is supported for the  <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature. However, it is currently not supported for the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> feature. When Billing - Revenue Integration is enabled, the change plan type of order action will no longer be applicable in Zuora Billing.\n\nIf you want to create a pending order through the \"change plan\" order action, and if the charge's trigger condition is `Specific Date`, you must set a charge number in the `chargeNumber` field for the \"change plan\" order action. In this case, if you do not set it, Zuora will not generate the charge number for you.\n\nSee more information about pending orders in <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/Pending_orders_and_subscriptions\" target=\"_blank\">Pending orders and subscriptions</a>.\n",
              "fields": [
                {
                  "name": "effectivePolicy",
                  "label": "Effective Policy",
                  "type": "string",
                  "required": false,
                  "description": "The default value for the `effectivePolicy` field is as follows:\n  * If the rate plan change (from old to new) is an upgrade, the effective policy is `EffectiveImmediately` by default.\n  * If the rate plan change (from old to new) is a downgrade, the effective policy is `EffectiveEndOfBillingPeriod` by default.\n  * Otherwise, the effective policy is `SpecificDate` by default.\n\n**Notes**: \n  * When setting this field to `EffectiveEndOfBillingPeriod`, you cannot set the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/W_Subscription_and_Amendment_Dates#Billing_Trigger_Dates\" target=\"_blank\">billing trigger dates</a> for the subscription as the system will automatically set the trigger dates to the end of billing period, and you cannot set the following billing trigger date settings to `Yes`:\n    * <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Invoicing/Billing_Settings/Define_Default_Subscription_and_Order_Settings#Require_Customer_Acceptance_of_Orders.3F\" target=\"_blank\">Require Customer Acceptance of Orders?</a>\n    * <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Invoicing/Billing_Settings/Define_Default_Subscription_and_Order_Settings#Require_Service_Activation_of_Orders.3F\" target=\"_blank\">Require Service Activation of Orders?</a>\n  \n  * When setting this field to `SpecificDate`, you must also set the contract effective date in the `triggerDates` field as follows:\n    * Set the `name` field as `ContractEffective`\n    * Specify a date for the `triggerDate` field\n",
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
                  "description": "An external ID of the rate plan to be removed. You can use this field to specify an existing rate plan in your subscription. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. However, if there are multiple rate plans with the same `productRatePlanId` value existing in the subscription, you must use the `ratePlanId` field to remove the rate plan. The `externalCatalogPlanId` field cannot be used to distinguish multiple rate plans in this case.\n\n**Note:** Please provide only one of `externalCatalogPlanId`, `ratePlanId` or `productRatePlanId`. If more than 1 field is provided then the request would fail.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "newProductRatePlan",
                  "label": "New Product Rate Plan",
                  "type": "object",
                  "required": true,
                  "description": "Information about the new product rate plan to add. \n",
                  "fields": [
                    {
                      "name": "chargeOverrides",
                      "label": "Charge Overrides",
                      "type": "array",
                      "required": false,
                      "description": "List of charges associated with the rate plan.\n",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "accountReceivableAccountingCode",
                          "label": "Account Receivable Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The accountReceivableAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a>, <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a>, and <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Invoice_Settlement/Get_started_with_Invoice_Settlement/AA_Overview_of_Invoice_Settlement\" target=\"_blank\">Invoice Settlement</a> features are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "adjustmentLiabilityAccountingCode",
                          "label": "Adjustment Liability Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The adjustmentLiabilityAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "adjustmentRevenueAccountingCode",
                          "label": "Adjustment Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The adjustmentRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "billing",
                          "label": "Billing",
                          "type": "object",
                          "required": false,
                          "description": "Billing information about the charge.\n",
                          "fields": [
                            {
                              "name": "billCycleDay",
                              "label": "Bill Cycle Day",
                              "type": "number",
                              "required": false,
                              "description": "Day of the month that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofMonth`.\n",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billCycleType",
                              "label": "Bill Cycle Type",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora determines the day that each billing period begins on.\n\n  * `DefaultFromCustomer` - Each billing period begins on the bill cycle day of the account that owns the subscription.\n  * `SpecificDayofMonth` - Use the `billCycleDay` field to specify the day of the month that each billing period begins on.\n  * `SubscriptionStartDay` - Each billing period begins on the same day of the month as the start date of the subscription.\n  * `ChargeTriggerDay` - Each billing period begins on the same day of the month as the date when the charge becomes active.\n  * `SpecificDayofWeek` - Use the `weeklyBillCycleDay` field to specify the day of the week that each billing period begins on.\n",
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
                              "description": "Billing frequency of the charge. The value of this field controls the duration of each billing period.\n\nIf the value of this field is `Specific_Days`, `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.\n",
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
                              "description": "Specifies how Zuora determines when to start new billing periods. You can use this field to align the billing periods of different charges.\n\n* `AlignToCharge` - Zuora starts a new billing period on the first billing day that falls on or after the date when the charge becomes active.\n* `AlignToSubscriptionStart` - Zuora starts a new billing period on the first billing day that falls on or after the start date of the subscription.\n* `AlignToTermStart` - For each term of the subscription, Zuora starts a new billing period on the first billing day that falls on or after the start date of the term.\n\nSee the `billCycleType` field for information about how Zuora determines the billing day.\n\n**Note**: This field is not supported in one time charges. \n",
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
                              "description": "Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).\n",
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
                              "description": "Duration of each billing period in months or weeks, depending on the value of the `billingPeriod` field. Only applicable if the value of the `billingPeriod` field is `Specific_Months` or `Specific_Weeks`.\n",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "weeklyBillCycleDay",
                              "label": "Weekly Bill Cycle Day",
                              "type": "string",
                              "required": false,
                              "description": "Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.\n",
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
                          "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines what type of charge it is:\n* CommitmentTrueUp: For recurring charges. Currency based minimum commitment charge. \n* CreditCommitment: For usage charges. Credit to minimum commitment funds.\n",
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
                          "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines the type of the commitment for both the commitment true-up charge and credit commitment charge, and so you must define the type as `CURRENCY`.\n",
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
                          "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines the way to calculate credit. See [Credit Option](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge#Credit_Option) for more information.\n",
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
                          "description": "The chargeModel of a standalone charge.\n\n\nSupported charge models:\n\n* `FlatFee`\n\n* `PerUnit`\n\n* `Volume`\n\n* `Tiered`\n\n* `DiscountFixedAmount`\n\n* `DiscountPercentage`\n\n\n**Note:** This field is available when the <a\nhref=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\"\ntarget=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "chargeNumber",
                          "label": "Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "Charge number of the charge. For example, C-00000307.\n\n* If you do not set this field, Zuora will generate a charge number starting with a default prefix, for example, C-. This default prefix is predefined in **Billing Settings** > **Define Default Subscription and Order Settings**.\n* If you want to use a custom charge number, do not use the default prefix predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. Use your own prefix, for example, SC-.\n",
                          "maxLength": 50,
                          "section": "Account Settings"
                        },
                        {
                          "name": "chargeType",
                          "label": "Charge Type",
                          "type": "string",
                          "required": false,
                          "description": "The chargeType of a standalone charge.\n\nSupported charge types:\n\n* `OneTime`\n\n* `Recurring`\n\n* `Usage`\n\n**Note:** This field is available when the <a\nhref=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\"\ntarget=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contractAssetAccountingCode",
                          "label": "Contract Asset Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractAssetAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "contractLiabilityAccountingCode",
                          "label": "Contract Liability Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractLiabilityAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "contractRecognizedRevenueAccountingCode",
                          "label": "Contract Recognized Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractRecognizedRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "description": "Container for custom fields of a Rate Plan Charge object.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "deferredRevenueAccountingCode",
                          "label": "Deferred Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The deferredRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a> features are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "description",
                          "label": "Description",
                          "type": "string",
                          "required": false,
                          "description": "Description of the charge.\n",
                          "maxLength": 500,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "drawdownRate",
                          "label": "Drawdown Rate",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe [conversion rate](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge#UOM_Conversion) between Usage UOM and Drawdown UOM for a [drawdown charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge). Must be a positive number (>0).\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDate",
                          "label": "End Date",
                          "type": "object",
                          "required": false,
                          "description": "Specifies when a charge becomes inactive.\n",
                          "fields": [
                            {
                              "name": "endDateCondition",
                              "label": "End Date Condition",
                              "type": "string",
                              "required": false,
                              "description": "Condition for the charge to become inactive.\n\n- If the value of this field is `Fixed_Period`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.\n- If the value of this field is `Specific_End_Date`, use the `specificEndDate` field to specify the date when the charge becomes inactive.\n",
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
                              "description": "End date policy of the discount charge to become active when the **Apply to billing period partially** checkbox is selected from the product catalog UI or the `applyToBillingPeriodPartially` field is set as true from the \"CRUD: Create a product rate plan charge\" operation. \n\n- If the value of this field is `FixedPeriod`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.\n- If the value of this field is `SpecificEndDate`, use the `specificEndDate` field to specify the date when the charge becomes inactive.\n\n**Notes**: \n- You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n- You can use either `endDateCondition` or `endDatePolicy` to define when a discount charge ends, but not both at the same time.\n",
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
                              "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `endDateCondition` field is `Specific_End_Date`.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriods",
                              "label": "Up To Periods",
                              "type": "number",
                              "required": false,
                              "description": "Duration of the charge in billing periods, days, weeks, months, or years, depending on the value of the `upToPeriodsType` field. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriodsType",
                              "label": "Up To Periods Type",
                              "type": "string",
                              "required": false,
                              "description": "Unit of time that the charge duration is measured in. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.\n",
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
                          "description": "The estimated start date of the pending charge in an active subscription.\n\nIf you specify `SpecificDate` in the `startDate` > `triggerEvent` field and want to create a completed order and an active subscription, you must specify either the `estimatedStartDate` or `startDate` > `specificTriggerDate` field:\n\n- `estimatedStartDate`: The charge will be in pending status.\n\n- `specificTriggerDate`: The charge will be in active status.\n\nThe value of this field must be a date within the subscription term. The system will then automatically calculate the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge.\n\n**Note:** This field is available only when the Pending Subscription Processing feature is turned on.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "excludeItemBillingFromRevenueAccounting",
                          "label": "Exclude Item Billing From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled. \n",
                          "defaultValue": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "excludeItemBookingFromRevenueAccounting",
                          "label": "Exclude Item Booking From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag to exclude rate plan charges from revenue accounting.\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled. \n",
                          "defaultValue": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "isAllocationEligible",
                          "label": "Is Allocation Eligible",
                          "type": "boolean",
                          "required": false,
                          "description": "This field is used to identify if the charge segment is allocation\neligible in revenue recognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "isRollover",
                          "label": "Is Rollover",
                          "type": "boolean",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe value is either \"True\" or \"False\". It determines whether the rollover fields are needed.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "isUnbilled",
                          "label": "Is Unbilled",
                          "type": "boolean",
                          "required": false,
                          "description": "This field is used to dictate how to perform the accounting during revenue\nrecognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "negotiatedPriceTable",
                          "label": "Negotiated Price Table",
                          "type": "array",
                          "required": false,
                          "description": "Array of negotiated price table information. The rate card entries provided in the array will override\nthe existing rate card entries in the standard price table to form a negotiated price table that will be   \nused during pricing evaluation.\n\n**Note:** To enable the Negotiated Price Table feature, submit a request to <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.                 \n",
                          "itemType": "object",
                          "itemFields": [
                            {
                              "name": "items",
                              "label": "Items",
                              "type": "object",
                              "required": false,
                              "description": "The rate card entry object.\n\n\n  **Note:** For more information, refer to the rate card definition in the product catalog.",
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
                          "description": "The name of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "pobPolicy",
                          "label": "Pob Policy",
                          "type": "string",
                          "required": false,
                          "description": "The pobPolicy of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prepaidQuantity",
                          "label": "Prepaid Quantity",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number (>0).\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricing",
                          "label": "Pricing",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about the charge.\n",
                          "fields": [
                            {
                              "name": "chargeModelData",
                              "label": "Charge Model Data",
                              "type": "object",
                              "required": false,
                              "description": "Container for charge model configuration data.\n\n**Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The High Water Mark and Pre-Rated Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
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
                                      "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`.\n\nThis field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "customFieldTotalAmount",
                                      "label": "Custom Field Total Amount",
                                      "type": "string",
                                      "required": false,
                                      "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. \n\nThis field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "formula",
                                      "label": "Formula",
                                      "type": "string",
                                      "required": false,
                                      "description": "The pricing formula to calculate actual rating amount.\n\nThis field is only available for charges that use the Multi-Attribute Pricing charge model.\n",
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
                                  "description": "Number of units purchased. This field is used if the Multi-Attribute Pricing formula uses the `quantity()` function.\n\nThis field is only available for one-time and recurring charges that use the Multi-Attribute Pricing charge model.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.\n\n**Note**: When you override the tiers of a usage-based charge using High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                              "description": "Pricing information about a discount charge.\n",
                              "fields": [
                                {
                                  "name": "applyDiscountTo",
                                  "label": "Apply Discount To",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies which type of charge the discount charge applies to.\n",
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
                                  "description": "Allow the discount duration to be aligned with the billing period partially.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                                  "section": "Invoice & Document Settings"
                                },
                                {
                                  "name": "discountAmount",
                                  "label": "Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "Only applicable if the discount charge is a fixed-amount discount.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountApplyDetails",
                                  "label": "Discount Apply Details",
                                  "type": "array",
                                  "required": false,
                                  "description": "Charge list of discount be applied to.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "productRatePlanChargeId",
                                      "label": "Product Rate Plan Charge Id",
                                      "type": "string",
                                      "required": true,
                                      "description": "Product Rate Plan Charge Id of the discount apply to.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "productRatePlanId",
                                      "label": "Product Rate Plan Id",
                                      "type": "string",
                                      "required": true,
                                      "description": "Product Rate Plan Id of the discount apply to.\n",
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
                                  "description": "The discount class defines the sequence in which discount product rate plan charges are applied.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountLevel",
                                  "label": "Discount Level",
                                  "type": "string",
                                  "required": false,
                                  "description": "Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.\n",
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
                                  "description": "Only applicable if the discount charge is a percentage discount.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountAmount",
                                  "label": "Original Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "The manufacturer's suggested retail discount price for standalone charge.\n\nOnly applicable if the standalone discount charge is a fixed-amount discount.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountPercentage",
                                  "label": "Original Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "The manufacturer's suggested retail discount percentage for standalone charge.\n\nOnly applicable if the standalone discount charge is a percentage discount.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n",
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
                              "description": "Pricing information about a one-time charge that uses the \"flat fee\" charge model. In this charge model, the charge has a fixed price.\n",
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price of the charge.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
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
                              "description": "Pricing information about a one-time charge that uses the \"per unit\" charge model. In this charge model, the charge has a fixed price per unit purchased.\n",
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Per-unit price of the charge.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                              "description": "Pricing information about a one-time charge that uses the \"tiered pricing\" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.\n",
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                              "description": "Pricing information about a one-time charge that uses the \"volume pricing\" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.\n",
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of variable pricing tiers in the charge.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
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
                                      "description": "Specifies the frequency for delivery schedule\n",
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
                                      "description": "Indicates whether delivery on friday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "monday",
                                      "label": "Monday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on monday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "saturday",
                                      "label": "Saturday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on saturday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "sunday",
                                      "label": "Sunday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on sunday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "thursday",
                                      "label": "Thursday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on thursday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tuesday",
                                      "label": "Tuesday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on tuesday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "wednesday",
                                      "label": "Wednesday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on wednesday.\n",
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
                                  "description": "Price of the charge in each recurring period.\n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Price of the charge in each recurring period.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.\n",
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
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Per-unit price of the charge in each recurring period.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.\n",
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
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.\n",
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
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.\n",
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
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of variable pricing tiers in the charge.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                          "description": "Container for pricing attribute and value that provide additional context for dynamic pricing. The pricing attribute values are used to get the charge’s list price from the product catalog. For the pricing attribute mapped to a Zuora object field, Zuora will retrieve the value automatically, you don’t need to pass its value explicitly. If you pass a value that doesn’t match the actual value of the Zuora object, an error will be returned.\nNote that for any pricing attribute mapped to the field of Zuora object Usage, because its value is only determined when the usage record arrives, you can’t provide a value via Orders API payload and Zuora will not retrieve its value automatically.   \n\n\n**Note:** To enable Dynamic Pricing, submit a request to <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productCategory",
                          "label": "Product Category",
                          "type": "string",
                          "required": false,
                          "description": "The productCategory of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productClass",
                          "label": "Product Class",
                          "type": "string",
                          "required": false,
                          "description": "The productClass of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productFamily",
                          "label": "Product Family",
                          "type": "string",
                          "required": false,
                          "description": "The productFamily of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productLine",
                          "label": "Product Line",
                          "type": "string",
                          "required": false,
                          "description": "The productLine of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeId",
                          "label": "Product Rate Plan Charge Id",
                          "type": "string",
                          "required": true,
                          "description": "Internal identifier of the product rate plan charge that the charge is based on.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeNumber",
                          "label": "Product Rate Plan Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "Number of a product rate-plan charge for this subscription.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "prorationOption",
                          "label": "Proration Option",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Unbilled_Usage/Usage_charge_proration\" target=\"_blank\">Usage charge proration</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nYou can use this field to specify the charge-level proration option for a usage charge or recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.\n  * `NoProration`: charge-level proration option that you can set for a usage charge. This option means to not use any proration, which is the default current system behavior for a usage charge.\n  * `TimeBasedProration`: charge-level proration option that you can set for a usage charge. This option means to prorate the usage charge amount using the actual number of days if the billing period is a partial period.\n  * `DefaultFromTenantSetting`: charge-level proration option that you can set for a recurring charge. This option means to follow the customer billing rule proration setting.\n  * `ChargeFullPeriod`: charge-level proration option that you can set for a recurring charge. This options means to charge the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period.\n  * `CustomizeProrationOptionOverrides`: charge-level proration option that you can set for a recurring charge. This option means to use the customized charge proration settings that is specified by the `ratingPropertiesOverride` field.\n",
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
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nThis field is used only when the value of the `prorationOption` field is set to `CustomizeProrationOptionOverrides`. \n\nUse this field to specify more customized proration options for a recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.\n",
                          "fields": [
                            {
                              "name": "isProratePartialMonth",
                              "label": "Is Prorate Partial Month",
                              "type": "boolean",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify whether to prorate the recurring charge for a partial month. The tenant-level proration option will be overridden.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "prorationUnit",
                              "label": "Proration Unit",
                              "type": "string",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify the unit of proration for a recurring charge. The tenant-level proration option will be overridden.\n",
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
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify the number of days counted for a month when prorating a recurring charge. The tenant-level proration option will be overridden. See more details for each of the following enum values in <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Common_subscription_information/F_Proration#When_prorating_a_month.2C_assume_30_days_in_a_month_or_use_actual_days.3F\" target=\"_blank\">Proration</a>.\n",
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
                          "description": "The recognizedRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a> features are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "revRecCode",
                          "label": "Rev Rec Code",
                          "type": "string",
                          "required": false,
                          "description": "Revenue Recognition Code\n",
                          "maxLength": 70,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "revRecTriggerCondition",
                          "label": "Rev Rec Trigger Condition",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the revenue recognition trigger condition.\n\n  * `Contract Effective Date` \n  * `Service Activation Date`\n  * `Customer Acceptance Date`\n",
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
                          "description": "Specifies the revenue recognition rule, such as `Recognize upon invoicing` or `Recognize daily over time`.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "revenueRecognitionTiming",
                          "label": "Revenue Recognition Timing",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the type of revenue recognition timing.\n\nPredefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled. \n",
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
                          "description": "Specifies the type of revenue amortization method.\n\nPredefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled. \n",
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
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThis field defines the priority of rollover, which is either first or last.\n",
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
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe period length of the rollover fund.\n",
                          "defaultValue": null,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "rolloverPeriods",
                          "label": "Rollover Periods",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThis field defines the number of rollover periods, it is restricted to 3.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "startDate",
                          "label": "Start Date",
                          "type": "object",
                          "required": false,
                          "description": "Specifies when a charge becomes active.\n",
                          "fields": [
                            {
                              "name": "periodsAfterChargeStart",
                              "label": "Periods After Charge Start",
                              "type": "number",
                              "required": false,
                              "description": "Duration of the discount charge in days, weeks, months, or years, depending on the value of the `startPeriodsType` field. Only applicable if the value of the `startDatePolicy` field is `FixedPeriodAfterApplyToChargeStartDate`.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "specificTriggerDate",
                              "label": "Specific Trigger Date",
                              "type": "date",
                              "required": false,
                              "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`. \n\nWhile this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created.\n\nWhile this field is applicable, if this field is not set, the following order actions create a `Pending` order but do not impact the subscription status. **Note**: This feature is in **Limited Availability**. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).\n * AddProduct\n * UpdateProduct\n * RemoveProduct\n * RenewSubscription\n * TermsAndConditions\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "startDatePolicy",
                              "label": "Start Date Policy",
                              "type": "string",
                              "required": false,
                              "description": "Start date policy of the discount charge to become active when the **Apply to billing period partially** checkbox is selected from the product catalog UI or the `applyToBillingPeriodPartially` field is set as true from the \"CRUD: Create a product rate plan charge\" operation.\n\n- If the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.\n- If the value of this field is `FixedPeriodAfterApplyToChargeStartDate`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.\n\n**Notes**: \n  - You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field. \n  - You can use either `triggerEvent` or `startDatePolicy` to define when a discount charge starts, but not both at the same time.\n",
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
                              "description": "Unit of time that the discount charge duration is measured in. Only applicable if the value of the `startDatePolicy` field is `FixedPeriodAfterApplyToChargeStartDate`.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
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
                              "description": "Condition for the charge to become active.\n\nIf the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.\n",
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
                          "description": "The taxCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Tax Settings"
                        },
                        {
                          "name": "taxMode",
                          "label": "Tax Mode",
                          "type": "string",
                          "required": false,
                          "description": "The taxMode of a standalone charge. \n\nValues:\n* `TaxExclusive`\n* `TaxInclusive`\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Tax Settings"
                        },
                        {
                          "name": "unBilledReceivablesAccountingCode",
                          "label": "Un Billed Receivables Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The unBilledReceivablesAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "uniqueToken",
                          "label": "Unique Token",
                          "type": "string",
                          "required": false,
                          "description": "Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora.\n\nFor instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the charge. Then when you update the product, you can use the same unique identifier to specify which charge to modify.\n",
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upsellOriginChargeNumber",
                          "label": "Upsell Origin Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "The identifier of the original upselling charge associated with the current charge.\n\nFor a termed subscription, you can now use the \"Create an order\" API operation to perform an Add Product order action to make a product quantity upsell for per unit recurring charges. The benefit is that the charge added by this approach will be automatically combined with the original existing charge for which you want to upsell when the subscription is renewed. The approach is as follows:\n* Use an Add Product order action to add a charge that is of the same charge type, charge model, and charge end date as the existing per unit recurring charge for which you want to make a quantity upsell.\n\n* In the preceding charge to add, use the `upsellOriginChargeNumber` field to specify the existing rate plan charge for which you want to make the quantity upsell.\n\nNote that a termed subscription with such upsell charges can not be changed to an evergreen subscription.   \n\n**Note**: The Quantity Upsell feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global\n  Support](https://support.zuora.com).  \n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "validityPeriodType",
                          "label": "Validity Period Type",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have enabled either of the following:\n* <a href=\"https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a>\n* <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a>\n* Both <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a>\n\nYou can use this field in the following scenarios: \n* When you create a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge), use this field to define the period in which the prepayment units are valid to use.\n\n* When you override the setting of <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment#Commitment_true-up_charge_specific_settings\" target=\"_blank\">commitment true-up charge</a> from the product catalog, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.\n\n* When you use a standalone order to create a commitment true-up charge, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.\n",
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
                      "description": "Specifies whether all features in the rate plan will be cleared.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "externalCatalogPlanId",
                      "label": "External Catalog Plan Id",
                      "type": "string",
                      "required": false,
                      "description": "An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan.\n\n**Note:** If both `externalCatalogPlanId` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "externallyManagedPlanId",
                      "label": "Externally Managed Plan Id",
                      "type": "string",
                      "required": false,
                      "description": "Indicates the unique identifier for the rate plan purchased on a third-party store. This field is used to represent a subscription rate plan created through third-party stores.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "subscriptionRatePlanNumber",
                      "label": "Subscription Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a subscription rate plan for this subscription.\n",
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "isFromExternalCatalog",
                      "label": "Is From External Catalog",
                      "type": "boolean",
                      "required": false,
                      "description": "Indicates whether the rate plan is created from the Zuora product catalog or from an external product catalog.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanId",
                      "label": "Product Rate Plan Id",
                      "type": "string",
                      "required": false,
                      "description": "Internal identifier of the product rate plan that the rate plan is based on.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate plan for this subscription.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "ratePlanName",
                      "label": "Rate Plan Name",
                      "type": "string",
                      "required": false,
                      "description": "Name of the standalone rate plan.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "subscriptionProductFeatures",
                      "label": "Subscription Product Features",
                      "type": "array",
                      "required": false,
                      "description": "List of features associated with the rate plan.\nThe system compares the `subscriptionProductFeatures` and `featureId` fields in the request with the counterpart fields in a rate plan. The comparison results are as follows:\n* If there is no `subscriptionProductFeatures` field or the field is empty, features in the rate plan remain unchanged. But if the `clearingExistingFeatures` field is additionally set to true, all features in the rate plan are cleared.\n* If the `subscriptionProductFeatures` field contains the `featureId` nested fields, as well as the optional `description` and `customFields` nested fields, the features indicated by the featureId nested fields in the request overwrite all features in the rate plan.\n",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "description": "A container for custom fields of the feature.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "description",
                          "label": "Description",
                          "type": "string",
                          "required": false,
                          "description": "A description of the feature.",
                          "maxLength": 500,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "featureId",
                          "label": "Feature Id",
                          "type": "string",
                          "required": true,
                          "description": "Internal identifier of the feature in the product catalog.\n",
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
                      "description": "Unique identifier for the rate plan. This identifier enables you to refer to the rate plan before the rate plan has an internal identifier in Zuora.\n\nFor instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the rate plan. Then when you update the product, you can use the same unique identifier to specify which rate plan to modify.\n",
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
                  "description": "ID of the product rate plan that the removed rate plan is based on.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate plan for this subscription.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "ID of the rate plan to remove. This can be the latest version or any history version of ID. Note that the removal of a rate plan through the Change Plan order action supports the function of <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/Order_actions_tutorials/E2_Remove_rate_plan_on_subscription_before_future-dated_removals\" target=\"_blank\">removal before future-dated removals</a>, as in a Remove Product order action.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "resetBcd",
                  "label": "Reset Bcd",
                  "type": "boolean",
                  "required": false,
                  "description": "If resetBcd is true then reset the Account BCD to the effective date; if it is false keep the original BCD.\n\n**Note**: If the rate plan change is an upgrade (the `subType` field is `Upgrade`), then the effective policy is `EffectiveImmediately` by default. In this case, if you do not specify the `resetBcd` field, the system sets this field to `true` while BCD is the effective date.\n",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "subType",
                  "label": "Sub Type",
                  "type": "string",
                  "required": false,
                  "description": "Use this field to choose the sub type for your change plan order action.\n\nHowever, if you do not set this field, the field will be automatically generated by the system according to the following rules:\n\nWhen the old and new rate plans are within the same Grading catalog group:\n* If the grade of new plan is greater than that of the old plan, this is an \"Upgrade\".\n* If the grade of new plan is less than that of the old plan, this is a \"Downgrade\".\n* If the grade of new plan equals that of the old plan, this is a \"Crossgrade\".\n\nWhen the old and new rate plans are not in the same Grading catalog group, or either has no group, this is \"PlanChanged\".\n",
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
                  "description": "Number of a rate plan for this subscription.\n",
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
              "description": "The change reason set for an order action when an order is created.\n",
              "section": "Additional Fields"
            },
            {
              "name": "createSubscription",
              "label": "Create Subscription",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `CreateSubscription`.\n",
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the bill-to contact associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "currency",
                  "label": "Currency",
                  "type": "string",
                  "required": false,
                  "description": "The code of currency that is used for this subscription. If the currency is not selected, the default currency from the account will be used.\n\nAll subscriptions in the same order must use the same currency. The currency for a subscription cannot be changed.\n\n**Note**: \n  This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Multiple_Currencies\" target=\"_blank\">Multiple Currencies</a> feature enabled.\n",
                  "maxLength": 3,
                  "section": "Additional Fields"
                },
                {
                  "name": "invoiceGroupNumber",
                  "label": "Invoice Group Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the invoice group associated with the subscription.\n\nAfter enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping).\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "maxLength": 255,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceSeparately",
                  "label": "Invoice Separately",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether the subscription appears on a separate invoice when Zuora generates invoices.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "invoiceTemplateId",
                  "label": "Invoice Template Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the invoice template associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Template from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "newSubscriptionOwnerAccount",
                  "label": "New Subscription Owner Account",
                  "type": "object",
                  "required": false,
                  "description": "Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.\n\n**Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).\n\nIf you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.\n",
                  "fields": [
                    {
                      "name": "accountNumber",
                      "label": "Account Number",
                      "type": "string",
                      "required": false,
                      "description": "Account number. For example, A00000001.\n",
                      "maxLength": 70,
                      "section": "Account Settings"
                    },
                    {
                      "name": "additionalEmailAddresses",
                      "label": "Additional Email Addresses",
                      "type": "textarea",
                      "required": false,
                      "description": "List of additional email addresses to receive emailed invoices. Values should be a comma-separated list of email addresses.\n",
                      "maxLength": 1200,
                      "section": "Communication Settings"
                    },
                    {
                      "name": "allowInvoiceEdit",
                      "label": "Allow Invoice Edit",
                      "type": "boolean",
                      "required": false,
                      "description": "Indicates if associated invoices can be edited.\nValues are: \n\n* `true`\n* `false` (default)\n",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "autoPay",
                      "label": "Auto Pay",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether future payments are automatically billed when they are due.\n",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "batch",
                      "label": "Batch",
                      "type": "string",
                      "required": false,
                      "description": "Name of the billing batch that the account belongs to. For example, Batch1.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "billCycleDay",
                      "label": "Bill Cycle Day",
                      "type": "number",
                      "required": true,
                      "description": "Day of the month that the account prefers billing periods to begin on. If set to 0, the bill cycle day will be set as \"AutoSet\".\n",
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
                          "description": "First line of the contact's address. This is often a street address or a business name.\n",
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "address2",
                          "label": "Address2",
                          "type": "string",
                          "required": false,
                          "description": "Second line of the contact's address.\n",
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
                          "description": "City of the contact's address.\n",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contactDescription",
                          "label": "Contact Description",
                          "type": "string",
                          "required": false,
                          "description": "A description for the contact.\n",
                          "maxLength": 100,
                          "section": "Contact Information"
                        },
                        {
                          "name": "country",
                          "label": "Country",
                          "type": "string",
                          "required": false,
                          "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the bill-to contact to calculate tax.\n",
                          "maxLength": 64,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "county",
                          "label": "County",
                          "type": "string",
                          "required": false,
                          "description": "County of the contact's address.\n",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "fax",
                          "label": "Fax",
                          "type": "string",
                          "required": false,
                          "description": "Fax number of the contact.\n",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "firstName",
                          "label": "First Name",
                          "type": "string",
                          "required": true,
                          "description": "First name of the contact.\n",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "homePhone",
                          "label": "Home Phone",
                          "type": "string",
                          "required": false,
                          "description": "Home phone number of the contact.\n",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "lastName",
                          "label": "Last Name",
                          "type": "string",
                          "required": true,
                          "description": "Last name of the contact.\n",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "mobilePhone",
                          "label": "Mobile Phone",
                          "type": "string",
                          "required": false,
                          "description": "Mobile phone number of the contact.\n",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "nickname",
                          "label": "Nickname",
                          "type": "string",
                          "required": false,
                          "description": "Nickname of the contact.\n",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "otherPhone",
                          "label": "Other Phone",
                          "type": "string",
                          "required": false,
                          "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.\n",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "otherPhoneType",
                          "label": "Other Phone Type",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the type of phone number in the `otherPhone` field.\n",
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
                          "description": "Personal email address of the contact.\n",
                          "maxLength": 80,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "postalCode",
                          "label": "Postal Code",
                          "type": "string",
                          "required": false,
                          "description": "ZIP code or other postal code of the contact's address.\n",
                          "maxLength": 20,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "description": "State or province of the contact's address.\n",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "taxRegion",
                          "label": "Tax Region",
                          "type": "string",
                          "required": false,
                          "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.\n",
                          "maxLength": 100,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "workEmail",
                          "label": "Work Email",
                          "type": "email",
                          "required": false,
                          "description": "Business email address of the contact.\n",
                          "maxLength": 80,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "workPhone",
                          "label": "Work Phone",
                          "type": "string",
                          "required": false,
                          "description": "Business phone number of the contact.\n",
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
                      "description": "Internal identifier of the communication profile that Zuora uses when sending notifications to the account's contacts.\n",
                      "section": "Communication Settings"
                    },
                    {
                      "name": "creditCard",
                      "label": "Credit Card",
                      "type": "object",
                      "required": false,
                      "description": "Default payment method associated with an account. Only credit card payment methods are supported.\n",
                      "fields": [
                        {
                          "name": "cardHolderInfo",
                          "label": "Card Holder Info",
                          "type": "object",
                          "required": false,
                          "description": "Information about the cardholder of a credit card payment method associated with an account. If you do not provide information about the cardholder, Zuora uses the account's bill-to contact.\n",
                          "fields": [
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "description": "First line of the cardholder's address.\n",
                              "maxLength": 255,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "description": "Second line of the cardholder's address.\n",
                              "maxLength": 255,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "cardHolderName",
                              "label": "Card Holder Name",
                              "type": "string",
                              "required": false,
                              "description": "Full name of the cardholder as it appears on the card. For example, \"John J Smith\".\n",
                              "maxLength": 50,
                              "section": "Account Settings"
                            },
                            {
                              "name": "city",
                              "label": "City",
                              "type": "string",
                              "required": false,
                              "description": "City of the cardholder's address.\n\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
                              "maxLength": 40,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "country",
                              "label": "Country",
                              "type": "string",
                              "required": false,
                              "description": "Country of the cardholder's address. The value of this field must be a valid country name or abbreviation.\n\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
                              "maxLength": 64,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "description": "Email address of the cardholder.\n",
                              "maxLength": 80,
                              "section": "Communication Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "description": "Phone number of the cardholder.\n",
                              "maxLength": 40,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "description": "State or province of the cardholder's address.\n",
                              "maxLength": 50,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "zipCode",
                              "label": "Zip Code",
                              "type": "string",
                              "required": false,
                              "description": "ZIP code or other postal code of the cardholder's address.\n",
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
                          "description": "Card number. Once set, you cannot update or query the value of this field. The value of this field is only available in masked format. For example, XXXX-XXXX-XXXX-1234 (hyphens must not be used when you set the credit card number).\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardType",
                          "label": "Card Type",
                          "type": "string",
                          "required": false,
                          "description": "Type of card.\n",
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
                          "description": "Expiration date of the card.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationYear",
                          "label": "Expiration Year",
                          "type": "number",
                          "required": false,
                          "description": "Expiration year of the card.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "securityCode",
                          "label": "Security Code",
                          "type": "string",
                          "required": false,
                          "description": "CVV or CVV2 security code of the card. To ensure PCI compliance, Zuora does not store the value of this field.\n",
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
                      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n\nThe unique ID of the credit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08a6246fdf101626b1b3fe0144b.\n",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "crmId",
                      "label": "Crm Id",
                      "type": "string",
                      "required": false,
                      "description": "External identifier of the account in a CRM system.\n",
                      "maxLength": 100,
                      "section": "Account Settings"
                    },
                    {
                      "name": "currency",
                      "label": "Currency",
                      "type": "string",
                      "required": true,
                      "description": "ISO 3-letter currency code (uppercase). For example, USD.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of an Account object.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customerServiceRepName",
                      "label": "Customer Service Rep Name",
                      "type": "string",
                      "required": false,
                      "description": "Name of the account's customer service representative, if applicable.\n",
                      "maxLength": 50,
                      "section": "Account Settings"
                    },
                    {
                      "name": "debitMemoTemplateId",
                      "label": "Debit Memo Template Id",
                      "type": "string",
                      "required": false,
                      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n\nThe unique ID of the debit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08d62470a8501626b19d24f19e2.\n",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "hpmCreditCardPaymentMethodId",
                      "label": "Hpm Credit Card Payment Method Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the payment method associated with this account. The payment method specified for this field will be set as the default payment method of the account.\n\nIf the `autoPay` field is set to `true`, you must provide the credit card payment method ID for either this field or the `creditCard` field,\nbut not both.\n\nFor a specified credit card payment method, it is recommended that [the support for stored credential transactions](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Stored_credential_transactions) for this payment method is already enabled.\n",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "invoiceDeliveryPrefsEmail",
                      "label": "Invoice Delivery Prefs Email",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether to turn on the invoice delivery method 'Email' for the new account. \nValues are: \n\n* `true` (default). Turn on the invoice delivery method 'Email' for the new account.\n* `false`. Turn off the invoice delivery method 'Email' for the new account.         \n",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "invoiceDeliveryPrefsPrint",
                      "label": "Invoice Delivery Prefs Print",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether to turn on the invoice delivery method 'Print' for the new account.\nValues are: \n\n* `true`. Turn on the invoice delivery method 'Print' for the new account.\n* `false` (default). Turn off the invoice delivery method 'Print' for the new account.\n",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "invoiceTemplateId",
                      "label": "Invoice Template Id",
                      "type": "string",
                      "required": false,
                      "description": "Internal identifier of the invoice template that Zuora uses when generating invoices for the account.\n",
                      "section": "Invoice & Document Settings"
                    },
                    {
                      "name": "name",
                      "label": "Name",
                      "type": "string",
                      "required": true,
                      "description": "Account name.\n",
                      "maxLength": 255,
                      "section": "Account Settings"
                    },
                    {
                      "name": "notes",
                      "label": "Notes",
                      "type": "textarea",
                      "required": false,
                      "description": "Notes about the account. These notes are only visible to Zuora users.\n",
                      "maxLength": 65535,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "parentId",
                      "label": "Parent Id",
                      "type": "string",
                      "required": false,
                      "description": "Identifier of the parent customer account for this Account object. Use this field if you have <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Customer_Accounts/A_Customer_Account_Introduction#Customer_Hierarchy\" target=\"_blank\">Customer Hierarchy</a> enabled.",
                      "section": "Account Settings"
                    },
                    {
                      "name": "paymentGateway",
                      "label": "Payment Gateway",
                      "type": "string",
                      "required": false,
                      "description": "The payment gateway that Zuora uses when processing electronic payments and refunds for the account. If you do not specify this field or if the value of this field is null, Zuora uses your default payment gateway.\n",
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
                          "description": "Type of the payment method. The following types of the payment methods are supported:\n\n  * `CreditCard`\n\n  * `CreditCardReferenceTransaction`\n\n  * `ACH`\n\n  * `SEPA`\n\n  * `Betalingsservice`\n\n  * `Autogiro`\n\n  * `Bacs`\n\n  * `Becs`\n\n  * `Becsnz`\n\n  * `PAD`\n\n  * `PayPalCP`\n\n  * `PayPalEC`\n\n  * `PayPalNativeEC`\n\n  * `PayPalAdaptive`\n\n  * `AdyenApplePay`\n\n  * `AdyenGooglePay`\n\n  * `GooglePay`\n\n  * `AmazonPay`\n\n\nTo view the schema and example applicable to a specific payment method type, select the corresponding option from the following list.\n",
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
                          "description": "Container for cardholder information. The nested `cardHolderName` field is required.\n",
                          "fields": [
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "description": "First address line, 255 characters or less.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "description": "Second address line, 255 characters or less.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "cardHolderName",
                              "label": "Card Holder Name",
                              "type": "string",
                              "required": true,
                              "description": "The card holder's full name as it appears on the card, e.g., \"John J Smith\", 50 characters or less.\n",
                              "section": "Account Settings"
                            },
                            {
                              "name": "city",
                              "label": "City",
                              "type": "string",
                              "required": false,
                              "description": "City, 40 characters or less.\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "country",
                              "label": "Country",
                              "type": "string",
                              "required": false,
                              "description": "Country, must be a valid country name or abbreviation.\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "description": "Card holder's email address, 80 characters or less.\n",
                              "section": "Communication Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "description": "Phone number, 40 characters or less.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "description": "State; must be a valid subregion (state or province) name or code. For more information, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\" target=\"_blank\">View subregions of a specific country or region</a>.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "zipCode",
                              "label": "Zip Code",
                              "type": "string",
                              "required": false,
                              "description": "Zip code, 20 characters or less.\n",
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
                          "description": "The masked card number.\n\nCurrently, this field is only supported on certain integrations. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardNumber",
                          "label": "Card Number",
                          "type": "string",
                          "required": false,
                          "description": "Credit card number.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "cardType",
                          "label": "Card Type",
                          "type": "string",
                          "required": false,
                          "description": "The type of the credit card.\nPossible values include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see <a href=\"https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways\" target=\"_blank\">Supported Payment Gateways</a>.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "checkDuplicated",
                          "label": "Check Duplicated",
                          "type": "boolean",
                          "required": false,
                          "description": "Indicates whether the duplication check is performed when you create a new credit card payment method. The default value is `false`.\n\nWith this field set to `true`, Zuora will check all active payment methods associated with the same billing account to ensure that no duplicate credit card payment methods are created. An error is returned if a duplicate payment method is found.\n        \nThe following fields are used for the duplication check:\n  - `cardHolderName`\n  - `expirationMonth`\n  - `expirationYear`\n  - `creditCardMaskNumber`. It is the masked credit card number generated by Zuora. For example, `************1234`.\n\n**This field is being deprecated.**  To achieve the same purpose, use the `processingOptions` > `checkDuplicated` field of the payment method object.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationMonth",
                          "label": "Expiration Month",
                          "type": "number",
                          "required": false,
                          "description": "One or two digit expiration month (1-12) of the credit card.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "expirationYear",
                          "label": "Expiration Year",
                          "type": "number",
                          "required": false,
                          "description": "Four-digit expiration year of the credit card.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "identityNumber",
                          "label": "Identity Number",
                          "type": "string",
                          "required": false,
                          "description": "The identity number used for Bank Transfer.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "mitConsentAgreementRef",
                          "label": "Mit Consent Agreement Ref",
                          "type": "string",
                          "required": false,
                          "description": "Specifies your reference for the stored credential consent agreement that you have established with the customer. Only applicable if you set the `mitProfileAction` field.\n",
                          "maxLength": 128,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mitConsentAgreementSrc",
                          "label": "Mit Consent Agreement Src",
                          "type": "string",
                          "required": false,
                          "description": "Required if you set the `mitProfileAction` field. Specifies how the consent agreement has been established with the customer. The allowed value is `External`. If you do not specify the `mitProfileAction` field, Zuora will automatically create a stored credential profile for the payment method, with the default value `External` set to this field.\n",
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
                          "description": "Specifies the ID of a network transaction. Only applicable if you set the `mitProfileAction` field to `Persist`.\n",
                          "maxLength": 128,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mitProfileAction",
                          "label": "Mit Profile Action",
                          "type": "string",
                          "required": false,
                          "description": "Specifies how Zuora creates and activates the stored credential profile.\n\n- `Activate` - Use this value if you are creating the stored credential profile after receiving the customer's consent.\n\n  Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile.\n  \n  If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.\n\n\n- `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.\n\nIf you do not specify this field, Zuora will automatically create a stored credential profile for the payment method, with the default value `Activate` set to this field.\n",
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
                          "description": "The date on which the profile is agreed. The date format is `yyyy-mm-dd`.\n",
                          "section": "Communication Settings"
                        },
                        {
                          "name": "mitProfileType",
                          "label": "Mit Profile Type",
                          "type": "string",
                          "required": false,
                          "description": "Required if you set the `mitProfileAction` field. Indicates the type of the stored credential profile to process recurring or unsecheduled transactions. If you do not specify the `mitProfileAction` field, Zuora will automatically create a stored credential profile for the payment method, with the default value `Recurring` set to this field.\n",
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
                          "description": "For <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Supported_payment_gateways/Chase_Orbital_Payment_Gateway\" target=\"_blank\">Chase Paymentech Orbital Gateway</a> integrations, if the Safetech Fraud service is enabled, use this field to pass in the amount used for fraud screening for Credit Card validation transactions.\n\nTwo-decimal amount is supported.\n\nIf the `screeningAmount` field is not specified, the authorization amount is used for fraud screening.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "securityCode",
                          "label": "Security Code",
                          "type": "string",
                          "required": false,
                          "description": "CVV or CVV2 security code of the credit card.\n\nTo ensure PCI compliance, this value is not stored and cannot be queried.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "tokens",
                          "label": "Tokens",
                          "type": "object",
                          "required": false,
                          "description": "To create tokenized payment methods, pass in the existing token information through the fields in this container.\n\nCurrently, this field is only supported on certain integrations. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
                          "fields": [
                            {
                              "name": "gatewayType",
                              "label": "Gateway Type",
                              "type": "string",
                              "required": true,
                              "description": "The type of the payment gateway to generate the tokens. This field is\ncase-sensitive.\n",
                              "section": "Payment Settings"
                            },
                            {
                              "name": "secondTokenId",
                              "label": "Second Token Id",
                              "type": "string",
                              "required": false,
                              "description": "Pass in the second token of the payment method.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "thirdTokenId",
                              "label": "Third Token Id",
                              "type": "string",
                              "required": false,
                              "description": "Pass in the third token of the payment method.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tokenId",
                              "label": "Token Id",
                              "type": "string",
                              "required": true,
                              "description": "Pass in the first token of the payment method.\n",
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
                          "description": "Specify `true` to tokenize the payment method.\n\nCurrently, this field is only supported on certain integrations. \nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "mandateInfo",
                          "label": "Mandate Info",
                          "type": "object",
                          "required": false,
                          "description": "The container of the mandate information for the payment method.\n",
                          "fields": [
                            {
                              "name": "mandateId",
                              "label": "Mandate Id",
                              "type": "string",
                              "required": false,
                              "description": "The mandate ID.\n",
                              "maxLength": 36,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "mandateReason",
                              "label": "Mandate Reason",
                              "type": "string",
                              "required": false,
                              "description": "The reason of the mandate from the gateway side.\n",
                              "maxLength": 64,
                              "section": "Additional Fields"
                            },
                            {
                              "name": "mandateStatus",
                              "label": "Mandate Status",
                              "type": "string",
                              "required": false,
                              "description": "The status of the mandate from the gateway side.\n",
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
                          "description": "The container for payment method processing options.\n",
                          "fields": [
                            {
                              "name": "checkDuplicated",
                              "label": "Check Duplicated",
                              "type": "boolean",
                              "required": false,
                              "description": "Indicates whether to perform a duplication check when you create a payment method.\n\nThe default value is `false`.\n\nWith this field set to `true`, Zuora will check the active and closed payment methods associated with the same billing account to ensure that no duplicate payment methods are created. \n\nFor more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/D1_Duplication_check_on_payment_methods\" target=\"_blank\">Duplication check on payment methods</a>.\n",
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
                          "description": "The customer account ID such as `2x92c0f859b0480f0159d3a4a6ee5bb6` or the customer account number such as `A02855638`. \n\nTo create an orphan payment method that is not associated with any customer account, you can skip this field.  As soon as the account information is available, associate the payment method with an account through the [Update a payment method](https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentMethod/)  operation.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "authGateway",
                          "label": "Auth Gateway",
                          "type": "string",
                          "required": false,
                          "description": "Internal ID of the payment gateway that Zuora will use to authorize the payments that are made with the payment method.\n\nIf you do not set this field, Zuora will use one of the following payment gateways instead:\n\n* The default payment gateway of the customer account that owns the payment method, if the `accountKey` field is set.\n* The default payment gateway of your Zuora tenant, if the `accountKey` field is not set.\n\nIf <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Payment_Gateway_Routing\" target=\"_blank\">Payment Gateway Routing</a> is enabled: \n  - If this field is not specified, gateway routing rules will be invoked.\n  - If this field is specified, the specified gateway will be used to process the payment.\n\nIf Payment Gateway Routing is disabled:\n  - If this field is not specified, the default payment gateway will be used to process the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant. \n  - If this field is specified, the specified gateway will be used to process the payment.\n",
                          "section": "Payment Settings"
                        },
                        {
                          "name": "currencyCode",
                          "label": "Currency Code",
                          "type": "string",
                          "required": false,
                          "description": "The currency used for payment method authorization.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "gatewayOptions",
                          "label": "Gateway Options",
                          "type": "object",
                          "required": false,
                          "description": "The field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in [Zuora Knowledge Center](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways).\n\nZuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts.\n",
                          "fields": [
                            {
                              "name": "key",
                              "label": "Key",
                              "type": "string",
                              "required": false,
                              "description": "The name of a gateway-specific parameter.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "value",
                              "label": "Value",
                              "type": "string",
                              "required": false,
                              "description": "The value of the gateway-specific parameter.\n",
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
                          "description": "The IPv4 or IPv6 information of the user when the payment method is created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, Zuora directly passes it to gateways. \n\nIf the IP address length is beyond 45 characters, a validation error occurs.\n\nFor validating SEPA payment methods on Stripe v2, this field is required.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "makeDefault",
                          "label": "Make Default",
                          "type": "boolean",
                          "required": false,
                          "description": "Specifies whether the payment method will be the default payment method of the customer account that owns the payment method. Only applicable if the `accountKey` field is set.\n\nWhen you set this field to `true`, make sure the payment method is supported by the default payment gateway.\n",
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "skipValidation",
                          "label": "Skip Validation",
                          "type": "boolean",
                          "required": false,
                          "description": "Specify whether to skip the validation of the information through the payment gateway. For example, when migrating your payment methods, you can set this field to `true` to skip the validation. \n",
                          "defaultValue": false,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "creditCardMaskNumber",
                          "label": "Credit Card Mask Number",
                          "type": "string",
                          "required": false,
                          "description": "The masked credit card number, such as `*********1112`.\nThis field is specific for the CC Reference Transaction payment method. It is an optional field that you can use to distinguish different CC Reference Transaction payment methods.\nThough there are no special restrictions on the input string, it is highly recommended to specify a card number that is masked.\n",
                          "maxLength": 19,
                          "section": "Account Settings"
                        },
                        {
                          "name": "secondTokenId",
                          "label": "Second Token Id",
                          "type": "string",
                          "required": false,
                          "description": "A gateway unique identifier that replaces sensitive payment method data. \n\n`secondTokenId` is conditionally required only when `tokenId` is being used to represent a gateway customer profile. `secondTokenId` is used in the CC Reference Transaction payment method.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "tokenId",
                          "label": "Token Id",
                          "type": "string",
                          "required": false,
                          "description": "A gateway unique identifier that replaces sensitive payment method data or represents a gateway's unique customer profile.\n\nWhen `tokenId` is used to represent a customer profile, `secondTokenId` is conditionally required for representing the underlying tokenized payment method.\n\nThe values for the `tokenId` and `secondTokenId` fields differ for gateways. For more information, see the Knowledge Center article specific to each gateway that supports the CC Reference Transaction payment method.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "addressLine1",
                          "label": "Address Line1",
                          "type": "string",
                          "required": false,
                          "description": "First address line, 255 characters or less.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "addressLine2",
                          "label": "Address Line2",
                          "type": "string",
                          "required": false,
                          "description": "Second address line, 255 characters or less.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "bankABACode",
                          "label": "Bank A B A Code",
                          "type": "string",
                          "required": false,
                          "description": "The nine-digit routing number or ABA number used by banks. This field is\nonly required if the `type` field is set to `ACH`.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "bankAccountMaskNumber",
                          "label": "Bank Account Mask Number",
                          "type": "string",
                          "required": false,
                          "description": "The masked account number such as ****1234.\n\nCurrently, this field is only supported on certain integrations. \nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountName",
                          "label": "Bank Account Name",
                          "type": "string",
                          "required": false,
                          "description": "The name of the account holder, which can be either a person or a company.\n\n\nFor ACH payment methods on the BlueSnap integration, see [Overview of\nBlueSnap gateway\nintegration](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways/BlueSnap_Gateway/Overview_of_BlueSnap_gateway_integration#Payer_Name_Extraction)\nfor more information about how Zuora splits the string in this field into\ntwo parts and passes them to BlueSnap's `firstName` and `lastName` fields.\n",
                          "maxLength": 70,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountNumber",
                          "label": "Bank Account Number",
                          "type": "string",
                          "required": false,
                          "description": "The bank account number associated with the ACH payment.\n\nFor the creation of tokenized ACH payment methods, this field is optional. Currently, ACH tokenization is supported on selected payment gateway integrations.  \nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
                          "maxLength": 30,
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankAccountType",
                          "label": "Bank Account Type",
                          "type": "string",
                          "required": false,
                          "description": "The type of bank account associated with the ACH payment.\n\n\nWhen creating an ACH payment method on Adyen, this field is required by\nZuora but it is not required by Adyen. To create the ACH payment method\nsuccessfully, specify a real value for this field if you can. If it is not\npossible to get the real value for it, specify any of the allowed values\nas a dummy value, `Checking` preferably.\n",
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
                          "description": "The name of the bank where the ACH payment account is held.\n\n\nWhen creating an ACH payment method on Adyen, this field is required by\nZuora but it is not required by Adyen. To create the ACH payment method\nsuccessfully, specify a real value for this field if you can. If it is not\npossible to get the real value for it, specify a dummy value.\n",
                          "maxLength": 70,
                          "section": "Account Settings"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
                          "description": "City, 40 characters or less.\n\n\nIt is recommended to provide the city and country information when\ncreating a payment method. The information will be used to process\npayments. If the information is not provided during payment method\ncreation, the city and country data will be missing during payment\nprocessing.\n    \n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "country",
                          "label": "Country",
                          "type": "string",
                          "required": false,
                          "description": "Country, must be a valid country name or abbreviation.\n\n\nSee <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_countries_or_regions\"\ntarget=\"_blank\">View countries or regions</a>\nfor the list of supported country names and abbreviations.\n\n\nIt is recommended to provide the city and country information when\ncreating a payment method. The information will be used to process\npayments. If the information is not provided during payment method\ncreation, the city and country data will be missing during payment\nprocessing.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "phone",
                          "label": "Phone",
                          "type": "string",
                          "required": false,
                          "description": "Phone number, 40 characters or less.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "description": "State, must be a valid subregion (state or province) name or code. For more information, see <a\nhref=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\"\ntarget=\"_blank\">View subregions of a specific country or region</a>.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "zipCode",
                          "label": "Zip Code",
                          "type": "string",
                          "required": false,
                          "description": "Zip code, 20 characters or less.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "IBAN",
                          "label": "I B A N",
                          "type": "string",
                          "required": false,
                          "description": "The International Bank Account Number. \n\nThis field is required if the `type` field is set to `SEPA`. \nHowever, for the creation of tokenized SEPA payment methods, this field is optional. \nCurrently, SEPA tokenization is supported on selected payment gateway integrations. \nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "accountHolderInfo",
                          "label": "Account Holder Info",
                          "type": "object",
                          "required": false,
                          "description": "The container for the account holder information. The nested `accountHolderName` field is required.\n",
                          "fields": [
                            {
                              "name": "accountHolderName",
                              "label": "Account Holder Name",
                              "type": "string",
                              "required": false,
                              "description": "Required.\n\nThe full name of the bank account holder.\n",
                              "maxLength": 60,
                              "section": "Account Settings"
                            },
                            {
                              "name": "addressLine1",
                              "label": "Address Line1",
                              "type": "string",
                              "required": false,
                              "description": "The first line of the address for the account holder.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "addressLine2",
                              "label": "Address Line2",
                              "type": "string",
                              "required": false,
                              "description": "The second line of the address for the account holder. \n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "city",
                              "label": "City",
                              "type": "string",
                              "required": false,
                              "description": "The city where the account holder stays.\n\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "country",
                              "label": "Country",
                              "type": "string",
                              "required": false,
                              "description": "The country where the account holder stays.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "email",
                              "label": "Email",
                              "type": "string",
                              "required": false,
                              "description": "The email address of the account holder.\n",
                              "section": "Communication Settings"
                            },
                            {
                              "name": "firstName",
                              "label": "First Name",
                              "type": "string",
                              "required": false,
                              "description": "The first name of the account holder.\n",
                              "section": "Account Settings"
                            },
                            {
                              "name": "lastName",
                              "label": "Last Name",
                              "type": "string",
                              "required": false,
                              "description": "The last name of the account holder.\n",
                              "section": "Account Settings"
                            },
                            {
                              "name": "phone",
                              "label": "Phone",
                              "type": "string",
                              "required": false,
                              "description": "The phone number of the account holder.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "state",
                              "label": "State",
                              "type": "string",
                              "required": false,
                              "description": "The state where the account holder stays.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "zipCode",
                              "label": "Zip Code",
                              "type": "string",
                              "required": false,
                              "description": "The zip code for the address of the account holder.\n",
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
                          "description": "The masked account number such as ****1234.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "businessIdentificationCode",
                          "label": "Business Identification Code",
                          "type": "string",
                          "required": false,
                          "description": "The BIC code used for SEPA.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "accountNumber",
                          "label": "Account Number",
                          "type": "string",
                          "required": false,
                          "description": "The number of the customer's bank account.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "bankCode",
                          "label": "Bank Code",
                          "type": "string",
                          "required": false,
                          "description": "The sort code or number that identifies the bank. This is also known as the sort code.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "branchCode",
                          "label": "Branch Code",
                          "type": "string",
                          "required": false,
                          "description": "The branch code of the bank used for direct debit.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "BAID",
                          "label": "B A I D",
                          "type": "string",
                          "required": false,
                          "description": "ID of a PayPal billing agreement.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "email",
                          "label": "Email",
                          "type": "email",
                          "required": false,
                          "description": "Email address associated with the payment method. This field is specific for setting up Apple Pay on Adyen v2.0. This field will be passed to Adyen as `shopperEmail`.\n",
                          "section": "Communication Settings"
                        },
                        {
                          "name": "preapprovalKey",
                          "label": "Preapproval Key",
                          "type": "string",
                          "required": false,
                          "description": "The PayPal preapproval key.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "applePaymentData",
                          "label": "Apple Payment Data",
                          "type": "string",
                          "required": false,
                          "description": "This field is specific for setting up Apple Pay for Adyen to include payload with Apple Pay token or Apple payment data. This information should be stringified. For more information, see [Set up Adyen Apple Pay](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Payment_Method_Types/Apple_Pay_on_Web/Set_up_Adyen_Apple_Pay).\n",
                          "section": "Payment Settings"
                        },
                        {
                          "name": "googlePaymentToken",
                          "label": "Google Payment Token",
                          "type": "string",
                          "required": false,
                          "description": "This field is specific for setting up Google Pay on Chase gateway integrations to specify the stringified Google Pay token. For more information, see [Set up Google Pay on Chase](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Payment_Method_Types/Set_up_Google_Pay_on_Chase).\n",
                          "section": "Payment Settings"
                        },
                        {
                          "name": "amazonPayToken",
                          "label": "Amazon Pay Token",
                          "type": "string",
                          "required": false,
                          "description": "This field is specific for setting up Amazon Pay gateway integrations to specify the stringified Amazon Pay token.\n",
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
                      "description": "Name of the payment term associated with the account. For example, \"Net 30\". The payment term determines the due dates of invoices.\n",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "purchaseOrderNumber",
                      "label": "Purchase Order Number",
                      "type": "string",
                      "required": false,
                      "description": "The number of the purchase order associated with this account. Purchase order information generally comes from customers.\n",
                      "maxLength": 100,
                      "section": "Account Settings"
                    },
                    {
                      "name": "salesRep",
                      "label": "Sales Rep",
                      "type": "string",
                      "required": false,
                      "description": "The name of the sales representative associated with this account, if applicable.\n",
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
                          "description": "First line of the contact's address. This is often a street address or a business name.\n",
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "address2",
                          "label": "Address2",
                          "type": "string",
                          "required": false,
                          "description": "Second line of the contact's address.\n",
                          "maxLength": 255,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "city",
                          "label": "City",
                          "type": "string",
                          "required": false,
                          "description": "City of the contact's address.\n",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contactDescription",
                          "label": "Contact Description",
                          "type": "string",
                          "required": false,
                          "description": "A description for the contact.          \n",
                          "maxLength": 100,
                          "section": "Contact Information"
                        },
                        {
                          "name": "country",
                          "label": "Country",
                          "type": "string",
                          "required": false,
                          "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided.\n",
                          "maxLength": 64,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "county",
                          "label": "County",
                          "type": "string",
                          "required": false,
                          "description": "County of the contact's address.\n",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "fax",
                          "label": "Fax",
                          "type": "string",
                          "required": false,
                          "description": "Fax number of the contact.\n",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "firstName",
                          "label": "First Name",
                          "type": "string",
                          "required": true,
                          "description": "First name of the contact.\n",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "homePhone",
                          "label": "Home Phone",
                          "type": "string",
                          "required": false,
                          "description": "Home phone number of the contact.\n",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "lastName",
                          "label": "Last Name",
                          "type": "string",
                          "required": true,
                          "description": "Last name of the contact.\n",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "mobilePhone",
                          "label": "Mobile Phone",
                          "type": "string",
                          "required": false,
                          "description": "Mobile phone number of the contact.\n",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "nickname",
                          "label": "Nickname",
                          "type": "string",
                          "required": false,
                          "description": "Nickname of the contact.\n",
                          "maxLength": 100,
                          "section": "Account Settings"
                        },
                        {
                          "name": "otherPhone",
                          "label": "Other Phone",
                          "type": "string",
                          "required": false,
                          "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.\n",
                          "maxLength": 40,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "otherPhoneType",
                          "label": "Other Phone Type",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the type of phone number in the `otherPhone` field.\n",
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
                          "description": "Personal email address of the contact.\n",
                          "maxLength": 80,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "postalCode",
                          "label": "Postal Code",
                          "type": "string",
                          "required": false,
                          "description": "ZIP code or other postal code of the contact's address.\n",
                          "maxLength": 20,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "state",
                          "label": "State",
                          "type": "string",
                          "required": false,
                          "description": "State or province of the contact's address.\n",
                          "maxLength": 100,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "taxRegion",
                          "label": "Tax Region",
                          "type": "string",
                          "required": false,
                          "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.\n",
                          "maxLength": 100,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "workEmail",
                          "label": "Work Email",
                          "type": "email",
                          "required": false,
                          "description": "Business email address of the contact.\n",
                          "maxLength": 80,
                          "section": "Communication Settings"
                        },
                        {
                          "name": "workPhone",
                          "label": "Work Phone",
                          "type": "string",
                          "required": false,
                          "description": "Business phone number of the contact.\n",
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
                      "description": "Information about the tax exempt status of a customer account.\n",
                      "fields": [
                        {
                          "name": "VATId",
                          "label": "V A T Id",
                          "type": "string",
                          "required": false,
                          "description": "EU Value Added Tax ID.\n\n**Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).\n",
                          "maxLength": 25,
                          "section": "Tax Settings"
                        },
                        {
                          "name": "companyCode",
                          "label": "Company Code",
                          "type": "string",
                          "required": false,
                          "description": "Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara.\n\n**Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).\n",
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptCertificateId",
                          "label": "Exempt Certificate Id",
                          "type": "string",
                          "required": false,
                          "description": "ID of the customer tax exemption certificate. Applicable if you use Zuora Tax or Connect tax engines.\n",
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptCertificateType",
                          "label": "Exempt Certificate Type",
                          "type": "string",
                          "required": false,
                          "description": "Type of tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.\n",
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptDescription",
                          "label": "Exempt Description",
                          "type": "string",
                          "required": false,
                          "description": "Description of the tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.\n",
                          "maxLength": 500,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptEffectiveDate",
                          "label": "Exempt Effective Date",
                          "type": "date",
                          "required": false,
                          "description": "Date when the customer tax exemption starts, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptExpirationDate",
                          "label": "Exempt Expiration Date",
                          "type": "date",
                          "required": false,
                          "description": "Date when the customer tax exemption expires, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptIssuingJurisdiction",
                          "label": "Exempt Issuing Jurisdiction",
                          "type": "string",
                          "required": false,
                          "description": "Jurisdiction in which the customer tax exemption certificate was issued.\n",
                          "maxLength": 32,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "exemptStatus",
                          "label": "Exempt Status",
                          "type": "string",
                          "required": false,
                          "description": "Status of the account tax exemption. Applicable if you use Zuora Tax or Connect tax engines. Required if you use Zuora Tax. \n",
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
                  "description": "Notes about the subscription. These notes are only visible to Zuora users.\n",
                  "maxLength": 500,
                  "section": "Additional Fields"
                },
                {
                  "name": "paymentTerm",
                  "label": "Payment Term",
                  "type": "string",
                  "required": false,
                  "description": "The name of the payment term associated with the subscription. For example, `Net 30`. The payment term determines the due dates of invoices.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Term from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Payment Settings"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sequence set associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Set from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the ship-to contact associated with the subscription. It must be a contact of the subscription owner.\n\n\n**Note**:\n  To access this field, you must have the <b>ShipToContactSupport</b> permission. If you want to enable this permission, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sold-to contact associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Contact Information"
                },
                {
                  "name": "subscribeToRatePlans",
                  "label": "Subscribe To Rate Plans",
                  "type": "array",
                  "required": false,
                  "description": "List of rate plans associated with the subscription.\n",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "chargeOverrides",
                      "label": "Charge Overrides",
                      "type": "array",
                      "required": false,
                      "description": "List of charges associated with the rate plan.\n",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "accountReceivableAccountingCode",
                          "label": "Account Receivable Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The accountReceivableAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a>, <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a>, and <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Invoice_Settlement/Get_started_with_Invoice_Settlement/AA_Overview_of_Invoice_Settlement\" target=\"_blank\">Invoice Settlement</a> features are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "adjustmentLiabilityAccountingCode",
                          "label": "Adjustment Liability Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The adjustmentLiabilityAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "adjustmentRevenueAccountingCode",
                          "label": "Adjustment Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The adjustmentRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "billing",
                          "label": "Billing",
                          "type": "object",
                          "required": false,
                          "description": "Billing information about the charge.\n",
                          "fields": [
                            {
                              "name": "billCycleDay",
                              "label": "Bill Cycle Day",
                              "type": "number",
                              "required": false,
                              "description": "Day of the month that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofMonth`.\n",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "billCycleType",
                              "label": "Bill Cycle Type",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora determines the day that each billing period begins on.\n\n  * `DefaultFromCustomer` - Each billing period begins on the bill cycle day of the account that owns the subscription.\n  * `SpecificDayofMonth` - Use the `billCycleDay` field to specify the day of the month that each billing period begins on.\n  * `SubscriptionStartDay` - Each billing period begins on the same day of the month as the start date of the subscription.\n  * `ChargeTriggerDay` - Each billing period begins on the same day of the month as the date when the charge becomes active.\n  * `SpecificDayofWeek` - Use the `weeklyBillCycleDay` field to specify the day of the week that each billing period begins on.\n",
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
                              "description": "Billing frequency of the charge. The value of this field controls the duration of each billing period.\n\nIf the value of this field is `Specific_Days`, `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.\n",
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
                              "description": "Specifies how Zuora determines when to start new billing periods. You can use this field to align the billing periods of different charges.\n\n* `AlignToCharge` - Zuora starts a new billing period on the first billing day that falls on or after the date when the charge becomes active.\n* `AlignToSubscriptionStart` - Zuora starts a new billing period on the first billing day that falls on or after the start date of the subscription.\n* `AlignToTermStart` - For each term of the subscription, Zuora starts a new billing period on the first billing day that falls on or after the start date of the term.\n\nSee the `billCycleType` field for information about how Zuora determines the billing day.\n\n**Note**: This field is not supported in one time charges.\n",
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
                              "description": "Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).\n",
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
                              "description": "Duration of each billing period in months or weeks, depending on the value of the `billingPeriod` field. Only applicable if the value of the `billingPeriod` field is `Specific_Months` or `Specific_Weeks`.\n",
                              "section": "Invoice & Document Settings"
                            },
                            {
                              "name": "weeklyBillCycleDay",
                              "label": "Weekly Bill Cycle Day",
                              "type": "string",
                              "required": false,
                              "description": "Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.\n",
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
                          "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines what type of charge it is:\n* CommitmentTrueUp: For recurring charges. Currency based minimum commitment charge. \n* CreditCommitment: For usage charges. Credit to minimum commitment funds.\n",
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
                          "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a> target=\"_blank\">Minimum Commitment</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines the type of the commitment for both the commitment true-up charge and credit commitment charge, and so you must define the type as `CURRENCY`.\n",
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
                          "description": "**Note**: This field is only available if you have both the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> features enabled.\n\nWith this field, you can use a standalone order to subscribe to a minimum commitment subscription.\n\nThis field defines the way to calculate credit. See [Credit Option](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge#Credit_Option) for more information.\n",
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
                          "description": "The chargeModel of a standalone charge.\n\n\nSupported charge models:\n\n* `FlatFee`\n\n* `PerUnit`\n\n* `Volume`\n\n* `Tiered`\n\n* `DiscountFixedAmount`\n\n* `DiscountPercentage`\n\n**Note:** This field is available when the <a\nhref=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\"\ntarget=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "chargeNumber",
                          "label": "Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "Charge number of the charge. For example, C-00000307.\n\n* If you do not set this field, Zuora will generate a charge number starting with a default prefix, for example, C-. This default prefix is predefined in **Billing Settings** > **Define Default Subscription and Order Settings**.\n* If you want to use a custom charge number, do not use the default prefix predefined in **Billing Settings** > **Define Default Subscription and Order Settings**. Use your own prefix, for example, SC-. \n",
                          "maxLength": 50,
                          "section": "Account Settings"
                        },
                        {
                          "name": "chargeType",
                          "label": "Charge Type",
                          "type": "string",
                          "required": false,
                          "description": "The chargeType of a standalone charge.\n\nSupported charge types:\n\n* `OneTime`\n\n* `Recurring`\n\n* `Usage`\n\n**Note:** This field is available when the <a\nhref=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\"\ntarget=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "contractAssetAccountingCode",
                          "label": "Contract Asset Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractAssetAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "contractLiabilityAccountingCode",
                          "label": "Contract Liability Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractLiabilityAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "contractRecognizedRevenueAccountingCode",
                          "label": "Contract Recognized Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The contractRecognizedRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "description": "Container for custom fields of a Rate Plan Charge object.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "deferredRevenueAccountingCode",
                          "label": "Deferred Revenue Accounting Code",
                          "type": "string",
                          "required": false,
                          "description": "The deferredRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a> features are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "description",
                          "label": "Description",
                          "type": "string",
                          "required": false,
                          "description": "Description of the charge.\n",
                          "maxLength": 500,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "drawdownRate",
                          "label": "Drawdown Rate",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe [conversion rate](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge#UOM_Conversion) between Usage UOM and Drawdown UOM for a [drawdown charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge). Must be a positive number (>0).\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDate",
                          "label": "End Date",
                          "type": "object",
                          "required": false,
                          "description": "Specifies when a charge becomes inactive.\n",
                          "fields": [
                            {
                              "name": "endDateCondition",
                              "label": "End Date Condition",
                              "type": "string",
                              "required": false,
                              "description": "Condition for the charge to become inactive.\n\n- If the value of this field is `Fixed_Period`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.\n- If the value of this field is `Specific_End_Date`, use the `specificEndDate` field to specify the date when the charge becomes inactive.\n",
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
                              "description": "End date policy of the discount charge to become active when the **Apply to billing period partially** checkbox is selected from the product catalog UI or the `applyToBillingPeriodPartially` field is set as true from the \"CRUD: Create a product rate plan charge\" operation. \n\n- If the value of this field is `FixedPeriod`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.\n- If the value of this field is `SpecificEndDate`, use the `specificEndDate` field to specify the date when the charge becomes inactive.\n\n**Notes**: \n- You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n- You can use either `endDateCondition` or `endDatePolicy` to define when a discount charge ends, but not both at the same time.\n",
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
                              "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `endDateCondition` field is `Specific_End_Date`.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriods",
                              "label": "Up To Periods",
                              "type": "number",
                              "required": false,
                              "description": "Duration of the charge in billing periods, days, weeks, months, or years, depending on the value of the `upToPeriodsType` field. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "upToPeriodsType",
                              "label": "Up To Periods Type",
                              "type": "string",
                              "required": false,
                              "description": "Unit of time that the charge duration is measured in. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.\n",
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
                          "description": "The estimated start date of the pending charge in an active subscription.\n\nIf you specify `SpecificDate` in the `startDate` > `triggerEvent` field and want to create a completed order and an active subscription, you must specify either the `estimatedStartDate` or `startDate` > `specificTriggerDate` field:\n\n- `estimatedStartDate`: The charge will be in pending status.\n\n- `specificTriggerDate`: The charge will be in active status.\n\nThe value of this field must be a date within the subscription term. The system will then automatically calculate the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge.\n\n**Note:** This field is available only when the Pending Subscription Processing feature is turned on.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "excludeItemBillingFromRevenueAccounting",
                          "label": "Exclude Item Billing From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.\n\nIf both the following features are enabled in your tenant, you must ensure the `excludeItemBillingFromRevenueAccounting` field is set consistently for a prepayment charge and the corresponding drawdown charge. In addition, if the `excludeItemBookingFromRevenueAccounting` field in a Create Subscription or Add Product order action is set to `false`, you must also set the `excludeItemBillingFromRevenueAccounting` field in this order action to `false`.\n  * Prepaid with Drawdown\n  * Unbilled Usage\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.\n",
                          "defaultValue": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "excludeItemBookingFromRevenueAccounting",
                          "label": "Exclude Item Booking From Revenue Accounting",
                          "type": "boolean",
                          "required": false,
                          "description": "The flag to exclude rate plan charges from revenue accounting.\n\nIf both the following features are enabled in your tenant, you must ensure the `excludeItemBookingFromRevenueAccounting` field is set consistently for a prepayment charge and the corresponding drawdown charge.\n  * Prepaid with Drawdown\n  * Unbilled Usage\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled.\n",
                          "defaultValue": false,
                          "section": "Account Settings"
                        },
                        {
                          "name": "isAllocationEligible",
                          "label": "Is Allocation Eligible",
                          "type": "boolean",
                          "required": false,
                          "description": "This field is used to identify if the charge segment is allocation\neligible in revenue recognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "isRollover",
                          "label": "Is Rollover",
                          "type": "boolean",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe value is either \"True\" or \"False\". It determines whether the rollover fields are needed.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "isUnbilled",
                          "label": "Is Unbilled",
                          "type": "boolean",
                          "required": false,
                          "description": "This field is used to dictate how to perform the accounting during revenue\nrecognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                          "section": "Invoice & Document Settings"
                        },
                        {
                          "name": "name",
                          "label": "Name",
                          "type": "string",
                          "required": false,
                          "description": "The name of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "negotiatedPriceTable",
                          "label": "Negotiated Price Table",
                          "type": "array",
                          "required": false,
                          "description": "Array of negotiated price table information. The rate card entries provided in the array will override \nthe existing rate card entries in the standard price table to form a negotiated price table that will be    \nused during pricing evaluation.\n\n\n**Note:** To enable the Negotiated Price Table feature, submit a request to <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.                  \n",
                          "itemType": "object",
                          "itemFields": [
                            {
                              "name": "items",
                              "label": "Items",
                              "type": "object",
                              "required": false,
                              "description": "The rate card entry object.\n\n\n  **Note:** For more information, refer to the rate card definition in the product catalog.",
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
                          "description": "The pobPolicy of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "prepaidQuantity",
                          "label": "Prepaid Quantity",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number (>0).\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "pricing",
                          "label": "Pricing",
                          "type": "object",
                          "required": false,
                          "description": "Pricing information about the charge.\n",
                          "fields": [
                            {
                              "name": "chargeModelData",
                              "label": "Charge Model Data",
                              "type": "object",
                              "required": false,
                              "description": "Container for charge model configuration data.\n\n**Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The High Water Mark and Pre-Rated Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
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
                                      "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`.\n\nThis field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "customFieldTotalAmount",
                                      "label": "Custom Field Total Amount",
                                      "type": "string",
                                      "required": false,
                                      "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. \n\nThis field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "formula",
                                      "label": "Formula",
                                      "type": "string",
                                      "required": false,
                                      "description": "The pricing formula to calculate actual rating amount.\n\nThis field is only available for charges that use the Multi-Attribute Pricing charge model.\n",
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
                                  "description": "Number of units purchased. This field is used if the Multi-Attribute Pricing formula uses the `quantity()` function.\n\nThis field is only available for one-time and recurring charges that use the Multi-Attribute Pricing charge model.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.\n\n**Note**: When you override the tiers of a usage-based charge using High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                              "description": "Pricing information about a discount charge.\n",
                              "fields": [
                                {
                                  "name": "applyDiscountTo",
                                  "label": "Apply Discount To",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies which type of charge the discount charge applies to.\n",
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
                                  "description": "Allow the discount duration to be aligned with the billing period partially.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                                  "section": "Invoice & Document Settings"
                                },
                                {
                                  "name": "discountAmount",
                                  "label": "Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "Only applicable if the discount charge is a fixed-amount discount.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountApplyDetails",
                                  "label": "Discount Apply Details",
                                  "type": "array",
                                  "required": false,
                                  "description": "Charge list of discount be applied to.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "productRatePlanChargeId",
                                      "label": "Product Rate Plan Charge Id",
                                      "type": "string",
                                      "required": true,
                                      "description": "Product Rate Plan Charge Id of the discount apply to.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "productRatePlanId",
                                      "label": "Product Rate Plan Id",
                                      "type": "string",
                                      "required": true,
                                      "description": "Product Rate Plan Id of the discount apply to.\n",
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
                                  "description": "The discount class defines the sequence in which discount product rate plan charges are applied.\n\n**Note**: You must enable the [Enhanced Discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "discountLevel",
                                  "label": "Discount Level",
                                  "type": "string",
                                  "required": false,
                                  "description": "Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.\n",
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
                                  "description": "Only applicable if the discount charge is a percentage discount.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountAmount",
                                  "label": "Original Discount Amount",
                                  "type": "number",
                                  "required": false,
                                  "description": "The manufacturer's suggested retail discount price for standalone charge.\n\nOnly applicable if the standalone discount charge is a fixed-amount discount.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalDiscountPercentage",
                                  "label": "Original Discount Percentage",
                                  "type": "number",
                                  "required": false,
                                  "description": "The manufacturer's suggested retail discount percentage for standalone charge.\n\nOnly applicable if the standalone discount charge is a percentage discount.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceChangeOption",
                                  "label": "Price Change Option",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n",
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
                              "description": "Pricing information about a one-time charge that uses the \"flat fee\" charge model. In this charge model, the charge has a fixed price.\n",
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price of the charge.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
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
                              "description": "Pricing information about a one-time charge that uses the \"per unit\" charge model. In this charge model, the charge has a fixed price per unit purchased.\n",
                              "fields": [
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Per-unit price of the charge.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                              "description": "Pricing information about a one-time charge that uses the \"tiered pricing\" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.\n",
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                              "description": "Pricing information about a one-time charge that uses the \"volume pricing\" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.\n",
                              "fields": [
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of variable pricing tiers in the charge.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
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
                                      "description": "Specifies the frequency for delivery schedule\n",
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
                                      "description": "Indicates whether delivery on friday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "monday",
                                      "label": "Monday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on monday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "saturday",
                                      "label": "Saturday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on saturday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "sunday",
                                      "label": "Sunday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on sunday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "thursday",
                                      "label": "Thursday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on thursday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tuesday",
                                      "label": "Tuesday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on tuesday.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "wednesday",
                                      "label": "Wednesday",
                                      "type": "boolean",
                                      "required": false,
                                      "description": "Indicates whether delivery on wednesday.\n",
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
                                  "description": "Price of the charge in each recurring period.\n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Price of the charge in each recurring period.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.\n",
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
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPrice",
                                  "label": "List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "Per-unit price of the charge in each recurring period.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.\n",
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
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "quantity",
                                  "label": "Quantity",
                                  "type": "number",
                                  "required": false,
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "uom",
                                  "label": "Uom",
                                  "type": "number",
                                  "required": false,
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.\n",
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
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of cumulative pricing tiers in the charge.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                                  "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                                  "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "listPriceBase",
                                  "label": "List Price Base",
                                  "type": "string",
                                  "required": false,
                                  "description": "Specifies the duration of each recurring period.\n",
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
                                  "description": "Number of units purchased.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "specificListPriceBase",
                                  "label": "Specific List Price Base",
                                  "type": "number",
                                  "required": false,
                                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.              \n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tiers",
                                  "label": "Tiers",
                                  "type": "array",
                                  "required": false,
                                  "description": "List of variable pricing tiers in the charge.\n",
                                  "itemType": "object",
                                  "itemFields": [
                                    {
                                      "name": "endingUnit",
                                      "label": "Ending Unit",
                                      "type": "number",
                                      "required": false,
                                      "description": "Limit on the number of units for which the tier is effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "originalListPrice",
                                      "label": "Original List Price",
                                      "type": "number",
                                      "required": false,
                                      "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "price",
                                      "label": "Price",
                                      "type": "number",
                                      "required": true,
                                      "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "priceFormat",
                                      "label": "Price Format",
                                      "type": "string",
                                      "required": true,
                                      "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                      "description": "Number of units at which the tier becomes effective.\n",
                                      "section": "Additional Fields"
                                    },
                                    {
                                      "name": "tier",
                                      "label": "Tier",
                                      "type": "number",
                                      "required": true,
                                      "description": "Index of the tier in the charge.\n",
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
                                  "description": "Unit of measure of the standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
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
                          "description": "Container for pricing attribute and value that provide additional context for dynamic pricing. The pricing attribute values are used to get the charge’s list price from the product catalog. For the pricing attribute mapped to a Zuora object field, Zuora will retrieve the value automatically, you don’t need to pass its value explicitly. If you pass a value that doesn’t match the actual value of the Zuora object, an error will be returned. \nNote that for any pricing attribute mapped to the field of Zuora object Usage, because its value is only determined when the usage record arrives, you can’t provide a value via Orders API payload and Zuora will not retrieve its value automatically.    \n\n\n**Note:** To enable Dynamic Pricing, submit a request to <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productCategory",
                          "label": "Product Category",
                          "type": "string",
                          "required": false,
                          "description": "The productCategory of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productClass",
                          "label": "Product Class",
                          "type": "string",
                          "required": false,
                          "description": "The productClass of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productFamily",
                          "label": "Product Family",
                          "type": "string",
                          "required": false,
                          "description": "The productFamily of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productLine",
                          "label": "Product Line",
                          "type": "string",
                          "required": false,
                          "description": "The productLine of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeId",
                          "label": "Product Rate Plan Charge Id",
                          "type": "string",
                          "required": true,
                          "description": "Internal identifier of the product rate plan charge that the charge is based on.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "productRatePlanChargeNumber",
                          "label": "Product Rate Plan Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "Number of a product rate-plan charge for this subscription.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "prorationOption",
                          "label": "Proration Option",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Unbilled_Usage/Usage_charge_proration\" target=\"_blank\">Usage charge proration</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nYou can use this field to specify the charge-level proration option for a usage charge or recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.\n  * `NoProration`: charge-level proration option that you can set for a usage charge. This option means to not use any proration, which is the default current system behavior for a usage charge.\n  * `TimeBasedProration`: charge-level proration option that you can set for a usage charge. This option means to prorate the usage charge amount using the actual number of days if the billing period is a partial period.\n  * `DefaultFromTenantSetting`: charge-level proration option that you can set for a recurring charge. This option means to follow the customer billing rule proration setting.\n  * `ChargeFullPeriod`: charge-level proration option that you can set for a recurring charge. This options means to charge the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period.\n  * `CustomizeProrationOptionOverrides`: charge-level proration option that you can set for a recurring charge. This option means to use the customized charge proration settings that is specified by the `ratingPropertiesOverride` field.\n",
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
                          "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nThis field is used only when the value of the `prorationOption` field is set to `CustomizeProrationOptionOverrides`. \n\nUse this field to specify more customized proration options for a recurring charge when you creating or adding a subscription rate plan charge through an order. The tenant-level proration option will be overridden.\n",
                          "fields": [
                            {
                              "name": "isProratePartialMonth",
                              "label": "Is Prorate Partial Month",
                              "type": "boolean",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify whether to prorate the recurring charge for a partial month. The tenant-level proration option will be overridden.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "prorationUnit",
                              "label": "Proration Unit",
                              "type": "string",
                              "required": false,
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify the unit of proration for a recurring charge. The tenant-level proration option will be overridden.\n",
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
                              "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nUse this field to specify the number of days counted for a month when prorating a recurring charge. The tenant-level proration option will be overridden. See more details for each of the following enum values in <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Common_subscription_information/F_Proration#When_prorating_a_month.2C_assume_30_days_in_a_month_or_use_actual_days.3F\" target=\"_blank\">Proration</a>.\n",
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
                          "description": "The recognizedRevenueAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance\" target=\"_blank\">Zuora Finance</a> features are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "revRecCode",
                          "label": "Rev Rec Code",
                          "type": "string",
                          "required": false,
                          "description": "Revenue Recognition Code\n",
                          "maxLength": 70,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "revRecTriggerCondition",
                          "label": "Rev Rec Trigger Condition",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the revenue recognition trigger condition.\n\n  * `Contract Effective Date` \n  * `Service Activation Date`\n  * `Customer Acceptance Date`\n",
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
                          "description": "Specifies the revenue recognition rule, such as `Recognize upon invoicing` or `Recognize daily over time`.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "revenueRecognitionTiming",
                          "label": "Revenue Recognition Timing",
                          "type": "string",
                          "required": false,
                          "description": "Specifies the type of revenue recognition timing.\n\nPredefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled. \n",
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
                          "description": "Specifies the type of revenue amortization method.\n\nPredefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have both the Order to Revenue feature and the Standalone Orders feature enabled. \n",
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
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThis field defines the priority of rollover, which is either first or last.\n",
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
                          "description": "**Note**: This field is only available if you have the [Prepaid with\nDrawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown)\nfeature enabled.\n\nUse this field when you want to set the rollover fund's period length shorter than the prepayment charge's validity period. In this case, you must set the `rolloverPeriods` field to 1. For example, you can define the rollover fund's period length as 5 months, shorter than the prepayment charge's validity period: a year.\n",
                          "defaultValue": null,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "rolloverPeriods",
                          "label": "Rollover Periods",
                          "type": "number",
                          "required": false,
                          "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThis field defines the number of rollover periods, it is restricted to 3.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "startDate",
                          "label": "Start Date",
                          "type": "object",
                          "required": false,
                          "description": "Specifies when a charge becomes active.\n",
                          "fields": [
                            {
                              "name": "specificTriggerDate",
                              "label": "Specific Trigger Date",
                              "type": "date",
                              "required": false,
                              "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`. \n\nWhile this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "triggerEvent",
                              "label": "Trigger Event",
                              "type": "string",
                              "required": false,
                              "description": "Condition for the charge to become active.\n\nIf the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.\n",
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
                          "description": "The unBilledReceivablesAccountingCode of a standalone charge.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> or <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature are enabled.\n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "uniqueToken",
                          "label": "Unique Token",
                          "type": "string",
                          "required": false,
                          "description": "Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora.\n\nFor instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the charge. Then when you update the product, you can use the same unique identifier to specify which charge to modify.\n",
                          "maxLength": 50,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "upsellOriginChargeNumber",
                          "label": "Upsell Origin Charge Number",
                          "type": "string",
                          "required": false,
                          "description": "The identifier of the original upselling charge associated with the current charge.\n\nFor a termed subscription, you can now use the \"Create an order\" API operation to perform an Add Product order action to make a product quantity upsell for per unit recurring charges. The benefit is that the charge added by this approach will be automatically combined with the original existing charge for which you want to upsell when the subscription is renewed. The approach is as follows:\n* Use an Add Product order action to add a charge that is of the same charge type, charge model, and charge end date as the existing per unit recurring charge for which you want to make a quantity upsell.\n\n* In the preceding charge to add, use the `upsellOriginChargeNumber` field to specify the existing rate plan charge for which you want to make the quantity upsell.\n\nNote that a termed subscription with such upsell charges can not be changed to an evergreen subscription.   \n\n**Note**: The Quantity Upsell feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global\n  Support](https://support.zuora.com).  \n",
                          "section": "Account Settings"
                        },
                        {
                          "name": "validityPeriodType",
                          "label": "Validity Period Type",
                          "type": "string",
                          "required": false,
                          "description": "**Note**: This field is only available if you have enabled either of the following:\n* <a href=\"https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a>\n* <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a>\n* Both <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment\" target=\"_blank\">Minimum Commitment</a> and <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a>\n\nYou can use this field in the following scenarios: \n* When you create a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge), use this field to define the period in which the prepayment units are valid to use.\n\n* When you override the setting of <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Minimum_Commitment#Commitment_true-up_charge_specific_settings\" target=\"_blank\">commitment true-up charge</a> from the product catalog, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.\n\n* When you use a standalone order to create a commitment true-up charge, set this field consistently with the value of the `billing` > `billingPeriod` field in this charge.\n",
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
                          "description": "The tax code of a charge. This field is available when the `taxable` field is set to `true`. \n",
                          "section": "Tax Settings"
                        },
                        {
                          "name": "taxMode",
                          "label": "Tax Mode",
                          "type": "string",
                          "required": false,
                          "description": "The tax mode of a charge.  This field is available when the `taxable` field is set to `true`.\n",
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
                          "description": "The flag indicates whether the charge is taxable. If this field is set to `true`, you must specify the `taxCode` and `taxMode` fields.\n",
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
                      "description": "Specifies whether all features in the rate plan will be cleared.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isAddingSubsetCharges",
                      "label": "Is Adding Subset Charges",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether to add a subset of charges to the subscription.\n\n\n**Note:** To access this field for adding a subset of charges, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "isFromExternalCatalog",
                      "label": "Is From External Catalog",
                      "type": "boolean",
                      "required": false,
                      "description": "Indicates whether the rate plan is created from the Zuora product catalog or from an external product catalog.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanId",
                      "label": "Product Rate Plan Id",
                      "type": "string",
                      "required": true,
                      "description": "Internal identifier of the product rate plan that the rate plan is based on.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate plan for this subscription.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "ratePlanName",
                      "label": "Rate Plan Name",
                      "type": "string",
                      "required": false,
                      "description": "Name of the standalone rate plan.\n\n**Note:** This field is available when the <a href=\"https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders\" target=\"_blank\">Standalone Orders</a> feature is enabled.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "subscriptionProductFeatures",
                      "label": "Subscription Product Features",
                      "type": "array",
                      "required": false,
                      "description": "List of features associated with the rate plan.\nThe system compares the `subscriptionProductFeatures` and `featureId` fields in the request with the counterpart fields in a rate plan. The comparison results are as follows:\n* If there is no `subscriptionProductFeatures` field or the field is empty, features in the rate plan remain unchanged. But if the `clearingExistingFeatures` field is additionally set to true, all features in the rate plan are cleared.\n* If the `subscriptionProductFeatures` field contains the `featureId` nested fields, as well as the optional `description` and `customFields` nested fields, the features indicated by the featureId nested fields in the request overwrite all features in the rate plan.\n",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "customFields",
                          "label": "Custom Fields",
                          "type": "object",
                          "required": false,
                          "description": "A container for custom fields of the feature.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "description",
                          "label": "Description",
                          "type": "string",
                          "required": false,
                          "description": "A description of the feature.",
                          "maxLength": 500,
                          "section": "Additional Fields"
                        },
                        {
                          "name": "featureId",
                          "label": "Feature Id",
                          "type": "string",
                          "required": true,
                          "description": "Internal identifier of the feature in the product catalog.\n",
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
                      "description": "Unique identifier for the rate plan. This identifier enables you to refer to the rate plan before the rate plan has an internal identifier in Zuora.\n\nFor instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the rate plan. Then when you update the product, you can use the same unique identifier to specify which rate plan to modify.\n",
                      "maxLength": 50,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "subscriptionRatePlanNumber",
                      "label": "Subscription Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a subscription rate plan for this subscription.\n",
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
                  "description": "Subscription number of the subscription. For example, A-S00000001.\n\nIf you do not set this field, Zuora will generate the subscription number.\n",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "subscriptionOwnerAccountNumber",
                  "label": "Subscription Owner Account Number",
                  "type": "string",
                  "required": false,
                  "description": "Account number of an existing account that will own the subscription. For example, A00000001.\n\nIf you do not set this field or the `newSubscriptionOwnerAccount` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `newSubscriptionOwnerAccount` field.\n",
                  "maxLength": 70,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceOwnerAccountNumber",
                  "label": "Invoice Owner Account Number",
                  "type": "string",
                  "required": false,
                  "description": "Account number of an existing account that will own the invoice. For example, A00000001. If you do not set this field, the account that owns the order will also own this invoice.\n",
                  "maxLength": 70,
                  "section": "Account Settings"
                },
                {
                  "name": "terms",
                  "label": "Terms",
                  "type": "object",
                  "required": false,
                  "description": "Container for the terms and renewal settings of the subscription.\n",
                  "fields": [
                    {
                      "name": "autoRenew",
                      "label": "Auto Renew",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether the subscription automatically renews at the end of the each term. Only applicable if the type of the first term is `TERMED`.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "initialTerm",
                      "label": "Initial Term",
                      "type": "object",
                      "required": true,
                      "description": "Information about the first term of the subscription.\n",
                      "fields": [
                        {
                          "name": "period",
                          "label": "Period",
                          "type": "number",
                          "required": false,
                          "description": "Duration of the first term in months, years, days, or weeks, depending on the value of the `periodType` field. Only applicable if the value of the `termType` field is `TERMED`.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "periodType",
                          "label": "Period Type",
                          "type": "string",
                          "required": false,
                          "description": "Unit of time that the first term is measured in. Only applicable if the value of the `termType` field is `TERMED`.\n",
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
                          "description": "Start date of the first term, in YYYY-MM-DD format.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "endDate",
                          "label": "End Date",
                          "type": "date",
                          "required": false,
                          "description": "End date of the first term, in YYYY-MM-DD format.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "termType",
                          "label": "Term Type",
                          "type": "string",
                          "required": true,
                          "description": "Type of the first term. If the value of this field is `TERMED`, the first term has a predefined duration based on the value of the `period` field. If the value of this field is `EVERGREEN`, the first term does not have a predefined duration.\n",
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
                      "description": "Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is `TERMED`.\n\n* `RENEW_WITH_SPECIFIC_TERM` - Each renewal term has a predefined duration. The first entry in `renewalTerms` specifies the duration of the second term of the subscription, the second entry in `renewalTerms` specifies the duration of the third term of the subscription, and so on. The last entry in `renewalTerms` specifies the ultimate duration of each renewal term.\n* `RENEW_TO_EVERGREEN` - The second term of the subscription does not have a predefined duration.\n",
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
                      "description": "List of renewal terms of the subscription. Only applicable if the type of the first term is `TERMED` and the value of the `renewalSetting` field is `RENEW_WITH_SPECIFIC_TERM`.\n",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "period",
                          "label": "Period",
                          "type": "number",
                          "required": false,
                          "description": "Duration of the renewal term in months, years, days, or weeks, depending on the value of the `periodType` field.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "periodType",
                          "label": "Period Type",
                          "type": "string",
                          "required": false,
                          "description": "Unit of time that the renewal term is measured in.\n",
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
              "description": "Container for custom fields of an Order Action object.\n",
              "section": "Additional Fields"
            },
            {
              "name": "ownerTransfer",
              "label": "Owner Transfer",
              "type": "object",
              "required": false,
              "description": "Information about an order action of type `OwnerTransfer`.\n\n**Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).\n",
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The contact id of the bill to contact that the subscription is being transferred to.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing bill-to contact ID at the subscription level. This field is mutually exclusive with the `billToContactId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice group number at the subscription level. This field is mutually exclusive with the `invoiceGroupNumber` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice template ID at the subscription level. This field is mutually exclusive with the `invoiceTemplateId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing payment term at the subscription level. This field is mutually exclusive with the `paymentTerm` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sequence set ID at the subscription level. This field is mutually exclusive with the `sequenceSetId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing ship-to contact ID at the subscription level. This field is mutually exclusive with the `shipToContactId` field.\n\n**Note:** \n   To access this field, you must have the <b>ShipToContactSupport</b> permission. If you want to enable this permission, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sold-to contact ID at the subscription level. This field is mutually exclusive with the `soldToContactId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "destinationAccountNumber",
                  "label": "Destination Account Number",
                  "type": "string",
                  "required": false,
                  "description": "The account number of the account that the subscription is being transferred to.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "destinationInvoiceAccountNumber",
                  "label": "Destination Invoice Account Number",
                  "type": "string",
                  "required": false,
                  "description": "The account number of the invoice owner account that the subscription is being transferred to.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceGroupNumber",
                  "label": "Invoice Group Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the invoice group associated with the subscription.\n\nAfter enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping).\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "maxLength": 255,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceTemplateId",
                  "label": "Invoice Template Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the invoice template associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Template from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "paymentProfile",
                  "label": "Payment Profile",
                  "type": "object",
                  "required": false,
                  "description": "Container for payment gateway and payment method details of a payment. If you do not set this field, the payment method and payment gateway values cannot be set in the subscription.\n\n**Note:**\n  - If multiple order actions are specified, they will be applied in the same order they appear in the API payload.\n  - If one or more of these order actions include the `paymentProfile` element, the changes will be applied in sequence, and the result will be consistent with the last `paymentProfile` element.\n",
                  "fields": [
                    {
                      "name": "paymentGatewayId",
                      "label": "Payment Gateway Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the gateway instance that processes the payment.\n\nThis field remains unset, if you do not provide value.\n",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "paymentMethodId",
                      "label": "Payment Method Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the payment method.\n\nThis field remains unset, if you do not provide value.\n",
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
                  "description": "Name of the payment term associated with the account. For example, \"Net 30\". The payment term determines the due dates of invoices.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Term from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Payment Settings"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sequence set associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Set from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the ship-to contact associated with the subscription.\n\n**Note**:\n  To access this field, you must have the <b>ShipToContactSupport</b> permission. If you want to enable this permission, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sold-to contact associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
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
              "description": "Information about an order action of type `RemoveProduct`.\n",
              "fields": [
                {
                  "name": "externalCatalogPlanId",
                  "label": "External Catalog Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "An external ID of the rate plan to be removed. You can use this field to specify an existing rate plan in your subscription. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. However, if there are multiple rate plans with the same `productRatePlanId` value existing in the subscription, you must use the `ratePlanId` field to remove the rate plan. The `externalCatalogPlanId` field cannot be used to distinguish multiple rate plans in this case.\n\n**Note:** If both `externalCatalogPlanId` and `ratePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate plan for this subscription.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "ID of the rate plan to remove. This can be the latest version or any history version of ID.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionRatePlanNumber",
                  "label": "Subscription Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a rate plan for this subscription.\n",
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
                  "description": "Container for custom fields of a Rate Plan object.\n",
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
                      "description": "Read only. Identifies the charge to be updated.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "productRatePlanChargeId",
                      "label": "Product Rate Plan Charge Id",
                      "type": "string",
                      "required": false,
                      "description": "Identifier of the rate plan that was updated.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanNumber",
                      "label": "Product Rate Plan Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate plan for this subscription.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "description": "A unique string to represent the rate plan charge in the order. The unique token is used to perform multiple actions against a newly added rate plan. For example, if you want to add and update a product in the same order, you would assign a unique token to the product rate plan when added and use that token in future order actions.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of a Rate Plan Charge object.\n",
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
              "description": "Information about an order action of type `RenewSubscription`.\n",
              "fields": [
                {
                  "name": "billToContactId",
                  "label": "Bill To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the bill-to contact associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing bill-to contact ID at the subscription level. This field is mutually exclusive with the `billToContactId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice group number at the subscription level. This field is mutually exclusive with the `invoiceGroupNumber` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice template ID at the subscription level. This field is mutually exclusive with the `invoiceTemplateId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing payment term at the subscription level. This field is mutually exclusive with the `paymentTerm` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sequence set ID at the subscription level. This field is mutually exclusive with the `sequenceSetId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing ship-to contact ID at the subscription level. This field is mutually exclusive with the `shipToContactId` field.\n\n**Note:** \n   To access this field, you must have the <b>ShipToContactSupport</b> permission. If you want to enable this permission, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sold-to contact ID at the subscription level. This field is mutually exclusive with the `soldToContactId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "invoiceGroupNumber",
                  "label": "Invoice Group Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the invoice group associated with the subscription.\n\nAfter enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping).\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "maxLength": 255,
                  "section": "Account Settings"
                },
                {
                  "name": "invoiceTemplateId",
                  "label": "Invoice Template Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the invoice template associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Template from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "paymentTerm",
                  "label": "Payment Term",
                  "type": "string",
                  "required": false,
                  "description": "The name of the payment term associated with the subscription. For example, `Net 30`. The payment term determines the due dates of invoices.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Term from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body..\n",
                  "section": "Payment Settings"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sequence set associated with the subscription.\n  \n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Set from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the ship-to contact associated with the subscription.\n\n**Note:**\n   To access this field, you must have the <b>ShipToContactSupport</b> permission. If you want to enable this permission, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sold-to contact associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
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
              "description": "Information about an order action of type `Resume`.\n",
              "fields": [
                {
                  "name": "extendsTerm",
                  "label": "Extends Term",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether to extend the subscription term by the length of time the suspension is in effect.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "resumePeriods",
                  "label": "Resume Periods",
                  "type": "number",
                  "required": false,
                  "description": "This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriodsType` field. \n\nThe total number of the periods used to specify when a subscription resumption takes effect. The subscription resumption will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date. \n",
                  "section": "Additional Fields"
                },
                {
                  "name": "resumePeriodsType",
                  "label": "Resume Periods Type",
                  "type": "string",
                  "required": false,
                  "description": "This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriods` field.\n\nThe period type used to specify when a subscription resumption takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date. \n",
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
                  "description": "Resume methods. Specify a way to resume a subscription. See [Resume Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Resume_a_Subscription#Resume_Date) for more information.\n\nIf `SuspendDate` is specfied, the resumption will take place on the same day as the suspension. \n",
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
                  "description": "This field is applicable only when the `resumePolicy` field is set to `SpecificDate`.\n\nA specific date when the subscription resumption takes effect, in YYYY-MM-DD format. The value should not be earlier than the subscription suspension date.\n",
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
              "description": "Information about an order action of type `Suspend`.\n",
              "fields": [
                {
                  "name": "suspendPeriods",
                  "label": "Suspend Periods",
                  "type": "number",
                  "required": false,
                  "description": "This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriodsType` field. \n\nThe total number of the periods used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date. \n",
                  "section": "Additional Fields"
                },
                {
                  "name": "suspendPeriodsType",
                  "label": "Suspend Periods Type",
                  "type": "string",
                  "required": false,
                  "description": "This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriods` field.\n\nThe period type used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date. \n",
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
                  "description": "Suspend methods. Specify a way to suspend a subscription. See [Suspend Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Suspend_a_Subscription#Suspend_Date) for more information.\n",
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
                  "description": "This field is applicable only when the `suspendPolicy` field is set to `SpecificDate`.\n\nA specific date when the subscription suspension takes effect, in YYYY-MM-DD format. The value should not be earlier than the subscription's contract effective date or later [available versions](https://developer.zuora.com/api-references/api/overview/#section/API-Versions/Minor-Version) than the subscription's term end date.\n",
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
              "description": "Information about an order action of type `TermsAndConditions`.\n",
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
                  "description": "The ID of the bill-to contact associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingBillToContact",
                  "label": "Clearing Existing Bill To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing bill-to contact ID at the subscription level. This field is mutually exclusive with the `billToContactId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingInvoiceGroupNumber",
                  "label": "Clearing Existing Invoice Group Number",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice group number at the subscription level. This field is mutually exclusive with the `invoiceGroupNumber` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "clearingExistingInvoiceTemplate",
                  "label": "Clearing Existing Invoice Template",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing invoice template ID at the subscription level. This field is mutually exclusive with the `invoiceTemplateId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "clearingExistingPaymentTerm",
                  "label": "Clearing Existing Payment Term",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing payment term at the subscription level. This field is mutually exclusive with the `paymentTerm` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Payment Settings"
                },
                {
                  "name": "clearingExistingSequenceSet",
                  "label": "Clearing Existing Sequence Set",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sequence set ID at the subscription level. This field is mutually exclusive with the `sequenceSetId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingExistingShipToContact",
                  "label": "Clearing Existing Ship To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing ship-to contact ID at the subscription level. This field is mutually exclusive with the `shipToContactId` field.\n\n**Note**:\n  To access this field, you must have the <b>ShipToContactSupport</b> permission. If you want to enable this permission, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "clearingExistingSoldToContact",
                  "label": "Clearing Existing Sold To Contact",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing sold-to contact ID at the subscription level. This field is mutually exclusive with the `soldToContactId` field.\n\n**Note**: If you have the [Flexible Billing Attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body.\n",
                  "defaultValue": false,
                  "section": "Contact Information"
                },
                {
                  "name": "communicationProfileId",
                  "label": "Communication Profile Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the communication profile associated with the subscription.\n\n**Note**: This field is available in the request body only if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes\" target=\"_blank\">Flexible Billing Attributes</a>\n    feature turned on. The value is `null` in the response body without this feature turned on.\n",
                  "section": "Communication Settings"
                },
                {
                  "name": "clearingExistingCommunicationProfile",
                  "label": "Clearing Existing Communication Profile",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the existing communication profile at the subscription\nlevel. This field is mutually exclusive with the `communicationProfileId` field.\n",
                  "defaultValue": false,
                  "section": "Communication Settings"
                },
                {
                  "name": "invoiceGroupNumber",
                  "label": "Invoice Group Number",
                  "type": "string",
                  "required": false,
                  "description": "The number of the invoice group associated with the subscription.\n\nAfter enabling the Invoice Grouping feature, you can specify invoice group numbers to bill subscriptions and order line items based on specific criteria. For the same account, Zuora generates separate invoices for subscriptions and order line items, each identified by unique invoice group numbers. For more information, see [Invoice Grouping](https://knowledgecenter.zuora.com/Billing/Subscriptions/Invoice_Grouping).\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
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
                  "description": "The ID of the invoice template associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Template from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
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
                      "description": "The start date of the current term. You can change the term start date of a renewed subscription through a T&Cs order action. However, when changing it to an earlier date, this date must not be earlier than the term start date of the current term before this T&Cs.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "endDate",
                      "label": "End Date",
                      "type": "date",
                      "required": false,
                      "description": "The end date of the current term, in YYYY-MM-DD format.\n",
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
                  "description": "Container for payment gateway and payment method details of a payment. If you do not set this field, the payment method and payment gateway values cannot be set in the subscription.\n\n**Note:**\n  - If multiple order actions are specified, they will be applied in the same order they appear in the API payload.\n  - If one or more of these order actions include the `paymentProfile` element, the changes will be applied in sequence, and the result will be consistent with the last `paymentProfile` element.\n",
                  "fields": [
                    {
                      "name": "paymentGatewayId",
                      "label": "Payment Gateway Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the gateway instance that processes the payment.\n\nThis field remains unset, if you do not provide value.\n",
                      "section": "Payment Settings"
                    },
                    {
                      "name": "paymentMethodId",
                      "label": "Payment Method Id",
                      "type": "string",
                      "required": false,
                      "description": "The ID of the payment method.\n\nThis field remains unset, if you do not provide value.\n",
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
                  "description": "The name of the payment term associated with the subscription. For example, `Net 30`. The payment term determines the due dates of invoices.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Term from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
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
                      "description": "Duration of the renewal term in months, years, days, or weeks, depending on the value of the `periodType` field.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "periodType",
                      "label": "Period Type",
                      "type": "string",
                      "required": false,
                      "description": "Unit of time that the renewal term is measured in.\n",
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
                  "description": "The date when the subscription is scheduled to be canceled. The subscription is not canceled until the date specified in this field.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "scheduledSuspendDate",
                  "label": "Scheduled Suspend Date",
                  "type": "date",
                  "required": false,
                  "description": "The date when the subscription is scheduled to be suspended. The subscription is not suspended until the date specified in this field. \n",
                  "section": "Additional Fields"
                },
                {
                  "name": "scheduledResumeDate",
                  "label": "Scheduled Resume Date",
                  "type": "date",
                  "required": false,
                  "description": "The date when the subscription is scheduled to be resumed. The subscription is not resumed until the date specified in this field. \n",
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledCancelDate",
                  "label": "Clearing Scheduled Cancel Date",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the value of the `scheduledCancelDate` field. \n\n**Note**: Do not set this field and the `scheduledCancelDate` field simultaneously. \n",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledSuspendDate",
                  "label": "Clearing Scheduled Suspend Date",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the value of the `scheduledSuspendDate` field. \n\n**Note**: Do not set this field and the `scheduledSuspendDate` field simultaneously. \n",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "clearingScheduledResumeDate",
                  "label": "Clearing Scheduled Resume Date",
                  "type": "boolean",
                  "required": false,
                  "description": "Whether to clear the value of the `scheduledResumeDate` field.\n\n**Note**: Do not set this field and the `scheduledResumeDate` field simultaneously. \n",
                  "defaultValue": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "sequenceSetId",
                  "label": "Sequence Set Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sequence set associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Set from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "shipToContactId",
                  "label": "Ship To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the ship-to contact associated with the subscription.\n\n**Note**:\n  To access this field, you must have the <b>ShipToContactSupport</b> permission. If you want to enable this permission, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "section": "Contact Information"
                },
                {
                  "name": "soldToContactId",
                  "label": "Sold To Contact Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the sold-to contact associated with the subscription.\n\n**Note**: \n  - If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body and the value of this field is `null` in the response body. \n  - If you have the Flexible Billing Attributes feature enabled, and you do not specify this field in the request or you select **Default Contact from Account** for this field during subscription creation, the value of this field is automatically set to `null` in the response body.\n",
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
              "description": "Container for the contract effective, service activation, and customer acceptance dates of the order action. \n\nIf the service activation date is set as a required field in Default Subscription Settings, skipping this field in a `CreateSubscription` order action of your JSON request will result in a `Pending` order and a `Pending Activation` subscription.\n\nIf the customer acceptance date is set as a required field in Default Subscription Settings, skipping this field in a `CreateSubscription` order action of your JSON request will result in a `Pending` order and a `Pending Acceptance` subscription. If the service activation date field is at the same time required and skipped (or set as null), it will be a `Pending Activation` subscription.\n",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": false,
                  "description": "Name of the trigger date of the order action.\n",
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
                  "description": "Trigger date in YYYY-MM-DD format.\n",
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
              "description": "Type of order action.\n\nUnless the type of order action is `RenewSubscription`, you must use the corresponding field to provide information about the order action. For example, if the type of order action is `AddProduct`, you must set the `addProduct` field.\n\nZuora returns an error if you set a field that corresponds to a different type of order action. For example, if the type of order action is `AddProduct`, Zuora returns an error if you set the `updateProduct` field.\n\n**Note**: The change plan type of order action is supported for the  <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature. However, it is currently not supported for the <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> feature. When Billing - Revenue Integration is enabled, the change plan type of order action will no longer be applicable in Zuora Billing.\n",
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
              "description": "Information about an order action of type `UpdateProduct`.\n",
              "fields": [
                {
                  "name": "chargeUpdates",
                  "label": "Charge Updates",
                  "type": "array",
                  "required": false,
                  "description": "Array of the JSON objects containing the information for a charge update in the `updateProduct` type of order action.\n\nWhen previewing an `updateProduct` order action, either the `chargeNumber` or `uniqueToken` field is required to specify the charge to update.\n",
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
                          "description": "**Note**: This field is not supported in one time charges.\n",
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
                      "description": "The number of the charge to be updated. The value of this field is inherited from the `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeNumber` field.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "Container for custom fields of a Rate Plan Charge object.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "description",
                      "label": "Description",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "effectiveDate",
                      "label": "Effective Date",
                      "type": "object",
                      "required": false,
                      "description": "Specifies when a charge becomes active.\n",
                      "fields": [
                        {
                          "name": "specificTriggerDate",
                          "label": "Specific Trigger Date",
                          "type": "date",
                          "required": false,
                          "description": "Date in YYYY-MM-DD format. Only applicable if the value of the `triggerEvent` field is `SpecificDate`. \n\nWhile this field is applicable, if this field is not set, your `CreateSubscription` order action creates a `Pending` order and a `Pending Acceptance` subscription. If at the same time the service activation date is required and not set, a `Pending Activation` subscription is created.\n",
                          "section": "Additional Fields"
                        },
                        {
                          "name": "triggerEvent",
                          "label": "Trigger Event",
                          "type": "string",
                          "required": false,
                          "description": "Condition for the charge to become active.\n\nIf the value of this field is `SpecificDate`, use the `specificTriggerDate` field to specify the date when the charge becomes active.\n",
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
                      "description": "The estimated start date of the pending charge in an active subscription.\n\nThe value of this field must be a date within the subscription term. The system will then automatically calculate the estimated end date for the pending charge. The estimated start and end dates are used to manage the estimated charge duration and forecast the revenue for the pending charge.\n\n**Note:** This field is available only when the Pending Subscription Processing feature is turned on.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "negotiatedPriceTable",
                      "label": "Negotiated Price Table",
                      "type": "array",
                      "required": false,
                      "description": "Array of negotiated price table information. The rate card entries provided in the array will override the existing rate card entries in the standard price table to form a negotiated price table that will be    \nused during pricing evaluation.\n\n\n**Note:** To enable the Negotiated Price Table feature, submit a request to <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>. \n",
                      "itemType": "object",
                      "itemFields": [
                        {
                          "name": "items",
                          "label": "Items",
                          "type": "object",
                          "required": false,
                          "description": "The rate card entry object.\n\n\n  **Note:** For more information, refer to the rate card definition in the product catalog.",
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
                      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nThe number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number (>0).      \n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "pricingAttributes",
                      "label": "Pricing Attributes",
                      "type": "object",
                      "required": false,
                      "description": "Container for pricing attribute and value that provide additional context for dynamic pricing. The pricing attribute values included in the array will update the existing values. For the pricing attribute mapped to a Zuora object field, Zuora will retrieve the value automatically, you don’t need to pass its value explicitly. If you pass a value that doesn’t match the actual value of the Zuora object, an error will be returned.\nNote that for any pricing attribute mapped to the field of Zuora object Usage, because its value is only determined when the usage record arrives, you can’t provide a value via Orders API payload and Zuora will not retrieve its value automatically.\n\n\n\n**Note:** To enable Dynamic Pricing, submit a request to <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.              \n",
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
                                  "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`.\n\nThis field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "customFieldTotalAmount",
                                  "label": "Custom Field Total Amount",
                                  "type": "string",
                                  "required": false,
                                  "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. \n\nThis field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "formula",
                                  "label": "Formula",
                                  "type": "string",
                                  "required": false,
                                  "description": "The pricing formula to calculate actual rating amount.\n\nThis field is only available for charges that use the Multi-Attribute Pricing charge model.\n",
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
                              "description": "Number of units purchased. This field is used if the Multi-Attribute Pricing formula uses the `quantity()` function.\n\nThis field is only available for one-time and recurring charges that use the Multi-Attribute Pricing charge model.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "tiers",
                              "label": "Tiers",
                              "type": "array",
                              "required": false,
                              "description": "List of cumulative pricing tiers in the charge.\n\n**Note**: When you override the tiers of a usage-based charge using High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                              "itemType": "object",
                              "itemFields": [
                                {
                                  "name": "endingUnit",
                                  "label": "Ending Unit",
                                  "type": "number",
                                  "required": false,
                                  "description": "Limit on the number of units for which the tier is effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                  "description": "Number of units at which the tier becomes effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.\n",
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
                              "description": "Specifies which type of charge the discount charge applies to.\n",
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
                              "description": "Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.\n",
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
                              "description": "The amount of the discount as a percentage. This field is only used for percentage discounts.\n",
                              "section": "Additional Fields"
                            },
                            {
                              "name": "priceChangeOption",
                              "label": "Price Change Option",
                              "type": "string",
                              "required": false,
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
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
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
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
                              "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
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
                                  "description": "Limit on the number of units for which the tier is effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                  "description": "Number of units at which the tier becomes effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.\n",
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
                              "description": "Specifies how Zuora changes the price of the charge each time the subscription renews.\n\nIf the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.\n",
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
                              "description": "Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.\n",
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
                                  "description": "Limit on the number of units for which the tier is effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "originalListPrice",
                                  "label": "Original List Price",
                                  "type": "number",
                                  "required": false,
                                  "description": "The original list price is the price of a product or service at which it is listed for sale by a manufacturer or retailer.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "price",
                                  "label": "Price",
                                  "type": "number",
                                  "required": true,
                                  "description": "Price or per-unit price of the tier, depending on the value of the `priceFormat` field.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "priceFormat",
                                  "label": "Price Format",
                                  "type": "string",
                                  "required": true,
                                  "description": "Specifies whether the tier has a fixed price or a per-unit price.\n",
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
                                  "description": "Number of units at which the tier becomes effective.\n",
                                  "section": "Additional Fields"
                                },
                                {
                                  "name": "tier",
                                  "label": "Tier",
                                  "type": "number",
                                  "required": true,
                                  "description": "Index of the tier in the charge.\n",
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
                      "description": "ID of a product rate plan charge for this subscription. When `isAddingSubsetCharges` is set to true, the product rate charge specified by `productRatePlanChargeId` is added to the existing rate plan specified by `ratePlanId`.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "productRatePlanChargeNumber",
                      "label": "Product Rate Plan Charge Number",
                      "type": "string",
                      "required": false,
                      "description": "Number of a product rate plan charge for this subscription. When `isAddingSubsetCharges` is set to true, the product rate charge specified by `productRatePlanChargeNumber` is added to the existing rate plan specified by `ratePlanId`.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "uniqueToken",
                      "label": "Unique Token",
                      "type": "string",
                      "required": false,
                      "description": "A unique string to represent the rate plan charge in the order. The unique token is used to perform multiple actions against a newly added rate plan charge. For example, if you want to add and update a product in the same order, assign a unique token to the newly added rate plan charge and use that token in future order actions.\n",
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
                  "description": "Specifies whether all features in the rate plan will be cleared.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "customFields",
                  "label": "Custom Fields",
                  "type": "object",
                  "required": false,
                  "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "isAddingSubsetCharges",
                  "label": "Is Adding Subset Charges",
                  "type": "boolean",
                  "required": false,
                  "description": "Specifies whether to add a subset of charges to the subscription.\n\n\n**Note:** To access this field for adding a subset of charges, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanNumber",
                  "label": "Product Rate Plan Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate plan for this subscription.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "ratePlanId",
                  "label": "Rate Plan Id",
                  "type": "string",
                  "required": false,
                  "description": "The id of the rate plan to be updated. It can be the latest version or any history version id.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "specificUpdateDate",
                  "label": "Specific Update Date",
                  "type": "date",
                  "required": false,
                  "description": "The specific date when the Update Product order action takes effect.  This field allows you to update a charge before a future-dated Update Product order action on the subscription. The format of the date is yyyy-mm-dd.\n\n**Note**: After you use this option, the charge's `TriggerEvent` field value will be changed to `SpecificDate`. \n\nSee [Update a Product on Subscription with Future-dated Updates](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Update_a_Product_in_a_Subscription/Update_a_Product_on_Subscription_with_Future-dated_Updates) for more information about this feature.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "subscriptionProductFeatures",
                  "label": "Subscription Product Features",
                  "type": "array",
                  "required": false,
                  "description": "List of features associated with the rate plan.\nThe system compares the `subscriptionProductFeatures` and `featureId` fields in the request with the counterpart fields in a rate plan. The comparison results are as follows:\n* If there is no `subscriptionProductFeatures` field or the field is empty, features in the rate plan remain unchanged. But if the `clearingExistingFeatures` field is additionally set to true, all features in the rate plan are cleared.\n* If the `subscriptionProductFeatures` field contains the `featureId` nested fields, as well as the optional `description` and `customFields` nested fields, the features indicated by the featureId nested fields in the request overwrite all features in the rate plan.\n",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "customFields",
                      "label": "Custom Fields",
                      "type": "object",
                      "required": false,
                      "description": "A container for custom fields of the feature.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "description",
                      "label": "Description",
                      "type": "string",
                      "required": false,
                      "description": "A description of the feature.",
                      "maxLength": 500,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "featureId",
                      "label": "Feature Id",
                      "type": "string",
                      "required": true,
                      "description": "Internal identifier of the feature in the product catalog.\n",
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
                  "description": "Number of a rate plan for this subscription.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "uniqueToken",
                  "label": "Unique Token",
                  "type": "string",
                  "required": false,
                  "description": "A unique string to represent the rate plan in the order. The unique token is used to perform multiple actions against a newly added rate plan. For example, if you want to add and update a product in the same order, assign a unique token to the newly added rate plan and use that token in future order actions.\n",
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
          "description": "The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.\n",
          "fields": [
            {
              "name": "OpportunityCloseDate__QT",
              "label": "Opportunity Close Date Q T",
              "type": "string",
              "required": false,
              "description": "The closing date of the Opportunity.\n\nThis field is used in Zuora Reporting Data Sources to report on Subscription metrics.\n\nIf the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
              "section": "Additional Fields"
            },
            {
              "name": "OpportunityName__QT",
              "label": "Opportunity Name Q T",
              "type": "string",
              "required": false,
              "description": "The unique identifier of the Opportunity. \n\nThis field is used in the Zuora Reporting Data Sources to report on Subscription metrics.\n\nIf the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n\n**Character limit**: 100\n",
              "section": "Account Settings"
            },
            {
              "name": "QuoteBusinessType__QT",
              "label": "Quote Business Type Q T",
              "type": "string",
              "required": false,
              "description": "The specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn.\n\nThis field is used in the Zuora Reporting Data Sources to report on Subscription metrics.\n\nIf the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n\n**Character limit**: 32\n",
              "section": "Additional Fields"
            },
            {
              "name": "QuoteNumber__QT",
              "label": "Quote Number Q T",
              "type": "string",
              "required": false,
              "description": "The unique identifier of the Quote.\n\nThis field is used in the Zuora Reporting Data Sources to report on Subscription metrics.\n\nIf the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n\n**Character limit**: 32\n",
              "section": "Account Settings"
            },
            {
              "name": "QuoteType__QT",
              "label": "Quote Type Q T",
              "type": "string",
              "required": false,
              "description": "The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel.\n\nThis field is used in the Zuora Reporting Data Sources to report on Subscription metrics.\n\nIf the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n\n**Character limit**: 32\n",
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
          "description": "Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.\n",
          "fields": [
            {
              "name": "charges",
              "label": "Charges",
              "type": "array",
              "required": false,
              "description": "Container for the rate plan charges that are considered as part of the ramp deal.\n\n* If this field is not specified, all the one-time and recurring regular charges of the new subscription are automatically considered as part of the ramp deal.\n* If this field is specified, either 'chargeNumber' or 'uniqueToken' must be specified.\n",
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
                  "description": "Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora.\n",
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
              "description": "Whether to remove the ramp definition from the new subscription. If you want to remove the ramp definition, this field is the only required field for the `ramp` object.  \n",
              "section": "Additional Fields"
            },
            {
              "name": "description",
              "label": "Description",
              "type": "string",
              "required": false,
              "description": "The short description of the ramp.",
              "section": "Additional Fields"
            },
            {
              "name": "intervals",
              "label": "Intervals",
              "type": "array",
              "required": false,
              "description": "Container for the intervals that the ramp is split into in its timeline. \n\nIt is required when you want to create or update the ramp definition. The ramp intervals cannot have any overlap or gap between each other.\n",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "description",
                  "label": "Description",
                  "type": "string",
                  "required": false,
                  "description": "The short description of the interval.",
                  "section": "Additional Fields"
                },
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
          "description": "Leave this field empty to represent new subscription creation, or specify a subscription number to update an existing subscription.\n",
          "section": "Account Settings"
        }
      ],
      "section": "Subscription Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
