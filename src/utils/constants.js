// ═══════════════════════════════════════════════════════════
//  TaxByCA Services — Central Data Store
//  All content, services, FAQs, team, stats defined here.
//  Edit this file to update any content site-wide.
// ═══════════════════════════════════════════════════════════

// ─── BRAND CONFIG ───────────────────────────────────────────
export const BRAND = {
  name: 'TaxByCA',
  shortName: 'TaxByCA',
  legalName: 'TaxByCA',
  tagline: 'One-Stop Solution for Every Business & Professional',
  subTagline: 'Expert CA Services — Tax, Audit, Project Reports & Certificates',
  description:
    'TaxByCA is a team of qualified CAs & professionals providing GST, ITR filing, company registration, TDS compliance, ROC filings, Tax Audit, Project Reports, Certificates and all CA services 100% online across India.',
  phone: '9424856409',
  whatsapp: '919424856409',
  email: 'TaxByCAinfo@gmail.com',
  address: 'India',
  timings: '8 AM to 10 PM (Monday to Monday)',
  since: 2019,
  city: 'India',
  website: 'https://taxbyca.in',
  yearEstablished: 2019,
  social: {
    facebook:  'https://www.facebook.com/taxbyca',
    instagram: 'https://www.instagram.com/taxbyca',
    whatsapp:  'https://wa.me/919424856409',
    linkedin:  'https://www.linkedin.com/company/taxbyca',
    twitter:   'https://twitter.com/taxbyca',
    youtube:   'https://www.youtube.com/@taxbyca',
  }
}

// ─── SOCIAL LINKS (backward-compat alias) ───────────────────
export const SOCIAL_LINKS = {
  phone: BRAND.phone,
  email: BRAND.email,
  address: BRAND.address,
  location: BRAND.city,
  website: BRAND.website,
  facebook:  BRAND.social.facebook,
  twitter:   BRAND.social.twitter,
  instagram: BRAND.social.instagram,
  linkedin:  BRAND.social.linkedin,
}

// ─── STATS (animated counters) ──────────────────────────────
export const STATS = [
  { number: 10000,   suffix: '+',  label: 'Happy Clients',      icon: 'ri-group-line' },
  { number: 10000, suffix: '+',  label: 'Returns Filed',      icon: 'ri-file-paper-2-line' },
  { number: 10,    suffix: '+',  label: 'Years Experience',   icon: 'ri-trophy-line' },
  { number: 4.9,   suffix: '★', label: 'Client Rating',      icon: 'ri-star-smile-line' },
]

// ─── NAV ITEMS ───────────────────────────────────────────────
export const NAV_ITEMS = [
  { name: 'Home',     href: '/',         icon: 'fa-house' },
  { name: 'Services', href: '/#services', icon: 'fa-briefcase' },
  { name: 'About Us', href: '/about',    icon: 'fa-info-circle' },
  { name: 'Blog',     href: '/blog',     icon: 'fa-newspaper' },
  { name: 'Contact',  href: '/contact',  icon: 'fa-phone' },
]

