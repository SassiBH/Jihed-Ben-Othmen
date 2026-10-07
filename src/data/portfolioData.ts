export interface ProjectCaseStudy {
  id: string;
  index: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  category: 'ai' | 'web' | 'mobile';
  categoryLabel: string;
  bentoSpan: 'wide' | 'standard';
  image?: string;
  svgMotif: 'enso-wave' | 'katana-mesh' | 'aikido-orbit' | 'steel-grid' | 'ledger-flow' | 'rfq-blueprint';
  summary: string;
  samuraiExecution: string[];
  aikidoHarmony: string;
  metrics: {
    value: string;
    unit: string;
    context: string;
  }[];
  techStack: string[];
  deliverables: string[];
}

export interface ArsenalDiscipline {
  id: string;
  japaneseTitle: string;
  englishTitle: string;
  philosophy: string;
  category: 'languages' | 'frontend' | 'backend' | 'mobile' | 'data-devops';
  items: {
    name: string;
    domain: string;
    experienceContext: string;
    yearsOrProjects: string;
  }[];
}

export interface AikidoKataScenario {
  id: string;
  name: string;
  japaneseName: string;
  incomingForce: string;
  redirectionPrinciple: string;
  latencyTarget: string;
  efficiencyGain: string;
  nodes: {
    stage: string;
    tech: string;
    role: string;
    detail: string;
  }[];
}

