/**
 * Auto-generated from OpenAPI specification
 * Total endpoints: 712
 */
import type { ApiEndpoint } from '../../types/api.js';

import { post_accountEndpoint } from './accounts/post-account.js';
import { delete_accountEndpoint } from './accounts/delete-account.js';
import { get_accountEndpoint } from './accounts/get-account.js';
import { put_accountEndpoint } from './accounts/put-account.js';
import { get_acountpaymentmethodsEndpoint } from './accounts/get-acountpaymentmethods.js';
import { getaccountpaymentmethodcascadingEndpoint } from './accounts/getaccountpaymentmethodcascading.js';
import { putaccountpaymentmethodcascadingEndpoint } from './accounts/putaccountpaymentmethodcascading.js';
import { get_acountdefaultpaymentmethodEndpoint } from './accounts/get-acountdefaultpaymentmethod.js';
import { get_accountsummaryEndpoint } from './accounts/get-accountsummary.js';
import { get_subscriptionsbyaccountEndpoint } from './accounts/get-subscriptionsbyaccount.js';
import { post_billingdocumentfilesdeletionjobEndpoint } from './accounts/post-billingdocumentfilesdeletionjob.js';
import { get_billingdocumentfilesdeletionjobEndpoint } from './accounts/get-billingdocumentfilesdeletionjob.js';
import { post_generatebillingdocumentsEndpoint } from './accounts/post-generatebillingdocuments.js';
import { queryaccountsEndpoint } from './accounts/queryaccounts.js';
import { queryaccountbykeyEndpoint } from './accounts/queryaccountbykey.js';
import { get_ordersbysubscriptionownerEndpoint } from './subscriptions/get-ordersbysubscriptionowner.js';
import { get_ordersbysubscriptionnumberEndpoint } from './subscriptions/get-ordersbysubscriptionnumber.js';
import { put_updatesubscriptioncustomfieldsEndpoint } from './subscriptions/put-updatesubscriptioncustomfields.js';
import { get_pendingordersbysubscriptionnumberEndpoint } from './subscriptions/get-pendingordersbysubscriptionnumber.js';
import { get_rampsbysubscriptionkeyEndpoint } from './subscriptions/get-rampsbysubscriptionkey.js';
import { get_rampmetricsbysubscriptionkeyEndpoint } from './subscriptions/get-rampmetricsbysubscriptionkey.js';
import { post_previewsubscriptionEndpoint } from './subscriptions/post-previewsubscription.js';
import { previewexistingsubscriptionEndpoint } from './subscriptions/previewexistingsubscription.js';
import { post_subscriptionEndpoint } from './subscriptions/post-subscription.js';
import { get_subscriptionsbykeyEndpoint } from './subscriptions/get-subscriptionsbykey.js';
import { put_subscriptionEndpoint } from './subscriptions/put-subscription.js';
import { get_subscriptionsbykeyandversionEndpoint } from './subscriptions/get-subscriptionsbykeyandversion.js';
import { put_renewsubscriptionEndpoint } from './subscriptions/put-renewsubscription.js';
import { put_cancelsubscriptionEndpoint } from './subscriptions/put-cancelsubscription.js';
import { put_resumesubscriptionEndpoint } from './subscriptions/put-resumesubscription.js';
import { put_suspendsubscriptionEndpoint } from './subscriptions/put-suspendsubscription.js';
import { put_deletesubscriptionEndpoint } from './subscriptions/put-deletesubscription.js';
import { put_updatesubscriptioncustomfieldsofaspecifiedversionEndpoint } from './subscriptions/put-updatesubscriptioncustomfieldsofaspecifiedversion.js';
import { getmetricsbysubscriptionnumbersEndpoint } from './subscriptions/getmetricsbysubscriptionnumbers.js';
import { getsubscriptionchangelogsbysubscriptionnumberEndpoint } from './subscriptions/getsubscriptionchangelogsbysubscriptionnumber.js';
import { getsubscriptionchangelogsbyordernumberEndpoint } from './subscriptions/getsubscriptionchangelogsbyordernumber.js';
import { getsubscriptionchangelogbyversionEndpoint } from './subscriptions/getsubscriptionchangelogbyversion.js';
import { querysubscriptionsEndpoint } from './subscriptions/querysubscriptions.js';
import { querysubscriptionbykeyEndpoint } from './subscriptions/querysubscriptionbykey.js';
import { post_previeworderEndpoint } from './orders/post-previeworder.js';
import { post_previeworderasynchronouslyEndpoint } from './orders/post-previeworderasynchronously.js';
import { get_allordersEndpoint } from './orders/get-allorders.js';
import { post_orderEndpoint } from './orders/post-order.js';
import { post_createorderasynchronouslyEndpoint } from './orders/post-createorderasynchronously.js';
import { delete_orderEndpoint } from './orders/delete-order.js';
import { get_orderEndpoint } from './orders/get-order.js';
import { put_orderEndpoint } from './orders/put-order.js';
import { deleteorderasynchronouslyEndpoint } from './orders/deleteorderasynchronously.js';
import { get_ordersbyinvoiceownerEndpoint } from './orders/get-ordersbyinvoiceowner.js';
import { put_updateordercustomfieldsEndpoint } from './orders/put-updateordercustomfields.js';
import { put_ordertriggerdatesEndpoint } from './orders/put-ordertriggerdates.js';
import { put_orderactivateEndpoint } from './orders/put-orderactivate.js';
import { put_ordercancelEndpoint } from './orders/put-ordercancel.js';
import { revertorderEndpoint } from './orders/revertorder.js';
import { put_orderactionsEndpoint } from './orders/put-orderactions.js';
import { get_orderlineitemEndpoint } from './orders/get-orderlineitem.js';
import { put_orderlineitemEndpoint } from './orders/put-orderlineitem.js';
import { post_orderlineitemsEndpoint } from './orders/post-orderlineitems.js';
import { get_rampmetricsbyordernumberEndpoint } from './orders/get-rampmetricsbyordernumber.js';
import { queryorderactionsEndpoint } from './orders/queryorderactions.js';
import { queryorderactionbykeyEndpoint } from './orders/queryorderactionbykey.js';
import { queryorderlineitemsEndpoint } from './orders/queryorderlineitems.js';
import { queryorderlineitembykeyEndpoint } from './orders/queryorderlineitembykey.js';
import { queryordersEndpoint } from './orders/queryorders.js';
import { queryordersbykeyEndpoint } from './orders/queryordersbykey.js';
import { get_usage_rate_detail_by_invoice_itemEndpoint } from './invoices/get-usage-rate-detail-by-invoice-item.js';
import { post_standaloneinvoiceEndpoint } from './invoices/post-standaloneinvoice.js';
import { put_batchupdateinvoicesEndpoint } from './invoices/put-batchupdateinvoices.js';
import { post_standaloneinvoicesEndpoint } from './invoices/post-standaloneinvoices.js';
import { post_postinvoicesEndpoint } from './invoices/post-postinvoices.js';
import { getinvoicepdfstatusEndpoint } from './invoices/getinvoicepdfstatus.js';
import { delete_deleteinvoiceEndpoint } from './invoices/delete-deleteinvoice.js';
import { get_getinvoiceEndpoint } from './invoices/get-getinvoice.js';
import { put_updateinvoiceEndpoint } from './invoices/put-updateinvoice.js';
import { get_invoiceapplicationpartsEndpoint } from './invoices/get-invoiceapplicationparts.js';
import { post_emailinvoiceEndpoint } from './invoices/post-emailinvoice.js';
import { get_invoicefilesEndpoint } from './invoices/get-invoicefiles.js';
import { post_uploadfileforinvoiceEndpoint } from './invoices/post-uploadfileforinvoice.js';
import { get_invoiceitemsEndpoint } from './invoices/get-invoiceitems.js';
import { get_taxationitemsofinvoiceitemEndpoint } from './invoices/get-taxationitemsofinvoiceitem.js';
import { put_reverseinvoiceEndpoint } from './invoices/put-reverseinvoice.js';
import { post_inv_taxationitemsEndpoint } from './invoices/post-inv-taxationitems.js';
import { put_writeoffinvoiceEndpoint } from './invoices/put-writeoffinvoice.js';
import { post_creditmemofrominvoiceEndpoint } from './invoices/post-creditmemofrominvoice.js';
import { post_debitmemofrominvoiceEndpoint } from './invoices/post-debitmemofrominvoice.js';
import { geteinvoicemandateoninvoiceEndpoint } from './invoices/geteinvoicemandateoninvoice.js';
import { downloadeinvoiceofspecifiedformatEndpoint } from './invoices/downloadeinvoiceofspecifiedformat.js';
import { canceleinvoicebyinvoicekeyEndpoint } from './invoices/canceleinvoicebyinvoicekey.js';
import { updateinvoiceinvokesyncstatusEndpoint } from './invoices/updateinvoiceinvokesyncstatus.js';
import { put_generationeinvoicegenerationforinvoicesEndpoint } from './invoices/put-generationeinvoicegenerationforinvoices.js';
import { post_createinvoicescheduleEndpoint } from './invoices/post-createinvoiceschedule.js';
import { delete_invoicescheduleEndpoint } from './invoices/delete-invoiceschedule.js';
import { get_invoicescheduleEndpoint } from './invoices/get-invoiceschedule.js';
import { put_updateinvoicescheduleEndpoint } from './invoices/put-updateinvoiceschedule.js';
import { post_executeinvoicescheduleEndpoint } from './invoices/post-executeinvoiceschedule.js';
import { put_pauseinvoicescheduleEndpoint } from './invoices/put-pauseinvoiceschedule.js';
import { put_resumeinvoicescheduleEndpoint } from './invoices/put-resumeinvoiceschedule.js';
import { detachchargesfrominvoicescheduleEndpoint } from './invoices/detachchargesfrominvoiceschedule.js';
import { attachchargestoinvoicescheduleEndpoint } from './invoices/attachchargestoinvoiceschedule.js';
import { post_transactioninvoicepaymentEndpoint } from './invoices/post-transactioninvoicepayment.js';
import { getinvoicecyclehistoryEndpoint } from './invoices/getinvoicecyclehistory.js';
import { queryinvoicesEndpoint } from './invoices/queryinvoices.js';
import { queryinvoicebykeyEndpoint } from './invoices/queryinvoicebykey.js';
import { queryinvoiceitemsEndpoint } from './invoices/queryinvoiceitems.js';
import { queryinvoiceitembykeyEndpoint } from './invoices/queryinvoiceitembykey.js';
import { queryinvoiceschedulesEndpoint } from './invoices/queryinvoiceschedules.js';
import { queryinvoiceschedulebykeyEndpoint } from './invoices/queryinvoiceschedulebykey.js';
import { post_paymentmethodsEndpoint } from './payments/post-paymentmethods.js';
import { post_paymentmethodsdecryptionEndpoint } from './payments/post-paymentmethodsdecryption.js';
import { delete_paymentmethodsEndpoint } from './payments/delete-paymentmethods.js';
import { get_paymentmethodEndpoint } from './payments/get-paymentmethod.js';
import { put_paymentmethodEndpoint } from './payments/put-paymentmethod.js';
import { put_verifypaymentmethodsEndpoint } from './payments/put-verifypaymentmethods.js';
import { put_scrubpaymentmethodsEndpoint } from './payments/put-scrubpaymentmethods.js';
import { getbankaccountbalanceEndpoint } from './payments/getbankaccountbalance.js';
import { get_storedcredentialprofilesEndpoint } from './payments/get-storedcredentialprofiles.js';
import { post_createstoredcredentialprofileEndpoint } from './payments/post-createstoredcredentialprofile.js';
import { post_cancelstoredcredentialprofileEndpoint } from './payments/post-cancelstoredcredentialprofile.js';
import { post_expirestoredcredentialprofileEndpoint } from './payments/post-expirestoredcredentialprofile.js';
import { get_listapplepaydomainsEndpoint } from './payments/get-listapplepaydomains.js';
import { post_registerapplepaydomainEndpoint } from './payments/post-registerapplepaydomain.js';
import { delete_unregisterapplepaydomainEndpoint } from './payments/delete-unregisterapplepaydomain.js';
import { object_getpaymentmethodsnapshotEndpoint } from './payments/object-getpaymentmethodsnapshot.js';
import { object_getpaymentmethodtransactionlogEndpoint } from './payments/object-getpaymentmethodtransactionlog.js';
import { get_paymentmethodupdaterinstancesEndpoint } from './payments/get-paymentmethodupdaterinstances.js';
import { post_paymentmethodupdaterbatchEndpoint } from './payments/post-paymentmethodupdaterbatch.js';
import { post_createauthorizationEndpoint } from './payments/post-createauthorization.js';
import { post_cancelauthorizationEndpoint } from './payments/post-cancelauthorization.js';
import { get_paymentgatewaysEndpoint } from './payments/get-paymentgateways.js';
import { triggerpredebitnotificationEndpoint } from './payments/triggerpredebitnotification.js';
import { post_reversepaymentEndpoint } from './payments/post-reversepayment.js';
import { post_rejectpaymentEndpoint } from './payments/post-rejectpayment.js';
import { post_settlepaymentEndpoint } from './payments/post-settlepayment.js';
import { get_retrieveallpaymentsEndpoint } from './payments/get-retrieveallpayments.js';
import { post_createpaymentEndpoint } from './payments/post-createpayment.js';
import { put_updatepaymentEndpoint } from './payments/put-updatepayment.js';
import { delete_paymentEndpoint } from './payments/delete-payment.js';
import { get_paymentEndpoint } from './payments/get-payment.js';
import { put_applypaymentEndpoint } from './payments/put-applypayment.js';
import { put_cancelpaymentEndpoint } from './payments/put-cancelpayment.js';
import { get_paymentpartsEndpoint } from './payments/get-paymentparts.js';
import { get_paymentpartEndpoint } from './payments/get-paymentpart.js';
import { get_paymentitempartsEndpoint } from './payments/get-paymentitemparts.js';
import { get_paymentitempartEndpoint } from './payments/get-paymentitempart.js';
import { post_refundpaymentEndpoint } from './payments/post-refundpayment.js';
import { post_refundpaymentwithautounapplyEndpoint } from './payments/post-refundpaymentwithautounapply.js';
import { put_transferpaymentEndpoint } from './payments/put-transferpayment.js';
import { put_unapplypaymentEndpoint } from './payments/put-unapplypayment.js';
import { object_getpaymenttransactionlogEndpoint } from './payments/object-getpaymenttransactionlog.js';
import { get_paymentrunsEndpoint } from './payments/get-paymentruns.js';
import { post_paymentrunEndpoint } from './payments/post-paymentrun.js';
import { delete_paymentrunEndpoint } from './payments/delete-paymentrun.js';
import { get_paymentrunEndpoint } from './payments/get-paymentrun.js';
import { put_paymentrunEndpoint } from './payments/put-paymentrun.js';
import { get_paymentrundataEndpoint } from './payments/get-paymentrundata.js';
import { get_paymentrunsummaryEndpoint } from './payments/get-paymentrunsummary.js';
import { post_retrypaymentscheduleitemEndpoint } from './payments/post-retrypaymentscheduleitem.js';
import { put_cancelpaymentscheduleitemEndpoint } from './payments/put-cancelpaymentscheduleitem.js';
import { put_skippaymentscheduleitemEndpoint } from './payments/put-skippaymentscheduleitem.js';
import { get_paymentscheduleitemEndpoint } from './payments/get-paymentscheduleitem.js';
import { put_paymentscheduleitemEndpoint } from './payments/put-paymentscheduleitem.js';
import { deletepaymentscheduleitemEndpoint } from './payments/deletepaymentscheduleitem.js';
import { get_paymentschedulesEndpoint } from './payments/get-paymentschedules.js';
import { post_paymentscheduleEndpoint } from './payments/post-paymentschedule.js';
import { post_paymentschedulesEndpoint } from './payments/post-paymentschedules.js';
import { get_paymentschedulestatisticEndpoint } from './payments/get-paymentschedulestatistic.js';
import { get_paymentscheduleEndpoint } from './payments/get-paymentschedule.js';
import { put_paymentscheduleEndpoint } from './payments/put-paymentschedule.js';
import { deletepaymentscheduleEndpoint } from './payments/deletepaymentschedule.js';
import { put_cancelpaymentscheduleEndpoint } from './payments/put-cancelpaymentschedule.js';
import { post_additemstocustompaymentscheduleEndpoint } from './payments/post-additemstocustompaymentschedule.js';
import { put_paymentscheduleupdatepreviewEndpoint } from './payments/put-paymentscheduleupdatepreview.js';
import { upsertpaymentprofilesEndpoint } from './payments/upsertpaymentprofiles.js';
import { getactiveinvoicecycleEndpoint } from './payments/getactiveinvoicecycle.js';
import { getactivedebitmemocycleEndpoint } from './payments/getactivedebitmemocycle.js';
import { getactiveaccountcycleEndpoint } from './payments/getactiveaccountcycle.js';
import { getdebitmemocyclehistoryEndpoint } from './payments/getdebitmemocyclehistory.js';
import { getaccountcyclehistoryEndpoint } from './payments/getaccountcyclehistory.js';
import { putexecuteinvoicepaymentEndpoint } from './payments/putexecuteinvoicepayment.js';
import { putexecutedebitmemopaymentEndpoint } from './payments/putexecutedebitmemopayment.js';
import { putexecuteaccountpaymentsEndpoint } from './payments/putexecuteaccountpayments.js';
import { postexecutepaymentsEndpoint } from './payments/postexecutepayments.js';
import { putremoveinovicefromcycleEndpoint } from './payments/putremoveinovicefromcycle.js';
import { putremovedebitmemofromcycleEndpoint } from './payments/putremovedebitmemofromcycle.js';
import { putremoveaccountfromcycleEndpoint } from './payments/putremoveaccountfromcycle.js';
import { postsubmitpaymenttocycleEndpoint } from './payments/postsubmitpaymenttocycle.js';
import { get_systemhealthpaymentvolumesummaryEndpoint } from './payments/get-systemhealthpaymentvolumesummary.js';
import { getsystemhealthpaymentrecordsEndpoint } from './payments/getsystemhealthpaymentrecords.js';
import { querypaymentsEndpoint } from './payments/querypayments.js';
import { querypaymentbykeyEndpoint } from './payments/querypaymentbykey.js';
import { querypaymentapplicationsEndpoint } from './payments/querypaymentapplications.js';
import { querypaymentapplicationbykeyEndpoint } from './payments/querypaymentapplicationbykey.js';
import { querypaymentmethodsEndpoint } from './payments/querypaymentmethods.js';
import { querypaymentmethodbykeyEndpoint } from './payments/querypaymentmethodbykey.js';
import { querypaymentmethodsnapshotsEndpoint } from './payments/querypaymentmethodsnapshots.js';
import { querypaymentmethodsnapshotbykeyEndpoint } from './payments/querypaymentmethodsnapshotbykey.js';
import { querypaymentrunsEndpoint } from './payments/querypaymentruns.js';
import { querypaymentrunbykeyEndpoint } from './payments/querypaymentrunbykey.js';
import { querypaymentschedulesEndpoint } from './payments/querypaymentschedules.js';
import { querypaymentschedulebykeyEndpoint } from './payments/querypaymentschedulebykey.js';
import { querypaymentscheduleitemsEndpoint } from './payments/querypaymentscheduleitems.js';
import { querypaymentscheduleitembykeyEndpoint } from './payments/querypaymentscheduleitembykey.js';
import { object_postproductEndpoint } from './products/object-postproduct.js';
import { object_getproductEndpoint } from './products/object-getproduct.js';
import { object_putproductEndpoint } from './products/object-putproduct.js';
import { object_deleteproductEndpoint } from './products/object-deleteproduct.js';
import { get_catalogEndpoint } from './products/get-catalog.js';
import { get_productEndpoint } from './products/get-product.js';
import { post_createcataloggroupEndpoint } from './products/post-createcataloggroup.js';
import { get_listallcataloggroupsEndpoint } from './products/get-listallcataloggroups.js';
import { get_retrievecataloggroupEndpoint } from './products/get-retrievecataloggroup.js';
import { put_updatecataloggroupEndpoint } from './products/put-updatecataloggroup.js';
import { delete_cataloggroupEndpoint } from './products/delete-cataloggroup.js';
import { get_productrateplansEndpoint } from './products/get-productrateplans.js';
import { get_productrateplanEndpoint } from './products/get-productrateplan.js';
import { get_productrateplansbyexternalidEndpoint } from './products/get-productrateplansbyexternalid.js';
import { object_postproductrateplanEndpoint } from './products/object-postproductrateplan.js';
import { object_getproductrateplanEndpoint } from './products/object-getproductrateplan.js';
import { object_putproductrateplanEndpoint } from './products/object-putproductrateplan.js';
import { object_deleteproductrateplanEndpoint } from './products/object-deleteproductrateplan.js';
import { post_createproductrateplandefinitionEndpoint } from './products/post-createproductrateplandefinition.js';
import { get_retrieveproductrateplandefinitionsEndpoint } from './products/get-retrieveproductrateplandefinitions.js';
import { get_retrieveproductrateplandefinitionEndpoint } from './products/get-retrieveproductrateplandefinition.js';
import { delete_productrateplandefnitionEndpoint } from './products/delete-productrateplandefnition.js';
import { get_retrieveproductrateplanchargeEndpoint } from './products/get-retrieveproductrateplancharge.js';
import { object_postproductrateplanchargeEndpoint } from './products/object-postproductrateplancharge.js';
import { object_getproductrateplanchargeEndpoint } from './products/object-getproductrateplancharge.js';
import { object_putproductrateplanchargeEndpoint } from './products/object-putproductrateplancharge.js';
import { object_deleteproductrateplanchargeEndpoint } from './products/object-deleteproductrateplancharge.js';
import { post_createproductchargedefinitionEndpoint } from './products/post-createproductchargedefinition.js';
import { get_retrieveproductchargedefinitionsEndpoint } from './products/get-retrieveproductchargedefinitions.js';
import { post_createproductchargedefinitionbulkEndpoint } from './products/post-createproductchargedefinitionbulk.js';
import { put_updateproductchargedefinitionbulkEndpoint } from './products/put-updateproductchargedefinitionbulk.js';
import { get_retrieveproductchargedefinitionEndpoint } from './products/get-retrieveproductchargedefinition.js';
import { put_updateproductchargedefinitionEndpoint } from './products/put-updateproductchargedefinition.js';
import { delete_productchargedefnitionEndpoint } from './products/delete-productchargedefnition.js';
import { object_getproductrateplanchargetierEndpoint } from './products/object-getproductrateplanchargetier.js';
import { object_putproductrateplanchargetierEndpoint } from './products/object-putproductrateplanchargetier.js';
import { createproductEndpoint } from './products/createproduct.js';
import { updateproductEndpoint } from './products/updateproduct.js';
import { get_retrieveproductbykeyEndpoint } from './products/get-retrieveproductbykey.js';
import { querylegacyproductsEndpoint } from './products/querylegacyproducts.js';
import { queryproductsEndpoint } from './products/queryproducts.js';
import { queryproductbykeyEndpoint } from './products/queryproductbykey.js';
import { queryproductrateplansEndpoint } from './products/queryproductrateplans.js';
import { queryproductrateplanbykeyEndpoint } from './products/queryproductrateplanbykey.js';
import { queryproductrateplanchargesEndpoint } from './products/queryproductrateplancharges.js';
import { queryproductrateplanchargebykeyEndpoint } from './products/queryproductrateplanchargebykey.js';
import { queryproductrateplanchargetiersEndpoint } from './products/queryproductrateplanchargetiers.js';
import { queryproductrateplanchargetierbykeyEndpoint } from './products/queryproductrateplanchargetierbykey.js';
import { comparedeploytenantproductcatalogEndpoint } from './products/comparedeploytenantproductcatalog.js';
import { comparedeploytemplateproductcatalogEndpoint } from './products/comparedeploytemplateproductcatalog.js';
import { post_createcontactEndpoint } from './contacts/post-createcontact.js';
import { delete_contactEndpoint } from './contacts/delete-contact.js';
import { get_contactEndpoint } from './contacts/get-contact.js';
import { put_contactEndpoint } from './contacts/put-contact.js';
import { transfercontentEndpoint } from './contacts/transfercontent.js';
import { put_scrubcontactEndpoint } from './contacts/put-scrubcontact.js';
import { get_contactsnapshotEndpoint } from './contacts/get-contactsnapshot.js';
import { querycontactsEndpoint } from './contacts/querycontacts.js';
import { querycontactbykeyEndpoint } from './contacts/querycontactbykey.js';
import { querycontactsnapshotsEndpoint } from './contacts/querycontactsnapshots.js';
import { querycontactsnapshotbykeyEndpoint } from './contacts/querycontactsnapshotbykey.js';
import { get_creditmemosEndpoint } from './creditMemos/get-creditmemos.js';
import { post_creditmemofromprpcEndpoint } from './creditMemos/post-creditmemofromprpc.js';
import { post_createcreditmemosEndpoint } from './creditMemos/post-createcreditmemos.js';
import { put_updatecreditmemosEndpoint } from './creditMemos/put-updatecreditmemos.js';
import { get_creditmemopdfstatusEndpoint } from './creditMemos/get-creditmemopdfstatus.js';
import { get_taxationitemsofcreditmemoitemEndpoint } from './creditMemos/get-taxationitemsofcreditmemoitem.js';
import { put_writeoffcreditmemoEndpoint } from './creditMemos/put-writeoffcreditmemo.js';
import { delete_creditmemoEndpoint } from './creditMemos/delete-creditmemo.js';
import { get_creditmemoEndpoint } from './creditMemos/get-creditmemo.js';
import { put_updatecreditmemoEndpoint } from './creditMemos/put-updatecreditmemo.js';
import { put_applycreditmemoEndpoint } from './creditMemos/put-applycreditmemo.js';
import { put_cancelcreditmemoEndpoint } from './creditMemos/put-cancelcreditmemo.js';
import { post_emailcreditmemoEndpoint } from './creditMemos/post-emailcreditmemo.js';
import { post_uploadfileforcreditmemoEndpoint } from './creditMemos/post-uploadfileforcreditmemo.js';
import { get_creditmemofilesEndpoint } from './creditMemos/get-creditmemofiles.js';
import { get_creditmemoitemsEndpoint } from './creditMemos/get-creditmemoitems.js';
import { get_creditmemoitemEndpoint } from './creditMemos/get-creditmemoitem.js';
import { get_creditmemopartsEndpoint } from './creditMemos/get-creditmemoparts.js';
import { get_creditmemopartEndpoint } from './creditMemos/get-creditmemopart.js';
import { post_creditmemopdfEndpoint } from './creditMemos/post-creditmemopdf.js';
import { put_postcreditmemoEndpoint } from './creditMemos/put-postcreditmemo.js';
import { post_refundcreditmemoEndpoint } from './creditMemos/post-refundcreditmemo.js';
import { put_reversecreditmemoEndpoint } from './creditMemos/put-reversecreditmemo.js';
import { post_cm_taxationitemsEndpoint } from './creditMemos/post-cm-taxationitems.js';
import { put_unapplycreditmemoEndpoint } from './creditMemos/put-unapplycreditmemo.js';
import { put_unpostcreditmemoEndpoint } from './creditMemos/put-unpostcreditmemo.js';
import { getunapplycreditmemoasyncjobEndpoint } from './creditMemos/getunapplycreditmemoasyncjob.js';
import { getapplycreditmemoasyncjobEndpoint } from './creditMemos/getapplycreditmemoasyncjob.js';
import { applycreditmemoasyncEndpoint } from './creditMemos/applycreditmemoasync.js';
import { unapplycreditmemoasyncEndpoint } from './creditMemos/unapplycreditmemoasync.js';
import { geteinvoicecreditmemomandateEndpoint } from './creditMemos/geteinvoicecreditmemomandate.js';
import { downloadcreditmemoeinvoiceEndpoint } from './creditMemos/downloadcreditmemoeinvoice.js';
import { updatecreditmemoinvokesyncstatusEndpoint } from './creditMemos/updatecreditmemoinvokesyncstatus.js';
import { put_generateeinvoicefileforcreditmemoEndpoint } from './creditMemos/put-generateeinvoicefileforcreditmemo.js';
import { querycreditmemosEndpoint } from './creditMemos/querycreditmemos.js';
import { querycreditmemobykeyEndpoint } from './creditMemos/querycreditmemobykey.js';
import { querycreditmemoapplicationsEndpoint } from './creditMemos/querycreditmemoapplications.js';
import { querycreditmemoapplicationbykeyEndpoint } from './creditMemos/querycreditmemoapplicationbykey.js';
import { querycreditmemoitemsEndpoint } from './creditMemos/querycreditmemoitems.js';
import { querycreditmemoitembykeyEndpoint } from './creditMemos/querycreditmemoitembykey.js';
import { get_debitmemosEndpoint } from './debitMemos/get-debitmemos.js';
import { post_debitmemofromprpcEndpoint } from './debitMemos/post-debitmemofromprpc.js';
import { put_updatedebitmemosduedatesEndpoint } from './debitMemos/put-updatedebitmemosduedates.js';
import { post_createdebitmemosEndpoint } from './debitMemos/post-createdebitmemos.js';
import { put_updatedebitmemosEndpoint } from './debitMemos/put-updatedebitmemos.js';
import { get_debitmemopdfstatusEndpoint } from './debitMemos/get-debitmemopdfstatus.js';
import { get_debitmemoapplicationpartsEndpoint } from './debitMemos/get-debitmemoapplicationparts.js';
import { get_taxationitemsofdebitmemoitemEndpoint } from './debitMemos/get-taxationitemsofdebitmemoitem.js';
import { delete_debitmemoEndpoint } from './debitMemos/delete-debitmemo.js';
import { get_debitmemoEndpoint } from './debitMemos/get-debitmemo.js';
import { put_debitmemoEndpoint } from './debitMemos/put-debitmemo.js';
import { put_canceldebitmemoEndpoint } from './debitMemos/put-canceldebitmemo.js';
import { post_debitmemocollectEndpoint } from './debitMemos/post-debitmemocollect.js';
import { post_emaildebitmemoEndpoint } from './debitMemos/post-emaildebitmemo.js';
import { post_uploadfilefordebitmemoEndpoint } from './debitMemos/post-uploadfilefordebitmemo.js';
import { get_debitmemofilesEndpoint } from './debitMemos/get-debitmemofiles.js';
import { get_debitmemoitemsEndpoint } from './debitMemos/get-debitmemoitems.js';
import { get_debitmemoitemEndpoint } from './debitMemos/get-debitmemoitem.js';
import { post_debitmemopdfEndpoint } from './debitMemos/post-debitmemopdf.js';
import { put_postdebitmemoEndpoint } from './debitMemos/put-postdebitmemo.js';
import { post_dm_taxationitemsEndpoint } from './debitMemos/post-dm-taxationitems.js';
import { put_unpostdebitmemoEndpoint } from './debitMemos/put-unpostdebitmemo.js';
import { put_writeoffdebitmemoEndpoint } from './debitMemos/put-writeoffdebitmemo.js';
import { geteinvoicedebitmemomandateEndpoint } from './debitMemos/geteinvoicedebitmemomandate.js';
import { downloaddebitmemoeinvoiceEndpoint } from './debitMemos/downloaddebitmemoeinvoice.js';
import { updatedebitmemoinvokesyncstatusEndpoint } from './debitMemos/updatedebitmemoinvokesyncstatus.js';
import { put_generateeinvoicefilefordebitmemoEndpoint } from './debitMemos/put-generateeinvoicefilefordebitmemo.js';
import { querydebitmemosEndpoint } from './debitMemos/querydebitmemos.js';
import { querydebitmemobykeyEndpoint } from './debitMemos/querydebitmemobykey.js';
import { querydebitmemoitemsEndpoint } from './debitMemos/querydebitmemoitems.js';
import { querydebitmemoitembykeyEndpoint } from './debitMemos/querydebitmemoitembykey.js';
import { getalltestenvironmentsEndpoint } from './other/getalltestenvironments.js';
import { gettestenvironmentEndpoint } from './other/gettestenvironment.js';
import { createtestenvironmentjobEndpoint } from './other/createtestenvironmentjob.js';
import { getalljobsoftestenvironmentEndpoint } from './other/getalljobsoftestenvironment.js';
import { getjoboftestenvironmentEndpoint } from './other/getjoboftestenvironment.js';
import { performactionofjobEndpoint } from './other/performactionofjob.js';
import { createtestenvironmentnotificationEndpoint } from './other/createtestenvironmentnotification.js';
import { getallemailnotificationoftestenvEndpoint } from './other/getallemailnotificationoftestenv.js';
import { gettestenvironmentnotificationEndpoint } from './other/gettestenvironmentnotification.js';
import { updatetestenvironmentnotificationEndpoint } from './other/updatetestenvironmentnotification.js';
import { deletetestenvironmentnotificationEndpoint } from './other/deletetestenvironmentnotification.js';
import { createtokenEndpoint } from './other/createtoken.js';
import { put_revproaccountingcodesEndpoint } from './other/put-revproaccountingcodes.js';
import { createproductrateplanchargewithdynamicpricingEndpoint } from './other/createproductrateplanchargewithdynamicpricing.js';
import { updateproductrateplanchargewithdynamicpricingEndpoint } from './other/updateproductrateplanchargewithdynamicpricing.js';
import { queryproductrateplanchargewithdynamicpricingEndpoint } from './other/queryproductrateplanchargewithdynamicpricing.js';
import { createplanEndpoint } from './other/createplan.js';
import { updateproductrateplanEndpoint } from './other/updateproductrateplan.js';
import { querycommerceproductrateplansEndpoint } from './other/querycommerceproductrateplans.js';
import { querycommerceplanslistEndpoint } from './other/querycommerceplanslist.js';
import { updatetierEndpoint } from './other/updatetier.js';
import { querypurchaseoptionsbyprpidEndpoint } from './other/querypurchaseoptionsbyprpid.js';
import { post_signupEndpoint } from './other/post-signup.js';
import { get_jobstatusandresponseEndpoint } from './other/get-jobstatusandresponse.js';
import { create_fulfillmentEndpoint } from './other/create-fulfillment.js';
import { delete_fulfillmentEndpoint } from './other/delete-fulfillment.js';
import { get_fulfillmentEndpoint } from './other/get-fulfillment.js';
import { put_fulfillmentEndpoint } from './other/put-fulfillment.js';
import { create_fulfillmentitemEndpoint } from './other/create-fulfillmentitem.js';
import { delete_fulfillmentitemEndpoint } from './other/delete-fulfillmentitem.js';
import { get_fulfillmentitemEndpoint } from './other/get-fulfillmentitem.js';
import { put_fulfillmentitemEndpoint } from './other/put-fulfillmentitem.js';
import { get_rampbyrampnumberEndpoint } from './other/get-rampbyrampnumber.js';
import { get_rampmetricsbyrampnumberEndpoint } from './other/get-rampmetricsbyrampnumber.js';
import { get_rateplanEndpoint } from './other/get-rateplan.js';
import { postomnichannelsubscriptionEndpoint } from './other/postomnichannelsubscription.js';
import { getomnichannelsubscriptionEndpoint } from './other/getomnichannelsubscription.js';
import { deleteomnichannelsubscriptionEndpoint } from './other/deleteomnichannelsubscription.js';
import { post_reverserolloverEndpoint } from './other/post-reverserollover.js';
import { post_rolloverEndpoint } from './other/post-rollover.js';
import { depletefundsEndpoint } from './other/depletefunds.js';
import { post_usageEndpoint } from './other/post-usage.js';
import { object_postusageEndpoint } from './other/object-postusage.js';
import { object_deleteusageEndpoint } from './other/object-deleteusage.js';
import { object_getusageEndpoint } from './other/object-getusage.js';
import { object_putusageEndpoint } from './other/object-putusage.js';
import { runspecificversionofmeterEndpoint } from './other/runspecificversionofmeter.js';
import { testspecificversionofmeterEndpoint } from './other/testspecificversionofmeter.js';
import { retrievemetersummarydataEndpoint } from './other/retrievemetersummarydata.js';
import { getrunstatusofspecificmeterversionEndpoint } from './other/getrunstatusofspecificmeterversion.js';
import { getaudittrailentriesformeterEndpoint } from './other/getaudittrailentriesformeter.js';
import { getaudittrailexportjobsEndpoint } from './other/getaudittrailexportjobs.js';
import { createaudittrailexportjobEndpoint } from './other/createaudittrailexportjob.js';
import { getpresignedurlformeterexportEndpoint } from './other/getpresignedurlformeterexport.js';
import { exportspecificmeterEndpoint } from './other/exportspecificmeter.js';
import { importmeterdefinitionEndpoint } from './other/importmeterdefinition.js';
import { uploadmeteringfileEndpoint } from './other/uploadmeteringfile.js';
import { ingestusageeventsEndpoint } from './other/ingestusageevents.js';
import { bulkdeleteeventsfromeventstoreEndpoint } from './other/bulkdeleteeventsfromeventstore.js';
import { getlatestqueryjobofspecificeventstoreEndpoint } from './other/getlatestqueryjobofspecificeventstore.js';
import { getcommitmentsEndpoint } from './other/getcommitments.js';
import { getcommitmentbykeyEndpoint } from './other/getcommitmentbykey.js';
import { getcommitmentperiodsEndpoint } from './other/getcommitmentperiods.js';
import { getcommitmentbalanceEndpoint } from './other/getcommitmentbalance.js';
import { listcommitmentschedulesEndpoint } from './other/listcommitmentschedules.js';
import { get_subscription_adjustmentsEndpoint } from './other/get-subscription-adjustments.js';
import { create_adjustmentEndpoint } from './other/create-adjustment.js';
import { preview_adjustmentEndpoint } from './other/preview-adjustment.js';
import { get_adjustmentEndpoint } from './other/get-adjustment.js';
import { put_canceladjustmentEndpoint } from './other/put-canceladjustment.js';
import { get_billingdocumentsEndpoint } from './other/get-billingdocuments.js';
import { get_einvoicingserviceprovidersEndpoint } from './other/get-einvoicingserviceproviders.js';
import { post_einvoicingserviceproviderEndpoint } from './other/post-einvoicingserviceprovider.js';
import { delete_einvoicingserviceproviderEndpoint } from './other/delete-einvoicingserviceprovider.js';
import { get_einvoicingserviceproviderEndpoint } from './other/get-einvoicingserviceprovider.js';
import { put_updateeinvoicingserviceproviderEndpoint } from './other/put-updateeinvoicingserviceprovider.js';
import { get_einvoicingbusinessregionsEndpoint } from './other/get-einvoicingbusinessregions.js';
import { post_createeinvoicingbusinessregionEndpoint } from './other/post-createeinvoicingbusinessregion.js';
import { delete_einvoicingbusinessregionEndpoint } from './other/delete-einvoicingbusinessregion.js';
import { get_einvoicingbusinessregionEndpoint } from './other/get-einvoicingbusinessregion.js';
import { put_updateeinvoicingbusinessregionEndpoint } from './other/put-updateeinvoicingbusinessregion.js';
import { geteinvoicemandatesEndpoint } from './other/geteinvoicemandates.js';
import { get_einvoicefiletemplatesEndpoint } from './other/get-einvoicefiletemplates.js';
import { post_createeinvoicefiletemplateEndpoint } from './other/post-createeinvoicefiletemplate.js';
import { delete_einvoicefiletemplateEndpoint } from './other/delete-einvoicefiletemplate.js';
import { get_einvoicefiletemplateEndpoint } from './other/get-einvoicefiletemplate.js';
import { put_einvoicefiletemplateEndpoint } from './other/put-einvoicefiletemplate.js';
import { object_posttaxationitemEndpoint } from './other/object-posttaxationitem.js';
import { delete_taxationitemEndpoint } from './other/delete-taxationitem.js';
import { get_taxationitemEndpoint } from './other/get-taxationitem.js';
import { put_taxationitemEndpoint } from './other/put-taxationitem.js';
import { get_sequencesetsEndpoint } from './other/get-sequencesets.js';
import { post_sequencesetsEndpoint } from './other/post-sequencesets.js';
import { delete_sequencesetEndpoint } from './other/delete-sequenceset.js';
import { get_sequencesetEndpoint } from './other/get-sequenceset.js';
import { put_sequencesetEndpoint } from './other/put-sequenceset.js';
import { post_billingpreviewEndpoint } from './other/post-billingpreview.js';
import { get_operationjobEndpoint } from './other/get-operationjob.js';
import { create_bulkpdftozipgenerationEndpoint } from './other/create-bulkpdftozipgeneration.js';
import { get_bulkpdftozipgenerationEndpoint } from './other/get-bulkpdftozipgeneration.js';
import { post_createbillrunEndpoint } from './other/post-createbillrun.js';
import { delete_deletebillrunEndpoint } from './other/delete-deletebillrun.js';
import { get_billrunEndpoint } from './other/get-billrun.js';
import { put_cancelbillrunEndpoint } from './other/put-cancelbillrun.js';
import { put_postbillrunEndpoint } from './other/put-postbillrun.js';
import { post_emailbillingdocumentsfrombillrunEndpoint } from './other/post-emailbillingdocumentsfrombillrun.js';
import { post_billingpreviewrunEndpoint } from './other/post-billingpreviewrun.js';
import { get_billingpreviewrunEndpoint } from './other/get-billingpreviewrun.js';
import { post_createpaymentsessionEndpoint } from './other/post-createpaymentsession.js';
import { post_rsasignaturesEndpoint } from './other/post-rsasignatures.js';
import { post_decryptrsasignaturesEndpoint } from './other/post-decryptrsasignatures.js';
import { get_hostedpagesEndpoint } from './other/get-hostedpages.js';
import { post_createdraftopenpaymentmethodtypeEndpoint } from './other/post-createdraftopenpaymentmethodtype.js';
import { put_publishopenpaymentmethodtypeEndpoint } from './other/put-publishopenpaymentmethodtype.js';
import { put_updateopenpaymentmethodtypeEndpoint } from './other/put-updateopenpaymentmethodtype.js';
import { get_openpaymentmethodtyperevisionEndpoint } from './other/get-openpaymentmethodtyperevision.js';
import { get_openpaymentmethodtypepublishEndpoint } from './other/get-openpaymentmethodtypepublish.js';
import { post_reconcilerefundEndpoint } from './other/post-reconcilerefund.js';
import { get_refundsEndpoint } from './other/get-refunds.js';
import { put_updaterefundEndpoint } from './other/put-updaterefund.js';
import { delete_refundEndpoint } from './other/delete-refund.js';
import { get_refundEndpoint } from './other/get-refund.js';
import { put_cancelrefundEndpoint } from './other/put-cancelrefund.js';
import { get_refundpartsEndpoint } from './other/get-refundparts.js';
import { get_refundpartEndpoint } from './other/get-refundpart.js';
import { get_refunditempartsEndpoint } from './other/get-refunditemparts.js';
import { get_refunditempartEndpoint } from './other/get-refunditempart.js';
import { getbaselinemetricsEndpoint } from './other/getbaselinemetrics.js';
import { getamountrecoveredEndpoint } from './other/getamountrecovered.js';
import { getdocumentsuccessratebycustomergroupEndpoint } from './other/getdocumentsuccessratebycustomergroup.js';
import { getcustomergroupmetricsEndpoint } from './other/getcustomergroupmetrics.js';
import { createsummarystatementrunEndpoint } from './other/createsummarystatementrun.js';
import { get_allaccountingcodesEndpoint } from './other/get-allaccountingcodes.js';
import { post_accountingcodeEndpoint } from './other/post-accountingcode.js';
import { delete_accountingcodeEndpoint } from './other/delete-accountingcode.js';
import { get_accountingcodeEndpoint } from './other/get-accountingcode.js';
import { put_accountingcodeEndpoint } from './other/put-accountingcode.js';
import { put_activateaccountingcodeEndpoint } from './other/put-activateaccountingcode.js';
import { put_deactivateaccountingcodeEndpoint } from './other/put-deactivateaccountingcode.js';
import { get_allaccountingperiodsEndpoint } from './other/get-allaccountingperiods.js';
import { post_accountingperiodEndpoint } from './other/post-accountingperiod.js';
import { delete_accountingperiodEndpoint } from './other/delete-accountingperiod.js';
import { get_accountingperiodEndpoint } from './other/get-accountingperiod.js';
import { put_updateaccountingperiodEndpoint } from './other/put-updateaccountingperiod.js';
import { put_closeaccountingperiodEndpoint } from './other/put-closeaccountingperiod.js';
import { put_pendingcloseaccountingperiodEndpoint } from './other/put-pendingcloseaccountingperiod.js';
import { put_reopenaccountingperiodEndpoint } from './other/put-reopenaccountingperiod.js';
import { put_runtrialbalanceEndpoint } from './other/put-runtrialbalance.js';
import { post_summaryjournalentryEndpoint } from './other/post-summaryjournalentry.js';
import { get_allsummaryjournalentriesEndpoint } from './other/get-allsummaryjournalentries.js';
import { delete_summaryjournalentryEndpoint } from './other/delete-summaryjournalentry.js';
import { get_summaryjournalentryEndpoint } from './other/get-summaryjournalentry.js';
import { put_basicsummaryjournalentryEndpoint } from './other/put-basicsummaryjournalentry.js';
import { put_summaryjournalentryEndpoint } from './other/put-summaryjournalentry.js';
import { post_journalrunEndpoint } from './other/post-journalrun.js';
import { delete_journalrunEndpoint } from './other/delete-journalrun.js';
import { get_journalrunEndpoint } from './other/get-journalrun.js';
import { put_journalrunEndpoint } from './other/put-journalrun.js';
import { post_massupdaterEndpoint } from './other/post-massupdater.js';
import { get_massupdaterEndpoint } from './other/get-massupdater.js';
import { put_massupdaterEndpoint } from './other/put-massupdater.js';
import { post_eventtriggerEndpoint } from './other/post-eventtrigger.js';
import { get_eventtriggersEndpoint } from './other/get-eventtriggers.js';
import { get_eventtriggerEndpoint } from './other/get-eventtrigger.js';
import { put_eventtriggerEndpoint } from './other/put-eventtrigger.js';
import { delete_eventtriggerEndpoint } from './other/delete-eventtrigger.js';
import { post_scheduledeventEndpoint } from './other/post-scheduledevent.js';
import { get_scheduledeventsEndpoint } from './other/get-scheduledevents.js';
import { get_scheduledeventbyidEndpoint } from './other/get-scheduledeventbyid.js';
import { update_scheduledeventbyidEndpoint } from './other/update-scheduledeventbyid.js';
import { delete_scheduledeventbyidEndpoint } from './other/delete-scheduledeventbyid.js';
import { post_create_notification_definitionEndpoint } from './other/post-create-notification-definition.js';
import { get_query_notification_definitionsEndpoint } from './other/get-query-notification-definitions.js';
import { get_get_notification_definitionEndpoint } from './other/get-get-notification-definition.js';
import { put_update_notification_definitionEndpoint } from './other/put-update-notification-definition.js';
import { delete_delete_notification_definitionEndpoint } from './other/delete-delete-notification-definition.js';
import { post_createorupdateemailtemplatesEndpoint } from './other/post-createorupdateemailtemplates.js';
import { post_create_email_templateEndpoint } from './other/post-create-email-template.js';
import { get_query_email_templatesEndpoint } from './other/get-query-email-templates.js';
import { get_get_email_templateEndpoint } from './other/get-get-email-template.js';
import { put_update_email_templateEndpoint } from './other/put-update-email-template.js';
import { delete_delete_email_templateEndpoint } from './other/delete-delete-email-template.js';
import { createorupdatecallouttemplatesEndpoint } from './other/createorupdatecallouttemplates.js';
import { createcallouttemplateEndpoint } from './other/createcallouttemplate.js';
import { getcallouttemplatesEndpoint } from './other/getcallouttemplates.js';
import { getcallouttemplteEndpoint } from './other/getcallouttemplte.js';
import { updatecallouttemplateEndpoint } from './other/updatecallouttemplate.js';
import { deletecallouttemplateEndpoint } from './other/deletecallouttemplate.js';
import { createorupdatereusableblocksEndpoint } from './other/createorupdatereusableblocks.js';
import { createreusableblockEndpoint } from './other/createreusableblock.js';
import { getreusableblocksEndpoint } from './other/getreusableblocks.js';
import { getreusableblockEndpoint } from './other/getreusableblock.js';
import { updatereusableblockEndpoint } from './other/updatereusableblock.js';
import { deletereusableblockEndpoint } from './other/deletereusableblock.js';
import { delete_delete_notification_history_for_accountEndpoint } from './other/delete-delete-notification-history-for-account.js';
import { get_get_notification_history_deletion_taskEndpoint } from './other/get-get-notification-history-deletion-task.js';
import { post_resendcalloutnotificationsEndpoint } from './other/post-resendcalloutnotifications.js';
import { post_resendemailnotificationsEndpoint } from './other/post-resendemailnotifications.js';
import { get_callouthistoryEndpoint } from './other/get-callouthistory.js';
import { get_emailhistoryEndpoint } from './other/get-emailhistory.js';
import { getlistgroupsEndpoint } from './other/getlistgroups.js';
import { createanewgroupEndpoint } from './other/createanewgroup.js';
import { postbulkcreategroupsEndpoint } from './other/postbulkcreategroups.js';
import { patchbulkpatchgroupsEndpoint } from './other/patchbulkpatchgroups.js';
import { postbulkdeletegroupsEndpoint } from './other/postbulkdeletegroups.js';
import { getaspecificgroupEndpoint } from './other/getaspecificgroup.js';
import { updateaspecificgroupEndpoint } from './other/updateaspecificgroup.js';
import { deleteaspecificgroupEndpoint } from './other/deleteaspecificgroup.js';
import { partiallyupdateaspecificgroupEndpoint } from './other/partiallyupdateaspecificgroup.js';
import { gettheressourcetypeEndpoint } from './other/gettheressourcetype.js';
import { getaspecificresourcetypeEndpoint } from './other/getaspecificresourcetype.js';
import { getschemaofscimEndpoint } from './other/getschemaofscim.js';
import { gettheschemaofspecificscimEndpoint } from './other/gettheschemaofspecificscim.js';
import { gettheserviceproviderconfigEndpoint } from './other/gettheserviceproviderconfig.js';
import { getlistofusersEndpoint } from './other/getlistofusers.js';
import { createauserEndpoint } from './other/createauser.js';
import { bulkcreateusersEndpoint } from './other/bulkcreateusers.js';
import { bulkupdateusersEndpoint } from './other/bulkupdateusers.js';
import { deletealistofusersEndpoint } from './other/deletealistofusers.js';
import { getaspecificuserEndpoint } from './other/getaspecificuser.js';
import { updateaspecificuserEndpoint } from './other/updateaspecificuser.js';
import { deleteaspecificuserEndpoint } from './other/deleteaspecificuser.js';
import { partialupdateaspecificuserEndpoint } from './other/partialupdateaspecificuser.js';
import { post_customobjectdefinitionsEndpoint } from './other/post-customobjectdefinitions.js';
import { get_allcustomobjectdefinitionsinnamespaceEndpoint } from './other/get-allcustomobjectdefinitionsinnamespace.js';
import { post_updatecustomobjectdefinitionEndpoint } from './other/post-updatecustomobjectdefinition.js';
import { get_customobjectdefinitionbytypeEndpoint } from './other/get-customobjectdefinitionbytype.js';
import { delete_customobjectdefinitionbytypeEndpoint } from './other/delete-customobjectdefinitionbytype.js';
import { post_customobjectrecordsEndpoint } from './other/post-customobjectrecords.js';
import { get_allrecordsforcustomobjecttypeEndpoint } from './other/get-allrecordsforcustomobjecttype.js';
import { get_customobjectrecordbyidEndpoint } from './other/get-customobjectrecordbyid.js';
import { put_customobjectrecordEndpoint } from './other/put-customobjectrecord.js';
import { patch_partialupdatecustomobjectrecordEndpoint } from './other/patch-partialupdatecustomobjectrecord.js';
import { delete_customobjectrecordbyidEndpoint } from './other/delete-customobjectrecordbyid.js';
import { post_customobjectrecordsbatchupdateordeleteEndpoint } from './other/post-customobjectrecordsbatchupdateordelete.js';
import { post_customobjectbulkjobEndpoint } from './other/post-customobjectbulkjob.js';
import { get_allcustomobjectbulkjobsEndpoint } from './other/get-allcustomobjectbulkjobs.js';
import { get_customobjectbulkjobEndpoint } from './other/get-customobjectbulkjob.js';
import { post_uploadfileforcustomobjectbulkjobEndpoint } from './other/post-uploadfileforcustomobjectbulkjob.js';
import { get_customobjectbulkjoberrorsEndpoint } from './other/get-customobjectbulkjoberrors.js';
import { patch_customobjectbulkjobEndpoint } from './other/patch-customobjectbulkjob.js';
import { get_systemhealthapivolumesummaryEndpoint } from './other/get-systemhealthapivolumesummary.js';
import { getsystemhealthapifailurerecordsEndpoint } from './other/getsystemhealthapifailurerecords.js';
import { getsystemhealthapiperformancerecordsEndpoint } from './other/getsystemhealthapiperformancerecords.js';
import { get_systemhealthbillingdocvolumesummaryEndpoint } from './other/get-systemhealthbillingdocvolumesummary.js';
import { getsystemhealthtaxrecordsEndpoint } from './other/getsystemhealthtaxrecords.js';
import { delete_workflowversionEndpoint } from './other/delete-workflowversion.js';
import { get_workflowsEndpoint } from './other/get-workflows.js';
import { post_workflowimportEndpoint } from './other/post-workflowimport.js';
import { get_workflowsusagesEndpoint } from './other/get-workflowsusages.js';
import { get_workflowstasksEndpoint } from './other/get-workflowstasks.js';
import { put_workflowstasksupdateEndpoint } from './other/put-workflowstasksupdate.js';
import { get_workflowstaskEndpoint } from './other/get-workflowstask.js';
import { post_workflowstaskrerunEndpoint } from './other/post-workflowstaskrerun.js';
import { get_workflow_runEndpoint } from './other/get-workflow-run.js';
import { delete_workflowEndpoint } from './other/delete-workflow.js';
import { get_workflowEndpoint } from './other/get-workflow.js';
import { patch_updateworkflowEndpoint } from './other/patch-updateworkflow.js';
import { get_workflowexportEndpoint } from './other/get-workflowexport.js';
import { post_run_workflowEndpoint } from './other/post-run-workflow.js';
import { get_workflowversionsEndpoint } from './other/get-workflowversions.js';
import { post_workflowversionsimportEndpoint } from './other/post-workflowversionsimport.js';
import { put_stopworkflowrunEndpoint } from './other/put-stopworkflowrun.js';
import { queryamendmentsEndpoint } from './other/queryamendments.js';
import { queryamendmentbykeyEndpoint } from './other/queryamendmentbykey.js';
import { querybillingrunsEndpoint } from './other/querybillingruns.js';
import { querybillingrunbykeyEndpoint } from './other/querybillingrunbykey.js';
import { querydailyconsumptionsummariesEndpoint } from './other/querydailyconsumptionsummaries.js';
import { querydailyconsumptionsummarybykeyEndpoint } from './other/querydailyconsumptionsummarybykey.js';
import { querydeliveryadjustmentsEndpoint } from './other/querydeliveryadjustments.js';
import { querydeliveryadjustmentbykeyEndpoint } from './other/querydeliveryadjustmentbykey.js';
import { queryfulfillmentsEndpoint } from './other/queryfulfillments.js';
import { queryfulfillmentbykeyEndpoint } from './other/queryfulfillmentbykey.js';
import { queryprepaidbalancesEndpoint } from './other/queryprepaidbalances.js';
import { queryprepaidbalancebykeyEndpoint } from './other/queryprepaidbalancebykey.js';
import { queryprepaidbalancefundsEndpoint } from './other/queryprepaidbalancefunds.js';
import { queryprepaidbalancefundbykeyEndpoint } from './other/queryprepaidbalancefundbykey.js';
import { queryprepaidbalancetransactionsEndpoint } from './other/queryprepaidbalancetransactions.js';
import { queryprepaidbalancetransactionbykeyEndpoint } from './other/queryprepaidbalancetransactionbykey.js';
import { queryprocessedusagesEndpoint } from './other/queryprocessedusages.js';
import { queryprocessedusagebykeyEndpoint } from './other/queryprocessedusagebykey.js';
import { queryrampsEndpoint } from './other/queryramps.js';
import { queryrampbykeyEndpoint } from './other/queryrampbykey.js';
import { queryrateplansEndpoint } from './other/queryrateplans.js';
import { queryrateplanbykeyEndpoint } from './other/queryrateplanbykey.js';
import { queryrateplanchargesEndpoint } from './other/queryrateplancharges.js';
import { queryrateplanchargebykeyEndpoint } from './other/queryrateplanchargebykey.js';
import { queryrateplanchargetiersEndpoint } from './other/queryrateplanchargetiers.js';
import { queryrateplanchargetierbykeyEndpoint } from './other/queryrateplanchargetierbykey.js';
import { queryratingresultsEndpoint } from './other/queryratingresults.js';
import { queryratingresultbykeyEndpoint } from './other/queryratingresultbykey.js';
import { queryrefundsEndpoint } from './other/queryrefunds.js';
import { queryrefundbykeyEndpoint } from './other/queryrefundbykey.js';
import { queryrefundapplicationsEndpoint } from './other/queryrefundapplications.js';
import { queryrefundapplicationbykeyEndpoint } from './other/queryrefundapplicationbykey.js';
import { queryrefundapplicationitemsEndpoint } from './other/queryrefundapplicationitems.js';
import { queryrefundapplicationitembykeyEndpoint } from './other/queryrefundapplicationitembykey.js';
import { getsummarystatementrunsEndpoint } from './other/getsummarystatementruns.js';
import { getsummarystatementrunEndpoint } from './other/getsummarystatementrun.js';
import { getsummarystatementsEndpoint } from './other/getsummarystatements.js';
import { getsummarystatementEndpoint } from './other/getsummarystatement.js';
import { querytaxationitemsEndpoint } from './other/querytaxationitems.js';
import { querytaxationitembykeyEndpoint } from './other/querytaxationitembykey.js';
import { queryusagesEndpoint } from './other/queryusages.js';
import { queryusagebykeyEndpoint } from './other/queryusagebykey.js';
import { queryvalidityperiodsummarysEndpoint } from './other/queryvalidityperiodsummarys.js';
import { queryvalidityperiodsummarybykeyEndpoint } from './other/queryvalidityperiodsummarybykey.js';
import { querycustomobjectsEndpoint } from './other/querycustomobjects.js';
import { querycustomobjectbykeyEndpoint } from './other/querycustomobjectbykey.js';
import { queryratingdetailsEndpoint } from './other/queryratingdetails.js';
import { queryratingdetailbykeyEndpoint } from './other/queryratingdetailbykey.js';
import { get_dataqueryjobsEndpoint } from './other/get-dataqueryjobs.js';
import { post_dataqueryjobEndpoint } from './other/post-dataqueryjob.js';
import { delete_dataqueryjobEndpoint } from './other/delete-dataqueryjob.js';
import { get_dataqueryjobEndpoint } from './other/get-dataqueryjob.js';
import { post_batchqueryjobEndpoint } from './other/post-batchqueryjob.js';
import { get_lastbatchqueryjobEndpoint } from './other/get-lastbatchqueryjob.js';
import { delete_batchqueryjobEndpoint } from './other/delete-batchqueryjob.js';
import { get_batchqueryjobEndpoint } from './other/get-batchqueryjob.js';
import { get_downloaddeploymenttemplateEndpoint } from './other/get-downloaddeploymenttemplate.js';
import { post_comparetemplateEndpoint } from './other/post-comparetemplate.js';
import { post_migratetenantsettingsEndpoint } from './other/post-migratetenantsettings.js';
import { get_sourcecomponentdetailsEndpoint } from './other/get-sourcecomponentdetails.js';
import { get_templatesEndpoint } from './other/get-templates.js';
import { post_deploymenttemplateEndpoint } from './other/post-deploymenttemplate.js';
import { delete_deploymenttemplateEndpoint } from './other/delete-deploymenttemplate.js';
import { get_deploymenttemplatedetailEndpoint } from './other/get-deploymenttemplatedetail.js';
import { syncdeploymenttemplateEndpoint } from './other/syncdeploymenttemplate.js';
import { comparedeploytenantEndpoint } from './other/comparedeploytenant.js';
import { comparedeploytemplateEndpoint } from './other/comparedeploytemplate.js';
import { revertdeploymentEndpoint } from './other/revertdeployment.js';
import { fetchdeploymentlogsEndpoint } from './other/fetchdeploymentlogs.js';
import { createbulkjobEndpoint } from './other/createbulkjob.js';
import { submitbulkjobEndpoint } from './other/submitbulkjob.js';
import { getbulkjobsummaryEndpoint } from './other/getbulkjobsummary.js';
import { cancelbulkjobEndpoint } from './other/cancelbulkjob.js';
import { deleteabortjobEndpoint } from './other/deleteabortjob.js';
import { getdownloadlinksforjobEndpoint } from './other/getdownloadlinksforjob.js';
import { getbulkjobsummariesEndpoint } from './other/getbulkjobsummaries.js';
import { getmappingsforjobEndpoint } from './other/getmappingsforjob.js';
import { post_datalabelingjobEndpoint } from './other/post-datalabelingjob.js';
import { get_datalabelingjobEndpoint } from './other/get-datalabelingjob.js';
import { post_regeneratebookingtransactionEndpoint } from './other/post-regeneratebookingtransaction.js';
import { post_regeneratebillingtransactionEndpoint } from './other/post-regeneratebillingtransaction.js';
import { post_createrevreceventsEndpoint } from './other/post-createrevrecevents.js';
import { post_generaterevreceventsfordailyconsumptionEndpoint } from './other/post-generaterevreceventsfordailyconsumption.js';
import { post_createbookingdatebackfilljobEndpoint } from './other/post-createbookingdatebackfilljob.js';
import { get_listbookingdatebackfilljobsEndpoint } from './other/get-listbookingdatebackfilljobs.js';
import { get_bookingdatebackfilljobbyidEndpoint } from './other/get-bookingdatebackfilljobbyid.js';
import { put_stopbookingdatebackfilljobbyidEndpoint } from './other/put-stopbookingdatebackfilljobbyid.js';
import { post_createdatabackfilljobEndpoint } from './other/post-createdatabackfilljob.js';
import { get_databackfilljobbyidEndpoint } from './other/get-databackfilljobbyid.js';
import { put_stopdatabackfilljobbyidEndpoint } from './other/put-stopdatabackfilljobbyid.js';
import { get_listdatabackfilljobsEndpoint } from './other/get-listdatabackfilljobs.js';
import { get_databackfilltemplateEndpoint } from './other/get-databackfilltemplate.js';
import { get_listautobackfilljobEndpoint } from './other/get-listautobackfilljob.js';
import { post_createautobackfilljobEndpoint } from './other/post-createautobackfilljob.js';
import { get_autobackfilljobbyidEndpoint } from './other/get-autobackfilljobbyid.js';
import { put_stopautobackfilljobbyidEndpoint } from './other/put-stopautobackfilljobbyid.js';
import { action_postcreateEndpoint } from './other/action-postcreate.js';
import { action_postdeleteEndpoint } from './other/action-postdelete.js';
import { action_postqueryEndpoint } from './other/action-postquery.js';
import { action_postquerymoreEndpoint } from './other/action-postquerymore.js';
import { action_postupdateEndpoint } from './other/action-postupdate.js';
import { post_processsettingsbatchrequestEndpoint } from './other/post-processsettingsbatchrequest.js';
import { get_listallsettingsEndpoint } from './other/get-listallsettings.js';
import { get_filesEndpoint } from './other/get-files.js';
import { put_filesEndpoint } from './other/put-files.js';
import { get_filestatusEndpoint } from './other/get-filestatus.js';
import { object_postimportEndpoint } from './other/object-postimport.js';
import { object_getimportEndpoint } from './other/object-getimport.js';
import { get_customexchangeratesEndpoint } from './other/get-customexchangerates.js';
import { post_attachmentsEndpoint } from './other/post-attachments.js';
import { delete_attachmentsEndpoint } from './other/delete-attachments.js';
import { get_attachmentsEndpoint } from './other/get-attachments.js';
import { put_attachmentsEndpoint } from './other/put-attachments.js';
import { get_attachmentslistEndpoint } from './other/get-attachmentslist.js';
import { get_describeEndpoint } from './other/get-describe.js';

