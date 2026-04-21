export type Branch = {
  id: string;
  name: string; // فرع …
  city: string; // الرياض / جدة / مكة المكرمة
  district: string; // الحي
  address: string; // العنوان الكامل
  phone: string; // رقم الجوال
  mapUrl: string; // رابط خرائط جوجل
  image: string; // مسار الصورة من /public
};

export const branches: Branch[] = [
  {
    id: "al-arid",
    name: "فرع العارض",
    city: "الرياض",
    district: "حي العارض",
    address: "الرياض - حي العارض - طريق الملك عبد العزيز",
    phone: "0555944852",
    mapUrl: "https://maps.app.goo.gl/LmY8hXVz3jWZ5oTLA",
    image: "/assets/location-images/branch-1.jpeg",
  },
  {
    id: "makkah",
    name: "فرع مكة",
    city: "مكة المكرمة",
    district: "حي الزايدي",
    address: "مكة المكرمة - حي الزايدي - طريق الملك فهد",
    phone: "0543962009",
    mapUrl: "https://maps.app.goo.gl/qDme5hjvxbqoyyDo8",
    image: "/assets/location-images/branch-2.jpeg",
  },
  {
    id: "jeddah",
    name: "فرع جدة",
    city: "جدة",
    district: "حي النخيل",
    address: "جدة - حي النخيل - أبو عمرو الأوزاعي",
    phone: "0510607622",
    mapUrl: "https://maps.app.goo.gl/4eZNC5eRQAS8rdEz6",
    image: "/assets/location-images/branch-3.jpeg",
  },
  {
    id: "al-farouq",
    name: "فرع الفاروق",
    city: "الرياض",
    district: "حي الفاروق",
    address: "الرياض - حي الفاروق - مقابل شركة الكهرباء",
    phone: "0593244724",
    mapUrl: "https://maps.app.goo.gl/WnkpBnhEQr54BbM6A",
    image: "/assets/location-images/branch-4.jpeg",
  },
  {
    id: "north",
    name: "فرع الشمال",
    city: "الرياض",
    district: "حي الأمانة",
    address: "الرياض - حي الأمانة - طريق الملك عبد العزيز",
    phone: "0555944853",
    mapUrl: "https://maps.app.goo.gl/7k7boK1GpCGoFMga7",
    image: "/assets/location-images/branch-5.jpeg",
  },
  {
    id: "faisaliah",
    name: "فرع الفيصلية",
    city: "الرياض",
    district: "حي الفيصلية",
    address: "الرياض - حي الفيصلية - طريق المدينة المنورة",
    phone: "0593244504",
    mapUrl: "https://maps.app.goo.gl/ntiA4gniGh1d9yNb6",
    image: "/assets/location-images/branch-6.jpeg",
  },
  {
    id: "exit-17",
    name: "فرع مخرج 17",
    city: "الرياض",
    district: "حي الفاروق",
    address: "الرياض - حي الفاروق - طريق المدينة المنورة",
    phone: "0593244204",
    mapUrl: "https://maps.app.goo.gl/B4KmypWgn47BQ9Y59",
    image: "/assets/location-images/branch-7.jpeg",
  },
];

// The "main" WhatsApp number used in the floating button + footer
export const MAIN_WHATSAPP = "0555944852";

export const WORKING_HOURS = "من 6 صباحاً حتى 7 مساءً — يومياً";
