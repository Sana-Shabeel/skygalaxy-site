import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "../context/useCart";

export default function CheckoutSuccessPage() {
  const { clear } = useCart();
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  useEffect(() => {
    // Stripe redirects here after a successful payment — wipe the cart.
    clear();
  }, [clear]);

  return (
    <div className="min-h-screen bg-[#fafbff] flex items-center justify-center px-4 py-32">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-emerald-200 p-8 text-center shadow-xl">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="mt-5 text-3xl font-black text-brand-950">
          تم استلام طلبك بنجاح
        </h1>
        <p className="mt-3 text-slate-600">
          شكراً لثقتك في مجرة السماء. سيقوم فريقنا بالتواصل معك قريباً لتأكيد
          تفاصيل الشحن، وستصلك فاتورة ضريبية على بريدك الإلكتروني.
        </p>
        {sessionId && (
          <p className="mt-3 text-xs text-slate-400 font-mono break-all">
            رقم الجلسة: {sessionId}
          </p>
        )}
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
        >
          متابعة التسوّق
        </Link>
      </div>
    </div>
  );
}
