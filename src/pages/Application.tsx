
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  User, 
  BookOpen, 
  FileText, 
  ShieldCheck,
  Loader2
} from 'lucide-react';

import { useAuth } from '../contexts/AuthContext';

interface ApplicationProps {
  onComplete: () => void;
  onBack: () => void;
  onPageChange: (page: any) => void;
  context?: { source: 'program' | 'simulation' | 'general'; id?: string };
}

export const Application: React.FC<ApplicationProps> = ({ onComplete, onBack, onPageChange, context }) => {
  const { login, setApplied, isApplied } = useAuth();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('abc_application_data');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      nationality: 'Nigeria',
      background: '',
      experience: '',
      role: '',
      goal: '',
      selectedProgram: 'Entrepreneurship Program',
      confirmAccurate: false,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    };
  });

  useEffect(() => {
    localStorage.setItem('abc_application_data', JSON.stringify(formData));
  }, [formData]);

  const steps = [
    { id: 1, title: 'Basic Info', sub: 'Let’s get started', text: 'Tell us a bit about you.', icon: User },
    { id: 2, title: 'Background', sub: 'Your background', text: 'This helps us tailor your experience.', icon: BookOpen },
    { id: 3, title: 'Intent', sub: 'What are you looking to build?', text: 'Keep it short — just a sentence or two.', icon: FileText },
    { id: 4, title: 'Confirmation', sub: 'Almost done', text: 'Please confirm your details before submitting.', icon: ShieldCheck },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else handleSubmit();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onBack();
  };

  const handleSubmit = () => {
    if (!formData.confirmAccurate) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      login({
        name: formData.name || 'Pioneer Scholar',
        email: formData.email || 'scholar@abc.edu',
        avatarUrl: formData.avatarUrl,
        program: formData.selectedProgram || 'Entrepreneurship'
      } as any);
      setApplied(true);
      setIsSubmitting(false);
      setIsSuccess(true);
      // Success screen will handle manual redirect
    }, 2000);
  };

  const getSecondaryCTA = () => {
    if (context?.source === 'program') {
      return `Explore ${formData.selectedProgram}`;
    }
    if (context?.source === 'simulation') {
      return 'Explore Simulation Labs';
    }
    return 'Explore Programs';
  };

  if (isApplied) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-emerald-500/20">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-4 uppercase leading-none">Application Already Submitted</h2>
          <p className="text-slate-500 font-medium text-lg mb-4">
            You have already applied and are eligible to access the programs.
          </p>
          <div className="space-y-4 mt-8">
            <button 
              onClick={() => onPageChange('dashboard-student')}
              className="w-full bg-emerald-500 text-white py-6 rounded-2xl text-[12px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all flex items-center justify-center space-x-3 group"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onPageChange('programs')}
              className="w-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors py-4"
            >
              Explore Programs
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-emerald-500/20">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-6xl font-black text-botanical-950 tracking-tighter mb-4 uppercase leading-none">Application Received</h2>
          <p className="text-slate-500 font-medium text-lg mb-4">
            You’re eligible to continue enrollment.
          </p>
          <div className="bg-emerald-50 text-emerald-600 rounded-xl p-4 mb-12 text-sm font-medium border border-emerald-100">
            A confirmation email has been securely sent to your inbox.
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={onComplete}
              className="w-full bg-emerald-500 text-white py-6 rounded-2xl text-[12px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all flex items-center justify-center space-x-3 group"
            >
              <span>Continue to Payment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                if (context?.source === 'program') onPageChange('full-course');
                else if (context?.source === 'simulation') onPageChange('simulation-labs');
                else onPageChange('programs');
              }}
              className="w-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors py-4"
            >
              Access Program Next Steps
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex justify-between items-center relative">
            {steps.map((s, i) => (
              <div key={s.id} className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                  step >= s.id ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-white text-slate-300 border-slate-200'
                }`}>
                  <span className="text-[10px] font-black tracking-tight">{s.id}</span>
                </div>
                <span className={`text-[8px] font-black uppercase tracking-widest mt-3 whitespace-nowrap ${
                  step >= s.id ? 'text-botanical-950' : 'text-slate-400'
                }`}>Step {s.id} of 4</span>
              </div>
            ))}
            
            {/* Connector Base */}
            <div className="absolute top-5 left-8 right-8 h-0.5 bg-slate-200 -z-0" />
            
            {/* Connector Active */}
            <motion.div 
              className="absolute top-5 left-8 h-0.5 bg-emerald-500 -z-0"
              initial={{ width: 0 }}
              animate={{ width: `${(step - 1) * 33.33}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[48px] p-12 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
        >
          <div className="mb-12">
             <div className="flex items-center space-x-3 mb-4">
              <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[8px] font-black uppercase tracking-widest leading-none">
                {step === 1 ? 'Takes less than a minute' : 'Built for builders, not paperwork'}
              </div>
              <div className="v-line w-px h-3 bg-slate-200" />
              <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                 Step {step}
              </div>
            </div>
            <h3 className="text-5xl font-black text-botanical-950 tracking-tighter uppercase mb-4 leading-none">
              {steps[step -1].sub}.
            </h3>
            <p className="text-slate-400 font-medium text-lg leading-relaxed">{steps[step - 1].text}</p>
          </div>

          <div className="space-y-10">
            <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                    <input 
                      type="text" 
                      autoFocus
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm" 
                      placeholder="Your full name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm" 
                      placeholder="you@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Country</label>
                    <select 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm"
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    >
                      <option>Nigeria</option>
                      <option>Kenya</option>
                      <option>South Africa</option>
                      <option>Ghana</option>
                      <option>Egypt</option>
                      <option>Rwanda</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-10"
              >
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">What best describes you?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {['Student', 'Professional', 'Founder', 'Operator', 'Other'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFormData({ ...formData, background: type })}
                        className={`py-6 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                          formData.background === type 
                            ? 'bg-botanical-950 text-white border-botanical-950 shadow-lg' 
                            : 'bg-white text-slate-500 border-slate-100 hover:border-emerald-500'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Years of experience</label>
                    <select 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="">Select Option</option>
                      <option>0–1 years</option>
                      <option>2–4 years</option>
                      <option>5–9 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Current role or focus <span className="text-slate-300 font-bold">(Optional)</span></label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm" 
                      placeholder="e.g. Marketing, Product, Finance" 
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                 <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Program Selection</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm"
                    value={formData.selectedProgram}
                    onChange={(e) => setFormData({ ...formData, selectedProgram: e.target.value })}
                  >
                    <option>Entrepreneurship Program</option>
                    <option>Financial Markets & Venture Capital</option>
                    <option>Sovereign Leadership</option>
                    <option>Digital Economy & AI</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-end mb-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Your goal</label>
                    <span className={`text-[8px] font-black px-2 py-0.5 rounded ${formData.goal.length > 150 ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400'}`}>
                      {formData.goal.length}/150 max
                    </span>
                  </div>
                  <textarea 
                    className="w-full bg-slate-50 border border-slate-100 rounded-3xl px-8 py-8 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all h-48 resize-none shadow-sm" 
                    placeholder="e.g. Launch a startup, grow a business, move into strategy" 
                    maxLength={150}
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  />
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-10"
              >
                <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Full Name</h4>
                      <p className="text-sm font-black text-botanical-950">{formData.name || '—'}</p>
                    </div>
                    <div>
                      <h4 className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</h4>
                      <p className="text-sm font-black text-botanical-950">{formData.email || '—'}</p>
                    </div>
                    <div>
                      <h4 className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Background</h4>
                      <p className="text-sm font-black text-botanical-950">{formData.background || '—'} / {formData.experience || '—'}</p>
                    </div>
                    <div>
                      <h4 className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Program</h4>
                      <p className="text-sm font-black text-botanical-950">{formData.selectedProgram}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <h4 className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-2">Intent Summary</h4>
                    <p className="text-xs font-medium text-slate-600 italic leading-relaxed">"{formData.goal || 'No goal specified'}"</p>
                  </div>
                </div>

                <label className="flex items-center space-x-4 cursor-pointer group">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                    formData.confirmAccurate ? 'bg-emerald-500 border-emerald-500' : 'border-slate-200 group-hover:border-emerald-500'
                  }`}>
                    {formData.confirmAccurate && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden"
                    checked={formData.confirmAccurate}
                    onChange={(e) => setFormData({ ...formData, confirmAccurate: e.target.checked })}
                  />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-botanical-950 transition-colors">
                    I confirm that the information provided is accurate and my own.
                  </span>
                </label>
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-16 flex justify-between items-center gap-6">
            <button 
              onClick={handleBack}
              className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors px-4 py-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{step === 1 ? 'Cancel' : 'Back'}</span>
            </button>
            <button 
              onClick={handleNext}
              disabled={isSubmitting || (step === 4 && !formData.confirmAccurate)}
              className={`bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-500 transition-all flex items-center space-x-4 shadow-xl active:scale-95 disabled:opacity-30 disabled:pointer-events-none ${
                step === 4 ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-botanical-950 shadow-botanical-950/20'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>{step === 4 ? 'Submit Application' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