export const PROFILE_DATA = {
  name: 'Jihed Ben Othmen',
  title: 'Full Stack Developer',
  location: 'Mahdia, Tunisia',
  phone: '+216 51 885 304',
  email: 'jihedbinothmen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jihed-ben-othmen',
  linkedinHandle: '/jihed-ben-othmen',
  github: 'https://github.com/jihed-ben-othmen',
  githubHandle: '/jihed-ben-othmen',
  availability: 'Seeking a full-time role in a product-focused company',
  heroImage: '/src/assets/images/hero_samurai_aikido_dojo_1791378701200.jpg',
  summary:
    'Full Stack Developer with 3+ years of experience building production web and mobile applications. Specialized in React.js, Node.js, and Python, with hands-on experience integrating AI/ML APIs into real-world products. Comfortable across the full stack — from REST API design and database modeling to responsive frontend interfaces and Flutter mobile apps. Experienced in Agile teams and autonomous freelance delivery.',
  martialCreed: {
    samurai:
      'Kenjutsu Precision — Clean, decisive architecture forged in TypeScript, Python, Java, and Dart. Every API contract and database schema is cut with zero ambiguity.',
    aikido:
      'Aikido Harmony (合気道) — Absorbing heavy multimedia streams, complex role permissions, and real-time WebSocket traffic, redirecting them into effortless sub-2-second user experiences.',
  },
  heroMetrics: [
    {
      value: '3+ Years',
      label: 'Production Full-Stack & Mobile Engineering',
    },
    {
      value: '~70%',
      label: 'Manual Media Processing Time Reduced via AI/ML',
    },
    {
      value: '< 2.0s',
      label: 'Real-Time AI Frontend Response Latency',
    },
    {
      value: '6 Languages',
      label: 'JS · TS · Python · Dart · Java · PHP',
    },
  ],
  qualifications: [
    {
      degree: 'Engineering Degree in Computer Science',
      institution: 'Polytechnique Sousse',
      period: '2021 – 2024',
      focus: 'Full-Stack Architecture, Distributed Systems, Software Engineering & AI Integration',
    },
    {
      degree: "Bachelor's Degree in Management Information Systems",
      institution: 'Higher Institute of Technological Studies in Mahdia (ISET Mahdia)',
      period: '2016 – 2019',
      focus: 'Information Systems Modeling, Relational Databases & Enterprise Web Development',
    },
  ],
  certifications: [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle Cloud Infrastructure',
      year: '2025',
      domain: 'Artificial Intelligence, Machine Learning & Cloud AI Workloads',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle Cloud Infrastructure',
      year: '2025',
      domain: 'Core Cloud Infrastructure, Security, Networking & Distributed Compute',
    },
  ],
  languages: [
    { language: 'Arabic', proficiency: 'Mother tongue' },
    { language: 'French', proficiency: 'Advanced' },
    { language: 'English', proficiency: 'Intermediate' },
  ],
  strengths: [
    {
      title: 'Creativity',
      description: 'Designing intuitive interfaces and adaptable architectural patterns across web and mobile.',
    },
    {
      title: 'Problem-Solving Abilities',
      description: 'Deconstructing bottlenecks in media pipelines, state management, and multi-role security.',
    },
    {
      title: 'Communication',
      description: 'Fluent collaboration within Agile Scrum teams and autonomous end-to-end client delivery.',
    },
  ],
  interests: ['Strategic Gaming', 'Football'],
};

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'ai-audio-video-platform',
    index: '01',
    title: 'Confidential AI Audio & Video Processing Platform',
    role: 'Freelance AI Developer',
    organization: 'AI Startup (NDA)',
    location: 'Remote · Production Deployment',
    period: 'Mar 2025 – Dec 2025',
    category: 'ai',
    categoryLabel: 'AI & Python Full-Stack',
    bentoSpan: 'wide',
    image: '/src/assets/images/project_ai_media_engine_1791378712826.jpg',
    svgMotif: 'enso-wave',
    summary:
      'Confidential AI-powered web application engineered solo from initial system design to production deployment, automating high-volume audio and video processing with advanced machine learning capabilities.',
    samuraiExecution: [
      'Built a resilient Python backend integrating specialized AI/ML APIs to ingest, analyze, and process raw audio and video files, reducing manual processing time by ~70%.',
      'Developed a high-responsiveness React frontend enabling real-time user interactions with sub-2-second response latency.',
      'Delivered the complete full-stack application solo across a disciplined 10-month timeline from architectural blueprint to live production deployment.',
    ],
    aikidoHarmony:
      'Heavy, asynchronous multimedia streams are absorbed by the Python ingestion layer and redirected into fluid, sub-2s reactive UI updates without blocking the user workflow.',
    metrics: [
      { value: '~70%', unit: 'Time Saved', context: 'Reduction in manual audio/video processing duration' },
      { value: '< 2.0s', unit: 'Latency', context: 'Real-time interactive response on React frontend' },
      { value: '10 Mos', unit: 'Solo Delivery', context: 'End-to-end architecture to production release' },
    ],
    techStack: ['Python', 'JavaScript', 'React', 'AI/ML API', 'REST API'],
    deliverables: ['Python AI/ML Media Pipeline', 'Sub-2s Interactive React Studio', 'Production REST Architecture'],
  },
  {
    id: 'epirana-service-marketplace',
    index: '02',
    title: 'Local Service Provider Marketplace & Admin Ecosystem',
    role: 'Mobile & Web Developer (End-of-Study Internship)',
    organization: 'E-pirana',
    location: 'Tunisia',
    period: 'Feb 2024 – Jun 2024',
    category: 'mobile',
    categoryLabel: 'Flutter & Spring Boot Ecosystem',
    bentoSpan: 'standard',
    image: '/src/assets/images/project_epirana_marketplace_1791378722218.jpg',
    svgMotif: 'aikido-orbit',
    summary:
      'Dual-platform ecosystem connecting clients with local service providers via an iOS/Android Flutter mobile app and an Angular administrative control center powered by Spring Boot and PostgreSQL.',
    samuraiExecution: [
      'Built a cross-platform Flutter mobile application (iOS & Android) connecting clients with local service providers, featuring real-time messaging, photo sharing, and a verified review system.',
      'Developed a comprehensive Angular admin dashboard to govern users, service categories, and marketplace listings.',
      'Integrated Spring Boot REST APIs with a PostgreSQL relational database for durable persistence and bidirectional real-time chat via WebSocket.',
    ],
    aikidoHarmony:
      'Harmonizes three distinct surfaces — mobile consumers, local service providers, and web administrators — through synchronized Spring Boot WebSockets and PostgreSQL transactions.',
    metrics: [
      { value: '2 Platforms', unit: 'iOS & Android', context: 'Single unified Flutter codebase plus Angular web admin' },
      { value: 'Real-Time', unit: 'WebSocket', context: 'Instant messaging and photo sharing pipeline' },
      { value: 'Full Stack', unit: 'Spring + PG', context: 'Relational modeling and RESTful service orchestration' },
    ],
    techStack: ['Flutter', 'Spring Boot', 'PostgreSQL', 'Angular', 'WebSocket', 'REST API'],
    deliverables: ['iOS & Android Flutter App', 'Angular Admin Dashboard', 'Spring Boot WebSocket & REST Engine'],
  },
  {
    id: 'wimobi-saudi-ecommerce',
    index: '03',
    title: 'Saudi Arabia Pet Products & Services E-Commerce Platform',
    role: 'Web Developer',
    organization: 'Wi-Mobi',
    location: 'Saudi Arabia Market',
    period: 'Sep 2020 – Jan 2021',
    category: 'web',
    categoryLabel: 'Angular E-Commerce & RBAC',
    bentoSpan: 'standard',
    image: '/src/assets/images/project_wimobi_ecommerce_1791378733529.jpg',
    svgMotif: 'katana-mesh',
    summary:
      'Cross-device e-commerce platform dedicated to pet products and veterinary/care services across Saudi Arabia, engineered for seamless parity across desktop browsers and Android/iOS mobile viewports.',
    samuraiExecution: [
      'Built the Angular 10 frontend for a commercial e-commerce platform serving pet product customers across Saudi Arabia on both web and mobile devices.',
      'Integrated RESTful APIs governing product catalogs, customer accounts, and order lifecycle management across 3 core functional modules.',
      'Implemented JWT authentication with strict role-based access control (RBAC), securing routes for guest, customer, and administrator roles.',
      'Optimized frontend rendering performance and mobile-adaptive Angular components across diverse screen dimensions in collaboration with the team via GitLab.',
    ],
    aikidoHarmony:
      'Redirects complex multi-role permissions (Guest, Customer, Admin) and multi-device viewport constraints into a single frictionless shopping flow.',
    metrics: [
      { value: '3 Modules', unit: 'Core Commerce', context: 'Catalog, User Accounts, and Order Management' },
      { value: '3 Roles', unit: 'JWT RBAC', context: 'Secured Guest, Customer, and Admin route guards' },
      { value: 'Web + Mobile', unit: 'Adaptive UI', context: 'Tuned for desktop, Android, and iOS browsers' },
    ],
    techStack: ['Angular 10', 'TypeScript', 'REST API', 'JWT Auth', 'GitLab', 'Responsive Design'],
    deliverables: ['Angular 10 Storefront', '3-Tier JWT Role Guard System', 'Mobile-Adaptive Commerce Components'],
  },
  {
    id: 'sopra-hr-gp4you',
    index: '04',
    title: 'GP4YOU Enterprise HR Guided Process Module',
    role: 'Web Developer',
    organization: 'Sopra HR',
    location: 'Deutschland Enterprise Account',
    period: 'Jul 2019 – Aug 2020',
    category: 'web',
    categoryLabel: 'Enterprise React & Java API',
    bentoSpan: 'wide',
    image: '/src/assets/images/project_sopra_enterprise_1791378743970.jpg',
    svgMotif: 'steel-grid',
    summary:
      'Enterprise front-end Guided Process (GP) management module built with ReactJS and Java API integrations for Sopra HR’s GP4YOU platform serving German enterprise organizations.',
    samuraiExecution: [
      'Developed and maintained the front-end Guided Process (GP) management module using ReactJS tightly coupled with backend Java API integrations.',
      'Resolved mission-critical module defects and customized workflow behaviors directly aligned with customer requirements for GP4YOU Deutschland.',
      'Engineered on-demand functional modules to dynamically administer enterprise roles and organizational functions within an Agile Jira/Innersource workflow.',
    ],
    aikidoHarmony:
      'Transforms rigid enterprise HR compliance and German regulatory workflows into guided, self-adjusting React interfaces.',
    metrics: [
      { value: '14 Mos', unit: 'Enterprise Tenure', context: 'Continuous delivery on GP4YOU Deutschland' },
      { value: 'React + Java', unit: 'Hybrid Stack', context: 'Enterprise guided process integration' },
      { value: 'On-Demand', unit: 'Role Modules', context: 'Dynamic role & function administration' },
    ],
    techStack: ['ReactJS', 'JavaScript', 'Java API', 'GP4YOU', 'Jira', 'Innersource', 'Git'],
    deliverables: ['Guided Process React Modules', 'Dynamic Role & Function Manager', 'Deutschland Client Customizations'],
  },
  {
    id: 'epirana-money-tracker',
    index: '05',
    title: 'Realm-Powered Personal Expense & Money Tracker',
    role: 'Mobile Developer (Internship)',
    organization: 'E-pirana',
    location: 'Tunisia',
    period: 'Jun 2023 – Jul 2023',
    category: 'mobile',
    categoryLabel: 'Flutter & Local-First Database',
    bentoSpan: 'standard',
    svgMotif: 'ledger-flow',
    summary:
      'Offline-first mobile financial tracking application engineered with Flutter, Dart, Provider state architecture, and the high-speed Realm embedded object database.',
    samuraiExecution: [
      'Designed and built a dedicated Money Tracker mobile application enabling instantaneous personal expense logging and category analytics.',
      'Architected reactive state management using Flutter Provider paired with Realm database for zero-latency local persistence.',
    ],
    aikidoHarmony:
      'Eliminates network friction entirely by keeping financial state local, reactive, and immediately queryable on-device.',
    metrics: [
      { value: '0ms Net', unit: 'Offline-First', context: 'Embedded Realm object storage on mobile' },
      { value: '100% Dart', unit: 'Native Speed', context: 'Reactive Provider state synchronization' },
    ],
    techStack: ['Flutter', 'Dart', 'Provider', 'Realm Database'],
    deliverables: ['Flutter Expense Tracker App', 'Realm Local Persistence Layer', 'Provider State Architecture'],
  },
  {
    id: 'rpc-bramlage-commercial',
    index: '06',
    title: 'Commercial Management & RFQ Web Suite',
    role: 'Web Developer (End-of-Study Internship)',
    organization: 'RPC Bramlage',
    location: 'Tunisia',
    period: 'Feb 2019 – Jun 2019',
    category: 'web',
    categoryLabel: 'MEAN Stack Commercial System',
    bentoSpan: 'standard',
    svgMotif: 'rfq-blueprint',
    summary:
      'Full-stack commercial management web application streamlining Request for Quotation (RFQ) workflows, commercial studies, and secure authentication.',
    samuraiExecution: [
      'Created a full-stack web application tailored for industrial commercial management and quotation tracking.',
      'Designed and developed secure authentication flows, Request for Quotation (RFQ) management pipelines, and commercial study interfaces using Angular, Node.js, Express.js, and MongoDB.',
    ],
    aikidoHarmony:
      'Unifies multi-department commercial studies and RFQ approvals into a single structured document pipeline.',
    metrics: [
      { value: '3 Pillars', unit: 'Core Suite', context: 'Authentication, RFQ Pipeline & Commercial Studies' },
      { value: 'MEAN Stack', unit: 'End-to-End', context: 'TypeScript, Angular, Node.js, Express & MongoDB' },
    ],
    techStack: ['TypeScript', 'Angular', 'Node.js', 'Express.js', 'MongoDB'],
    deliverables: ['RFQ Management Interface', 'Commercial Studies Module', 'Node/Express/MongoDB API'],
  },
];

