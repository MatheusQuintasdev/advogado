import React from 'react';
import { Shield, MapPin, Instagram, Phone, Mail, Scale, ExternalLink } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#03060d] border-t border-[#c5a059]/25 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Official Logo Lockup */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={FIRM_INFO.logoImage}
                alt="SRAB Advogados Logo"
                className="h-12 w-12 object-contain rounded border border-[#c5a059]/40 shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-serif-luxury font-bold text-white tracking-tight">
                  SRAB <span className="text-[#c5a059] font-normal text-base">Advogados</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#c5a059] font-bold">
                  {FIRM_INFO.primaryOAB}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              <strong className="text-white">{FIRM_INFO.formalName}</strong>. 
              Advocacia empresarial de alta performance, litígios estratégicos e consultoria jurídica de elite com atuação nacional a partir de Recife.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <a
                href={FIRM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#c5a059] hover:underline font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{FIRM_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Practice Areas Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Práticas Estratégicas
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Direito Societário &amp; M&amp;A
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Contencioso Estratégico &amp; Tribunais
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Tributário Consultivo &amp; Judicial
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Família &amp; Holding Patrimonial
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Direito Médico &amp; Saúde Corporativa
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Trabalhista Preventivo &amp; Passivos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Unidade Recife & Contatos */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Sede Recife / PE
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Polo Jurídico &amp; Empresarial de Pernambuco<br />
              {FIRM_INFO.address}
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div>WhatsApp: <strong className="text-white">{FIRM_INFO.whatsappDisplay}</strong></div>
              <div>Geral: {FIRM_INFO.phone}</div>
              <div>E-mail: {FIRM_INFO.email}</div>
            </div>
          </div>

          {/* Col 4: Atendimento Rápido */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Atendimento
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Recepção qualificada para consultas prévias e mandatos corporativos urgentes.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#0b1325] hover:bg-[#131d33] text-[#c5a059] border border-[#c5a059]/40 rounded text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Agendamento
            </a>
          </div>
        </div>

        {/* Ethical Compliance Statement per OAB Provimento 205/2021 */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-slate-500 text-center leading-relaxed max-w-4xl mx-auto">
            Em estrita observância às disposições do Código de Ética e Disciplina da OAB (Conselho Federal da Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021. Este portal possui finalidade exclusivamente informativa e institucional, abstendo-se de captação indevida de clientela ou mercantilização da advocacia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] pt-4 border-t border-slate-900">
            <div>
              © {new Date().getFullYear()} {FIRM_INFO.formalName}. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacidade &amp; LGPD</span>
              <span>•</span>
              <span>Governança Ética</span>
              <span>•</span>
              <span className="text-[#c5a059] font-mono font-semibold">{FIRM_INFO.primaryOAB}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
