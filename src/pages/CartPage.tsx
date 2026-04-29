import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/useCart";
import { formatSar } from "../context/cart-types";
import Price from "../components/Price";

export default function CartPage() {
  const { items, subtotal, totalQty, remove, setQty, clear, hasQuoteOnly } =
    useCart();

  return (
    <div className="min-h-screen bg-[#fafbff]">
      <section className="relative pt-28 pb-8 sm:pt-32 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 overflow-hidden">
        <div className="absolute inset-0 starfield opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-200 hover:text-white text-sm font-semibold transition-colors"
          >
            <ArrowRight size={16} />
            متابعة التسوّق
          </Link>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black text-white">
            سلة المشتريات
          </h1>
          <p className="mt-2 text-brand-100/90">
            {totalQty > 0
              ? `لديك ${totalQty} منتج في السلة`
              : "سلتك فارغة حالياً"}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                <ShoppingBag className="text-slate-400" size={32} />
              </div>
              <h2 className="mt-4 text-xl font-black text-brand-950">
                لا توجد منتجات في سلتك
              </h2>
              <p className="mt-2 text-slate-600">
                ابدأ بتصفّح كتالوج المنتجات وأضف ما يناسبك.
              </p>
              <Link
                to="/products"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
              >
                تصفّح المنتجات
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Lines */}
              <ul className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
                {items.map(({ product: p, qty, lineTotal }) => (
                  <li
                    key={p.id}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      to={`/products/${p.id}`}
                      className="block w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0"
                    >
                      <img
                        src={p.images[0]}
                        alt={p.nameAr}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="text-[11px] font-bold text-brand-700 uppercase">
                        {p.brand}
                      </div>
                      <Link
                        to={`/products/${p.id}`}
                        className="mt-0.5 text-base sm:text-lg font-black text-brand-950 leading-snug hover:text-brand-700 line-clamp-2"
                      >
                        {p.nameAr}
                      </Link>
                      <div className="mt-1">
                        <Price product={p} size="sm" />
                      </div>

                      <div className="mt-auto pt-3 flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-lg border border-slate-200">
                          <button
                            type="button"
                            onClick={() => setQty(p.id, qty - 1)}
                            className="px-3 py-2 hover:bg-slate-100 text-slate-600"
                            aria-label="تقليل الكمية"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 text-sm font-black text-brand-950 min-w-[32px] text-center">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(p.id, qty + 1)}
                            className="px-3 py-2 hover:bg-slate-100 text-slate-600"
                            aria-label="زيادة الكمية"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <div className="flex items-center gap-4">
                          {p.priceSar != null && (
                            <span className="text-base font-black text-brand-950">
                              {formatSar(lineTotal)}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => remove(p.id)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700"
                          >
                            <Trash2 size={14} />
                            حذف
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Summary */}
              <aside className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 sticky top-24">
                <h2 className="text-lg font-black text-brand-950">
                  ملخّص الطلب
                </h2>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-slate-600">المجموع الفرعي</dt>
                    <dd className="font-black text-brand-950">
                      {formatSar(subtotal)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-600">الشحن</dt>
                    <dd className="font-semibold text-slate-500">
                      يُحتسب عند الدفع
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-600">ضريبة القيمة المضافة</dt>
                    <dd className="font-semibold text-slate-500">
                      شاملة في السعر
                    </dd>
                  </div>
                </dl>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm text-slate-600 font-semibold">
                    الإجمالي
                  </span>
                  <span className="text-2xl font-black text-brand-950">
                    {formatSar(subtotal)}
                  </span>
                </div>

                {hasQuoteOnly && (
                  <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
                    تحتوي سلتك على منتجات بأسعار حسب الطلب. سنُكمل طلبك عبر
                    واتساب لتأكيد السعر النهائي والشحن.
                  </p>
                )}

                <Link
                  to="/checkout"
                  className="mt-5 block w-full text-center px-5 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-lg shadow-brand-600/30 transition-colors"
                >
                  المتابعة إلى الدفع
                </Link>
                <button
                  type="button"
                  onClick={clear}
                  className="mt-3 w-full text-sm font-semibold text-slate-500 hover:text-rose-600"
                >
                  تفريغ السلة
                </button>
              </aside>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
