import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, ArrowRight, Handshake, Newspaper, Users } from 'lucide-react';
import { Page } from '../components/Layout';
import { useToast } from '../contexts/ToastContext';

interface ContactProps {
  onPageChange: (page: Page) => void;
}

export const Contact = ({ onPageChange }: ContactProps) => {
  const { showToast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Message sent successfully! Our team will contact you soon.');
    // Keep on page, maybe clear form if we had state
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative pt-0 pb-16 px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 pt-4"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8 uppercase">
              Get in Touch <br />
              <span className="text-emerald-500 italic">with ABC</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-12">
              Our team is here to support your journey towards business excellence. Whether you are a prospective student, a potential partner, or a member of our community, we look forward to hearing from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="ABC Campus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Cards */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Admissions Support */}
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-emerald-500 transition-colors">
              <div>
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors">
                  <Users className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tight">Admissions Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-500">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-medium">admissions@abc.edu</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-500">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-medium">Mon-Fri: 08:00 - 17:00 WAT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Inquiries */}
            <div className="bg-botanical-950 p-10 rounded-[40px] shadow-sm flex flex-col justify-between group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors">
                  <Handshake className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Partnership Inquiries</h3>
                <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8">
                  Scale your impact with ABC's executive networks and simulation labs.
                </p>
                <button 
                  onClick={() => onPageChange('partnerships')}
                  className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  <span>Collaborate With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                <Handshake className="w-32 h-32 text-white" />
              </div>
            </div>

            {/* Media & Insights */}
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-emerald-500 transition-colors">
              <div>
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors">
                  <Newspaper className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tight">Media & Insights</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8">
                  Press kits and interview requests.
                </p>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 border-b border-emerald-600 pb-1">PRESS@ABC.EDU</span>
              </div>
            </div>

            {/* General Support */}
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-emerald-500 transition-colors">
              <div>
                <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tight">General Support</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8">
                  Dedicated assistance for current students and faculty members.
                </p>
                <button 
                  onClick={() => onPageChange('login-student')}
                  className="w-full py-3 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-emerald-500 hover:text-emerald-500 transition-all font-bold"
                >
                  Visit Student Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start a Conversation Form */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4 block">DIRECT MESSAGE</span>
          <h2 className="text-4xl md:text-5xl font-black text-botanical-950 tracking-tighter mb-16 uppercase">Start a Conversation</h2>
          
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-botanical-950 focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
              <input required type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-botanical-950 focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Inquiry Type</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-botanical-950 focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                <option>Undergraduate Programs</option>
                <option>Executive Education</option>
                <option>Partnership Inquiry</option>
                <option>Media Request</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
              <textarea required rows={6} placeholder="How can we help you achieve your goals?" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-botanical-950 focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
            </div>
            <div className="md:col-span-2 pt-8 flex justify-center">
              <button type="submit" className="bg-botanical-950 text-white px-16 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl shadow-botanical-950/10 active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-botanical-950 mb-8 uppercase">Digitally Delivered, <br /> Globally Accessible</h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-12">
              ABC is a digital-first institution built for access across African markets. Our learning model combines live sessions, simulations, and collaborative online experiences.
            </p>
          </div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80" alt="Global Reach Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-botanical-950/10" />
          </div>
        </div>
      </section>
    </div>
  );
};
