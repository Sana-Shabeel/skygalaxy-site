import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { products as ALL_PRODUCTS } from "../data/products";
import { CartContext } from "./cart-context";
import type { CartContextValue, CartItem, CartLine } from "./cart-types";

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

const productIndex = new Map(ALL_PRODUCTS.map((p) => [p.id, p]));

function loadInitialLines(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (l) =>
        l &&
        typeof l.productId === "string" &&
        typeof l.qty === "number" &&
        productIndex.has(l.productId),
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, () => ({
    lines: loadInitialLines(),
  }));
  const [isOpen, setIsOpen] = useState(false);
  const firstRun = useRef(true);

  // Persist to localStorage whenever lines change (skip the very first run).
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      /* ignore */
    }
  }, [state.lines]);

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

  const value: CartContextValue = useMemo(
    () => ({
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
    }),
    [
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
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
