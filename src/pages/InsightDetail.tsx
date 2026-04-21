import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2, Linkedin, Twitter, MessageSquare, Bookmark, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Page } from '../components/Layout';

interface InsightDetailProps {
  onPageChange: (page: Page, id?: string) => void;
  insightId?: string;
}

const INSIGHTS_DATA: Record<string, any> = {
  'sovereign-alpha': {
    title: 'The Sovereign Alpha: How African Institutional Capital is Redefining Global Risk.',
    category: 'SPECIAL REPORT',
    readTime: '12 MIN READ',
    author: 'Dr. Elias Ndlovu',
    role: 'Academic Director of Research',
    date: 'April 12, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p className="insight-dropcap">The tectonic plates of global finance are shifting, and the epicenter is moving toward the African continent. For decades, African institutional capital—pension funds, sovereign wealth funds, and central bank reserves—was viewed as a passive participant in the global economy. Today, it is emerging as the "Sovereign Alpha."</p>
      
      <h3>The Paradigm Shift</h3>
      <p>Data from the 2025 Economic Summit reveals that African pension funds now manage over $1.2 trillion in assets. This capital is no longer seeking western-managed passive index funds. Instead, it is being deployed into home-grown infrastructure, tech-enabled logistics, and strategic mineral value-chains.</p>
      
      <blockquote>
        "The era of external dependence is closing. We are seeing a transition from being a 'market for capital' to becoming a 'provider of strategic investment'."
      </blockquote>

      <h3>Redefining Risk</h3>
      <p>Global credit rating agencies have historically applied a "sovereign ceiling" that disconnected pricing from performance. African institutional investors, with their boots-on-the-ground intelligence, are proving that the perceived risk of African projects is often exponentially higher than the actual default risk.</p>
      
      <p>By leveraging local currency financing and regional trade agreements like the AfCFTA, these sovereign players are effectively hedging against the volatility of the US Dollar and Euro, creating a more stable internal economic engine.</p>

      <h3>Implications for the Next Economic Decade</h3>
      <p>As we look toward 2030, the integration of these capital pools will be the primary driver of the $6.7 trillion consumer and business spending projected for Africa. Leadership must now focus on the regulatory frameworks that allow this capital to flow seamlessly across borders while maintaining the highest standards of governance.</p>
    `
  },
  'urban-legacies': {
    title: 'Restructuring Urban Legacies: The Rise of Pan-African Smart Cities.',
    category: 'GOVERNANCE',
    readTime: '8 MIN READ',
    author: 'Amara Okafor',
    role: 'Lead Urban Researcher',
    date: 'April 05, 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The African metropolis is undergoing a digital metamorphosis. From the expansion of Eko Atlantic to the smart-grid integration in Nairobi, the template for the future city is being rewritten.</p>
      <h3>Decentralized Infrastructure</h3>
      <p>The traditional model of centralized utility grids is being challenged by micro-grids and localized water purification systems powered by blockchain governance. This allows cities to leapfrog 20th-century infrastructure gaps directly into 21st-century modularity.</p>
      <p>Smart cities are not just about technology; they are about high-fidelity governance that responds to citizen data in real-time.</p>
    `
  },
  'afcfta-playbook': {
    title: 'The AfCFTA Playbook: Navigating Cross-Border Liquidity in 2026.',
    category: 'MARKETS',
    readTime: '15 MIN READ',
    author: 'Kofi Mensah',
    role: 'Regional Trade Economist',
    date: 'March 28, 2026',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The African Continental Free Trade Area (AfCFTA) is more than a trade deal—it is a liquidity event. For the first time, capital can move with relative friction-less ease across 54 jurisdictions.</p>
      <h3>Managing the Liquidity Gap</h3>
      <p>The primary challenge remains the reconciliation of multiple local currencies during cross-border B2B transactions. The Pan-African Payment and Settlement System (PAPSS) is the technological backbone making this possible, reducing the reliance on third-party reserve currencies.</p>
    `
  },
  'sovereign-leadership': {
    title: 'Sovereign Leadership: Beyond the Quarterly Earnings Cycle.',
    category: 'STRATEGY',
    readTime: '12 MIN READ',
    author: 'Fatima Diop',
    role: 'Strategy Fellow',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>African business leadership is evolving from "management" to "stewardship." The concept of Sovereign Leadership prioritizes the long-term economic health of the continent as a primary indicator of corporate success.</p>
      <h3>The Social Utility Mandate</h3>
      <p>Unlike Western markets where shareholder primacy often dictates short-termism, African leaders are finding that embedding social impact into the core business model is the only path to sustainable returns over a multi-decade horizon.</p>
    `
  },
  'mining-future': {
    title: 'Mining the Future: Strategic Minerals and African Agency.',
    category: 'MINING',
    readTime: '18 MIN READ',
    author: 'Nia Mbeki',
    role: 'Venture Partner',
    date: 'April 02, 2026',
    image: 'https://images.unsplash.com/photo-1579546673235-43d0475ad672?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The global race for critical minerals—lithium, cobalt, and copper—is often framed as a new scramble for Africa. However, unlike previous eras, the modern landscape is defined by African agency and the demand for local value retention.</p>
      <h3>Value Addition Over Extraction</h3>
      <p>Policy frameworks in the DRC and Zambia are shifting toward mandatory local primary processing. This ensures that the continent remains more than just a source of raw materials, capturing a larger share of the EV battery supply chain.</p>
    `
  },
  'agritech-revolution': {
    title: "Agritech Revolution: Securing the Continent's Food Supply.",
    category: 'AGRITECH',
    readTime: '10 MIN READ',
    author: 'Joel Tsegaye',
    role: 'Senior Fellow',
    date: 'March 20, 2026',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The intersection of satellite imaging and micro-finance is solving the age-old problem of collateral for small-scale farmers. By using harvest yield predictions as credit scores, we are unlocking billions in previously inaccessible agricultural financing.</p>
    `
  },
  'vc-maturity': {
    title: 'Venture Capital Maturity: From Hype to High-Yield.',
    category: 'CAPITAL',
    readTime: '14 MIN READ',
    author: 'Zara Ibrahim',
    role: 'Market Analyst',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The African startup ecosystem is graduating. After the exuberance of 2021-2022, the focus has shifted from gross volume to unit economics and path-to-profitability. We are now entering the era of IPO readiness.</p>
    `
  },
  'last-mile-logistics': {
    title: 'Optimizing Last-Mile Logistics in Megacities.',
    category: 'OPERATIONS',
    readTime: '10 MIN READ',
    author: 'David Okafor',
    role: 'COO, Pan-African Logistics',
    date: 'April 15, 2026',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p className="insight-dropcap">The logistics of African megacities are defined by complexity. From the sprawling markets of Lagos to the hilly terrain of Addis Ababa, the "last mile" remains the most expensive and inefficient part of the supply chain.</p>
      <h3>The Data-Driven Solution</h3>
      <p>By leveraging real-time traffic data and localized micro-warehousing, we are seeing a 30% reduction in delivery times. The integration of electric bikes and two-wheelers into the formal logistics grid is further bypassing urban congestion.</p>
    `
  },
  'regulatory-sandbox': {
    title: 'Regulatory Sandbox: A Guide for Tech Founders.',
    category: 'POLICY',
    readTime: '14 MIN READ',
    author: 'Amara Diop',
    role: 'Former Minister of Innovation',
    date: 'April 18, 2026',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Regulation is often seen as a barrier to innovation, but in the most successful tech ecosystems, it is a partner. Regulatory sandboxes allow for controlled experimentation, protecting consumers while giving founders room to iterate on new financial and healthcare technologies.</p>
      <h3>Engaging with Stakeholders</h3>
      <p>Trust is the primary currency. Founders who engage early with central banks and telecommunication regulators find that the path to licensing is significantly smoother than those who seek to "move fast and break things" in highly sensitive African sectors.</p>
    `
  },
  'exit-strategies': {
    title: 'Exit Strategies for African Tech Startups.',
    category: 'CAPITAL',
    readTime: '18 MIN READ',
    author: 'Zara El-Amin',
    role: 'Partner, Blue Ocean Capital',
    date: 'April 20, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The liquidity question is no longer "if," but "when" and "how." As the first wave of Pan-African startups reaches maturity, the focus of both founders and investors is shifting toward the secondary market and strategic acquisitions.</p>
      <h3>The M&A Landscape</h3>
      <p>We are seeing increased interest from global tech giants and established African conglomerates looking to acquire specialized technological moats. The consolidation of the fintech sector is just the beginning of a broader exit cycle.</p>
    `
  }
};

