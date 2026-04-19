import { 
  Zap, 
  TrendingUp, 
  AlertCircle, 
  DollarSign, 
  Users, 
  Target, 
  Globe, 
  Shield, 
  Landmark,
  Scale
} from 'lucide-react';
import { SimulationConfig } from '../types/simulation';

export const SIMULATIONS: Record<string, SimulationConfig> = {
  entrepreneurship: {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    subtitle: 'Simulation Lab.',
    description: 'Step into the cockpit of a continental startup. This high-fidelity simulation tests your strategic intuition against real African market variables.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Revenue', key: 'revenue', icon: DollarSign, initial: 0 },
      { label: 'Growth', key: 'growth', icon: TrendingUp, initial: 10 },
      { label: 'Satisfaction', key: 'satisfaction', icon: Users, initial: 80 },
      { label: 'Cash Flow', key: 'cash', icon: Zap, initial: 100 },
    ],
    environments: [
      {
        id: 'startup-launch',
        name: 'Startup Launch',
        icon: Zap,
        desc: 'Build and launch a business from scratch.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
        focus: ['Idea validation', 'Pricing', 'Customer acquisition'],
        difficulty: 'Beginner → Intermediate',
        status: 'Active',
        scenarios: [
          {
            id: 1,
            title: "Idea Selection",
            context: "You are identifying your first venture in Lagos. The market is ripe but fragmented.",
            challenge: "Choose a product with the best market-founder fit.",
            marketConditions: "High mobile penetration, patchy logistics.",
            constraints: "$20,000 initial bootstrap capital.",
            options: [
              {
                id: '1a',
                text: "Last-Mile Delivery for SME",
                explanation: "Focus on B2B logistics for local merchants.",
                risk: 'medium',
                impact: {
                  metrics: { revenue: +5, growth: +10, satisfaction: +5, cash: -20 },
                  feedback: "Solid choice. Merchants are desperate for reliable delivery.",
                  nextScenarioId: 2
                }
              },
              {
                id: '1b',
                text: "EdTech for Tech Skills",
                explanation: "Online coding bootcamp for high-school grads.",
                risk: 'low',
                impact: {
                  metrics: { revenue: +2, growth: +5, satisfaction: +15, cash: -10 },
                  feedback: "Vibrant community interest, but monetization might be slower.",
                  nextScenarioId: 2
                }
              }
            ]
          },
          {
            id: 2,
            title: "Target Market",
            context: "You need to narrow down your initial user base to focus your limited marketing budget.",
            challenge: "Identify the high-value early adopters.",
            options: [
              {
                id: '2a',
                text: "Urban Professionals",
                explanation: "High willingness to pay, but expensive to acquire.",
                risk: 'medium',
                impact: {
                  metrics: { revenue: +15, growth: +5, satisfaction: +10, cash: -30 },
                  feedback: "Great margins, but burn rate is increasing due to CAC.",
                  nextScenarioId: 3
                }
              },
              {
                id: '2b',
                text: "Small Retail Shop Owners",
                explanation: "Massive volume, lower margins, higher retention.",
                risk: 'low',
                impact: {
                  metrics: { revenue: +10, growth: +20, satisfaction: +5, cash: -15 },
                  feedback: "Growth is viral as shop owners refer each other.",
                  nextScenarioId: 3
                }
              }
            ]
          },
          {
            id: 3,
            title: "Pricing Strategy",
            context: "Competitors are noticing you. You need to cement your position with a pricing model.",
            challenge: "Balance growth with sustainability.",
            options: [
              {
                id: '3a',
                text: "Penetration Pricing (Low)",
                explanation: "Lower your price to gain users rapidly.",
                risk: 'high',
                impact: {
                  metrics: { revenue: -5, growth: +30, satisfaction: +20, cash: -40 },
                  feedback: "User growth exploded, but you are burning cash fast. This will lead to cash flow pressure.",
                  nextScenarioId: 5 // Branching to cash flow challenge
                }
              },
              {
                id: '3b',
                text: "Premium Value-Based",
                explanation: "Charge more for superior service/quality.",
                risk: 'medium',
                impact: {
                  metrics: { revenue: +25, growth: +5, satisfaction: +10, cash: +10 },
                  feedback: "Slower growth, but the business is now self-sustaining.",
                  nextScenarioId: 4 // Branching to GTM
                }
              }
            ]
          },
          {
            id: 4,
            title: "Go-To-Market",
            context: "It's time for the official launch across three major districts.",
            challenge: "Secure your first 1,000 customers.",
            options: [
              {
                id: '4a',
                text: "Influencer Marketing Campaign",
                impact: {
                  metrics: { growth: +25, cash: -30, satisfaction: +10 },
                  feedback: "Huge buzz, but traffic quality is mixed.",
                  nextScenarioId: 6
                }
              },
              {
                id: '4b',
                text: "Direct Sales & Partnerships",
                impact: {
                  metrics: { growth: +10, cash: -10, satisfaction: +20 },
                  feedback: "Slower, but these customers are highly loyal.",
                  nextScenarioId: 6
                }
              }
            ]
          },
          {
            id: 5,
            title: "Cash Flow Crisis (Low Price Impact)",
            context: "Your aggressive pricing has left your bank account near zero. You need an emergency fix.",
            challenge: "Survive long enough to raise capital.",
            options: [
              {
                id: '5a',
                text: "Cut Marketing & Operational Spend",
                impact: {
                  metrics: { growth: -20, cash: +30, satisfaction: -10 },
                  feedback: "You survived, but at the cost of your momentum.",
                  nextScenarioId: 6
                }
              },
              {
                id: '5b',
                text: "Implement Immediate Pricing Fees",
                impact: {
                  metrics: { revenue: +15, cash: +20, satisfaction: -30 },
                  feedback: "Users are angry, but the cash is keeping the lights on.",
                  nextScenarioId: 6
                }
              }
            ]
          },
          {
            id: 6,
            title: "Early Scaling Decision",
            context: "You've hit your first milestones. Institutional investors are watching.",
            challenge: "Choose the path for Series A readiness.",
            options: [
              {
                id: '6a',
                text: "Aggressive Tech Automated Ops",
                impact: {
                  metrics: { growth: +30, cash: -50, efficiency: +20 },
                  feedback: "Systems are ready for 10x growth, but the runway is very short.",
                  nextScenarioId: 100 // End signal for environment
                }
              },
              {
                id: '6b',
                text: "Hire Specialized Sales Lead",
                impact: {
                  metrics: { revenue: +40, growth: +15, cash: -20 },
                  feedback: "Revenue is booming, but your operations are starting to creak under the load.",
                  nextScenarioId: 100
                }
              }
            ]
          }
        ]
      },
      {
        id: 'growth-scaling',
        name: 'Growth & Scaling',
        icon: TrendingUp,
        desc: 'Scale an existing business and manage growth challenges.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        focus: ['Marketing strategy', 'Operations', 'Expansion'],
        difficulty: 'Intermediate',
        status: 'Locked',
        scenarios: [
          {
            id: 1,
            title: "Marketing Expansion",
            context: "You have dominated your initial niche. Now you must scale across the region.",
            options: [
              {
                id: '1a',
                text: "Multi-Channel Digital Blitz",
                impact: { metrics: { growth: +25, cash: -40 }, feedback: "Visibility is at peak.", nextScenarioId: 2 }
              },
              {
                id: '1b',
                text: "Community-Led Growth",
                impact: { metrics: { growth: +10, satisfaction: +30 }, feedback: "Strong loyalty but slower top-line.", nextScenarioId: 2 }
              }
            ]
          }
        ]
      },
      {
        id: 'crisis-management',
        name: 'Crisis Management',
        icon: AlertCircle,
        desc: 'Recover a struggling business and make critical decisions.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        focus: ['Cash flow', 'Customer churn', 'Strategic pivots'],
        difficulty: 'Advanced',
        status: 'Locked',
        scenarios: [
          {
            id: 1,
            title: "Revenue Drop",
            context: "A sudden regulatory change has halved your transaction volume overnight.",
            options: [
              {
                id: '1a',
                text: "Immediate Operational Rightsizing",
                impact: { metrics: { cash: +30, morale: -40 }, feedback: "Hard decisions saved the treasury.", nextScenarioId: 2 }
              },
              {
                id: '1b',
                text: "Leverage Debt and Push Product Pivot",
                impact: { metrics: { risk: +40, cash: +20 }, feedback: "High stakes gamble.", nextScenarioId: 2 }
              }
            ]
          }
        ]
      }
    ]
  },
  fundraising: {
    id: 'fundraising',
    title: 'Startup Fundraising',
    subtitle: 'Negotiation Suite.',
    description: 'Master the art of the deal. Navigate term sheets, valuation debates, and investor psychology in high-stakes funding rounds.',
    heroImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Valuation', key: 'valuation', icon: TrendingUp, initial: 40 },
      { label: 'Capital', key: 'capital', icon: DollarSign, initial: 20 },
      { label: 'Dilution', key: 'dilution', icon: Target, initial: 0 },
      { label: 'Relationship', key: 'relationship', icon: Users, initial: 60 },
    ],
    environments: [
      { id: 'seed', name: 'Seed Round', icon: Zap, desc: 'Equity negotiation with angels.', focus: ['Valuation', 'Equity'], difficulty: 'Intermediate', status: 'Active', scenarios: [] },
      { id: 'series-a', name: 'Series A', icon: TrendingUp, desc: 'Institutional VC dynamics.', focus: ['Due Diligence', 'Governance'], difficulty: 'Advanced', status: 'Locked', scenarios: [] },
    ]
  },
  expansion: {
    id: 'expansion',
    title: 'Market Expansion',
    subtitle: 'Continental Scale.',
    description: 'Strategy across borders. Navigate the complexities of Pan-African trade, specific regional regulations, and localization.',
    heroImage: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Share', key: 'share', icon: Globe, initial: 10 },
      { label: 'Compliance', key: 'compliance', icon: Shield, initial: 80 },
      { label: 'Adaptation', key: 'adaptation', icon: Zap, initial: 40 },
      { label: 'Speed', key: 'speed', icon: Target, initial: 50 },
    ],
    environments: [
      { id: 'regional', name: 'Region Entry', icon: Globe, desc: 'Selecting the primary node.', focus: ['Market Fit', 'Ops'], difficulty: 'Intermediate', status: 'Active', scenarios: [] },
    ]
  },
  leadership: {
    id: 'leadership',
    title: 'Leadership Decision',
    subtitle: 'Organizational Core.',
    description: 'People, culture, and power. Lead under pressure, manage boardroom dynamics, and build institutional moats through talent.',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Morale', key: 'morale', icon: Users, initial: 80 },
      { label: 'Efficiency', key: 'efficiency', icon: Zap, initial: 70 },
      { label: 'Moat', key: 'moat', icon: Shield, initial: 50 },
      { label: 'Vision', key: 'vision', icon: Target, initial: 90 },
    ],
    environments: [
      { id: 'crisis', name: 'Crisis Room', icon: Shield, desc: 'High-stakes reputation management.', focus: ['PR', 'Ethics'], difficulty: 'Advanced', status: 'Active', scenarios: [] },
    ]
  },
  policy: {
    id: 'policy',
    title: 'Economic Policy',
    subtitle: 'Sovereign Strategy.',
    description: 'Design business-friendly policies and understand impact. Balance fiscal discipline with pro-growth incentives within realistic African economic models.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Reserves', key: 'reserves', icon: DollarSign, initial: 40 },
      { label: 'GDP Growth', key: 'gdp', icon: TrendingUp, initial: 30 },
      { label: 'Inflation', key: 'inflation', icon: AlertCircle, color: 'bg-amber-500', initial: 10 },
      { label: 'Stability', key: 'stability', icon: Scale, initial: 70 },
    ],
    environments: [
      { id: 'central-bank', name: 'Central Bank', icon: DollarSign, desc: 'Monetary policy and reserves.', focus: ['Curreny', 'Inflation'], difficulty: 'Expert', status: 'Active', scenarios: [] },
    ]
  }
};
