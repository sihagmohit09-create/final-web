import React, { useState } from 'react';
import ReadingProgress from './components/ReadingProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InteractiveShowcase from './components/InteractiveShowcase';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Research from './components/Research';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecruiterDock from './components/RecruiterDock';
import CertificateModal from './components/CertificateModal';

export default function App() {
  const [modalCertificate, setModalCertificate] = useState(null);

  const handleOpenModal = (cert) => {
    setModalCertificate(cert);
  };

  const handleCloseModal = () => {
    setModalCertificate(null);
  };

  return (
    <div className="min-h-screen bg-[#F3F5F8] text-[#101827] flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white relative">
      {/* Scroll Reading Progress Bar */}
      <ReadingProgress />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <InteractiveShowcase />
        <Experience onOpenModal={handleOpenModal} />
        <Education />
        <Certifications onOpenModal={handleOpenModal} />
        <Research />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Recruiter Dock */}
      <RecruiterDock />

      {/* Global High-Resolution Certificate / Document Viewer Modal */}
      {modalCertificate && (
        <CertificateModal
          certificate={modalCertificate}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
