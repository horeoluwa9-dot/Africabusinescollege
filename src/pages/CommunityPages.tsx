import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Calendar, Globe, MapPin, Zap, Rocket, ChevronRight, Target, Shield, BookOpen } from 'lucide-react';
import { Page } from '../components/Layout';

interface Props {
  onBack: () => void;
  onPageChange: (page: Page, id?: string) => void;
}

export const JoinNetwork = ({ onBack, onPageChange }: Props) => (
  <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Community</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-4 block">ABC Network</span>
          <h1 className="text-5xl md:text-7xl font-black text-botanical-950 tracking-tighter uppercase mb-6 leading-none">Join The<br/>Network</h1>
          <p className="text-xl text-slate-500 font-medium mb-10">
            Apply to become part of the continent's most powerful execution network. Access resources, co-founders, regional intelligence, and capital allocation.
          </p>
          <div className="space-y-6">
             <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-botanical-950 mb-1">Strategic Alignment</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Connect with peers building solutions for similar African demographics.</p>
                </div>
             </div>
             <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-botanical-50 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-botanical-950" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-botanical-950 mb-1">Vetted Talent</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Every member has passed rigorous execution tests and capability assessments.</p>
                </div>
             </div>
          </div>
        </div>
        <div className="bg-botanical-950 p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
          <div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Application of Interest</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-10">
              We review applications on a rolling basis. Admission into our core programs automatically grants lifetime network access. For non-alumni, a separate capability assessment is required.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3" />
                Proof of Execution Required
              </li>
              <li className="flex items-center text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3" />
                Interview with Regional Director
              </li>
              <li className="flex items-center text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3" />
                Annual contribution commitment
              </li>
            </ul>
          </div>
          <button onClick={() => onPageChange('application')} className="bg-emerald-500 text-white px-8 py-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all w-full flex items-center justify-between">
            <span>Apply to a Program</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </div>

    </div>
  </div>
);

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export const AlumniOutcomes = ({ onBack, onPageChange }: Props) => (
  <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>
      <h1 className="text-5xl md:text-7xl font-black text-botanical-950 tracking-tighter uppercase mb-6 animate-fade-in">Alumni Outcomes</h1>
      <p className="text-xl text-slate-500 font-medium mb-16 max-w-3xl">Explore the impact, ventures, and career trajectories of ABC alumni across the continent. Our operators build the infrastructure of tomorrow.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { stat: '$64M+', label: 'Raised by Alumni Teams', scale: 'In Seed & Series A' },
          { stat: '100+', label: 'Ventures Launched', scale: 'Across 14 Markets' },
          { stat: '3.2K', label: 'Jobs Created', scale: 'Direct Employment' }
        ].map((item, i) => (
          <div key={i} className="bg-botanical-950 border border-botanical-800 text-white p-12 rounded-[40px] hover:bg-botanical-900 transition-colors">
            <span className="text-5xl lg:text-7xl font-black text-emerald-500 block mb-6 tracking-tighter leading-none">{item.stat}</span>
            <h4 className="text-sm font-black uppercase tracking-widest mb-2">{item.label}</h4>
            <p className="text-slate-400 text-xs font-medium">{item.scale}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-black text-botanical-950 uppercase tracking-tighter mb-12">Featured Alumni Ventures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { tag: 'Fintech', name: 'PayFluid', desc: 'Cross-border B2B settlement platform processing $10M+ monthly across West Africa.', founder: 'Amaka Eze, 2024 Cohort' },
            { tag: 'Logistics', name: 'CargoLink', desc: 'Digital freight clearing API reducing port wait times by 40% in East Africa.', founder: 'David Mwangi, 2025 Cohort' },
            { tag: 'AgriTech', name: 'SafiYield', desc: 'Predictive analytics for commercial farming, optimizing resource allocation via satellite.', founder: 'Fatema Yusuf, 2024 Cohort' },
            { tag: 'HealthTech', name: 'VitaSync', desc: 'Interoperable medical records system deployed in 40+ private clinics in Southern Africa.', founder: 'Dr. Thabo Mhlaba, 2025 Cohort' }
          ].map((venture, idx) => (
            <div key={idx} className="bg-slate-50 rounded-[32px] p-10 border border-slate-100 hover:border-emerald-200 transition-colors">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest mb-6 inline-block">{venture.tag}</span>
              <h4 className="text-2xl font-black text-botanical-950 tracking-tight mb-3">{venture.name}</h4>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">{venture.desc}</p>
              <div className="pt-6 border-t border-slate-200">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{venture.founder}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const EventsPage = ({ onBack, onPageChange }: Props) => (
  <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>
      <h1 className="text-5xl font-black text-botanical-950 tracking-tighter uppercase mb-6">Upcoming Events & RSVP</h1>
      <p className="text-xl text-slate-500 font-medium mb-16">Register for upcoming gatherings, summits, and regional meetups.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'ABC Annual Summit 2026', type: 'Public', location: 'Lagos', date: 'DEC 12', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', id: 'annual-summit-2026' },
          { title: "Founders' Private Dinner", type: 'Invite Only', location: 'Nairobi', date: 'JAN 05', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', id: 'founders-dinner' },
          { title: 'Regional Meetup: Joburg', type: 'Public', location: 'Johannesburg', date: 'FEB 10', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80', id: 'regional-joburg' },
          { title: 'Venture Showcase: Accra', type: 'Public', location: 'Accra, Ghana • Hybrid', date: 'MAR 15', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=800&q=80', id: 'venture-showcase-accra' },
          { title: 'Policy Roundtable: Cairo', type: 'Invite Only', location: 'Cairo, Egypt • In-Person', date: 'APR 20', img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80', id: 'policy-roundtable-cairo' }
        ].map((e, i) => (
          <div key={i} className="bg-white rounded-[40px] overflow-hidden border border-slate-100 group flex flex-col justify-between">
            <div className="cursor-pointer" onClick={() => onPageChange('event-detail', e.id)}>
              <div className="aspect-video relative overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-botanical-950 shadow-sm border border-white/20">
                  {e.date}
                </div>
              </div>
              <div className="p-10 pb-6">
                 <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block shadow-sm ${e.type === 'Public' ? 'bg-emerald-50 text-emerald-600' : 'bg-botanical-50 text-botanical-600'}`}>
                  {e.type}
                </span>
                <h3 className="text-2xl font-black text-botanical-950 mb-4 uppercase tracking-tight group-hover:text-emerald-500 transition-colors">{e.title}</h3>
                <div className="flex items-center space-x-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <span className="flex items-center space-x-1"><MapPin className="w-3 h-3" /> <span>{e.location}</span></span>
                </div>
              </div>
            </div>
            <div className="px-10 pb-10 mt-auto pt-4 border-t border-slate-50">
              <button onClick={() => onPageChange('event-detail', e.id)} className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-500 transition-colors inline-flex items-center">
                {e.type === 'Public' ? 'RSVP Now' : 'Request Invite'} <ArrowLeft className="w-3 h-3 ml-2 rotate-180" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
