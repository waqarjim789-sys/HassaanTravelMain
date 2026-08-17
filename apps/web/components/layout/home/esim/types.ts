// ======================================================
// Hassaan Travel - HT Connect Global eSIM
// Type Definitions
// ======================================================

export interface EsimPackage {
  id: number;

  /**
   * Supplier package identifier.
   */
  packageCode?: string;

  /**
   * Supplier package name.
   */
  title: string;

  /**
   * Customer selling price in EUR.
   */
  price: number;

  /**
   * Original supplier price in USD.
   */
  supplierPriceUSD?: number;

  /**
   * Supplier price converted into EUR.
   */
  supplierCostEUR?: number;

  days: number;

  data: string;

  network: string;

  coverage: string;

  speed?: string;

  operator?: string;

  activation?: string;

  locationCode?: string;

  slug?: string;
}

export interface Country {
  id: number;

  code: string;

  country: string;

  flag: string;

  image: string;

  /**
   * Lowest customer selling price in EUR.
   */
  startingPrice: number;

  packageCount: number;

  packages: EsimPackage[];
}

export interface CountryCardProps {
  country: Country;

  onSelect: (country: Country) => void;
}

export interface CountryGridProps {
  countries: Country[];

  onSelect: (country: Country) => void;
}

export interface PackageModalProps {
  country: Country | null;

  onClose: () => void;
}

export interface PaymentDialogProps {
  open: boolean;

  packageItem: EsimPackage | null;

  country: Country | null;

  onClose: () => void;
}