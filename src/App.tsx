import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { AboutAndPartners } from './components/AboutAndPartners';
import { DiagnosticTool } from './components/DiagnosticTool';
import { PublicationsAndFAQ } from './components/PublicationsAndFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { FIRM_INFO } from './data/firmData';

export default function App() {
  const [selectedAreaForContact, setSelectedAreaForContact] = useState<string | undefined>(undefined);

  const handleOpenContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectArea = (areaTitle: string) => {
    setSelectedAreaForContact(areaTitle);
    handleOpenContact();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDirectWhatsApp = () => {
    const msg = encodeURIComponent(`Olá, gostaria de agendar uma consulta jurídica com o Dr. João André Sales Rodrigues e os sócios do SRAB Advogados.`);
    window.open(`https://wa.me/${FIRM_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050914] text-slate-100 flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-amber-200">
      {/* Official Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Practice Areas */}
        <PracticeAreas onSelectAreaForConsultation={handleSelectArea} />

        {/* O Escritório & Sócios Fundadores */}
        <AboutAndPartners />

        {/* Diagnostic Tool */}
        <DiagnosticTool />

        {/* Publications & FAQ */}
        <PublicationsAndFAQ />

        {/* Contact Section */}
        <ContactSection initialArea={selectedAreaForContact} />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Discreet floating action buttons for real clients: WhatsApp & Scroll to top */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={handleDirectWhatsApp}
          className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
          title="Falar no WhatsApp Institucional"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="whitespace-nowrap font-brand-sans">WhatsApp Oficial</span>
        </button>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#0b1325]/90 hover:bg-[#131d33] text-slate-400 hover:text-white border border-slate-700 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
          title="Voltar ao Topo"
          aria-label="Voltar ao Topo"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
