import { ShoppingBag } from "lucide-react";
import { MAIN_WHATSAPP } from "../data/branches";
import type { Product } from "../data/products";

type Props = {
  product: Product;
  variant?: "primary" | "ghost" | "compact";
  className?: string;
};

/**
 * "Buy" / inquire button — opens WhatsApp with a pre-filled message
 * about the specific product the user is viewing.
 */
export default function BuyButton({
  product,
  variant = "primary",
  className = "",
}: Props) {
  const number = `966${MAIN_WHATSAPP.replace(/^0/, "")}`;
  const text = encodeURIComponent(
    `السلام عليكم، أرغب بالاستفسار وطلب شراء المنتج التالي:\n\n` +
      `• ${product.nameAr}\n` +
      `• ${product.nameEn}\n` +
      `• الماركة: ${product.brand}\n` +
      `• الكود: ${product.id}\n\n` +
      `أرجو تزويدي بالسعر والكمية المتوفرة. شكراً لكم.`,
  );
  const href = `https://wa.me/${number}?text=${text}`;

  const base =
    "inline-flex items-center justify-center gap-2 font-bold transition-all";

  const styles =
    variant === "primary"
      ? "px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 hover:-translate-y-0.5"
      : variant === "ghost"
        ? "px-4 py-2.5 rounded-xl bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50"
        : "px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm shadow shadow-emerald-600/30";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`${base} ${styles} ${className}`}
      aria-label={`اطلب ${product.nameAr} عبر واتساب`}
    >
      <ShoppingBag size={variant === "compact" ? 16 : 18} />
      {variant === "compact" ? "اطلب الآن" : "اطلب الآن عبر واتساب"}
    </a>
  );
}
