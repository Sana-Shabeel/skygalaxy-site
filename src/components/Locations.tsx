import { useMemo, useState } from "react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { branches, WORKING_HOURS } from "../data/branches";

const cities = ["الكل", "الرياض", "جدة", "مكة المكرمة"];

export default function Locations() {
  const [filter, setFilter] = useState<string>("الكل");

  const filtered = useMemo(
    () =>
      filter === "الكل" ? branches : branches.filter((b) => b.city === filter),
    [filter],
  );

  return (
    <section
      id="locations"
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-brand-50/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-bold">
            فروعنا
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950">
            نخدمكم من 7 فروع في المملكة
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            تفضّل بزيارتنا في أقرب فرع إليك، أو تواصل معنا مباشرةً عبر الهاتف.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm text-brand-800 font-semibold">
            <Clock size={16} /> {WORKING_HOURS}
          </div>
        </div>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                filter === c
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-brand-400 hover:text-brand-700"
              }`}
            >
              {c}
              <span className="ms-2 text-xs opacity-70">
                (
                {c === "الكل"
                  ? branches.length
                  : branches.filter((b) => b.city === c).length}
                )
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <article
              key={b.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 start-3 end-3 flex items-end justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-[11px] font-bold text-brand-800">
                      {b.city}
                    </span>
                    <h3 className="mt-1.5 text-white text-xl font-black drop-shadow">
                      {b.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin
                    className="shrink-0 text-brand-600 mt-0.5"
                    size={18}
                  />
                  <p className="text-sm leading-relaxed">{b.address}</p>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="shrink-0 text-brand-600" size={18} />
                  <a
                    href={`tel:${b.phone}`}
                    dir="ltr"
                    className="text-sm font-bold tracking-wide hover:text-brand-700"
                  >
                    {b.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock className="shrink-0 text-brand-600" size={18} />
                  <span className="text-sm">{WORKING_HOURS}</span>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-2">
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-colors"
                  >
                    <Navigation size={16} />
                    الموقع على الخريطة
                  </a>
                  <a
                    href={`https://wa.me/966${b.phone.replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-emerald-500 text-white text-sm font-bold hover:bg-emerald-600 transition-colors"
                  >
                    واتساب
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
