import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, X, Mail } from 'lucide-react';
import { Page } from '../components/Layout';
import { SectionLabel } from '../components/SectionLabel';

interface CareersProps {
  onPageChange: (page: Page) => void;
}

export const Careers: React.FC<CareersProps> = ({ onPageChange }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const openApplication = (role: string) => {
    setSelectedRole(role);
    setIsModalOpen(true);
    setIsSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedRole(null);
      setIsSuccess(false);
    }, 300);
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-white relative">
      {/* Toast Notification */}
      <div className={`fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] pointer-events-none transition-all duration-300 ${notification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="bg-botanical-950 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 border border-white/10">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{notification}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 pb-32 px-6 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center pt-4">
          <div className="flex justify-center mb-8">
            <SectionLabel text="Careers at Africa Business College" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8 uppercase">
            Build what business education should have been
          </h1>
          <div className="text-xl text-slate-500 leading-relaxed font-medium mx-auto space-y-6">
            <p>We’re building a new model for business education — one focused on execution, not theory.</p>
            <p>At ABC, people don’t just learn.<br/>They make decisions, test ideas, and build real outcomes.</p>
            <p>If that excites you, you’ll fit right in.</p>
          </div>
        </div>
      </section>

      {/* Why join ABC */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-botanical-950 mb-12 text-center">Why join ABC</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-4">Work on something that matters</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We’re building tools and experiences that help people think, decide, and operate better in real business environments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-4">Small team, real ownership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You won’t be managing slides.<br/>
                You’ll be building systems, shaping products, and making decisions that matter.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-4">Execution over talk</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We value people who do.<br/>
                Not just ideas — outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work & Who we're looking for */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-botanical-950 mb-8">How we work</h2>
            <ul className="space-y-4 text-slate-600 font-medium list-disc pl-5">
              <li>We move fast and keep things simple</li>
              <li>We take ownership, not instructions</li>
              <li>We focus on clarity, not complexity</li>
              <li>We care about output, not appearances</li>
            </ul>
            <p className="text-slate-500 mt-8 font-medium">You won’t find unnecessary layers here.</p>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-botanical-950 mb-8">Who we’re looking for</h2>
            <ul className="space-y-4 text-slate-600 font-medium list-disc pl-5">
              <li>Builders, not spectators</li>
              <li>People comfortable with ambiguity</li>
              <li>Clear thinkers and fast executors</li>
              <li>Individuals who take initiative without waiting</li>
            </ul>
            <p className="text-slate-500 mt-8 font-medium">You don’t need to fit a mold.<br/>But you need to take responsibility.</p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-6 md:px-12 bg-slate-50" id="open-roles">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-botanical-950 font-black uppercase tracking-tighter">Open Roles</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Program Manager",
                desc: "Own and manage program delivery from start to finish."
              },
              {
                title: "Simulation Designer",
                desc: "Design real-world business scenarios and decision systems."
              },
              {
                title: "Marketing Lead",
                desc: "Drive growth, positioning, and communication across channels."
              },
              {
                title: "Partnerships Manager",
                desc: "Build relationships with operators, firms, and institutions."
              }
            ].map((role, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-emerald-200 transition-colors shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-2">{role.title}</h4>
                  <p className="text-slate-600 font-medium">{role.desc}</p>
                </div>
                <button 
                  onClick={() => openApplication(role.title)} 
                  className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-400 transition-all shadow-lg shrink-0 flex items-center justify-center space-x-2"
                >
                  <span>Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your role */}
      <section className="py-24 bg-white border-b border-slate-100 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-botanical-950 mb-6">Don't see a role?</h2>
          <p className="text-slate-600 mb-8 leading-relaxed font-medium">
            We’re always open to meeting exceptional people.<br/>
            If you think you should be here, reach out.
          </p>
          <a href="mailto:careers@africabusinesscollege.com" className="bg-white border border-slate-200 text-botanical-950 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-colors inline-flex items-center">
            Email careers@africabusinesscollege.com
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-botanical-950 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white mb-8">Join us</h2>
          <p className="text-emerald-500 mb-12 leading-relaxed font-medium text-xl">
            Build something real.<br/>
            Work with people who care about outcomes.
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById('open-roles');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="bg-emerald-500 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 transition-all shadow-xl flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Apply to join ABC</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-botanical-950/40 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col"
            >
              <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 border-b border-slate-100 px-8 py-6 flex justify-between items-center">
                <div>
                   <h2 className="text-xl font-black text-botanical-950 uppercase">Apply for Role</h2>
                   <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{selectedRole}</p>
                </div>
                <button onClick={closeModal} className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center transition-colors">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="p-8">
                {isSuccess ? (
                  <div className="text-center py-12">
                     <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/20">
                      <CheckCircle2 className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase mb-4">Application Received.</h2>
                    <p className="text-slate-500 font-medium mb-8">Thank you for applying. Our team will review your application and be in touch soon.</p>
                    <button 
                      onClick={closeModal}
                      className="bg-slate-100 text-botanical-950 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-6">
                     <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-all shadow-sm" placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                        <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-all shadow-sm" placeholder="you@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Role Applying For</label>
                        <input required type="text" value={selectedRole || ''} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none transition-all shadow-sm text-slate-500" readOnly />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">LinkedIn Profile or Portfolio URL</label>
                        <input required type="url" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-all shadow-sm" placeholder="https://linkedin.com/in/..." />
                      </div>

                      <div className="space-y-2">
                         <div className="flex justify-between items-center mb-1">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Cover Note</label>
                          <span className="text-[10px] font-medium text-slate-400">Why ABC, why this role</span>
                        </div>
                        <textarea required rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-all shadow-sm resize-none"></textarea>
                      </div>
                    </div>

                    <div className="pt-8 mt-8 border-t border-slate-100 flex justify-end gap-4">
                      <button type="button" onClick={closeModal} className="px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] text-slate-400 hover:text-botanical-950 transition-colors">
                        Cancel
                      </button>
                      <button disabled={isSubmitting} type="submit" className="bg-botanical-950 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all disabled:opacity-50 inline-flex items-center justify-center">
                        {isSubmitting ? 'Submitting...' : 'Submit Form'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
