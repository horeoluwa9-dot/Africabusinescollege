import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowLeft, GraduationCap, Globe, Mail } from 'lucide-react';
import { Page } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

interface ScholarshipProps {
  onPageChange: (page: Page) => void;
}

export const Scholarship: React.FC<ScholarshipProps> = ({ onPageChange }) => {
  const { t } = useLanguage();
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
      <div className="pt-32 pb-24 min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[40px] shadow-2xl max-w-2xl text-center border border-slate-100"
        >
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-botanical-950 mb-6">Application Received</h2>
          <p className="text-lg text-slate-500 font-medium mb-12">
            Your scholarship request has been successfully submitted. Our Admissions and Financial Aid committee will review your profile and respond within 14 business days.
          </p>
          <button 
            onClick={() => onPageChange('admissions')}
            className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all"
          >
            Return to Admissions
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <button 
          onClick={() => onPageChange('admissions')}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Admissions</span>
        </button>

        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Financial Aid</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-botanical-950 mb-6 leading-none">
            Scholarship <br /> <span className="text-emerald-500 italic">Application</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            ABC is committed to ensuring that financial constraints do not prevent high-potential leaders from accessing world-class business education.
          </p>
        </div>

        <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden p-8 md:p-12">
          <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-colors ${step >= s ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {s}
                </div>
                {s < 3 && <div className="w-8 md:w-16 h-px bg-slate-200" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-botanical-950 mb-8">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Country of Residence</label>
                    <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 appearance-none">
                      <option value="">Select a country...</option>
                      <option value="NG">Nigeria</option>
                      <option value="KE">Kenya</option>
                      <option value="ZA">South Africa</option>
                      <option value="EG">Egypt</option>
                      <option value="GH">Ghana</option>
                      <option value="OTHER">Other African Nation</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-botanical-950 mb-8">Professional Background</h3>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Target Program</label>
                    <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 appearance-none">
                      <option value="">Select a program...</option>
                      <option value="ent">Entrepreneurship</option>
                      <option value="vb">Venture Building</option>
                      <option value="db">Digital Business</option>
                      <option value="il">Innovation Leadership</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Current Employment Status</label>
                    <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 appearance-none">
                      <option value="employed">Full-time Employed</option>
                      <option value="founder">Founder / Entrepreneur</option>
                      <option value="unemployed">Currently Not Employed</option>
                      <option value="student">Student</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">LinkedIn Profile URL</label>
                    <input required type="url" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500" />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-botanical-950 mb-8">Financial Context</h3>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Requested Scholarship Coverage</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['25%', '50%', '75%', '100%'].map((val) => (
                        <label key={val} className="flex flex-col items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-emerald-500 focus-within:border-emerald-500 bg-slate-50 relative group">
                          <input type="radio" name="coverage" value={val} required className="absolute opacity-0" />
                          <span className="text-lg font-black text-botanical-950 group-focus-within:text-emerald-600 transition-colors">{val}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Context Statement</label>
                    <p className="text-xs text-slate-500 mb-2">Please explain your financial situation and how this scholarship will enable your participation.</p>
                    <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 resize-none"></textarea>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={() => setStep(step - 1)}
                  className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-botanical-950 px-6 py-3"
                >
                  Previous
                </button>
              ) : (
                <div />
              )}
              
              <button 
                type="submit"
                className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-xl flex items-center space-x-2"
              >
                <span>{step === 3 ? 'Submit Application' : 'Continue'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
