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
import { Careers } from './pages/Careers';
import { Scholarship } from './pages/Scholarship';
import { DiscoveryCall } from './pages/DiscoveryCall';
import { ProgramDetail } from './pages/ProgramDetail';
import { NewsDetail } from './pages/NewsDetail';
import { InsightDetail } from './pages/InsightDetail';
import { PostView } from './pages/PostView';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Accreditation } from './pages/Accreditation';
import { GenericPage } from './components/GenericPage';
import { JoinNetwork, AlumniOutcomes, EventsPage } from './pages/CommunityPages';
import { motion, AnimatePresence } from 'motion/react';
import { StudentDashboard } from './pages/dashboards/StudentDashboard';
import { FacultyDashboard } from './pages/dashboards/FacultyDashboard';
import { StudentPortal } from './pages/StudentPortal';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { SimulationDetails } from './pages/SimulationDetails';
import { FullCourseViewer } from './pages/FullCourseViewer';
import WhoShouldApply from './pages/WhoShouldApply';
import InquireDetails from './pages/InquireDetails';
import InquirePricing from './pages/InquirePricing';
import FinancialAidPortal from './pages/FinancialAidPortal';
import AdmissionsFAQ from './pages/AdmissionsFAQ';
import CurriculumPage from './pages/CurriculumPage';
import { EventDetail } from './pages/EventDetail';
import { ModulePage } from './pages/ModulePage';

export default function App() {
  const [activePage, setActivePage] = useState<Page | 'full-course'>(() => {
    const path = window.location.pathname;
    if (path === '/dashboard/student') return 'dashboard-student';
    if (path === '/dashboard/faculty') return 'dashboard-faculty';
    return 'home';
  });
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<number>(0);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const [selectedSimulationId, setSelectedSimulationId] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [entryContext, setEntryContext] = useState<{ source: 'program' | 'simulation' | 'general'; id?: string }>({ source: 'general' });

  const handlePageChange = (page: Page, id?: string) => {
    if (id) {
      if (page === 'program-detail') {
        setSelectedProgramId(id);
        setEntryContext({ source: 'program', id: id });
      }
      if (page === 'module-viewer') {
        setSelectedModuleId(parseInt(id, 10));
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
      if (page === 'event-detail') {
        setSelectedEventId(id);
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
                  onExit={() => handlePageChange('simulation-labs')}
                />;
              case 'careers':
                return <Careers onPageChange={handlePageChange} />;
              case 'scholarship':
                return <Scholarship onPageChange={handlePageChange} />;
              case 'financial-aid':
                return <FinancialAidPortal onPageChange={handlePageChange} />;
              case 'discovery-call':
                return <DiscoveryCall onPageChange={handlePageChange} />;
              case 'events':
                return <EventsPage onPageChange={handlePageChange} onBack={() => setActivePage('community')} />;
              case 'alumni':
                return <AlumniOutcomes onPageChange={handlePageChange} onBack={() => setActivePage('community')} />;
              case 'join-network':
                return <JoinNetwork onPageChange={handlePageChange} onBack={() => setActivePage('community')} />;
              case 'simulation-details':
                return <SimulationDetails onBack={() => setActivePage('simulation-labs')} onPageChange={handlePageChange} />;
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
                return <StudentPortal onPageChange={handlePageChange} />;
              case 'login-faculty':
                return <FacultyDashboard onPageChange={handlePageChange} />;

              case 'program-detail':
                return <ProgramDetail programId={selectedProgramId} onPageChange={handlePageChange} onBack={() => setActivePage('programs')} />;
                
              case 'full-course':
                return <FullCourseViewer programId={selectedProgramId} onBack={() => setActivePage('dashboard-student')} />;

              case 'module-viewer':
                return (
                  <ModulePage 
                    programId={selectedProgramId} 
                    moduleId={selectedModuleId} 
                    onBack={() => setActivePage('dashboard-student')}
                    onComplete={() => setActivePage('dashboard-student')}
                  />
                );

              case 'post-view':
                return <PostView onPageChange={handlePageChange} />;

              case 'event-detail':
                return <EventDetail eventId={selectedEventId || undefined} onPageChange={handlePageChange} />;
              case 'insight-detail':
                return <InsightDetail insightId={selectedInsightId || undefined} onPageChange={handlePageChange} />;
              case 'news-detail':
                return <NewsDetail newsId={selectedNewsId || undefined} onPageChange={handlePageChange} />;

              // New Admissions & Curriculum Pages
              case 'who-should-apply':
                return <WhoShouldApply onPageChange={handlePageChange} />;
              case 'inquire-details':
                return <InquireDetails onPageChange={handlePageChange} />;
              case 'inquire-pricing':
                return <InquirePricing onPageChange={handlePageChange} />;
              case 'financial-aid':
                return <FinancialAidPortal onPageChange={handlePageChange} />;
              case 'admissions-faq':
                return <AdmissionsFAQ onPageChange={handlePageChange} />;
              case 'view-curriculum':
                return <CurriculumPage onPageChange={handlePageChange} />;

              default:
                return <Home onPageChange={handlePageChange} />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  // Don't show layout on dashboard, checkout, welcome, or simulation-demo pages
  const isDashboard = activePage.startsWith('dashboard-');
  const isMinimal = activePage === 'checkout' || activePage === 'welcome' || activePage === 'simulation-demo' || activePage === 'full-course';

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
