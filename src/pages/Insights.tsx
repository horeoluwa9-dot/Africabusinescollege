import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight, Download, Mail, ArrowLeft, ArrowRight as ArrowRightIcon, Linkedin, Twitter } from 'lucide-react';

export const Insights = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Insights & Intelligence</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-12 uppercase">
                Architecting the <br />
                <span className="text-emerald-500 italic">African Future</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                The authoritative journal for African sovereign leadership. Critical research and operational playbooks for the continent's next economic decade.
              </p>
            </div>
          </div>

          {/* Featured Report Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 relative rounded-[40px] overflow-hidden aspect-[21/9] min-h-[400px] group cursor-pointer"
          >
            <img 
              src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_5.png?alt=media&token=48021020-001c-438c-8594-551711200000" 
              alt="Featured Report" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-botanical-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-12 md:p-20 max-w-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Special Report</span>
                <span className="text-white/60 text-[8px] font-black uppercase tracking-widest">12 MIN READ</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight mb-8">
                The Sovereign Alpha: How African Institutional Capital is Redefining Global Risk.
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                  <img src="https://picsum.photos/seed/dean/100/100" alt="Dr. Elias Ndlovu" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-tight text-sm">Dr. Elias Ndlovu</h4>
                  <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Dean of Research</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-6 md:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            {['All Insights', 'Entrepreneurship', 'Capital Markets', 'Public Policy', 'Digital Economy', 'Governance'].map((filter, i) => (
              <button 
                key={filter} 
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  i === 0 ? 'bg-emerald-500 text-white' : 'bg-white border border-slate-200 text-slate-400 hover:border-emerald-500 hover:text-emerald-500'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filtered By</span>
            <Filter className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                cat: 'GOVERNANCE', 
                time: '8 MIN READ', 
                title: 'Restructuring Urban Legacies: The Rise of Pan-African Smart Cities.', 
                desc: 'How decentralization and localized energy grids are transforming the blueprint of the African metropolis.',
                author: 'AMARA OKAFOR'
              },
              { 
                cat: 'MARKETS', 
                time: '15 MIN READ', 
                title: 'The AfCFTA Playbook: Navigating Cross-Border Liquidity in 2025.', 
                desc: 'Analyzing the regulatory shifts enabling seamless capital flow across the continental free trade zone.',
                author: 'KOFI MENSAH'
              },
              { 
                cat: 'STRATEGY', 
                time: '12 MIN READ', 
                title: 'Sovereign Leadership: Beyond the Quarterly Earnings Cycle.', 
                desc: 'Why the most successful African CEOs are prioritizing long-term social utility over short-term returns.',
                author: 'FATIMA DIOP'
              }
            ].map((insight, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-[32px] overflow-hidden mb-8 shadow-sm">
                  <img src={i === 0 ? "https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_0.png?alt=media&token=48021020-001c-438c-8594-551711200000" : i === 1 ? "https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_6.png?alt=media&token=48021020-001c-438c-8594-551711200000" : "https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_9.png?alt=media&token=48021020-001c-438c-8594-551711200000"} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest">{insight.cat}</span>
                  <span className="text-slate-300 text-[8px] font-black uppercase tracking-widest">•</span>
                  <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest">{insight.time}</span>
                </div>
                <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter leading-tight mb-4 group-hover:text-emerald-500 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                  {insight.desc}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{insight.author}</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dives Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4 block">PREMIUM SERIES CONTENT</span>
              <h2 className="text-5xl font-black tracking-tighter text-botanical-950 uppercase">The Deep Dives</h2>
            </div>
            <div className="flex space-x-4">
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { part: 'PART 1 OF 3 • MINING', title: 'Mining the Future: Strategic Minerals and African Agency.', desc: 'An exhaustive investigation into the global race for lithium and cobalt, and the policy frameworks ensuring local value retention.' },
              { part: 'PART 2 OF 4 • AGRITECH', title: "Agritech Revolution: Securing the Continent's Food Supply.", desc: 'Examining the intersection of satellite imaging, micro-finance, and small-scale farming in East Africa.' },
              { part: 'PART 3 OF 6 • CAPITAL', title: 'Venture Capital Maturity: From Hype to High-Yield.', desc: 'A data-driven look at exit strategies and IPO readiness for African unicorns in the next 36 months.' }
            ].map((dive, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between group cursor-pointer">
                <div>
                  <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest mb-6 block">{dive.part}</span>
                  <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter leading-tight mb-6">
                    {dive.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12">
                    {dive.desc}
                  </p>
                </div>
                <button className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-botanical-950 group-hover:text-emerald-500 transition-colors">
                  <span>Access Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Research & Whitepapers */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter text-botanical-950 uppercase">Institutional Research & Whitepapers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '2024 Africa Economic Outlook Report', desc: 'Comprehensive analysis of macroeconomic trends across 54 nations, focusing on debt sustainability and industrial growth.', color: 'bg-botanical-950' },
              { title: 'The Digital Logistics Whitepaper', desc: 'Mapping the technological infrastructure required to fulfill the promise of the continental free trade area.', color: 'bg-emerald-900' }
            ].map((paper, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[40px] flex items-center space-x-12 group cursor-pointer">
                <div className={`${paper.color} w-32 h-44 rounded-lg shadow-2xl shrink-0 flex flex-col justify-end p-4 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Download className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-8 h-1 bg-emerald-500 mb-2" />
                  <span className="text-[6px] font-black text-white uppercase tracking-widest leading-tight">Institutional Report</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tight mb-4">{paper.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">{paper.desc}</p>
                  <button className="flex items-center space-x-2 text-[8px] font-black uppercase tracking-widest text-emerald-600">
                    <Download className="w-3 h-3" />
                    <span>Download Executive PDF (4.2 MB)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading Voices */}
      <section className="py-32 px-6 md:px-12 bg-botanical-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Leading Voices</h2>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">EDITORIAL BOARD</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: 'Dr. Olowu Ade', role: 'POLICY LEAD' },
              { name: 'Zara Ibrahim', role: 'MARKET ANALYST' },
              { name: 'Joel Tsegaye', role: 'SENIOR FELLOW' },
              { name: 'Nia Mbeki', role: 'VENTURE PARTNER' }
            ].map((voice, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-8 border-4 border-white/5 group-hover:border-emerald-500 transition-all duration-500">
                  <img src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_11.png?alt=media&token=48021020-001c-438c-8594-551711200000" alt={voice.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-2">{voice.name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{voice.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Weekly Sovereign */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[60px] p-12 md:p-24 text-center">
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">The Weekly Sovereign</h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
            Join 25,000+ institutional leaders receiving our curated intelligence on African strategy every Sunday morning.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your institutional email" 
              className="flex-1 bg-white border border-slate-200 rounded-xl px-6 py-4 text-botanical-950 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button className="bg-botanical-950 text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all">
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-[8px] font-black uppercase tracking-widest text-slate-400">ENCRYPTED. PRIVACY PROTECTED. NO COMMERCIAL SPAM.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-white text-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <span className="text-[20vw] font-black uppercase tracking-tighter">VERIDIAN</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-botanical-950 mb-12 uppercase leading-[0.9] relative z-10">
            Shape the <br /> Sovereign Future.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="bg-emerald-500 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20">
              Explore Programs
            </button>
            <button className="bg-white border border-slate-200 text-botanical-950 px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all">
              Partner with the Lab
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