// ─── SERVICES (14 CA services) ───────────────────────────────
export const SERVICES = [
  {
    "id": 1,
    "slug": "income-tax",
    "title": "Income Tax Return Filing & Tax Planning",
    "shortTitle": "Income Tax & Planning",
    "icon": "fa-file-invoice-dollar",
    "iconEmoji": "💰",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Most Popular",
    "shortDesc": "ITR filing for individuals, businesses & professionals with maximum tax savings.",
    "overview": "File your income tax return accurately and on time with TaxByCA. We handle ITR-1 through ITR-7, reconcile your AIS/26AS, maximise deductions under 80C, 80D, HRA, and provide expert tax planning strategies.",
    "services": [
      "ITR Filing for Salaried & Business",
      "Old Pending ITR Filing",
      "Capital Gains & Crypto Tax",
      "NRI Return Filing",
      "Income Tax Notice, Assessment & Proceeding",
      "Tax Planning on Refund & Tax Saving",
      "AIS/26AS Reconciliation",
      "Advance Tax Computation"
    ],
    "startingPrice": "₹499",
    "timeline": "1-3 working days",
    "whatsappMsg": "Hi! I need Income Tax Filing assistance from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 2,
    "slug": "gst-services",
    "title": "GST Registration & GST Return Filing",
    "shortTitle": "GST Services",
    "icon": "fa-receipt",
    "iconEmoji": "🧾",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Most Popular",
    "shortDesc": "Complete GST compliance — registration to annual returns, notices & audit.",
    "overview": "TaxByCA provides end-to-end GST services. From obtaining your GSTIN to filing monthly, quarterly, and annual returns, we handle everything efficiently ensuring you claim maximum ITC and stay penalty-free.",
    "services": [
      "New GST Registration",
      "GSTR-1 & GSTR-3B Filing",
      "GSTR-9 Annual Return",
      "GST Reconciliation (GSTR-2A/2B)",
      "GST Audit",
      "LUT Application",
      "GST Notice Reply"
    ],
    "startingPrice": "₹999",
    "timeline": "3-7 working days",
    "whatsappMsg": "Hi! I need GST Services from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 3,
    "slug": "tax-audit",
    "title": "Tax Audit & Statutory Audit",
    "shortTitle": "Tax Audit",
    "icon": "fa-file-signature",
    "iconEmoji": "📝",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Comprehensive Tax & Statutory Audit services for businesses and corporations.",
    "overview": "Ensure full regulatory compliance with our audit services. TaxByCA conducts Tax Audits u/s 44AB and Statutory Audits to verify your financial statements are accurate and comply with the latest tax laws.",
    "services": [
      "Tax Audit u/s 44AB",
      "Statutory Audit of Companies",
      "NGO, Trust & Society Audit",
      "ADT-1 — Auditor Appointment",
      "Form 3CA/3CB & 3CD",
      "Internal Audit",
      "Audit Report Preparation"
    ],
    "startingPrice": "Consult for Pricing",
    "timeline": "Case-specific",
    "whatsappMsg": "Hi! I need Tax Audit services from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 4,
    "slug": "tds-compliance",
    "title": "TDS Return & Compliance",
    "shortTitle": "TDS Compliance",
    "icon": "fa-percent",
    "iconEmoji": "📊",
    "category": "Tax Filing",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Quarterly TDS/TCS return filing, deduction computation & Form 16 issuance.",
    "overview": "We manage your complete TDS compliance. TaxByCA handles TDS computation, quarterly return filing (24Q, 26Q, 27EQ), default resolution, and issues Form 16/16A to employees and vendors.",
    "services": [
      "TDS Computation & Challan",
      "24Q, 26Q, 27EQ Filing",
      "Form 16/16A Generation",
      "TAN Registration",
      "TDS Notice Resolution"
    ],
    "startingPrice": "₹1,499",
    "timeline": "2-5 working days",
    "whatsappMsg": "Hi! I need TDS compliance services from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 5,
    "slug": "business-registration",
    "title": "Business Registration & Setup",
    "shortTitle": "Business Setup",
    "icon": "fa-building",
    "iconEmoji": "🏢",
    "category": "Business",
    "isPopular": true,
    "badge": "High Demand",
    "shortDesc": "One-stop business setup — Proprietorship to Private Limited, FSSAI, IEC & NGO registrations.",
    "overview": "Start your business the right way with TaxByCA. We help you choose the right structure and handle all registrations — from simple Proprietorships to Private Limited Companies, FSSAI food licenses, IEC for export-import, and NGO/Trust/Society formation.",
    "services": [
      "Proprietorship Registration",
      "Partnership Firm Registration",
      "Private Limited Company (Pvt Ltd)",
      "One Person Company (OPC)",
      "FSSAI Food License",
      "IEC — Import Export Code",
      "NGO / Trust / Society Registration",
      "MSME / Udyam Registration"
    ],
    "startingPrice": "₹4,999",
    "timeline": "7-15 working days",
    "whatsappMsg": "Hi! I want to register a business with TaxByCA.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 6,
    "slug": "roc-compliance",
    "title": "ROC / Corporate Compliance",
    "shortTitle": "ROC Compliance",
    "icon": "fa-landmark",
    "iconEmoji": "🏛️",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Annual ROC filings — AOC-4, MGT-7, KYC, charge registration & more.",
    "overview": "Stay compliant with Ministry of Corporate Affairs (MCA) regulations. TaxByCA ensures timely filing of AOC-4, MGT-7, DIR-3 KYC, and maintains your statutory registers and board minutes.",
    "services": [
      "AOC-4 & MGT-7 Annual Returns",
      "Director KYC (DIR-3)",
      "ADT-1 — Auditor Appointment",
      "Board Resolution Drafting",
      "Change in Directors / Address",
      "Strike Off / Company Closure"
    ],
    "startingPrice": "₹3,999",
    "timeline": "Before due dates",
    "whatsappMsg": "Hi! I need ROC compliance services from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 7,
    "slug": "project-reports",
    "title": "Project Reports & CMA Data",
    "shortTitle": "Project Reports",
    "icon": "fa-chart-line",
    "iconEmoji": "📈",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Bank loan project reports, CMA data, DPR preparation for funding.",
    "overview": "TaxByCA prepares detailed project reports with financial projections and CMA (Credit Monitoring Arrangement) data essential for bank loan sanctions and government scheme applications.",
    "services": [
      "Bank Loan Project Reports",
      "Certified Project Report",
      "CMA Data for CC/OD Limits",
      "Financial Projections (5-year)",
      "MSME Subsidy Reports",
      "Sensitivity Analysis"
    ],
    "startingPrice": "₹2,999",
    "timeline": "3-7 working days",
    "whatsappMsg": "Hi! I need a project report / CMA data from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 8,
    "slug": "ca-certificates",
    "title": "Certificates",
    "shortTitle": "Certificates",
    "icon": "fa-certificate",
    "iconEmoji": "ri-award-line",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Net worth, turnover, and foreign remittance certificates — issued promptly.",
    "overview": "TaxByCA issues various certifications required for visa applications, bank loans, government schemes, and statutory authorities. We provide Net Worth, Turnover, Form 15CA/15CB, and all required certificates with proper GST invoice.",
    "services": [
      "Net Worth Certificate",
      "Turnover Certificate",
      "Form 15CA/15CB for Remittances",
      "Visa / Immigration Certificates",
      "Utilization Certificates"
    ],
    "startingPrice": "₹999",
    "timeline": "1-2 working days",
    "whatsappMsg": "Hi! I need a CA Certificate from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1589330694653-efa64753baaa?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 9,
    "slug": "loan-documentation",
    "title": "Loan Documentation & Financial Statements",
    "shortTitle": "Loan Docs & Financials",
    "icon": "fa-file-invoice",
    "iconEmoji": "📁",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Preparation of financial statements and documentation for business loans.",
    "overview": "Streamline your loan approval process. TaxByCA prepares robust financial statements (P&L, Balance Sheet) and assists in organizing all necessary documentation required by banks and NBFCs.",
    "services": [
      "P&L and Balance Sheet Preparation",
      "Cash Flow Statements",
      "Provisional Financials",
      "Loan File Preparation",
      "Bank Query Resolution"
    ],
    "startingPrice": "₹2,499",
    "timeline": "3-5 working days",
    "whatsappMsg": "Hi! I need help with Loan Documentation from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80&auto=format&fit=crop"
  },
  {
    "id": 10,
    "slug": "fno-capital-gain",
    "title": "F&O / Capital Gain Taxation",
    "shortTitle": "F&O / Capital Gains",
    "icon": "fa-arrow-trend-up",
    "iconEmoji": "💹",
    "category": "Tax Filing",
    "isPopular": true,
    "badge": "Trending",
    "shortDesc": "Specialized tax filing for stock market traders, F&O, and crypto investors.",
    "overview": "Trading in stocks, F&O, or crypto? TaxByCA provides expert computation of short/long-term capital gains, sets off losses correctly, and ensures accurate ITR filing for traders and investors.",
    "services": [
      "F&O Trading Tax Computation",
      "Intraday Trading Tax",
      "Capital Gains (Stocks & Mutual Funds)",
      "Crypto Tax Filing",
      "Loss Set-off & Carry Forward"
    ],
    "startingPrice": "₹1,499",
    "timeline": "2-4 working days",
    "whatsappMsg": "Hi! I need help with F&O / Capital Gain Taxation from TaxByCA.",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format&fit=crop"
  }
];

