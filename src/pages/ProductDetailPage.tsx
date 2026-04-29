import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, FileText, Phone } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductTile from "../components/ProductTile";
import BuyButton from "../components/BuyButton";
import { MAIN_WHATSAPP } from "../data/branches";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fafbff] flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-black text-brand-950">
            لم يتم العثور على المنتج
          </h1>
          <p className="mt-3 text-slate-600">
            ربما تم نقل هذا المنتج أو إزالته من الكتالوج.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
          >
            <ArrowRight size={16} />
            العودة إلى المنتجات
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.brand === product.brand),
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#fafbff]">
      {/* Hero / breadcrumb */}
      <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-10 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 overflow-hidden">
        <div className="absolute inset-0 starfield opacity-40" />
        <div className="absolute -top-32 -end-32 w-96 h-96 bg-brand-400/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-200">
            <Link to="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">
              المنتجات
            </Link>
            <span>/</span>
            <span className="text-white font-semibold line-clamp-1">
              {product.nameAr}
            </span>
          </nav>

          <Link
            to="/products"
            className="mt-4 inline-flex items-center gap-2 text-brand-200 hover:text-white text-sm font-semibold transition-colors"
          >
            <ArrowRight size={16} />
            العودة إلى الكتالوج
          </Link>
        </div>
      </section>

      {/* Main product card */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCard product={product} />

          {/* CTA strip */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2 lg:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-black text-emerald-900">
                  مهتم بهذا المنتج؟
                </h3>
                <p className="mt-1 text-sm text-emerald-800/80">
                  اطلب عرض سعر مخصص وتأكيد التوفر خلال دقائق عبر واتساب.
                </p>
              </div>
              <BuyButton product={product} />
            </div>

            <a
              href={`tel:${MAIN_WHATSAPP}`}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-400 hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
                <Phone size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">
                  اتصل بنا مباشرة
                </div>
                <div
                  dir="ltr"
                  className="text-base font-black text-brand-950 text-start"
                >
                  {MAIN_WHATSAPP}
                </div>
              </div>
            </a>
          </div>

          {/* Catalog download */}
          <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
                <FileText size={22} />
              </div>
              <div>
                <div className="text-base font-black text-brand-950">
                  تحميل ملف الشركة الكامل
                </div>
                <div className="text-xs text-slate-500">
                  جميع المنتجات والمواصفات الفنية في ملف PDF واحد.
                </div>
              </div>
            </div>
            <a
              href="/sky-galaxy-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-brand-950 hover:bg-brand-900 text-white text-sm font-bold transition-colors"
            >
              تحميل PDF
            </a>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-brand-950">
                  منتجات ذات صلة
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  اختيارات مشابهة من نفس التصنيف أو الماركة.
                </p>
              </div>
              <Link
                to="/products"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-900"
              >
                عرض الكل
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductTile key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
