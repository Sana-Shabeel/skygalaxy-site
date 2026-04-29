import type { Product } from "../data/products";
import { formatSar } from "../context/cart-types";

type Props = {
  product: Product;
  size?: "sm" | "md" | "lg";
  className?: string;
};

/** Renders a product price or a graceful "request a quote" fallback. */
export default function Price({ product, size = "md", className = "" }: Props) {
  const sizes = {
    sm: { price: "text-sm", unit: "text-[10px]" },
    md: { price: "text-base", unit: "text-xs" },
    lg: { price: "text-2xl", unit: "text-sm" },
  } as const;
  const s = sizes[size];

  if (product.priceSar == null) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-bold text-amber-700 ${s.price} ${className}`}
      >
        السعر عند الطلب
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-black text-brand-950 ${s.price} ${className}`}
    >
      {formatSar(product.priceSar)}
      {product.unitAr && (
        <span className={`font-semibold text-slate-500 ${s.unit}`}>
          / {product.unitAr}
        </span>
      )}
    </span>
  );
}
