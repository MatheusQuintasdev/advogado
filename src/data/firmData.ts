export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  scope: string[];
  leadPartner: string;
  image: string;
  statBadge?: string;
}

export interface Partner {
  name: string;
  oab: string;
  role: string;
  bio: string;
  specialties: string[];
  education: string[];
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  author: string;
  image?: string;
}

export const FIRM_INFO = {
  name: 'SRAB Advogados',
  formalName: 'Sales Rodrigues, Alcoforado, Bacelar & Advogados Associados',
  foundingPartner: 'João André Sales Rodrigues',
  primaryOAB: 'OAB/PE 19.186',
  logoImage: '/images/srab_official_logo.jpg',
  instagram: '@srab.advogados',
  instagramUrl: 'https://www.instagram.com/srab.advogados/',
  phone: '(81) 3224-8900',
  whatsapp: '5581998724114',
  whatsappDisplay: '(81) 99872-4114',
  email: 'contato@srabadvogados.com.br',
  address: 'Av. Governador Agamenon Magalhães, 4775 - Ilha do Leite, Recife - PE',
  coverage: 'Recife, Região Metropolitana, Interior de Pernambuco e Tribunais Superiores (Brasília)',
  slogan: 'Prática forense combativa e consultoria jurídica direta com os sócios.',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'empresarial-societario',
    number: '01',
    title: 'Societário & Negociações de M&A',
    subtitle: 'Acordos de sócios, compra e venda de empresas e governança real',
    description: 'Quando os sócios entram em divergência ou surge uma proposta de compra da empresa, qualquer detalhe mal amarrado no contrato trava o negócio por anos na Justiça. Elaboramos instrumentos societários que resistem a crises, estruturamos fusões e aquisições e organizamos a saída ou entrada de sócios com segurança jurídica incontestável.',
    highlights: [
      'Acordos de sócios e acionistas com regras claras de saída e dissolução',
      'Auditoria jurídica completa (due diligence) para compra e venda de empresas',
      'Estruturação de operações de M&A e cláusulas de garantia pós-fechamento',
      'Mediação prévia de impasses societários para evitar a quebra do negócio',
    ],
    scope: [
      'Revisão linha por linha de contratos mercantis e parcerias comerciais',
      'Defesa de minoritários e apuração justa de haveres em dissoluções',
      'Blindagem de marcas, tecnologia e segredos de negócio da empresa',
      'Assessoria presencial nas reuniões decisivas de diretoria e conselho',
    ],
    leadPartner: 'Dra. Bacelar & Dr. João André Sales Rodrigues',
    image: '/images/mergers_boardroom_recife_1793152648152.jpg',
    statBadge: 'M&A & Contratos',
  },
  {
    id: 'contencioso-arbitragem',
    number: '02',
    title: 'Contencioso de Alto Impacto & Tribunais',
    subtitle: 'Defesa combativa perante o TJPE, TRF-5, STJ e STF em Brasília',
    description: 'Litígios onde uma decisão judicial liminar pode definir a sobrevivência do caixa da empresa. Não trabalhamos com modelos prontos: estudamos minuciosamente cada prova, despachamos memoriais diretamente com os relatores e realizamos sustentação oral com conhecimento profundo dos autos.',
    highlights: [
      'Medidas de urgência para impedir bloqueio de contas ou perda de ativos',
      'Recursos especiais e extraordinários em Brasília perante STJ e STF',
      'Sustentação oral nas Câmaras Cíveis e de Direito Público do TJPE e TRF-5',
      'Condução técnica de arbitragens e disputas comerciais volumosas',
    ],
    scope: [
      'Estudo prévio de jurimetria sobre o perfil de julgamento de cada câmara',
      'Acompanhamento presencial de perícias técnicas e contábeis judiciais',
      'Negociação de acordos processuais com quitação plena e irrevogável',
      'Atuação combativa em execuções de títulos de valor milionário',
    ],
    leadPartner: 'Dr. João André Sales Rodrigues (OAB/PE 19.186)',
    image: '/images/court_stj_trial_1793152648235.jpg',
    statBadge: 'Tribunais Superiores',
  },
  {
    id: 'tributario-estrategico',
    number: '03',
    title: 'Tributário & Defesa contra Autuações',
    subtitle: 'Redução lícita de impostos e defesas duras contra SEFAZ/PE e Receita Federal',
    description: 'Fiscalizações agressivas da SEFAZ de Pernambuco ou da Receita Federal costumam travar certidões negativas de débito na hora que a empresa mais precisa de crédito bancário. Atuamos com impugnações administrativas fundamentadas e embargos à execução fiscal para defender o patrimônio da empresa e reaver valores pagos a mais.',
    highlights: [
      'Defesa contra autos de infração de ICMS, PIS/COFINS, IRPJ e ISS',
      'Desbloqueio de Certidões Negativas de Débito (CND) para licitações e bancos',
      'Recuperação administrativa e judicial de créditos fiscais represados',
      'Planejamento tributário preventivo com foco na transição da Reforma',
    ],
    scope: [
      'Sustentação perante o Tribunal Administrativo Tributário do Estado (TATE/PE)',
      'Ações anulatórias com depósito ou seguro garantia para evitar penhora',
      'Pareceres práticos para adequação fiscal de novos modelos de negócio',
      'Aproveitamento seguro de benefícios fiscais regionais em Pernambuco',
    ],
    leadPartner: 'Dr. Alcoforado & Dr. João André Sales Rodrigues',
    image: '/images/corporate_negotiation_table_1793151654940.jpg',
    statBadge: 'Defesa Fiscal',
  },
  {
    id: 'patrimonial-sucessoes',
    number: '04',
    title: 'Holding Familiar & Planejamento Sucessório',
    subtitle: 'Proteção de bens familiares e transição limpa para os herdeiros',
    description: 'Mais de 70% das empresas familiares brasileiras não chegam à terceira geração por brigas de herdeiros ou inventários que consomem até 40% do patrimônio em impostos (ITCMD) e custos judiciais. Estruturamos holdings patrimoniais e doações com usufruto para que o fundador mantenha 100% do controle em vida e garanta a paz da família.',
    highlights: [
      'Constituição de holding patrimonial para redução legal do ITCMD',
      'Cláusulas de usufruto vitalício, incomunicabilidade e inalienabilidade',
      'Protocolos de governança familiar para herdeiros gestores e não-gestores',
      'Inventários extrajudiciais em cartório resolvidos em semanas, não anos',
    ],
    scope: [
      'Mapeamento detalhado de imóveis, cotas sociais e investimentos da família',
      'Pactos antenupciais e testamentos estratégicos sem brechas para litígio',
      'Blindagem lícita contra riscos empresariais e desconsideração da personalidade jurídica',
      'Prevenção de disputas sucessórias entre diferentes núcleos familiares',
    ],
    leadPartner: 'Dr. João André Sales Rodrigues & Dra. Bacelar',
    image: '/images/holding_wealth_heritage_1793152648076.jpg',
    statBadge: 'Patrimônio Familiar',
  },
  {
    id: 'medico-saude',
    number: '05',
    title: 'Direito Médico & Grupos de Saúde',
    subtitle: 'Defesa técnica para hospitais, clínicas, laboratórios e sociedades médicas',
    description: 'Processos de alegado erro médico e sindicâncias éticas no CREMEPE podem destruir em semanas a reputação que um profissional ou clínica levou 20 anos para construir. Atuamos com perícia médica aliada à estratégia jurídica, além de assessorar hospitais na relação com planos de saúde e exigências da ANS.',
    highlights: [
      'Defesa em sindicâncias e processos ético-profissionais no CREMEPE e CFM',
      'Contestação fundamentada em ações judiciais de indenização por dano moral',
      'Reestruturação tributária e societária para clínicas e consultórios médicos',
      'Auditoria de prontuários, termos de consentimento e rotinas assistenciais',
    ],
    scope: [
      'Recuperação de glosas abusivas aplicadas por operadoras de plano de saúde',
      'Elaboração de contratos de prestação de serviços médicos e parcerias hospitalares',
      'Adequação regulatória às normas da Vigilância Sanitária e ANS',
      'Treinamento preventivo de secretárias e equipes sobre sigilo e LGPD na saúde',
    ],
    leadPartner: 'Corpo Jurídico Especializado SRAB',
    image: '/images/medical_corporate_advisory_1793152647527.jpg',
    statBadge: 'Defesa Médica',
  },
  {
    id: 'trabalhista-corporativo',
    number: '06',
    title: 'Trabalhista Corporativo & Gestão de Riscos',
    subtitle: 'Prevenção de passivos, defesa em reclamatórias e acordos sindicais',
    description: 'Terceirizações mal fiscalizadas, horas extras habituais e rescisões de cargos de confiança geram passivos trabalhistas que sufocam o fluxo de caixa de indústrias e prestadoras de serviço em Pernambuco. Criamos rotinas preventivas que barram o risco de condenação e defendemos a empresa no TRT-6 e TST.',
    highlights: [
      'Auditoria de contratos de terceirizados para afastar responsabilidade subsidiária',
      'Defesas combativas em reclamatórias de gerentes e diretores de alto salário',
      'Assessoria em negociações coletivas com sindicatos patronais e de trabalhadores',
      'Defesa contra multas aplicadas pelo Ministério do Trabalho e Ações Civis Públicas',
    ],
    scope: [
      'Elaboração de acordos de não-concorrência e sigilo para colaboradores-chave',
      'Revisão de Planos de Participação nos Lucros (PLR) com isenção de encargos',
      'Condução sigilosa de apurações internas de assédio e desvios de conduta',
      'Sustentações orais nas Turmas do Tribunal Regional do Trabalho da 6ª Região (TRT-6)',
    ],
    leadPartner: 'Dr. Alcoforado & Corpo de Associados SRAB',
    image: '/images/office_library_justice_1793151654386.jpg',
    statBadge: 'Passivo Trabalhista',
  },
];

