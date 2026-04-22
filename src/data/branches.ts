export type Region = "المنطقة الوسطى" | "المنطقة الشرقية" | "المنطقة الغربية";

export type Branch = {
  id: string;
  name: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  mapUrl: string;
  image: string;
  region: Region;
  isMain?: boolean;
};

export const branches: Branch[] = [
  // ───── المنطقة الوسطى ─────
  {
    id: "riyadh-malaz-hq",
    name: "المركز الرئيسي — الملز",
    city: "الرياض",
    district: "حي جرير",
    address:
      "الرياض - الملز - حي جرير - مقابل الملعب - الدور الأول - مكتب رقم 2",
    phone: "0598909991",
    mapUrl: "https://maps.app.goo.gl/XjhfJZfbA3a24XGH9",
    image: "/assets/location-images/branch-1.jpeg",
    region: "المنطقة الوسطى",
    isMain: true,
  },
  {
    id: "riyadh-exit-17",
    name: "فرع مخرج 17",
    city: "الرياض",
    district: "حي الفاروق",
    address: "الرياض - حي الفاروق - طريق المدينة المنورة",
    phone: "0593244204",
    mapUrl: "https://maps.app.goo.gl/B4KmypWgn47BQ9Y59",
    image: "/assets/location-images/branch-7.jpeg",
    region: "المنطقة الوسطى",
  },
  {
    id: "riyadh-faisaliah",
    name: "فرع الفيصلية",
    city: "الرياض",
    district: "حي الفيصلية",
    address: "الرياض - حي الفيصلية - طريق المدينة المنورة",
    phone: "0593244504",
    mapUrl: "https://maps.app.goo.gl/ntiA4gniGh1d9yNb6",
    image: "/assets/location-images/branch-2.jpeg",
    region: "المنطقة الوسطى",
  },
  {
    id: "riyadh-amana",
    name: "فرع الأمانة",
    city: "الرياض",
    district: "حي الأمانة",
    address: "الرياض - حي الأمانة - طريق الملك عبد العزيز",
    phone: "0555944853",
    mapUrl: "https://maps.app.goo.gl/7k7boK1GpCGoFMga7",
    image: "/assets/location-images/branch-5.jpeg",
    region: "المنطقة الوسطى",
  },
  {
    id: "riyadh-arid",
    name: "فرع العارض",
    city: "الرياض",
    district: "حي العارض",
    address: "الرياض - حي العارض - طريق الملك عبد العزيز",
    phone: "0555944852",
    mapUrl: "https://maps.app.goo.gl/LmY8hXVz3jWZ5oTLA",
    image: "/assets/location-images/branch-4.jpeg",
    region: "المنطقة الوسطى",
  },

  // ───── المنطقة الشرقية ─────
  {
    id: "dammam-badiya",
    name: "فرع الدمام",
    city: "الدمام",
    district: "حي البادية",
    address: "الدمام - حي البادية - شارع المستشفى",
    phone: "0593244524",
    mapUrl: "https://maps.app.goo.gl/XwaAsKRTWVL1JTdp8",
    image: "/assets/location-images/branch-6.jpeg",
    region: "المنطقة الشرقية",
    isMain: true,
  },

  // ───── المنطقة الغربية ─────
  {
    id: "makkah-rusayfah-hq",
    name: "إدارة المنطقة الغربية — مكة",
    city: "مكة المكرمة",
    district: "حي الرصيفة",
    address: "مكة المكرمة - حي الرصيفة - برج الشريف - الدور 9 - مكتب 11",
    phone: "0537184180",
    mapUrl: "https://maps.app.goo.gl/JzcFGHwNzCjFdsW69",
    image: "/assets/location-images/makkah-burj-al-sharif.jpg",
    region: "المنطقة الغربية",
    isMain: true,
  },
  {
    id: "jeddah-nakheel",
    name: "فرع النخيل",
    city: "جدة",
    district: "حي النخيل",
    address: "جدة - حي النخيل - شارع أبو عمرو الأوزاعي",
    phone: "0593969926",
    mapUrl: "https://maps.app.goo.gl/4eZNC5eRQAS8rdEz6",
    image: "/assets/location-images/branch-3.jpeg",
    region: "المنطقة الغربية",
  },
  {
    id: "makkah-zaidi",
    name: "فرع الزايدي",
    city: "مكة المكرمة",
    district: "حي الزايدي",
    address: "مكة المكرمة - حي الزايدي - طريق الملك فهد",
    phone: "0544542964",
    mapUrl: "https://maps.app.goo.gl/qDme5hjvxbqoyyDo8",
    image: "/assets/location-images/branch-2.jpeg",
    region: "المنطقة الغربية",
  },
  {
    id: "madinah-ghaba",
    name: "فرع المدينة المنورة",
    city: "المدينة المنورة",
    district: "حي الغابة",
    address: "المدينة المنورة - حي الغابة - طريق خويلد ابن خالد",
    phone: "0567948729",
    mapUrl: "https://maps.app.goo.gl/rGMug9dMmqLERX8j7",
    image: "/assets/location-images/branch-4.jpeg",
    region: "المنطقة الغربية",
  },
];

// The "main" WhatsApp number used in the floating button + footer
export const MAIN_WHATSAPP = "0598909991";
export const COMPANY_EMAIL = "info@skygalaxyco.com";
export const COMPANY_WEBSITE = "www.skygalaxy.shop";

export const WORKING_HOURS = "من 6 صباحاً حتى 7 مساءً — يومياً";