export const ARSENAL_DISCIPLINES: ArsenalDiscipline[] = [
  {
    id: 'languages',
    japaneseTitle: '刀剣 · Katanas of Logic',
    englishTitle: 'Programming Languages',
    philosophy: 'Six foundational languages chosen for type safety, runtime velocity, and AI/enterprise versatility.',
    category: 'languages',
    items: [
      {
        name: 'TypeScript',
        domain: 'Typed Full-Stack & Enterprise Frontend',
        experienceContext: 'Wi-Mobi Saudi E-Commerce, RPC Bramlage, Modern React & Angular Systems',
        yearsOrProjects: '3+ Years',
      },
      {
        name: 'JavaScript (ES6+)',
        domain: 'Universal Web & Node Runtime',
        experienceContext: 'AI Startup Frontend, Sopra HR GP4YOU, Full-Stack Web Apps',
        yearsOrProjects: '3+ Years',
      },
      {
        name: 'Python',
        domain: 'AI/ML Pipelines & Backend Services',
        experienceContext: 'Confidential AI Audio/Video Platform (~70% faster media processing)',
        yearsOrProjects: 'Production AI',
      },
      {
        name: 'Dart',
        domain: 'Cross-Platform Native Mobile',
        experienceContext: 'E-pirana Service Marketplace & Money Tracker iOS/Android Apps',
        yearsOrProjects: '2 Mobile Apps',
      },
      {
        name: 'Java',
        domain: 'Enterprise Backend & APIs',
        experienceContext: 'E-pirana Spring Boot Backend & Sopra HR Java API Integrations',
        yearsOrProjects: 'Enterprise',
      },
      {
        name: 'PHP',
        domain: 'Server-Side Web Scripting',
        experienceContext: 'Relational Web Backends & Dynamic Content Systems',
        yearsOrProjects: 'Core Fluency',
      },
    ],
  },
  {
    id: 'frontend',
    japaneseTitle: '間合い · Ma-ai Interface Craft',
    englishTitle: 'Frontend Frameworks',
    philosophy: 'Controlling spatial distance and visual timing so complex data feels effortless to the human eye.',
    category: 'frontend',
    items: [
      {
        name: 'React.js',
        domain: 'Real-Time AI & Enterprise UI',
        experienceContext: 'Sub-2s latency AI Media Studio & Sopra HR GP4YOU Deutschland module',
        yearsOrProjects: 'Primary Specialty',
      },
      {
        name: 'Angular (v10+)',
        domain: 'Structured Enterprise & E-Commerce Portals',
        experienceContext: 'Wi-Mobi Saudi Storefront, E-pirana Admin Dashboard, RPC Bramlage RFQ Suite',
        yearsOrProjects: '3 Production Systems',
      },
    ],
  },
  {
    id: 'backend',
    japaneseTitle: '中心 · Chushin Core Spine',
    englishTitle: 'Backend & API Architecture',
    philosophy: 'An unshakeable center of gravity handling authentication, machine learning orchestration, and WebSockets.',
    category: 'backend',
    items: [
      {
        name: 'Node.js & Express.js',
        domain: 'Event-Driven REST Microservices',
        experienceContext: 'High-throughput REST APIs, JWT RBAC middleware, and commercial backends',
        yearsOrProjects: 'Primary Specialty',
      },
      {
        name: 'Spring Boot',
        domain: 'Enterprise Java REST & WebSocket Server',
        experienceContext: 'E-pirana real-time chat server, photo sharing, and marketplace API',
        yearsOrProjects: 'Production',
      },
      {
        name: 'Python AI/ML & REST APIs',
        domain: 'Multimedia ML Inference & Orchestration',
        experienceContext: 'Automated audio/video processing backend cutting manual workload by ~70%',
        yearsOrProjects: '10-Mo Solo Build',
      },
    ],
  },
  {
    id: 'mobile',
    japaneseTitle: '流れ · Nagare Mobile Flow',
    englishTitle: 'Mobile Engineering',
    philosophy: 'Single-codebase fluidity across iOS and Android with real-time messaging and offline persistence.',
    category: 'mobile',
    items: [
      {
        name: 'Flutter (iOS & Android)',
        domain: 'Cross-Platform Mobile Applications',
        experienceContext: 'E-pirana Service Provider App (chat, photos, reviews) & Money Tracker',
        yearsOrProjects: '2 Full Releases',
      },
      {
        name: 'Provider & Mobile-Adaptive UI',
        domain: 'Reactive State & Responsive Viewports',
        experienceContext: 'Deterministic state flows and adaptive layouts across phones and tablets',
        yearsOrProjects: 'Production',
      },
    ],
  },
  {
    id: 'data-devops',
    japaneseTitle: '道場 · Dojo Infrastructure & SGBD',
    englishTitle: 'Databases, Cloud & Methodology',
    philosophy: 'Disciplined data modeling, containerization, Oracle Cloud foundations, and Agile Scrum execution.',
    category: 'data-devops',
    items: [
      {
        name: 'PostgreSQL & MySQL',
        domain: 'Relational Database Modeling (SGBD)',
        experienceContext: 'Transactional schemas for marketplace listings, reviews, and enterprise records',
        yearsOrProjects: 'Production SQL',
      },
      {
        name: 'MongoDB & Realm',
        domain: 'Document & Mobile Object Persistence',
        experienceContext: 'RFQ commercial studies in MongoDB and offline mobile ledgers in Realm',
        yearsOrProjects: 'NoSQL & Edge',
      },
      {
        name: 'Docker & Git / GitHub / GitLab',
        domain: 'Containerization & Version Control',
        experienceContext: 'Reproducible container deployments, Innersource, and team GitLab pipelines',
        yearsOrProjects: 'Daily Workflow',
      },
      {
        name: 'Agile Scrum & Oracle Cloud (OCI)',
        domain: 'Delivery Methodology & Cloud AI Certified',
        experienceContext: '2x Oracle Cloud 2025 Certified (AI Foundations & Cloud Foundations Associate)',
        yearsOrProjects: '2025 Certified',
      },
    ],
  },
];

