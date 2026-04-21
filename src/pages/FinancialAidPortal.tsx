import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Rocket, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { Page } from '../components/Layout';

interface FinancialAidPortalProps {
  onPageChange: (page: Page) => void;
}

const FinancialAidPortal: React.FC<FinancialAidPortalProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <SectionLabel className="mb-8 justify-center">Commitment to Accessibility</SectionLabel>
          <h1 className="text-5xl md:text-8xl font-black text-botanical-950 tracking-tighter mb-8 uppercase leading-[0.85]">
            Access & Funding <br /> <span className="text-emerald-500 italic">at Africa Business College</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            ABC is committed to ensuring that financial barriers do not stand in the way of continental leadership. Our funding programs are designed to support the next generation of high-impact entrepreneurs.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl max-w-2xl mx-auto flex items-start gap-4 text-left">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
            <p className="text-emerald-900 text-sm font-medium">
              Important: Funding at ABC is highly competitive and merit-based. While we strive for maximum accessibility, awards are not guaranteed to all applicants.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Funding */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-botanical-950 tracking-tighter uppercase mb-4">Types of Funding</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Merit-based scholarships",
              desc: "For candidates with exceptional academic backgrounds or proven early-stage records of excellence.",
              icon: Target
            },
            {
              title: "Need-based support",
              desc: "Financial assistance tailored for talented individuals who demonstrate significant financial constraints.",
              icon: Users
            },
            {
              title: "Founder grants",
              desc: "Non-equity capital specifically for alumni during the venture-building phase of their studies.",
              icon: Rocket
            },
            {
              title: "Partner-sponsored funding",
              desc: "Exclusive funding pools provided by our alliance of pan-African corporate and institutional partners.",
              icon: Building2
            }
          ].map((aid, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:border-emerald-500 transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all text-emerald-500">
                <aid.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-botanical-950 mb-4 uppercase tracking-tighter leading-tight">{aid.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{aid.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-24 bg-botanical-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel className="mb-8" dark>Eligibility</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-tight">Who should apply?</h2>
              <div className="space-y-8">
                {[
                  { title: "Early-stage founders", desc: "Entrepreneurs currently building or scaling ventures across the continent." },
                  { title: "High-potential professionals", desc: "Rising leaders with a clear path to executive impact in strategic sectors." },
                  { title: "Underrepresented regions", desc: "Candidates from markets with developing tech ecosystems seeking to bridge the gap." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 border border-emerald-500/30 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-emerald-500 font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2 uppercase">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" alt="Funding" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter text-botanical-950 uppercase mb-8">The Funding Process</h2>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center justify-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Sequence Notice:</span>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Funding comes AFTER application (or alongside, but separate form).</p>
            </div>
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-100" />
            {[
              { title: "Apply to a program", desc: "Complete your standard application for your target ABC program." },
              { title: "Receive conditional admission", desc: "Successfully progress through the review and interview phase." },
              { title: "Apply for funding", desc: "Once conditionally admitted, unlock the detailed financial aid application." },
              { title: "Review & decision", desc: "Wait for the committee to review your combined academic and financial profile." }
            ].map((step, i) => (
              <div key={i} className="flex gap-12 relative z-10 group">
                <div className="w-10 h-10 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shrink-0 group-hover:border-emerald-500 transition-colors">
                  <span className="text-botanical-950 font-black text-sm">{i + 1}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-botanical-950 mb-2 uppercase tracking-tighter">{step.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-slate-100 flex justify-center">
            <button 
              onClick={() => onPageChange('application')}
              className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl flex items-center gap-3"
            >
              <span>Begin Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAidPortal;
