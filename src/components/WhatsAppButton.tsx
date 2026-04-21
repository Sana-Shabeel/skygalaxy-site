import { MAIN_WHATSAPP } from "../data/branches";

export default function WhatsAppButton() {
  const number = `966${MAIN_WHATSAPP.replace(/^0/, "")}`;
  const text = encodeURIComponent("مرحباً، أرغب بالاستفسار عن منتجاتكم");
  const href = `https://wa.me/${number}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 end-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/60 animate-ping" />
      <span className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-xl animate-float-pulse">
        <svg
          viewBox="0 0 32 32"
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.426-.545-.516-1.146-1.347-1.46-2.018a.63.63 0 0 1-.07-.315c0-.65 1.332-.89 1.332-1.518 0-.087-.027-.187-.057-.27-.117-.27-.917-2.247-1.06-2.418-.116-.13-.232-.187-.39-.187-.157 0-.32-.026-.477-.026-.16 0-.39.06-.59.298-.348.396-.92 1.27-.92 2.456 0 1.227.97 2.395 1.05 2.587.085.187 1.83 2.96 4.62 4.16 2.79 1.197 2.79.798 3.293.756.5-.04 1.62-.66 1.847-1.302.227-.642.227-1.19.16-1.302-.067-.115-.249-.183-.482-.298Z" />
          <path d="M16 4C9.373 4 4 9.373 4 16c0 2.293.652 4.43 1.787 6.252L4 28l5.91-1.74A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 4 16 4zm0 21.6c-1.96 0-3.79-.564-5.34-1.535l-.382-.227-3.508 1.034 1.04-3.394-.247-.39A9.55 9.55 0 0 1 6.4 16c0-5.302 4.298-9.6 9.6-9.6s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6Z" />
        </svg>
        <span className="hidden sm:inline text-sm">واتساب</span>
      </span>
    </a>
  );
}
