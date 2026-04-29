import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { products as ALL_PRODUCTS, type Product } from "../data/products";

export type CartLine = {
  productId: string;
  qty: number;
};

type State = {
  lines: CartLine[];
};

type Action =
  | { type: "ADD"; productId: string; qty?: number }
  | { type: "REMOVE"; productId: string }
  | { type: "SET_QTY"; productId: string; qty: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; lines: CartLine[] };

const STORAGE_KEY = "skygalaxy.cart.v1";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const qty = action.qty ?? 1;
      const existing = state.lines.find(
        (l) => l.productId === action.productId,
      );
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.productId === action.productId ? { ...l, qty: l.qty + qty } : l,
          ),
        };
      }
      return { lines: [...state.lines, { productId: action.productId, qty }] };
    }
    case "REMOVE":
      return {
        lines: state.lines.filter((l) => l.productId !== action.productId),
      };
    case "SET_QTY": {
      if (action.qty <= 0) {
        return {
          lines: state.lines.filter((l) => l.productId !== action.productId),
        };
      }
      return {
        lines: state.lines.map((l) =>
          l.productId === action.productId ? { ...l, qty: action.qty } : l,
        ),
      };
    }
    case "CLEAR":
      return { lines: [] };
    case "HYDRATE":
      return { lines: action.lines };
    default:
      return state;
  }
}

export type CartItem = {
  product: Product;
  qty: number;
  /** Subtotal in SAR — 0 when the product has no price (quote-only). */
  lineTotal: number;
};

type CartContextValue = {
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

const CartContext = createContext<CartContextValue | null>(null);

const productIndex = new Map(ALL_PRODUCTS.map((p) => [p.id, p]));

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) {
          // Filter out lines whose product no longer exists in the catalog.
          const valid = parsed.filter(
            (l) =>
              l &&
              typeof l.productId === "string" &&
              typeof l.qty === "number" &&
              productIndex.has(l.productId),
          );
          dispatch({ type: "HYDRATE", lines: valid });
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Persist after hydration.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      /* ignore */
    }
  }, [state.lines, hydrated]);

  const items = useMemo<CartItem[]>(() => {
    return state.lines
      .map((l) => {
        const product = productIndex.get(l.productId);
        if (!product) return null;
        const lineTotal = (product.priceSar ?? 0) * l.qty;
        return { product, qty: l.qty, lineTotal };
      })
      .filter((x): x is CartItem => x !== null);
  }, [state.lines]);

  const totalQty = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.lineTotal, 0),
    [items],
  );
  const hasQuoteOnly = useMemo(
    () => items.some((i) => i.product.priceSar == null),
    [items],
  );

  const add = useCallback((productId: string, qty = 1) => {
    dispatch({ type: "ADD", productId, qty });
    setIsOpen(true);
  }, []);
  const remove = useCallback((productId: string) => {
    dispatch({ type: "REMOVE", productId });
  }, []);
  const setQty = useCallback((productId: string, qty: number) => {
    dispatch({ type: "SET_QTY", productId, qty });
  }, []);
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((o) => !o), []);

  const value: CartContextValue = {
    items,
    totalQty,
    subtotal,
    hasQuoteOnly,
    isOpen,
    add,
    remove,
    setQty,
    clear,
    open,
    close,
    toggle,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

/** Format a SAR amount with Arabic-Indic digits and ر.س suffix. */
export function formatSar(n: number): string {
  const formatted = new Intl.NumberFormat("ar-SA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
  return `${formatted} ر.س`;
}
