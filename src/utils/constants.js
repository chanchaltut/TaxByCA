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
  tagline: 'Accurate. Reliable. Trusted CA Services',
  subTagline: "India's Trusted CA Partner for GST, ITR, Company Registration & More",
  description:
    'ICAI-registered CA firm providing GST registration & returns, ITR filing, company registration, TDS compliance, ROC filings, bookkeeping, and all CA services 100% online across India.',
  phone: '9424856409',          // ← replace with actual
  whatsapp: '919424856409',     // ← replace with actual (no +, no spaces)
  email: 'taxbyca1@gmail.com',
  address: 'India',
  timings: '8 AM to 10 PM (Monday to Monday)',
  city: 'India',
  website: 'https://taxbyca.in',
  icai: 'ICAI Registered',
  yearEstablished: 2019,
  social: {
    facebook:  'https://www.facebook.com/taxbyca',
    instagram: 'https://www.instagram.com/taxbyca',
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
      "Capital Gains & Crypto Tax",
      "AIS/26AS Reconciliation",
      "Tax Planning & Advance Tax",
      "Income Tax Notice Handling"
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
    "shortDesc": "Company incorporation, LLP, Partnership, and MSME registration.",
    "overview": "Start your business smoothly with TaxByCA. We help you choose the right business structure and handle all registrations including Pvt Ltd, LLP, Partnership, and MSME/Udyam.",
    "services": [
      "Private Limited Company Registration",
      "LLP & Partnership Firm Registration",
      "MSME / Udyam Registration",
      "Startup India Registration",
      "PAN & TAN Application"
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
      "Board Resolution Drafting",
      "Change in Directors/Address",
      "Strike Off Company"
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
    "title": "CA Certificates",
    "shortTitle": "CA Certificates",
    "icon": "fa-certificate",
    "iconEmoji": "📜",
    "category": "Compliance",
    "isPopular": false,
    "badge": "",
    "shortDesc": "Net worth certificates, turnover certificates, and foreign remittance forms.",
    "overview": "We provide various CA certifications required for visa applications, bank loans, and statutory authorities. TaxByCA issues Net Worth, Turnover, and Form 15CA/15CB certificates promptly.",
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
    name: 'CA [Name]',                         // ← Replace with actual CA name
    role: 'Founder & Principal Chartered Accountant',
    image: null,                                // ← Replace with actual image import
    expertise: 'GST, Income Tax, Company Law & ROC Compliance',
    qualification: 'B.Com, ACA (ICAI)',
    icai: 'MXXXXXX',                           // ← Replace with actual ICAI no.
    experience: '10+ years',
    phone: BRAND.phone,
    email: BRAND.email,
    featured: true,
  },
  {
    id: 2,
    name: 'CA [Name]',
    role: 'Senior Tax Consultant',
    image: null,
    expertise: 'Tax Audit, Corporate Tax, International Taxation',
    qualification: 'B.Com, ACA (ICAI)',
    icai: 'MXXXXXX',
    experience: '8+ years',
    phone: BRAND.phone,
    email: BRAND.email,
    featured: true,
  },
  {
    id: 3,
    name: '[Name]',
    role: 'GST & Compliance Specialist',
    image: null,
    expertise: 'GST, ROC, FSSAI, Trademark, Startup Services',
    qualification: 'B.Com, Semi-qualified CA',
    icai: '',
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
  { icon: 'ri-trophy-line', title: 'ICAI Registered CAs', desc: 'All our Chartered Accountants are ICAI-registered with valid Certificate of Practice.' },
  { icon: 'ri-global-line', title: 'Pan-India Services', desc: '100% online — we serve clients in all 28 states and 8 UTs of India.' },
  { icon: 'ri-money-dollar-circle-line', title: 'Transparent Pricing', desc: 'Fixed professional fees quoted upfront. Government fees shown separately at actuals. No hidden charges.' },
  { icon: 'ri-flashlight-line', title: 'Fast Turnaround', desc: 'ITR in 24 hours. GST registration in 3 days. Timely filing — always before due dates.' },
  { icon: 'ri-lock-line', title: 'Secure & Confidential', desc: 'Your financial data is handled with complete confidentiality and shared only via secure channels.' },
  { icon: 'ri-phone-line', title: 'Dedicated Support', desc: 'Dedicated relationship manager reachable on WhatsApp for real-time status updates.' },
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
    desc: 'Receive your certificate / acknowledgment. We provide post-filing support too.',
  },
]

// ─── HERO SLIDES ─────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    badge: 'ICAI Registered CA Firm',
    heading: 'Expert CA Services',
    subHeading: 'Across India — Online & Fast',
    description:
      'GST registration, ITR filing, company incorporation & all compliance services delivered 100% online. 10000+ clients. 10+ years experience.',
    ctaText: 'WhatsApp Us Now',
    ctaLink: `https://wa.me/${BRAND.whatsapp}?text=Hi! I need CA services from TaxByCA.`,
    ctaSecondary: 'Explore Services',
    ctaSecondaryLink: '/#services',
    backgroundImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    badge: 'GST • ITR • Company Registration',
    heading: 'All CA Services',
    subHeading: 'One Firm. Every Need.',
    description:
      'From GST returns to company incorporation, TDS compliance to trademark registration — complete CA solutions with transparent pricing.',
    ctaText: 'View Our Services',
    ctaLink: '/#services',
    ctaSecondary: 'Call Now',
    ctaSecondaryLink: `tel:${BRAND.phone}`,
    backgroundImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    badge: 'Free Consultation',
    heading: 'Book a Free',
    subHeading: 'Tax Consultation Today',
    description:
      'Talk to an ICAI-registered CA about your GST, income tax, or business registration needs. No obligation, no charges.',
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
  title: 'About TaxByCA Services',
  subtitle: 'Your Trusted CA Partner Across India',
  description: `TaxByCA Services is an ICAI-registered Chartered Accountant firm committed to providing accurate, reliable, and client-focused CA services across India. Founded by experienced ICAI-qualified CAs, we have served 10000+ clients with 15,000+ tax returns filed over 10+ years.

We provide all CA services 100% online — GST registration and returns, income tax filing, company incorporation, TDS compliance, ROC filings, bookkeeping, MSME registration, trademark, FSSAI, and more. Our approach is simple: transparent pricing, fast turnaround, and proactive communication via WhatsApp.`,
  highlights: [
    'ICAI Registered Chartered Accountants',
    '100% Online Services — Pan-India',
    'Transparent, Fixed Pricing',
    '10000+ Happy Clients Served',
    'Fast Turnaround — Always Before Due Dates',
    'Dedicated WhatsApp Support',
  ],
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop',
}