export const PARTNERS: Partner[] = [
  {
    name: 'João André Sales Rodrigues',
    oab: 'OAB/PE 19.186',
    role: 'Sócio Fundador & Coordenador Geral',
    bio: 'Advogado com mais de duas décadas de prática forense ininterrupta no Judiciário de Pernambuco e perante as Cortes Superiores em Brasília. Formado pela tradicional Faculdade de Direito do Recife (FDR/UFPE), construiu sua reputação na condução de litígios societários, defesas em execuções de grande porte e estruturação de holdings patrimoniais. Não terceiriza reuniões estratégicas nem despachos decisivos com magistrados.',
    specialties: [
      'Contencioso Cível Estratégico',
      'Direito Empresarial & Societário',
      'Planejamento Sucessório e Holdings',
      'Sustentação Oral no TJPE, STJ e STF',
    ],
    education: [
      'Graduação em Direito - Faculdade de Direito do Recife (FDR / UFPE)',
      'Pós-Graduação em Direito Processual Civil e Prática Empresarial',
      'Inscrito na OAB/PE sob o nº 19.186 há mais de 20 anos',
    ],
    image: '/images/partner_joao_andre_1793151654194.jpg',
  },
  {
    name: 'Dr. R. Alcoforado',
    oab: 'OAB/PE Sócio Associado',
    role: 'Sócio Coordenador - Núcleo Tributário & Trabalhista',
    bio: 'Especialista em Direito Tributário e Finanças Empresariais. Atua na linha de frente contra autuações fiscais do Estado e da União e na auditoria trabalhista preventiva para empresas do comércio, indústria e logística em Pernambuco.',
    specialties: [
      'Defesas Tributárias Administrativas e Judiciais',
      'Recuperação de Créditos de ICMS e Federais',
      'Prevenção de Passivos Trabalhistas em Grandes Equipes',
      'Negociações com Sindicatos Patronais',
    ],
    education: [
      'Especialização em Direito Tributário e Processo Tributário',
      'Extensão em Gestão de Crise e Contencioso Fiscal',
    ],
    image: '/images/partner_dr_alcoforado_1793154111700.jpg',
  },
  {
    name: 'Dra. M. Bacelar',
    oab: 'OAB/PE Sócia Associada',
    role: 'Sócia Coordenadora - Núcleo Societário & M&A',
    bio: 'Advogada focada em governança de empresas familiares, contratos mercantis complexos e negociações de fusões e aquisições. Conduz processos de reorganização societária com olhar cirúrgico para a mitigação de disputas futuras.',
    specialties: [
      'Acordos de Sócios e Operações de M&A',
      'Holdings Patrimoniais e Protocolos de Família',
      'Contratos de Parceria e Fornecimento Estratégico',
      'Direito Imobiliário Corporativo',
    ],
    education: [
      'Pós-Graduação em Direito Empresarial e Societário',
      'Capacitação em Governança Corporativa e Mediação Empresarial',
    ],
    image: '/images/partner_dra_bacelar_1793154112967.jpg',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-reforma-tributaria',
    title: 'Reforma Tributária em PE: O que as empresas locais precisam revisar nos contratos agora',
    category: 'Tributário',
    date: '24 de Outubro de 2026',
    readTime: '5 min de leitura',
    summary: 'A transição para os novos impostos (IBS/CBS) vai mudar o cálculo de margem e o aproveitamento de créditos fiscais no Polo de Suape e no Recife. Veja os pontos de atenção.',
    author: 'Dr. Alcoforado & Dr. João André Sales Rodrigues',
    content: 'Muitos empresários estão esperando 2027 para olhar para a Reforma Tributária. Isso é um erro que vai custar caro. Contratos de fornecimento de longo prazo assinados hoje sem cláusula de repasse do IBS/CBS vão gerar desequilíbrio econômico-financeiro imediato. Nossa recomendação prática é auditar todas as minutas comerciais ativas e mapear o impacto do novo regime na formação de preço da empresa.',
    image: '/images/article_tax_reform_suape_1793154114105.jpg',
  },
  {
    id: 'art-protecao-patrimonial',
    title: 'Holding Familiar não é milagre: como blindar o patrimônio de forma lícita e sem risco',
    category: 'Societário & Família',
    date: '18 de Outubro de 2026',
    readTime: '6 min de leitura',
    summary: 'Criar uma holding às pressas após sofrer um processo judicial é o caminho mais rápido para ver a Justiça anular a operação por fraude. Entenda como fazer certo.',
    author: 'João André Sales Rodrigues (OAB/PE 19.186)',
    content: 'O planejamento patrimonial precisa ser feito enquanto as águas estão calmas. Quando o empresário já tem execução fiscal ajuizada ou protesto em cartório, transferir imóveis para uma pessoa jurídica pode ser caracterizado como fraude à execução. A verdadeira proteção patrimonial começa com organização de fluxo, separação clara entre pessoa física e jurídica, e instituição de cláusulas testamentárias e de usufruto com anos de antecedência.',
    image: '/images/holding_wealth_heritage_1793152648076.jpg',
  },
  {
    id: 'art-passivo-trabalhista',
    title: 'Terceirização no Recife: como um checklist mensal evita que sua empresa pague a conta do terceirizado',
    category: 'Trabalhista Corporativo',
    date: '10 de Outubro de 2026',
    readTime: '4 min de leitura',
    summary: 'O TRT-6 condena rotineiramente a empresa tomadora de serviço quando a prestadora some sem pagar verbas rescisórias. Saiba como se resguardar.',
    author: 'Núcleo Trabalhista SRAB',
    content: 'Não basta exigir certidão negativa na assinatura do contrato. Se a empresa terceirizada deixar de recolher o FGTS ou a previdência de um único funcionário que atua dentro das suas dependências, a Justiça do Trabalho vai responsabilizar você. Implantamos rotinas de retenção de faturas condicionadas ao envio dos comprovantes individuais de pagamento, eliminando 95% do risco de condenação subsidiária.',
    image: '/images/corporate_negotiation_table_1793151654940.jpg',
  },
  {
    id: 'art-clausulas-arbitragem',
    title: 'Cláusula de Arbitragem em Contratos Empresariais: quando vale a pena optar pela câmara privada',
    category: 'Contencioso Estratégico',
    date: '02 de Outubro de 2026',
    readTime: '5 min de leitura',
    summary: 'Em disputas onde o sigilo dos números da empresa e a rapidez da decisão são vitais, a arbitragem evita anos de processo público na Justiça Comum.',
    author: 'João André Sales Rodrigues',
    content: 'Levar um conflito entre sócios ou um rompimento de parceria bilionária para a Justiça Comum significa expor balanços, e-mails e estratégias industriais em um processo que qualquer pessoa pode consultar na internet. Em contratos acima de R$ 2 milhões, a inclusão de cláusula compromissória com câmara arbitral séria garante árbitros que entendem o mercado e decisões com força de sentença em poucos meses, sem publicidade prejudicial ao negócio.',
    image: '/images/article_arbitration_chamber_1793154113910.jpg',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona a primeira conversa com o SRAB Advogados?',
    answer: 'Nossa primeira reunião é técnica e direta ao ponto. Analisamos os documentos preliminares (contratos, notificações, intimações ou balanços), avaliamos os riscos reais e dizemos com franqueza se a demanda tem viabilidade jurídica e qual o caminho mais seguro. Se a causa não tiver fundamento sustentável, nós avisamos de imediato para não fazer o cliente gastar dinheiro à toa.',
  },
  {
    question: 'Quem vai cuidar do meu processo? O Dr. João André acompanha os casos?',
    answer: 'Sim. Rejeitamos o modelo de escritórios de massa que colocam o nome do sócio titular no contrato e passam o processo para estagiários tocarem sozinhos. O Dr. João André Sales Rodrigues (OAB/PE 19.186) e os sócios coordenadores participam pessoalmente do desenho das teses, das reuniões estratégicas e das audiências e sustentações decisivas.',
  },
  {
    question: 'O escritório atende demandas fora de Pernambuco?',
    answer: 'Sim. Nossa sede física fica na Ilha do Leite, no polo empresarial e judiciário do Recife, mas patrocinamos causas em todo o Nordeste e atuamos constantemente perante os Tribunais Superiores em Brasília (STJ, STF e TST), tanto de forma presencial quanto telepresencial.',
  },
  {
    question: 'Qual é o foco de atuação do SRAB? Atendem qualquer tipo de causa?',
    answer: 'Não atendemos causas de massa (como juizados de consumidor contra empresas de telefonia ou bancos). Nosso foco exclusivo é a advocacia de alto impacto: empresas que precisam de assessoria societária, fiscal e trabalhista contínua, litígios judiciais de valores expressivos e famílias que necessitam de organização de patrimônio e sucessão.',
  },
];
