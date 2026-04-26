import { ArrowLeft, Download, MapPin, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { MAIN_WHATSAPP } from "../data/branches";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700"
    >
      {/* Video Banner */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/videos/banner-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/logo.jpeg"
      />
      {/* Overlay for darkening video and keeping content readable */}
      <div className="absolute inset-0 bg-brand-950/60 z-10" />
      {/* Star background (optional, can be removed if video is visually busy) */}
      {/* <div className="absolute inset-0 starfield opacity-60 z-20" /> */}
      {/* Glowing accents */}
      <div className="absolute -top-32 -inset-e-32 w-96 h-96 bg-brand-400/30 rounded-full blur-3xl z-20" />
      <div className="absolute -bottom-40 -inset-s-20 w-md h-112 bg-cyan-400/20 rounded-full blur-3xl z-20" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center w-full z-30">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm font-semibold text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          مفتوحون الآن — 10 فروع في المملكة
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] text-white animate-fade-up">
          شركة <span className="text-brand-300">مجرة السماء</span>
          <br />
          للعوازل ومواد البناء
        </h1>

        <p
          className="mt-6 text-base sm:text-lg lg:text-xl text-brand-100/90 max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          عوازل مائية، حرارية ورغوية — فوم بوليرثان — مواد حقن الخرسانة. خبرة
          وجودة موثوقة بأفضل الأسعار وخدمة لعموم مناطق المملكة العربية السعودية.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-800 font-bold shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            <Sparkles size={20} />
            تصفّح كتالوج المنتجات
            <ArrowLeft size={18} />
          </Link>
          <a
            href="#locations"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white font-bold hover:bg-white/20 transition-colors"
          >
            <MapPin size={20} />
            فروعنا
          </a>
          <a
            href={`tel:${MAIN_WHATSAPP}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white font-bold hover:bg-white/20 transition-colors"
          >
            <Phone size={20} />
            اتصل بنا
          </a>
          <a
            href="/sky-galaxy-company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500/20 backdrop-blur border border-emerald-300/40 text-white font-bold hover:bg-emerald-500/30 transition-colors"
          >
            <Download size={20} />
            ملف تعريف الشركة (PDF)
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-10 max-w-2xl mx-auto">
          {[
            { n: "+10", l: "فروع" },
            { n: "+10", l: "سنوات خبرة" },
            { n: "24/7", l: "دعم العملاء" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                {s.n}
              </div>
              <div className="text-xs sm:text-sm text-brand-200 mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom curve */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-linear-to-b from-transparent to-[#fafbff] z-40" />
    </section>
  );
}
