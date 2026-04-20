import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Globe, Users, Zap } from 'lucide-react';
import { Page } from '../components/Layout';

interface CareersProps {
  onPageChange: (page: Page) => void;
}

export const Careers: React.FC<CareersProps> = ({ onPageChange }) => {
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null);
  const [applied, setApplied] = React.useState(false);

  const jobs = [
    { id: '1', title: 'Senior Cloud Architect', department: 'Engineering', location: 'Remote (Africa)', type: 'Full-time' },
    { id: '2', title: 'Product Manager, Simulations', department: 'Product', location: 'Remote (Global)', type: 'Full-time' },
    { id: '3', title: 'Faculty Associate, Venture Finance', department: 'Academics', location: 'Lagos / Nairobi', type: 'Contract' },
    { id: '4', title: 'Head of Admissions', department: 'Operations', location: 'London / Remote', type: 'Full-time' },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => onPageChange('home')}
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-500 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Home</span>
          </button>

          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Join the Team</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8 uppercase">
            Build the <br />
            <span className="text-emerald-500 italic">Institution</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mb-12">
            We are looking for ambitious, execution-oriented individuals to help us build the premier digital business school for Africa.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-botanical-950 mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                onClick={() => { setSelectedJob(job.id); setApplied(false); }}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${selectedJob === job.id ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white hover:border-emerald-300'}`}
              >
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{job.department}</div>
                <h3 className="text-xl font-bold text-botanical-950 mb-2">{job.title}</h3>
                <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center"><Globe className="w-3 h-3 mr-1" /> {job.location}</span>
                  <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          {selectedJob ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-xl"
            >
              {applied ? (
                <div className="text-center py-24">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-botanical-950 mb-4">Application Submitted</h3>
                  <p className="text-slate-500 font-medium mb-8">Thank you for applying to ABC. Our talent team will review your application and get back to you shortly.</p>
                  <button 
                    onClick={() => { setSelectedJob(null); setApplied(false); }}
                    className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-500"
                  >
                    View other roles
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply}>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-botanical-950 mb-8">Apply for {jobs.find(j => j.id === selectedJob)?.title}</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Last Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">LinkedIn URL</label>
                      <input required type="url" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Why ABC?</label>
                      <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all">
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          ) : (
            <div className="bg-slate-100 rounded-[40px] border border-slate-200 h-full flex flex-col items-center justify-center p-12 text-center text-slate-400">
              <Briefcase className="w-16 h-16 mb-4 opacity-50" />
              <p className="font-medium text-lg">Select a role to view details and apply.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
