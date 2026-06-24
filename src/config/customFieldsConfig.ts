import type { ApiEndpoint, CustomFieldObjectType } from '../types/api';

export function detectObjectType(endpoint: ApiEndpoint): CustomFieldObjectType | null {
  const path = endpoint.path.toLowerCase();
  // Order matters — more specific paths first
  if (path.includes('/credit-memo')) return 'CreditMemo';
  if (path.includes('/debit-memo')) return 'DebitMemo';
  if (path.includes('/rate-plan-charge') || path.includes('/rateplancharge')) return 'RatePlanCharge';
  if (path.includes('/rate-plan') || path.includes('/rateplan')) return 'RatePlan';
  if (path.includes('/subscription')) return 'Subscription';
  if (path.includes('/order')) return 'Order';
  if (path.includes('/invoice')) return 'Invoice';
  if (path.includes('/payment')) return 'Payment';
  if (path.includes('/contact')) return 'Contact';
  if (path.includes('/product') || path.includes('/catalog')) return 'Product';
  if (path.includes('/account')) return 'Account';
  return null;
}
