
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');
    // Simulate magic link sending
    setTimeout(() => {
      setStatus('sent');
      // Simulate auto-login for demo purposes after 2 seconds
      setTimeout(() => {
        login({
          name: email.split('@')[0],
          email: email,
          avatarUrl: `https://i.pravatar.cc/150?u=${email}`
        });
        onSuccess();
        onClose();
        setStatus('idle');
        setEmail('');
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-botanical-950/40 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl relative z-10 p-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-botanical-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-botanical-950" />
              </div>
              <h3 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase mb-2">Login To ABC</h3>
              <p className="text-slate-500 font-medium text-sm">We'll send a secure magic link to your email.</p>
            </div>

            {status === 'sent' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="text-sm font-black text-botanical-950 uppercase tracking-tight mb-2">Link Transmitted</h4>
                <p className="text-xs text-slate-500 font-medium">Check your inbox. We're automatically logging you in for this demo...</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="scholar@example.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <button 
                  disabled={status === 'sending'}
                  className="w-full bg-botanical-950 text-white py-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all active:scale-95 shadow-xl shadow-botanical-950/10 flex items-center justify-center space-x-3 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Magic Link</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-10 pt-8 border-t border-slate-50 text-center">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                Passwordless access helps protect institutional data <br /> and ensures seamless session continuity.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
