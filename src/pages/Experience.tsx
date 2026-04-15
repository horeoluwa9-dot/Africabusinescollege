import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Play,
  Database,
  Layout,
  Activity,
  Users,
  Zap,
  Shield
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-px w-12 bg-emerald-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">ARCHITECTURE OF EXCELLENCE</span>
      </div>
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] text-botanical-950 mb-12">
        Learn by Doing, <br />
        <span className="text-emerald-500">Not Just Studying.</span>
      </h1>
      <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-3xl mb-12">
        Transcend traditional academic boundaries with a curriculum architected for the sovereign leader. Master complex business instruments through immersive execution.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-xl">
          Explore Curriculum
        </button>
        <button className="bg-white text-botanical-950 border border-slate-200 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all active:scale-95">
          View Admission Tiers
        </button>
      </div>
    </section>
  );
};

const ProcessSteps = () => {
  const steps = [
    { num: '01', title: 'Learn', desc: 'Master core frameworks through high-fidelity editorial content and world-class expert sessions.' },
    { num: '02', title: 'Apply', desc: 'Deploy frameworks immediately on real-world scenarios within our managed learning clusters.' },
    { num: '03', title: 'Simulate', desc: 'Stress-test your strategies in high-stakes digital twin environments and simulation labs.' },
    { num: '04', title: 'Build', desc: 'Synthesize your learnings into enterprise-grade assets and sovereign ventures.' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map(step => (
        <div key={step.num} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group">
          <div className="text-[10px] font-black text-emerald-500 mb-8">{step.num}</div>
          <h3 className="text-2xl font-black text-botanical-950 mb-4">{step.title}</h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </section>
  );
};

const Architectures = () => {
  const items = [
    { title: 'Sovereign Cohorts', type: 'LIVE SESSION', desc: 'Direct synchronization with industry titans in closed-door sessions.', image: 'https://picsum.photos/seed/cohort/800/1000?grayscale' },
    { title: 'Knowledge Vault', type: 'ON-DEMAND', desc: 'Cinematic library of core modules, accessible across all devices.', image: 'https://picsum.photos/seed/vault/800/1000?grayscale' },
    { title: 'Studio Labs', type: 'IMMERSIVE', desc: 'Project-based sprints where theory meets the friction of real execution.', image: 'https://picsum.photos/seed/studio/800/1000?grayscale' }
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-4">Multi-Dimensional <br /> Architectures.</h2>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">SYNCHRONIZED FOR HIGH-PERFORMANCE PROFESSIONALS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map(item => (
          <div key={item.title} className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-botanical-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <div className="bg-emerald-500 text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded mb-4 inline-block">
                {item.type}
              </div>
              <h3 className="text-3xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SimulationLabDeepDive = () => {
  return (
    <section className="py-32 bg-botanical-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-6xl font-black text-white tracking-tighter mb-12">The Simulation Lab.</h2>
          <div className="space-y-12">
            {[
              { icon: Activity, title: 'Real-Time Market Friction', desc: 'Our proprietary engine simulates African market volatility, regulatory shifts, and competitive maneuvers.' },
              { icon: Users, title: 'Collaborative War-Rooms', desc: 'Form strategic alliances or engage in tactical takeovers with fellow scholars in synchronized scenarios.' },
              { icon: Shield, title: 'Low-Risk High-Fidelity', desc: 'Build your decision-making muscle memory before deploying capital in the real world.' }
            ].map(item => (
              <div key={item.title} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-slate-900 rounded-3xl border border-white/10 p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-12">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">ACTIVE ENGINE: V4.2</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">PORTFOLIO RISK</div>
                <div className="text-4xl font-black text-emerald-500">14.2%</div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">GROWTH FORECAST</div>
                <div className="text-4xl font-black text-white">+28.5%</div>
              </div>
            </div>

            <div className="h-48 flex items-end space-x-4">
              {[40, 70, 50, 90, 60, 80].map((h, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-lg transition-all duration-1000 ${i === 3 ? 'bg-emerald-500' : 'bg-white/10'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Outcomes = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-12">
            Guided by the <br />
            <span className="text-emerald-500">New Guard.</span>
          </h2>
          <div className="space-y-8">
            {[
              { name: 'Kofi Mensah', role: 'HEAD OF SOVEREIGN CAPITAL', desc: '"The feedback is tactical. We treat every project like a Series-A pitch to institutional investors."', image: 'https://picsum.photos/seed/kofi/200/200' },
              { name: 'Amara Okafor', role: 'STRATEGIC OPERATIONS', desc: '"We bridge the gap between institutional theory and the chaotic reality of continental commerce."', image: 'https://picsum.photos/seed/amara/200/200' }
            ].map(item => (
              <div key={item.name} className="bg-surface-low p-8 rounded-3xl border border-slate-100 flex items-center space-x-8">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover grayscale" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-black text-botanical-950">{item.name}</h4>
                  <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mb-2">{item.role}</div>
                  <p className="text-sm text-slate-500 font-medium italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-botanical-950 p-12 rounded-3xl text-white">
          <h3 className="text-2xl font-black mb-12">The Outcomes Portfolio</h3>
          <div className="space-y-12 mb-16">
            {[
              { label: 'VENTURE SUCCESS RATE', value: '82%', progress: 82 },
              { label: 'CAPITAL RAISED (AVG)', value: '$1.2M', progress: 65 },
              { label: 'GLOBAL PARTNER PLACEMENT', value: '94%', progress: 94 }
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                  <span className="text-xl font-black text-emerald-500">{item.value}</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-emerald-500 pl-8 py-2">
            <p className="text-slate-400 text-sm font-medium italic mb-4">
              "ABC didn't just give me a degree; they gave me the blueprint and the network to build a pan-African logistics empire."
            </p>
            <cite className="text-[10px] font-black uppercase tracking-widest text-emerald-500">— FOUNDING SCHOLAR, '22</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 bg-surface-low text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-7xl md:text-9xl font-black text-botanical-950 tracking-tighter mb-12 leading-[0.8]">
          Architect Your <br /> Legacy.
        </h2>
        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto mb-16">
          Applications for the next cohort are now being reviewed. Secure your seat at the vanguard of African business.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-emerald-500 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-2xl">
            Apply for Admission
          </button>
          <button className="bg-white text-botanical-950 border border-slate-200 px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all active:scale-95">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};

export const Experience = () => {
  return (
    <>
      <Hero />
      <ProcessSteps />
      <Architectures />
      <SimulationLabDeepDive />
      <Outcomes />
      <FinalCTA />
    </>
  );
};
