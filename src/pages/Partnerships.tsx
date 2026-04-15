import React from 'react';
import { motion } from 'motion/react';
import { Handshake, Globe, Zap, Users, Microscope, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Partnerships = () => {
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
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Partnerships</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8">
              Building With <br />
              <span className="text-emerald-500 italic">Leading</span> <br />
              Institutions
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-12">
              ABC collaborates across borders to redefine the boundaries of global leadership, innovation, and sustainable impact. Together, we are architecting the future of industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-slate-100 rounded-[40px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_3.png?alt=media&token=8679789b-877f-479c-889b-792f9c375fd3" 
                alt="Partnerships" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaborative Ecosystem */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter text-botanical-950 mb-4 uppercase">Our Collaborative Ecosystem</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              We align with partners who share our commitment to precision, luminescence, and transformative growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {['Universities', 'Businesses', 'Investors', 'Innovation Hubs', 'Global Partners'].map(tab => (
                <button key={tab} className="px-6 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 rounded-[40px] overflow-hidden border border-slate-200">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-white aspect-square flex items-center justify-center p-12 group">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <Handshake className="w-8 h-8 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways We Collaborate */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter text-botanical-950 uppercase">Ways We Collaborate</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Strategic Innovation Ecosystems */}
            <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[40px] p-12 shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <Zap className="w-12 h-12 text-emerald-500 mb-8" />
                <h3 className="text-3xl font-black text-botanical-950 mb-6 uppercase tracking-tighter">Strategic Innovation Ecosystems</h3>
                <p className="text-lg text-slate-500 font-medium max-w-xl mb-12 leading-relaxed">
                  Establish deep institutional roots by co-founding research labs, innovation centers, and sector-specific excellence hubs within our global campus network.
                </p>
                <button className="bg-botanical-950 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all">
                  Launch a Lab
                </button>
              </div>
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
                <Zap className="w-64 h-64" />
              </div>
            </div>

            {/* Talent Pipeline */}
            <div className="lg:col-span-4 bg-emerald-50 rounded-[40px] p-12 flex flex-col justify-between">
              <div>
                <Users className="w-12 h-12 text-emerald-500 mb-8" />
                <h3 className="text-2xl font-black text-botanical-950 mb-6 uppercase tracking-tighter">Talent Pipeline</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Exclusive access to ABC's high-performance graduates and research fellows through dedicated recruitment tracks.
                </p>
              </div>
            </div>

            {/* Joint R&D */}
            <div className="lg:col-span-4 bg-slate-100 rounded-[40px] p-12 flex flex-col justify-between">
              <div>
                <Microscope className="w-12 h-12 text-botanical-950 mb-8" />
                <h3 className="text-2xl font-black text-botanical-950 mb-6 uppercase tracking-tighter">Joint R&D</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Collaborate on pioneering research initiatives that solve real-world industrial challenges at speed.
                </p>
              </div>
            </div>

            {/* Global Network Expansion */}
            <div className="lg:col-span-8 relative rounded-[40px] overflow-hidden group min-h-[400px]">
              <img src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_13.png?alt=media&token=8679789b-877f-479c-889b-792f9c375fd3" alt="Network" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/80 via-botanical-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-12">
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Global Network Expansion</h3>
                <p className="text-slate-300 font-medium max-w-md">Bridging the gap between continental markets and global standards through shared infrastructure and knowledge transfer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantifiable Impact */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black tracking-tighter text-botanical-950 mb-12 uppercase">Quantifiable Impact <br /> Through Unity</h2>
              <div className="space-y-12">
                {[
                  { id: '01', title: 'Knowledge Acceleration', desc: 'Partnership cycles reduce R&D deployment time by an average of 40% compared to traditional models.' },
                  { id: '02', title: 'Economic Resilience', desc: 'Joint initiatives have injected over $200M into localized innovation ecosystems across emerging markets.' },
                  { id: '03', title: 'Leadership Legacy', desc: 'Developing a new class of leaders equipped with multi-disciplinary global perspectives.' }
                ].map(item => (
                  <div key={item.id} className="flex space-x-8">
                    <span className="text-5xl font-black text-slate-200 leading-none">{item.id}</span>
                    <div>
                      <h4 className="text-xl font-black text-botanical-950 uppercase mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Global Partners', value: '500+' },
                { label: 'Joint Graduates', value: '12k+' },
                { label: 'Venture Success', value: '85%' },
                { label: 'Partner Nations', value: '42' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                  <span className="text-4xl font-black text-botanical-950 block mb-2">{stat.value}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner with ABC Form */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto bg-botanical-950 rounded-[60px] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-white tracking-tighter mb-8 uppercase">Partner with ABC</h2>
            <p className="text-xl text-slate-400 font-medium mb-16 max-w-2xl">
              Begin a high-velocity collaboration that scales your impact. Our team typically responds to inquiries within 48 hours.
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Organization Name</label>
                <input type="text" placeholder="e.g. Core Solutions" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Partnership Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                  <option>Innovation Hub</option>
                  <option>Corporate Training</option>
                  <option>Research Collaboration</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                <input type="email" placeholder="contact@domain.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Collaboration Intent</label>
                <textarea rows={4} placeholder="Briefly describe your vision for partnering..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
              </div>
              <div className="md:col-span-2 pt-8">
                <button className="w-full bg-emerald-500 text-white py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20">
                  Submit Partnership Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
