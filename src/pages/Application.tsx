
import React, { useState } from 'react';
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

interface ApplicationProps {
  onComplete: () => void;
  onBack: () => void;
}

export const Application: React.FC<ApplicationProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const steps = [
    { id: 1, title: 'Personal Info', icon: User },
    { id: 2, title: 'Academic Record', icon: BookOpen },
    { id: 3, title: 'Leadership Essay', icon: FileText },
    { id: 4, title: 'Verification', icon: ShieldCheck },
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
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-4 uppercase">Application Submitted</h2>
          <p className="text-slate-500 font-medium mb-8">
            Your dossier has been received by the Admissions Council. Redirecting to your student dashboard...
          </p>
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  step >= s.id ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-white text-slate-300 border border-slate-200'
                }`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <span className={`text-[8px] font-black uppercase tracking-widest mt-3 ${
                  step >= s.id ? 'text-botanical-950' : 'text-slate-400'
                }`}>{s.title}</span>
              </div>
            ))}
            {/* Connector Lines */}
            <div className="absolute top-[148px] left-1/2 -translate-x-1/2 w-[calc(100%-12rem)] h-px bg-slate-200 -z-0" />
            <motion.div 
              className="absolute top-[148px] left-[calc(50%-18rem)] h-px bg-emerald-500 -z-0"
              initial={{ width: 0 }}
              animate={{ width: `${(step - 1) * 33.33}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[40px] p-12 shadow-sm border border-slate-100"
        >
          <div className="mb-10">
            <h3 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase mb-2">
              {steps[step - 1].title}
            </h3>
            <p className="text-slate-400 font-medium text-sm">Please provide accurate information for institutional review.</p>
          </div>

          <div className="space-y-8">
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Legal Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="As per passport" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="institutional@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nationality</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors">
                    <option>Select Country</option>
                    <option>Nigeria</option>
                    <option>Kenya</option>
                    <option>South Africa</option>
                    <option>Ghana</option>
                    <option>Egypt</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Current Role</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="e.g. CEO, Founder, Director" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Highest Academic Qualification</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="e.g. MBA, MSc Computer Science" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Institution</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors" placeholder="University Name" />
                </div>
                <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl text-center hover:border-emerald-500 transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-slate-300 mx-auto mb-4 group-hover:text-emerald-500 transition-colors" />
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Upload Academic Transcripts (PDF)</p>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Statement of Intent (Max 500 words)</label>
                  <textarea className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors h-64 resize-none" placeholder="How do you intend to catalyze continental transformation?" />
                </div>
                <div className="flex items-center space-x-4 p-6 bg-emerald-50 rounded-2xl">
                  <FileText className="w-6 h-6 text-emerald-500" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 leading-relaxed">
                    Tip: Focus on quantifiable impact and your vision for sovereign business leadership.
                  </p>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="text-lg font-black text-botanical-950 mb-4 uppercase tracking-tight">Declaration of Integrity</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                    I hereby certify that all information provided in this dossier is accurate and represents my original work. I understand that institutional rigor is the foundation of ABC.
                  </p>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">I Agree to the Terms of Application</span>
                  </label>
                </div>
                <div className="p-8 border border-slate-100 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <ShieldCheck className="w-8 h-8 text-emerald-500" />
                    <div>
                      <h5 className="font-black text-botanical-950 text-sm">Identity Verification</h5>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Secure 256-bit Encryption</p>
                    </div>
                  </div>
                  <div className="text-emerald-500 font-black text-xs uppercase tracking-widest">Verified</div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-12 flex justify-between items-center">
            <button 
              onClick={handleBack}
              className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{step === 1 ? 'Cancel' : 'Back'}</span>
            </button>
            <button 
              onClick={handleNext}
              disabled={isSubmitting}
              className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center space-x-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Dossier...</span>
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

        {/* Support Footer */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Need assistance? <button className="text-emerald-500 hover:underline">Contact Admissions Support</button>
          </p>
        </div>
      </div>
    </div>
  );
};