export const zuoraEndpoints: ApiEndpoint[] = [
  post_accountEndpoint,
  delete_accountEndpoint,
  get_accountEndpoint,
  put_accountEndpoint,
  get_acountpaymentmethodsEndpoint,
  getaccountpaymentmethodcascadingEndpoint,
  putaccountpaymentmethodcascadingEndpoint,
  get_acountdefaultpaymentmethodEndpoint,
  get_accountsummaryEndpoint,
  get_subscriptionsbyaccountEndpoint,
  post_billingdocumentfilesdeletionjobEndpoint,
  get_billingdocumentfilesdeletionjobEndpoint,
  post_generatebillingdocumentsEndpoint,
  queryaccountsEndpoint,
  // queryaccountbykeyEndpoint,
  get_ordersbysubscriptionownerEndpoint,
  get_ordersbysubscriptionnumberEndpoint,
  put_updatesubscriptioncustomfieldsEndpoint,
  get_pendingordersbysubscriptionnumberEndpoint,
  get_rampsbysubscriptionkeyEndpoint,
  get_rampmetricsbysubscriptionkeyEndpoint,
  post_previewsubscriptionEndpoint,
  previewexistingsubscriptionEndpoint,
  post_subscriptionEndpoint,
  get_subscriptionsbykeyEndpoint,
  put_subscriptionEndpoint,
  get_subscriptionsbykeyandversionEndpoint,
  put_renewsubscriptionEndpoint,
  put_cancelsubscriptionEndpoint,
  put_resumesubscriptionEndpoint,
  put_suspendsubscriptionEndpoint,
  put_deletesubscriptionEndpoint,
  put_updatesubscriptioncustomfieldsofaspecifiedversionEndpoint,
  getmetricsbysubscriptionnumbersEndpoint,
  getsubscriptionchangelogsbysubscriptionnumberEndpoint,
  getsubscriptionchangelogsbyordernumberEndpoint,
  getsubscriptionchangelogbyversionEndpoint,
  querysubscriptionsEndpoint,
  querysubscriptionbykeyEndpoint,
  post_previeworderEndpoint,
  post_previeworderasynchronouslyEndpoint,
  get_allordersEndpoint,
  post_orderEndpoint,
  post_createorderasynchronouslyEndpoint,
  delete_orderEndpoint,
  get_orderEndpoint,
  put_orderEndpoint,
  deleteorderasynchronouslyEndpoint,
  get_ordersbyinvoiceownerEndpoint,
  put_updateordercustomfieldsEndpoint,
  put_ordertriggerdatesEndpoint,
  put_orderactivateEndpoint,
  put_ordercancelEndpoint,
  revertorderEndpoint,
  put_orderactionsEndpoint,
  get_orderlineitemEndpoint,
  put_orderlineitemEndpoint,
  post_orderlineitemsEndpoint,
  get_rampmetricsbyordernumberEndpoint,
  queryorderactionsEndpoint,
  queryorderactionbykeyEndpoint,
  queryorderlineitemsEndpoint,
  queryorderlineitembykeyEndpoint,
  queryordersEndpoint,
  queryordersbykeyEndpoint,
  get_usage_rate_detail_by_invoice_itemEndpoint,
  post_standaloneinvoiceEndpoint,
  put_batchupdateinvoicesEndpoint,
  post_standaloneinvoicesEndpoint,
  post_postinvoicesEndpoint,
  getinvoicepdfstatusEndpoint,
  delete_deleteinvoiceEndpoint,
  get_getinvoiceEndpoint,
  put_updateinvoiceEndpoint,
  get_invoiceapplicationpartsEndpoint,
  post_emailinvoiceEndpoint,
  get_invoicefilesEndpoint,
  post_uploadfileforinvoiceEndpoint,
  get_invoiceitemsEndpoint,
  get_taxationitemsofinvoiceitemEndpoint,
  put_reverseinvoiceEndpoint,
  post_inv_taxationitemsEndpoint,
  put_writeoffinvoiceEndpoint,
  post_creditmemofrominvoiceEndpoint,
  post_debitmemofrominvoiceEndpoint,
  geteinvoicemandateoninvoiceEndpoint,
  downloadeinvoiceofspecifiedformatEndpoint,
  canceleinvoicebyinvoicekeyEndpoint,
  updateinvoiceinvokesyncstatusEndpoint,
  put_generationeinvoicegenerationforinvoicesEndpoint,
  post_createinvoicescheduleEndpoint,
  delete_invoicescheduleEndpoint,
  get_invoicescheduleEndpoint,
  put_updateinvoicescheduleEndpoint,
  post_executeinvoicescheduleEndpoint,
  put_pauseinvoicescheduleEndpoint,
  put_resumeinvoicescheduleEndpoint,
  detachchargesfrominvoicescheduleEndpoint,
  attachchargestoinvoicescheduleEndpoint,
  post_transactioninvoicepaymentEndpoint,
  getinvoicecyclehistoryEndpoint,
  queryinvoicesEndpoint,
  queryinvoicebykeyEndpoint,
  queryinvoiceitemsEndpoint,
  queryinvoiceitembykeyEndpoint,
  queryinvoiceschedulesEndpoint,
  queryinvoiceschedulebykeyEndpoint,
  post_paymentmethodsEndpoint,
  post_paymentmethodsdecryptionEndpoint,
  delete_paymentmethodsEndpoint,
  get_paymentmethodEndpoint,
  put_paymentmethodEndpoint,
  put_verifypaymentmethodsEndpoint,
  put_scrubpaymentmethodsEndpoint,
  getbankaccountbalanceEndpoint,
  get_storedcredentialprofilesEndpoint,
  post_createstoredcredentialprofileEndpoint,
  post_cancelstoredcredentialprofileEndpoint,
  post_expirestoredcredentialprofileEndpoint,
  get_listapplepaydomainsEndpoint,
  post_registerapplepaydomainEndpoint,
  delete_unregisterapplepaydomainEndpoint,
  object_getpaymentmethodsnapshotEndpoint,
  object_getpaymentmethodtransactionlogEndpoint,
  get_paymentmethodupdaterinstancesEndpoint,
  post_paymentmethodupdaterbatchEndpoint,
  post_createauthorizationEndpoint,
  post_cancelauthorizationEndpoint,
  get_paymentgatewaysEndpoint,
  triggerpredebitnotificationEndpoint,
  post_reversepaymentEndpoint,
  post_rejectpaymentEndpoint,
  post_settlepaymentEndpoint,
  get_retrieveallpaymentsEndpoint,
  post_createpaymentEndpoint,
  put_updatepaymentEndpoint,
  delete_paymentEndpoint,
  get_paymentEndpoint,
  put_applypaymentEndpoint,
  put_cancelpaymentEndpoint,
  get_paymentpartsEndpoint,
  get_paymentpartEndpoint,
  get_paymentitempartsEndpoint,
  get_paymentitempartEndpoint,
  post_refundpaymentEndpoint,
  post_refundpaymentwithautounapplyEndpoint,
  put_transferpaymentEndpoint,
  put_unapplypaymentEndpoint,
  object_getpaymenttransactionlogEndpoint,
  get_paymentrunsEndpoint,
  post_paymentrunEndpoint,
  delete_paymentrunEndpoint,
  get_paymentrunEndpoint,
  put_paymentrunEndpoint,
  get_paymentrundataEndpoint,
  get_paymentrunsummaryEndpoint,
  post_retrypaymentscheduleitemEndpoint,
  put_cancelpaymentscheduleitemEndpoint,
  put_skippaymentscheduleitemEndpoint,
  get_paymentscheduleitemEndpoint,
  put_paymentscheduleitemEndpoint,
  deletepaymentscheduleitemEndpoint,
  get_paymentschedulesEndpoint,
  post_paymentscheduleEndpoint,
  post_paymentschedulesEndpoint,
  get_paymentschedulestatisticEndpoint,
  get_paymentscheduleEndpoint,
  put_paymentscheduleEndpoint,
  deletepaymentscheduleEndpoint,
  put_cancelpaymentscheduleEndpoint,
  post_additemstocustompaymentscheduleEndpoint,
  put_paymentscheduleupdatepreviewEndpoint,
  upsertpaymentprofilesEndpoint,
  getactiveinvoicecycleEndpoint,
  getactivedebitmemocycleEndpoint,
  getactiveaccountcycleEndpoint,
  getdebitmemocyclehistoryEndpoint,
  getaccountcyclehistoryEndpoint,
  putexecuteinvoicepaymentEndpoint,
  putexecutedebitmemopaymentEndpoint,
  putexecuteaccountpaymentsEndpoint,
  postexecutepaymentsEndpoint,
  putremoveinovicefromcycleEndpoint,
  putremovedebitmemofromcycleEndpoint,
  putremoveaccountfromcycleEndpoint,
  postsubmitpaymenttocycleEndpoint,
  get_systemhealthpaymentvolumesummaryEndpoint,
  getsystemhealthpaymentrecordsEndpoint,
  querypaymentsEndpoint,
  querypaymentbykeyEndpoint,
  querypaymentapplicationsEndpoint,
  querypaymentapplicationbykeyEndpoint,
  querypaymentmethodsEndpoint,
  querypaymentmethodbykeyEndpoint,
  querypaymentmethodsnapshotsEndpoint,
  querypaymentmethodsnapshotbykeyEndpoint,
  querypaymentrunsEndpoint,
  querypaymentrunbykeyEndpoint,
  querypaymentschedulesEndpoint,
  querypaymentschedulebykeyEndpoint,
  querypaymentscheduleitemsEndpoint,
  querypaymentscheduleitembykeyEndpoint,
  object_postproductEndpoint,
  object_getproductEndpoint,
  object_putproductEndpoint,
  object_deleteproductEndpoint,
  get_catalogEndpoint,
  get_productEndpoint,
  post_createcataloggroupEndpoint,
  get_listallcataloggroupsEndpoint,
  get_retrievecataloggroupEndpoint,
  put_updatecataloggroupEndpoint,
  delete_cataloggroupEndpoint,
  get_productrateplansEndpoint,
  get_productrateplanEndpoint,
  get_productrateplansbyexternalidEndpoint,
  object_postproductrateplanEndpoint,
  object_getproductrateplanEndpoint,
  object_putproductrateplanEndpoint,
  object_deleteproductrateplanEndpoint,
  post_createproductrateplandefinitionEndpoint,
  get_retrieveproductrateplandefinitionsEndpoint,
  get_retrieveproductrateplandefinitionEndpoint,
  delete_productrateplandefnitionEndpoint,
  get_retrieveproductrateplanchargeEndpoint,
  object_postproductrateplanchargeEndpoint,
  object_getproductrateplanchargeEndpoint,
  object_putproductrateplanchargeEndpoint,
  object_deleteproductrateplanchargeEndpoint,
  post_createproductchargedefinitionEndpoint,
  get_retrieveproductchargedefinitionsEndpoint,
  post_createproductchargedefinitionbulkEndpoint,
  put_updateproductchargedefinitionbulkEndpoint,
  get_retrieveproductchargedefinitionEndpoint,
  put_updateproductchargedefinitionEndpoint,
  delete_productchargedefnitionEndpoint,
  object_getproductrateplanchargetierEndpoint,
  object_putproductrateplanchargetierEndpoint,
  createproductEndpoint,
  updateproductEndpoint,
  get_retrieveproductbykeyEndpoint,
  querylegacyproductsEndpoint,
  queryproductsEndpoint,
  queryproductbykeyEndpoint,
  queryproductrateplansEndpoint,
  queryproductrateplanbykeyEndpoint,
  queryproductrateplanchargesEndpoint,
  queryproductrateplanchargebykeyEndpoint,
  queryproductrateplanchargetiersEndpoint,
  queryproductrateplanchargetierbykeyEndpoint,
  comparedeploytenantproductcatalogEndpoint,
  comparedeploytemplateproductcatalogEndpoint,
  post_createcontactEndpoint,
  delete_contactEndpoint,
  get_contactEndpoint,
  put_contactEndpoint,
  transfercontentEndpoint,
  put_scrubcontactEndpoint,
  get_contactsnapshotEndpoint,
  querycontactsEndpoint,
  querycontactbykeyEndpoint,
  querycontactsnapshotsEndpoint,
  querycontactsnapshotbykeyEndpoint,
  get_creditmemosEndpoint,
  post_creditmemofromprpcEndpoint,
  post_createcreditmemosEndpoint,
  put_updatecreditmemosEndpoint,
  get_creditmemopdfstatusEndpoint,
  get_taxationitemsofcreditmemoitemEndpoint,
  put_writeoffcreditmemoEndpoint,
  delete_creditmemoEndpoint,
  get_creditmemoEndpoint,
  put_updatecreditmemoEndpoint,
  put_applycreditmemoEndpoint,
  put_cancelcreditmemoEndpoint,
  post_emailcreditmemoEndpoint,
  post_uploadfileforcreditmemoEndpoint,
  get_creditmemofilesEndpoint,
  get_creditmemoitemsEndpoint,
  get_creditmemoitemEndpoint,
  get_creditmemopartsEndpoint,
  get_creditmemopartEndpoint,
  post_creditmemopdfEndpoint,
  put_postcreditmemoEndpoint,
  post_refundcreditmemoEndpoint,
  put_reversecreditmemoEndpoint,
  post_cm_taxationitemsEndpoint,
  put_unapplycreditmemoEndpoint,
  put_unpostcreditmemoEndpoint,
  getunapplycreditmemoasyncjobEndpoint,
  getapplycreditmemoasyncjobEndpoint,
  applycreditmemoasyncEndpoint,
  unapplycreditmemoasyncEndpoint,
  geteinvoicecreditmemomandateEndpoint,
  downloadcreditmemoeinvoiceEndpoint,
  updatecreditmemoinvokesyncstatusEndpoint,
  put_generateeinvoicefileforcreditmemoEndpoint,
  querycreditmemosEndpoint,
  querycreditmemobykeyEndpoint,
  querycreditmemoapplicationsEndpoint,
  querycreditmemoapplicationbykeyEndpoint,
  querycreditmemoitemsEndpoint,
  querycreditmemoitembykeyEndpoint,
  get_debitmemosEndpoint,
  post_debitmemofromprpcEndpoint,
  put_updatedebitmemosduedatesEndpoint,
  post_createdebitmemosEndpoint,
  put_updatedebitmemosEndpoint,
  get_debitmemopdfstatusEndpoint,
  get_debitmemoapplicationpartsEndpoint,
  get_taxationitemsofdebitmemoitemEndpoint,
  delete_debitmemoEndpoint,
  get_debitmemoEndpoint,
  put_debitmemoEndpoint,
  put_canceldebitmemoEndpoint,
  post_debitmemocollectEndpoint,
  post_emaildebitmemoEndpoint,
  post_uploadfilefordebitmemoEndpoint,
  get_debitmemofilesEndpoint,
  get_debitmemoitemsEndpoint,
  get_debitmemoitemEndpoint,
  post_debitmemopdfEndpoint,
  put_postdebitmemoEndpoint,
  post_dm_taxationitemsEndpoint,
  put_unpostdebitmemoEndpoint,
  put_writeoffdebitmemoEndpoint,
  geteinvoicedebitmemomandateEndpoint,
  downloaddebitmemoeinvoiceEndpoint,
  updatedebitmemoinvokesyncstatusEndpoint,
  put_generateeinvoicefilefordebitmemoEndpoint,
  querydebitmemosEndpoint,
  querydebitmemobykeyEndpoint,
  querydebitmemoitemsEndpoint,
  querydebitmemoitembykeyEndpoint,
  getalltestenvironmentsEndpoint,
  gettestenvironmentEndpoint,
  createtestenvironmentjobEndpoint,
  getalljobsoftestenvironmentEndpoint,
  getjoboftestenvironmentEndpoint,
  performactionofjobEndpoint,
  createtestenvironmentnotificationEndpoint,
  getallemailnotificationoftestenvEndpoint,
  gettestenvironmentnotificationEndpoint,
  updatetestenvironmentnotificationEndpoint,
  deletetestenvironmentnotificationEndpoint,
  createtokenEndpoint,
  put_revproaccountingcodesEndpoint,
  createproductrateplanchargewithdynamicpricingEndpoint,
  updateproductrateplanchargewithdynamicpricingEndpoint,
  queryproductrateplanchargewithdynamicpricingEndpoint,
  createplanEndpoint,
  updateproductrateplanEndpoint,
  querycommerceproductrateplansEndpoint,
  querycommerceplanslistEndpoint,
  updatetierEndpoint,
  querypurchaseoptionsbyprpidEndpoint,
  post_signupEndpoint,
  get_jobstatusandresponseEndpoint,
  create_fulfillmentEndpoint,
  delete_fulfillmentEndpoint,
  get_fulfillmentEndpoint,
  put_fulfillmentEndpoint,
  create_fulfillmentitemEndpoint,
  delete_fulfillmentitemEndpoint,
  get_fulfillmentitemEndpoint,
  put_fulfillmentitemEndpoint,
  get_rampbyrampnumberEndpoint,
  get_rampmetricsbyrampnumberEndpoint,
  get_rateplanEndpoint,
  postomnichannelsubscriptionEndpoint,
  getomnichannelsubscriptionEndpoint,
  deleteomnichannelsubscriptionEndpoint,
  post_reverserolloverEndpoint,
  post_rolloverEndpoint,
  depletefundsEndpoint,
  post_usageEndpoint,
  object_postusageEndpoint,
  object_deleteusageEndpoint,
  object_getusageEndpoint,
  object_putusageEndpoint,
  runspecificversionofmeterEndpoint,
  testspecificversionofmeterEndpoint,
  retrievemetersummarydataEndpoint,
  getrunstatusofspecificmeterversionEndpoint,
  getaudittrailentriesformeterEndpoint,
  getaudittrailexportjobsEndpoint,
  createaudittrailexportjobEndpoint,
  getpresignedurlformeterexportEndpoint,
  exportspecificmeterEndpoint,
  importmeterdefinitionEndpoint,
  uploadmeteringfileEndpoint,
  ingestusageeventsEndpoint,
  bulkdeleteeventsfromeventstoreEndpoint,
  getlatestqueryjobofspecificeventstoreEndpoint,
  getcommitmentsEndpoint,
  getcommitmentbykeyEndpoint,
  getcommitmentperiodsEndpoint,
  getcommitmentbalanceEndpoint,
  listcommitmentschedulesEndpoint,
  get_subscription_adjustmentsEndpoint,
  create_adjustmentEndpoint,
  preview_adjustmentEndpoint,
  get_adjustmentEndpoint,
  put_canceladjustmentEndpoint,
  get_billingdocumentsEndpoint,
  get_einvoicingserviceprovidersEndpoint,
  post_einvoicingserviceproviderEndpoint,
  delete_einvoicingserviceproviderEndpoint,
  get_einvoicingserviceproviderEndpoint,
  put_updateeinvoicingserviceproviderEndpoint,
  get_einvoicingbusinessregionsEndpoint,
  post_createeinvoicingbusinessregionEndpoint,
  delete_einvoicingbusinessregionEndpoint,
  get_einvoicingbusinessregionEndpoint,
  put_updateeinvoicingbusinessregionEndpoint,
  geteinvoicemandatesEndpoint,
  get_einvoicefiletemplatesEndpoint,
  post_createeinvoicefiletemplateEndpoint,
  delete_einvoicefiletemplateEndpoint,
  get_einvoicefiletemplateEndpoint,
  put_einvoicefiletemplateEndpoint,
  object_posttaxationitemEndpoint,
  delete_taxationitemEndpoint,
  get_taxationitemEndpoint,
  put_taxationitemEndpoint,
  get_sequencesetsEndpoint,
  post_sequencesetsEndpoint,
  delete_sequencesetEndpoint,
  get_sequencesetEndpoint,
  put_sequencesetEndpoint,
  post_billingpreviewEndpoint,
  get_operationjobEndpoint,
  create_bulkpdftozipgenerationEndpoint,
  get_bulkpdftozipgenerationEndpoint,
  post_createbillrunEndpoint,
  delete_deletebillrunEndpoint,
  get_billrunEndpoint,
  put_cancelbillrunEndpoint,
  put_postbillrunEndpoint,
  post_emailbillingdocumentsfrombillrunEndpoint,
  post_billingpreviewrunEndpoint,
  get_billingpreviewrunEndpoint,
  post_createpaymentsessionEndpoint,
  post_rsasignaturesEndpoint,
  post_decryptrsasignaturesEndpoint,
  get_hostedpagesEndpoint,
  post_createdraftopenpaymentmethodtypeEndpoint,
  put_publishopenpaymentmethodtypeEndpoint,
  put_updateopenpaymentmethodtypeEndpoint,
  get_openpaymentmethodtyperevisionEndpoint,
  get_openpaymentmethodtypepublishEndpoint,
  post_reconcilerefundEndpoint,
  get_refundsEndpoint,
  put_updaterefundEndpoint,
  delete_refundEndpoint,
  get_refundEndpoint,
  put_cancelrefundEndpoint,
  get_refundpartsEndpoint,
  get_refundpartEndpoint,
  get_refunditempartsEndpoint,
  get_refunditempartEndpoint,
  getbaselinemetricsEndpoint,
  getamountrecoveredEndpoint,
  getdocumentsuccessratebycustomergroupEndpoint,
  getcustomergroupmetricsEndpoint,
  createsummarystatementrunEndpoint,
  get_allaccountingcodesEndpoint,
  post_accountingcodeEndpoint,
  delete_accountingcodeEndpoint,
  get_accountingcodeEndpoint,
  put_accountingcodeEndpoint,
  put_activateaccountingcodeEndpoint,
  put_deactivateaccountingcodeEndpoint,
  get_allaccountingperiodsEndpoint,
  post_accountingperiodEndpoint,
  delete_accountingperiodEndpoint,
  get_accountingperiodEndpoint,
  put_updateaccountingperiodEndpoint,
  put_closeaccountingperiodEndpoint,
  put_pendingcloseaccountingperiodEndpoint,
  put_reopenaccountingperiodEndpoint,
  put_runtrialbalanceEndpoint,
  post_summaryjournalentryEndpoint,
  get_allsummaryjournalentriesEndpoint,
  delete_summaryjournalentryEndpoint,
  get_summaryjournalentryEndpoint,
  put_basicsummaryjournalentryEndpoint,
  put_summaryjournalentryEndpoint,
  post_journalrunEndpoint,
  delete_journalrunEndpoint,
  get_journalrunEndpoint,
  put_journalrunEndpoint,
  post_massupdaterEndpoint,
  get_massupdaterEndpoint,
  put_massupdaterEndpoint,
  post_eventtriggerEndpoint,
  get_eventtriggersEndpoint,
  get_eventtriggerEndpoint,
  put_eventtriggerEndpoint,
  delete_eventtriggerEndpoint,
  post_scheduledeventEndpoint,
  get_scheduledeventsEndpoint,
  get_scheduledeventbyidEndpoint,
  update_scheduledeventbyidEndpoint,
  delete_scheduledeventbyidEndpoint,
  post_create_notification_definitionEndpoint,
  get_query_notification_definitionsEndpoint,
  get_get_notification_definitionEndpoint,
  put_update_notification_definitionEndpoint,
  delete_delete_notification_definitionEndpoint,
  post_createorupdateemailtemplatesEndpoint,
  post_create_email_templateEndpoint,
  get_query_email_templatesEndpoint,
  get_get_email_templateEndpoint,
  put_update_email_templateEndpoint,
  delete_delete_email_templateEndpoint,
  createorupdatecallouttemplatesEndpoint,
  createcallouttemplateEndpoint,
  getcallouttemplatesEndpoint,
  getcallouttemplteEndpoint,
  updatecallouttemplateEndpoint,
  deletecallouttemplateEndpoint,
  createorupdatereusableblocksEndpoint,
  createreusableblockEndpoint,
  getreusableblocksEndpoint,
  getreusableblockEndpoint,
  updatereusableblockEndpoint,
  deletereusableblockEndpoint,
  delete_delete_notification_history_for_accountEndpoint,
  get_get_notification_history_deletion_taskEndpoint,
  post_resendcalloutnotificationsEndpoint,
  post_resendemailnotificationsEndpoint,
  get_callouthistoryEndpoint,
  get_emailhistoryEndpoint,
  getlistgroupsEndpoint,
  createanewgroupEndpoint,
  postbulkcreategroupsEndpoint,
  patchbulkpatchgroupsEndpoint,
  postbulkdeletegroupsEndpoint,
  getaspecificgroupEndpoint,
  updateaspecificgroupEndpoint,
  deleteaspecificgroupEndpoint,
  partiallyupdateaspecificgroupEndpoint,
  gettheressourcetypeEndpoint,
  getaspecificresourcetypeEndpoint,
  getschemaofscimEndpoint,
  gettheschemaofspecificscimEndpoint,
  gettheserviceproviderconfigEndpoint,
  getlistofusersEndpoint,
  createauserEndpoint,
  bulkcreateusersEndpoint,
  bulkupdateusersEndpoint,
  deletealistofusersEndpoint,
  getaspecificuserEndpoint,
  updateaspecificuserEndpoint,
  deleteaspecificuserEndpoint,
  partialupdateaspecificuserEndpoint,
  post_customobjectdefinitionsEndpoint,
  get_allcustomobjectdefinitionsinnamespaceEndpoint,
  post_updatecustomobjectdefinitionEndpoint,
  get_customobjectdefinitionbytypeEndpoint,
  delete_customobjectdefinitionbytypeEndpoint,
  post_customobjectrecordsEndpoint,
  get_allrecordsforcustomobjecttypeEndpoint,
  get_customobjectrecordbyidEndpoint,
  put_customobjectrecordEndpoint,
  patch_partialupdatecustomobjectrecordEndpoint,
  delete_customobjectrecordbyidEndpoint,
  post_customobjectrecordsbatchupdateordeleteEndpoint,
  post_customobjectbulkjobEndpoint,
  get_allcustomobjectbulkjobsEndpoint,
  get_customobjectbulkjobEndpoint,
  post_uploadfileforcustomobjectbulkjobEndpoint,
  get_customobjectbulkjoberrorsEndpoint,
  patch_customobjectbulkjobEndpoint,
  get_systemhealthapivolumesummaryEndpoint,
  getsystemhealthapifailurerecordsEndpoint,
  getsystemhealthapiperformancerecordsEndpoint,
  get_systemhealthbillingdocvolumesummaryEndpoint,
  getsystemhealthtaxrecordsEndpoint,
  delete_workflowversionEndpoint,
  get_workflowsEndpoint,
  post_workflowimportEndpoint,
  get_workflowsusagesEndpoint,
  get_workflowstasksEndpoint,
  put_workflowstasksupdateEndpoint,
  get_workflowstaskEndpoint,
  post_workflowstaskrerunEndpoint,
  get_workflow_runEndpoint,
  delete_workflowEndpoint,
  get_workflowEndpoint,
  patch_updateworkflowEndpoint,
  get_workflowexportEndpoint,
  post_run_workflowEndpoint,
  get_workflowversionsEndpoint,
  post_workflowversionsimportEndpoint,
  put_stopworkflowrunEndpoint,
  queryamendmentsEndpoint,
  queryamendmentbykeyEndpoint,
  querybillingrunsEndpoint,
  querybillingrunbykeyEndpoint,
  querydailyconsumptionsummariesEndpoint,
  querydailyconsumptionsummarybykeyEndpoint,
  querydeliveryadjustmentsEndpoint,
  querydeliveryadjustmentbykeyEndpoint,
  queryfulfillmentsEndpoint,
  queryfulfillmentbykeyEndpoint,
  queryprepaidbalancesEndpoint,
  queryprepaidbalancebykeyEndpoint,
  queryprepaidbalancefundsEndpoint,
  queryprepaidbalancefundbykeyEndpoint,
  queryprepaidbalancetransactionsEndpoint,
  queryprepaidbalancetransactionbykeyEndpoint,
  queryprocessedusagesEndpoint,
  queryprocessedusagebykeyEndpoint,
  queryrampsEndpoint,
  queryrampbykeyEndpoint,
  queryrateplansEndpoint,
  queryrateplanbykeyEndpoint,
  queryrateplanchargesEndpoint,
  queryrateplanchargebykeyEndpoint,
  queryrateplanchargetiersEndpoint,
  queryrateplanchargetierbykeyEndpoint,
  queryratingresultsEndpoint,
  queryratingresultbykeyEndpoint,
  queryrefundsEndpoint,
  queryrefundbykeyEndpoint,
  queryrefundapplicationsEndpoint,
  queryrefundapplicationbykeyEndpoint,
  queryrefundapplicationitemsEndpoint,
  queryrefundapplicationitembykeyEndpoint,
  getsummarystatementrunsEndpoint,
  getsummarystatementrunEndpoint,
  getsummarystatementsEndpoint,
  getsummarystatementEndpoint,
  querytaxationitemsEndpoint,
  querytaxationitembykeyEndpoint,
  queryusagesEndpoint,
  queryusagebykeyEndpoint,
  queryvalidityperiodsummarysEndpoint,
  queryvalidityperiodsummarybykeyEndpoint,
  querycustomobjectsEndpoint,
  querycustomobjectbykeyEndpoint,
  queryratingdetailsEndpoint,
  queryratingdetailbykeyEndpoint,
  get_dataqueryjobsEndpoint,
  post_dataqueryjobEndpoint,
  delete_dataqueryjobEndpoint,
  get_dataqueryjobEndpoint,
  post_batchqueryjobEndpoint,
  get_lastbatchqueryjobEndpoint,
  delete_batchqueryjobEndpoint,
  get_batchqueryjobEndpoint,
  get_downloaddeploymenttemplateEndpoint,
  post_comparetemplateEndpoint,
  post_migratetenantsettingsEndpoint,
  get_sourcecomponentdetailsEndpoint,
  get_templatesEndpoint,
  post_deploymenttemplateEndpoint,
  delete_deploymenttemplateEndpoint,
  get_deploymenttemplatedetailEndpoint,
  syncdeploymenttemplateEndpoint,
  comparedeploytenantEndpoint,
  comparedeploytemplateEndpoint,
  revertdeploymentEndpoint,
  fetchdeploymentlogsEndpoint,
  createbulkjobEndpoint,
  submitbulkjobEndpoint,
  getbulkjobsummaryEndpoint,
  cancelbulkjobEndpoint,
  deleteabortjobEndpoint,
  getdownloadlinksforjobEndpoint,
  getbulkjobsummariesEndpoint,
  getmappingsforjobEndpoint,
  post_datalabelingjobEndpoint,
  get_datalabelingjobEndpoint,
  post_regeneratebookingtransactionEndpoint,
  post_regeneratebillingtransactionEndpoint,
  post_createrevreceventsEndpoint,
  post_generaterevreceventsfordailyconsumptionEndpoint,
  post_createbookingdatebackfilljobEndpoint,
  get_listbookingdatebackfilljobsEndpoint,
  get_bookingdatebackfilljobbyidEndpoint,
  put_stopbookingdatebackfilljobbyidEndpoint,
  post_createdatabackfilljobEndpoint,
  get_databackfilljobbyidEndpoint,
  put_stopdatabackfilljobbyidEndpoint,
  get_listdatabackfilljobsEndpoint,
  get_databackfilltemplateEndpoint,
  get_listautobackfilljobEndpoint,
  post_createautobackfilljobEndpoint,
  get_autobackfilljobbyidEndpoint,
  put_stopautobackfilljobbyidEndpoint,
  action_postcreateEndpoint,
  action_postdeleteEndpoint,
  action_postqueryEndpoint,
  action_postquerymoreEndpoint,
  action_postupdateEndpoint,
  post_processsettingsbatchrequestEndpoint,
  get_listallsettingsEndpoint,
  get_filesEndpoint,
  put_filesEndpoint,
  get_filestatusEndpoint,
  object_postimportEndpoint,
  object_getimportEndpoint,
  get_customexchangeratesEndpoint,
  post_attachmentsEndpoint,
  delete_attachmentsEndpoint,
  get_attachmentsEndpoint,
  put_attachmentsEndpoint,
  get_attachmentslistEndpoint,
  get_describeEndpoint,
];
