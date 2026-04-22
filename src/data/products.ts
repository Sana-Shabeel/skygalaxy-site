import {
  Droplets,
  Layers,
  Shield,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  id: string;
  icon: LucideIcon;
  nameAr: string;
  nameEn: string;
  brand: string;
  brandAr?: string;
  origin?: string;
  accent: string;
  badge: string;
  category: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications?: string[];
  images: string[];
  /** Free-text Arabic & English keywords used by the search input */
  keywords: string[];
};

export const products: Product[] = [
  {
    id: "tremproof-201",
    icon: Droplets,
    nameAr: "تريمبروف 201 — عازل مائي بولي يوريثان",
    nameEn: "TREMproof 201",
    brand: "Tremco Commercial Sealants & Waterproofing",
    brandAr: "تريمكو الأمريكية",
    origin: "🇺🇸 صناعة أمريكية",
    accent: "from-sky-500 to-blue-700",
    badge: "عازل مائي سائل",
    category: "عوازل مائية",
    description:
      "غشاء سائل أسود من البولي يوريثان للعزل المائي، عالي الجوامد ومتوافق مع معايير VOC، معدّل لمرونة عالية تصل إلى 350% — خيار اقتصادي وفعّال للمناطق الرطبة.",
    features: [
      "استطالة عالية تصل إلى 350%",
      "يمنع اختراق جذور النباتات",
      "خيار اقتصادي للمناطق الرطبة",
      "سهل التطبيق بالفرشاة أو الرولة",
    ],
    specs: [
      { label: "الوزن", value: "18.9 لتر" },
      { label: "اللون", value: "أسود" },
      { label: "المنشأ", value: "الولايات المتحدة" },
    ],
    applications: [
      "أرضيات المطابخ والحمامات",
      "الخرسانة والطوب والخشب",
      "معظم أسطح المباني",
    ],
    images: ["/assets/products/product-1.jpeg"],
    keywords: [
      "tremproof",
      "tremco",
      "polyurethane",
      "waterproof",
      "بولي",
      "يوريثان",
      "عازل مائي",
      "تريمكو",
      "تريمبروف",
    ],
  },
  {
    id: "geomatt-nps-xl",
    icon: Shield,
    nameAr: "جيومات NPS XL — قماش جيوتكستايل",
    nameEn: "GeoMatt NPS XL Range",
    brand: "MatteX",
    brandAr: "ماتكس",
    accent: "from-emerald-500 to-teal-700",
    badge: "قماش جيوتكستايل",
    category: "حماية وفصل",
    description:
      "قماش جيوتكستايل غير منسوج مصنوع من ألياف بوليمر عالية الأداء (بوليستر) باستقرار أبعاد عالٍ، يستخدم كطبقة حماية وفاصلة للرطوبة في تطبيقات البنية التحتية والعزل.",
    features: [
      "طبقة حماية وفاصلة للرطوبة",
      "مقاومة عالية للكيماويات والأملاح",
      "مقاوم للأشعة فوق البنفسجية",
      "مقاومة الثقب والتمزق",
      "متين وسهل التركيب",
    ],
    specs: [
      { label: "الأبعاد", value: "100م × 3م أو 50م × 6م" },
      {
        label: "الأوزان المتوفرة",
        value:
          "80 / 100 / 120 / 140 / 180 / 200 / 300 / 400 / 500 / 1000 جم/م²",
      },
    ],
    images: ["/assets/products/product-2.jpeg"],
    keywords: [
      "geotextile",
      "mattex",
      "geomatt",
      "nps",
      "polyester",
      "جيوتكستايل",
      "ماتكس",
      "جيومات",
    ],
  },
  {
    id: "sky-sheet",
    icon: Layers,
    nameAr: "سكاي شيت — شرائح بولي إيثيلين",
    nameEn: "Sky Sheet (Polyethylene Sheet)",
    brand: "Sky Galaxy",
    brandAr: "إنتاج مجرة السماء",
    accent: "from-indigo-500 to-violet-700",
    badge: "حاجز بخار",
    category: "حاجز بخار",
    description:
      "فيلم شفاف بلون اللؤلؤ، خفيف الوزن ومقاوم للعوامل الجوية والتآكل، يعمل كحاجز بخاري فعّال. مصنّع من بولي إيثيلين سابك المنفوخ (LDPE) باستخدام معدات إيطالية متطورة.",
    features: [
      "يحافظ على خصائصه الفيزيائية والكيميائية ضد الكائنات في التربة",
      "يحافظ على المرونة في درجات حرارة تتجاوز 80° مئوية",
      "مصنّع من بولي إيثيلين سابك المنفوخ (LDPE)",
      "إنتاج بمعدات إيطالية",
    ],
    specs: [
      { label: "اللون", value: "لؤلؤي شفاف" },
      { label: "النوع", value: "LDPE — سابك" },
    ],
    applications: ["حماية التربة", "حماية مياه الصرف", "حاجز بخار"],
    images: [
      "/assets/products/product-3.jpeg",
      "/assets/products/product-5.jpeg",
    ],
    keywords: [
      "sky sheet",
      "polyethylene",
      "ldpe",
      "sabic",
      "vapor barrier",
      "بولي إيثيلين",
      "سابك",
      "حاجز بخار",
      "سكاي شيت",
    ],
  },
  {
    id: "sky-flashing",
    icon: Wrench,
    nameAr: "سكاي فلاشينج — شرائح ألمنيوم",
    nameEn: "Sky Flashing (Aluminum Strips)",
    brand: "Sky Galaxy",
    brandAr: "إنتاج مجرة السماء",
    accent: "from-slate-500 to-zinc-700",
    badge: "إكسسوارات عزل",
    category: "إكسسوارات",
    description:
      "شرائح ألمنيوم متخصصة لتثبيت أطراف أغشية العزل المائي ومنع تسرّب المياه عند نهايات اللفائف، متوفرة بثلاثة أشكال لمختلف أنواع العوازل.",
    features: [
      "شريحة ثلاثية الانحناء 6 سم — لتثبيت بيتومين الحصى/الأساس",
      "شريحة ثنائية الانحناء 5 سم — لتثبيت أطراف عزل البيتومين",
      "شريحة ألمنيوم مسطحة 3 سم — لتثبيت أطراف عزل PVC",
    ],
    specs: [
      { label: "الخامة", value: "ألمنيوم" },
      { label: "الأنواع", value: "3 مقاسات" },
    ],
    images: ["/assets/products/product-4.jpeg"],
    keywords: [
      "flashing",
      "aluminum",
      "ألمنيوم",
      "شرائح",
      "بيتومين",
      "pvc",
      "سكاي فلاشينج",
    ],
  },
  {
    id: "weberdry-epo-pw",
    icon: Sparkles,
    nameAr: "ويبردراي إيبو PW — طلاء إيبوكسي",
    nameEn: "Weberdry Epo PW",
    brand: "Weber (Saint-Gobain)",
    brandAr: "ويبر — سان غوبان",
    origin: "🇫🇷 تقنية فرنسية",
    accent: "from-blue-600 to-cyan-700",
    badge: "طلاء إيبوكسي",
    category: "طلاء وحماية",
    description:
      "طلاء إيبوكسي خالٍ من المذيبات وغير سام، مصمّم خصيصاً لمقاومة الكيماويات والتآكل والتعرية، ومعتمد للتلامس المباشر مع مياه الشرب — تقنية فرنسية بأعلى المعايير.",
    features: [
      "معتمد للتلامس المباشر مع مياه الشرب",
      "مضاد للفطريات وصحّي",
      "التصاق ممتاز على الخرسانة والمعادن",
      "مقاومة عالية للتآكل",
    ],
    specs: [
      { label: "الوزن", value: "15 كجم" },
      { label: "اللون", value: "أزرق" },
      { label: "التقنية", value: "فرنسية" },
    ],
    applications: [
      "خزانات مياه الشرب",
      "حمامات السباحة",
      "مناطق تخزين الأغذية",
      "تبطين خزانات الكيماويات والبترول",
    ],
    images: [
      "/assets/products/product-6.jpeg",
      "/assets/products/product-7.jpeg",
    ],
    keywords: [
      "weber",
      "weberdry",
      "saint-gobain",
      "epoxy",
      "epo pw",
      "ويبر",
      "إيبوكسي",
      "طلاء",
      "خزانات",
    ],
  },
];

/** Build a single searchable string from a product. */
export function searchableText(p: Product): string {
  return [
    p.nameAr,
    p.nameEn,
    p.brand,
    p.brandAr ?? "",
    p.badge,
    p.category,
    p.description,
    ...p.features,
    ...(p.applications ?? []),
    ...p.keywords,
  ]
    .join(" ")
    .toLowerCase();
}
