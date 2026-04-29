import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/useCart";

type Props = {
  solid: boolean;
};

export default function CartButton({ solid }: Props) {
  const { totalQty, toggle } = useCart();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="فتح السلة"
      className={`relative inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-colors ${
        solid
          ? "text-brand-900 hover:bg-brand-50"
          : "text-white hover:bg-white/10"
      }`}
    >
      <ShoppingCart size={20} />
      {totalQty > 0 && (
        <span className="absolute -top-1 -end-1 min-w-[20px] h-5 px-1.5 rounded-full bg-emerald-500 text-white text-[11px] font-black flex items-center justify-center shadow ring-2 ring-white">
          {totalQty > 99 ? "99+" : totalQty}
        </span>
      )}
    </button>
  );
}
