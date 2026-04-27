import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Globe, CheckCircle2, ChevronRight, Video, MessageSquare } from 'lucide-react';
import { Page } from '../components/Layout';

interface DiscoveryCallProps {
  onPageChange: (page: Page) => void;
}

export const DiscoveryCall: React.FC<DiscoveryCallProps> = ({ onPageChange }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-slate-50 flex items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 md:p-20 rounded-[40px] shadow-2xl max-w-2xl border border-slate-100"
        >
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-botanical-950 mb-6 leading-tight">Consultation Booked</h2>
          <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
            Your discovery call has been scheduled. You'll receive a calendar invitation and a link to the virtual boardroom in your inbox within the next few minutes.
          </p>
          <button 
            onClick={() => onPageChange('home')}
            className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl shadow-botanical-950/20"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <button 
          onClick={() => onPageChange('admissions')}
          className="group flex items-center space-x-2 text-botanical-950 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Back to Admissions</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Side: Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Virtual Discovery Session</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-botanical-950 mb-8 leading-none">
              Explore Your <br /> <span className="text-emerald-500 italic">Future at ABC</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
              Book a 15-minute 1-on-1 session with our admissions team to explore which program matches your execution goals and career trajectory.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-2">15-Minute Session</h4>
                  <p className="text-sm text-slate-500 font-medium">Concise, high-impact conversation focused on your goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-2">Virtual Boardroom</h4>
                  <p className="text-sm text-slate-500 font-medium">Delivered via our high-fidelity video infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-2">Direct Outcomes</h4>
                  <p className="text-sm text-slate-500 font-medium">Clear next steps on your application and scholarship eligibility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-[40px] border border-slate-100 p-8 md:p-16 shadow-2xl relative">
              <div className="flex items-center justify-between mb-16 border-b border-slate-200 pb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${step >= s ? 'bg-botanical-950 text-white' : 'bg-slate-200 text-slate-400'}`}>
                      {s}
                    </div>
                    {s < 3 && <div className="w-12 md:w-24 h-px bg-slate-200" />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-botanical-950">Select Date & Time</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Mon, Jul 12', 'Tue, Jul 13', 'Wed, Jul 14', 'Thu, Jul 15'].map((d) => (
                          <label key={d} className="flex flex-col items-center p-6 border border-slate-200 rounded-2xl cursor-pointer hover:border-emerald-500 focus-within:border-emerald-500 bg-white transition-all text-center">
                            <input type="radio" name="date" value={d} required className="absolute opacity-0" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{d.split(', ')[0]}</span>
                            <span className="text-lg font-black text-botanical-950">{d.split(', ')[1]}</span>
                          </label>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '05:00 PM', '06:30 PM'].map((t) => (
                          <label key={t} className="flex items-center justify-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-emerald-500 focus-within:border-emerald-500 bg-white transition-all">
                            <input type="radio" name="time" value={t} required className="absolute opacity-0" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">{t}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-botanical-950">Contact Information</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[8px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                          <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none text-sm font-medium" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[8px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                          <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none text-sm font-medium" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[8px] font-black uppercase tracking-widest text-slate-400">Primary Goal</label>
                        <select required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none text-[10px] font-black uppercase tracking-widest appearance-none">
                          <option value="">Select a topic...</option>
                          <option value="admissions">Admissions Process</option>
                          <option value="curriculum">Curriculum Depth</option>
                          <option value="funding">Funding & Scholarships</option>
                          <option value="corporate">Corporate Sponsorship</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-botanical-950">Confirm Consultation</h3>
                      <div className="bg-white p-10 rounded-3xl border border-slate-200 space-y-6">
                        <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Program Preference</div>
                          <div className="text-sm font-black text-botanical-950 uppercase tracking-tight text-emerald-500">Executive Leadership</div>
                        </div>
                        <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Platform</div>
                          <div className="text-sm font-black text-botanical-950 uppercase tracking-tight">ABC Virtual Boardroom</div>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-relaxed text-center opacity-60 italic">
                          By confirming, you agree to receive institutional communications regarding your discovery call.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between mt-16 pt-8 border-t border-slate-200">
                  <button 
                    type="button"
                    onClick={() => step > 1 ? setStep(step - 1) : onPageChange('admissions')}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors"
                  >
                    {step === 1 ? 'Cancel' : 'Previous'}
                  </button>
                  <button 
                    type="submit"
                    className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center space-x-3 shadow-xl shadow-botanical-950/10"
                  >
                    <span>{step === 3 ? 'Confirm Booking' : 'Next Step'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
