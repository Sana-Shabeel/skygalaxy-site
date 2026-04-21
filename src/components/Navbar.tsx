import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#products", label: "منتجاتنا" },
  { href: "#locations", label: "فروعنا" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-white shadow-md">
            <img
              src="/assets/logo.jpeg"
              alt="Skygalaxy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div
              className={`font-black text-base sm:text-lg ${scrolled ? "text-brand-900" : "text-white"}`}
            >
              مجرة السماء
            </div>
            <div
              className={`text-[11px] sm:text-xs font-medium tracking-wide ${scrolled ? "text-slate-500" : "text-brand-100"}`}
            >
              SKYGALAXY TRADING
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ms-2 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-md shadow-brand-600/30 transition-colors"
            >
              اطلب عرض سعر
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-brand-900" : "text-white"}`}
          aria-label="القائمة"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-2 text-center px-4 py-3 rounded-lg bg-brand-600 text-white font-bold"
              >
                اطلب عرض سعر
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
