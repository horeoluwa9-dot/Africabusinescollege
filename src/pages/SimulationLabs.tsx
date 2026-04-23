import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, BookOpen, Target, Zap, Globe, Landmark, Users, ArrowRight, Quote, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

import { Page } from '../components/Layout';

interface SimulationLabsProps {
  onPageChange: (page: Page, id?: string) => void;
}

import { SimulationCarousel } from '../components/SimulationCarousel';

import { SectionLabel } from '../components/SectionLabel';

export const SimulationLabs = ({ onPageChange }: { onPageChange: (page: Page, id?: string) => void }) => {
  const { t } = useLanguage();
  const { isLoggedIn, isApplied, isPaid } = useAuth();

  const simulationItems = [
    { 
      id: 'entrepreneurship', 
      name: t('home.entrepreneurship'), 
      desc: t('home.entrepreneurshipDesc'), 
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      icon: Zap,
      status: 'Simulation Lab',
      difficulty: 'Strategic intuition',
      focus: ['Execution', 'African Markets', 'Venture Building']
    },
    { 
      id: 'fundraising', 
      name: t('home.professionals'), 
      desc: t('home.professionalsDesc'), 
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
      icon: Target,
      status: 'Negotiation Suite',
      difficulty: 'Term Sheets',
      focus: ['Valuation', 'Investor Psychology', 'Deal Making']
    },
    { 
      id: 'expansion', 
      name: t('home.founders'), 
      desc: t('home.foundersDesc'), 
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      icon: Globe,
      status: 'Continental Scale',
      difficulty: 'Scaling Borders',
      focus: ['Trade', 'Regulation', 'Localization']
    },
    { 
      id: 'leadership', 
      name: t('home.executives'), 
      desc: t('home.executivesDesc'), 
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      icon: Users,
      status: 'Organizational Core',
      difficulty: 'Leadership',
      focus: ['Culture', 'Power', 'Moats']
    },
    { 
      id: 'policy', 
      name: t('home.hero.decisionsRealEnv'), 
      desc: t('home.testStrategies'), 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      icon: Landmark,
      status: 'Execution Strategy',
      difficulty: 'Expert',
      focus: ['GDP Growth', 'Inflation', 'Fiscal Policy']
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative pt-6 pb-32 px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-4"
          >
            <SectionLabel className="mb-6">Execution Business Laboratory</SectionLabel>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8 uppercase">
              {isPaid ? "Your Strategic" : "Learn Business by"} <br />
              <span className="text-emerald-500 italic">{isPaid ? "Command Center" : "Making Real"}</span> <br />
              {isPaid ? "is Active" : "Decisions"}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-12">
              {isPaid 
                ? "Experience the full depth of ABC's simulation engine. Navigate Series B expansions, policy shocks, and institutional growth with unrestricted access to all proprietary environments."
                : "Step into a high-fidelity digital sandbox where the stakes are simulated but the consequences are felt. Test strategies, lead teams, and master market dynamics in our world-class simulation environments."}
            </p>

            {isPaid ? (
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950 flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                    Full Institutional Access
                  </span>
                  <button 
                    onClick={() => onPageChange('dashboard-student')}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    Return to Dashboard
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => {
                      const envs = document.getElementById('environments');
                      if (envs) envs.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-emerald-500/20"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Enter Simulation Environments</span>
                  </button>
                </div>
              </div>
            ) : (isLoggedIn || isApplied) ? (
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950 flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                    Continue Simulation
                  </span>
                  <button 
                    onClick={() => onPageChange('dashboard-student')}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    View Progress
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => onPageChange('simulation-demo')}
                    className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-emerald-500/20"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Enter Demo Simulation</span>
                  </button>
                  <button 
                    onClick={() => {
                      const envs = document.getElementById('environments');
                      if (envs) envs.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white border border-slate-200 text-slate-600 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all active:scale-95"
                  >
                    Explore Environments
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => onPageChange('application')}
                    className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-botanical-950 border-b border-emerald-500 transition-all"
                  >
                    Apply for Full Access
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => onPageChange('simulation-demo')}
                    className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center justify-center space-x-3"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Try Demo Simulation</span>
                  </button>
                  <button 
                    onClick={() => {
                      const envs = document.getElementById('environments');
                      if (envs) envs.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white border border-slate-200 text-slate-600 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all active:scale-95"
                  >
                    Explore Environments
                  </button>
                </div>
                <button 
                  onClick={() => onPageChange('application')}
                  className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-botanical-950 border-b border-emerald-500 transition-all"
                >
                  Apply for Full Access
                </button>
              </div>
            )}
          </motion.div>

          {/* ... Hero Image remains ... */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden relative shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80" 
                alt="Simulation Lab" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/60 via-transparent to-transparent" />
              
              {/* Floating UI Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 block mb-1">Market Cap</span>
                    <span className="text-2xl font-black text-botanical-950">+$2.4M</span>
                  </div>
                  <div className="text-right">
                    <div className="bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest mb-2">
                      Strategy Optimized
                    </div>
                    <div className="flex space-x-1 justify-end">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unique Environments Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-botanical-950 mb-8 uppercase">
                Unique Business Simulation <br /> Environments
              </h2>
              <div className="w-20 h-1.5 bg-emerald-500 mb-12" />
              <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12">
                ABC's Simulation Labs provide proprietary, high-fidelity environments that mirror the complexity of global markets. We bridge the gap between theory and practice through intensive simulations in Entrepreneurship, Startup Fundraising, Market Expansion, Economic Policy, and Leadership Decision-making.
              </p>

              <div className="bg-white p-10 rounded-3xl border border-slate-100 mb-12">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-6">Why Simulation-Based Learning Matters</h3>
                <div className="space-y-4">
                  {[
                    'Learn by doing, not just studying',
                    'Experience real consequences of decisions',
                    'Build decision-making confidence',
                    'Prepare for real-world complexity'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3 text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <span className="text-4xl font-black text-botanical-950 block mb-2">500+</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Scenarios</span>
                </div>
                <div>
                  <span className="text-4xl font-black text-botanical-950 block mb-2">Real-Time</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Data Streams</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" alt="Sim 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl bg-emerald-400 flex items-center justify-center p-12">
                  <Zap className="w-full h-full text-white" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-3xl bg-emerald-100 flex items-center justify-center p-12">
                  <Target className="w-full h-full text-emerald-500" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" alt="Sim 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>

          <div id="environments" className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter text-botanical-950 mb-4 uppercase">Simulation Environments</h2>
            <p className="text-slate-500 font-medium">Five specialized arenas designed to test the limits of your professional intuition.</p>
          </div>

          <SimulationCarousel 
            items={simulationItems} 
            onSelect={(id) => onPageChange('simulation-demo', id)} 
            onExplore={(id) => onPageChange('simulation-details', id)}
          />
        </div>
      </section>

      {/* Business Instrument Studio */}
      <section className="py-32 px-6 md:px-12 bg-botanical-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D98E_0%,transparent_70%)] opacity-5" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative z-10">
            <SectionLabel className="mb-6" dark>The Lab Toolbox</SectionLabel>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8 uppercase">
              Business Instrument <br /> Studio
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
              A dedicated environment for professional-grade tools. Every simulation is powered by our proprietary analytics suite, used by top-tier strategists and analysts globally.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Financial Modeling', desc: 'Dynamic real-time P&L.' },
                { title: 'Market Analysis', desc: 'Predictive sector mapping.' },
                { title: 'Investment Evaluation', desc: 'Risk assessment tools.' },
                { title: 'Startup Valuation', desc: 'Cap table simulations.' },
                { title: 'Strategy Frameworks', desc: 'SWOT/PESTEL builders.' },
                { title: 'Business Planning', desc: 'Interactive pitch decks.' }
              ].map((tool, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-tight">{tool.title}</h4>
                    <p className="text-slate-500 text-xs font-medium">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="bg-slate-900 rounded-[40px] p-8 border border-white/5 shadow-2xl">
              <div className="aspect-[4/3] bg-botanical-950 rounded-2xl overflow-hidden border border-white/10 p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Dashboard v4.0</div>
                </div>
                <div className="space-y-6">
                  <div className="h-32 bg-emerald-500/5 rounded-xl border border-emerald-500/10 flex items-end p-4 space-x-2">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        className="flex-1 bg-emerald-500/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-xl" />
                    <div className="h-24 bg-white/5 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <Quote className="w-12 h-12 text-emerald-500 mx-auto mb-12" />
          <h2 className="text-4xl font-black tracking-tighter text-botanical-950 mb-12 uppercase">
            The "Tuesday Morning" Crisis
          </h2>
          <div className="bg-slate-50 p-12 rounded-[40px] relative">
            <p className="text-xl text-slate-500 leading-relaxed font-medium italic mb-12">
              "It's 9:00 AM in the Economic Policy Sim. You're the Central Banker of a developing nation. Suddenly, a major global commodity price drops by 40%. Your currency is in freefall. You have twelve simulated minutes to adjust interest rates, communicate with the IMF, and stabilize the market. This is where theory ends and mastery begins."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Dr. Elena Vance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <h4 className="font-black text-botanical-950 uppercase tracking-tight">Dr. Elena Vance</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Director of Simulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
