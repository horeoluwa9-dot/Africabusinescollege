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
    title: 'The AfCFTA Playbook: Navigating Cross-Border Liquidity in 2025.',
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
    title: '2024 Africa Economic Outlook Report',
    subtitle: '2024 Outlook',
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
    id: '1',
    title: 'Venture Building',
    category: 'Entrepreneurship',
    tag: 'ADMISSIONS',
    excerpt: 'From ideation to Series A. Learn the mechanics of building scalable businesses in the African landscape.',
    duration: '8 Months',
    format: 'Full-time',
    level: 'Intermediate',
    focus: 'Scaling & VC'
  },
  {
    id: '2',
    title: 'Innovation Leadership',
    category: 'Leadership',
    tag: 'FEATURED',
    excerpt: 'Master the art of leading high-performance teams in the digital age. A 12-month intensive journey.',
    duration: '12 Months',
    format: 'Hybrid / Global',
    level: 'Executive',
    focus: 'Ops & Culture'
  },
  {
    id: '3',
    title: 'Digital Business',
    category: 'Entrepreneurship',
    tag: 'EXEC-CERT',
    excerpt: 'Scaling digital products and platforms in emerging markets. Focus on product-led growth.',
    duration: '6 Months',
    format: 'Full-time',
    level: 'Intermediate',
    focus: 'Product Management'
  },
  {
    id: '4',
    title: 'Investment & Finance',
    category: 'Finance',
    tag: 'EXEC-CERT',
    excerpt: 'Equipping financial architects with global market instruments and fintech integration strategies.',
    duration: '6 Months',
    format: 'Part-time',
    level: 'Advanced',
    focus: 'Capital Markets'
  },
  {
    id: '5',
    title: 'Technology for Business',
    category: 'Tech',
    tag: 'EXEC-CERT',
    excerpt: 'Bridging the gap between engineering and the C-suite. Learn to lead tech transformations.',
    duration: '4 Months',
    format: 'Online',
    level: 'Intermediate',
    focus: 'Digital Strategy'
  },
  {
    id: '6',
    title: 'African Market Strategy',
    category: 'Strategy',
    tag: 'EXEC-CERT',
    excerpt: 'Deep dive into trade dynamics, cross-border operations, and local consumer behavior.',
    duration: '5 Months',
    format: 'Hybrid',
    level: 'Advanced',
    focus: 'Market Entry'
  }
];

export const LABS: Lab[] = [
  {
    id: '1',
    title: 'The War Room',
    description: 'High-pressure crisis management simulations involving supply chain disruptions and political shifts.',
    type: 'large'
  },
  {
    id: '2',
    title: 'Market Pulse Lab',
    description: 'Stock exchange and commodity trading floor replica.',
    type: 'small'
  },
  {
    id: '3',
    title: 'Logistics Hub',
    description: 'Simulating cross-border trade and AfCFTA dynamics.',
    type: 'small'
  },
  {
    id: '4',
    title: 'Cyber Lab',
    description: 'Navigating modern corporate digital threats.',
    type: 'small'
  }
];

export const STUDIO_TOOLS: StudioTool[] = [
  {
    id: '1',
    title: 'Sovereign AI',
    description: 'Proprietary large language models trained on African corporate law and economic history.'
  },
  {
    id: '2',
    title: 'Risk Modeler',
    description: 'Visualizing currency volatility and geopolitical risk across 54 sovereign states.'
  },
  {
    id: '3',
    title: 'Impact Tracker',
    description: 'Measuring ESG metrics against UN Agenda 2063 benchmarks.'
  },
  {
    id: '4',
    title: 'Deal Architect',
    description: 'Interactive structuring for M&A and venture capital equity flows.'
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
  { id: '1', date: 'MAR 15, 2024', title: 'Innovation Leadership (Summer Intake)' },
  { id: '2', date: 'APR 02, 2024', title: 'Venture Building Cohort B' }
];

export const FAQS: FAQ[] = [
  { id: '1', question: 'Can I work while studying?', answer: 'Yes, our hybrid and part-time programs are designed for working professionals.' },
  { id: '2', question: 'Where are the residency weeks held?', answer: 'Residency weeks are held at our main campus and regional hubs across the continent.' },
  { id: '3', question: 'Is there an application fee?', answer: 'There is a standard application fee of $100, which is waived for scholarship applicants.' }
];

export const FACULTY: Faculty[] = [
  { id: '1', name: 'Dr. Amadi Chenzira', role: 'Chancellor & Lead Economist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=50' },
  { id: '2', name: 'Sarah Mensah, MBA', role: 'Dean of Operations', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=50' },
  { id: '3', name: 'Kofi Adebayo', role: 'Director of Digital Infra', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=50' },
  { id: '4', name: 'Elena Diop', role: 'Chair, Venture Lab', image: 'https://images.unsplash.com/photo-1567532939847-8a5556c1fe3c?auto=format&fit=crop&w=400&q=50' }
];
