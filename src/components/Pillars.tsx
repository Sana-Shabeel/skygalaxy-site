import {
  Handshake,
  HardHat,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { PILLARS } from "../data/company";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  TrendingUp,
  HardHat,
  Lightbulb,
  Target,
  Handshake,
};

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="py-20 sm:py-28 bg-gradient-to-b from-brand-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-bold">
            ركائزنا الاستراتيجية
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950">
            ست ركائز نبني عليها كل مشروع
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            من الجودة إلى التعاون، تحدّد هذه الركائز مسارنا اليومي وتمنحنا
            الإطار الذي نقدّم به خدماتنا لعملائنا.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <article
                key={p.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} text-white flex items-center justify-center shadow-lg`}
                >
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-black text-brand-950">
                  {p.titleAr}
                </h3>
                <div className="mt-1 text-xs font-bold text-brand-500 tracking-wide uppercase">
                  {p.titleEn}
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {p.descriptionAr}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
