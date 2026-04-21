import { Droplets, Flame, Layers, Syringe } from "lucide-react";

const products = [
  {
    icon: Droplets,
    title: "عوازل مائية",
    desc: "حلول متكاملة لحماية الأسطح والأساسات من تسربات المياه بأعلى المعايير.",
    color: "from-sky-500 to-blue-600",
    img: "/assets/product-2.jpeg",
  },
  {
    icon: Flame,
    title: "عوازل حرارية",
    desc: "تخفيض درجة الحرارة وتوفير استهلاك الطاقة عبر مواد عازلة عالية الكفاءة.",
    color: "from-amber-500 to-orange-600",
    img: "/assets/product-4.jpeg",
  },
  {
    icon: Layers,
    title: "فوم بوليرثان",
    desc: "رش الفوم البولي يوريثان للأسطح والمستودعات لأعلى عزل حراري ومائي.",
    color: "from-emerald-500 to-teal-600",
    img: "/assets/product-6.jpeg",
  },
  {
    icon: Syringe,
    title: "مواد حقن الخرسانة",
    desc: "حلول حقن متخصصة لمعالجة الشروخ وترميم الخرسانة بفعالية وكفاءة.",
    color: "from-violet-500 to-purple-600",
    img: "/assets/product-7.jpeg",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-[#fafbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-bold">
            منتجاتنا
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950">
            حلول العزل ومواد البناء
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            نوفّر تشكيلة شاملة من العوازل والمواد المتخصصة التي يحتاجها مشروعك،
            بجودة معتمدة وأسعار تنافسية.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${p.color} opacity-60 mix-blend-multiply`}
                  />
                  <div className="absolute top-4 start-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon className="text-brand-700" size={24} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-950">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
