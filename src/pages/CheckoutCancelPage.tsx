import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-[#fafbff] flex items-center justify-center px-4 py-32">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-xl">
        <div className="w-20 h-20 mx-auto rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
          <XCircle size={40} />
        </div>
        <h1 className="mt-5 text-3xl font-black text-brand-950">
          تم إلغاء عملية الدفع
        </h1>
        <p className="mt-3 text-slate-600">
          لم يتم تنفيذ أي عملية خصم. سلتك لا تزال محفوظة، يمكنك المتابعة وقتما
          تشاء.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/cart"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
          >
            العودة إلى السلة
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-brand-800 font-bold hover:bg-slate-50 transition-colors"
          >
            متابعة التسوّق
          </Link>
        </div>
      </div>
    </div>
  );
}
