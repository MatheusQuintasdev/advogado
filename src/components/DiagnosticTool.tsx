import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, ArrowRight, RotateCcw, Send, Building, FileText, Scale } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface Question {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    scoreWeight: number; // 1 (low risk), 2 (moderate), 3 (critical risk)
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'porte-natureza',
    category: 'Perfil Institucional',
    title: 'Qual é o porte e momento societário da sua empresa?',
    subtitle: 'Ajuda a definir o regime jurídico aplicável e o nível de governança necessário.',
    options: [
      {
        label: 'Empresa em expansão / Média Empresa (Faturamento R$ 5M a 50M/ano)',
        description: 'Necessidade de estruturação de contratos e contenção de riscos fiscais e trabalhistas.',
        scoreWeight: 2,
      },
      {
        label: 'Grupo Corporativo / Grande Empresa ou Holding Familiar consolidada',
        description: 'Operações complexas, múltiplos CNPJs, governança e demandas nos Tribunais Superiores.',
        scoreWeight: 3,
      },
      {
        label: 'Sociedade de Profissionais / Empresa de Serviços Especializados',
        description: 'Foco em acordos entre sócios, responsabilidade civil e otimização fiscal.',
        scoreWeight: 1,
      },
    ],
  },
  {
    id: 'dor-principal',
    category: 'Vulnerabilidade Jurídica',
    title: 'Qual é o principal desafio jurídico enfrentado nos últimos 12 meses?',
    subtitle: 'Identifica onde a intervenção técnica preventiva gera maior economia de capital.',
    options: [
      {
        label: 'Execuções fiscais, autuações ou tributação desproporcional',
        description: 'Risco de bloqueio de contas ou perda de benefícios fiscais estaduais (SEFAZ/PE) e federais.',
        scoreWeight: 3,
      },
      {
        label: 'Contratos mercantis sem garantias sólidas ou disputas com parceiros',
        description: 'Inadimplemento, rescisões unilaterais ou divergência de cotas entre sócios fundadores.',
        scoreWeight: 2,
      },
      {
        label: 'Acúmulo de reclamatórias trabalhistas e terceirização sem fiscalização',
        description: 'Passivo trabalhista oculto que compromete o fluxo de caixa e valuation do negócio.',
        scoreWeight: 3,
      },
      {
        label: 'Patrimônio dos sócios desprotegido e ausência de plano sucessório',
        description: 'Imóveis e ativos na pessoa física sujeitos a penhoras ou inventários litigiosos demorados.',
        scoreWeight: 2,
      },
    ],
  },
  {
    id: 'estagio-acao',
    category: 'Urgência Operacional',
    title: 'Em que estágio se encontra a situação hoje?',
    subtitle: 'Determina a necessidade de medidas cautelares de urgência ou plano consultivo.',
    options: [
      {
        label: 'Litígio ativo / Prazo processual aberto ou intimação recebida',
        description: 'Exige intervenção contenciosa imediata com defesa técnica especializada.',
        scoreWeight: 3,
      },
      {
        label: 'Preventivo / Desejo de auditoria, revisão de minutas e redução de custos',
        description: 'Momento ideal para blindagem antecipada e economia fiscal lícita.',
        scoreWeight: 1,
      },
      {
        label: 'Negociação em andamento (M&A, entrada de investidor ou distrato)',
        description: 'Necessidade de assessoria direta à mesa de negociações e elaboração de minutas.',
        scoreWeight: 2,
      },
    ],
  },
];

