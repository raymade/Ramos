import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CinematicHeroSlider } from './components/CinematicHeroSlider';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { ServicesOverviewSection } from './components/ServicesOverviewSection';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { DesignProcessSection } from './components/DesignProcessSection';
import { CaseStudySpotlight } from './components/CaseStudySpotlight';
import { WhatYouCanExpectSection } from './components/WhatYouCanExpectSection';
import { FinalCTASection } from './components/FinalCTASection';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { CapabilitiesModal } from './components/CapabilitiesModal';
import { LeadManagementModal } from './components/LeadManagementModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { SEOMetadata } from './components/SEOMetadata';
import { PROJECTS_DATA, DESIGNER_INFO } from './data/portfolioData';
import { SubmittedLead, getProjectBySlug } from './utils/portfolioLogic';

const STORAGE_KEY = 'ramzy_sn_all_leads';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('UI/UX Design');
  const [workFilterCategory, setWorkFilterCategory] = useState<string>('All Work');
  const [isCapabilitiesModalOpen, setIsCapabilitiesModalOpen] = useState(false);
  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);

  // Leads persistent state
  const [leads, setLeads] = useState<SubmittedLead[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to parse stored leads', e);
    }
    // Seed initial demo inquiry for portal demonstration
    return [
      {
        id: 'lead_initial_demo',
        fullName: 'Marcus Vance',
        email: 'marcus.v@novatech.co',
        companyName: 'NovaTech FinTech',
        serviceRequired: 'UI/UX Design',
        projectDescription: 'We are preparing to launch our seed-stage B2B payment app and need an intuitive mobile UI/UX flow and comprehensive design system.',
        budgetRange: '$5,000 – $10,000',
        desiredTimeline: '2 – 4 weeks',
        preferredContactMethod: 'whatsapp',
        referenceLinks: 'https://figma.com/@sample',
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        status: 'In Discussion',
      },
    ];
  });

  // Keep localStorage updated
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {
      console.warn('Failed to save leads to storage', e);
    }
  }, [leads]);

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (slug: string) => {
    navigateTo(`/project/${slug}`);
  };

  const handleSelectServiceForEnquiry = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
    navigateTo('/contact');
  };

  const handleHeroFilterCategory = (category: string) => {
    setWorkFilterCategory(category);
    navigateTo('/work');
  };

  const handleSaveLead = (newLead: SubmittedLead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleUpdateLeadStatus = (id: string, newStatus: SubmittedLead['status']) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
  };

  const handleDeleteLead = (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  // Determine current route
  const renderCurrentView = () => {
    // Project detail route: /project/:slug
    if (currentPath.startsWith('/project/')) {
      const slug = currentPath.replace('/project/', '');
      const project = getProjectBySlug(PROJECTS_DATA, slug);
      if (project) {
        return (
          <ProjectDetailPage
            project={project}
            allProjects={PROJECTS_DATA}
            onSelectProject={handleSelectProject}
            onNavigate={navigateTo}
          />
        );
      }
      return (
        <WorkPage
          projects={PROJECTS_DATA}
          initialCategory={workFilterCategory}
          onSelectProject={handleSelectProject}
          onNavigate={navigateTo}
        />
      );
    }

    if (currentPath === '/work') {
      return (
        <WorkPage
          projects={PROJECTS_DATA}
          initialCategory={workFilterCategory}
          onSelectProject={handleSelectProject}
          onNavigate={navigateTo}
        />
      );
    }

    if (currentPath === '/services') {
      return (
        <ServicesPage
          onNavigate={navigateTo}
          onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
        />
      );
    }

    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigateTo}
          onOpenCapabilitiesModal={() => setIsCapabilitiesModalOpen(true)}
        />
      );
    }

    if (currentPath === '/contact') {
      return (
        <ContactPage
          initialService={selectedServiceForQuote}
          onSaveLead={handleSaveLead}
          onOpenCapabilitiesModal={() => setIsCapabilitiesModalOpen(true)}
        />
      );
    }

    if (currentPath === '/privacy-policy') {
      return <LegalPage type="privacy" onNavigate={navigateTo} />;
    }

    if (currentPath === '/terms') {
      return <LegalPage type="terms" onNavigate={navigateTo} />;
    }

    // Default: Home Page with 9-step scroll-based storytelling flow
    return (
      <>
        {/* Dynamic SEO Metadata for Home */}
        <SEOMetadata
          title="RAMZY_SN@ALL – Portfolio & Design Studio"
          description="Thoughtful Design. Meaningful Experiences. UI/UX design, digital products, visual identity, and graphic design by Ramos Friday Oluwaseun."
          path="/"
        />

        {/* 1. Cinematic 4-Slide Hero Carousel with 3D pointer tilt */}
        <CinematicHeroSlider
          onNavigate={navigateTo}
          onFilterCategory={handleHeroFilterCategory}
        />

        {/* 2. Curated Selected Projects Showcase */}
        <FeaturedProjectsSection
          projects={PROJECTS_DATA}
          onNavigate={navigateTo}
          onSelectProject={handleSelectProject}
        />

        {/* 3. Comprehensive Design Services Grid */}
        <ServicesOverviewSection
          onNavigate={navigateTo}
          onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
        />

        {/* 4. Core Design Philosophy (4 Principles) */}
        <WhyWorkWithMeSection />

        {/* 5. 4-Step Collaborative Design Process */}
        <DesignProcessSection />

        {/* 6. Deep Dive Case Study Spotlight */}
        <CaseStudySpotlight
          onSelectProject={handleSelectProject}
          onNavigateContact={() => navigateTo('/contact')}
        />

        {/* 7. Verified Collaboration Standards (Anti-fabrication trust section) */}
        <WhatYouCanExpectSection />

        {/* 8. High-Intent Final Project Enquiry CTA */}
        <FinalCTASection onNavigate={navigateTo} />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F5] text-[#171717]">
      {/* Top Navigation conforming to 3-zone contract with PWA Install */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Page Landmark for WCAG 2.2 AA */}
      <main id="main-content" className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Footer with mandatory 3Cords System Global Resources attribution */}
      <Footer
        onNavigate={navigateTo}
        onOpenLeads={() => setIsLeadsModalOpen(true)}
        leadsCount={leads.length}
      />

      {/* Floating WhatsApp CTA using verified number +234 706 933 4173 */}
      <WhatsAppFloatingButton currentService={selectedServiceForQuote} />

      {/* Offline Status Toast */}
      <OfflineIndicator />

      {/* Modals */}
      <CapabilitiesModal
        isOpen={isCapabilitiesModalOpen}
        onClose={() => setIsCapabilitiesModalOpen(false)}
        onNavigateContact={() => navigateTo('/contact')}
      />

      <LeadManagementModal
        isOpen={isLeadsModalOpen}
        onClose={() => setIsLeadsModalOpen(false)}
        leads={leads}
        onUpdateStatus={handleUpdateLeadStatus}
        onDeleteLead={handleDeleteLead}
      />
    </div>
  );
}
