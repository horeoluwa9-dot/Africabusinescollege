import React from 'react';
import { motion } from 'motion/react';
import { Play, BookOpen, Zap, Users, Shield, TrendingUp, ArrowRight, CheckCircle2, Microscope } from 'lucide-react';

import { Page } from '../components/Layout';

interface ExperienceProps {
  onPageChange: (page: Page) => void;
}

export const Learning = ({ onPageChange }: ExperienceProps) => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1920&q=80" 
            alt="Online Learning" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 mb-8">
              <div className="w-12 h-px bg-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">The ABC Learning Model</span>
            </div>
            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.8] text-botanical-950 mb-12 uppercase">
              Online Rigor, <br />
              <span className="text-emerald-500 italic">Real-World Impact.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
              We've re-engineered business education for the digital age. Our model combines high-fidelity online classes with immersive simulation labs and global peer networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => onPageChange('programs')}
                className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl shadow-botanical-950/20"
              >
                Explore Curriculum
              </button>
              <button 
                onClick={() => onPageChange('simulation-labs')}
                className="bg-white border border-slate-200 text-slate-600 px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all"
              >
                Enter Simulation Labs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: '01', title: 'Learn', desc: 'Engage in high-fidelity online classes led by industry practitioners and global thought leaders.' },
            { id: '02', title: 'Apply', desc: 'Deploy frameworks immediately on real-world scenarios within our managed learning clusters.' },
            { id: '03', title: 'Simulate', desc: 'Stress-test your strategies in high-stakes digital twin environments and simulation labs.' },
            { id: '04', title: 'Build', desc: 'Synthesize your learnings into enterprise-grade assets and sovereign ventures.' }
          ].map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 group hover:border-emerald-500 transition-colors">
              <span className="text-emerald-500 font-black text-sm mb-6 block">{step.id}</span>
              <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Dimensional Architectures */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-6xl font-black tracking-tighter text-botanical-950 uppercase mb-4">Multi-Dimensional <br /> Architectures.</h2>
            <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Synchronized for high-performance professionals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Online Classes', tag: 'LIVE SESSION', desc: 'Direct synchronization with industry titans in closed-door digital classrooms.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80' },
              { title: 'Knowledge Vault', tag: 'ON-DEMAND', desc: 'Cinematic library of core modules, accessible across all devices.', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80' },
              { title: 'Simulation Labs', tag: 'IMMERSIVE', desc: 'Project-based sprints where theory meets the friction of real-world execution.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative mb-8 shadow-2xl">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-botanical-950/20 to-transparent" />
                  <div className="absolute top-8 left-8">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest">{item.tag}</span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Simulation Lab Technical Section */}
      <section className="py-32 px-6 md:px-12 bg-botanical-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl font-black tracking-tighter mb-12 uppercase leading-[0.9]">The Simulation Lab.</h2>
            <div className="space-y-12">
              {[
                { icon: TrendingUp, title: 'Real-Time Market Friction', desc: 'Every engine simulates African market volatility, regulatory shifts, and competitive maneuvers.' },
                { icon: Users, title: 'Collaborative War-Rooms', desc: 'Form strategic alliances or engage in tactical takeovers with fellow scholars in synchronized scenarios.' },
                { icon: Shield, title: 'Low-Risk High-Fidelity', desc: 'Build your decision-making muscle memory before deploying capital in the real world.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-900 rounded-[40px] p-8 border border-white/5 shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-12">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Active Engine: v4.6</div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-botanical-950 p-6 rounded-2xl border border-white/5">
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 block mb-2">Portfolio Risk</span>
                  <span className="text-3xl font-black text-white">14.2%</span>
                </div>
                <div className="bg-botanical-950 p-6 rounded-2xl border border-white/5">
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 block mb-2">Growth Forecast</span>
                  <span className="text-3xl font-black text-emerald-500">+28.5%</span>
                </div>
              </div>
              <div className="h-48 bg-botanical-950 rounded-2xl border border-white/5 flex items-end p-6 space-x-3">
                {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-lg transition-all duration-1000 ${i === 5 ? 'bg-emerald-500' : 'bg-emerald-900/40'}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Guided by the New Guard */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl font-black tracking-tighter text-botanical-950 mb-12 uppercase leading-[0.9]">Guided by the <br /><span className="text-emerald-500 italic">New Guard.</span></h2>
            <div className="space-y-6">
              {[
                { name: 'Kofi Mensah', role: 'HEAD OF SOVEREIGN CAPITAL', quote: 'The feedback is tactical. We treat every project like a Series-A pitch to institutional investors.' },
                { name: 'Amara Okafor', role: 'STRATEGIC OPERATIONS', quote: 'We bridge the gap between institutional theory and the chaotic reality of continental commerce.' }
              ].map((mentor, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[32px] flex items-center space-x-6 border border-slate-100">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-200 shrink-0">
                    <img src={i === 0 ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"} alt={mentor.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-botanical-950 uppercase tracking-tight">{mentor.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">{mentor.role}</p>
                    <p className="text-slate-500 text-sm font-medium italic">"{mentor.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-botanical-950 p-12 rounded-[40px] text-white shadow-2xl">
            <h3 className="text-2xl font-black mb-12 uppercase tracking-tight">The Outcomes Portfolio</h3>
            <div className="space-y-10">
              {[
                { label: 'VENTURE SUCCESS RATE', value: '82%' },
                { label: 'CAPITAL RAISED (AVG)', value: '$1.2M' },
                { label: 'GLOBAL PARTNER PLACEMENT', value: '94%' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</span>
                    <span className="text-2xl font-black text-emerald-500">{stat.value}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: stat.value.includes('%') ? stat.value : '85%' }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-12 border-t border-white/5">
              <p className="text-slate-400 text-lg font-medium italic mb-6 leading-relaxed">
                "ABC didn't just give me a degree; they gave me the blueprint and the network to build a pan-African logistics empire."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-px bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">FOUNDING SCHOLAR, '22</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-slate-50 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-7xl md:text-[120px] font-black tracking-tighter text-botanical-950 mb-12 uppercase leading-[0.8]">
            Architect Your <br /> Legacy.
          </h2>
          <p className="text-xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto">
            Applications for the next cohort are now being reviewed. Secure your seat at the vanguard of African business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onPageChange('application')}
              className="bg-emerald-500 text-white px-16 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/40"
            >
              Apply for Admission
            </button>
            <button className="bg-white border border-slate-200 text-botanical-950 px-16 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
