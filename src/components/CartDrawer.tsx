import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "../context/useCart";
import { formatSar } from "../context/cart-types";

export default function CartDrawer() {
  const { isOpen, close, items, subtotal, totalQty, remove, setQty, clear } =
    useCart();

  // Lock body scroll while open + close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel — slides in from the start (right in RTL, left in LTR) */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="سلة المشتريات"
        className={`absolute top-0 bottom-0 start-0 w-full sm:w-[440px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen
            ? "translate-x-0"
            : "rtl:translate-x-full ltr:-translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-gradient-to-l from-brand-50 to-white">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h2 className="text-base font-black text-brand-950">
                سلة المشتريات
              </h2>
              <p className="text-[11px] text-slate-500 font-semibold">
                {totalQty} منتج
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
            aria-label="إغلاق"
          >
            <X size={20} />
          </button>
        </header>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
              <ShoppingBag className="text-slate-400" size={32} />
            </div>
            <h3 className="mt-4 text-lg font-black text-brand-950">
              سلتك فارغة
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              تصفّح الكتالوج وأضف منتجاتك المفضّلة لإتمام الطلب.
            </p>
            <Link
              to="/products"
              onClick={close}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
            >
              تصفّح المنتجات
            </Link>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {items.map(({ product: p, qty, lineTotal }) => (
              <li key={p.id} className="flex gap-3 p-4">
                <Link
                  to={`/products/${p.id}`}
                  onClick={close}
                  className="block w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0"
                >
                  <img
                    src={p.images[0]}
                    alt={p.nameAr}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/products/${p.id}`}
                    onClick={close}
                    className="block"
                  >
                    <div className="text-[11px] font-bold text-brand-700 line-clamp-1">
                      {p.brand}
                    </div>
                    <h4 className="text-sm font-black text-brand-950 leading-snug line-clamp-2">
                      {p.nameAr}
                    </h4>
                  </Link>

                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center rounded-lg border border-slate-200 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setQty(p.id, qty - 1)}
                        className="px-2 py-1.5 hover:bg-slate-100 text-slate-600"
                        aria-label="تقليل الكمية"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm font-black text-brand-950 min-w-[28px] text-center">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(p.id, qty + 1)}
                        className="px-2 py-1.5 hover:bg-slate-100 text-slate-600"
                        aria-label="زيادة الكمية"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <div className="text-end">
                      {p.priceSar != null ? (
                        <div className="text-sm font-black text-brand-950">
                          {formatSar(lineTotal)}
                        </div>
                      ) : (
                        <div className="text-xs font-bold text-amber-700">
                          السعر عند الطلب
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => remove(p.id)}
                        className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:text-rose-700"
                      >
                        <Trash2 size={12} />
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <footer className="border-t border-slate-200 p-5 space-y-3 bg-slate-50/60">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 font-semibold">
                المجموع الفرعي
              </span>
              <span className="text-lg font-black text-brand-950">
                {formatSar(subtotal)}
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              الشحن والضريبة تُحتسب عند الدفع.
            </p>
            <Link
              to="/checkout"
              onClick={close}
              className="block w-full text-center px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-lg shadow-brand-600/30 transition-colors"
            >
              إتمام الطلب
            </Link>
            <div className="flex items-center justify-between gap-2">
              <Link
                to="/cart"
                onClick={close}
                className="text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                عرض السلة كاملة
              </Link>
              <button
                type="button"
                onClick={clear}
                className="text-xs font-semibold text-slate-500 hover:text-rose-600"
              >
                تفريغ السلة
              </button>
            </div>
          </footer>
        )}
      </aside>
    </div>
  );
}
