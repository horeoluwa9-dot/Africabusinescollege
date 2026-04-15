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
import { Experience } from './pages/Experience';
import { About } from './pages/About';
import { GenericPage } from './components/GenericPage';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'insights':
        return <Insights />;
      case 'programs':
        return <Programs />;
      case 'admissions':
        return <Admissions />;
      case 'experience':
        return <Experience />;
      case 'about':
        return <About />;
      
      // Footer & Missing Pages
      case 'faculty':
        return <GenericPage title="Our Faculty" description="Meet the practitioners and visionaries leading the next generation of African business." onBack={() => setActivePage('home')} />;
      case 'learning':
        return <GenericPage title="Learning Model" description="Explore our unique pedagogical approach blending institutional rigor with digital velocity." onBack={() => setActivePage('home')} />;
      case 'simulation-labs':
        return <GenericPage title="Simulation Labs" description="High-fidelity environments for stress-testing sovereign business strategies." onBack={() => setActivePage('home')} />;
      case 'careers':
        return <GenericPage title="Careers" description="Join the team architecting the future of African business education." onBack={() => setActivePage('home')} />;
      case 'community':
        return <GenericPage title="Community" description="A curated network of 40,000+ global leaders and alumni." onBack={() => setActivePage('home')} />;
      case 'partnerships':
        return <GenericPage title="Partnerships" description="Collaborate with ABC to drive continental transformation." onBack={() => setActivePage('home')} />;
      case 'contact':
        return <GenericPage title="Contact Us" description="Get in touch with our institutional support team." onBack={() => setActivePage('home')} />;
      case 'privacy':
        return <GenericPage title="Privacy Policy" description="How we protect your data and maintain institutional integrity." onBack={() => setActivePage('home')} />;
      case 'terms':
        return <GenericPage title="Terms of Service" description="The legal framework governing your interaction with ABC." onBack={() => setActivePage('home')} />;
      case 'accreditation':
        return <GenericPage title="Accreditation" description="Our commitment to global standards and continental excellence." onBack={() => setActivePage('home')} />;
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

      default:
        return <Home />;
    }
  };

  return (
    <Layout activePage={activePage} onPageChange={setActivePage}>
      {renderPage()}
    </Layout>
  );
}
