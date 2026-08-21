/**
 * Hassaan Travel - eSIM Pricing Engine
 *
 * IMPORTANT:
 * - Supplier prices come from eSIMAccess.
 * - Customers always see EUR.
 * - Supplier currency is never exposed to customers.
 * - Markup is applied server-side.
 * - Final customer prices are rounded to clean EUR amounts.
 */

const DEFAULT_USD_TO_EUR = 0.86;

// Keep markup configurable.
// Change this value later without touching the UI.
const MARKUP_PERCENT = 35;

export interface CustomerPriceResult {
  supplierPrice: number;
  supplierCurrency: string;
  convertedCostEUR: number;
  customerPriceEUR: number;
}

/**
 * Convert supplier price to EUR.
 *
 * eSIMAccess returns monetary values in minor units.
 * eSIMAccess uses four decimal places for package prices.
 * Example: 10000 USD units => $1.00.
 */
export function convertMinorUnitToEUR(
  amount: number,
  currency: string,
  usdToEur: number = DEFAULT_USD_TO_EUR,
): number {
  const normalizedCurrency = currency.toUpperCase();

  const majorAmount = amount / 10_000;

  if (normalizedCurrency === "EUR") {
    return majorAmount;
  }

  if (normalizedCurrency === "USD") {
    return majorAmount * usdToEur;
  }

  throw new Error(`Unsupported supplier currency: ${normalizedCurrency}`);
}

/**
 * Apply our markup and return a clean customer-facing EUR price.
 *
 * We intentionally do NOT expose decimal prices such as:
 * €7.70
 * €10.10
 * €12.35
 *
 * Instead prices are rounded upward to a clean EUR amount.
 */
export function calculateCustomerPrice(
  convertedCostEUR: number,
  markupPercent: number = MARKUP_PERCENT,
): number {
  const withMarkup = convertedCostEUR * (1 + markupPercent / 100);

  return Math.ceil(withMarkup);
}

/**
 * Complete supplier -> customer calculation.
 */
export function getCustomerPrice(
  supplierAmount: number,
  supplierCurrency: string,
): CustomerPriceResult {
  const convertedCostEUR = convertMinorUnitToEUR(
    supplierAmount,
    supplierCurrency,
  );

  const customerPriceEUR = calculateCustomerPrice(convertedCostEUR);

  return {
    supplierPrice: supplierAmount / 10_000,
    supplierCurrency,
    convertedCostEUR,
    customerPriceEUR,
  };
}

/**
 * Customer-facing formatter.
 *
 * Always EUR.
 * Always a clean whole number.
 */
export function formatCustomerPrice(priceEUR: number): string {
  return `€ ${Math.round(priceEUR)}`;
}
