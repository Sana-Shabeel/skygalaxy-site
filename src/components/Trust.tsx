import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileText,
  Landmark,
  Receipt,
  ScrollText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {
  AUTHORIZATIONS,
  CERTIFICATIONS,
  OFFICIAL_DOCUMENTS,
} from "../data/company";

const DOC_ICONS: Record<string, LucideIcon> = {
  FileText,
  Receipt,
  ScrollText,
  Building2,
  Landmark,
};

export default function Trust() {
  return (
    <section
      id="trust"
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-brand-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold">
            <BadgeCheck size={14} />
            الاعتمادات والشهادات
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950">
            موثوقون من قِبل أكبر العلامات
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            موزّعون معتمدون لأبرز الماركات العالمية، وحاصلون على شهادات الجودة
            الدولية ISO — جميع الوثائق الرسمية متاحة لعملائنا في القطاع الحكومي
            والخاص.
          </p>
        </div>

        {/* Authorized distributors */}
        <div className="mt-14">
          <h3 className="text-xl sm:text-2xl font-black text-brand-950 flex items-center gap-2">
            <ShieldCheck className="text-brand-600" size={24} />
            موزّعون معتمدون
          </h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUTHORIZATIONS.map((a) => (
              <article
                key={a.brand}
                className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-black text-brand-950">
                      {a.brand}
                    </h4>
                    {a.brandAr && (
                      <div className="text-sm text-slate-500 font-semibold">
                        {a.brandAr}
                      </div>
                    )}
                  </div>
                  <CheckCircle2
                    className="shrink-0 text-emerald-500"
                    size={22}
                  />
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  <BadgeCheck size={13} />
                  {a.status}
                </div>
                {a.scope && (
                  <div className="mt-2 text-xs text-slate-600">
                    النطاق: <span className="font-bold">{a.scope}</span>
                  </div>
                )}
                {a.validity && (
                  <div className="mt-1 text-xs text-slate-600">
                    {a.validity}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* ISO Certifications */}
        <div className="mt-14">
          <h3 className="text-xl sm:text-2xl font-black text-brand-950 flex items-center gap-2">
            <Award className="text-amber-500" size={24} />
            شهادات الجودة الدولية
          </h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((c) => (
              <article
                key={c.id}
                className="relative overflow-hidden bg-gradient-to-br from-white to-amber-50/40 rounded-3xl p-6 border border-amber-200/50 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="absolute -top-8 -end-8 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Award size={30} />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-black text-brand-950">
                      {c.titleAr}
                    </div>
                    <div className="text-sm font-bold text-brand-600">
                      {c.titleEn}
                    </div>
                  </div>
                </div>
                <p className="relative mt-4 text-sm text-slate-700 leading-relaxed">
                  {c.descriptionAr}
                </p>
                <dl className="relative mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white rounded-xl p-3 border border-slate-200">
                    <dt className="text-slate-500 font-semibold">
                      الجهة المانحة
                    </dt>
                    <dd className="mt-0.5 text-brand-950 font-black">
                      {c.body}
                    </dd>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-slate-200">
                    <dt className="text-slate-500 font-semibold">
                      رقم الشهادة
                    </dt>
                    <dd
                      dir="ltr"
                      className="mt-0.5 text-brand-950 font-black tracking-wide"
                    >
                      {c.number}
                    </dd>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-slate-200">
                    <dt className="text-slate-500 font-semibold">
                      تاريخ الإصدار
                    </dt>
                    <dd dir="ltr" className="mt-0.5 text-brand-950 font-black">
                      {c.issued}
                    </dd>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-slate-200">
                    <dt className="text-slate-500 font-semibold">صالحة حتى</dt>
                    <dd dir="ltr" className="mt-0.5 text-brand-950 font-black">
                      {c.expires}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>

        {/* Official documents */}
        <div className="mt-14">
          <h3 className="text-xl sm:text-2xl font-black text-brand-950 flex items-center gap-2">
            <FileText className="text-brand-600" size={24} />
            الوثائق الرسمية
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            جميع المستندات النظامية متوفّرة للمراجعة من قِبل عملائنا في القطاعين
            الحكومي والخاص.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {OFFICIAL_DOCUMENTS.map((d) => {
              const Icon = DOC_ICONS[d.icon] ?? FileText;
              return (
                <article
                  key={d.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h4 className="mt-4 text-sm font-black text-brand-950">
                    {d.labelAr}
                  </h4>
                  <div className="mt-0.5 text-[11px] font-semibold text-slate-500">
                    {d.labelEn}
                  </div>
                  <div
                    dir="ltr"
                    className="mt-3 text-base font-black text-brand-700 tracking-wide break-all"
                  >
                    {d.number}
                  </div>
                  {d.issued && (
                    <div className="mt-1 text-[11px] text-slate-500">
                      الإصدار: <span dir="ltr">{d.issued}</span>
                    </div>
                  )}
                  {d.validUntil && (
                    <div className="mt-1 text-[11px] text-slate-500">
                      صالحة حتى: <span dir="ltr">{d.validUntil}</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
