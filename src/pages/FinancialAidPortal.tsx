import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Shield, Globe, TrendingUp, CheckCircle2, Download, ExternalLink, Mail, ArrowRight } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { Page } from '../components/Layout';

interface FinancialAidPortalProps {
  onPageChange: (page: Page) => void;
}

const FinancialAidPortal: React.FC<FinancialAidPortalProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80" alt="Finance" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <SectionLabel className="mb-8 justify-center">Student Services</SectionLabel>
          <h1 className="text-6xl md:text-8xl font-black text-botanical-950 tracking-tighter mb-8 uppercase leading-[0.85]">
            Financial Aid <br /> <span className="text-emerald-500 italic">Portal.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            Ensuring that financial barriers don't stand in the way of continental leadership. Explore our diverse funding mechanisms.
          </p>
          <div className="flex justify-center">
             <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center space-x-6 border border-slate-100">
                <div className="text-center">
                   <div className="text-3xl font-black text-botanical-950 tracking-tighter">$4.8M</div>
                   <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Awarded in 2025</div>
                </div>
                <div className="w-px h-10 bg-slate-100" />
                <div className="text-center">
                   <div className="text-3xl font-black text-botanical-950 tracking-tighter">1,200+</div>
                   <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Beneficiaries</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
              {
                 title: "Merit Scholarships",
                 desc: "For candidates with proven track records of early innovation and academic distinction.",
                 limit: "Up to 100% Tuition",
                 icon: Globe
              },
              {
                 title: "Regional Grants",
                 desc: "Specific funding allocated to underrepresented regional markets within Africa.",
                 limit: "25% - 50% Coverage",
                 icon: TrendingUp
              },
              {
                 title: "Corporate Sponsors",
                 desc: "For candidates whose employers are part of the ABC Corporate Alliance network.",
                 limit: "Employee Benefit",
                 icon: Shield
              }
           ].map((aid, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm hover:border-emerald-500 transition-all group flex flex-col justify-between">
                 <div>
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all text-emerald-500">
                       <aid.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tighter">{aid.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-8">{aid.desc}</p>
                 </div>
                 <div className="pt-8 border-t border-slate-50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{aid.limit}</span>
                 </div>
              </div>
           ))}
        </div>
      </section>

      <section className="py-24 bg-botanical-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="bg-white/5 border border-white/10 rounded-[48px] p-16 overflow-hidden relative group">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#00D98E_0%,transparent_70%)]" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
                    <div>
                        <SectionLabel className="mb-8" dark>Installment Plans</SectionLabel>
                        <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase leading-tight">Flexible Payment <br /> Engineering.</h2>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12">
                            Distribute your tuition across 12 manageable monthly installments to optimize your venture's cash flow during your studies.
                        </p>
                        <ul className="space-y-4 mb-12">
                           {['Zero Interest for 12 Months', 'Instant Activation', 'Multi-Currency Support'].map(item => (
                              <li key={item} className="flex items-center space-x-3 text-slate-300">
                                 <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                 <span className="font-medium">{item}</span>
                              </li>
                           ))}
                        </ul>
                        <button onClick={() => onPageChange('checkout' as Page)} className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all flex items-center space-x-3">
                           <span>Configure Plan</span>
                           <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-[40px] border border-white/20 shadow-2xl">
                           <div className="flex justify-between items-center mb-12">
                              <CreditCard className="w-10 h-10 text-emerald-500" />
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital Payment Engine</span>
                           </div>
                           <div className="space-y-6">
                              <div className="h-4 bg-white/5 rounded-full w-3/4" />
                              <div className="h-4 bg-white/5 rounded-full w-1/2" />
                              <div className="h-20 bg-emerald-500/20 rounded-2xl border border-emerald-500/30 flex items-center px-6">
                                 <div className="flex-grow">
                                    <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mb-1">Monthly Installment</div>
                                    <div className="text-2xl font-black text-white">$1,041.67</div>
                                 </div>
                                 <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                 </div>
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-32 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
           <SectionLabel className="mb-8 justify-center">Documentation</SectionLabel>
           <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Application Readiness</h2>
           <p className="text-slate-500 text-lg font-medium mb-12">
              Before applying through the aid portal, ensure you have your proof of income, academic transcripts, and institutional recommendation letters ready.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl flex items-center justify-center space-x-3">
                   <Download className="w-4 h-4" />
                   <span>Download Guide</span>
                </button>
                <button className="flex items-center justify-center space-x-3 text-emerald-500 font-black uppercase tracking-widest text-[10px] hover:text-botanical-950 transition-colors">
                   <span>Contact FinAid Team</span>
                   <Mail className="w-4 h-4" />
                </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAidPortal;
