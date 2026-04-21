import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { MAIN_WHATSAPP } from "../data/branches";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `مرحباً، اسمي ${form.name}\nرقم الجوال: ${form.phone}\n\n${form.message}`;
    const url = `https://wa.me/966${MAIN_WHATSAPP.replace(/^0/, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-brand-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 starfield opacity-30" />
      <div className="absolute -top-32 start-1/3 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Left: info */}
        <div className="text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-bold">
            تواصل معنا
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            هل لديك مشروع؟
            <br />
            <span className="text-brand-300">دعنا نساعدك</span>
          </h2>
          <p className="mt-5 text-brand-100/90 text-base sm:text-lg leading-relaxed">
            فريقنا جاهز للإجابة على استفساراتكم وتقديم عروض أسعار للمشاريع
            الصغيرة والكبيرة في جميع أنحاء المملكة.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${MAIN_WHATSAPP}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center">
                <Phone className="text-brand-300" />
              </div>
              <div>
                <div className="text-xs text-brand-200">اتصل بنا</div>
                <div dir="ltr" className="text-lg font-bold tracking-wide">
                  {MAIN_WHATSAPP}
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center">
                <MapPin className="text-brand-300" />
              </div>
              <div>
                <div className="text-xs text-brand-200">المقر الرئيسي</div>
                <div className="text-base font-semibold">
                  الرياض - المملكة العربية السعودية
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center">
                <Mail className="text-brand-300" />
              </div>
              <div>
                <div className="text-xs text-brand-200">ساعات العمل</div>
                <div className="text-base font-semibold">
                  من 6 صباحاً إلى 7 مساءً — يومياً
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5"
        >
          <h3 className="text-2xl font-black text-brand-950">أرسل لنا رسالة</h3>
          <p className="text-sm text-slate-600 -mt-3">
            سيتم تحويلك إلى واتساب لإرسال رسالتك مباشرة.
          </p>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">
              الاسم
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition"
              placeholder="اسمك الكريم"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">
              رقم الجوال
            </label>
            <input
              required
              type="tel"
              dir="ltr"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition text-start"
              placeholder="05xxxxxxxx"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">
              رسالتك
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition resize-none"
              placeholder="أخبرنا عن مشروعك أو استفسارك..."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5"
          >
            <Send size={18} />
            إرسال عبر واتساب
          </button>

          {sent && (
            <p className="text-sm text-emerald-600 font-semibold text-center">
              ✓ تم فتح واتساب — أكمل إرسال الرسالة من هناك
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
