import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Target,
  Eye,
  Zap,
  Shield,
  Globe,
  Monitor,
  Cpu
} from 'lucide-react';
import { FACULTY } from '../constants';

const Hero = () => {
  return (
    <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-px w-12 bg-emerald-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">AFRICA BUSINESS COLLEGE</span>
      </div>
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] text-botanical-950 mb-12">
        Building Africa's <span className="text-emerald-500">Next Generation</span> of Leaders.
      </h1>
      <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-3xl mb-12">
        A sovereign institution dedicated to dismantling outdated education models and replacing them with a framework built for execution, leadership, and African market mastery.
      </p>
      <button className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-xl">
        Explore Programs
      </button>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="flex items-start space-x-8">
          <div className="text-4xl font-black text-emerald-500/30">01</div>
          <div>
            <h3 className="text-2xl font-black text-botanical-950 mb-6">Our Mission</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              To accelerate African economic sovereignty by equipping leaders with the technical precision, moral fortitude, and execution capability required to lead complex organizations in emerging markets.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-8">
          <div className="text-4xl font-black text-emerald-500/30">02</div>
          <div>
            <h3 className="text-2xl font-black text-botanical-950 mb-6">Our Vision</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              To be the definitive intellectual hub for African business excellence, where tradition meets digital transformation to create global-scale impacts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TheChallenge = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">THE CHALLENGE</div>
        <h2 className="text-5xl font-black text-botanical-950 tracking-tighter max-w-4xl mx-auto leading-tight">
          The current educational model is broken for the African context. Academic theory without execution has created a leadership gap.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: 'Theoretical Lag', desc: 'Global curricula often ignore the nuanced realities of African cross-border logistics and currency fluctuations.' },
          { icon: Shield, title: 'Siloed Learning', desc: 'Traditional colleges separate finance from technology, ignoring the fintech-first reality of the continent.' },
          { icon: Globe, title: 'The Skills Gap', desc: 'Graduates enter the market with certificates but without the ability to deploy capital or scale operations.' }
        ].map(item => (
          <div key={item.title} className="bg-white p-12 rounded-3xl border border-slate-100 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <item.icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-black text-botanical-950 mb-4">{item.title}</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Approach = () => {
  const steps = [
    { num: '01', title: 'Learn', desc: 'Deep immersion into sovereign finance, digital governance, and strategic operations.' },
    { num: '02', title: 'Apply', desc: 'Solving real-world business cases in partnership with leading African conglomerates.' },
    { num: '03', title: 'Build', desc: 'Launching ventures and leading initiatives that directly impact the African GDP.' }
  ];

  return (
    <section className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-4">The ABC Approach</h2>
        <p className="text-slate-500 font-medium mb-20">Our methodology transforms high-potential students into market-ready executives through three distinct phases.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(step => (
            <div key={step.num} className="bg-white p-12 rounded-3xl border border-slate-100 relative group overflow-hidden">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${step.num === '03' ? 'bg-emerald-500' : 'bg-botanical-950'}`} />
              <div className="relative z-10">
                <div className={`text-8xl font-black mb-12 transition-colors ${step.num === '03' ? 'text-emerald-500 group-hover:text-white/20' : 'text-slate-100 group-hover:text-white/10'}`}>
                  {step.num}
                </div>
                <h3 className="text-3xl font-black text-botanical-950 mb-6 group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed group-hover:text-white/80 transition-colors">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketFocus = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/market/1000/1000?grayscale" alt="Market" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-12 -right-12 bg-white p-12 rounded-3xl shadow-2xl max-w-xs border border-slate-100">
            <p className="text-lg font-black text-botanical-950 italic">
              "Execution is the only curriculum that matters."
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-12 leading-tight">
            Designed for <br />
            <span className="text-emerald-500">AFRICAN MARKETS.</span>
          </h2>
          <div className="space-y-12">
            {[
              { icon: Cpu, title: 'Megacity Intelligence', desc: 'Strategies built for Lagos, Nairobi, Johannesburg, and Cairo.' },
              { icon: Globe, title: 'Cross-Border Resilience', desc: 'Navigating multi-currency environments and fragmented regulations.' }
            ].map(item => (
              <div key={item.title} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-botanical-950 mb-2">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechSection = () => {
  return (
    <section className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">THE PLATFORM</div>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-8">Powered by CycleBreeze</h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-12">
            Our proprietary advanced digital infrastructure. More than an LMS, CycleBreeze is a simulation engine that mirrors real-market data, allowing students to test strategies against actual market conditions in real-time.
          </p>
          <ul className="space-y-6">
            {['Real-time Financial Modeling', 'Blockchain-verified Credentials'].map(item => (
              <li key={item} className="flex items-center space-x-4 text-botanical-950 font-black text-sm">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
            <img src="https://picsum.photos/seed/tech/800/600" alt="Tech" className="w-full h-full rounded-2xl object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-4">Sovereign Leadership</h2>
      <p className="text-slate-500 font-medium mb-20 max-w-2xl mx-auto">Led by a council of practitioners, economists, and technology pioneers dedicated to the African century.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {FACULTY.map(member => (
          <div key={member.id} className="group">
            <div className="aspect-square rounded-2xl overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-xl font-black text-botanical-950 mb-1">{member.name}</h4>
            <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale">
        {['AFRICA UNION', 'GLOBAL IMPACT', 'TECH COUNCIL', 'EMERGING MKTS'].map(p => (
          <span key={p} className="text-xl font-black tracking-widest text-botanical-950">{p}</span>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-7xl md:text-9xl font-black text-botanical-950 tracking-tighter mb-12 leading-[0.8]">
          Ready to shape the future of <br /> African Business?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-emerald-500 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-2xl">
            Enroll for the 2025 Intake
          </button>
          <button className="bg-white text-botanical-950 border border-slate-200 px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all active:scale-95">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <>
      <Hero />
      <MissionVision />
      <TheChallenge />
      <Approach />
      <MarketFocus />
      <TechSection />
      <Leadership />
      <Partners />
      <FinalCTA />
    </>
  );
};