// ─── SERVICE CATEGORIES ──────────────────────────────────────
export const SERVICE_CATEGORIES = ['All', 'Tax Filing', 'Business', 'Compliance']

// ─── TEAM ────────────────────────────────────────────────────
export const TEAM = [
  {
    id: 1,
    name: 'TaxByCA Founder',
    role: 'Principal Chartered Accountant',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop',
    expertise: 'GST, Income Tax, Company Law & ROC Compliance',
    qualification: 'Chartered Accountant',
    experience: '10+ years',
    phone: BRAND.phone,
    email: BRAND.email,
    featured: true,
  },
  {
    id: 2,
    name: 'Senior Partner',
    role: 'Senior Tax Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop',
    expertise: 'Tax Audit, Corporate Tax, International Taxation',
    qualification: 'Chartered Accountant',
    experience: '8+ years',
    phone: BRAND.phone,
    email: BRAND.email,
    featured: true,
  },
  {
    id: 3,
    name: 'Compliance Head',
    role: 'GST & Compliance Specialist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop',
    expertise: 'GST, ROC, FSSAI, Trademark, Startup Services',
    qualification: 'Chartered Accountant',
    experience: '5+ years',
    phone: BRAND.phone,
    email: BRAND.email,
    featured: true,
  },
]

// ─── FAQ ─────────────────────────────────────────────────────
export const FAQS = [
  {
    id: 1,
    q: 'What does GST registration cost at TaxByCA?',
    a: 'GST registration at TaxByCA starts at ₹999 (professional fee only). The government fee for GST registration on gst.gov.in is nil — it is completely free. Our fee covers documentation, ARN filing, query resolution, and follow-up until your GSTIN is issued, typically within 3–7 working days.',
  },
  {
    id: 2,
    q: 'What documents are required for ITR filing?',
    a: 'For salaried individuals: PAN, Aadhaar, Form 16, bank statements, and Form 26AS/AIS download from incometax.gov.in. For business owners: additionally P&L, Balance Sheet, GST returns, and TDS challans. TaxByCA sends you a personalised document checklist via WhatsApp once you contact us.',
  },
  {
    id: 3,
    q: 'How long does company registration take in India?',
    a: 'Private Limited Company registration typically takes 7–15 working days on MCA\'s SPICe+ portal. This covers DIN, DSC, name approval via RUN, and Certificate of Incorporation. TaxByCA handles the entire process online — no office visit required.',
  },
  {
    id: 4,
    q: 'Do I need a CA to file my income tax return?',
    a: 'Legally, individuals can file ITR-1/ITR-4 without a CA. However, a CA is mandatory for: tax audit u/s 44AB (business turnover > ₹1 crore / professional receipts > ₹50 lakh), statutory audit under Companies Act, and GSTR-9C. A CA also helps maximise deductions and avoid tax notices.',
  },
  {
    id: 5,
    q: 'What is the penalty for not filing GST returns?',
    a: 'Late GST return filing attracts: ₹50/day (₹25 CGST + ₹25 SGST) for regular returns, up to ₹5,000 maximum; ₹20/day (₹10 + ₹10) for NIL returns, up to ₹500. Additionally, 18% per annum interest applies on unpaid tax. Non-filing can result in GSTIN suspension.',
  },
  {
    id: 6,
    q: 'What is the GST registration turnover threshold in 2025?',
    a: 'GST registration is mandatory when annual aggregate turnover exceeds: ₹40 lakh for goods suppliers (₹20 lakh in special category states like Mizoram, Tripura, Meghalaya, etc.), ₹20 lakh for service providers (₹10 lakh in special states). E-commerce sellers and inter-state suppliers must register irrespective of turnover.',
  },
  {
    id: 7,
    q: 'What is MSME Udyam registration and is it really free?',
    a: 'Udyam Registration is the official MSME recognition on udyamregistration.gov.in. Government fee = ₹0 (completely free). TaxByCA charges only a professional fee for guidance and documentation. Benefits include priority bank lending, subsidy eligibility, lower interest rates, and protection under the MSMED Act.',
  },
  {
    id: 8,
    q: 'Can you handle tax notices received from the Income Tax Department?',
    a: 'Yes. TaxByCA handles all types of income tax notices: 143(1) intimations, 142(1) inquiries, 148 reassessment, and 133(6) information requests. We draft professional replies, represent before Assessing Officers, and file appeals before CIT(A) and ITAT where necessary.',
  },
  {
    id: 9,
    q: 'Are your CA services 100% online? Do I need to visit your office?',
    a: 'Yes, all services are 100% online. You share documents via WhatsApp, email, or our secure upload link. We prepare and file on your behalf and send acknowledgments digitally. No office visit is required for routine ITR, GST, TDS, registrations, or compliance filings.',
  },
  {
    id: 10,
    q: 'What are the fees for online CA services at TaxByCA?',
    a: 'Starting prices: GST Registration ₹999 | ITR Filing ₹499 | Company Registration ₹6,999 | TDS Return ₹1,499/qtr | Bookkeeping ₹2,499/mo | ROC Compliance ₹3,999/yr | MSME Registration ₹499. Government fees (MCA, stamp duty, etc.) are shown separately at actuals. We issue GST-compliant tax invoices.',
  },
]

