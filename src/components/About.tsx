import { Eye, Target, Award, Sparkles, MapPin } from "lucide-react";
import { COMPANY } from "../data/company";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-brand-50/40 to-white overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 -end-20 w-72 h-72 bg-brand-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -start-20 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-bold">
            <Sparkles size={14} />
            من نحن
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950">
            {COMPANY.nameAr}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {COMPANY.taglineAr} — انطلاقاً من{" "}
            <strong className="text-brand-800">الرياض</strong>، نخدم عملاءنا في
            القطاعين الصناعي والسكني عبر شبكة فروع تغطي المملكة، بكفاءة فنية
            وحلول عزل متكاملة.
          </p>

          {/* Quick badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700">
              <MapPin size={13} className="text-brand-600" />
              المقر: {COMPANY.hq}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700">
              رأس المال {COMPANY.stats.capitalSar.toLocaleString("ar-SA")} ريال
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700">
              فريق {COMPANY.stats.employees} موظفاً
            </span>
          </div>
        </div>

        {/* Vision / Mission cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <article className="group relative bg-white rounded-3xl p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-lg shadow-brand-600/30">
              <Eye size={26} />
            </div>
            <h3 className="mt-5 text-2xl font-black text-brand-950">رؤيتنا</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              {COMPANY.vision.ar}
            </p>
          </article>

          <article className="group relative bg-white rounded-3xl p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-700 text-white flex items-center justify-center shadow-lg shadow-cyan-600/30">
              <Target size={26} />
            </div>
            <h3 className="mt-5 text-2xl font-black text-brand-950">رسالتنا</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              {COMPANY.mission.ar}
            </p>
          </article>
        </div>

        {/* Vision 2030 banner */}
        <div className="mt-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white p-8 sm:p-10">
          <div className="absolute -top-10 -end-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -start-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
              <Award size={32} className="text-emerald-300" />
            </div>
            <div className="flex-1">
              <div className="text-emerald-300 text-xs sm:text-sm font-bold tracking-wide">
                مواكبة رؤية المملكة 2030
              </div>
              <p className="mt-2 text-base sm:text-lg leading-relaxed text-brand-50">
                {COMPANY.vision2030.ar}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
