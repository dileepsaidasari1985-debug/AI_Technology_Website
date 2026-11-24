import React, { useState } from 'react';
import { ToastProvider } from './components/common/Toast';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { InteractiveBackground } from './components/common/InteractiveBackground';
import { CommandPalette } from './components/common/CommandPalette';

// Core Sections
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { AIPlayground } from './components/AIPlayground';
import { Features } from './components/Features';
import { Applications } from './components/Applications';
import { Technology } from './components/Technology';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Workflow } from './components/Workflow';
import { Statistics } from './components/Statistics';
import { Team } from './components/Team';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './components/CaseStudies';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Floating Chatbot
import { WebsiteChatbot } from './components/WebsiteChatbot';

// Modals
import { DemoRequestModal } from './components/modals/DemoRequestModal';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { BlogModal } from './components/modals/BlogModal';
import { TeamModal } from './components/modals/TeamModal';
import { TrustCenterModal } from './components/modals/TrustCenterModal';
import { LegalModal } from './components/modals/LegalModal';

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [playgroundTool, setPlaygroundTool] = useState('chat');

  // Modal States
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState(null);
  const [productModalData, setProductModalData] = useState(null);
  const [caseStudyModalData, setCaseStudyModalData] = useState(null);
  const [blogModalData, setBlogModalData] = useState(null);
  const [teamModalData, setTeamModalData] = useState(null);
  const [trustCenterOpen, setTrustCenterOpen] = useState(false);
  const [legalModalConfig, setLegalModalConfig] = useState(null); // { title, type }
  const [searchPaletteOpen, setSearchPaletteOpen] = useState(false);

  const handleLaunchPlaygroundTool = (toolId) => {
    setPlaygroundTool(toolId);
    const el = document.getElementById('playground');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ToastProvider>
      {/* Interactive Background with Neural Particles */}
      <InteractiveBackground />

      {/* Desktop Responsive Animated Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onChangeLang={setCurrentLang}
        onOpenDemoRequest={() => {
          setSelectedPlanForDemo(null);
          setDemoModalOpen(true);
        }}
        onOpenSearch={() => setSearchPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 overflow-hidden">
        {/* 1. Hero Section */}
        <Hero
          onOpenDemoRequest={() => {
            setSelectedPlanForDemo(null);
            setDemoModalOpen(true);
          }}
          onSelectPlaygroundTool={handleLaunchPlaygroundTool}
        />

        {/* 2. About Our Company */}
        <About
          onOpenTrustCenter={() => setTrustCenterOpen(true)}
        />

        {/* 3. AI Products and Services */}
        <Products
          onOpenProductModal={(product) => setProductModalData(product)}
          onSelectPlaygroundTool={handleLaunchPlaygroundTool}
        />

        {/* 4. Interactive AI Playground (Star Feature) */}
        <AIPlayground
          defaultToolId={playgroundTool}
        />

        {/* 5. Key Features & Capabilities */}
        <Features />

        {/* 6. AI Applications and Industries */}
        <Applications
          onOpenIndustryModal={(industry) => {
            // Trigger Demo Request with Industry Context
            setSelectedPlanForDemo({ name: `${industry.name} Industry Pilot` });
            setDemoModalOpen(true);
          }}
        />

        {/* 7. Technology Stack */}
        <Technology />

        {/* 8. Why Choose Our AI Company */}
        <WhyChooseUs
          onOpenDemoRequest={() => {
            setSelectedPlanForDemo(null);
            setDemoModalOpen(true);
          }}
        />

        {/* 9. AI Workflow Section */}
        <Workflow />

        {/* 10. Company Statistics & Impact (Recharts) */}
        <Statistics />

        {/* 11. Our Team Section */}
        <Team
          onOpenTeamModal={(member) => setTeamModalData(member)}
        />

        {/* 12. Pricing & Subscription Plans */}
        <Pricing
          onSelectPlan={(plan) => setSelectedPlanForDemo(plan)}
          onOpenDemoRequest={() => setDemoModalOpen(true)}
        />

        {/* 13. Customer Testimonials */}
        <Testimonials />

        {/* 14. Case Studies & Projects */}
        <CaseStudies
          onOpenCaseStudyModal={(study) => setCaseStudyModalData(study)}
        />

        {/* 15. Blog & AI News (Knowledge Center) */}
        <Blog
          onOpenBlogModal={(post) => setBlogModalData(post)}
        />

        {/* 16. Frequently Asked Questions */}
        <FAQ
          onOpenDemoRequest={() => {
            setSelectedPlanForDemo(null);
            setDemoModalOpen(true);
          }}
        />

        {/* 17. Contact & Global Inquiry */}
        <Contact />
      </main>

      {/* 18. Footer */}
      <Footer
        onOpenPrivacyModal={() => setLegalModalConfig({ title: 'Privacy Policy', type: 'privacy' })}
        onOpenTermsModal={() => setLegalModalConfig({ title: 'Terms & Conditions', type: 'terms' })}
      />

      {/* Floating Website Chatbot (NexoraBot) */}
      <WebsiteChatbot
        onOpenDemoRequest={() => {
          setSelectedPlanForDemo(null);
          setDemoModalOpen(true);
        }}
        onSelectPlaygroundTool={handleLaunchPlaygroundTool}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Smart Search Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={searchPaletteOpen}
        onClose={() => setSearchPaletteOpen(false)}
        onOpenProductModal={(p) => setProductModalData(p)}
        onOpenBlogModal={(b) => setBlogModalData(b)}
        onOpenTeamModal={(m) => setTeamModalData(m)}
        onOpenDemoRequest={() => {
          setSelectedPlanForDemo(null);
          setDemoModalOpen(true);
        }}
      />

      {/* Global Modals */}
      <DemoRequestModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        preselectedPlan={selectedPlanForDemo}
      />

      <ProductDetailModal
        product={productModalData}
        isOpen={Boolean(productModalData)}
        onClose={() => setProductModalData(null)}
        onLaunchPlayground={handleLaunchPlaygroundTool}
      />

      <CaseStudyModal
        study={caseStudyModalData}
        isOpen={Boolean(caseStudyModalData)}
        onClose={() => setCaseStudyModalData(null)}
      />

      <BlogModal
        post={blogModalData}
        isOpen={Boolean(blogModalData)}
        onClose={() => setBlogModalData(null)}
      />

      <TeamModal
        member={teamModalData}
        isOpen={Boolean(teamModalData)}
        onClose={() => setTeamModalData(null)}
      />

      <TrustCenterModal
        isOpen={trustCenterOpen}
        onClose={() => setTrustCenterOpen(false)}
      />

      <LegalModal
        title={legalModalConfig?.title}
        type={legalModalConfig?.type}
        isOpen={Boolean(legalModalConfig)}
        onClose={() => setLegalModalConfig(null)}
      />
    </ToastProvider>
  );
}

export default App;
