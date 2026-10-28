import React from 'react';
import { Award, Shield, Scale, GraduationCap, Building2, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PARTNERS, FIRM_INFO } from '../data/firmData';

export const AboutAndPartners: React.FC = () => {
  return (
    <>
      {/* O Escritório / Tradição & Excelência Dogmática */}
      <section id="escritorio" className="py-24 bg-[#050914] border-b border-[#c5a059]/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Mission & Dogmatic Precision */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#c5a059] uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>O Escritório · Advocacia Sem Terceirização</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white leading-tight">
                Grandes causas não se ganham com teses genéricas. Exigem quem conhece os tribunais por dentro.
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                O <strong className="text-white font-medium">{FIRM_INFO.formalName}</strong> nasceu de uma premissa inegociável: o cliente corporativo precisa ter acesso direto ao sócio que assina a procuração. Enquanto grandes bancas de massa colocam o nome do fundador na placa e entregam o processo para estagiários tocarem sozinhos, nós sentamos pessoalmente com você.
              </p>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                Com sede na Ilha do Leite, no coração do polo jurídico e financeiro do Recife, assessoramos grupos econômicos, indústrias, operadoras de saúde e famílias tradicionais que não podem correr o risco de ter um contrato anulado ou uma conta bloqueada por amadorismo.
              </p>

              {/* 3 Pillars of Distinction */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-slate-800/80">
                <div className="p-4 rounded bg-[#0b1325]/70 border border-slate-800">
                  <div className="w-9 h-9 rounded bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] mb-3">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Artesanato Forense</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Teses individualizadas e estudos de jurimetria para antecipar desfechos judiciais.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#0b1325]/70 border border-slate-800">
                  <div className="w-9 h-9 rounded bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] mb-3">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Sigilo Nível Bancário</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Políticas estritas de confidencialidade e dados corporativos respaldados pela LGPD.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#0b1325]/70 border border-slate-800">
                  <div className="w-9 h-9 rounded bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] mb-3">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Cortes Superiores</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sustentações orais perante o TJPE, TRF-5, STJ e STF com condução direta dos sócios.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: AI Imagery & Official Emblem Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#0b1325] group">
                <img
                  src="/images/court_stj_trial_1793152648235.jpg"
                  alt="Sustentação oral em Tribunal Superior pelo SRAB Advogados"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent" />
                
                <div className="absolute bottom-0 inset-x-0 p-5 bg-[#0b1325]/95 border-t border-[#c5a059]/30 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <img
                      src={FIRM_INFO.logoImage}
                      alt="Logo SRAB"
                      className="w-10 h-10 object-contain rounded border border-[#c5a059]/40"
                    />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#c5a059]">
                        Inscrição Oficial OAB/PE 19.186
                      </div>
                      <p className="text-xs text-slate-300">
                        Atuação em litígios corporativos e consultoria de alta complexidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sócios e Liderança Jurídica */}
      <section id="socios" className="py-24 bg-[#080d19] border-b border-[#c5a059]/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Corpo Jurídico e Sócios Fundadores</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white mb-4">
              Liderança Comprometida com o Seu Resultado
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              Advogados de reconhecida solidez acadêmica e prática forense combativa no Judiciário de Pernambuco e Tribunais de Brasília.
            </p>
          </div>

          {/* Marquee Partner: Dr. João André Sales Rodrigues */}
          <div className="mb-12 p-8 md:p-10 rounded-xl bg-[#0b1325] border border-[#c5a059]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-4">
                <div className="relative rounded-lg overflow-hidden border border-[#c5a059]/50 shadow-xl max-w-sm mx-auto group">
                  <img
                    src={PARTNERS[0].image}
                    alt={PARTNERS[0].name}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#050914] via-[#050914]/60 to-transparent p-4">
                    <span className="text-xs font-mono font-bold text-[#c5a059] tracking-wider">
                      {PARTNERS[0].oab}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl md:text-3xl font-serif-luxury font-bold text-white">
                    {PARTNERS[0].name}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 rounded bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/40 uppercase tracking-wider">
                    Sócio Coordenador Geral
                  </span>
                </div>

                <div className="text-xs text-slate-300 font-medium flex items-center gap-2">
                  <span>Inscrição Oficial:</span>
                  <strong className="text-[#c5a059] font-mono text-sm">{PARTNERS[0].oab}</strong>
                  <span className="text-slate-600">·</span>
                  <a
                    href="https://www.instagram.com/srab.advogados/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-[#c5a059] transition-colors inline-flex items-center gap-1"
                  >
                    @srab.advogados
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                  {PARTNERS[0].bio}
                </p>

                {/* Specialties */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Especialidades Primárias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {PARTNERS[0].specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded bg-[#070b16] border border-slate-700/80 text-slate-200 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="space-y-1.5 text-xs text-slate-400">
                    {PARTNERS[0].education.map((edu, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{edu}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Partners Grid: Alcoforado & Bacelar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERS.slice(1).map((partner, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-xl bg-[#0b1325] border border-slate-800 flex flex-col justify-between hover:border-[#c5a059]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover border border-[#c5a059]/30"
                    />
                    <div>
                      <h4 className="text-xl font-serif-luxury font-medium text-white">
                        {partner.name}
                      </h4>
                      <p className="text-xs text-[#c5a059] font-medium mt-0.5">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light mb-4">
                    {partner.bio}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {partner.specialties.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="text-xs text-slate-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-[#c5a059] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-500 flex items-center justify-between">
                  <span>Membro Titular SRAB</span>
                  <span className="font-mono text-[#c5a059]">{partner.oab}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
