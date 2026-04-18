import { Article, DeepDive, Report, Contributor, Program, Lab, StudioTool, Session, ProgramDetail, Deadline, FAQ, Faculty } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Restructuring Urban Legacies: The Rise of Pan-African Smart Cities.',
    category: 'Governance',
    readTime: '8 Min Read',
    excerpt: 'How decentralization and localized energy grids are transforming the blueprint of the African metropolis.',
    author: 'Amara Okafor',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=50'
  },
  {
    id: '2',
    title: 'The AfCFTA Playbook: Navigating Cross-Border Liquidity in 2026.',
    category: 'Markets',
    readTime: '15 Min Read',
    excerpt: 'Analyzing the regulatory shifts enabling seamless capital flow across the continental free trade zone.',
    author: 'Kofi Mensah',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=50'
  },
  {
    id: '3',
    title: 'Sovereign Leadership: Beyond the Quarterly Earnings Cycle.',
    category: 'Strategy',
    readTime: '10 Min Read',
    excerpt: 'Why the most successful African CEOs are prioritizing long-term social utility over short-term dividends.',
    author: 'Fatima Diop',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=50'
  }
];

export const DEEP_DIVES: DeepDive[] = [
  {
    id: '1',
    title: 'Mining the Future: Strategic Minerals and African Agency.',
    partInfo: 'Part 1 of 5 • Mining',
    excerpt: 'An exhaustive investigation into the global race for lithium and cobalt, and the policy frameworks ensuring local value retention.'
  },
  {
    id: '2',
    title: "Agritech Revolution: Securing the Continent's Food Supply.",
    partInfo: 'Part 3 of 4 • Agritech',
    excerpt: 'Examining the intersection of satellite imaging, micro-finance, and small-scale farming in East Africa.'
  },
  {
    id: '3',
    title: 'Venture Capital Maturity: From Hype to High-Yield.',
    partInfo: 'Part 2 of 6 • Capital',
    excerpt: 'A data-driven look at exit strategies and IPO readiness for African unicorns in the next 36 months.'
  }
];

export const REPORTS: Report[] = [
  {
    id: '1',
    title: '2026 Africa Economic Outlook Report',
    subtitle: '2026 Outlook',
    excerpt: 'Comprehensive analysis of macroeconomic trends across 54 nations, focusing on debt sustainability and industrial growth.',
    downloadSize: '4.2 MB'
  },
  {
    id: '2',
    title: 'The Digital Logistics Whitepaper',
    subtitle: 'Special Issue',
    excerpt: 'Mapping the technological infrastructure required to fulfill the promise of the continental free trade area.',
    downloadSize: '2.8 MB'
  }
];

export const CONTRIBUTORS: Contributor[] = [
  {
    id: '1',
    name: 'Dr. Olowu Ade',
    role: 'Policy Lead',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=50'
  },
  {
    id: '2',
    name: 'Zara Ibrahim',
    role: 'Market Analyst',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=50'
  },
  {
    id: '3',
    name: 'Joel Tsegaye',
    role: 'Senior Fellow',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=50'
  },
  {
    id: '4',
    name: 'Nia Mbeki',
    role: 'Venture Partner',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=50'
  }
];