export const DiagnosticTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSelectOption = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = index;
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const totalScore = answers.reduce((acc, optIndex, qIndex) => {
    return acc + (QUESTIONS[qIndex]?.options[optIndex]?.scoreWeight || 1);
  }, 0);

  const isCompleted = answers.length === QUESTIONS.length;

  const getRiskAssessment = () => {
    if (totalScore >= 7) {
      return {
        level: 'Alerta Alto: Risco de Exposição Ativa',
        badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-800/60',
        summary:
          'Seu negócio apresenta vulnerabilidades que demandam intervenção jurídica imediata. Litígios ativos ou passivos fiscais/trabalhistas acumulados podem resultar em constrição patrimonial e perdas expressivas.',
        recommendation:
          'Recomendamos agendamento prioritário com o Dr. João André Sales Rodrigues e os sócios coordenadores para análise da documentação e estancamento de riscos.',
      };
    }
    return {
      level: 'Oportunidade Estratégica: Gestão Preventiva',
      badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60',
      summary:
        'Sua operação possui um momento propício para consolidação de governança, revisão de contratos mercantis e planejamento tributário/sucessório com alto potencial de economia fiscal.',
      recommendation:
        'Uma auditoria consultiva de conformidade (due diligence preventiva) proporcionará estabilidade para novas etapas de crescimento com total segurança.',
    };
  };

  const resetDiagnostic = () => {
    setCurrentStep(0);
    setAnswers([]);
    setSubmitted(false);
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const assessment = getRiskAssessment();
    const q1 = QUESTIONS[0].options[answers[0]]?.label || 'Não informado';
    const q2 = QUESTIONS[1].options[answers[1]]?.label || 'Não informado';
    const q3 = QUESTIONS[2].options[answers[2]]?.label || 'Não informado';

    const message = `Olá, Dr. João André Sales Rodrigues e equipe SRAB Advogados.
Realizei o Diagnóstico Jurídico no portal institucional:
• Empresa: ${companyName || 'Não informada'}
• Contato: ${contactName || 'Responsável'} (${phone || 'Sem telefone'})
• Perfil: ${q1}
• Desafio Central: ${q2}
• Estágio: ${q3}
• Diagnóstico Preliminar: ${assessment.level}

Gostaria de agendar uma consulta técnica para aprofundar esses pontos.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${FIRM_INFO.whatsapp}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="diagnostico" className="py-24 bg-[#080d19] border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-[#c5a059] uppercase border border-[#c5a059]/30 rounded mb-4 bg-[#0b1325]">
            <Scale className="w-3.5 h-3.5" />
            <span>Triagem Preventiva para Empresas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white mb-4">
            Qual é a Exposição Jurídica Atual da sua Empresa?
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
            Responda a 3 perguntas objetivas para checar onde sua operação está mais vulnerável perante a fiscalização, sócios ou passivos de pessoal.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          {!isCompleted ? (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800 text-xs font-medium text-slate-400">
                <span>
                  Pergunta {currentStep + 1} de {QUESTIONS.length}
                </span>
                <span className="text-[#c5a880] font-semibold">
                  {QUESTIONS[currentStep].category}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-[#c5a880] h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-serif-luxury text-white font-medium mb-2">
                  {QUESTIONS[currentStep].title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 md:p-5 rounded-xl border border-slate-800 hover:border-[#c5a880]/60 bg-slate-900/40 hover:bg-slate-800/60 transition-all flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full border border-slate-700 group-hover:border-[#c5a880] mt-0.5 shrink-0 flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#c5a880] transition-colors" />
                    </div>
                    <div>
                      <div className="text-slate-100 font-medium text-base group-hover:text-white transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-slate-400 text-xs md:text-sm mt-1 leading-relaxed">
                        {opt.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Step Navigation */}
              <div className="flex items-center justify-between text-sm">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="text-slate-500 hover:text-slate-300 disabled:opacity-30 disabled:hover:text-slate-500 transition-colors cursor-pointer"
                >
                  Voltar anterior
                </button>
                <div className="text-xs text-slate-500">
                  Selecione uma opção para avançar automaticamente
                </div>
              </div>
            </div>
          ) : (
            /* Result Section */
            <div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
                <div>
                  <div className="text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1">
                    Diagnóstico Concluído
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif-luxury text-white">
                    Parecer Preliminar de Conformidade
                  </h3>
                </div>
                <button
                  onClick={resetDiagnostic}
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Refazer teste
                </button>
              </div>

              {/* Assessment Card */}
              <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 mb-8">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4">
                  <span className={getRiskAssessment().badgeColor}>
                    {getRiskAssessment().level}
                  </span>
                </div>
                <p className="text-slate-200 text-base leading-relaxed mb-4">
                  {getRiskAssessment().summary}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/80 pt-4">
                  <strong className="text-[#c5a880]">Diretriz Estratégica: </strong>
                  {getRiskAssessment().recommendation}
                </p>
              </div>

              {/* Lead Capture to Connect directly with João André Sales Rodrigues */}
              <div className="bg-[#0b101d] p-6 md:p-8 rounded-xl border border-slate-800">
                <h4 className="text-lg font-serif-luxury text-white font-medium mb-2">
                  Receber Análise Detalhada dos Sócios do SRAB
                </h4>
                <p className="text-slate-400 text-xs md:text-sm mb-6">
                  Envie esses dados diretamente para a equipe do Dr. João André Sales Rodrigues (OAB/PE 19.186) e receba orientação confidencial personalizada.
                </p>

                <form onSubmit={handleSendToWhatsApp} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Nome da Empresa</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Grupo Aliança Nordeste"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Seu Nome / Cargo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Mendes (Diretor)"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp de Contato</label>
                    <input
                      type="tel"
                      required
                      placeholder="(81) 99999-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div className="md:col-span-3 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Sigilo profissional garantido pelo Código de Ética e Disciplina da OAB.
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-[#c5a880] hover:bg-[#d6ba94] text-slate-950 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c5a880]/10"
                    >
                      <Send className="w-4 h-4" />
                      Enviar Diagnóstico ao Dr. João André
                    </button>
                  </div>
                </form>

                {submitted && (
                  <div className="mt-4 p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-lg flex items-center gap-2 text-emerald-300 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Janela do WhatsApp aberta. Nossa assessoria técnica analisará as respostas em até 2 horas úteis.</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
