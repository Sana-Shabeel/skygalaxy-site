# Skygalaxy — مجرة السماء للتجارة

موقع تعريفي لشركة **مجرة السماء للتجارة** المتخصصة في العوازل المائية والحرارية والرغوية، فوم البوليرثان، ومواد حقن الخرسانة.

A modern, fully-responsive Arabic (RTL) marketing site for Skygalaxy Trading — a Saudi construction-materials retailer with 7 branches across Riyadh, Jeddah, and Makkah.

## ✨ Features

- ⚡ **React 19 + TypeScript + Vite** — fast dev experience and optimized builds
- 🎨 **Tailwind CSS v4** — custom brand palette via `@theme`
- 🌐 **Full RTL Arabic support** — Tajawal font, logical CSS properties
- �� **Mobile-first responsive** — works seamlessly on phones, tablets, and desktops
- 📍 **7 branch locations** — with city filters, click-to-call, Google Maps links
- 💬 **WhatsApp integration** — floating button + per-branch WhatsApp + contact form pre-fills WhatsApp
- 🚀 **No backend** — pure static site, deploy anywhere

## 🛠️ Tech Stack

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · Lucide React

## 🚀 Getting Started

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Landing hero
│   ├── Products.tsx        # Product/service cards
│   ├── Locations.tsx       # Branch grid with city filtering
│   ├── Contact.tsx         # Contact form → WhatsApp deep link
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx  # Floating bottom-right CTA
├── data/branches.ts        # Typed list of all branches
├── App.tsx
├── main.tsx
└── index.css               # Tailwind + custom theme
public/assets/              # Logo, product photos, branch photos
```

## 📞 Branches

| Branch | City | Phone |
|--------|------|-------|
| العارض | الرياض | 0555944852 |
| الفاروق | الرياض | 0593244724 |
| الشمال | الرياض | 0555944853 |
| الفيصلية | الرياض | 0593244504 |
| مخرج 17 | الرياض | 0593244204 |
| جدة | جدة | 0510607622 |
| مكة | مكة المكرمة | 0543962009 |

**ساعات العمل:** من 6 صباحاً حتى 7 مساءً — يومياً.

## 🌍 Deployment

Static SPA — deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## 📄 License

© Skygalaxy Trading. All rights reserved.
