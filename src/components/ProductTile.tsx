import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { Product } from "../data/products";
import AddToCartButton from "./AddToCartButton";
import Price from "./Price";

type Props = {
  product: Product;
};

/**
 * Compact e-commerce style tile used on the products listing page.
 * Clicking anywhere on the card (except the buy button) navigates
 * to the full product detail page.
 */
export default function ProductTile({ product: p }: Props) {
  const Icon = p.icon;

  return (
    <Link
      to={`/products/${p.id}`}
      id={p.id}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 scroll-mt-24"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={p.images[0]}
          alt={p.nameAr}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${p.accent} opacity-25 mix-blend-multiply`}
        />

        <div className="absolute top-3 start-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow">
          <Icon className="text-brand-700" size={20} />
        </div>

        <span className="absolute top-3 end-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold text-brand-800 shadow">
          {p.badge}
        </span>

        {p.kind === "equipment" && (
          <span className="absolute bottom-3 start-3 px-2.5 py-1 rounded-full bg-amber-400/95 text-amber-950 text-[10px] font-extrabold shadow">
            معدّات احترافية
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="text-[11px] font-bold text-brand-700 uppercase tracking-wide line-clamp-1">
          {p.brand}
        </div>
        <h3 className="mt-1 text-base sm:text-lg font-black text-brand-950 leading-snug line-clamp-2">
          {p.nameAr}
        </h3>
        <p
          dir="ltr"
          className="text-xs text-slate-500 font-semibold text-start line-clamp-1 mt-0.5"
        >
          {p.nameEn}
        </p>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
          {p.description}
        </p>

        {/* Price */}
        <div className="mt-3">
          <Price product={p} />
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 group-hover:gap-2.5 transition-all">
            التفاصيل
            <ArrowLeft size={16} />
          </span>
          <AddToCartButton product={p} variant="compact" />
        </div>
      </div>
    </Link>
  );
}