// ─── WHY CHOOSE US ────────────────────────────────────────────
export const WHY_CHOOSE_US = [
  { icon: 'ri-group-line', title: 'Qualified CAs & Professionals', desc: 'Our team of qualified Chartered Accountants and professionals has been serving businesses and individuals for 10+ years.' },
  { icon: 'ri-global-line', title: 'Pan-India Services', desc: '100% online — we serve clients in all 28 states and 8 UTs of India, without you needing to visit any office.' },
  { icon: 'ri-money-dollar-circle-line', title: 'Transparent Pricing', desc: 'Fixed professional fees quoted upfront. Government fees shown separately at actuals. No hidden charges.' },
  { icon: 'ri-flashlight-line', title: 'Fast Turnaround', desc: 'ITR in 24 hours. GST registration in 3 days. Timely filing — always before due dates.' },
  { icon: 'ri-file-text-line', title: 'Proper GST Invoice', desc: 'We issue a proper GST-compliant tax invoice for every service. You always have documentation for your records.' },
  { icon: 'ri-phone-line', title: 'Dedicated Support', desc: 'Dedicated relationship manager reachable on WhatsApp for real-time updates and document guidance.' },
]

// ─── PROCESS STEPS ───────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: '01',
    icon: 'ri-phone-line',
    title: 'Contact Us',
    desc: 'Reach out via WhatsApp, call, or our online form. Tell us your requirement.',
  },
  {
    step: '02',
    icon: 'ri-file-paper-2-line',
    title: 'Share Documents',
    desc: 'We send a personalised checklist. You share documents via WhatsApp or email.',
  },
  {
    step: '03',
    icon: 'ri-flashlight-line',
    title: 'We Handle Everything',
    desc: 'Our CA prepares, verifies, and files on your behalf on government portals.',
  },
  {
    step: '04',
    icon: 'ri-checkbox-circle-line',
    title: 'Done — Acknowledgment',
    desc: 'Receive your certificate / acknowledgment along with a proper GST invoice.',
  },
]

