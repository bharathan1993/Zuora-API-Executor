import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentmethodsEndpoint: ApiEndpoint = {
  "id": "post-paymentmethods",
  "name": "Create a payment method",
  "description": "You can use this operation to create either a payment method associated",
  "method": "POST",
  "path": "/v1/payment-methods",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
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
      "name": "currencyCode",
      "label": "Currency Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
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
      "name": "businessIdentificationCode",
      "label": "Business Identification Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
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
      "name": "preapprovalKey",
      "label": "Preapproval Key",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "amazonPayToken",
      "label": "Amazon Pay Token",
      "type": "string",
      "required": false,
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
      "name": "identityNumber",
      "label": "Identity Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
      "name": "email",
      "label": "Email",
      "type": "email",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "authGateway",
      "label": "Auth Gateway",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
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
