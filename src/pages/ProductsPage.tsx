import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import ProductTile from "../components/ProductTile";
import { products, searchableText } from "../data/products";

/**
 * Short, friendly Arabic label for each brand chip.
 * Anything not in the map falls back to its raw `brand` value.
 */
const BRAND_LABELS: Record<string, string> = {
  "Tremco Commercial Sealants & Waterproofing": "Tremco",
  "Weber (Saint-Gobain)": "Weber",
  "KPI (Kuwait Polyurethane Industry)": "KPI",
  "Sky Galaxy (SME Series)": "Sky Galaxy",
};

const brandLabel = (b: string) => BRAND_LABELS[b] ?? b;

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("الكل");
  const [activeBrand, setActiveBrand] = useState<string>("الكل");
  const location = useLocation();

  // Categories derived from data
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["الكل", ...Array.from(set)];
  }, []);

  // Brands derived from data — sorted by product count (most popular first)
  const brands = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of products)
      counts.set(p.brand, (counts.get(p.brand) ?? 0) + 1);
    const sorted = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([brand]) => brand);
    return ["الكل", ...sorted];
  }, []);

  // Filter
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "الكل" || p.category === activeCategory;
      if (!matchesCategory) return false;
      const matchesBrand = activeBrand === "الكل" || p.brand === activeBrand;
      if (!matchesBrand) return false;
      if (!q) return true;
      return searchableText(p).includes(q);
    });
  }, [query, activeCategory, activeBrand]);

  // Scroll to hash if present (e.g. /products#tremproof-201)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const id = location.hash.slice(1);
    // wait a tick so cards render
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [location.hash, results.length]);

  return (
    <div className="min-h-screen bg-[#fafbff]">
      {/* Page hero */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="absolute -top-32 -end-32 w-96 h-96 bg-brand-400/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brand-200 hover:text-white text-sm font-semibold transition-colors"
          >
            <ArrowRight size={16} />
            العودة إلى الرئيسية
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            كتالوج المنتجات
          </h1>
          <p className="mt-3 text-brand-100/90 text-base sm:text-lg max-w-2xl">
            تصفّح جميع منتجاتنا من العوازل ومواد البناء، وابحث بالاسم أو الماركة
            أو الاستخدام.
          </p>

          {/* Search bar */}
          <div className="mt-8 relative max-w-2xl">
            <Search
              size={20}
              className="absolute top-1/2 -translate-y-1/2 start-4 text-slate-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن منتج… مثلاً: تريمبروف، إيبوكسي، خزانات مياه، Weber"
              className="w-full ps-12 pe-12 py-4 rounded-2xl bg-white/95 backdrop-blur text-brand-950 placeholder:text-slate-400 font-semibold shadow-2xl focus:ring-4 focus:ring-brand-400/40 outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute top-1/2 -translate-y-1/2 end-3 p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
                aria-label="مسح البحث"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filters + results */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand chips */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
              <Building2 size={16} />
              الماركة:
            </div>
            {brands.map((b) => {
              const active = b === activeBrand;
              const count =
                b === "الكل"
                  ? products.length
                  : products.filter((p) => p.brand === b).length;
              return (
                <button
                  key={b}
                  onClick={() => setActiveBrand(b)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                    active
                      ? "bg-brand-950 text-white shadow-md shadow-brand-950/30"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-700"
                  }`}
                >
                  {brandLabel(b)}
                  <span className="ms-2 text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Category chips */}
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
              <SlidersHorizontal size={16} />
              التصنيف:
            </div>
            {categories.map((c) => {
              const active = c === activeCategory;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                    active
                      ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-700"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              {results.length > 0 ? (
                <>
                  عرض{" "}
                  <span className="font-bold text-brand-950">
                    {results.length}
                  </span>{" "}
                  من أصل{" "}
                  <span className="font-bold text-brand-950">
                    {products.length}
                  </span>{" "}
                  منتج
                </>
              ) : (
                "لا توجد نتائج مطابقة"
              )}
            </p>
            {(query || activeCategory !== "الكل" || activeBrand !== "الكل") && (
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("الكل");
                  setActiveBrand("الكل");
                }}
                className="text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                إعادة تعيين
              </button>
            )}
          </div>

          {/* Results */}
          {results.length > 0 ? (
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {results.map((p) => (
                <ProductTile key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                <Search className="text-slate-400" size={28} />
              </div>
              <h3 className="mt-4 text-xl font-black text-brand-950">
                لم نعثر على منتج بهذا الاسم
              </h3>
              <p className="mt-2 text-slate-600">
                جرّب كلمات مختلفة أو تواصل معنا وسنساعدك في إيجاده.
              </p>
              <Link
                to="/#contact"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
