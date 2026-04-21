import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { MAIN_WHATSAPP } from "../data/branches";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700"
    >
      {/* Star background */}
      <div className="absolute inset-0 starfield opacity-60" />
      {/* Glowing accents */}
      <div className="absolute -top-32 -end-32 w-96 h-96 bg-brand-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -start-20 w-[28rem] h-[28rem] bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            مفتوحون الآن — 7 فروع في المملكة
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15]">
            شركة <span className="text-brand-300">مجرة السماء</span>
            <br />
            للعوازل ومواد البناء
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-100/90 max-w-xl leading-relaxed">
            عوازل مائية، حرارية ورغوية — فوم بوليرثان — مواد حقن الخرسانة. خبرة
            وجودة موثوقة بأفضل الأسعار وخدمة لعموم مناطق المملكة العربية
            السعودية.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#locations"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-800 font-bold shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <MapPin size={20} />
              تعرّف على فروعنا
              <ArrowLeft size={18} />
            </a>
            <a
              href={`tel:${MAIN_WHATSAPP}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white font-bold hover:bg-white/20 transition-colors"
            >
              <Phone size={20} />
              اتصل بنا
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            {[
              { n: "+7", l: "فروع" },
              { n: "+10", l: "سنوات خبرة" },
              { n: "24/7", l: "دعم العملاء" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {s.n}
                </div>
                <div className="text-xs sm:text-sm text-brand-200 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div
          className="relative hidden lg:block animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/40 to-cyan-300/30 blur-2xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden ring-4 ring-white/20 shadow-2xl rotate-2">
              <img
                src="/assets/product-1.jpeg"
                alt="منتجات مجرة السماء"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -start-6 w-44 h-44 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl -rotate-6">
              <img
                src="/assets/product-3.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -end-6 w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl rotate-6">
              <img
                src="/assets/product-5.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* bottom curve */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-b from-transparent to-[#fafbff]" />
    </section>
  );
}
