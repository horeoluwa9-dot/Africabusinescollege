import { Article, DeepDive, Report, Contributor } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Restructuring Urban Legacies: The Rise of Pan-African Smart Cities.',
    category: 'Governance',
    readTime: '8 Min Read',
    excerpt: 'How decentralization and localized energy grids are transforming the blueprint of the African metropolis.',
    author: 'Amara Okafor',
    image: 'https://picsum.photos/seed/urban/800/500'
  },
  {
    id: '2',
    title: 'The AfCFTA Playbook: Navigating Cross-Border Liquidity in 2025.',
    category: 'Markets',
    readTime: '15 Min Read',
    excerpt: 'Analyzing the regulatory shifts enabling seamless capital flow across the continental free trade zone.',
    author: 'Kofi Mensah',
    image: 'https://picsum.photos/seed/markets/800/500'
  },
  {
    id: '3',
    title: 'Sovereign Leadership: Beyond the Quarterly Earnings Cycle.',
    category: 'Strategy',
    readTime: '10 Min Read',
    excerpt: 'Why the most successful African CEOs are prioritizing long-term social utility over short-term dividends.',
    author: 'Fatima Diop',
    image: 'https://picsum.photos/seed/strategy/800/500'
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
    image: 'https://picsum.photos/seed/ade/400/400'
  },
  {
    id: '2',
    name: 'Zara Ibrahim',
    role: 'Market Analyst',
    image: 'https://picsum.photos/seed/zara/400/400'
  },
  {
    id: '3',
    name: 'Joel Tsegaye',
    role: 'Senior Fellow',
    image: 'https://picsum.photos/seed/joel/400/400'
  },
  {
    id: '4',
    name: 'Nia Mbeki',
    role: 'Venture Partner',
    image: 'https://picsum.photos/seed/nia/400/400'
  }
];
