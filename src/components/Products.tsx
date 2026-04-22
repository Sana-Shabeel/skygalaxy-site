import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Products() {
  const featured = products.slice(0, 6);

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#fafbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-bold">
            منتجاتنا
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950">
            منتجات عالمية بأيدٍ موثوقة
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            نحن الموزّع المعتمد لأبرز العلامات التجارية في عالم العزل ومواد
            البناء — من الولايات المتحدة وألمانيا وفرنسا، إضافة إلى منتجاتنا
            المحلية بجودة عالية.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-bold text-slate-500">
          {[
            "Tremco 🇺🇸",
            "Weber — Saint-Gobain 🇫🇷",
            "MC-Bauchemie 🇩🇪",
            "Dependable Depot 🇺🇸",
            "DCP",
            "Graco 🇺🇸",
            "ARNON",
            "KPI 🇰🇼",
            "MatteX",
            "SABIC LDPE",
            "Sky Galaxy 🇸🇦",
          ].map((b) => (
            <span
              key={b}
              className="px-3 py-1.5 rounded-full bg-white border border-slate-200"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.id}
                to={`/products#${p.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.nameAr}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${p.accent} opacity-30 mix-blend-multiply`}
                  />
                  <div className="absolute top-4 start-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon className="text-brand-700" size={22} />
                  </div>
                  <span className="absolute top-4 end-4 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-brand-800 shadow">
                    {p.badge}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold text-brand-700">
                    {p.brand}
                  </div>
                  <h3 className="mt-1 text-lg font-black text-brand-950 leading-tight">
                    {p.nameAr}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 group-hover:gap-3 transition-all">
                    التفاصيل
                    <ArrowLeft size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5"
          >
            تصفّح كتالوج المنتجات الكامل
            <ArrowLeft size={18} />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-brand-800 font-bold hover:bg-slate-50 transition-colors"
          >
            اطلب عرض سعر
          </a>
        </div>
      </div>
    </section>
  );
}
