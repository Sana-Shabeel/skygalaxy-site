import {
  Cog,
  Droplets,
  Flame,
  Layers,
  PaintBucket,
  Shield,
  Sparkles,
  Syringe,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ProductKind = "product" | "equipment";

export type Product = {
  id: string;
  kind?: ProductKind; // defaults to 'product'
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
  // ────────────────────────────────────────────────────────────────
  // Injection resins (concrete leak repair)
  // ────────────────────────────────────────────────────────────────
  {
    id: "mc-injekt-2111sa",
    icon: Syringe,
    nameAr: "MC-Injekt 2111SA — راتنج حقن سريع التفاعل",
    nameEn: "MC-Injekt 2111SA",
    brand: "MC-Bauchemie",
    brandAr: "MC — ألمانيا",
    origin: "🇩🇪 صناعة ألمانية",
    accent: "from-rose-500 to-red-700",
    badge: "حقن خرسانة",
    category: "حقن وترميم",
    description:
      "راتنج حقن بولي يوريثاني أحادي المكوّن سريع التكوين، مصمّم لإيقاف تسرّب المياه فوراً عند ملامسته للماء يتمدّد ليكوّن رغوة غير منكمشة بفعالية عالية.",
    features: [
      "تفاعل سريع جداً مع المياه المتدفقة",
      "يتمدّد حتى 10 أضعاف عند تفاعله مع الماء",
      "خالٍ من المواد السامة وذو رائحة منخفضة",
      "التصاق ممتاز على الأسطح الرطبة",
      "بنية رغوية مرنة",
    ],
    specs: [
      { label: "العبوات", value: "5 كجم أو 10 كجم" },
      { label: "النوع", value: "أحادي المكوّن" },
      { label: "المنشأ", value: "ألمانيا" },
    ],
    applications: [
      "إيقاف تسرّبات المياه النشطة",
      "ترميم الشروخ في الخرسانة",
      "الأنفاق والقبوات والخزانات",
    ],
    images: [
      "/assets/products/product-8.jpeg",
      "/assets/products/product-9.jpeg",
    ],
    keywords: [
      "mc-injekt",
      "mc injekt",
      "2111sa",
      "injection",
      "polyurethane resin",
      "حقن",
      "راتنج",
      "تسرب",
      "ألمانيا",
    ],
  },
  {
    id: "ddi-1510",
    icon: Syringe,
    nameAr: "DDi 1510 — رغوة حقن لإيقاف المياه",
    nameEn: "DDi 1510 (Water Stop Foam)",
    brand: "Dependable Depot",
    brandAr: "ديبندبل ديبو",
    origin: "🇺🇸 صناعة أمريكية",
    accent: "from-orange-500 to-amber-700",
    badge: "حقن عالي الضغط",
    category: "حقن وترميم",
    description:
      "رغوة حقن بولي يوريثانية ثنائية المكوّن سريعة التفاعل لإيقاف تسرّبات المياه ذات الضغط العالي في السدود والأنفاق والخزانات، بإمكانية ضبط سرعة التفاعل.",
    features: [
      "حقن عالي الضغط للسدود والأنفاق والخزانات",
      "تحكّم بسرعة التفاعل عبر مسرّع DDi 15X",
      "غير سام وعديم الرائحة",
      "بنية خلايا مغلقة لعزل مائي ممتاز",
      "يتمدّد 30 إلى 40 ضعف حجمه",
    ],
    specs: [
      { label: "العبوات", value: "طقم 21 لتر (A + B)" },
      { label: "النوع", value: "ثنائي المكوّن" },
      { label: "المنشأ", value: "الولايات المتحدة" },
    ],
    applications: [
      "إيقاف تسرّبات المياه عالية الضغط",
      "السدود والأنفاق",
      "الخزانات الأرضية",
    ],
    images: [
      "/assets/products/product-10.jpeg",
      "/assets/products/product-11.jpeg",
    ],
    keywords: [
      "ddi 1510",
      "ddi",
      "water stop foam",
      "dependable depot",
      "high pressure injection",
      "حقن",
      "رغوة",
      "سد المياه",
    ],
  },
  // ────────────────────────────────────────────────────────────────
  // Spray foam systems
  // ────────────────────────────────────────────────────────────────
  {
    id: "kpi-ss40-spray",
    icon: Flame,
    nameAr: "KPI SS 40 — نظام رش فوم بولي يوريثان",
    nameEn: "SS 40 — SPRAY",
    brand: "KPI (Kuwait Polyurethane Industry)",
    brandAr: "KPI الكويتية",
    accent: "from-amber-500 to-orange-700",
    badge: "فوم رش",
    category: "فوم بوليرثان",
    description:
      "نظام رش فوم بولي يوريثاني صلب ذو خلايا مغلقة، يوفّر عزلاً حرارياً ومائياً عالي الكفاءة بكثافة عالية واستقرار هيكلي ومقاومة ممتازة لأقسى الظروف الجوية.",
    features: [
      "عزل حراري ومائي في طبقة واحدة",
      "كثافة عالية واستقرار هيكلي",
      "مقاومة ممتازة للضغط والصدمات",
      "يتحمّل الظروف الجوية القاسية",
    ],
    specs: [
      { label: "المكوّن A", value: "250 كجم" },
      { label: "المكوّن B", value: "220 كجم" },
      { label: "النوع", value: "خلايا مغلقة صلبة" },
    ],
    applications: [
      "أسطح المباني والفلل",
      "المستودعات والمصانع",
      "الخزانات والأنابيب",
    ],
    images: ["/assets/products/product-14.jpeg"],
    keywords: [
      "kpi",
      "ss40",
      "ss 40",
      "spray foam",
      "polyurethane spray",
      "فوم رش",
      "بولي يوريثان",
      "كويت",
    ],
  },
  // ────────────────────────────────────────────────────────────────
  // Roof coatings (over foam)
  // ────────────────────────────────────────────────────────────────
  {
    id: "hogen-602",
    icon: PaintBucket,
    nameAr: "HOGEN 602 — طلاء أكريليك للأسطح",
    nameEn: "HOGEN Roof Coating 602",
    brand: "HOGEN",
    accent: "from-cyan-500 to-sky-700",
    badge: "طلاء أكريليك",
    category: "طلاء وحماية",
    description:
      "طلاء أكريليك مرن عالي الجودة مصمّم خصيصاً للتطبيق فوق الفوم البولي يوريثاني المرشوش، يكوّن غشاءً مقاوماً للماء وعوامل الجو وعاكساً لأشعة الشمس.",
    features: [
      "يكوّن غشاءً مقاوماً للماء والعوامل الجوية",
      "لون أبيض عاكس يقلّل الحرارة وتأثير الأشعة فوق البنفسجية",
      "تغطية اقتصادية للمساحات الكبيرة",
      "سريع الجفاف وذو رائحة منخفضة",
    ],
    specs: [
      { label: "الوزن", value: "20 كجم" },
      { label: "اللون", value: "أبيض عاكس" },
    ],
    applications: ["طبقة حماية فوق فوم الأسطح", "الأسطح المعرّضة للشمس"],
    images: ["/assets/products/product-13.jpeg"],
    keywords: [
      "hogen",
      "602",
      "roof coating",
      "acrylic",
      "طلاء أسطح",
      "أكريليك",
      "هوجن",
    ],
  },
  {
    id: "wp-acrylic-coat",
    icon: PaintBucket,
    nameAr: "WP Acrylic Coat — طلاء أكريليك مرن للأسطح",
    nameEn: "WP Acrylic Coat",
    brand: "WP",
    accent: "from-teal-500 to-emerald-700",
    badge: "طلاء أكريليك",
    category: "طلاء وحماية",
    description:
      "طلاء علوي أكريليكي مرن للأسطح، مخصص للاستخدام فوق الفوم البولي يوريثاني، يوفّر مقاومة ممتازة للماء والعوامل الجوية مع متانة عالية.",
    features: [
      "مقاوم للماء وللعوامل الجوية",
      "أبيض عاكس لخفض درجة حرارة السطح",
      "متانة عالية ومرونة ممتازة",
      "يطبَّق بالرولة أو ماكينة الرش",
    ],
    specs: [
      { label: "الوزن", value: "20 كجم" },
      { label: "التطبيق", value: "رولة أو رش" },
    ],
    applications: ["الأسطح المعزولة بالفوم", "الأسطح الخرسانية"],
    images: ["/assets/products/product-16.jpeg"],
    keywords: ["wp", "acrylic coat", "roof coating", "أكريليك", "طلاء أسطح"],
  },
  // ────────────────────────────────────────────────────────────────
  // Equipment / machinery
  // ────────────────────────────────────────────────────────────────
  {
    id: "graco-reactor-3-e20",
    kind: "equipment",
    icon: Cog,
    nameAr: "Graco Reactor 3 E-20 — ماكينة رش الفوم",
    nameEn: "Reactor 3 E-20",
    brand: "Graco",
    brandAr: "جراكو",
    origin: "🇺🇸 جراكو الأمريكية",
    accent: "from-zinc-600 to-slate-800",
    badge: "معدّات احترافية",
    category: "معدّات",
    description:
      "موزّع كهربائي احترافي (بروبورشنر) لتطبيقات رش الفوم والبولي يوريثان، بتصميم مدمج وخفيف الوزن وواجهة تحكّم باللمس.",
    features: [
      "واجهة تحكّم بشاشة لمس",
      "تصميم مدمج وخفيف الوزن لتوفير مساحة الريك",
      "تحكّم مستقل بحرارة خراطيم المادتين A و B",
      "محرّك بدون فرش لأداء أفضل",
    ],
    specs: [
      { label: "أقصى تدفق", value: "9 كجم/دقيقة" },
      { label: "أقصى ضغط", value: "140 بار / 2000 psi" },
      { label: "أقصى طول خرطوم", value: "67 متر" },
      { label: "المحرّك", value: "18 حصان" },
    ],
    applications: [
      "رش الفوم البولي يوريثاني",
      "تطبيقات العزل التجارية والصناعية",
    ],
    images: ["/assets/products/product-12.jpeg"],
    keywords: [
      "graco",
      "reactor",
      "e-20",
      "e20",
      "spray machine",
      "proportioner",
      "ماكينة رش",
      "جراكو",
      "معدات",
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
