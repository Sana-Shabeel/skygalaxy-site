import { Globe, Mail, Phone } from "lucide-react";
import {
  COMPANY_EMAIL,
  COMPANY_WEBSITE,
  MAIN_WHATSAPP,
  branches,
} from "../data/branches";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-white/20">
              <img
                src="/assets/logo.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-black text-white text-lg">مجرة السماء</div>
              <div className="text-xs text-brand-300">SKYGALAXY TRADING</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-200/90">
            عوازل مائية، حرارية ورغوية — فوم بوليرثان — مواد حقن الخرسانة.
            نخدمكم من فروعنا في الرياض، جدة ومكة المكرمة.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-white">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white">
                منتجاتنا
              </a>
            </li>
            <li>
              <a href="#locations" className="hover:text-white">
                فروعنا
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">أرقام الفروع</h4>
          <ul className="space-y-2 text-sm">
            {branches.slice(0, 4).map((b) => (
              <li key={b.id} className="flex justify-between gap-3">
                <span className="text-brand-200">{b.name}</span>
                <a
                  href={`tel:${b.phone}`}
                  dir="ltr"
                  className="font-bold text-white hover:text-brand-300"
                >
                  {b.phone}
                </a>
              </li>
            ))}
            <li className="pt-3 mt-3 border-t border-white/10 space-y-2">
              <a
                href={`tel:${MAIN_WHATSAPP}`}
                className="flex items-center gap-2 text-white font-bold"
              >
                <Phone size={16} />
                <span dir="ltr">{MAIN_WHATSAPP}</span>
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-2 text-brand-200 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span dir="ltr">{COMPANY_EMAIL}</span>
              </a>
              <a
                href={`https://${COMPANY_WEBSITE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-200 hover:text-white transition-colors"
              >
                <Globe size={16} />
                <span dir="ltr">{COMPANY_WEBSITE}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-300">
          <p>
            © {new Date().getFullYear()} شركة مجرة السماء للتجارة. جميع الحقوق
            محفوظة.
          </p>
          <p>صُمّم بعناية في المملكة العربية السعودية 🇸🇦</p>
        </div>
      </div>
    </footer>
  );
}