export const PROGRAMS: ProgramDetail[] = [
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    subtitle: 'Build, launch, and scale ventures in African markets.',
    category: 'Entrepreneurship',
    tag: 'ADMISSIONS',
    excerpt: 'Learn how to identify opportunities, validate ideas, build scalable business models, and execute with confidence.',
    duration: '8–12 Weeks',
    format: 'Cohort-Based | Online',
    level: 'Beginner to Intermediate',
    focus: 'Startups',
    badge: 'Includes Simulations & Capstone Project',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    overview: {
      content: 'This program is designed to help you move from idea to execution. You will learn how to identify real opportunities, validate your business ideas, and build ventures that can scale in African markets.',
      bullets: [
        'Opportunity identification',
        'Market validation',
        'Business model design',
        'Go-to-market strategy',
        'Venture execution'
      ]
    },
    gains: [
      'A validated business idea',
      'A complete business model',
      'Market entry strategy',
      'Financial understanding of your venture',
      'Execution roadmap'
    ],
    structure: [
      { title: 'Opportunity Identification', duration: '2 Weeks', description: 'Learn how to identify real, high-potential business opportunities in African markets.' },
      { title: 'Business Model Design', duration: '2 Weeks', description: 'Design scalable and profitable business models.' },
      { title: 'Market Validation', duration: '2 Weeks', description: 'Test and validate your idea before committing resources.' },
      { title: 'Go-To-Market Strategy', duration: '2 Weeks', description: 'Plan how to launch and acquire your first customers.' },
      { title: 'Venture Finance Fundamentals', duration: '1 Week', description: 'Understand revenue, costs, and financial sustainability.' },
      { title: 'Execution & Scaling', duration: '2 Weeks', description: 'Learn how to operate and grow your venture.' }
    ],
    learningExperience: [
      'Live sessions with instructors',
      'Recorded lessons for flexibility',
      'Assignments and practical tasks',
      'Case studies from African markets',
      'Peer learning and cohort discussions'
    ],
    simulationExperience: {
      content: 'You will participate in interactive simulations where you make real business decisions in controlled environments.',
      examples: [
        'Startup launch simulation',
        'Market expansion simulation',
        'Pricing and growth simulation'
      ]
    },
    tools: [
      'Business model canvas',
      'Financial modeling tools',
      'Market research frameworks',
      'Strategy planning tools'
    ],
    whoItIsFor: [
      'Aspiring entrepreneurs',
      'Early-stage founders',
      'Professionals exploring business ideas',
      'Individuals looking to build scalable ventures'
    ],
    outcomes: [
      'Ability to identify viable business opportunities',
      'Confidence to launch a venture',
      'Structured approach to execution',
      'Real project or business output'
    ]
  },
  {
    id: 'venture-building',
    title: 'Venture Building',
    subtitle: 'From ideation to Series A: The blueprint for continental startups.',
    category: 'Entrepreneurship',
    tag: 'FEATURED',
    excerpt: 'An advanced program focused on deliberate venture creation and rapid scaling strategies for experienced founders.',
    duration: '12 Weeks',
    format: 'Hybrid | On-Campus + Virtual',
    level: 'Advanced / Founders',
    focus: 'Capital & Growth',
    badge: 'Includes Investor Demo Day',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    overview: {
      content: 'This program is explicitly designed for founders who have a validated prototype and are looking to build the operational and financial architecture required for scale.',
      bullets: [
        'Venture Architecture',
        'Capital Raising (Pre-Seed to Series A)',
        'Growth Operations',
        'Board Governance'
      ]
    },
    gains: [
      'A fully developed investment data room',
      'Proprietary growth hacking framework',
      'Network of active African VCs',
      'Pitch deck and financial model audit'
    ],
    structure: [
      {
        title: 'Module 1: Venture Architecture',
        description: 'Building the legal and structural foundation for cross-border operations.',
        duration: '2 Weeks'
      },
      {
        title: 'Module 2: The Funding Mechanic',
        description: 'Advanced cap table management, term sheets, and investor psychology.',
        duration: '3 Weeks'
      },
      {
        title: 'Module 3: Scalable Operations',
        description: 'Architecting teams and systems for rapid expansion across regions.',
        duration: '4 Weeks'
      },
      {
        title: 'Module 4: Growth Engines',
        description: 'Paid, organic, and viral growth strategies for diverse African markets.',
        duration: '3 Weeks'
      }
    ],
    learningExperience: [
      '1:1 Investor Mentorship',
      'Weekly Pitch Drills',
      'Founder Roundtables',
      'Technical Audit Sessions'
    ],
    simulationExperience: {
      content: 'Simulate a Series A negotiation with active investors using real-world term sheets.',
      examples: ['Series A Simulation', 'Crisis Response Drill', 'M&A Scenario']
    },
    tools: ['Captable.io', 'HubSpot', 'Linear', 'Bench'],
    whoItIsFor: [
      'Validated tech founders',
      'Venture studio partners',
      'Serial entrepreneurs'
    ],
    outcomes: [
      'Capital readiness certification',
      'Access to ABC Investor Network',
      'Operational roadmap for scale'
    ]
  },
  {
    id: 'digital-business',
    title: 'Digital Business',
    subtitle: 'Scaling platforms in the world\'s fastest-growing digital economy.',
    category: 'Tech',
    tag: 'EXEC-CERT',
    excerpt: 'Master the mechanics of platform business models and digital marketplaces in emerging markets.',
    duration: '8 Weeks',
    format: '100% Online | Cohort-Based',
    level: 'Intermediate',
    focus: 'Technology & Platforms',
    badge: 'Platform Engineering Focus',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    overview: {
      content: 'Digital transformation in Africa requires more than just code. It requires an understanding of infrastructure gaps and how to build platforms that solve them.',
      bullets: [
        'Platform Business Models',
        'Digital Payments & FinTech',
        'Last-Mile Logistics Hubs',
        'User Trust & Security'
      ]
    },
    gains: [
      'Digital product roadmap',
      'Platform monetization strategy',
      'FinTech integration blueprint',
      'UX/UI audit for local markets'
    ],
    structure: [
      {
        title: 'Module 1: Platform Mechanics',
        description: 'Understanding two-sided markets and network effects in Africa.',
        duration: '2 Weeks'
      },
      {
        title: 'Module 2: FinTech & Payments',
        description: 'Integrating mobile money and cross-border payment stacks.',
        duration: '2 Weeks'
      },
      {
        title: 'Module 3: Trust & Logistics',
        description: 'Solving the trust gap and physical fulfillment challenges.',
        duration: '2 Weeks'
      },
      {
        title: 'Module 4: Platform Scale',
        description: 'Moving from local marketplace to regional digital ecosystem.',
        duration: '2 Weeks'
      }
    ],
    learningExperience: [
      'Live Case Studies',
      'Product Build Labs',
      'Tech Partner Sessions',
      'User Research Clinics'
    ],
    simulationExperience: {
      content: 'Design and launch a prototype marketplace and manage supply-demand shocks.',
      examples: ['Marketplace Launch', 'Payment Failure Drill', 'User Growth Sprint']
    },
    tools: ['Firebase', 'Stripe/Paystack API', 'Figma', 'Amplitude'],
    whoItIsFor: [
      'Product managers',
      'Tech founders',
      'Digital transformation leads'
    ],
    outcomes: [
      'Platform strategy portfolio',
      'Digital ecosystem certification',
      'Network of African tech leaders'
    ]
  },
  {
    id: 'innovation-leadership',
    title: 'Innovation Leadership',
    subtitle: 'Leading high-performance teams through digital transformation.',
    category: 'Leadership',
    tag: 'EXEC-CERT',
    excerpt: 'A leadership program for executives navigating the intersection of technology, culture, and strategy.',
    duration: '10 Weeks',
    format: 'Hybrid | On-Campus + Virtual',
    level: 'Executive',
    focus: 'Strategy & Culture',
    badge: 'Includes Residential Week',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    overview: {
      content: 'This program helps established leaders drive change from within, fostering a culture of innovation that can survive corporate inertia.',
      bullets: [
        'Change Management',
        'Digital Strategy',
        'Corporate Venture Teams',
        'Adaptive Performance'
      ]
    },
    gains: [
      'Organizational transformation plan',
      'Innovation framework toolkit',
      'Executive leadership portfolio',
      'High-performance team blueprint'
    ],
    structure: [
      {
        title: 'Module 1: The Modern Leader',
        description: 'Developing the mindset for digital-first leadership.',
        duration: '2 Weeks'
      },
      {
        title: 'Module 2: Fostering Innovation',
        description: 'Building and managing internal venture teams.',
        duration: '3 Weeks'
      },
      {
        title: 'Module 3: Strategy & Tech',
        description: 'Aligning business strategy with emerging technology trends.',
        duration: '3 Weeks'
      },
      {
        title: 'Module 4: Change at Scale',
        description: 'Navigating organizational politics to implement digital change.',
        duration: '2 Weeks'
      }
    ],
    learningExperience: [
      'Executive Coaching',
      'Strategic Simulations',
      'Industry Deep Dives',
      'Leadership Retreat'
    ],
    simulationExperience: {
      content: 'Lead a virtual corporate turn-around during a major market disruption.',
      examples: ['Transformation Simulation', 'Crisis Leadership Board', 'Resource Allocation']
    },
    tools: ['Miro', 'Strategyzer', 'Culture Design Canvas', 'Asana'],
    whoItIsFor: [
      'Senior executives',
      'Country managers',
      'Heads of Strategy'
    ],
    outcomes: [
      'Executive Innovation Certificate',
      'Access to CEO Roundtables',
      'Institutional leadership roadmap'
    ]
  },
  {
    id: 'investment-and-finance',
    title: 'Investment & Finance',
    subtitle: 'Master the mechanics of capital and financial sovereignty.',
    category: 'Finance',
    tag: 'EXEC-CERT',
    excerpt: 'Master capital allocation and financial analysis within the complex African regulatory environment.',
    duration: '8 Months',
    format: 'Online | Part-time',
    level: 'Advanced',
    focus: 'Capital & Finance',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    overview: {
      content: 'High-level financial strategy for those managing capital across borders.',
      bullets: ['Asset Allocation', 'Regulatory Navigation', 'Risk Management']
    },
    gains: ['Investment Thesis', 'Risk Models', 'Capital Network'],
    structure: [{ title: 'Financial Architecture', duration: '4 Weeks', description: 'Building robust financial structures.' }],
    learningExperience: ['Live Market Analysis', 'Guest Lectures'],
    simulationExperience: { content: 'Portfolio management simulations.', examples: ['Asset Allocation'] },
    tools: ['Financial Modeler', 'Valuation Tools'],
    whoItIsFor: ['Investment Analysts', 'CFOs'],
    outcomes: ['Investment Framework']
  },
  {
    id: 'technology-for-business',
    title: 'Technology for Business',
    subtitle: 'Leverage deep tech for unfair competitive advantage.',
    category: 'Tech',
    tag: 'EXEC-CERT',
    excerpt: 'Leverage AI, blockchain, and emerging tech to create a competitive advantage in modern business.',
    duration: '6 Months',
    format: 'Online | Part-time',
    level: 'Advanced',
    focus: 'AI & Tech',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    overview: {
      content: 'Technological mastery for business leaders who want to lead the next curve.',
      bullets: ['AI Strategy', 'Blockchain Utility', 'Future Tech']
    },
    gains: ['Tech Strategy', 'Implementation Plan', 'Expert Network'],
    structure: [{ title: 'Tech Stack Design', duration: '3 Weeks', description: 'Architecting for scalability.' }],
    learningExperience: ['Coding for Leaders', 'Architecture Reviews'],
    simulationExperience: { content: 'Tech implementation marathons.', examples: ['System Design'] },
    tools: ['Tech Audit', 'AI Sandbox'],
    whoItIsFor: ['CTOs', 'Tech-focused Founders'],
    outcomes: ['Technology Strategy']
  },
  {
    id: 'african-market-strategy',
    title: 'African Market Strategy',
    subtitle: 'Navigate the cross-border complexities of African growth.',
    category: 'Strategy',
    tag: 'EXEC-CERT',
    excerpt: 'Design effective market entry and expansion strategies across diverse African economies.',
    duration: '3 Months',
    format: 'Online | Part-time',
    level: 'Beginner',
    focus: 'Strategy',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80',
    overview: {
      content: 'Strategic mastery for the worlds most diverse continent.',
      bullets: ['Market Entry', 'Consumer Insights', 'Trade Corridors']
    },
    gains: ['Expansion Roadmap', 'Market Insights', 'Policy Awareness'],
    structure: [{ title: 'Continental Trade', duration: '2 Weeks', description: 'Understanding AfCFTA and local regulations.' }],
    learningExperience: ['Market Research Missions', 'Expert Panels'],
    simulationExperience: { content: 'Market entry simulations.', examples: ['Expansion Case'] },
    tools: ['Country Risk Matrix', 'Market Sizing Tools'],
    whoItIsFor: ['Expansion Leads', 'Strategy Directors'],
    outcomes: ['Market Entry Strategy']
  }
];

