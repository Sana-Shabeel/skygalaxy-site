import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Sparkles, X } from "lucide-react";
import CartButton from "./CartButton";

type LinkItem = {
  label: string;
  /** route path or section anchor (starting with #) */
  to: string;
};

const navLinks: LinkItem[] = [
  { label: "الرئيسية", to: "/" },
  { label: "من نحن", to: "#about" },
  { label: "كتالوج المنتجات", to: "/products" },
  { label: "خدماتنا", to: "#services" },
  { label: "الاعتمادات", to: "#trust" },
  { label: "فروعنا", to: "#locations" },
  { label: "تواصل معنا", to: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // (Mobile menu items close themselves on click via their onClick handlers.)

  // On non-home pages, the navbar should always be solid
  const onHome = location.pathname === "/";
  const solid = scrolled || !onHome;

  /** Resolve an anchor link: if not on home, prefix with "/" so we go home then scroll. */
  const anchorTarget = (hash: string) => (onHome ? hash : `/${hash}`);

  const renderLink = (l: LinkItem, mobile = false) => {
    const baseDesktop = `px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
      solid
        ? "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
        : "text-white/90 hover:text-white hover:bg-white/10"
    }`;
    const baseMobile =
      "block px-4 py-3 rounded-lg text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-700";

    const className = mobile ? baseMobile : baseDesktop;

    if (l.to.startsWith("#")) {
      return (
        <a
          href={anchorTarget(l.to)}
          onClick={() => mobile && setOpen(false)}
          className={className}
        >
          {l.label}
        </a>
      );
    }
    return (
      <NavLink
        to={l.to}
        end={l.to === "/"}
        onClick={() => mobile && setOpen(false)}
        className={({ isActive }) =>
          `${className} ${
            isActive
              ? mobile
                ? "bg-brand-50 text-brand-700"
                : solid
                  ? "bg-brand-50 text-brand-700"
                  : "bg-white/15 text-white"
              : ""
          }`
        }
      >
        {l.label}
      </NavLink>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        solid
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand (text only — no images) */}
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 shadow-md shadow-brand-600/30`}
          >
            <Sparkles size={18} className="text-white" />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-black text-base sm:text-lg ${
                solid ? "text-brand-900" : "text-white"
              }`}
            >
              مجرة السماء
            </span>
            <span
              className={`block text-[11px] sm:text-xs font-medium tracking-wide ${
                solid ? "text-slate-500" : "text-brand-100"
              }`}
            >
              SKYGALAXY TRADING
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to}>{renderLink(l)}</li>
          ))}
          <li>
            <a
              href={anchorTarget("#contact")}
              className="ms-2 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold shadow-md shadow-brand-600/30 transition-colors"
            >
              اطلب عرض سعر
            </a>
          </li>
          <li>
            <CartButton solid={solid} />
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-1">
          <CartButton solid={solid} />
          <button
            onClick={() => setOpen((o) => !o)}
            className={`p-2 rounded-lg ${
              solid ? "text-brand-900" : "text-white"
            }`}
            aria-label="القائمة"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>{renderLink(l, true)}</li>
            ))}
            <li>
              <a
                href={anchorTarget("#contact")}
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
