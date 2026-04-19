import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Target, 
  ArrowRight, 
  Lock, 
  ChevronRight, 
  Activity, 
  TrendingUp, 
  Users,
  AlertCircle,
  CheckCircle2,
  PieChart,
  BarChart3,
  DollarSign,
  Globe,
  Landmark,
  PlayIcon,
  ShieldCheckIcon
} from 'lucide-react';

interface Scenario {
  id: number;
  title: string;
  context: string;
  options: {
    id: string;
    text: string;
    impact: { metrics: Record<string, number>; feedback: string };
  }[];
}

interface SimulationConfig {
  title: string;
  subtitle: string;
  description: string;
  scenarios: Scenario[];
  environments: { name: string; icon: any; desc: string; status: string }[];
}

const SIMULATIONS: Record<string, SimulationConfig> = {
  'entrepreneurship': {
    title: "Entrepreneurship",
    subtitle: "Simulation Lab.",
    description: "Step into the cockpit of a continental startup. This high-fidelity simulation tests your strategic intuition against real African market variables.",
    environments: [
      { name: 'Startup Mode', icon: Zap, desc: 'Zero to One expansion dynamics.', status: 'Active' },
      { name: 'Growth Core', icon: TrendingUp, desc: 'Unit economics & Series A scaling.', status: 'Locked' },
      { name: 'Crisis Lab', icon: AlertCircle, desc: 'Market crash & currency volatility.', status: 'Locked' },
    ],
    scenarios: [
      {
        id: 1,
        title: "Market Entry Strategy",
        context: "Your startup, EcoPower Africa, has developed a low-cost solar irrigation pump. You have $50,000 in seed capital. Two neighboring markets show promise: Nigeria (high volume, high competition) and Ghana (steady growth, lower entry barriers).",
        options: [
          {
            id: 'nigeria',
            text: "Aggressive Nigeria Entry",
            impact: {
              metrics: { growth: +25, capital: -40, risk: +30 },
              feedback: "Nigeria's scale is unmatched, but the operational complexity consumed 80% of your runway in 3 months. Growth is high, but risk is extreme."
            }
          },
          {
            id: 'ghana',
            text: "Lean Ghana Expansion",
            impact: {
              metrics: { growth: +12, capital: -15, risk: +10 },
              feedback: "Strategic move. The lower cost of acquisition allowed you to preserve capital while proving the unit economics. You are now ready for a Series A pitch."
            }
          }
        ]
      },
      {
        id: 2,
        title: "Co-Founder Conflict",
        context: "Your CTO and co-founder wants to pivot the product to a B2B SaaS model, citing better margins. You believe the original B2C hardware mission remains the core opportunity. Tension is affecting team morale and engineering speed.",
        options: [
          {
            id: 'pivot',
            text: "Pivot to B2B SaaS",
            impact: {
              metrics: { growth: +15, team: -20, capital: +10 },
              feedback: "The pivot improved margins and attracted interest from institutional investors, but your CTO's departure shortly after has left a critical technical gap."
            }
          },
          {
            id: 'hardware',
            text: "Stay true to Hardware",
            impact: {
              metrics: { growth: +8, team: +15, capital: -20 },
              feedback: "Sticking to the mission unified the core team. While growth is slower and R&D costs are higher, your moat as a physical product in the region is strengthening."
            }
          }
        ]
      }
    ]
  },
  'fundraising': {
    title: "Fundraising",
    subtitle: "VC War Room.",
    description: "Master the art of the deal. Navigate the high-stakes world of venture capital in the African ecosystem.",
    environments: [
      { name: 'Seed Pitch', icon: Target, desc: 'Securing initial investor trust.', status: 'Active' },
      { name: 'Due Diligence', icon: Activity, desc: 'Surviving deep audit pressure.', status: 'Locked' },
      { name: 'Term Sheet', icon: Shield, desc: 'Negotiating equity & control.', status: 'Locked' },
    ],
    scenarios: [
      {
        id: 1,
        title: "The Valuation Gap",
        context: "A prominent regional VC offers $1M at a $4M valuation. You were targeting a $6M valuation based on recent growth. You have 2 months of runway left.",
        options: [
          {
            id: 'accept',
            text: "Accept with Dilution",
            impact: {
              metrics: { growth: +10, capital: +80, risk: -20 },
              feedback: "Capital secured. While dilution was higher than expected, the partnership with a top VC has unlocked significant strategic doors."
            }
          },
          {
            id: 'negotiate',
            text: "Counter Offer",
            impact: {
              metrics: { growth: +0, capital: -10, risk: +40 },
              feedback: "The VC walked away. Your runway is now critical, but your equity remains intact as you desperately search for a lead investor."
            }
          }
        ]
      }
    ]
  },
  'market-expansion': {
    title: "Market Expansion",
    subtitle: "Continental Bridge.",
    description: "Scale your operations across 54 nations. Navigate regulatory hurdles, currency risks, and cultural nuances.",
    environments: [
      { name: 'Region Entry', icon: Globe, desc: 'First cross-border deployment.', status: 'Active' },
      { name: 'Supply Chain', icon: Activity, desc: 'Managing pan-African logistics.', status: 'Locked' },
      { name: 'Scale Ops', icon: Zap, desc: 'Centralizing regional HQs.', status: 'Locked' },
    ],
    scenarios: [
      {
        id: 1,
        title: "Currency Volatility",
        context: "The local currency in your new target market just devalued by 30%. Your operational costs are in USD, but your revenue is in local currency.",
        options: [
          {
            id: 'hedge',
            text: "Price Adjustment",
            impact: {
              metrics: { growth: -15, capital: +5, risk: -10 },
              feedback: "Rising prices stabilized your margins but slowed adoption in the price-sensitive local market. Sustainability over speed."
            }
          },
          {
            id: 'absorb',
            text: "Absorb the Loss",
            impact: {
              metrics: { growth: +20, capital: -35, risk: +15 },
              feedback: "Market share exploded as competitors raised prices, but the burn rate is now unsustainable without a rapid capital injection."
            }
          }
        ]
      }
    ]
  },
  'leadership': {
    title: "Leadership",
    subtitle: "Decision Lab.",
    description: "Navigate complex organizational dynamics. Lead through crises and architect high-performance cultures.",
    environments: [
      { name: 'Crisis Comm', icon: Users, desc: 'Leading through internal shifts.', status: 'Active' },
      { name: 'Talent War', icon: Target, desc: 'Hiring & retaining top local talent.', status: 'Locked' },
      { name: 'Scale Culture', icon: Globe, desc: 'Building identity at 500+ staff.', status: 'Locked' },
    ],
    scenarios: [
      {
        id: 1,
        title: "Executive Misalignment",
        context: "Your Head of Operations and Head of Sales are in an open conflict regarding the priority of customer support vs. rapid expansion.",
        options: [
          {
            id: 'mediate',
            text: "Facilitate Mediation",
            impact: {
              metrics: { team: +20, growth: -5, risk: -10 },
              feedback: "Unity restored. The temporary slowdown in expansion was worth the alignment, though some aggressive growth targets were missed."
            }
          },
          {
            id: 'decide',
            text: "Unilateral Decision",
            impact: {
              metrics: { team: -30, growth: +15, risk: +20 },
              feedback: "Growth continued at pace, but the Ops leader has resigned, leaving a massive operational gap during your busiest season yet."
            }
          }
        ]
      }
    ]
  },
  'economic-policy': {
    title: "Economic Policy",
    subtitle: "Policy Architect.",
    description: "Design business-friendly policies and understand impact. Balance social stability with economic growth in a simulated nation.",
    environments: [
      { name: 'Fiscal Design', icon: Landmark, desc: 'Designing SME tax frameworks.', status: 'Active' },
      { name: 'Trade Reform', icon: Globe, desc: 'Implementing AFCFTA protocols.', status: 'Locked' },
      { name: 'Digital Identity', icon: Shield, desc: 'State-wide digital ID rollouts.', status: 'Locked' },
    ],
    scenarios: [
      {
        id: 1,
        title: "SME Tax Incentive",
        context: "To stimulate the startup ecosystem, you are proposing a 5-year tax holiday for tech companies. Local labor unions are concerned about reduced public service funding.",
        options: [
          {
            id: 'full',
            text: "Full Tax Holiday",
            impact: {
              metrics: { growth: +40, capital: -20, risk: +15 },
              feedback: "Investment poured in. 200 new startups launched, but social unrest is growing due to cuts in rural healthcare funding."
            }
          },
          {
            id: 'phased',
            text: "Phased Rebate",
            impact: {
              metrics: { growth: +15, capital: -5, risk: -10 },
              feedback: "Slower but stable growth. Startups are trickling in, and social stability remains high as the budget remains balanced."
            }
          }
        ]
      }
    ]
  }
};

