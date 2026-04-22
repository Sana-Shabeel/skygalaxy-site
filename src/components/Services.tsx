import {
  Droplets,
  Flame,
  PaintBucket,
  Syringe,
  type LucideIcon,
} from "lucide-react";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  accent: string;
};

const services: Service[] = [
  {
    id: "injection-leak-repair",
    icon: Syringe,
    title: "ترميم تسرّبات المياه بالحقن",
    desc: "حلول حقن متخصّصة بمواد ألمانية وأمريكية لإيقاف تسرّبات المياه فوراً ومعالجة شروخ الخرسانة في الخزانات والأنفاق والقبوات.",
    bullets: [
      "حقن MC-Injekt 2111SA الألماني",
      "حقن DDi 1510 الأمريكي عالي الضغط",
      "تنفيذ بمضخات SME 500-2 احترافية",
    ],
    image: "/assets/products/product-29.jpeg",
    accent: "from-rose-500 to-red-700",
  },
  {
    id: "spray-foam-insulation",
    icon: Flame,
    title: "خدمات رش الفوم البولي يوريثاني",
    desc: "تنفيذ عزل حراري ومائي للأسطح والمستودعات والمصانع باستخدام أنظمة KPI ومعدات Graco الاحترافية وفنّيين معتمدين.",
    bullets: [
      "فوم رش KPI SS 40 صلب وعالي الكثافة",
      "ماكينات Graco Reactor 3 E-20",
      "تنفيذ بمعايير الجودة العالمية",
    ],
    image: "/assets/products/product-14.jpeg",
    accent: "from-amber-500 to-orange-700",
  },
  {
    id: "roof-coating",
    icon: PaintBucket,
    title: "تطبيق طلاء حماية الأسطح",
    desc: "تطبيق طبقة الطلاء الأكريليكي العاكس فوق الفوم لحماية العزل وزيادة عمره وخفض حرارة السطح وتوفير الطاقة.",
    bullets: [
      "طلاء HOGEN 602 الأكريليكي",
      "طلاء WP Acrylic Coat",
      "تطبيق بالرولة أو ماكينة الرش",
    ],
    image: "/assets/products/product-13.jpeg",
    accent: "from-cyan-500 to-sky-700",
  },
  {
    id: "waterproofing",
    icon: Droplets,
    title: "خدمات العزل المائي والحراري",
    desc: "تنفيذ متكامل للعزل المائي للأسطح والأساسات والحمامات بمواد عالمية معتمدة وفريق فنّي ذو خبرة في جميع أنواع العوازل.",
    bullets: [
      "عزل مائي بمواد Tremco و Weber",
      "حماية الأساسات والقبوات",
      "ضمان لمدة سنوات",
    ],
    image: "/assets/products/product-1.jpeg",
    accent: "from-sky-500 to-blue-700",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-bold">
            خدماتنا
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950">
            بيتك يستاهل أفضل حماية
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            بجانب توريد المنتجات، نقدّم خدمات تطبيق متكاملة بفرق متخصّصة ومعدّات
            احترافية لضمان أفضل النتائج لمشروعك.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${s.accent} opacity-70 mix-blend-multiply`}
                  />
                  <div className="absolute top-4 start-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon className="text-brand-700" size={24} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-brand-950 leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.accent} flex-shrink-0`}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Slogan banner */}
        <div className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 via-brand-800 to-brand-950 p-8 sm:p-12 text-center">
          <div className="absolute inset-0 starfield opacity-20" />
          <div className="relative">
            <p className="text-brand-200 text-sm sm:text-base font-semibold">
              شعارنا
            </p>
            <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              بيتك يستاهل
            </h3>
            <p className="mt-3 text-brand-100/90 text-sm sm:text-base max-w-xl mx-auto">
              لأن منزلك يستحق أفضل المواد وأمهر الأيدي — نحن هنا لحمايته على
              المدى الطويل.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-800 font-bold shadow-xl hover:-translate-y-0.5 transition-all"
            >
              احجز كشف مجّاني
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
