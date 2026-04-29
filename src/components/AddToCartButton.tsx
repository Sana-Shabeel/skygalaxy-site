import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/useCart";
import type { Product } from "../data/products";

type Props = {
  product: Product;
  qty?: number;
  variant?: "primary" | "compact" | "ghost";
  className?: string;
};

/**
 * Adds a product to the cart. Shows a brief "added" state, and falls back
 * to nothing if the product happens to be quote-only — pricing rules are
 * still applied at checkout time, but the item lives in the cart either way.
 */
export default function AddToCartButton({
  product,
  qty = 1,
  variant = "primary",
  className = "",
}: Props) {
  const { add } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(product.id, qty);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  };

  const base =
    "inline-flex items-center justify-center gap-2 font-bold transition-all";

  const styles =
    variant === "primary"
      ? "px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30 hover:-translate-y-0.5"
      : variant === "ghost"
        ? "px-4 py-2.5 rounded-xl bg-white border border-brand-200 text-brand-700 hover:bg-brand-50"
        : "px-3 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm shadow shadow-brand-600/30";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      aria-label={`أضف ${product.nameAr} إلى السلة`}
    >
      {justAdded ? (
        <>
          <Check size={variant === "compact" ? 16 : 18} />
          تمت الإضافة
        </>
      ) : (
        <>
          <Plus size={variant === "compact" ? 16 : 18} />
          {variant === "compact" ? "أضف للسلة" : "أضف إلى السلة"}
        </>
      )}
    </button>
  );
}
