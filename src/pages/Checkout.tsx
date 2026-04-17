
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  ArrowRight, 
  Lock, 
  Monitor, 
  Users, 
  Award,
  Clock,
  ChevronDown,
  Loader2
} from 'lucide-react';
import { Page } from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

interface CheckoutProps {
  onComplete: () => void;
  onBack: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onComplete, onBack }) => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onComplete();
    }, 2500);
  };

  const programName = user?.program || 'Entrepreneurship Program';
  const price = "₦450,000";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow">
        
        {/* LEFT SIDE: PROGRAM DETAILS */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <div className="flex items-center space-x-3 mb-8 cursor-pointer group" onClick={onBack}>
              <ArrowRight className="w-4 h-4 rotate-180 text-slate-400 group-hover:text-botanical-950 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-botanical-950 transition-colors">Back to Application</span>
            </div>
            
            <h1 className="text-5xl font-black text-botanical-950 tracking-tighter uppercase mb-6 leading-none">
              {t('checkout.title').split(' ').slice(0, 2).join(' ')} <span className="text-emerald-500">{t('checkout.title').split(' ').slice(2).join(' ')}.</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl">
              You've been accepted into the {programName}. Join your cohort and start building your legacy.
            </p>
          </div>

          {/* SUMMARY CARD */}
          <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
              <Award className="w-48 h-48 text-botanical-950" />
            </div>
            
            <div className="relative z-10">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">{t('checkout.programSummary')}</div>
              <h3 className="text-3xl font-black text-botanical-950 mb-10 tracking-tight">{programName}</h3>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Duration</div>
                    <div className="text-sm font-black text-botanical-950">8–12 Weeks</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Format</div>
                    <div className="text-sm font-black text-botanical-950">Cohort-Based</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4">{t('checkout.whatYouGet')}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: Monitor, label: 'Full Program Access' },
                    { icon: CheckCircle2, label: 'Simulation Labs' },
                    { icon: ShieldCheck, label: 'Official Certification' },
                    { icon: Users, label: 'Venture Network' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm font-medium text-slate-600">
                      <item.icon className="w-4 h-4 text-emerald-500" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-8 bg-botanical-950 rounded-[32px] text-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-tight">Institutional Security</h4>
                <p className="text-[10px] font-medium text-slate-400">Encrypted 256-bit secure gateway</p>
              </div>
            </div>
            <div className="flex -space-x-3">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              ].map((src, i) => (
                <div key={i} className="w-10 h-10 bg-white rounded-lg p-2 flex items-center justify-center border border-white/10">
                  <img src={src} alt="Payment" className="max-h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: PRICING CARD (STICKY) */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="bg-white rounded-[40px] p-10 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Total Investment</h4>
                  <div className="text-6xl font-black text-botanical-950 tracking-tighter leading-none">{price}</div>
                </div>
                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Limited Cohort Seats</span>
              </div>

              <div className="space-y-6 mb-12">
                <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-between group cursor-pointer border border-emerald-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">{t('checkout.payInFull')}</span>
                      <p className="text-[8px] font-medium text-slate-400 capitalize">Most popular option</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                
                <div className="bg-white p-6 rounded-2xl flex items-center justify-between group cursor-pointer border border-slate-100 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center space-x-4 opacity-50">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-200" />
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">{t('checkout.installments')}</span>
                      <p className="text-[8px] font-medium text-slate-400">3x Monthly Payments</p>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-emerald-500 text-white py-6 rounded-[20px] text-[12px] font-black uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95 flex items-center justify-center space-x-4 mb-8 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Loader2 className="w-5 h-5" />
                    </motion.div>
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>{t('checkout.secureYourSpot')}</span>
                  </>
                )}
              </button>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-[8px] font-black uppercase tracking-widest text-slate-400">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>{t('checkout.secureCheckout')}</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <button className="text-[8px] font-black uppercase tracking-widest text-slate-300 hover:text-botanical-950 transition-colors underline underline-offset-4">Refund Policy</button>
                  <button className="text-[8px] font-black uppercase tracking-widest text-slate-300 hover:text-botanical-950 transition-colors underline underline-offset-4">Institutional Terms</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
