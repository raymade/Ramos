import { Project, ServiceItem } from '../utils/portfolioLogic';

export const HERO_IMAGE = '/src/assets/images/hero_design_showcase_1792075694237.jpg';
export const FINTECH_IMAGE = '/src/assets/images/project_fintech_mobile_1792075714212.jpg';
export const BRAND_IMAGE = '/src/assets/images/project_brand_identity_1792075713652.jpg';
export const SAAS_IMAGE = '/src/assets/images/project_saas_dashboard_1792075714094.jpg';

export const DESIGNER_INFO = {
  brandName: 'RAMZY_SN@ALL',
  ownerName: 'Ramos Friday Oluwaseun',
  title: 'UI/UX & Digital Product Designer',
  roles: ['UI/UX Designer', 'Digital Product Designer', 'Graphic Designer', 'Visual Identity Designer'],
  tagline: 'Thoughtful Design. Meaningful Experiences.',
  secondaryTagline: 'Designing Digital Experiences and Brands That Connect.',
  email: 'Godwitme@gmail.com',
  defaultWhatsApp: '+234 706 933 4173', // Verified WhatsApp phone number
  cleanWhatsApp: '2347069334173',
  isAvailableForProjects: true,
  availabilityText: 'Available for selected projects',
  partnerAttribution: {
    name: '3Cords System Global Resources',
    url: 'https://3cordssystem.com',
  },
  bio: `I'm Ramos Friday Oluwaseun, the creative mind behind RAMZY_SN@ALL. I focus on creating intuitive digital experiences and visual identities that make businesses look professional and help people interact with products more easily.

From shaping a website's user experience to developing a memorable logo or a complete set of brand materials, my goal is to make every design decision purposeful, practical, and consistent.`,
  philosophy: `Good design is not merely decoration—it is the deliberate removal of friction. Whether crafting a mobile banking interface or an identity system for a burgeoning company, I approach every project by understanding who will use it, what problem needs solving, and how to create lasting clarity.`,
  tools: [
    { name: 'Figma', category: 'Interface & Prototyping', proficiency: 'Advanced' },
    { name: 'Adobe Illustrator', category: 'Vector & Identity', proficiency: 'Advanced' },
    { name: 'Adobe Photoshop', category: 'Image & Mockups', proficiency: 'Proficient' },
    { name: 'Design Systems & Tokens', category: 'Architecture', proficiency: 'Specialist' },
    { name: 'Wireframing & User Flows', category: 'UX Research', proficiency: 'Specialist' },
    { name: 'Print & Prepress Specs', category: 'Production', proficiency: 'Proficient' },
  ],
  capabilities: [
    'Mobile Application UI/UX',
    'Responsive Web Design',
    'Design Systems & Component Libraries',
    'Logomarks & Visual Identities',
    'Brand Guidelines & Stationery',
    'Interactive Prototyping & Usability',
    'Business Cards & Editorial Print',
    'Marketing & Social Campaign Assets',
  ],
  workingPrinciples: [
    {
      title: 'User-Focused',
      description: 'Design around the actual people who use the product. Every journey, click, and transition is structured for intuitive understanding and effortless completion.',
    },
    {
      title: 'Purpose-Driven',
      description: 'Every visual and interface decision has a clear reason. No decorative clutter, arbitrary elements, or design trends for the sake of trends.',
    },
    {
      title: 'Simple and Clear',
      description: 'Remove unnecessary cognitive complexity. Clean visual hierarchy and readable typographic structures allow users to focus on what matters.',
    },
    {
      title: 'Consistent',
      description: 'Build cohesive digital and visual systems that scale cleanly across mobile, desktop, print, and physical touchpoints without fragmenting.',
    },
  ],
  designProcess: [
    {
      step: '01',
      title: 'Discover',
      duration: 'Week 1',
      description: 'Understand the business, audience, core goals, and existing pain points through direct discussion, competitive audit, and requirement gathering.',
      deliverables: ['Project Brief', 'User Personas', 'Feature Matrix', 'Visual Direction Board'],
    },
    {
      step: '02',
      title: 'Define',
      duration: 'Week 1–2',
      description: 'Establish the scope, information architecture, primary user journeys, and structural priorities before moving into visual execution.',
      deliverables: ['Information Architecture', 'User Journey Flows', 'Low-Fidelity Wireframes'],
    },
    {
      step: '03',
      title: 'Design',
      duration: 'Week 2–4',
      description: 'Develop high-fidelity concept screens, typography systems, color tokens, visual components, and interactive prototypes for testing.',
      deliverables: ['Design System Tokens', 'High-Fidelity Interfaces', 'Interactive Prototypes', 'Asset Exports'],
    },
    {
      step: '04',
      title: 'Refine and Deliver',
      duration: 'Week 4+',
      description: 'Incorporate agreed client feedback, refine micro-interactions, conduct accessibility reviews, and hand off production-ready assets and developer specs.',
      deliverables: ['Figma Source Files', 'Developer Handoff Specs', 'Brand Guidelines (PDF)', 'Vector Master Files'],
    },
  ],
  whatYouCanExpect: [
    {
      heading: 'Transparent Communication',
      detail: 'Regular scheduled check-ins, documented milestones, and direct WhatsApp or email collaboration with zero jargon.',
    },
    {
      heading: 'Production-Ready Deliverables',
      detail: 'All Figma design files with organized components, auto-layout, vector SVG/EPS assets, and developer-friendly documentation.',
    },
    {
      heading: 'Structured Revision Rounds',
      detail: 'Dedicated milestone reviews at wireframe and high-fidelity stages to ensure alignment before finalizing assets.',
    },
    {
      heading: 'Commercial Ownership',
      detail: 'Full commercial rights and source assets transferred to you upon project completion with no recurring licensing fees.',
    },
  ],
};

