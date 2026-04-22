import {
  BadgeCheck,
  Briefcase,
  Crown,
  Settings,
  ShoppingCart,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { COMPANY, DEPARTMENTS, LEADERSHIP_ROLES } from "../data/company";

const ROLE_ICONS: LucideIcon[] = [Crown, Briefcase, Briefcase, Briefcase];

const DEPT_ICONS: Record<string, LucideIcon> = {
  Users,
  Wallet,
  ShoppingCart,
  TrendingUp,
  Settings,
  BadgeCheck,
};

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-bold">
            هيكلنا التنظيمي
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950">
            القيادة وفِرق العمل
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            منظومة قيادية متكاملة تقودها خبرات متخصّصة، وفِرق عمل احترافية تضمن
            تنفيذ مشاريع عملائنا بأعلى كفاءة.
          </p>
        </div>

        {/* Founder card */}
        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-brand-900/20 relative overflow-hidden">
          <div className="absolute -top-10 -end-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="relative flex items-center gap-5">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
              <Crown size={36} className="text-amber-300" />
            </div>
            <div>
              <div className="text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
                {COMPANY.founder.title}
              </div>
              <div className="mt-1 text-2xl sm:text-3xl font-black">
                {COMPANY.founder.nameAr}
              </div>
              <div className="text-sm text-brand-200" dir="ltr">
                {COMPANY.founder.nameEn}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership roles */}
        <div className="mt-10">
          <h3 className="text-lg font-black text-brand-950 mb-4">
            القيادة التنفيذية
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEADERSHIP_ROLES.map((r, i) => {
              const Icon = ROLE_ICONS[i] ?? Briefcase;
              return (
                <article
                  key={r.en}
                  className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-md shadow-brand-600/30">
                    <Icon size={22} />
                  </div>
                  <h4 className="mt-4 text-base font-black text-brand-950">
                    {r.ar}
                  </h4>
                  <div className="mt-0.5 text-xs font-semibold text-slate-500">
                    {r.en}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Departments */}
        <div className="mt-10">
          <h3 className="text-lg font-black text-brand-950 mb-4">
            الإدارات والأقسام
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEPARTMENTS.map((d) => {
              const Icon = DEPT_ICONS[d.icon] ?? Briefcase;
              return (
                <article
                  key={d.en}
                  className="flex items-center gap-3 bg-brand-50/40 rounded-2xl p-4 border border-brand-100"
                >
                  <div className="w-11 h-11 rounded-xl bg-white text-brand-700 flex items-center justify-center border border-brand-100">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-brand-950">
                      {d.ar}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500">
                      {d.en}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
