import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, Clock, Users, ArrowRight, Download, Layers, Shield, Zap } from 'lucide-react';
import { Page } from '../components/Layout';
import { SectionLabel } from '../components/SectionLabel';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface CurriculumPageProps {
  onPageChange: (page: Page) => void;
}

const CurriculumPage: React.FC<CurriculumPageProps> = ({ onPageChange }) => {
  const curriculum = [
    {
      quarter: "Q1: Foundational Intelligence",
      theme: "The African Market Context",
      modules: [
        { title: "Macroeconomic Dynamics in Africa", duration: "4 Weeks", focus: "GDP growth, local currency volatility, and regional trade blocs (AfCFTA)." },
        { title: "Strategic Leadership & Ethics", duration: "4 Weeks", focus: "Decision-making under uncertainty and institutional integrity." },
        { title: "Financial Accounting for Growth", duration: "4 Weeks", focus: "Capital structure, cash flow management in high-inflation environments." }
      ]
    },
    {
      quarter: "Q2: Expansion & Scaling",
      theme: "Operational Excellence",
      modules: [
        { title: "Supply Chain & Logistics", duration: "4 Weeks", focus: "Last-mile delivery challenges and pan-African infrastructure." },
        { title: "Digital Transformation", duration: "4 Weeks", focus: "Leveraging AI and FinTech to reach the unbanked and underserved." },
        { title: "Talent & Culture Architecture", duration: "4 Weeks", focus: "Building high-performance teams across diverse borders." }
      ]
    },
    {
      quarter: "Q3: Advanced Strategy",
      theme: "The Global Competitive Edge",
      modules: [
        { title: "Venture Capital & Deal Making", duration: "4 Weeks", focus: "Fundraising, valuation, and exit strategies for African startups." },
        { title: "Policy & Government Relations", duration: "4 Weeks", focus: "Navigating regulatory shifts and political risk management." },
        { title: "Global Expansion Strategy", duration: "4 Weeks", focus: "Exporting African innovation to the global South and beyond." }
      ]
    }
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="relative py-32 px-6 md:px-12 bg-botanical-950 overflow-hidden">
        <AnimatedBackground intensity="high" className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionLabel className="mb-8" dark>Full Curriculum</SectionLabel>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.9]">
            Architecting <br /> <span className="text-emerald-500 italic">Mastery.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
            Our multi-disciplinary curriculum is designed for those who don't just want to study business, but intend to define it.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-32">
          {curriculum.map((q, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="text-emerald-500 font-black text-xl mb-4 block">{q.quarter}</span>
                  <h2 className="text-4xl font-black text-botanical-950 uppercase tracking-tighter mb-6">{q.theme}</h2>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    A deep dive into the core mechanics of building sustainable value in emerging markets.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-8">
                {q.modules.map((m, mIdx) => (
                  <div key={mIdx} className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:border-emerald-500 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="text-2xl font-black text-botanical-950 group-hover:text-emerald-500 transition-colors uppercase tracking-tight">{m.title}</h4>
                      <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        <span>{m.duration}</span>
                      </div>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed mb-8">{m.focus}</p>
                    <div className="flex flex-wrap gap-4">
                      {['Case Studies', 'Simulations', 'Live Sessions'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[8px] font-black uppercase tracking-widest text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel className="mb-8 justify-center">Next Steps</SectionLabel>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Download Full Syllabi</h2>
          <p className="text-slate-500 text-lg font-medium mb-12">
            Get a detailed breakdown of all learning paths, faculty profiles, and institutional standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onPageChange('application')}
              className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl"
            >
              Start Application
            </button>
            <button className="bg-white border border-slate-200 text-botanical-950 px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center space-x-3">
              <Download className="w-4 h-4" />
              <span>Full Prospectus</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurriculumPage;
