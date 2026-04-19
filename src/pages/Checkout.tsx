
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Loader2,
  Building2,
  Smartphone,
  Repeat,
  Wallet
} from 'lucide-react';
import { Page } from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

interface CheckoutProps {
  onComplete: () => void;
  onBack: () => void;
}

type PaymentMethod = 'card' | 'transfer' | 'bank' | 'ussd' | 'opay';
type PaymentPlan = 'full' | 'installments';

export const Checkout: React.FC<CheckoutProps> = ({ onComplete, onBack }) => {
  const { user, setPaid } = useAuth();
  const { t } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan>('full');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setPaid(true);
      onComplete();
    }, 2500);
  };

  const programName = user?.program || 'Entrepreneurship Program';
  const totalPrice = 2500;
  const installmentPrice = 950; // Total: 2850 (3 months)

  const paymentMethods: { id: PaymentMethod; label: string; icon: any; description: string }[] = [
    { id: 'card', label: 'Card', icon: CreditCard, description: 'Visa, Mastercard, Verve' },
    { id: 'transfer', label: 'Transfer', icon: Repeat, description: 'Pay via Bank Transfer' },
    { id: 'bank', label: 'Bank', icon: Building2, description: 'Direct Bank Debit' },
    { id: 'ussd', label: 'USSD', icon: Smartphone, description: 'Dial code on your phone' },
    { id: 'opay', label: 'OPay', icon: Wallet, description: 'Pay with OPay wallet' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow">
        
        {/* LEFT SIDE: PROGRAM DETAILS & PAYMENT METHODS */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <div className="flex items-center space-x-3 mb-8 cursor-pointer group" onClick={onBack}>
              <ArrowRight className="w-4 h-4 rotate-180 text-slate-400 group-hover:text-botanical-950 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-botanical-950 transition-colors">Back to Application</span>
            </div>
            
            <h1 className="text-5xl font-black text-botanical-950 tracking-tighter uppercase mb-6 leading-none">
              Enroll <span className="text-emerald-500">Securely.</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl">
              You've been accepted into the {programName}. Join your cohort and start building your legacy.
            </p>
          </div>

          {/* PAYMENT METHODS SELECTION */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Select Payment Method</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex items-center justify-between p-6 rounded-3xl border-2 transition-all text-left ${
                    paymentMethod === method.id 
                      ? 'border-emerald-500 bg-white shadow-xl shadow-emerald-500/5' 
                      : 'border-slate-100 bg-white/50 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      paymentMethod === method.id ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400'
                    }`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-botanical-950 leading-none mb-1">{method.label}</div>
                      <div className="text-[10px] font-medium text-slate-400">{method.description}</div>
                    </div>
                  </div>
                  {paymentMethod === method.id && (
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
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
                  <div className="text-6xl font-black text-botanical-950 tracking-tighter leading-none">
                    ${paymentPlan === 'full' ? totalPrice.toLocaleString() : (installmentPrice * 3).toLocaleString()}
                  </div>
                </div>
                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Limited Cohort Seats</span>
              </div>

              <div className="space-y-6 mb-12">
                {/* Full Payment */}
                <div 
                  onClick={() => setPaymentPlan('full')}
                  className={`p-6 rounded-2xl flex items-center justify-between group cursor-pointer border-2 transition-all ${
                    paymentPlan === 'full' ? 'border-emerald-500 bg-slate-50' : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      paymentPlan === 'full' ? 'border-emerald-500' : 'border-slate-200'
                    }`}>
                      {paymentPlan === 'full' && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Pay In Full</span>
                      <p className="text-[8px] font-medium text-slate-400 capitalize">Save $350 compared to installments</p>
                    </div>
                  </div>
                  <div className="text-sm font-black text-botanical-950">${totalPrice.toLocaleString()}</div>
                </div>
                
                {/* Installments */}
                <div 
                  onClick={() => setPaymentPlan('installments')}
                  className={`p-6 rounded-2xl flex items-center justify-between group cursor-pointer border-2 transition-all ${
                    paymentPlan === 'installments' ? 'border-emerald-500 bg-slate-50' : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      paymentPlan === 'installments' ? 'border-emerald-500' : 'border-slate-200'
                    }`}>
                      {paymentPlan === 'installments' && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Installments</span>
                      <p className="text-[8px] font-medium text-slate-400">3x Monthly Payments</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-botanical-950">${installmentPrice.toLocaleString()}/mo</div>
                    <div className="text-[8px] font-medium text-slate-400">Across 3 months</div>
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
                    <span>Secure Your Spot</span>
                  </>
                )}
              </button>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-[8px] font-black uppercase tracking-widest text-slate-400">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>Secure Checkout powered by institution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
