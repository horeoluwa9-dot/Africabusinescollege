import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Calendar, Globe, MapPin, Zap } from 'lucide-react';
import { Page } from '../components/Layout';

interface Props {
  onBack: () => void;
  onPageChange: (page: Page) => void;
}

export const JoinNetwork = ({ onBack, onPageChange }: Props) => (
  <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Community</span>
      </button>
      <h1 className="text-5xl md:text-7xl font-black text-botanical-950 tracking-tighter uppercase mb-6">Join The Network</h1>
      <p className="text-xl text-slate-500 font-medium mb-16">Apply to become part of the continent's most powerful execution network. Access resources, co-founders, and funding.</p>
      
      <div className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100">
        <h3 className="text-2xl font-black text-botanical-950 mb-8 uppercase">Application of Interest</h3>
        <p className="text-sm text-slate-500 mb-8">We review rolling applications. Typically, you need to be a part of a program to get full network access.</p>
        <button onClick={() => onPageChange('application')} className="bg-emerald-500 text-white px-8 py-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all w-full">
          Apply to a Program
        </button>
      </div>
    </div>
  </div>
);

export const AlumniOutcomes = ({ onBack }: Props) => (
  <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto">
      <button onClick={onBack} className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>
      <h1 className="text-5xl md:text-7xl font-black text-botanical-950 tracking-tighter uppercase mb-6 animate-fade-in">Alumni Outcomes</h1>
      <p className="text-xl text-slate-500 font-medium mb-16">Explore the impact, ventures, and career trajectories of ABC alumni across the continent.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { stat: '$50M+', label: 'Raised by Alumni Teams' },
          { stat: '150+', label: 'Ventures Launched' },
          { stat: '3.2K', label: 'Jobs Created' }
        ].map((item, i) => (
          <div key={i} className="bg-botanical-950 text-white p-12 rounded-[40px]">
            <span className="text-5xl font-black text-emerald-500 block mb-4">{item.stat}</span>
            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
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
          { title: 'ABC Annual Summit 2026', type: 'Public', location: 'Lagos', date: 'DEC 12' },
          { title: "Founders' Private Dinner", type: 'Invite Only', location: 'Nairobi', date: 'JAN 05' },
          { title: 'Johannesburg Regional Meetup', type: 'Public', location: 'Johannesburg', date: 'FEB 10' }
        ].map((e, i) => (
          <div key={i} className="bg-white border border-slate-100 p-8 rounded-[32px] flex flex-col justify-between items-start hover:border-emerald-500 transition-colors">
            <div className="mb-6">
              <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block ${e.type === 'Public' ? 'bg-emerald-50 text-emerald-600' : 'bg-botanical-50 text-botanical-600'}`}>
                {e.type}
              </span>
              <h3 className="text-2xl font-black text-botanical-950 tracking-tight uppercase mb-2">{e.title}</h3>
              <div className="flex items-center space-x-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center space-x-1"><Calendar className="w-3 h-3" /> <span>{e.date}</span></span>
                <span className="flex items-center space-x-1"><MapPin className="w-3 h-3" /> <span>{e.location}</span></span>
              </div>
            </div>
            <button className="bg-slate-100 text-botanical-950 px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
              {e.type === 'Public' ? 'RSVP Now' : 'Request Invite'}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
