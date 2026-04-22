/**
 * Single source of truth for all corporate identity, vision, leadership,
 * authorizations, certifications & official documents.
 *
 * Source: شركة مجرة السماء للتجارة — Corporate Profile (2025).
 */

export const COMPANY = {
  nameAr: "شركة مجرة السماء للتجارة",
  nameEn: "Sky Galaxy Trading Company",
  shortAr: "مجرة السماء",
  shortEn: "Sky Galaxy",
  taglineAr: "قوة رائدة للابتكار والجودة في عالم حلول العزل المتكاملة",
  taglineEn:
    "A leading force for innovation and quality in the world of integrated insulation solutions.",
  founder: {
    nameAr: "خالد حسين الرائس",
    nameEn: "Khaled Hussein Al-Raess",
    title: "المالك والمؤسس",
  },
  hq: "الرياض، المملكة العربية السعودية",
  vision: {
    ar: "أن نصبح الشركة الرائدة والأكثر انتشاراً في السوق السعودي، من خلال تأسيس شبكة فروع متكاملة تغطي كافة أنحاء المملكة، بالتوازي مع توسيع حضورنا الرقمي الفاعل.",
    en: "To become the leading and most widely distributed company in the Saudi market by establishing an integrated branch network and expanding our digital presence.",
  },
  mission: {
    ar: "تحقيق أهداف استراتيجية ترتكز على إتمام أعمالنا بأعلى معايير الكفاءة والجودة، وتقديم حلول عزل متكاملة تلبّي احتياجات عملائنا في القطاعين الصناعي والسكني.",
    en: "To accomplish our work to the highest standards of efficiency and quality, delivering integrated insulation solutions that exceed customer expectations across industrial and residential sectors.",
  },
  vision2030: {
    ar: "نسير بخطى واثقة نحو تحقيق خطتنا طويلة المدى، بتوافق كامل مع مسيرة التحوّل الوطني ورؤية المملكة 2030 الطموحة.",
    en: "We are steadily moving towards achieving our long-term plan, fully aligned with the national transformation process and the ambitious Saudi Vision 2030.",
  },
  stats: {
    employees: 26,
    saudiEmployees: 8,
    capitalSar: 27_000_000,
    branches: 10,
    yearsExperience: 10,
    regions: 3,
  },
} as const;

// ─────────────────────────────────────────────────────────────────────
// Strategic pillars (6)
// ─────────────────────────────────────────────────────────────────────

export type Pillar = {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  /** lucide-react icon name */
  icon:
    | "ShieldCheck"
    | "TrendingUp"
    | "HardHat"
    | "Lightbulb"
    | "Target"
    | "Handshake";
  accent: string;
};

export const PILLARS: Pillar[] = [
  {
    id: "quality",
    titleAr: "الجودة",
    titleEn: "Quality",
    descriptionAr:
      "الالتزام بأعلى معايير الجودة في جميع توريداتنا لضمان تحقيق رضا العملاء.",
    icon: "ShieldCheck",
    accent: "from-emerald-500 to-teal-700",
  },
  {
    id: "development",
    titleAr: "التطوير",
    titleEn: "Development",
    descriptionAr:
      "تطوير مهارات وكفاءات فريق العمل لضمان النمو والتكيف مع متغيّرات السوق.",
    icon: "TrendingUp",
    accent: "from-sky-500 to-blue-700",
  },
  {
    id: "safety",
    titleAr: "السلامة المهنية",
    titleEn: "Occupational Safety",
    descriptionAr:
      "توفير بيئة عمل آمنة وصحية، والالتزام بإجراءات السلامة لحماية الجميع من المخاطر.",
    icon: "HardHat",
    accent: "from-amber-500 to-orange-700",
  },
  {
    id: "innovation",
    titleAr: "الابتكار",
    titleEn: "Innovation",
    descriptionAr:
      "السعي المستمر للابتكار في دعم مشاريع العزل وتقديم حلول متطورة تلبّي احتياجات العملاء.",
    icon: "Lightbulb",
    accent: "from-violet-500 to-purple-700",
  },
  {
    id: "achievement",
    titleAr: "الإنجاز",
    titleEn: "Achievement",
    descriptionAr:
      "إنجاز التوريد للمشاريع في الوقت المحدد عبر إدارة الوقت بفعالية والالتزام بالجداول الزمنية.",
    icon: "Target",
    accent: "from-rose-500 to-red-700",
  },
  {
    id: "cooperation",
    titleAr: "التعاون",
    titleEn: "Cooperation",
    descriptionAr:
      "تعزيز التعاون بين الشركاء والعملاء والموردين لتحقيق الأهداف المشتركة واستمرار نجاح الشركة.",
    icon: "Handshake",
    accent: "from-cyan-500 to-sky-700",
  },
];

// ─────────────────────────────────────────────────────────────────────
// Leadership / Org structure
// ─────────────────────────────────────────────────────────────────────

