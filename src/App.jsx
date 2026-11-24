import React, { useState } from 'react';
import { ToastProvider } from './components/common/Toast';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { Preloader } from './components/common/Preloader';
import { InteractiveBackground } from './components/common/InteractiveBackground';
import { ThemeStudioDrawer } from './components/common/ThemeStudioDrawer';
import { CommandPalette } from './components/common/CommandPalette';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodePlayground } from './components/CodePlayground';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeModal } from './components/ResumeModal';
import { ScheduleChatModal } from './components/ScheduleChatModal';
import { Blog } from './components/Blog';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [scheduleChatOpen, setScheduleChatOpen] = useState(false);

  return (
    <ToastProvider>
      {/* Custom Preloader / Intro Splash */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* Dynamic Colorful Interactive Background (Customizable by user) */}
      <InteractiveBackground />

      {/* Custom Desktop Interactive Cursor (toggleable for user comfort) */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenScheduleChat={() => setScheduleChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 overflow-hidden">
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenScheduleChat={() => setScheduleChatOpen(true)}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Projects Showcase */}
        <Projects />

        {/* 5. NEW: Live Interactive Code & Algorithm Playground */}
        <CodePlayground />

        {/* 6. Achievements & Awards */}
        <Achievements />

        {/* 7. Education Timeline */}
        <Education />

        {/* 8. Certifications Gallery */}
        <Certifications />

        {/* 9. Personal Blog / Learning Journal */}
        <Blog />

        {/* 10. Mentorship & Peer Testimonials */}
        <Testimonials />

        {/* 11. Frequently Asked Questions */}
        <FAQ />

        {/* 12. Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* NEW: Floating Theme & Comfort Studio Drawer Button */}
      <ThemeStudioDrawer />

      {/* NEW: Command Palette (Cmd + K / Ctrl + K) */}
      <CommandPalette
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenScheduleChat={() => setScheduleChatOpen(true)}
      />

      {/* Interactive Digital Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* NEW: Schedule a Chat / Coffee Connect Modal */}
      <ScheduleChatModal
        isOpen={scheduleChatOpen}
        onClose={() => setScheduleChatOpen(false)}
      />
    </ToastProvider>
  );
}

export default App;