export const InsightDetail = ({ onPageChange, insightId }: InsightDetailProps) => {
  const { isRTL } = useLanguage();
  const [notification, setNotification] = React.useState<string | null>(null);
  
  const insight = insightId ? INSIGHTS_DATA[insightId] : INSIGHTS_DATA['sovereign-alpha'];

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  if (!insight) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-black uppercase mb-4">Insight Not Found</h2>
        <button onClick={() => onPageChange('insights')} className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Return to Insights</button>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-12 left-1/2 z-[100] bg-botanical-950 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 border border-white/10"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reading Progress Bar */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 12, ease: "linear" }}
        className="fixed top-0 left-0 h-1 bg-emerald-500 z-50 origin-left"
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Navigation */}
        <button 
          onClick={() => onPageChange('insights')}
          className="group flex items-center space-x-2 text-slate-400 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Intelligence Hub</span>
        </button>

        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {insight.category}
            </span>
            <div className="flex items-center space-x-2 text-slate-400">
               <BookOpen className="w-3.5 h-3.5" />
               <span className="text-[10px] font-black uppercase tracking-widest">{insight.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-botanical-950 tracking-tighter uppercase leading-tight mb-12">
            {insight.title}
          </h1>

          <div className="flex items-center justify-between pb-12 border-b border-slate-100 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-50 shadow-sm">
                <img src={`https://i.pravatar.cc/100?u=${insight.author}`} alt={insight.author} referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="text-sm font-black text-botanical-950 uppercase tracking-tight">{insight.author}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{insight.role}</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-slate-400">
               <div className="flex items-center space-x-2">
                 <Calendar className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{insight.date}</span>
               </div>
               <div className="flex items-center space-x-4">
                 <button onClick={() => showNotification('Shared to LinkedIn')} className="hover:text-emerald-500 transition-colors"><Linkedin className="w-4 h-4" /></button>
                 <button onClick={() => showNotification('Shared to Twitter')} className="hover:text-emerald-500 transition-colors"><Twitter className="w-4 h-4" /></button>
                 <button onClick={() => showNotification('Share link copied')} className="hover:text-emerald-500 transition-colors"><Share2 className="w-4 h-4" /></button>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="aspect-[21/9] rounded-[48px] overflow-hidden mb-16 shadow-2xl relative"
        >
          <img 
            src={insight.image} 
            alt={insight.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/20 to-transparent" />
        </motion.div>

        {/* Article Body */}
        <article className="prose prose-slate prose-lg max-w-none mb-24">
          <div 
            className="insight-content font-medium text-slate-600 leading-[1.8]"
            dangerouslySetInnerHTML={{ __html: insight.content }} 
          />
        </article>

        {/* Article Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-y border-slate-100 gap-8">
           <div className="flex items-center space-x-6">
              <button 
                onClick={() => showNotification('Insight analysis saved to library')}
                className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-botanical-950 hover:text-emerald-500 transition-colors"
              >
                <Bookmark className="w-4 h-4" />
                <span>Save Analysis</span>
              </button>
              <button 
                onClick={() => showNotification('Opening community discussion...')}
                className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-botanical-950 hover:text-emerald-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discussion</span>
              </button>
           </div>
           <div className="flex items-center space-x-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Share Insight:</span>
              <div className="flex space-x-2">
                 {[
                   { icon: Linkedin, label: 'LinkedIn' },
                   { icon: Twitter, label: 'Twitter' },
                   { icon: Share2, label: 'Share Link' }
                 ].map((social, i) => (
                   <button 
                    key={i} 
                    onClick={() => showNotification(`${social.label} shared successfully`)}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"
                   >
                     <social.icon className="w-4 h-4" />
                   </button>
                 ))}
              </div>
           </div>
        </div>

        {/* Next Reading */}
        <div className="mt-24">
           <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 text-center">Recommended Academic Analysis</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <button 
                onClick={() => onPageChange('insight-detail', 'urban-legacies')}
                className="bg-slate-50 p-8 rounded-[32px] border border-transparent hover:border-emerald-500/20 text-left transition-all"
              >
                <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest mb-4 block">PREVIOUS</span>
                <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight">Restructuring Urban Legacies</h4>
              </button>
              <button 
                onClick={() => onPageChange('insight-detail', 'afcfta-playbook')}
                className="bg-slate-50 p-8 rounded-[32px] border border-transparent hover:border-emerald-500/20 text-left transition-all"
              >
                <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest mb-4 block">NEXT</span>
                <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight">The AfCFTA Playbook 2026</h4>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
