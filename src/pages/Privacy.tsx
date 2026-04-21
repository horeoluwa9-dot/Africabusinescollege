
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Scale } from 'lucide-react';
import { Page } from '../components/Layout';

interface PrivacyProps {
  onPageChange: (page: Page) => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ onPageChange }) => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Trust & Integrity</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-botanical-950 tracking-tighter uppercase mb-12 leading-none">
            Privacy <span className="text-emerald-500">Policy</span>
          </h1>

          <div className="prose prose-slate prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">1. Commitment to Data Executionty</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                At Africa Business College (ABC), we treat your data with the same institutional rigor we apply to our curriculum. We believe in data executionty—the principle that your professional and personal data belongs to you. Our systems are designed to protect your intellectual property and personal information against unauthorized access.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">2. Information Collection</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                We collect information necessary to provide our high-fidelity learning experiences:
              </p>
              <ul className="list-disc pl-6 text-slate-600 font-medium space-y-4 my-6">
                <li>Professional identity and contact information.</li>
                <li>Simulation performance data and strategic decision patterns.</li>
                <li>Cohort engagement and collaborative interaction data.</li>
                <li>Payment and institutional billing information.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">3. Use of Simulation Data</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Data generated within our Simulation Labs is used exclusively to refine your learning path and provide faculty with insights into cohort progress. We do not sell or monetize your individual strategic decisions to third parties. Anonymized, aggregated data may be used for institutional research to improve Pan-African business frameworks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">4. Security Infrastructure</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Our platform utilizes enterprise-grade encryption (AES-256) for data at rest and TLS for data in transit. We conduct regular institutional audits to ensure our defense systems meet global standards for educational technology.
              </p>
            </section>

            <section className="mb-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-black text-botanical-950 uppercase mb-4">Contact Our Privacy Officer</h3>
              <p className="text-sm text-slate-500 font-medium mb-6">For inquiries regarding data access or deletion requests:</p>
              <div className="text-emerald-500 font-black text-xs tracking-widest uppercase">integrity@abc.edu</div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