export const LABS: Lab[] = [
  {
    id: '1',
    title: 'Entrepreneurship Simulation',
    description: 'Build and scale a virtual startup from idea to market.',
    type: 'large'
  },
  {
    id: '2',
    title: 'Startup Fundraising Simulation',
    description: 'Practice pitching to VCs with AI-powered feedback.',
    type: 'small'
  },
  {
    id: '3',
    title: 'Market Expansion Simulation',
    description: 'Navigate regulatory and market dynamics across Africa.',
    type: 'small'
  },
  {
    id: '4',
    title: 'Leadership Decision Lab',
    description: 'Navigate complex organizational dynamics under pressure.',
    type: 'small'
  },
  {
    id: '5',
    title: 'Economic Policy Simulation',
    description: 'Design business-friendly policies and understand impact.',
    type: 'small'
  }
];

export const STUDIO_TOOLS: StudioTool[] = [
  {
    id: '1',
    title: 'Financial Modeling',
    description: 'Build complex financial models with African market data.'
  },
  {
    id: '2',
    title: 'Market Analysis',
    description: 'Real-time market intelligence and competitive mapping.'
  },
  {
    id: '3',
    title: 'Investment Evaluation',
    description: 'Assess opportunities with valuation frameworks.'
  },
  {
    id: '4',
    title: 'Startup Valuation',
    description: 'Real-time company valuation with scenario modeling.'
  },
  {
    id: '5',
    title: 'Strategy Frameworks',
    description: 'Structured strategic planning for African contexts.'
  },
  {
    id: '6',
    title: 'Business Planning',
    description: 'End-to-end business plan creation and validation.'
  }
];

