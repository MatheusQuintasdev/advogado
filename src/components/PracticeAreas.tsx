import React, { useState } from 'react';
import { ArrowUpRight, Check, X, Shield, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectAreaForConsultation: (areaTitle: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectAreaForConsultation }) => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  return (
    <section id="areas" className="py-24 bg-[#080d19] border-b border-[#c5a059]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Núcleos Especializados · SRAB Advogados</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white tracking-tight">
              Onde o erro não é tolerado: as 6 áreas em que defendemos seu negócio.
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Sem modelos genéricos de internet. Cada parecer, defesa ou contrato é desenhado sob medida pelos sócios titulares para resguardar o caixa e o patrimônio da sua empresa.
          </p>
        </div>

        {/* Bento Grid with AI Photography Integration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((area, index) => {
            const isMarquee = index === 0 || index === 1;
            return (
              <motion.div
                key={area.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedArea(area)}
                className={`group relative rounded-xl bg-[#0b1325] border border-slate-800 hover:border-[#c5a059]/60 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-xl ${
                  isMarquee ? 'lg:col-span-1.5' : ''
                }`}
              >
                {/* AI Image Banner for Card */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={area.image}
                    alt={area.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-85 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1325] via-[#0b1325]/50 to-transparent" />

                  {/* Number & Stat Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#c5a059] font-bold tracking-widest bg-[#050914]/80 px-2.5 py-1 rounded border border-[#c5a059]/30 backdrop-blur-sm">
                      {area.number}
                    </span>
                    {area.statBadge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-200 bg-[#0b1325]/90 px-2 py-0.5 rounded border border-slate-700/80 backdrop-blur-sm">
                        {area.statBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif-luxury font-medium text-white group-hover:text-[#c5a059] transition-colors mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs text-[#c5a059] font-medium mb-3">
                      {area.subtitle}
                    </p>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-light line-clamp-3">
                      {area.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 border-t border-slate-800/80 pt-4 mb-4">
                      {area.highlights.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <span className="truncate pr-2">Coordenação: {area.leadPartner.split('&')[0]}</span>
                    <span className="group-hover:translate-x-1 transition-transform text-[#c5a059] font-semibold flex items-center gap-1 shrink-0">
                      Explorar escopo →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Practice Area Modal Drawer */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#0b1325] border border-[#c5a059]/40 rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Modal Banner Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={selectedArea.image}
                  alt={selectedArea.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1325] via-[#0b1325]/60 to-transparent" />
                <button
                  onClick={() => setSelectedArea(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-[#050914]/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700/60"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="font-mono text-xs text-[#c5a059] font-bold tracking-widest bg-[#050914]/90 px-2.5 py-1 rounded border border-[#c5a059]/40">
                    PRÁTICA {selectedArea.number}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif-luxury font-medium text-white mb-1">
                    {selectedArea.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#c5a059] font-medium">
                    {selectedArea.subtitle}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Visão Geral da Atuação
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {selectedArea.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Principais Demandas &amp; Entregáveis
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedArea.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-[#0d1527] border border-slate-800 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Escopo Forense e Consultivo
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedArea.scope.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#c5a059] font-bold">·</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded bg-[#070b16] border border-slate-800 text-xs text-slate-400">
                  <strong className="text-slate-200">Coordenação Direta: </strong>
                  {selectedArea.leadPartner}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-[#070b16] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Sigilo absoluto assegurado pelo Estatuto da Advocacia.
                </span>
                <button
                  onClick={() => {
                    const title = selectedArea.title;
                    setSelectedArea(null);
                    onSelectAreaForConsultation(title);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#c5a059] to-[#dfc8a8] hover:brightness-105 text-[#0b1325] font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer"
                >
                  Solicitar Consulta Nesta Prática
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
