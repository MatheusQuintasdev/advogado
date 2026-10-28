import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { FIRM_INFO } from '../data/firmData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative bg-[#050914] pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-[#c5a059]/20">
      {/* Subtle ambient lighting meshes */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#c5a059]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-[500px] h-[500px] bg-blue-950/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Hairline geometric background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Authority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Unboxed editorial kicker with official seal */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-[#0b1325] border border-[#c5a059]/30 text-xs font-semibold tracking-wider text-[#c5a059] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span>{FIRM_INFO.primaryOAB}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Polo Jurídico do Recife</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Tribunais Superiores</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-luxury font-medium text-white tracking-tight leading-[1.14] text-balance">
              Contratos blindados, defesas fiscais duras e atuação direta nos Tribunais.
            </h1>

            {/* Full formal firm name & positioning */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              <strong className="text-white font-medium">{FIRM_INFO.formalName}</strong>. 
              Sob a liderança do Dr. João André Sales Rodrigues (OAB/PE 19.186), atuamos há mais de 20 anos ao lado de empresários, diretorias e grupos familiares no Recife e em Brasília (STJ e STF). Sem terceirizar sua causa para estagiários: quem senta à mesa de negociação e sobe à tribuna são os próprios sócios titulares.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenContact}
                className="px-8 py-4 bg-gradient-to-r from-[#c5a059] via-[#dfc8a8] to-[#c5a059] hover:brightness-105 text-[#0b1325] font-bold text-xs uppercase tracking-[0.14em] rounded transition-all shadow-xl shadow-[#c5a059]/20 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Agendar Consulta Qualificada</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#areas"
                className="px-6 py-4 bg-[#0d1527]/80 hover:bg-[#131d33] text-slate-200 border border-[#c5a059]/30 hover:border-[#c5a059] font-medium text-xs uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 text-center"
              >
                Especialidades da Banca
              </a>
            </div>

            {/* Metadata Trust signals */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Sigilo Inviolável (Estatuto da OAB)</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#c5a059]" />
                <span>Sustentações em STJ &amp; STF</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>Atendimento Presencial no Recife &amp; Digital</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Stack with Official Logo & Luxury Law Office */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-[#c5a059]/30 shadow-2xl group bg-[#0b1325]">
              <img
                src="/images/hero_law_firm_recife_1793151656064.jpg"
                alt="Sede corporativa do SRAB Advogados Associados em Recife"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent" />
              
              {/* Overlay Official Logo Badge */}
              <div className="absolute top-4 right-4 p-2 rounded-lg bg-[#050914]/85 border border-[#c5a059]/40 backdrop-blur-md shadow-xl flex items-center gap-2.5">
                <img
                  src={FIRM_INFO.logoImage}
                  alt="SRAB Monograma"
                  className="w-8 h-8 object-contain rounded"
                />
                <div className="flex flex-col pr-1">
                  <span className="text-[11px] font-bold text-white tracking-wider">SRAB ADVOGADOS</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#c5a059]">OAB/PE 19.186</span>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#080e1d]/90 border border-[#c5a059]/30 backdrop-blur-md">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
                  Corpo Jurídico e Sócio Gestor
                </div>
                <div className="text-white font-serif-luxury text-base font-semibold">
                  João André Sales Rodrigues
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Direito Empresarial, Tributário &amp; Contencioso de Alto Impacto
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column KPI Trust Strip below Hero Split */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-4 rounded bg-[#0b1325]/50 border border-slate-800/80">
            <div className="text-2xl md:text-3xl font-serif-luxury font-bold text-white tabular-nums">
              +20 Anos
            </div>
            <div className="text-xs text-[#c5a059] mt-1 uppercase tracking-wider font-semibold">
              Tradição Jurídica em PE
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Prática forense consolidada</div>
          </div>
          <div className="p-4 rounded bg-[#0b1325]/50 border border-slate-800/80">
            <div className="text-2xl md:text-3xl font-serif-luxury font-bold text-[#c5a059] tabular-nums">
              OAB/PE 19.186
            </div>
            <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider font-semibold">
              Inscrição Principal
            </div>
            <div className="text-[11px] text-slate-400 mt-1">João André Sales Rodrigues</div>
          </div>
          <div className="p-4 rounded bg-[#0b1325]/50 border border-slate-800/80">
            <div className="text-2xl md:text-3xl font-serif-luxury font-bold text-white tabular-nums">
              100% Ético
            </div>
            <div className="text-xs text-[#c5a059] mt-1 uppercase tracking-wider font-semibold">
              Provimento CFOAB 205/2021
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Publicidade estritamente sóbria</div>
          </div>
          <div className="p-4 rounded bg-[#0b1325]/50 border border-slate-800/80">
            <div className="text-2xl md:text-3xl font-serif-luxury font-bold text-white tabular-nums">
              Recife · Brasília
            </div>
            <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider font-semibold">
              Atuação Multijurisdicional
            </div>
            <div className="text-[11px] text-slate-400 mt-1">TJPE, TRF-5, STJ e STF</div>
          </div>
        </div>
      </div>
    </section>
  );
};
