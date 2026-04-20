import React from 'react';
import { motion } from 'motion/react';
import { Shield, ChevronRight, Zap, Target, DollarSign, ArrowLeft } from 'lucide-react';
import { Page } from '../components/Layout';

interface SimulationDetailsProps {
  onBack: () => void;
  onPageChange: (page: Page, id?: string) => void;
}

export const SimulationDetails = ({ onBack, onPageChange }: SimulationDetailsProps) => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Labs</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[48px] p-12 mb-12"
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full mb-8">
                <Zap className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">System Overview</span>
              </div>
              <h1 className="text-5xl font-black text-botanical-950 uppercase tracking-tighter mb-8 leading-none">
                Interactive Learning <br /> By <span className="text-emerald-500">Execution</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                Simulations are core to the ABC pedagogy. Instead of reading case studies, you step inside them. You are given a role, a starting balance, and a series of dynamic market events. Your decisions alter the trajectory of the business in real-time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <Target className="w-8 h-8 text-botanical-950 mb-6" />
                  <h3 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-4">Branching Logic</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Every scenario is engineered with deeply researched African market variables. Your choices trigger cascading effects across your metrics, unlocking new scenarios or closing off paths entirely based on your performance.
                  </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <DollarSign className="w-8 h-8 text-botanical-950 mb-6" />
                  <h3 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-4">Live Metrics</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Watch your Revenue, Satisfaction, Cash Flow, and Growth react live to your decisions. Burn too much cash, and you'll trigger a Crisis Management path. Scale too fast without operations, and watch customer satisfaction plummet.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-botanical-950 rounded-[48px] p-12 text-white"
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Simulation Environments</h3>
              <div className="space-y-4">
                {[
                  { name: 'Entrepreneurship', desc: 'Startup mechanics and product-market fit.' },
                  { name: 'Venture Building', desc: 'Scaling operations and regional expansion.' },
                  { name: 'Finance & Investment', desc: 'Capital allocation, term sheets, and M&A.' },
                  { name: 'Innovation Leadership', desc: 'Corporate crisis, policy, and digital transformation.' }
                ].map((env, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl">
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-tight mb-1 cursor-pointer hover:text-emerald-500 transition-colors" onClick={() => onPageChange('simulation-demo', env.name.toLowerCase().replace(/ /g, '-'))}>{env.name}</h4>
                      <p className="text-sm text-slate-400 font-medium">{env.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-emerald-500" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-emerald-500 rounded-[40px] p-10 text-white shadow-2xl shadow-emerald-500/20">
                <Shield className="w-12 h-12 mb-8" />
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6">
                  Ready to Start?
                </h3>
                <p className="text-emerald-50 font-medium mb-10 leading-relaxed">
                  Full access to all 40+ simulation environments is granted upon successful enrollment into a core program.
                </p>
                <div className="space-y-4">
                  <button onClick={() => onPageChange('simulation-demo')} className="w-full bg-white text-emerald-600 font-black uppercase tracking-widest text-[10px] py-5 rounded-2xl hover:bg-emerald-50 transition-colors">
                    Try Demo Scenario
                  </button>
                  <button onClick={() => onPageChange('programs')} className="w-full bg-botanical-950 text-white font-black uppercase tracking-widest text-[10px] py-5 rounded-2xl hover:bg-emerald-900 transition-colors">
                    View Programs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