// ─── HERO SLIDES ─────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    badge: 'One-Stop CA Services — 10+ Years',
    heading: 'Expert CA Services',
    subHeading: 'Across India — Online & Fast',
    description:
      'GST, ITR filing, company registration, Tax Audit, Project Reports & Certificates — all delivered 100% online. 10,000+ clients served.',
    ctaText: 'WhatsApp Us Now',
    ctaLink: `https://wa.me/${BRAND.whatsapp}?text=Hi! I need CA services from TaxByCA.`,
    ctaSecondary: 'Explore Services',
    ctaSecondaryLink: '/#services',
    backgroundImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    badge: 'GST • ITR • Audit • Certificates',
    heading: 'All CA Services',
    subHeading: 'One Firm. Every Need.',
    description:
      'From GST returns to company registration, TDS compliance to project reports — complete solutions for every business & professional.',
    ctaText: 'View Our Services',
    ctaLink: '/#services',
    ctaSecondary: 'Call Now',
    ctaSecondaryLink: `tel:${BRAND.phone}`,
    backgroundImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    badge: 'Free Consultation — No Obligation',
    heading: 'Book a Free',
    subHeading: 'Tax Consultation Today',
    description:
      'Talk to our qualified CAs about your GST, income tax, or business registration needs. No obligation, no hidden charges.',
    ctaText: 'Book Free Consultation',
    ctaLink: '/contact',
    ctaSecondary: 'Know More',
    ctaSecondaryLink: '/about',
    backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop',
  },
]