export const LEADERSHIP_ROLES: { ar: string; en: string }[] = [
  { ar: "مستشار استراتيجي", en: "Strategic Advisor" },
  { ar: "المدير العام", en: "General Manager" },
  { ar: "المدير التنفيذي", en: "CEO" },
  { ar: "مدير المكتب", en: "Office Manager" },
];

export const DEPARTMENTS: { ar: string; en: string; icon: string }[] = [
  { ar: "إدارة الموارد البشرية", en: "Human Resources", icon: "Users" },
  { ar: "الإدارة المالية", en: "Finance", icon: "Wallet" },
  { ar: "إدارة المشتريات", en: "Procurement", icon: "ShoppingCart" },
  { ar: "إدارة المبيعات", en: "Sales", icon: "TrendingUp" },
  { ar: "إدارة العمليات", en: "Operations", icon: "Settings" },
  { ar: "إدارة الجودة", en: "Quality Assurance", icon: "BadgeCheck" },
];

// ─────────────────────────────────────────────────────────────────────
// Authorized distributorships
// ─────────────────────────────────────────────────────────────────────

export type Authorization = {
  brand: string;
  brandAr?: string;
  status: string;
  /** Optional ISO date string or human label */
  validity?: string;
  /** Region scope, if any */
  scope?: string;
};

export const AUTHORIZATIONS: Authorization[] = [
  {
    brand: "Sika Saudi Arabia",
    brandAr: "سيكا السعودية",
    status: "موزّع معتمد",
    scope: "المنطقة الغربية",
    validity: "ساري حتى ديسمبر 2025",
  },
  {
    brand: "Fosroc (Fosam)",
    brandAr: "فوسروك",
    status: "موزّع معتمد",
    validity: "ساري حتى يناير 2027",
  },
  {
    brand: "Sodamco-Weber (Saint-Gobain)",
    brandAr: "ويبر — سان غوبان",
    status: "اعتماد توريد وبيع",
    validity: "اعتماد أبريل 2024",
  },
  {
    brand: "Henkel Polybit",
    brandAr: "هنكل بوليبت",
    status: "اعتماد بيع داخل المملكة",
  },
  {
    brand: "DCP Saudi Arabia",
    brandAr: "DCP السعودية",
    status: "موزّع معتمد",
    validity: "12 شهراً اعتباراً من يونيو 2025",
  },
];

// ─────────────────────────────────────────────────────────────────────
// Certifications (ISO)
// ─────────────────────────────────────────────────────────────────────

export type Certification = {
  id: string;
  titleAr: string;
  titleEn: string;
  body: string;
  number: string;
  issued: string;
  expires: string;
  descriptionAr: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iso-9001",
    titleAr: "ISO 9001:2015",
    titleEn: "Quality Management System",
    body: "AMERICO",
    number: "AMER26508",
    issued: "26/04/2025",
    expires: "25/04/2026",
    descriptionAr:
      "شهادة نظام إدارة الجودة الدولية، تؤكّد التزامنا بأعلى معايير الجودة في جميع عملياتنا التشغيلية والإدارية.",
  },
  {
    id: "iso-10002",
    titleAr: "ISO 10002:2018",
    titleEn: "Customer Satisfaction Management",
    body: "AQSR",
    number: "17310",
    issued: "26/04/2025",
    expires: "25/04/2026",
    descriptionAr:
      "شهادة نظام إدارة شكاوى العملاء وقياس رضاهم، تعكس تركيزنا على تجربة العميل وحلّ شكاواه باحترافية.",
  },
];

// ─────────────────────────────────────────────────────────────────────
// Official documents (B2B procurement requirements)
// ─────────────────────────────────────────────────────────────────────

export type OfficialDocument = {
  id: string;
  labelAr: string;
  labelEn: string;
  number: string;
  issued?: string;
  validUntil?: string;
  icon: string;
};

export const OFFICIAL_DOCUMENTS: OfficialDocument[] = [
  {
    id: "cr",
    labelAr: "السجل التجاري",
    labelEn: "Commercial Registration",
    number: "7035329163",
    issued: "18/05/2023",
    icon: "FileText",
  },
  {
    id: "vat",
    labelAr: "شهادة القيمة المضافة",
    labelEn: "VAT Registration",
    number: "311658655700003",
    icon: "Receipt",
  },
  {
    id: "zakat",
    labelAr: "شهادة الزكاة والدخل",
    labelEn: "Zakat Certificate",
    number: "—",
    validUntil: "30/04/2027",
    icon: "ScrollText",
  },
  {
    id: "chamber",
    labelAr: "عضوية الغرفة التجارية",
    labelEn: "Chamber of Commerce",
    number: "822606",
    icon: "Building2",
  },
  {
    id: "municipality",
    labelAr: "رخصة البلدية",
    labelEn: "Municipality License",
    number: "450714523114",
    icon: "Landmark",
  },
];
