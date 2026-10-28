import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FIRM_INFO } from '../data/firmData';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#050914]/95 backdrop-blur-xl border-b border-[#c5a059]/20 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official Logo */}
        <a
          href="#"
          className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group"
        >
          <img
            src={FIRM_INFO.logoImage}
            alt="SRAB Advogados Logo Oficial"
            className="h-10 w-10 md:h-12 md:w-12 object-contain rounded border border-[#c5a059]/30 group-hover:border-[#c5a059] transition-colors shadow-md"
          />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif-luxury font-bold tracking-tight text-white group-hover:text-[#c5a059] transition-colors">
              SRAB <span className="font-normal text-[#c5a059] text-base">Advogados</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#8e9ab2] font-semibold -mt-0.5 font-brand-sans">
              {FIRM_INFO.primaryOAB}
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#areas"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Áreas de Atuação
          </a>
          <a
            href="#escritorio"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            O Escritório
          </a>
          <a
            href="#socios"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Sócios
          </a>
          <a
            href="#diagnostico"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Diagnóstico
          </a>
          <a
            href="#publicacoes"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Publicações
          </a>
          <a
            href="#contato"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Contato
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 text-xs md:text-sm font-semibold text-[#0b1325] bg-gradient-to-r from-[#c5a059] via-[#dfc8a8] to-[#c5a059] hover:brightness-105 rounded transition-all shadow-lg shadow-[#c5a059]/15 whitespace-nowrap shrink-0 cursor-pointer overflow-hidden group"
          >
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] md:text-xs">
              <span>Agendar Consulta</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>

          {/* Mobile Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Menu Principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-slate-800 pb-3 space-y-3"
          >
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-300 hover:text-[#c5a059]"
            >
              Áreas de Atuação
            </a>
            <a
              href="#escritorio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-300 hover:text-[#c5a059]"
            >
              O Escritório
            </a>
            <a
              href="#socios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-300 hover:text-[#c5a059]"
            >
              Sócios e Corpo Jurídico
            </a>
            <a
              href="#diagnostico"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-300 hover:text-[#c5a059]"
            >
              Diagnóstico de Risco
            </a>
            <a
              href="#publicacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-300 hover:text-[#c5a059]"
            >
              Publicações &amp; Artigos
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-300 hover:text-[#c5a059]"
            >
              Contato &amp; Agendamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
