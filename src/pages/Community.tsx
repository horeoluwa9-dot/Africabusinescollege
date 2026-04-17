import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Microscope, TrendingUp, MapPin, Calendar, ArrowRight, Share2, Mail, Zap } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

export const Community = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Network of Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8">
              Join a <br />
              Community of <br />
              <span className="text-emerald-500 italic">Builders</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-12">
              Beyond the classroom, ABC is a lifelong ecosystem. Connect with visionary founders, active investors, and the leaders shaping the African frontier.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all">
                Join the Network
              </button>
              <button className="bg-slate-100 text-slate-600 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all">
                View Alumni Outcomes
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-slate-100 rounded-[40px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Community" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/40 to-transparent" />
              
              {/* Floating Stat */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
                    ].map((src, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                        <img src={src} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-[10px] font-black text-white">
                      +12k
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Active Members</span>
                    <span className="text-2xl font-black text-botanical-950">12,400+</span>
                  </div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Across 42 African Nations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Network Grid */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Alumni Network */}
          <div className="lg:col-span-8 bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <GraduationCap className="w-12 h-12 text-emerald-500 mb-8" />
              <h3 className="text-3xl font-black text-botanical-950 mb-6 uppercase tracking-tighter">Alumni Network</h3>
              <p className="text-lg text-slate-500 font-medium max-w-xl mb-12 leading-relaxed">
                Our global alumni occupy executive seats in the continent's most influential firms and high-growth startups.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                ].map((src, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                    <img src={src} alt="Alumni" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">+2k</span>
            </div>
          </div>

          {/* Founder Community */}
          <div className="lg:col-span-4 bg-emerald-900 rounded-[40px] p-12 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <Microscope className="w-12 h-12 text-emerald-400 mb-8" />
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Founder Community</h3>
              <p className="text-emerald-100/60 font-medium leading-relaxed">
                Exclusive access to build-sprints, co-founder matching, and first-check resources.
              </p>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
              <Microscope className="w-48 h-48" />
            </div>
          </div>

          {/* Investor Connections */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-[40px] p-12">
            <TrendingUp className="w-12 h-12 text-emerald-500 mb-8" />
            <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tighter">Investor Connections</h3>
            <p className="text-slate-500 font-medium">Direct lines to over 150 VC firms and angel syndicates focused on Africa.</p>
          </div>

          {/* Regional Meetups */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-[40px] p-12">
            <MapPin className="w-12 h-12 text-emerald-500 mb-8" />
            <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tighter">Regional Meetups</h3>
            <p className="text-slate-500 font-medium">Monthly physical gatherings in Nairobi, Lagos, Accra, and Johannesburg.</p>
          </div>

          {/* Venture Showcases */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-[40px] p-12">
            <Zap className="w-12 h-12 text-emerald-500 mb-8" />
            <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tighter">Venture Showcases</h3>
            <p className="text-slate-500 font-medium">Quarterly demo days for alumni-led companies to pitch to global partners.</p>
          </div>
        </div>
      </section>

      {/* Cohort Experience */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative rounded-[40px] overflow-hidden aspect-video">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80" alt="Cohort" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-emerald-500/10" />
          </div>
          <div>
            <h2 className="text-5xl font-black tracking-tighter text-botanical-950 mb-8 uppercase">The Pan-African Cohort Experience</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
              ABC students don't just study together; they build together. Our unique cohort model groups individuals across borders, creating cross-pollination of ideas between East, West, and Southern Africa.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div className="border-l-4 border-emerald-500 pl-8">
                <span className="text-4xl font-black text-botanical-950 block mb-2">42</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Countries Represented</span>
              </div>
              <div className="border-l-4 border-emerald-500 pl-8">
                <span className="text-4xl font-black text-botanical-950 block mb-2">85%</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cross-Border Ventures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Gatherings */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-black tracking-tighter text-botanical-950 uppercase">Upcoming Gatherings</h2>
            <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:translate-x-2 transition-transform">
              <span>All Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { date: 'DEC 12', title: 'ABC Annual Summit 2026', location: 'Lagos, Nigeria • Online', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
              { date: 'JAN 05', title: "Founders' Private Dinner", location: 'Nairobi, Kenya • Invite Only', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' },
              { date: 'FEB 10', title: 'Regional Meetup: Joburg', location: 'Johannesburg, RSA • In-Person', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80' }
            ].map((event, i) => (
              <div key={i} className="bg-white rounded-[40px] overflow-hidden border border-slate-100 group">
                <div className="aspect-video relative overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-botanical-950">
                    {event.date}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-xl font-black text-botanical-950 mb-4 uppercase tracking-tight">{event.title}</h3>
                  <p className="text-slate-400 text-xs font-medium mb-8 uppercase tracking-widest">{event.location}</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-500 transition-colors">
                    {i === 1 ? 'Request Invite' : i === 2 ? 'RSVP' : 'Register Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-6 md:px-12 bg-botanical-950 relative overflow-hidden">
        <AnimatedBackground intensity="high" className="opacity-40" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative z-10">
              <h2 className="text-6xl font-black tracking-tighter text-white mb-12 uppercase leading-[0.9]">
                The impact of our <br /> network is measured <br /> in <span className="text-emerald-500 italic">realized potential</span>.
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12 max-w-xl">
                ABC Alumni have collectively raised over $450M in seed funding and generated 10,000+ jobs across the continent.
              </p>
              <button className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20">
                Explore the Report
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {[
                { label: 'Capital Raised', value: '$450M+' },
                { label: 'Active Startups', value: '120+' },
                { label: 'Exits to Date', value: '14' },
                { label: 'Employment Rate', value: '92%' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-sm">
                  <span className="text-4xl font-black text-emerald-500 block mb-2">{stat.value}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
