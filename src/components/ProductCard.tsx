import type { Product } from "../data/products";

type Props = {
  product: Product;
  reverse?: boolean;
};

export default function ProductCard({ product: p, reverse = false }: Props) {
  const Icon = p.icon;
  return (
    <article
      id={p.id}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 hover:shadow-2xl transition-all duration-500 scroll-mt-24"
    >
      <div className="grid lg:grid-cols-5">
        {/* Image side */}
        <div
          className={`relative lg:col-span-2 min-h-[300px] lg:min-h-[440px] ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <img
            src={p.images[0]}
            alt={p.nameAr}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-tr ${p.accent} opacity-25 mix-blend-multiply`}
          />

          <div className="absolute top-5 start-5 flex items-center gap-2">
            <div className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
              <Icon className="text-brand-700" size={22} />
            </div>
            <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-xs font-bold text-brand-800 shadow">
              {p.badge}
            </span>
          </div>

          {p.origin && (
            <span className="absolute bottom-5 start-5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-white text-xs font-semibold">
              {p.origin}
            </span>
          )}

          {p.images.length > 1 && (
            <div className="absolute bottom-5 end-5 flex gap-2">
              {p.images.slice(1).map((img) => (
                <div
                  key={img}
                  className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-white/80 shadow-lg"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content side */}
        <div
          className={`lg:col-span-3 p-6 sm:p-8 lg:p-10 ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-brand-700">{p.brand}</span>
            {p.brandAr && <span className="text-slate-400">— {p.brandAr}</span>}
            {p.kind === "equipment" && (
              <span className="ms-auto px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                معدّات احترافية
              </span>
            )}
          </div>
          <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-black text-brand-950 leading-tight">
            {p.nameAr}
          </h3>
          <p
            dir="ltr"
            className="mt-1 text-sm text-slate-500 font-semibold text-start"
          >
            {p.nameEn}
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            {p.description}
          </p>

          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-2">
              المميزات الرئيسية
            </h4>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${p.accent} flex-shrink-0`}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.specs.map((s) => (
              <div
                key={s.label}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs"
              >
                <span className="text-slate-500">{s.label}: </span>
                <span className="font-bold text-brand-950">{s.value}</span>
              </div>
            ))}
          </div>

          {p.applications && (
            <div className="mt-5 pt-5 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-2">
                الاستخدامات
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {p.applications.map((a) => (
                  <span
                    key={a}
                    className="px-2.5 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
