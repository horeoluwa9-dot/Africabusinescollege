import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  Rocket, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Globe, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase,
  Quote,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SectionLabel } from '../components/SectionLabel';

export const Community = ({ onPageChange }: { onPageChange: (page: Page, id?: string) => void }) => {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* 🟢 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <AnimatedBackground intensity="low" className="opacity-10" />
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-10"
        >
          <SectionLabel className="mb-8">ABC Global Network</SectionLabel>
          <h1 className="text-6xl md:text-[8vw] font-black text-botanical-950 tracking-tighter uppercase leading-[0.82] mb-12">
            A Network of <br />
            <span className="text-emerald-500 italic">Builders</span> Across Africa
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-2xl md:text-3xl font-medium text-slate-500 leading-tight tracking-tight">
                ABC brings together entrepreneurs, operators, and leaders building across African markets.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onPageChange('join-network')}
                className="bg-botanical-950 text-white px-10 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-2xl shadow-botanical-950/20 flex-1"
              >
                Join the Community
              </button>
              <button 
                onClick={() => onPageChange('programs')}
                className="bg-white text-botanical-950 border border-slate-200 px-10 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all flex-1"
              >
                Explore Programs
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🟢 2. COMMUNITY OVERVIEW */}
      <section className="py-32 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel className="mb-8">The Ecosystem</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black text-botanical-950 tracking-tighter uppercase leading-none mb-8">
                More Than a <br /><span className="text-emerald-500 italic">Learning Platform</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                ABC is an ecosystem of builders where learning continues through collaboration. We bridge the gap between academic theory and the grit required to build in Lagos, Nairobi, and Cairo.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Peer Learning', icon: Users },
                  { title: 'Founder Collaboration', icon: Rocket },
                  { title: 'Investor Access', icon: Globe },
                  { title: 'Regional Networks', icon: MapPin }
                ].map((pillar, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-500 border border-slate-100">
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black text-botanical-950 uppercase tracking-widest">{pillar.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[48px] overflow-hidden border border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                 <img 
                   src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80" 
                   alt="Community Collaboration" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-botanical-950 p-10 rounded-[32px] text-white shadow-2xl max-w-[280px]">
                <Zap className="w-8 h-8 text-emerald-500 mb-6" />
                <p className="text-sm font-medium leading-tight">
                  "Execution doesn't happen in isolation. It happens in the spaces between builders."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 3. COMMUNITY SEGMENTS (Card Grid) */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionLabel className="mb-12 justify-center">Network Segments</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Student Community', 
                desc: 'Active learners across programs', 
                val: 'Active intelligence pulse',
                icon: Target,
                color: 'bg-emerald-50 text-emerald-600'
              },
              { 
                title: 'Founder Network', 
                desc: 'Entrepreneurs building ventures', 
                val: 'Zero-to-one infrastructure',
                icon: Rocket,
                color: 'bg-indigo-50 text-indigo-600'
              },
              { 
                title: 'Alumni Network', 
                desc: 'Graduates operating across industries', 
                val: 'Lifelong growth network',
                icon: ShieldCheck,
                color: 'bg-amber-50 text-amber-600'
              },
              { 
                title: 'Mentors & Experts', 
                desc: 'Operators, investors, and advisors', 
                val: 'Institutional wisdom',
                icon: Briefcase,
                color: 'bg-slate-50 text-slate-600'
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[48px] border border-slate-100 bg-white hover:shadow-2xl transition-all cursor-default group flex flex-col justify-between min-h-[400px]"
              >
                <div>
                  <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-8`}>
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter mb-4 leading-tight">{card.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{card.desc}</p>
                </div>
                <div className="pt-8 border-t border-slate-50">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Value Proposition</div>
                  <div className="text-sm font-black text-botanical-950">{card.val}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 4. WHAT YOU GET (VALUE SECTION) */}
      <section className="py-32 px-6 md:px-12 bg-botanical-950 text-white relative">
        <AnimatedBackground intensity="medium" className="opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <SectionLabel dark className="mb-8">Institutional Value</SectionLabel>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-12">
                Engineered for <br /><span className="text-emerald-500 italic">Access</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-16">
                Belonging to ABC means having Africa's most relevant operational infrastructure at your fingertips.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Access to a network of founders', desc: 'Real-time connection with peers building in 18+ markets.' },
                { title: 'Structured peer collaboration', desc: 'Managed cohorts designed for radical accountability.' },
                { title: 'Exposure to investors and operators', desc: 'Direct lines to capital and industry experts.' },
                { title: 'Opportunities for partnerships', desc: 'Co-building initiatives across sectors and borders.' },
                { title: 'Regional connections across Africa', desc: 'Local nodes providing market-specific intelligence.' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-all flex items-start space-x-6">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 5. REGIONAL NETWORK */}
      <section className="py-32 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-8 justify-center">Ecosystem Presence</SectionLabel>
          <h2 className="text-5xl md:text-[8vw] font-black text-botanical-950 tracking-tighter uppercase leading-none mb-8">
            Regional <br /><span className="text-emerald-500 italic">Network</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed mb-16">
            ABC’s network spans multiple regions, connecting participants across markets and industries.
          </p>
          
          <div className="relative aspect-[16/9] bg-slate-50 rounded-[64px] border border-slate-100 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
             <img 
               src="https://images.unsplash.com/photo-1526772662000-3f88f10c053b?auto=format&fit=crop&w=1200&q=80" 
               alt="Africa Map Representation" 
               className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 bg-white/10 backdrop-blur-3xl rounded-full border border-white/20 flex items-center justify-center text-white scale-125">
                 <Globe className="w-12 h-12" />
               </div>
             </div>
             {/* Dynamic Hub Tooltips */}
             <div className="absolute inset-0 pointer-events-none">
               {[
                 { top: '25%', left: '45%', label: 'Cairo' },
                 { top: '65%', left: '42%', label: 'Lagos' },
                 { top: '60%', left: '70%', label: 'Nairobi' },
                 { top: '85%', left: '55%', label: 'Cape Town' }
               ].map((pos, i) => (
                 <div key={i} className="absolute hidden md:block" style={{ top: pos.top, left: pos.left }}>
                   <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping mb-2" />
                   <div className="bg-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest text-botanical-950 shadow-xl border border-slate-100">{pos.label}</div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 🟢 6. COMMUNITY IN ACTION (SOCIAL PROOF) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionLabel className="mb-12 justify-center">Digital Pulse</SectionLabel>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-[6vw] font-black text-botanical-950 tracking-tighter uppercase leading-none mb-8">
              Community <br /><span className="text-emerald-500 italic">In Action</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              {/* Mock Dashboard UI */}
              <div className="bg-white rounded-[40px] border border-slate-200 shadow-2xl p-8 overflow-hidden relative group">
                <div className="flex items-center space-x-4 mb-10 border-b border-slate-50 pb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl" />
                  <div className="flex-1 space-y-2">
                    <div className="w-24 h-2 bg-slate-100 rounded" />
                    <div className="w-16 h-1 bg-slate-50 rounded" />
                  </div>
                  <Lock className="w-4 h-4 text-slate-300" />
                </div>
                
                <div className="space-y-8 blur-[2px] pointer-events-none transition-all group-hover:blur-0 duration-700">
                  {[
                    { 
                      author: 'Kofi M.', 
                      role: 'ABC \'25 Founder', 
                      content: 'Just closed our seed round! The unit economics lab in the ABC portal helped us refine our pitch deck. Huge thanks to the Lagos Hub peers who reviewed our model last week.', 
                      tags: '#Founders #Funding #Impact'
                    },
                    { 
                      author: 'Amara O.', 
                      role: 'Operations Lead', 
                      content: 'Exploring expansion into the Francophone market. Looking for operators in Dakar who have experience navigating local logistics regulations. DM me if you\'re available for a chat.', 
                      tags: '#Execution #Expansion #Senegal'
                    }
                  ].map((post, i) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="flex items-center space-x-4 mb-4">
                         <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center font-black text-emerald-600 text-[10px]">{post.author.split(' ')[0][0]}</div>
                         <div>
                            <div className="text-xs font-black text-botanical-950 uppercase tracking-tight">{post.author}</div>
                            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{post.role}</div>
                         </div>
                      </div>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">{post.content}</p>
                      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{post.tags}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent flex items-center justify-center">
                  <div className="bg-botanical-950 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl relative z-10 transition-transform hover:scale-105 active:scale-95">
                    Institutional Access Required
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div className="p-10 bg-white rounded-[40px] border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-botanical-950 uppercase tracking-tight mb-4 leading-tight">Founder Conversations</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Join specialized channels focused on capital raising, market entry, and product-market fit.
                </p>
              </div>
              <div className="p-10 bg-white rounded-[40px] border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-500">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-botanical-950 uppercase tracking-tight mb-4 leading-tight">Insight Exchanges</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Access weekly briefings and data snippets shared by top operators scaling in the trenches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. TESTIMONIALS / STORIES */}
      <section className="py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <SectionLabel className="mb-12 justify-center">Voices of ABC</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                quote: "The ABC network is my most valuable infrastructure. It's where I found my lead investor and my current CTO.",
                author: "James Adedayo",
                role: "Founder, FintechLoom (ABC '24)"
              },
              {
                quote: "Unlike any other business school, ABC connects you to the people who are actually building in Lagos and Nairobi today.",
                author: "Mariam Diallo",
                role: "Operations Director, Dakar Agri"
              },
              {
                quote: "Being admitted to ABC was the catalyst for our market expansion. The peer intelligence is unmatched.",
                author: "Simon Koto",
                role: "CEO, Safelink Logistics"
              }
            ].map((t, i) => (
              <div key={i} className="text-center group">
                 <Quote className="w-12 h-12 text-emerald-100 mx-auto mb-8 group-hover:text-emerald-500 transition-colors" />
                 <p className="text-xl font-medium text-slate-600 italic leading-relaxed mb-8">"{t.quote}"</p>
                 <div className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-1">{t.author}</div>
                 <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest font-mono">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 8. UPCOMING GATHERING */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel className="mb-8">Community Events</SectionLabel>
              <h2 className="text-4xl md:text-[5vw] font-black text-botanical-950 tracking-tighter uppercase leading-none mb-8">
                Upcoming <br /><span className="text-emerald-500 italic">Gathering</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                Our network comes alive during our regional summits, private dinners, and sector roundtables. These are high-stakes spaces for connection.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  { title: "Pan-African Fintech Summit", city: "Lagos", date: "Nov 24, 2026" },
                  { title: "Venture Builder Roundtable", city: "Nairobi", date: "Dec 12, 2026" }
                ].map((ev, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-emerald-500 transition-all hover:translate-x-2">
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{ev.date} • {ev.city}</div>
                      <div className="text-sm font-black text-botanical-950 uppercase tracking-tight">{ev.title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-500" />
                  </div>
                ))}
              </div>
              <button onClick={() => onPageChange('events')} className="text-[10px] font-black text-botanical-950 uppercase tracking-widest border-b-2 border-emerald-500 pb-1 hover:text-emerald-500 transition-colors">
                View Full Calendar
              </button>
            </div>
            <div className="aspect-square bg-slate-100 rounded-[80px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=1000&q=80" 
                alt="Community Gathering" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-8 bottom-8 p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Next Event Capsule</span>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-xl font-black text-botanical-950 uppercase tracking-tight">ABC Demo Day '26</h4>
                <p className="text-sm text-slate-500 font-medium mt-2">The continent's most anticipated cohort graduation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 9. HOW TO JOIN */}
      <section className="py-32 px-6 md:px-12 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <SectionLabel className="mb-12 justify-center">The Gateway</SectionLabel>
          <h2 className="text-5xl md:text-[7vw] font-black text-botanical-950 tracking-tighter uppercase leading-none mb-24">
            How to <br /><span className="text-emerald-500 italic">Join</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="absolute top-12 left-0 right-0 h-px bg-slate-100 hidden md:block" />
            {[
              { step: "01", title: "Apply to a program", desc: "Select the execution lifecycle program that fits your current builder stage." },
              { step: "02", title: "Get admitted", desc: "Pass through our vetting process focused on operational intensity and ambition." },
              { step: "03", title: "Join the ABC community", desc: "Gain instant access to the digital infrastructure and regional hubs." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 group">
                <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-[32px] flex items-center justify-center mx-auto mb-8 text-botanical-950 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-500 shadow-xl">
                  <span className="text-4xl font-black tracking-tighter italic">{step.step}</span>
                </div>
                <h4 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter mb-4">{step.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <button 
              onClick={() => onPageChange('programs')}
              className="bg-emerald-500 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* 🧠 10. NETWORK VALUE STATEMENT */}
      <section className="py-48 bg-botanical-950 text-white relative overflow-hidden text-center">
         <AnimatedBackground intensity="high" className="opacity-10" />
         <div className="max-w-5xl mx-auto px-6 relative z-10">
            <Quote className="w-16 h-16 text-emerald-500 mx-auto mb-16 opacity-30" />
            <h2 className="text-4xl md:text-[5vw] font-black tracking-tighter uppercase leading-[0.85] mb-4">
              ABC is not just a place to learn — <br />
              it is a network you build <br />
              <span className="text-emerald-500 italic">within and grow through.</span>
            </h2>
         </div>
      </section>

      {/* 🟢 11. FINAL CTA SECTION */}
      <section className="py-48 px-6 text-center bg-white relative">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-12 justify-center">Admission Cycle 2026</SectionLabel>
          <h2 className="text-6xl md:text-[9vw] font-black text-botanical-950 tracking-tighter uppercase mb-16 leading-[0.82]">
            Join a Network <br />
            <span className="text-emerald-500 italic">That Builds</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onPageChange('programs')}
              className="bg-botanical-950 text-white px-16 py-8 text-[12px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-2xl shadow-botanical-950/20"
            >
              Apply Now
            </button>
            <button 
              onClick={() => onPageChange('programs')}
              className="bg-slate-100 text-botanical-950 px-16 py-8 text-[12px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all active:scale-95"
            >
              Explore Programs
            </button>
          </div>
          <p className="mt-12 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            Institutional Infrastructure • 2026 Core Cycle • Africa Business College
          </p>
        </div>
      </section>

      {/* Impact Section Restore (Impact of our network is measured in realized potential) */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto">
           <SectionLabel className="mb-8 justify-center">Institutional Pulse</SectionLabel>
           <h3 className="text-3xl md:text-[4vw] font-black text-botanical-950 tracking-tighter uppercase mb-12">
            The impact of our network is measured in <br />
            <span className="text-emerald-500 italic">realized potential</span>
           </h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-200">
             {[
               { val: '2.4K', label: 'Leaders' },
               { val: '18', label: 'Countries' },
               { val: '$42M', label: 'Capital Raised' },
               { val: '92%', label: 'Launch Rate' }
             ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-black text-botanical-950 tracking-tight mb-2 italic">0{i+1}. {stat.val}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};
