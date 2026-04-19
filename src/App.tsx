/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Layout, Page } from './components/Layout';
import { Home } from './pages/Home';
import { Insights } from './pages/Insights';
import { Programs } from './pages/Programs';
import { Admissions } from './pages/Admissions';
import { Learning } from './pages/Learning';
import { About } from './pages/About';
import { SimulationLabs } from './pages/SimulationLabs';
import { SimulationDemo } from './pages/SimulationDemo';
import { Partnerships } from './pages/Partnerships';
import { Community } from './pages/Community';
import { Faculty } from './pages/Faculty';
import { Contact } from './pages/Contact';
import { Application } from './pages/Application';
import { Checkout } from './pages/Checkout';
import { Welcome } from './pages/Welcome';
import { Experience } from './pages/Experience';
import { ProgramDetail } from './pages/ProgramDetail';
import { NewsDetail } from './pages/NewsDetail';
import { InsightDetail } from './pages/InsightDetail';
import { PostDownload } from './pages/PostDownload';
import { PostView } from './pages/PostView';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Accreditation } from './pages/Accreditation';
import { GenericPage } from './components/GenericPage';
import { motion, AnimatePresence } from 'motion/react';
import { StudentDashboard } from './pages/dashboards/StudentDashboard';
import { FacultyDashboard } from './pages/dashboards/FacultyDashboard';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  const [activePage, setActivePage] = useState<Page>(() => {
    const path = window.location.pathname;
    if (path === '/dashboard/student') return 'dashboard-student';
    if (path === '/dashboard/faculty') return 'dashboard-faculty';
    return 'home';
  });
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const [selectedSimulationId, setSelectedSimulationId] = useState<string | null>(null);
  const [entryContext, setEntryContext] = useState<{ source: 'program' | 'simulation' | 'general'; id?: string }>({ source: 'general' });

  const handlePageChange = (page: Page, id?: string) => {
    if (id) {
      if (page === 'program-detail') {
        setSelectedProgramId(id);
        setEntryContext({ source: 'program', id: id });
      }
      if (page === 'news-detail') {
        setSelectedNewsId(id);
      }
      if (page === 'insight-detail') {
        setSelectedInsightId(id);
      }
      if (page === 'simulation-demo') {
        setSelectedSimulationId(id);
      }
    }

    if (page === 'application' && entryContext.source === 'general') {
      // If we're going to application and haven't set a source yet, it's general
      // unless we just came from programs/simulation
      if (activePage === 'simulation-labs') {
        setEntryContext({ source: 'simulation' });
      }
    }

    setActivePage(page);
  };

  // Handle URL changes (for dashboard links)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/dashboard/student') setActivePage('dashboard-student');
      else if (path === '/dashboard/faculty') setActivePage('dashboard-faculty');
      else setActivePage('home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when page changes
  useEffect(() => {
    if (activePage === 'dashboard-student') {
      window.history.pushState({}, '', '/dashboard/student');
    } else if (activePage === 'dashboard-faculty') {
      window.history.pushState({}, '', '/dashboard/faculty');
    } else {
      // For other pages, we could use URL prefixes like /en/about but for now let's keep it simple
      // and just clear the path if it's a main page
      if (window.location.pathname.startsWith('/dashboard')) {
        window.history.pushState({}, '', '/');
      }
    }
  }, [activePage]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {(() => {
            switch (activePage) {
              case 'home':
                return <Home onPageChange={handlePageChange} />;
              case 'insights':
                return <Insights onPageChange={handlePageChange} />;
              case 'programs':
                return <Programs onPageChange={handlePageChange} />;
              case 'admissions':
                return <Admissions onPageChange={handlePageChange} />;
              case 'experience':
                return <Experience onPageChange={handlePageChange} />;
              case 'about':
                return <About onPageChange={handlePageChange} />;
              
              // Dashboards
              case 'dashboard-student':
                return <StudentDashboard onPageChange={handlePageChange} />;
              case 'dashboard-faculty':
                return <FacultyDashboard onPageChange={handlePageChange} />;
              
              // Footer & Missing Pages
              case 'faculty':
                return <Faculty onPageChange={handlePageChange} />;
              case 'learning':
                return <Learning onPageChange={handlePageChange} />;
              case 'simulation-labs':
                return <SimulationLabs onPageChange={handlePageChange} />;
              case 'simulation-demo':
                return <SimulationDemo 
                  simulationId={selectedSimulationId}
                  onApply={() => handlePageChange('application')} 
                  onContinueProgram={() => handlePageChange('programs')} 
                />;
              case 'careers':
                return <GenericPage title="Careers" description="Join the team architecting the future of African business education." onBack={() => setActivePage('home')} />;
              case 'community':
                return <Community onPageChange={handlePageChange} />;
              case 'partnerships':
                return <Partnerships onPageChange={handlePageChange} />;
              case 'contact':
                return <Contact onPageChange={handlePageChange} />;
              case 'application':
                return <Application 
                  onComplete={() => setActivePage('checkout')} 
                  onBack={() => setActivePage('admissions')}
                  onPageChange={handlePageChange}
                  context={entryContext}
                />;
              case 'checkout':
                return <Checkout onComplete={() => setActivePage('welcome')} onBack={() => setActivePage('application')} />;
              case 'welcome':
                return <Welcome onDashboard={() => setActivePage('dashboard-student')} onSimulation={() => setActivePage('simulation-labs')} />;
              case 'privacy':
                return <Privacy onPageChange={handlePageChange} />;
              case 'terms':
                return <Terms onPageChange={handlePageChange} />;
              case 'accreditation':
                return <Accreditation onPageChange={handlePageChange} />;
              case 'login-student':
                return <GenericPage title="Student Portal" description="Access your learning modules, labs, and cohort network." onBack={() => setActivePage('home')} />;
              case 'login-faculty':
                return <GenericPage title="Faculty Portal" description="Manage your sessions, research, and student progress." onBack={() => setActivePage('home')} />;
              
              // Program Sub-pages
              case 'entrepreneurship':
                return <GenericPage title="Entrepreneurship" description="Master the mechanics of building scalable businesses in African markets." onBack={() => setActivePage('programs')} />;
              case 'venture-building':
                return <GenericPage title="Venture Building" description="From ideation to Series A: The blueprint for continental startups." onBack={() => setActivePage('programs')} />;
              case 'digital-business':
                return <GenericPage title="Digital Business" description="Scaling products and platforms in the world's fastest-growing digital economy." onBack={() => setActivePage('programs')} />;
              case 'innovation-leadership':
                return <GenericPage title="Innovation Leadership" description="Leading high-performance teams through digital transformation." onBack={() => setActivePage('programs')} />;

              case 'program-detail':
                return <ProgramDetail programId={selectedProgramId} onPageChange={handlePageChange} onBack={() => setActivePage('programs')} />;

              case 'post-download':
                return <PostDownload onPageChange={handlePageChange} />;
              
              case 'post-view':
                return <PostView onPageChange={handlePageChange} />;

              case 'insight-detail':
                return <InsightDetail insightId={selectedInsightId || undefined} onPageChange={handlePageChange} />;
              case 'news-detail':
                return <NewsDetail newsId={selectedNewsId || undefined} onPageChange={handlePageChange} />;

              default:
                return <Home onPageChange={handlePageChange} />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  // Don't show layout on dashboard, checkout, or welcome pages
  const isDashboard = activePage.startsWith('dashboard-');
  const isMinimal = activePage === 'checkout' || activePage === 'welcome';

  if (isDashboard || isMinimal) {
    return (
      <LanguageProvider>
        <AuthProvider>
          {renderPage()}
        </AuthProvider>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <AuthProvider>
        <Layout activePage={activePage} onPageChange={handlePageChange}>
          {renderPage()}
        </Layout>
      </AuthProvider>
    </LanguageProvider>
  );
}
