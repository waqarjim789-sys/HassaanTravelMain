// ======================================================
// Hassaan Travel - HT Connect Global eSIM
// Type Definitions
// ======================================================

export interface EsimPackage {
  id: number;
  title: string;
  price: number;
  days: number;
  data: string;
  network: string;
  coverage: string;
  speed?: string;
  operator?: string;
  activation?: string;
}

export interface Country {
  id: number;
  code: string;
  country: string;
  flag: string;
  image: string;

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