interface SimulationDemoProps {
  simulationId?: string | null;
  onApply: () => void;
  onContinueProgram: () => void;
}

export const SimulationDemo: React.FC<SimulationDemoProps> = ({ simulationId, onApply, onContinueProgram }) => {
  const [phase, setPhase] = useState<'overview' | 'simulation' | 'locked'>('overview');
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [metrics, setMetrics] = useState({ growth: 50, capital: 100, risk: 20, team: 70 });
  const [result, setResult] = useState<{ feedback: string } | null>(null);

  const config = SIMULATIONS[simulationId || 'entrepreneurship'] || SIMULATIONS['entrepreneurship'];
  const SCENARIOS = config.scenarios;

  const startSimulation = () => setPhase('simulation');

  const handleOptionSelect = (impact: any) => {
    setMetrics(prev => ({
      growth: Math.max(0, Math.min(100, prev.growth + (impact.metrics.growth || 0))),
      capital: Math.max(0, Math.min(100, prev.capital + (impact.metrics.capital || 0))),
      risk: Math.max(0, Math.min(100, prev.risk + (impact.metrics.risk || 0))),
      team: Math.max(0, Math.min(100, prev.team + (impact.metrics.team || 0))),
    }));
    setResult({ feedback: impact.feedback });
  };

  const nextStep = () => {
    setResult(null);
    if (currentScenarioIdx < SCENARIOS.length - 1) {
      setCurrentScenarioIdx(currentScenarioIdx + 1);
    } else {
      setPhase('locked');
    }
  };

  const currentScenario = SCENARIOS[currentScenarioIdx];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {phase === 'overview' && (
            <motion.div 
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              <div className="lg:col-span-12 mb-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-px w-12 bg-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Preview Experience</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-botanical-950 tracking-tighter uppercase mb-6 leading-none">
                  {config.title} <br /> <span className="text-emerald-500 italic">{config.subtitle}</span>
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                  {config.description}
                </p>
              </div>

              {/* Environments */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {config.environments.map((env) => (
                  <div 
                    key={env.name}
                    className={`p-8 rounded-[32px] border-2 transition-all ${
                      env.status === 'Active' 
                        ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-500/5' 
                        : 'bg-slate-100/50 border-slate-100 grayscale opacity-60'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                      env.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'
                    }`}>
                      <env.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-2">{env.name}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">{env.desc}</p>
                    <div className="flex items-center space-x-2">
                       {env.status === 'Locked' ? <Lock className="w-3 h-3 text-slate-400" /> : <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />}
                       <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">{env.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 space-y-4">
                <button 
                  onClick={startSimulation}
                  className="w-full bg-botanical-950 text-white py-6 rounded-[20px] text-[12px] font-black uppercase tracking-[0.2em] shadow-xl shadow-botanical-950/20 hover:bg-emerald-500 transition-all active:scale-95 flex items-center justify-center space-x-4"
                >
                  <PlayIconUI className="w-4 h-4" />
                  <span>Try Demo Simulation</span>
                </button>
                <button 
                  onClick={onApply}
                  className="w-full bg-white border-2 border-slate-100 text-botanical-950 py-6 rounded-[20px] text-[12px] font-black uppercase tracking-[0.2em] hover:border-emerald-500 transition-all active:scale-95 flex items-center justify-center space-x-4"
                >
                  <ShieldCheckIconUI className="w-4 h-4" />
                  <span>Apply for Full Access</span>
                </button>
              </div>
            </motion.div>
          )}

          {phase === 'simulation' && (
            <motion.div 
              key="simulation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[70vh]"
            >
              {/* Header / Metrics */}
              <div className="lg:col-span-12 flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-botanical-950 uppercase tracking-tight">Active Simulation</h2>
                    <p className="text-[10px] font-medium text-slate-400">Scenario {currentScenarioIdx + 1} of {SCENARIOS.length}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-8">
                  {[
                    { label: 'Growth', val: metrics.growth, icon: TrendingUp },
                    { label: 'Capital', val: metrics.capital, icon: DollarSign },
                    { label: 'Risk', val: metrics.risk, icon: AlertCircle },
                    { label: 'Team', val: metrics.team, icon: Users },
                  ].map(m => (
                    <div key={m.label} className="flex flex-col items-center">
                      <div className="flex items-center space-x-2 mb-2">
                        <m.icon className="w-3 h-3 text-slate-400" />
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{m.label}</span>
                      </div>
                      <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full ${m.label === 'Risk' ? 'bg-amber-500' : 'bg-emerald-500'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${m.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Interaction Area */}
              <div className="lg:col-span-8 bg-white rounded-[48px] p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!result ? (
                    <motion.div 
                      key="scenario"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-4xl font-black text-botanical-950 uppercase tracking-tighter mb-8 leading-none">
                        {currentScenario.title}
                      </h3>
                      <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                        {currentScenario.context}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                        {currentScenario.options.map(opt => (
                          <button
                            key={opt.id}
                            onClick={() => handleOptionSelect(opt.impact)}
                            className="p-8 rounded-3xl border-2 border-slate-100 hover:border-emerald-400 hover:bg-emerald-50/10 text-left transition-all group"
                          >
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Decision</span>
                              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                            </div>
                            <div className="text-lg font-black text-botanical-950 uppercase tracking-tight">{opt.text}</div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h3 className="text-4xl font-black text-botanical-950 uppercase tracking-tighter mb-6 leading-none">Scenario Complete</h3>
                      <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-lg mx-auto">
                        {result.feedback}
                      </p>
                      <button 
                        onClick={nextStep}
                        className="bg-botanical-950 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center justify-center space-x-3 mx-auto"
                      >
                        <span>{currentScenarioIdx < SCENARIOS.length - 1 ? 'Next Scenario' : 'View Results'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sidebar Data Visuals */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-botanical-950 rounded-[40px] p-10 text-white h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Activity className="w-32 h-32" />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-12">Institutional Feed</h4>
                  
                  <div className="space-y-8 relative z-10">
                    {[
                      { l: 'Network Latency', v: '12ms', i: Shield },
                      { l: 'Advisory Sync', v: 'Live', i: Target },
                      { l: 'Data Integrity', v: '99.9%', i: CheckCircle2 },
                    ].map(item => (
                      <div key={item.l} className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center space-x-3">
                          <item.i className="w-4 h-4 text-emerald-500" />
                          <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">{item.l}</span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-tight">{item.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-20">
                    <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mb-4">Venture Analytics</div>
                    <div className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 p-4 flex items-end space-x-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${20 + Math.random() * 60}%` }}
                          className="flex-1 bg-emerald-500/20 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'locked' && (
            <motion.div 
              key="locked"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-[60px]"
            >
              {/* Blurred Background Mockup */}
              <div className="absolute inset-0 z-0 grayscale blur-xl opacity-20 pointer-events-none scale-105">
                 <div className="grid grid-cols-12 gap-8 p-12 h-full">
                    <div className="col-span-12 h-12 bg-slate-300 rounded-full" />
                    <div className="col-span-8 h-96 bg-slate-300 rounded-[40px]" />
                    <div className="col-span-4 h-96 bg-slate-300 rounded-[40px]" />
                 </div>
              </div>

              <div className="relative z-10 text-center max-w-2xl px-12">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-emerald-500/20"
                >
                  <Lock className="w-10 h-10 text-white" />
                </motion.div>
                
                <h2 className="text-6xl md:text-7xl font-black text-botanical-950 tracking-tighter uppercase mb-6 leading-none italic">
                  Continue the <br /> <span className="text-emerald-500">Simulation.</span>
                </h2>
                <p className="text-xl text-slate-500 font-medium mb-12 max-w-lg mx-auto">
                  Unlock full access, institutional analytics, and Series B+ scenarios by joining Africa Business College.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={onApply}
                    className="bg-emerald-500 text-white py-6 rounded-[20px] text-[12px] font-black uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={onContinueProgram}
                    className="bg-white border-2 border-slate-100 text-botanical-950 py-6 rounded-[20px] text-[12px] font-black uppercase tracking-[0.2em] hover:text-emerald-500 transition-all"
                  >
                    Continue with Program
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const PlayIconUI = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ShieldCheckIconUI = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