export const AIKIDO_KATA_SCENARIOS: AikidoKataScenario[] = [
  {
    id: 'kata-ai-media',
    name: 'Kata I: High-Volume Audio & Video AI Stream',
    japaneseName: '一教 · Ikkyo — Directing Heavy Media Force',
    incomingForce: 'Unstructured raw audio & video uploads requiring intensive ML inference without freezing the browser.',
    redirectionPrinciple:
      'Decouple heavy ML compute into an asynchronous Python pipeline while streaming lightweight state updates to React in under 2 seconds.',
    latencyTarget: '< 2.0s UI Response',
    efficiencyGain: '~70% Manual Time Saved',
    nodes: [
      {
        stage: '01. Attack Vector (Input)',
        tech: 'Raw Audio / Video Streams',
        role: 'Multi-megabyte media payloads initiated by end users',
        detail: 'Chunked upload validation and immediate optimistic UI feedback.',
      },
      {
        stage: '02. Ma-ai Reception (Frontend)',
        tech: 'React.js + TypeScript',
        role: 'Reactive control surface with <2s interaction latency',
        detail: 'Non-blocking progress telemetry and interactive timeline scrubbing.',
      },
      {
        stage: '03. Tenkan Pivot (Backend)',
        tech: 'Python + REST API',
        role: 'Asynchronous orchestration & preprocessing pipeline',
        detail: 'Normalizes media encodings and dispatches tasks to AI/ML engines.',
      },
      {
        stage: '04. Kime Resolution (Output)',
        tech: 'AI / ML APIs + Docker',
        role: 'Automated extraction, synthesis & production delivery',
        detail: 'Reduces manual human post-processing workload by ~70%.',
      },
    ],
  },
  {
    id: 'kata-realtime-marketplace',
    name: 'Kata II: Real-Time Mobile & Web Service Synchronization',
    japaneseName: '入身 · Irimi — Entering Dual-Platform Concurrency',
    incomingForce: 'Simultaneous chat messages, photo uploads, and booking reviews across iOS, Android, and Web Admin.',
    redirectionPrinciple:
      'Channel bidirectional events through a Spring Boot WebSocket hub backed by ACID-compliant PostgreSQL transactions.',
    latencyTarget: 'Real-Time WebSocket',
    efficiencyGain: '3 Synchronized Surfaces',
    nodes: [
      {
        stage: '01. Attack Vector (Input)',
        tech: 'Client & Provider Events',
        role: 'Live chat messages, photo shares & service reviews',
        detail: 'Concurrent mobile and desktop traffic across local service categories.',
      },
      {
        stage: '02. Ma-ai Reception (Mobile & Web)',
        tech: 'Flutter (iOS/Android) + Angular',
        role: 'Unified client mobile app & administrative command center',
        detail: 'Native 60fps mobile views paired with structured Angular moderation tables.',
      },
      {
        stage: '03. Tenkan Pivot (Backend)',
        tech: 'Spring Boot + WebSocket + REST',
        role: 'Event broker and transactional business logic layer',
        detail: 'Routes instant chat frames while enforcing category and user rules.',
      },
      {
        stage: '04. Kime Resolution (Persistence)',
        tech: 'PostgreSQL Database',
        role: 'Relational integrity for users, listings, and review ledgers',
        detail: 'Zero message loss and consistent cross-platform state.',
      },
    ],
  },
  {
    id: 'kata-rbac-ecommerce',
    name: 'Kata III: Multi-Role Saudi E-Commerce Security Flow',
    japaneseName: '回転 · Kaiten — Rotational Role Guarding',
    incomingForce: 'Mixed guest, customer, and administrator traffic across desktop and mobile browsers in Saudi Arabia.',
    redirectionPrinciple:
      'Intercept every route transition with cryptographic JWT verification and adaptive Angular 10 viewport components.',
    latencyTarget: '3 Secured Role Tiers',
    efficiencyGain: '3 Functional Modules',
    nodes: [
      {
        stage: '01. Attack Vector (Input)',
        tech: 'Web & Mobile Shoppers',
        role: 'Guest browsing, customer checkouts & admin catalog updates',
        detail: 'Cross-device traffic spanning Android, iOS, and desktop browsers.',
      },
      {
        stage: '02. Ma-ai Reception (Storefront)',
        tech: 'Angular 10 + TypeScript',
        role: 'Mobile-adaptive component hierarchy',
        detail: 'Tuned rendering performance for diverse screen densities.',
      },
      {
        stage: '03. Tenkan Pivot (Security)',
        tech: 'JWT Auth + RBAC Guards',
        role: 'Cryptographic route protection for Guest, Customer & Admin',
        detail: 'Strict separation of privileges before API payload execution.',
      },
      {
        stage: '04. Kime Resolution (Commerce)',
        tech: '3 REST API Modules',
        role: 'Product Catalog · User Accounts · Order Management',
        detail: 'Cohesive end-to-end commercial lifecycle delivered with GitLab CI.',
      },
    ],
  },
];
