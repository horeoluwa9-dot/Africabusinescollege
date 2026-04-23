import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, MessageSquare, Send, CheckCircle2, Clock, Users, Shield } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { Page } from '../components/Layout';

interface InquireDetailsProps {
  onPageChange: (page: Page) => void;
}

const InquireDetails: React.FC<InquireDetailsProps> = ({ onPageChange }) => {
  const [formState, setFormState] = React.useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  if (formState === 'success') {
    return (
      <div className="pt-24 min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-emerald-500/20">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-black text-botanical-950 uppercase tracking-tighter mb-8 leading-tight">Inquiry Received.</h2>
          <p className="text-slate-500 text-lg font-medium mb-12">
            One of our senior advisors will review your institutional requirements and contact you within 24 business hours to define the next steps.
          </p>
          <button 
            onClick={() => onPageChange('home')}
            className="bg-botanical-950 text-white px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all font-mono"
          >
            Back to Hub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionLabel className="mb-8">Contact Center</SectionLabel>
            <h1 className="text-4xl md:text-6xl font-black text-botanical-950 tracking-tighter mb-12 uppercase leading-[0.85]">
              Institutional <br /> <span className="text-emerald-500 italic">Inquiry.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-16">
              Connect with our admissions and institutional partnership teams to discuss program alignment, corporate cohorts, or advisory services.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Admissions Inquiry', value: 'admissions@abc.edu' },
                { icon: Globe, label: 'Institutional Partnerships', value: 'partners@abc.edu' },
                { icon: MapPin, label: 'Campus HQ', value: 'Victoria Island, Lagos, NG' }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-emerald-500 group-hover:text-white transition-all text-emerald-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-black text-botanical-950">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-slate-100 relative z-10">
              <h3 className="text-2xl font-black text-botanical-950 uppercase mb-8 tracking-tight">Direct Inquiry Portal</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[8px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                     <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500 transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[8px] font-black uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                     <input required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500 transition-all" />
                   </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[8px] font-black uppercase tracking-widest text-slate-400 ml-4">Inquiry Focus</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Admission', 'Pricing', 'Corporate', 'Faculty', 'Other'].map(type => (
                      <button key={type} type="button" className="py-3 px-4 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-emerald-500 transition-all text-slate-500">
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[8px] font-black uppercase tracking-widest text-slate-500 ml-4">Specific Requirements</label>
                   <textarea required rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500 transition-all resize-none"></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full bg-emerald-500 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 disabled:opacity-50 flex items-center justify-center space-x-3"
                >
                  {formState === 'submitting' ? (
                    <Clock className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
            {/* Design accents */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-slate-500/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Users, title: 'Advisory Board', text: 'Strategic guidance from the vanguard of African business policy.' },
            { icon: MessageSquare, title: 'Office Hours', text: 'Daily synchronous support between 09:00 and 18:00 WAT.' },
            { icon: Shield, title: 'Secure Comms', text: 'Institutional-grade data protection for all stakeholder data.' }
          ].map((feature, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-botanical-950" />
              </div>
              <h4 className="text-xl font-black text-botanical-950 uppercase mb-4 tracking-tighter">{feature.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InquireDetails;
