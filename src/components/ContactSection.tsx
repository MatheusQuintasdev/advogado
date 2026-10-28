import React, { useState } from 'react';
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Instagram,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  Building,
  Lock,
  Verified
} from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';

interface ContactSectionProps {
  initialArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialArea }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState(initialArea || PRACTICE_AREAS[0].title);
  const [modality, setModality] = useState<'presencial' | 'online'>('presencial');
  const [message, setMessage] = useState('');
  const [complianceAgree, setComplianceAgree] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*Solicitação de Consulta Jurídica Qualificada - SRAB Advogados*
• *Nome Completo:* ${name}
• *Empresa / Cargo:* ${company || 'Particular / Não informado'}
• *E-mail:* ${email}
• *WhatsApp:* ${phone}
• *Área de Concentração:* ${area}
• *Modalidade:* ${modality === 'presencial' ? 'Presencial (Sede Recife - Ilha do Leite)' : 'Telepresencial Criptografado'}
• *Resumo da Demanda:* ${message || 'Consulta institucional inicial.'}
• *Conformidade OAB:* Aceite dos termos do Provimento 205/2021 registrado.

_Mensagem submetida pelo portal institucional oficial do SRAB Advogados Associados (OAB/PE 19.186)_`;

    const encoded = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/${FIRM_INFO.whatsapp}?text=${encoded}`, '_blank');
    setIsSuccess(true);
  };

  return (
    <section id="contato" className="py-24 bg-[#050914] border-t border-[#c5a059]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Official Channels & Guarantee */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
                <Lock className="w-3.5 h-3.5" />
                <span>Atendimento Qualificado &amp; Confidencial</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white mb-4">
                Agendamento de Consulta Prévia e Confidencial
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Nossa recepção institucional opera sob rigoroso regime de sigilo e confidencialidade profissional. Submeta o perfil de sua demanda para designação direta do sócio ou especialista responsável.
              </p>
            </div>

            {/* Value Guarantees matching Stitch spec */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded bg-[#0b1325]/80 border border-[#c5a059]/25">
                <div className="w-10 h-10 rounded bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Sigilo Profissional Imutável</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Protegido pelo Estatuto da Advocacia e OAB/PE 19.186. Rigor equivalente a NDA bancário.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-[#0b1325]/80 border border-[#c5a059]/25">
                <div className="w-10 h-10 rounded bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Retorno Técnico Ágil</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Contato inicial realizado pessoalmente por assessor sênior ou pelo sócio do núcleo em até 24 horas úteis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-[#0b1325]/80 border border-[#c5a059]/25">
                <div className="w-10 h-10 rounded bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Atendimento Presencial ou Telepresencial</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Sede empresarial no Recife (Ilha do Leite) ou via ambiente virtual corporativo criptografado.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Instagram Badge */}
            <div className="p-4 rounded bg-[#0b1325] border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={FIRM_INFO.logoImage}
                  alt="SRAB Advogados"
                  className="w-10 h-10 rounded object-contain border border-[#c5a059]/30"
                />
                <div>
                  <div className="text-xs font-bold text-white">Rede Oficial do Escritório</div>
                  <div className="text-xs text-[#c5a059] font-medium">{FIRM_INFO.instagram}</div>
                </div>
              </div>
              <a
                href={FIRM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-[#c5a059] border border-[#c5a059]/30 rounded text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Acessar</span>
              </a>
            </div>
          </div>

          {/* Right Column: Encrypted Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-xl bg-[#0b1325] border border-[#c5a059]/40 shadow-2xl relative">
              {/* Encrypted channel badge */}
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#050914] px-4 py-1 border border-[#c5a059]/40 rounded-full flex items-center gap-1.5 shadow-md">
                <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#c5a059]">
                  Canal Criptografado OAB
                </span>
              </div>

              <h3 className="text-2xl font-serif-luxury font-medium text-white mb-2">
                Solicitação de Consulta Institucional
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Preencha os dados abaixo. Nossos sócios analisarão a pauta preliminar com total confidencialidade.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dr. Roberto Guimarães"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#070b16] border border-slate-700/80 rounded text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Empresa / Cargo Executivo
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Diretor Financeiro / Grupo X"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 bg-[#070b16] border border-slate-700/80 rounded text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      E-mail Corporativo ou Pessoal *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nome@empresa.com.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#070b16] border border-slate-700/80 rounded text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Telefone / WhatsApp Direto *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+55 (81) 99999-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-[#070b16] border border-slate-700/80 rounded text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                {/* Modality Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Modalidade Preferencial
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setModality('presencial')}
                      className={`p-3 rounded border text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                        modality === 'presencial'
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#c5a059] font-bold'
                          : 'border-slate-800 bg-[#070b16] text-slate-400 hover:text-white'
                      }`}
                    >
                      <Building className="w-4 h-4" />
                      Presencial em Recife (PE)
                    </button>
                    <button
                      type="button"
                      onClick={() => setModality('online')}
                      className={`p-3 rounded border text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                        modality === 'online'
                          ? 'border-[#c5a059] bg-[#c5a059]/15 text-[#c5a059] font-bold'
                          : 'border-slate-800 bg-[#070b16] text-slate-400 hover:text-white'
                      }`}
                    >
                      <Video className="w-4 h-4" />
                      Videoconferência Segura
                    </button>
                  </div>
                </div>

                {/* Practice Area Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Área de Interesse Primária *
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-3 bg-[#070b16] border border-slate-700/80 rounded text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                  >
                    {PRACTICE_AREAS.map((p) => (
                      <option key={p.id} value={p.title} className="bg-[#0b1325]">
                        {p.title}
                      </option>
                    ))}
                    <option value="Outras Demandas de Alta Complexidade" className="bg-[#0b1325]">
                      Outras Demandas de Alta Complexidade
                    </option>
                  </select>
                </div>

                {/* Message / Brief */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Resumo da Situação ou Objeto da Consulta *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Descreva sucintamente o contexto da consulta (ex: prazo judicial, reestruturação societária, auto de infração fiscal). Não inclua segredos industriais sensíveis nesta fase preliminar."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#070b16] border border-slate-700/80 rounded text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                  />
                </div>

                {/* Compliance Agreement Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="compliance-checkbox"
                    checked={complianceAgree}
                    onChange={(e) => setComplianceAgree(e.target.checked)}
                    required
                    className="mt-1 h-4 w-4 rounded accent-[#c5a059] bg-[#070b16] border-slate-700"
                  />
                  <label htmlFor="compliance-checkbox" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                    Declaro ciência dos termos de confidencialidade e autorizo o contato exclusivo para fins de agendamento de consulta jurídica qualificada nos moldes do <strong>Provimento 205/2021 da OAB</strong>.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#c5a059] via-[#dfc8a8] to-[#c5a059] hover:brightness-105 text-[#0b1325] font-bold text-xs uppercase tracking-[0.15em] rounded transition-all shadow-xl shadow-[#c5a059]/15 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Verified className="w-4 h-4" />
                    <span>Submeter Pedido de Consulta Confidencial</span>
                  </button>
                </div>
              </form>

              {isSuccess && (
                <div className="mt-4 p-4 rounded bg-[#0d1f18] border border-emerald-700/80 text-emerald-200 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold">Solicitação Recebida com Sucesso</strong>
                    <span>Nossa assessoria institucional entrará em contato em regime de estrito sigilo funcional.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
