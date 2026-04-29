import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Loader2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "../context/useCart";
import { formatSar } from "../context/cart-types";
import { stripeIsConfigured, startStripeCheckout } from "../lib/stripe";
import { MAIN_WHATSAPP } from "../data/branches";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  notes: "",
};

export default function CheckoutPage() {
  const { items, subtotal, hasQuoteOnly, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canPayOnline = stripeIsConfigured && !hasQuoteOnly && items.length > 0;

  const valid = useMemo(() => {
    return (
      form.fullName.trim().length >= 3 &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.phone.trim().length >= 7 &&
      form.city.trim().length >= 2 &&
      form.address.trim().length >= 5
    );
  }, [form]);

  const handleStripe = async () => {
    if (!valid) return;
    setSubmitting(true);
    setError(null);
    try {
      await startStripeCheckout(items, {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        city: form.city,
        address: form.address,
        notes: form.notes,
      });
    } catch (e) {
      setError((e as Error).message);
      setSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const lines = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.product.nameAr} × ${i.qty}` +
          (i.product.priceSar != null
            ? ` — ${formatSar(i.lineTotal)}`
            : " — السعر عند الطلب"),
      )
      .join("\n");

    const text =
      `طلب جديد من الموقع:\n\n` +
      `الاسم: ${form.fullName || "—"}\n` +
      `الجوال: ${form.phone || "—"}\n` +
      `البريد: ${form.email || "—"}\n` +
      `المدينة: ${form.city || "—"}\n` +
      `العنوان: ${form.address || "—"}\n` +
      (form.notes ? `ملاحظات: ${form.notes}\n` : "") +
      `\nالمنتجات:\n${lines}\n\n` +
      (subtotal > 0 ? `الإجمالي التقريبي: ${formatSar(subtotal)}` : "");

    const number = `966${MAIN_WHATSAPP.replace(/^0/, "")}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    clear();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#fafbff] flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-black text-brand-950">
            لا توجد منتجات لإتمام الدفع
          </h1>
          <p className="mt-2 text-slate-600">
            أضف منتجات إلى سلتك أولاً، ثم عُد إلى صفحة الدفع.
          </p>
          <Link
            to="/products"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
          >
            تصفّح المنتجات
          </Link>
        </div>
      </div>
    );
  }

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="min-h-screen bg-[#fafbff]">
      <section className="relative pt-28 pb-8 sm:pt-32 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 overflow-hidden">
        <div className="absolute inset-0 starfield opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-brand-200 hover:text-white text-sm font-semibold transition-colors"
          >
            <ArrowRight size={16} />
            العودة إلى السلة
          </Link>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black text-white">
            إتمام الطلب
          </h1>
          <p className="mt-2 text-brand-100/90">
            أدخل بياناتك ثم اختر طريقة الدفع المناسبة.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-5 sm:p-7">
            <h2 className="text-lg font-black text-brand-950">
              بيانات التواصل والشحن
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              نستخدم هذه البيانات لتوصيل الطلب وإرسال الفاتورة.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="الاسم الكامل" required>
                <input
                  value={form.fullName}
                  onChange={set("fullName")}
                  className="ck-input"
                  placeholder="مثال: أحمد العتيبي"
                />
              </Field>
              <Field label="رقم الجوال" required>
                <input
                  value={form.phone}
                  onChange={set("phone")}
                  inputMode="tel"
                  dir="ltr"
                  className="ck-input text-start"
                  placeholder="+9665…"
                />
              </Field>
              <Field label="البريد الإلكتروني" required>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  dir="ltr"
                  className="ck-input text-start"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="المدينة" required>
                <input
                  value={form.city}
                  onChange={set("city")}
                  className="ck-input"
                  placeholder="الرياض"
                />
              </Field>
              <Field label="العنوان" required className="sm:col-span-2">
                <input
                  value={form.address}
                  onChange={set("address")}
                  className="ck-input"
                  placeholder="الحي، الشارع، رقم المبنى…"
                />
              </Field>
              <Field label="ملاحظات (اختياري)" className="sm:col-span-2">
                <textarea
                  value={form.notes}
                  onChange={set("notes")}
                  className="ck-input min-h-[100px]"
                  placeholder="أي تفاصيل إضافية حول الطلب أو التوصيل."
                />
              </Field>
            </div>

            {error && (
              <div className="mt-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-700">
                {error}
              </div>
            )}

            {!stripeIsConfigured && (
              <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
                لم يتم إعداد Stripe بعد. يمكنك حالياً إرسال الطلب عبر واتساب،
                وسيقوم فريق المبيعات بتأكيد السعر النهائي وطريقة الدفع.
              </div>
            )}

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <button
                type="button"
                disabled={!valid || !canPayOnline || submitting}
                onClick={handleStripe}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold shadow-lg shadow-brand-600/30 transition-all"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    جاري التحويل…
                  </>
                ) : (
                  <>
                    <CreditCard size={18} />
                    ادفع الآن عبر Stripe
                  </>
                )}
              </button>

              <button
                type="button"
                disabled={!valid || submitting}
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageCircle size={18} />
                إرسال الطلب عبر واتساب
              </button>
            </div>

            <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-xs text-slate-500">
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                مدفوعات آمنة عبر Stripe (3D Secure)
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600" />
                فاتورة ضريبية رسمية لكل طلب
              </li>
            </ul>
          </div>

          {/* Summary */}
          <aside className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 sticky top-24">
            <h2 className="text-base font-black text-brand-950">ملخّص السلة</h2>
            <ul className="mt-4 divide-y divide-slate-100">
              {items.map(({ product: p, qty, lineTotal }) => (
                <li key={p.id} className="py-3 flex gap-3">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={p.images[0]}
                      alt={p.nameAr}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-brand-950 line-clamp-2">
                      {p.nameAr}
                    </div>
                    <div className="text-xs text-slate-500">الكمية: {qty}</div>
                  </div>
                  <div className="text-sm font-black text-brand-950 whitespace-nowrap">
                    {p.priceSar != null ? formatSar(lineTotal) : "—"}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">المجموع الفرعي</span>
                <span className="font-black text-brand-950">
                  {formatSar(subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>الشحن</span>
                <span>يُحتسب لاحقاً</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-100">
                <span className="text-base font-black text-brand-950">
                  الإجمالي
                </span>
                <span className="text-xl font-black text-brand-950">
                  {formatSar(subtotal)}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-bold text-slate-700 mb-1.5">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      {children}
    </label>
  );
}
