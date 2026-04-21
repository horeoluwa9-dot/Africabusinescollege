import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, DollarSign, ArrowRight, ShieldCheck, Zap, Globe, MessageSquare, BarChart } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { Page } from '../components/Layout';

interface InquirePricingProps {
  onPageChange: (page: Page) => void;
}

const InquirePricing: React.FC<InquirePricingProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-32 bg-botanical-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,#00D98E_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionLabel className="mb-8" dark>Institutional Investment</SectionLabel>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.85]">
            Pricing <br /> <span className="text-emerald-500 italic">Sovereignty.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
            Transparent, execution-driven investment structures for individuals and global institutions.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Standard Plan */}
           <div className="bg-slate-50 p-12 rounded-[48px] border border-slate-100 flex flex-col h-full">
              <div className="mb-12">
                 <h3 className="text-2xl font-black text-botanical-950 uppercase mb-4">Standard Cohort</h3>
                 <p className="text-slate-400 font-medium">Individual leaders and founders embarking on their sovereign journey.</p>
              </div>
              <div className="mb-12">
                 <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-black text-botanical-950">$12,500</span>
                    <span className="text-slate-400 font-medium uppercase text-xs tracking-widest">/ Annual</span>
                 </div>
              </div>
              <ul className="space-y-6 mb-12 flex-grow">
                 {['Full Core Curriculum', 'Simulation Lab Access', 'Global Alumni Network', 'Managed Peer Clusters'].map(item => (
                    <li key={item} className="flex items-center space-x-3 text-slate-500 font-medium pb-4 border-b border-slate-200/50 last:border-0">
                       <ShieldCheck className="w-5 h-5 text-emerald-500" />
                       <span>{item}</span>
                    </li>
                 ))}
              </ul>
              <button 
                onClick={() => onPageChange('application')}
                className="w-full bg-botanical-950 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl"
              >
                Apply for Admission
              </button>
           </div>

           {/* Executive Accelerator */}
           <div className="bg-botanical-950 p-12 rounded-[48px] border border-white/10 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                 <Zap className="w-12 h-12 text-emerald-500 blur-sm group-hover:blur-0 transition-all" />
              </div>
              <div className="mb-12 relative z-10">
                 <h3 className="text-2xl font-black text-white uppercase mb-4">Executive Elite</h3>
                 <p className="text-slate-400 font-medium">High-fidelity training for senior leaders and government officials.</p>
              </div>
              <div className="mb-12 relative z-10">
                 <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-black text-white">$18,750</span>
                    <span className="text-slate-500 font-medium uppercase text-xs tracking-widest">/ Annual</span>
                 </div>
              </div>
              <ul className="space-y-6 mb-12 flex-grow relative z-10">
                 {['All Standard Features', '1-on-1 Faculty Mentorship', 'Private Policy Simulations', 'Lagos/Nairobi Summits', 'Exclusive Research Access'].map(item => (
                    <li key={item} className="flex items-center space-x-3 text-slate-300 font-medium pb-4 border-b border-white/5 last:border-0">
                       <Zap className="w-5 h-5 text-emerald-500" />
                       <span>{item}</span>
                    </li>
                 ))}
              </ul>
              <button 
                onClick={() => onPageChange('checkout' as Page)}
                className="w-full bg-emerald-500 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-2xl relative z-10"
              >
                Enroll Executive
              </button>
           </div>

           {/* Institutional / Custom */}
           <div className="bg-white p-12 rounded-[48px] border border-slate-100 flex flex-col h-full shadow-2xl">
              <div className="mb-12">
                 <h3 className="text-2xl font-black text-botanical-950 uppercase mb-4">Institutional</h3>
                 <p className="text-slate-400 font-medium">Custom cohort solutions for global organizations and enterprises.</p>
              </div>
              <div className="mb-12">
                 <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-botanical-950 uppercase tracking-tighter italic">Varying Intensity</span>
                 </div>
              </div>
              <ul className="space-y-6 mb-12 flex-grow">
                 {['Curricula Tailoring', 'Strategic Alignment', 'Group Enrollment Analytics', 'Private Digital Campus', 'dedicated Success Manager'].map(item => (
                    <li key={item} className="flex items-center space-x-3 text-slate-500 font-medium pb-4 border-b border-slate-200/50 last:border-0">
                       <BarChart className="w-5 h-5 text-botanical-950" />
                       <span>{item}</span>
                    </li>
                 ))}
              </ul>
              <button 
                onClick={() => onPageChange('contact')}
                className="w-full bg-slate-50 border border-slate-200 text-botanical-950 py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-botanical-950 hover:text-white transition-all shadow-sm"
              >
                Request Custom Proposal
              </button>
           </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div>
              <SectionLabel className="mb-8">Economic Mobility</SectionLabel>
              <h2 className="text-5xl font-black text-botanical-950 uppercase tracking-tighter mb-8 leading-tight">Investment <br /> Strategy.</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                 We've engineered our pricing to reflect the varying economic realities across the continent. Speak with an advisor to learn about regional parity adjustments and installment schedules.
              </p>
              <div className="flex items-center space-x-8">
                 <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                       <Globe className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Regional Parity</div>
                       <div className="text-botanical-950 font-black">Applied across 12 countries</div>
                    </div>
                 </div>
                 <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                       <MessageSquare className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Direct Consultation</div>
                       <div className="text-botanical-950 font-black">Book a Strategy Call</div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=80" alt="Institutional Finance" className="w-full h-full object-cover grayscale" />
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-botanical-950 text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-tight text-center">Ready to Invest in your <br /> <span className="text-emerald-500 italic">Institutional DNA?</span></h2>
            <button 
              onClick={() => onPageChange('application')}
              className="bg-emerald-500 text-white px-16 py-6 text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-emerald-600 transition-all active:scale-95 shadow-2xl"
            >
               Begin Enrollment Journey
            </button>
         </div>
      </section>
    </div>
  );
};

export default InquirePricing;
