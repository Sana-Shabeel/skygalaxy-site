import type { Product } from "../data/products";

export type CartLine = {
  productId: string;
  qty: number;
};

export type CartItem = {
  product: Product;
  qty: number;
  /** Subtotal in SAR — 0 when the product has no price (quote-only). */
  lineTotal: number;
};

export type CartContextValue = {
  items: CartItem[];
  totalQty: number;
  subtotal: number;
  /** True when at least one item is quote-only (no online price). */
  hasQuoteOnly: boolean;
  isOpen: boolean;
  add: (productId: string, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

/** Format a SAR amount with localized digits and ر.س suffix. */
export function formatSar(n: number): string {
  const formatted = new Intl.NumberFormat("ar-SA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
  return `${formatted} ر.س`;
}
