import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight,
  ChevronRight,
  Monitor
} from 'lucide-react';
import { PROGRAMS, LABS, STUDIO_TOOLS, SESSIONS } from '../constants';
import { Program, Lab, StudioTool, Session } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative bg-botanical-950 pt-48 pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">{t('home.institutionalExcellence')}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-8">
            {t('home.heroTitle').split(' ').slice(0, 2).join(' ')} <br />
            {t('home.heroTitle').split(' ').slice(2, 4).join(' ')} <br />
            <span className="text-emerald-500 luminescence-glow">{t('home.heroTitle').split(' ').slice(4).join(' ')}</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-lg mb-12">
            {t('home.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-emerald-500 text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/20">
              {t('home.explorePrograms')}
            </button>
            <button className="border border-white/20 text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all active:scale-95">
              {t('home.viewResearch')}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
            <img 
              src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_10.png?alt=media&token=8679789b-877f-479c-889b-792f9c375fd3" 
              alt="Leadership" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/60 to-transparent" />
          </div>
          {/* Floating elements could go here */}
        </motion.div>
      </div>

      {/* Partner Logos */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 border-t border-white/5 pt-12">
        <p className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8 text-center">Strategic Partners & Institutions</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
          {['GLOBALBANK', 'AFRISTRATEGY', 'LUMINA TECH', 'SAHARA GAS', 'EQUITY GROUP'].map(partner => (
            <span key={partner} className="text-sm font-black text-white tracking-widest">{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Alumni Network', value: '12K+' },
    { label: 'Placement Rate', value: '94%' },
    { label: 'African Nations', value: '45+' },
    { label: 'Industry Partners', value: '150+' }
  ];

  return (
    <section className="py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map(stat => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-botanical-950 mb-2 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Programs = () => {
  const [activeTab, setActiveTab] = useState('Executive');
  const tabs = ['Executive', 'Advanced', 'Beginner'];

  return (
    <section className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-6">Designed for Every Stage of Leadership</h2>
            <p className="text-slate-500 font-medium">Select a path that aligns with your professional trajectory and institutional goals.</p>
          </div>
          <div className="flex bg-white p-1.5 rounded-xl border border-slate-200">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                  activeTab === tab ? 'bg-botanical-950 text-white shadow-lg' : 'text-slate-400 hover:text-botanical-950'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map(program => (
            <div key={program.id} className="bg-white p-10 rounded-2xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group cursor-pointer">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-emerald-500" />
                </div>
                <span className="text-[8px] font-black tracking-widest text-emerald-500 uppercase">{program.tag}</span>
              </div>
              <h3 className="text-2xl font-black text-botanical-950 mb-4 group-hover:text-emerald-500 transition-colors">{program.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12">{program.excerpt}</p>
              <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-botanical-950 group-hover:translate-x-2 transition-transform">
                <span>Explore Curriculum</span>
                <ChevronRight className="w-4 h-4 text-emerald-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/3] bg-botanical-950 rounded-3xl p-12 flex items-center justify-center overflow-hidden group">
            <img 
              src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_1.png?alt=media&token=8679789b-877f-479c-889b-792f9c375fd3" 
              alt="Ecosystem" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#00D98E_0%,transparent_70%)]" />
            <div className="relative z-10 w-full max-w-md">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10">
                <div className="aspect-video bg-botanical-950 rounded-lg flex items-center justify-center border border-white/5">
                  <span className="text-emerald-500 font-black tracking-widest text-[10px] uppercase">Learning Platform</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500 rounded-2xl -z-10 blur-3xl opacity-20" />
        </div>

        <div>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-8 leading-tight">
            The Hybrid <span className="text-emerald-500">Ecosystem</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium mb-12">
            Our proprietary Business Instrument Studio merges physical seminar intensity with digital precision. Experience simulations that mirror the complexity of African market dynamics.
          </p>
          
          <div className="space-y-8">
            {[
              { title: 'Live Case Analysis', desc: 'Real-time collaboration on active market challenges from partner institutions.' },
              { title: 'Cohort-Based Synergy', desc: 'Forge deep bonds with diverse professionals from across the continent.' }
            ].map(item => (
              <div key={item.title} className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                </div>
                <div>
                  <h4 className="font-black text-botanical-950 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SimulationLabs = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-6">Simulation Labs</h2>
          <p className="text-slate-500 font-medium">Precision environments designed to stress-test leadership strategies without real-world risk.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Lab */}
          <div className="lg:col-span-5 bg-botanical-950 rounded-3xl p-12 relative overflow-hidden group cursor-pointer min-h-[400px]">
            <img 
              src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_8.png?alt=media&token=8679789b-877f-479c-889b-792f9c375fd3" 
              alt="War Room" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="w-32 h-32 border-4 border-emerald-500 rounded-full" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-12">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-white mb-6">The War Room</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">High-pressure crisis management simulations involving supply chain disruptions and political shifts.</p>
                <ArrowRight className="w-6 h-6 text-emerald-500 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

          {/* Small Labs */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {LABS.filter(l => l.type === 'small').map(lab => (
              <div key={lab.id} className="bg-surface-low p-10 rounded-3xl border border-slate-100 hover:border-emerald-500/30 transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
                <h4 className="text-xl font-black text-botanical-950 mb-4">{lab.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{lab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InstrumentStudio = () => {
  return (
    <section className="bg-botanical-950 py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-black text-white tracking-tighter mb-20">The Instrument Studio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_TOOLS.map(tool => (
            <div key={tool.id} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all group cursor-pointer">
              <h4 className="text-lg font-black text-white mb-4 group-hover:text-emerald-500 transition-colors">{tool.title}</h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sessions = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-8">Scholarships for Impact</h2>
          <p className="text-slate-500 font-medium mb-12 leading-relaxed">
            We are committed to ensuring that financial barriers do not impede the progress of Africa's most promising leaders.
          </p>
          <div className="bg-emerald-500/5 border border-emerald-500/10 p-10 rounded-2xl">
            <h4 className="font-black text-botanical-950 mb-4">The Mandela Fellowship</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">Full tuition coverage for civic leaders across the 54 African states.</p>
            <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 border-b border-emerald-500/30 hover:border-emerald-500 transition-all pb-1">Apply for Funding</button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="flex justify-between items-center mb-12 border-b border-slate-100 pb-6">
            <h3 className="text-xl font-black text-botanical-950 tracking-tight">Upcoming Sessions</h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors">View Calendar</button>
          </div>
          <div className="space-y-6">
            {SESSIONS.map(session => (
              <div key={session.id} className="bg-surface-low p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-10 group cursor-pointer hover:border-emerald-500/30 transition-all">
                <div className="text-center md:text-left min-w-[80px]">
                  <div className="text-4xl font-black text-botanical-950 tracking-tighter">{session.date.day}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{session.date.month}</div>
                </div>
                <div className="flex-grow">
                  <div className="text-[8px] font-black tracking-widest text-emerald-500 uppercase mb-2">{session.type}</div>
                  <h4 className="text-xl font-black text-botanical-950 mb-2 group-hover:text-emerald-500 transition-colors">{session.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{session.description}</p>
                </div>
                <div className="text-right hidden md:block">
                  <div className="text-[8px] font-black tracking-widest text-slate-400 uppercase mb-1">{session.location}</div>
                  <div className="text-[10px] font-black text-botanical-950 uppercase tracking-widest">{session.attendees}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-botanical-950 relative overflow-hidden">
      <img 
        src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_10.png?alt=media&token=8679789b-877f-479c-889b-792f9c375fd3" 
        alt="CTA Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_bottom_left,#00D98E_0%,transparent_70%)]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
          Apply for the 2025 <br />
          Sovereign MBA Cohort
        </h2>
        <p className="text-slate-400 text-lg font-medium mb-16">Join a lineage of leadership that defines the future of the continent.</p>
        
        <div className="bg-white/5 border border-white/10 p-12 rounded-3xl mb-16 max-w-2xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            {['12', '08', '42'].map((val, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-white tracking-tighter">{val}</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-slate-500 mt-1">{['DAYS', 'HOURS', 'MINS'][i]}</div>
              </div>
            ))}
          </div>
          <div className="text-right">
            <div className="text-[8px] font-black tracking-widest text-emerald-500 uppercase mb-1">APPLICATION DEADLINE</div>
            <div className="text-xl font-black text-white tracking-tight">December 1, 2024</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-emerald-500 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-2xl shadow-emerald-500/20">
            Start Application
          </button>
          <button className="border border-white/20 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all active:scale-95">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <Ecosystem />
      <SimulationLabs />
      <InstrumentStudio />
      <Sessions />
      <CTA />
    </>
  );
};