export interface HeroSlide {
  id: string;
  discipline: string;
  headline: string;
  subtext: string;
  visualImage: string;
  ctaText: string;
  filterCategory: string;
  floatingBadge: {
    title: string;
    value: string;
  };
  metricsTag: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'product-design',
    discipline: 'Digital Product Design',
    headline: 'Digital products designed around people.',
    subtext: 'Intuitive mobile applications, fluid transaction flows, and modular interaction architecture built for everyday clarity.',
    visualImage: FINTECH_IMAGE,
    ctaText: 'Explore Product Design',
    filterCategory: 'Mobile App Design',
    floatingBadge: {
      title: 'User Velocity',
      value: '3-Tap Transfer Flow',
    },
    metricsTag: 'Mobile Fintech & Product UI',
  },
  {
    id: 'brand-identity',
    discipline: 'Brand Identity',
    headline: 'Visual identities that make brands memorable.',
    subtext: 'A curated visual universe of bespoke geometric logomarks, typography rules, color palettes, and tactile stationery.',
    visualImage: BRAND_IMAGE,
    ctaText: 'Explore Branding',
    filterCategory: 'Branding',
    floatingBadge: {
      title: 'Design System',
      value: '36-Page Brand Book',
    },
    metricsTag: 'Identity & Vector Systems',
  },
  {
    id: 'ui-ux-web',
    discipline: 'UI/UX & Web Design',
    headline: 'Better experiences begin with better design.',
    subtext: 'High-clarity web applications, data-dense analytics dashboards, and responsive marketing interfaces that drive user retention.',
    visualImage: SAAS_IMAGE,
    ctaText: 'Explore UI/UX',
    filterCategory: 'UI/UX Design',
    floatingBadge: {
      title: 'Information Density',
      value: 'Instant Scanability',
    },
    metricsTag: 'Enterprise SaaS & Web UI',
  },
  {
    id: 'graphic-design',
    discipline: 'Graphic Design',
    headline: 'Creative visuals with a clear purpose.',
    subtext: 'Editorial launch kits, pitch presentations, business cards, and marketing collateral engineered to communicate value with confidence.',
    visualImage: HERO_IMAGE,
    ctaText: 'Explore Graphic Design',
    filterCategory: 'Graphic Design',
    floatingBadge: {
      title: 'Print Ready',
      value: 'Vector CMYK 300 DPI',
    },
    metricsTag: 'Marketing Collateral & Print',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    slug: 'fintech-mobile-experience',
    title: 'Fintech Mobile Experience',
    category: 'Mobile App Design',
    categoryTag: 'Mobile App Design',
    shortDescription: 'A streamlined mobile banking and investment application prioritizing portfolio clarity and rapid funds transfers.',
    isFeatured: true,
    isConcept: true,
    coverImage: FINTECH_IMAGE,
    clientOrContext: 'Concept Project · Financial Tech Exploration',
    year: '2026',
    services: ['Mobile UI/UX Design', 'Interaction Design', 'Design System'],
    tools: ['Figma', 'Protopie', 'Illustrator'],
    challenge: 'Mobile banking applications frequently overwhelm users with dense numbers, confusing menus, and high-anxiety transaction flows. The challenge was to architect a high-security mobile banking experience that feels reassuring, scannable in seconds, and effortless for everyday financial operations.',
    objectives: [
      'Eliminate visual clutter around net worth and active balances.',
      'Reduce the multi-step wire transfer flow to three confident taps with instant feedback.',
      'Implement an accessible high-contrast dark theme calibrated for OLED battery efficiency and low-light usage.',
      'Build a modular UI component library optimized for iOS and Android design guidelines.',
    ],
    approach: 'I started by auditing user drop-off points in conventional banking applications. By consolidating primary accounts into an interactive card swipe carousel and anchoring everyday actions (Transfer, Pay, Analytics) in an accessible bottom-docked navigation bar, users can perform 90% of their routine tasks with one hand.',
    wireframesAndProcess: 'Initial wireframing focused on information density: testing typography scales between 12px and 32px to ensure financial figures are readable at a glance without truncating currency symbols. Three iterations of the transaction verification modal were tested to prevent accidental transfers while preserving speed.',
    solution: 'The final design features a refined dark slate interface with soft teal accents for positive portfolio balance trends, a clear transaction ledger with merchant logos, and a smart categorization dashboard that visually diagrams spending habits without complex spreadsheets.',
    results: [
      'Engineered an intuitive 3-step fund transfer flow.',
      'Designed over 45 responsive mobile screens across auth, transfers, cards, and analytics.',
      'Created a comprehensive 200+ token Figma component system with responsive auto-layout.',
    ],
  },
  {
    slug: 'urban-brand-identity',
    title: 'Urban Brand Identity',
    category: 'Branding & Identity',
    categoryTag: 'Branding',
    shortDescription: 'A modern geometric visual identity, stationery system, and brand guidelines for an architectural studio.',
    isFeatured: true,
    isConcept: true,
    coverImage: BRAND_IMAGE,
    clientOrContext: 'Concept Project · Architecture & Design Collective',
    year: '2026',
    services: ['Logo Design', 'Brand Identity', 'Print Design', 'Stationery'],
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    challenge: 'Architectural and spatial design studios require an identity that conveys structural rigor, structural precision, and timeless elegance without overshadowing their actual architectural portfolio.',
    objectives: [
      'Craft a versatile logomark inspired by structural isometric perspective.',
      'Develop a restrained monochrome color system with tactile paper textures.',
      'Standardize corporate typography for project proposals, letterheads, and business cards.',
      'Produce comprehensive brand guidelines for cross-media consistency.',
    ],
    approach: 'The visual mark was developed around geometric isometric framing—merging the letters "A" and structural building beams. Hand-sketched grid variations were digitized and refined with exact mathematical proportions to ensure legibility from 16px digital favicons to physical building signage.',
    wireframesAndProcess: 'Tested the mark across various embossing, debossing, and foil-stamp finishes. Created print test sheets for letterheads, presentation title blocks, and duplexed 600gsm cotton business cards to ensure tangible tactile prestige.',
    solution: 'A cohesive brand system anchored by a geometric iconographic mark, clean Swiss-inspired typography hierarchy, and a strict minimalist grid that positions the studio as an authoritative, high-tier architectural practice.',
    results: [
      'Delivered full vector identity suite (monochrome, inverted, icon-only, lockup).',
      'Engineered 36-page comprehensive Brand Style Guide covering typography, clear space, and print specifications.',
      'Produced complete stationery templates including business cards, letterheads, and portfolio project sheets.',
    ],
  },
  {
    slug: 'saas-dashboard-concept',
    title: 'SaaS Dashboard Concept',
    category: 'Digital Product Design',
    categoryTag: 'Web Design',
    shortDescription: 'A high-clarity analytics dashboard for modern marketing and revenue teams balancing density and scannability.',
    isFeatured: true,
    isConcept: true,
    coverImage: SAAS_IMAGE,
    clientOrContext: 'Concept Project · B2B Enterprise Analytics',
    year: '2026',
    services: ['Web UI/UX Design', 'Data Visualization', 'Information Architecture'],
    tools: ['Figma', 'Illustrator'],
    challenge: 'Analytics tools often suffer from "data vomit"—crowding dozens of uncalibrated charts onto one screen, leading to analysis paralysis and frustrated decision-makers.',
    objectives: [
      'Establish a clear visual hierarchy that surfaces primary revenue KPIs before secondary trends.',
      'Design accessible data visualization charts with high color contrast and readable tabular figures.',
      'Provide customizable card widgets with filter presets for daily, weekly, and monthly tracking.',
      'Ensure fluid responsive breakpoints from 1440px desktop down to tablet and mobile views.',
    ],
    approach: 'Conducted workflow analysis to determine which metrics team leads look at first. Structured the layout with a sticky top KPI summary strip followed by an asymmetrical 2:1 column grid: primary revenue velocity on the left and categorical distribution on the right.',
    wireframesAndProcess: 'Explored multiple card layouts and data visualization palettes. Avoided rainbow gradients in favor of an intentional cobalt-to-emerald gradient with crisp hairline dividers and monospace tabular figures for accurate column alignment.',
    solution: 'An executive-grade SaaS dashboard that communicates revenue velocity, active subscriptions, and cohort trends in a clean, uncluttered layout designed for fast decision-making.',
    results: [
      'Streamlined dashboard scanning time with top-line metric cards.',
      'Customized 8 bespoke chart components with accessible color tokens.',
      'Designed responsive views for 1920px, 1440px, 1024px, and 390px screens.',
    ],
  },
  {
    slug: 'ecommerce-redesign',
    title: 'Minimalist E-Commerce Redesign',
    category: 'UI/UX Design',
    categoryTag: 'UI/UX Design',
    shortDescription: 'A frictionless shopping journey and product detail experience for a luxury apparel brand.',
    isFeatured: false,
    isConcept: true,
    coverImage: HERO_IMAGE,
    clientOrContext: 'Concept Project · Modern Direct-to-Consumer Brand',
    year: '2025',
    services: ['E-Commerce UX', 'Mobile-First Web Design', 'Checkout Optimization'],
    tools: ['Figma', 'Illustrator'],
    challenge: 'High cart abandonment rates caused by cumbersome size selection, hidden shipping details, and repetitive multi-step checkout forms.',
    objectives: [
      'Simplify product discovery through clean category filtering.',
      'Design an interactive product showcase with sticky add-to-bag affordances.',
      'Implement an accordion-style single-page checkout flow.',
      'Maintain strong editorial visual rhythm with generous whitespace.',
    ],
    approach: 'Removed extraneous banner popups and secondary navigation links. Focused on product imagery, clear size charts with stock indicators, and a slide-out drawer cart that displays free shipping progress in real time.',
    wireframesAndProcess: 'Mapped every user step from search to payment confirmation. Wireframed 4 variants of the mobile cart drawer to identify the most thumb-friendly position for the final checkout CTA.',
    solution: 'An editorial shopping experience that elevates product craftsmanship while keeping checkout friction to an absolute minimum.',
    results: [
      'Engineered an accordion checkout flow requiring 40% fewer form inputs.',
      'Designed responsive product detail templates with sticky purchase bars on mobile.',
    ],
  },
  {
    slug: 'restaurant-visual-identity',
    title: 'Artisan Culinary Visual Identity',
    category: 'Brand & Graphic Design',
    categoryTag: 'Graphic Design',
    shortDescription: 'Warm, memorable brand identity, handcrafted menu design, and packaging for an upscale contemporary bistro.',
    isFeatured: false,
    isConcept: true,
    coverImage: BRAND_IMAGE,
    clientOrContext: 'Concept Project · Hospitality & Culinary Brand',
    year: '2025',
    services: ['Logo Design', 'Menu Typography', 'Packaging & Print Materials'],
    tools: ['Illustrator', 'Photoshop'],
    challenge: 'Creating a culinary brand that feels approachable for casual lunches yet sophisticated enough for evening dining and private tastings.',
    objectives: [
      'Design a distinctive logomark blending organic culinary motifs with clean typography.',
      'Create an editorial food and wine menu layout that is easy to read in warm ambient lighting.',
      'Design takeout packaging, coffee sleeves, and branded receipts.',
    ],
    approach: 'Selected a rich neutral palette with deep espresso charcoals, warm linen paper, and subtle terracotta accents. Custom-lettered wordmark paired with an elegant serif for section headlines and a clean sans-serif for item descriptions and prices.',
    wireframesAndProcess: 'Printed full-scale menu prototypes on varying paper stocks to test legibility in dim restaurant lighting conditions.',
    solution: 'A timeless identity and print suite that enhances the overall dining atmosphere and leaves guests with a memorable takeaway experience.',
    results: [
      'Designed full print collateral: Dinner Menu, Wine List, Table Tents, and Business Cards.',
      'Created vector packaging stamp templates for takeout bags and coffee cups.',
    ],
  },
  {
    slug: 'startup-launch-kit',
    title: 'Tech Startup Launch Brand Kit',
    category: 'Brand & Marketing Design',
    categoryTag: 'Logo Design',
    shortDescription: 'Complete visual identity, business cards, pitch deck graphics, and social campaign kit for a seed-stage venture.',
    isFeatured: true,
    isConcept: true,
    coverImage: HERO_IMAGE,
    clientOrContext: 'Concept Project · Venture Launch Kit',
    year: '2026',
    services: ['Logo Design', 'Business Card Design', 'Pitch Deck Design', 'Social Media Templates'],
    tools: ['Illustrator', 'Figma', 'Photoshop'],
    challenge: 'Early-stage founders often launch with mismatched graphics, inconsistent colors, and weak pitch presentations, reducing investor confidence.',
    objectives: [
      'Provide a sharp, modern logomark with light and dark mode variations.',
      'Design premium business cards with QR code digital vCard integration.',
      'Build a reusable 15-slide investor pitch deck template in 16:9 widescreen.',
      'Provide modular social media announcement templates for Twitter/X and LinkedIn.',
    ],
    approach: 'Structured the kit around an energetic cobalt blue accent `#315CF5` and clean architectural typography. Formatted all assets into easily editable master components so founders can adapt templates without breaking layout rules.',
    wireframesAndProcess: 'Iterated through 20+ logo sketches exploring symbolism around connectivity and growth before finalizing a sleek interlocking vector mark.',
    solution: 'A comprehensive starter kit that gives early-stage teams instant professional credibility from investor meetings to social media announcements.',
    results: [
      'Delivered complete vector logo package (SVG, PNG, EPS, AI).',
      'Designed print-ready CMYK business cards with 3mm bleed specifications.',
      'Created 12 Figma social templates and 15 investor slide templates.',
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'User research, user flows, wireframes, prototypes, interface design, usability improvements, and responsive layouts.',
    longDesc: 'Digital products succeed or fail based on how effortless they are to use. My UI/UX design service bridges business objectives with genuine user needs, transforming complex tasks into intuitive, enjoyable digital experiences across desktop, tablet, and mobile.',
    deliverables: [
      'Interactive Figma prototypes',
      'Low & high-fidelity wireframes',
      'Comprehensive design systems & component libraries',
      'User journey maps & user flow diagrams',
      'Responsive design for web, tablet, and mobile',
      'Developer handoff specs with exact spacing & CSS values',
    ],
    scope: [
      'Discovery & stakeholder requirement gathering',
      'Auditing existing applications for usability bottlenecks',
      'Information architecture & structural wireframing',
      'Visual interface styling & high-fidelity mockups',
      'Iterative refinement based on usability feedback',
    ],
    workflow: [
      '1. Initial consultation & requirement clarification',
      '2. Information architecture & interactive wireframing',
      '3. High-fidelity visual styling & component creation',
      '4. Prototype testing & edge-case validation',
      '5. Developer handoff with tokenized assets',
    ],
    faqs: [
      {
        question: 'What design tools do you work in?',
        answer: 'I design primarily in Figma, using auto-layout, interactive component variants, and design tokens for clean developer handoff.',
      },
      {
        question: 'How do you ensure developers can build what you design?',
        answer: 'I organize every Figma file with explicit component properties, responsive layout constraints, standard 8pt spacing grids, and exported vector SVG assets.',
      },
    ],
    relatedCategory: 'UI/UX Design',
  },
  {
    id: 'digital-product-design',
    title: 'Digital Product Design',
    shortDesc: 'Thoughtful interfaces for websites, mobile applications, dashboards, and digital platforms.',
    longDesc: 'End-to-end product design for web applications, SaaS dashboards, and digital tools. I focus on scannable data visualization, modular card layouts, and scalable architecture that can grow with your feature roadmap.',
    deliverables: [
      'Full web application interface screens',
      'Modular dashboard widgets & analytics charts',
      'Light & dark mode interface themes',
      'Interactive states (hover, focus, empty, loading, error)',
      'Design token documentation for engineering teams',
    ],
    scope: [
      'Enterprise dashboard & analytics UI',
      'Web application portals & internal tools',
      'SaaS onboarding & user account management',
      'Data-dense tables with sorting and filtering flows',
    ],
    workflow: [
      '1. Scope & feature matrix definition',
      '2. Information hierarchy & screen flow mapping',
      '3. Core dashboard layout & widget exploration',
      '4. Full application screen buildout',
      '5. Interactive prototype & edge state validation',
    ],
    faqs: [
      {
        question: 'Can you work with our existing engineering team?',
        answer: 'Yes. I actively collaborate with frontend engineers, ensuring components map cleanly to Tailwind, React, or your framework of choice.',
      },
    ],
    relatedCategory: 'Web Design',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    shortDesc: 'Distinctive logos that communicate a brand’s identity and remain recognizable across different applications.',
    longDesc: 'A great logo must be memorable, versatile, and enduring. I create custom marks and wordmarks designed with mathematical balance that look just as sharp on a tiny browser tab icon as they do on a large outdoor sign.',
    deliverables: [
      'Primary logo lockup',
      'Secondary & compact icon variations',
      'Monochrome (black & white) versions',
      'Vector master files (SVG, EPS, AI, PDF)',
      'High-res transparent PNG & web assets',
      'Clear space and minimum size specifications',
    ],
    scope: [
      'Brand positioning & competitor visual audit',
      'Creative exploration & concept sketches',
      'Mathematical vector refinement & grid precision',
      'Colorway exploration & contrast testing',
      'Exporting universal print & digital formats',
    ],
    workflow: [
      '1. Briefing & visual questionnaire',
      '2. Concept exploration & initial presentation',
      '3. Selection & refinement rounds',
      '4. Final vector master delivery across all formats',
    ],
    faqs: [
      {
        question: 'Do I own the full copyright to the finished logo?',
        answer: 'Yes. Upon final payment and delivery, you hold 100% full commercial ownership and exclusive rights to the finalized logo mark.',
      },
    ],
    relatedCategory: 'Logo Design',
  },
  {
    id: 'brand-identity-design',
    title: 'Brand Identity Design',
    shortDesc: 'Visual identity systems including typography, colour palettes, logo variations, and brand guidelines.',
    longDesc: 'Beyond a standalone logo, a cohesive brand identity establishes the entire visual universe of your company. I develop harmonious color palettes, typography scales, graphic rules, and brand manuals that ensure everyone on your team presents a unified brand.',
    deliverables: [
      'Comprehensive Brand Guidelines PDF',
      'Curated typography hierarchy & font licenses guidance',
      'Brand color palette with HEX, RGB, and CMYK values',
      'Graphic patterns, iconography & photo treatment guides',
      'Social media profile avatars & header banners',
      'Do’s and Don’ts usage reference',
    ],
    scope: [
      'Visual positioning & moodboard curation',
      'Color psychology & accessible contrast calibration',
      'Typography pairing & editorial styling guidelines',
      'Brand asset production and guideline documentation',
    ],
    workflow: [
      '1. Strategy & visual discovery',
      '2. Moodboards & visual direction approval',
      '3. System buildout (color, type, graphic assets)',
      '4. Brand book creation & client walk-through',
    ],
    faqs: [
      {
        question: 'Why do I need a brand identity rather than just a logo?',
        answer: 'A logo is only one touchpoint. A complete identity ensures your presentations, website, social media, and printed materials look unified, professional, and trustworthy.',
      },
    ],
    relatedCategory: 'Branding',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    shortDesc: 'Promotional designs, marketing materials, social media graphics, and campaign creatives.',
    longDesc: 'Impactful visual marketing assets designed to capture attention and communicate your message clearly across digital and print media.',
    deliverables: [
      'Social media graphics & announcement banners',
      'Digital ad campaign creatives',
      'Marketing flyers & one-pagers',
      'Presentation deck templates',
      'Infographics & visual diagrams',
    ],
    scope: [
      'Promotional campaign design',
      'Social media template packages',
      'Marketing collateral for product launches',
      'Event graphics & digital signage',
    ],
    workflow: [
      '1. Campaign objective & copy alignment',
      '2. Concept design & layout drafts',
      '3. Feedback integration',
      '4. Multi-format delivery optimized for each platform',
    ],
    faqs: [
      {
        question: 'Can you provide editable templates?',
        answer: 'Yes, templates can be provided in Figma or Adobe formats so your marketing team can easily update headlines and imagery.',
      },
    ],
    relatedCategory: 'Graphic Design',
  },
  {
    id: 'business-cards-and-print',
    title: 'Business Cards & Print Design',
    shortDesc: 'Professional business cards, flyers, brochures, and other branded print materials.',
    longDesc: 'Physical print materials require precise prepress knowledge—color profiles, bleed margins, paper weights, and tactile print finishes. I design tangible brand collateral that feels substantial and reflects high craftsmanship.',
    deliverables: [
      'Custom business card designs (standard & modern formats)',
      'Print-ready PDF with bleed & crop marks (CMYK 300 DPI)',
      'Stationery (letterheads, envelopes, compliment slips)',
      'Brochures, trifolds & corporate folders',
      'Prepress guidance for commercial printers',
    ],
    scope: [
      'Physical dimension & orientation planning',
      'Typography & layout formatting',
      'Special finish setup (emboss, deboss, spot UV, foil)',
      'Print shop coordination specifications',
    ],
    workflow: [
      '1. Format & material selection',
      '2. Layout design & information hierarchy',
      '3. Paper stock and finish consultation',
      '4. Prepress print-ready PDF export with bleeds',
    ],
    faqs: [
      {
        question: 'Do you handle the actual printing?',
        answer: 'I provide the exact print-ready production files and prepress specifications that you can send directly to any commercial printer or online service (e.g., Moo, VistaPrint, or local print shops).',
      },
    ],
    relatedCategory: 'Graphic Design',
  },
];
