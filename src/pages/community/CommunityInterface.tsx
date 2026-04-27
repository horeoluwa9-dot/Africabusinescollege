import React, { useState } from 'react';
import { 
  MessageSquare, 
  Hash, 
  Users, 
  Layout, 
  Bookmark, 
  Activity, 
  Search, 
  Bell, 
  Plus,
  Send,
  Link,
  Tag as TagIcon,
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type Section = 'feed' | 'forums' | 'channels' | 'cohorts' | 'saved' | 'activity' | 'drafts';

interface Post {
  id: string;
  author: {
    name: string;
    role: 'Student' | 'Founder' | 'Mentor';
    avatar: string;
  };
  timestamp: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  isLiked: boolean;
  isSaved: boolean;
  type: 'update' | 'question' | 'insight' | 'resource';
}

const CommunityInterface: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('feed');
  const [activeTab, setActiveTab] = useState<'all' | 'following' | 'cohort' | 'trending'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: {
        name: 'Sarah Chen',
        role: 'Founder',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
      },
      timestamp: '2h ago',
      content: 'Just closed our seed round! The negotiation strategies from Lab #4 were game-changing. If anyone is currently talking to investors in the fintech space, happy to share my term sheet templates.',
      tags: ['#Funding', '#Fintech', '#VentureBuilding'],
      likes: 124,
      comments: 18,
      isLiked: false,
      isSaved: false,
      type: 'insight'
    },
    {
      id: '2',
      author: {
        name: 'Michael Okon',
        role: 'Student',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
      },
      timestamp: '4h ago',
      content: 'Does anyone have experience navigating the new digital trade regulations in Kenya? Mapping out our market entry and would love some peer feedback on compliance steps.',
      tags: ['#Kenya', '#Regulation', '#Scaling'],
      likes: 45,
      comments: 32,
      isLiked: true,
      isSaved: true,
      type: 'question'
    }
  ]);

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(post => 
      post.id === id ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked } : post
    ));
  };

  const handleSave = (id: string) => {
    setPosts(prev => prev.map(post => 
      post.id === id ? { ...post, isSaved: !post.isSaved } : post
    ));
  };

  return (
    <div className="flex h-full bg-[#F8FAFC]">
      {/* 🧭 Left Sidebar (Navigation) */}
      <div className="w-64 border-r border-slate-200 bg-white flex flex-col pt-6">
        <div className="px-6 mb-8">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Explore Community</div>
          <nav className="space-y-1">
            <SidebarItem 
              icon={<Activity size={18} />} 
              label="Feed" 
              active={activeSection === 'feed'} 
              onClick={() => setActiveSection('feed')} 
            />
            <SidebarItem 
              icon={<MessageSquare size={18} />} 
              label="Forums" 
              active={activeSection === 'forums'} 
              onClick={() => setActiveSection('forums')} 
            />
            <SidebarItem 
              icon={<Hash size={18} />} 
              label="Channels" 
              active={activeSection === 'channels'} 
              onClick={() => setActiveSection('channels')} 
            />
            <SidebarItem 
              icon={<Users size={18} />} 
              label="Cohort Groups" 
              active={activeSection === 'cohorts'} 
              onClick={() => setActiveSection('cohorts')} 
            />
          </nav>
        </div>

        <div className="px-6 mb-8">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">My Dashboard</div>
          <nav className="space-y-1">
            <SidebarItem 
              icon={<Bookmark size={18} />} 
              label="Saved Posts" 
              active={activeSection === 'saved'} 
              onClick={() => setActiveSection('saved')} 
            />
            <SidebarItem 
              icon={<Activity size={18} />} 
              label="My Activity" 
              active={activeSection === 'activity'} 
              onClick={() => setActiveSection('activity')} 
            />
            <SidebarItem 
              icon={<Layout size={18} />} 
              label="Drafts" 
              active={activeSection === 'drafts'} 
              onClick={() => setActiveSection('drafts')} 
            />
          </nav>
        </div>

        {/* Suggested Channels in sidebar for utility */}
        <div className="px-6 mt-auto pb-8">
          <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
            <h4 className="text-[10px] font-black text-emerald-900 mb-2 uppercase tracking-widest">Live Workshop</h4>
            <p className="text-[11px] text-emerald-700 font-medium leading-relaxed mb-3">#founders-lounge: Scalability hurdles with Dr. Adu</p>
            <button className="w-full bg-emerald-500 text-white py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">Join Session</button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 🟢 Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-xl font-black text-botanical-950 uppercase tracking-tight">Community</h1>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mt-1">Connect, share, and build with other ABC participants</p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search posts, people, topics..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="relative w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-full transition-all">
              <Bell size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white" />
            </button>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="bg-botanical-950 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center space-x-2 hover:bg-emerald-500 transition-all shadow-lg"
            >
              <Plus size={14} />
              <span>Create Post</span>
            </button>
          </div>
        </header>

        {/* 🧩 Center — Main Feed / Content Section */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto no-scrollbar pt-8 px-8 pb-32">
            <AnimatePresence mode="wait">
              {activeSection === 'feed' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-3xl mx-auto"
                >
                  {/* 🔹 Feed Types Toggle */}
                  <div className="flex space-x-4 mb-8">
                    {['all', 'following', 'cohort', 'trending'].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                          activeTab === tab 
                            ? 'bg-botanical-950 text-white shadow-lg' 
                            : 'bg-white text-slate-500 border border-slate-100 hover:border-emerald-500/30 hover:text-emerald-500'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* 🔹 Post Composer (TOP) */}
                  <div className="bg-white rounded-3xl border border-slate-100 p-6 mb-10 shadow-sm">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center font-black text-emerald-600 text-lg uppercase">
                        JD
                      </div>
                      <textarea 
                        placeholder="Share an update, insight, or question..." 
                        className="flex-1 bg-slate-50/50 border border-transparent rounded-2xl p-4 text-sm focus:outline-none focus:bg-white focus:border-emerald-500/30 transition-all min-h-[100px] resize-none"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <div className="flex items-center space-x-4">
                        <button className="text-slate-400 hover:text-emerald-500 transition-colors"><Link size={18} /></button>
                        <button className="text-slate-400 hover:text-emerald-500 transition-colors"><TagIcon size={18} /></button>
                        <select className="bg-slate-50 border-none text-[10px] font-black uppercase tracking-widest text-slate-500 rounded-lg px-3 py-1.5 focus:ring-0 cursor-pointer">
                          <option>Update</option>
                          <option>Question</option>
                          <option>Insight</option>
                          <option>Resource</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors">Save Draft</button>
                        <button className="bg-emerald-500 text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">Post</button>
                      </div>
                    </div>
                  </div>

                  {/* 🧱 Feed Posts */}
                  <div className="space-y-8">
                    {posts.map(post => (
                      <PostCard 
                        key={post.id} 
                        post={post} 
                        onLike={() => handleLike(post.id)} 
                        onSave={() => handleSave(post.id)}
                      />
                    ))}

                    {posts.length === 0 && (
                      <div className="py-24 text-center">
                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                          <MessageSquare className="text-emerald-500" size={32} />
                        </div>
                        <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tight mb-2">Start the conversation</h3>
                        <p className="text-slate-400 text-sm font-medium mb-8">No posts yet in this category. Be the first to build the momentum.</p>
                        <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center space-x-3 mx-auto">
                          <Plus size={16} />
                          <span>Create First Post</span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeSection === 'forums' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-4xl mx-auto space-y-12"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter">Structured Forums</h2>
                    <button className="text-emerald-500 text-[10px] font-black uppercase tracking-widest border-b border-emerald-500 pb-1">Start Discussion</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['Entrepreneurship', 'Funding & Investment', 'Market Strategy', 'Technology', 'Leadership'].map(cat => (
                      <ForumCategory key={cat} title={cat} />
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'channels' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-[calc(100vh-160px)] flex flex-col"
                >
                  <div className="flex-1 overflow-y-auto no-scrollbar space-y-6 pb-8">
                    <ChannelHeader name="#founders" />
                    <ChatMessage author="Dr. Amara Diop" text="The term sheets for the upcoming Demo Day are now available in the resources tab." timestamp="10:30 AM" />
                    <ChatMessage author="Michael Okon" text="Exploring the new logistics routes via the Port of Mombasa. Anyone seeing similar efficiency gains?" timestamp="10:45 AM" />
                    <ChatMessage author="Sarah Chen" text="Efficiency is up by 15% but fuel costs are still the primary hurdle." timestamp="11:02 AM" isSelf />
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-200">
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center space-x-4 shadow-sm">
                      <input 
                        placeholder="Message #founders..." 
                        className="flex-1 bg-slate-50 border-none text-sm p-3 rounded-xl focus:ring-0"
                      />
                      <button className="w-10 h-10 bg-emerald-500 text-white flex items-center justify-center rounded-xl hover:bg-emerald-600 transition-all">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 🧠 Right Sidebar (Discovery Panel) */}
          <div className="w-80 border-l border-slate-200 bg-white overflow-y-auto no-scrollbar p-8 hidden xl:block">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Trending Topics</h3>
                <TrendingUp size={14} className="text-emerald-500" />
              </div>
              <div className="space-y-4">
                {['#Entrepreneurship', '#Funding', '#Scalability', '#AfricanMarkets', '#TradePolicy'].map(topic => (
                  <div key={topic} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-medium text-slate-500 group-hover:text-emerald-500 transition-colors">{topic}</span>
                    <span className="text-[10px] text-slate-400 font-bold">124 posts</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Active Members</h3>
                <Users size={14} className="text-slate-400" />
              </div>
              <div className="space-y-6">
                {[
                  { name: 'Dr. Amara Diop', role: 'Mentor', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80' },
                  { name: 'Sarah Chen', role: 'Founder', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80' },
                  { name: 'Michael Okon', role: 'Student', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' }
                ].map(member => (
                  <div key={member.name} className="flex items-center space-x-4 group cursor-pointer">
                    <img src={member.avatar} alt="" className="w-10 h-10 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <div className="text-sm font-black text-botanical-950 line-clamp-1">{member.name}</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-emerald-500">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <Award size={18} className="text-emerald-500" />
                <h4 className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Featured Post</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium mb-6 italic">
                "The most valuable asset in the ABC ecosystem isn't the data, it's the accountability of your peers."
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Read Thread</span>
                <ChevronRight size={14} className="text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const SidebarItem = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-botanical-950 text-white shadow-lg' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-botanical-950'
    }`}
  >
    <span className={`${active ? 'text-emerald-500' : 'text-slate-400'}`}>{icon}</span>
    <span className="text-sm font-bold uppercase tracking-tight">{label}</span>
  </button>
);

const PostCard: React.FC<{ post: Post, onLike: () => void, onSave: () => void }> = ({ post, onLike, onSave }) => (
  <div className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl hover:border-emerald-500/10 transition-all group">
    {/* Header */}
    <div className="flex items-start justify-between mb-8">
      <div className="flex items-center space-x-4">
        <img src={post.author.avatar} alt="" className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" />
        <div>
          <div className="flex items-center space-x-3">
            <h4 className="text-lg font-black text-botanical-950 tracking-tight leading-none">{post.author.name}</h4>
            <span className="px-2 py-0.5 bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-500 rounded">{post.author.role}</span>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{post.timestamp} • {post.type}</p>
        </div>
      </div>
      <button className="text-slate-300 hover:text-botanical-950 transition-colors"><MoreVertical size={20} /></button>
    </div>

    {/* Content */}
    <div className="mb-8">
      <p className="text-slate-600 font-medium leading-relaxed mb-6">{post.content}</p>
      <div className="flex flex-wrap gap-3">
        {post.tags.map(tag => (
          <span key={tag} className="text-emerald-500 font-bold text-sm hover:underline cursor-pointer">{tag}</span>
        ))}
      </div>
    </div>

    {/* Interaction Bar */}
    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
      <div className="flex items-center space-x-8">
        <button 
          onClick={onLike}
          className={`flex items-center space-x-2 transition-colors ${post.isLiked ? 'text-emerald-500' : 'text-slate-400 hover:text-botanical-950'}`}
        >
          <Heart size={20} fill={post.isLiked ? "currentColor" : "none"} />
          <span className="text-[10px] font-black uppercase tracking-widest">{post.likes}</span>
        </button>
        <button className="flex items-center space-x-2 text-slate-400 hover:text-botanical-950 transition-colors">
          <MessageCircle size={20} />
          <span className="text-[10px] font-black uppercase tracking-widest">{post.comments}</span>
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <button 
          onClick={onSave}
          className={`transition-colors ${post.isSaved ? 'text-emerald-500' : 'text-slate-400 hover:text-emerald-500'}`}
        >
          <Bookmark size={20} fill={post.isSaved ? "currentColor" : "none"} />
        </button>
        <button className="text-slate-400 hover:text-emerald-500 transition-colors">
          <Share2 size={20} />
        </button>
      </div>
    </div>
  </div>
);

const ForumCategory: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-white p-8 rounded-[32px] border border-slate-100 hover:border-emerald-500/30 transition-all cursor-pointer group">
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
        <MessageSquare size={24} />
      </div>
      <div className="text-right">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Threads</div>
        <div className="text-xl font-black text-botanical-950">142</div>
      </div>
    </div>
    <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tighter mb-4 group-hover:text-emerald-500 transition-colors">{title}</h3>
    <div className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
      <span>Latest: Market Entry Nairobi</span>
      <ChevronRight size={10} />
    </div>
  </div>
);

const ChannelHeader = ({ name }: { name: string }) => (
  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl mb-8 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-black">#</div>
      <div>
        <h4 className="text-emerald-900 font-black uppercase tracking-tight">{name}</h4>
        <p className="text-[10px] text-emerald-600 font-medium">Real-time collaboration across sectors</p>
      </div>
    </div>
    <div className="flex -space-x-3">
      {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />)}
      <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-[8px] font-black text-white">+12</div>
    </div>
  </div>
);

const ChatMessage = ({ author, text, timestamp, isSelf }: { author: string, text: string, timestamp: string, isSelf?: boolean }) => (
  <div className={`flex flex-col ${isSelf ? 'items-end' : 'items-start'}`}>
    {!isSelf && <div className="text-[9px] font-black uppercase tracking-widest text-emerald-500 mb-1 ml-4">{author}</div>}
    <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
      isSelf ? 'bg-botanical-950 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-600 rounded-tl-none'
    }`}>
      {text}
    </div>
    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1 px-1">{timestamp}</div>
  </div>
);

export default CommunityInterface;