export const SESSIONS: Session[] = [
  {
    id: '1',
    date: { day: '14', month: 'NOV' },
    title: 'The Future of Sovereign Wealth Funds',
    description: 'Join Dr. Amara Diop for an in-depth analysis of African national investment strategies.',
    type: 'VIRTUAL EVENT',
    location: 'PAN-AFRICAN ZOOM',
    attendees: '1.2K SILENT'
  },
  {
    id: '2',
    date: { day: '22', month: 'NOV' },
    title: 'Agribusiness Supply Chain Summit',
    description: 'Solving the last-mile delivery challenge for agricultural exports in the region.',
    type: 'ON-CAMPUS CONF',
    location: 'EMBA HALL',
    attendees: '250 SEATS'
  }
];

export const DEADLINES: Deadline[] = [
  { id: '1', date: 'MAR 15, 2026', title: 'Innovation Leadership (Summer Intake)' },
  { id: '2', date: 'APR 02, 2026', title: 'Venture Building Cohort B' }
];

export const FAQS: FAQ[] = [
  { id: '1', question: 'Do I need prior experience?', answer: 'No. Our programs are designed for various levels, from beginners to executives. We look for ambition, curiosity, and commitment.' },
  { id: '2', question: 'Is this fully online?', answer: 'Yes. ABC is a virtual-first institution. All programs are delivered online with live sessions, simulations, and cohort-based learning.' },
  { id: '3', question: 'How long are programs?', answer: 'Programs range from 6 to 12 months, depending on the specific certificate or degree path chosen.' },
  { id: '4', question: 'Can I work while studying?', answer: 'Yes. Our programs are designed for working professionals, with flexible schedules and cohort-based structure.' },
  { id: '5', question: 'What happens after I apply?', answer: 'Your application is reviewed by our Admissions team. Successful candidates are invited for an interview before a final decision is delivered via the portal.' },
  { id: '6', question: 'Is there an application fee?', answer: 'Yes, there is a standard application fee of $100, which supports our rigorous review process.' }
];

export const FACULTY: Faculty[] = [
  { id: '1', name: 'Dr. Amadi Chenzira', role: 'Chancellor & Lead Economist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=50' },
  { id: '2', name: 'Sarah Mensah, MBA', role: 'Academic Director of Operations', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=50' },
  { id: '3', name: 'Kofi Adebayo', role: 'Director of Digital Infra', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=50' },
  { id: '4', name: 'Elena Diop', role: 'Chair, Venture Lab', image: 'https://images.unsplash.com/photo-1567532939847-8a5556c1fe3c?auto=format&fit=crop&w=400&q=50' }
];