// ─── MARQUEE ITEMS ────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  'GST Registration', 'ITR Filing', 'Company Registration', 'TDS Returns',
  'Bookkeeping', 'ROC Compliance', 'MSME Registration', 'Tax Notices',
  'IEC Registration', 'Digital Signature', 'Trademark Registration', 'FSSAI License',
  'Startup India', 'Project Reports', 'Tax Audit', 'GST Annual Return',
  'Income Tax Planning', 'CMA Data', 'DPIIT Recognition', 'PF & ESIC',
]

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    city: 'Delhi',
    rating: 5,
    text: 'TaxByCA handled my GST registration and monthly returns perfectly. Super fast response and transparent pricing. Highly recommended!',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'Freelance Designer',
    city: 'Mumbai',
    rating: 5,
    text: 'I was confused about which ITR form to file. The team at TaxByCA guided me through everything online in just 2 days. Great service!',
  },
  {
    id: 3,
    name: 'Amit Agarwal',
    role: 'Startup Founder',
    city: 'Bangalore',
    rating: 5,
    text: 'From company registration to DPIIT recognition to 80-IAC application — TaxByCA handled everything. They\'re our go-to CA firm now.',
  },
  {
    id: 4,
    name: 'Sunita Devi',
    role: 'Restaurant Owner',
    city: 'Jaipur',
    rating: 5,
    text: 'Got my FSSAI license and GST registration done together. Very professional team, great communication on WhatsApp.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Import Exporter',
    city: 'Ahmedabad',
    rating: 5,
    text: 'They handled my IEC registration, AD Code setup, and FEMA compliance. Very knowledgeable about international trade regulations.',
  },
  {
    id: 6,
    name: 'Neha Gupta',
    role: 'HR Manager',
    city: 'Pune',
    rating: 5,
    text: 'Our company\'s TDS returns, ROC filings, and bookkeeping are all managed by TaxByCA. Reliable, accurate, and always on time.',
  },
]

// ─── ABOUT SECTION ────────────────────────────────────────────
export const ABOUT = {
  title: 'About TaxByCA',
  subtitle: 'One-Stop Solution for Every Business & Professional',
  description: `TaxByCA is a team of qualified Chartered Accountants and professionals, serving businesses and individuals across India for 10+ years. We provide expert services in Taxation, Audit, Project Reports, and Certificates — all 100% online.

We have proudly served 10,000+ clients across every business category — from sole proprietors and salaried employees to private limited companies, NGOs, traders, exporters, and startups. Our approach is simple: honest advice, transparent pricing, and fast turnaround — delivered right to your WhatsApp.

We issue a proper GST-compliant tax invoice for every service.`,
  highlights: [
    'Qualified CAs & Professionals — 10+ Years',
    '100% Online Services — Pan-India',
    'Transparent, Fixed Pricing — No Hidden Charges',
    'We Issue Proper GST Invoice for Every Service',
    '10,000+ Happy Clients Served',
    'Dedicated WhatsApp Support',
  ],
  clientCategories: [
    'Salaried Employees', 'Freelancers & Consultants', 'Traders & Shopkeepers',
    'Manufacturers', 'Importers & Exporters', 'Doctors & Professionals',
    'Startups & New Businesses', 'Private Limited Companies',
    'NGOs, Trusts & Societies', 'Real Estate & Builders',
  ],
  image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&q=80&auto=format&fit=crop',
}
