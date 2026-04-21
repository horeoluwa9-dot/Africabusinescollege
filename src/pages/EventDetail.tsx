import React, { useState } from 'react';
import { Page } from '../components/Layout';
import { ArrowLeft, Calendar, MapPin, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EventDetailProps {
  onPageChange: (page: Page, id?: string) => void;
  eventId?: string;
}

const eventsData: Record<string, any> = {
  'annual-summit-2026': {
    title: 'ABC Annual Summit 2026',
    date: 'DEC 12, 2026',
    time: '09:00 AM - 05:00 PM WAT',
    location: 'Lagos, Nigeria • Hybrid',
    description: 'Join us for the ABC Annual Summit 2026. A premier gathering of African business leaders, alumni, and visionary thinkers focusing on the future of continental trade and investment.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    type: 'registration'
  },
  'founders-dinner': {
    title: 'Founders\' Private Dinner',
    date: 'JAN 05, 2027',
    time: '07:00 PM - 10:00 PM EAT',
    location: 'Nairobi, Kenya • Invite Only',
    description: 'An exclusive, invite-only dinner for notable alumni founders and key institutional investors. Discussions will be held under Chatham House rules focusing on scaling across borders.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    type: 'request'
  },
  'regional-joburg': {
    title: 'Regional Meetup: Joburg',
    date: 'FEB 10, 2027',
    time: '06:00 PM - 09:00 PM SAST',
    location: 'Johannesburg, RSA • In-Person',
    description: 'Connect with ABC alumni, incoming students, and faculty based in Southern Africa. We will be discussing the evolution of fintech regulation in the SADC region.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80',
    type: 'rsvp'
  },
  'venture-showcase-accra': {
    title: 'Venture Showcase: Accra',
    date: 'MAR 15, 2027',
    time: '02:00 PM - 08:00 PM GMT',
    location: 'Accra, Ghana • Hybrid',
    description: 'Witness the next generation of West African startups pitch their models to a panel of pan-African VC funds. Features presentations from Cohort 4 of the Venture Building program.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=1200&q=80',
    type: 'registration'
  },
  'policy-roundtable-cairo': {
    title: 'Policy Roundtable: Cairo',
    date: 'APR 20, 2027',
    time: '10:00 AM - 01:00 PM EET',
    location: 'Cairo, Egypt • In-Person',
    description: 'A focused discussion between technology founders and policymakers on creating seamless regulatory environments for cross-border digital economies in North and East Africa.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
    type: 'request'
  }
};

export const EventDetail = ({ onPageChange, eventId = 'annual-summit-2026' }: EventDetailProps) => {
  const event = eventsData[eventId] || eventsData['annual-summit-2026'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAction = () => {
    setIsModalOpen(true);
    setIsSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const getActionText = () => {
    if (event.type === 'request') return 'Request Invite';
    if (event.type === 'rsvp') return 'RSVP Now';
    return 'Register Now';
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Article Header */}
      <section className="pt-16 pb-12 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => onPageChange('community')}
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-500 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Community</span>
          </button>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Event</span>
            <div className="flex items-center text-slate-400 text-xs font-black uppercase tracking-widest">
              <Calendar className="w-3 h-3 mr-2" />
              {event.date}
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center text-slate-400 text-xs font-black uppercase tracking-widest">
              <MapPin className="w-3 h-3 mr-2" />
              {event.location.split('•')[0].trim()}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-botanical-950 uppercase tracking-tighter leading-[0.95] mb-8">
            {event.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 md:items-center py-6 border-y border-slate-100">
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Time</span>
              <span className="text-sm font-bold text-botanical-950">{event.time}</span>
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Location / Format</span>
              <span className="text-sm font-bold text-botanical-950">{event.location}</span>
            </div>
            <div className="shrink-0">
              <button onClick={handleAction} className="bg-botanical-950 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors shadow-lg">
                {getActionText()}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto aspect-video rounded-[40px] overflow-hidden shadow-2xl relative">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-3xl mx-auto prose prose-lg prose-emerald text-slate-600 font-medium">
          <p className="text-xl leading-relaxed mb-8 text-botanical-950">{event.description}</p>
          <h3>Why Attend?</h3>
          <p>
            ABC gatherings are designed strictly for actionable outcomes. Unlike typical conferences, our events emphasize structured networking, deep-dive problem-solving, and facilitated discussions with verified operators.
          </p>
          <ul>
            <li>Connect with top-tier African founders and operators</li>
            <li>Explore insights curated by ABC academic directors</li>
            <li>Identify partnership or funding opportunities in a focused setting</li>
          </ul>
        </div>
      </section>

      {/* Booking Modal */}
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
              className="bg-white rounded-3xl w-full max-w-lg relative z-10 shadow-2xl p-8 md:p-12"
            >
              <button onClick={closeModal} className="absolute top-6 right-6 w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center transition-colors">
                <X className="w-5 h-5 text-slate-500" />
              </button>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-botanical-950 tracking-tighter uppercase mb-4">Request Received</h2>
                  <p className="text-slate-500 font-medium mb-8">Thank you for your interest in {event.title}. We have sent a confirmation email with further details.</p>
                  <button 
                    onClick={closeModal}
                    className="w-full bg-slate-100 text-botanical-950 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-botanical-950 tracking-tighter uppercase mb-2">{getActionText()}</h2>
                    <p className="text-emerald-600 font-black uppercase tracking-widest text-[10px]">{event.title}</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-all shadow-sm" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-all shadow-sm" placeholder="jane@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Organization</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-emerald-500 transition-all shadow-sm" placeholder="Your Company/Institution" />
                    </div>

                    <div className="pt-4 mt-8 border-t border-slate-100">
                      <button disabled={isSubmitting} type="submit" className="w-full bg-botanical-950 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all disabled:opacity-50 inline-flex items-center justify-center shadow-xl">
                        {isSubmitting ? 'Processing...' : getActionText()}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
