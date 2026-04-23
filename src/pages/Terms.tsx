
import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, Gavel, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Page } from '../components/Layout';

interface TermsProps {
  onPageChange: (page: Page) => void;
}

export const Terms: React.FC<TermsProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
            <Gavel className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Institutional Framework</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-botanical-950 tracking-tighter uppercase mb-12 leading-none">
            Terms of <span className="text-emerald-500">Service</span>
          </h1>

          <div className="prose prose-slate prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">1. Acceptance of Institutional Standards</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                By entering Africa Business College (ABC), you agree to abide by our institutional standards. These terms govern your use of the ABC digital campus, simulation environments, and cohort collaboration tools. Access is granted as a privilege to selected scholars committed to continental excellence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">2. Intellectual Property & Academic Honesty</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                The ABC curriculum, simulation algorithms, and proprietary frameworks are the exclusive intellectual property of the College. Scholars are granted a non-transferable license for personal learning. Unauthorized distribution, replication, or reverse-engineering of our simulation environments is strictly prohibited and governed by international copyright law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">3. Professional Conduct in Cohorts</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Scholars are expected to maintain the highest levels of professional decorum. Harassment, discrimination, or disruptive behavior within cohort channels or the Simulation Labs will result in immediate termination of the session and potential institutional review.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">4. Simulation Sandbox Use</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                ABC Simulation Labs are high-fidelity models of real-world markets. While we strive for accuracy, simulation outcomes are educational tools and should not be interpreted as financial or legal advice for actual business operations. ABC is not liable for real-world business decisions made based on simulated outcomes.
              </p>
            </section>

            <section className="mb-12 p-8 bg-botanical-950 text-white rounded-3xl border border-white/5">
              <h3 className="text-xl font-black uppercase mb-4 text-emerald-500">5. Termination & Refund Policy</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
                Enrollment fees are commitments to the cohort and faculty. Refunds are processed according to our institutional calendar—typically within 14 days of enrollment, provided no simulation labs have been initialized. ABC reserves the right to terminate access for breaches of academic integrity.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
