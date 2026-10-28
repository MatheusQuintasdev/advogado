import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, HelpCircle, ChevronDown, X, Share2, Check } from 'lucide-react';
import { ARTICLES, Article, FAQ_ITEMS } from '../data/firmData';

export const PublicationsAndFAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['todos', 'Tributário', 'Societário & Sucessões', 'Trabalhista Corporativo', 'Contencioso & Arbitragem'];

  const filteredArticles =
    selectedCategory === 'todos'
      ? ARTICLES
      : ARTICLES.filter((art) => art.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
      {/* Publicações & Análises Jurídicas */}
      <section id="publicacoes" className="py-24 bg-[#080d19] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-2">
                Análises Práticas · @srab.advogados
              </div>
              <h2 className="text-3xl md:text-5xl font-serif-luxury font-medium text-white">
                Estudos de Caso &amp; Jurisprudência Recente
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
              Artigos escritos diretamente pelos sócios do SRAB sobre decisões dos tribunais e impactos práticos nos contratos e impostos da sua empresa.
            </p>
          </div>

          {/* Category Filter Tabs (Functional segmented control allowed per constitution) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c5a880] text-slate-950 font-semibold shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'todos' ? 'Todos os Temas' : cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setReadingArticle(article)}
                className="group rounded-xl bg-[#0b1325] border border-slate-800 hover:border-[#c5a059]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Article Cover Image */}
                {article.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1325] via-[#0b1325]/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b1325] bg-[#c5a059] px-2.5 py-1 rounded shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium">
                      <span>{article.date}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif-luxury font-medium text-white group-hover:text-[#c5a059] transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light mb-6">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="truncate pr-2">Por {article.author}</span>
                    <span className="text-[#c5a059] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                      Ler análise →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reading Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0b1325] border border-[#c5a059]/40 rounded-xl shadow-2xl p-6 md:p-10 max-h-[85vh] overflow-y-auto">
            {readingArticle.image && (
              <div className="relative h-56 w-full -mt-6 -mx-6 md:-mt-10 md:-mx-10 mb-6 overflow-hidden max-w-[calc(100%+3rem)] md:max-w-[calc(100%+5rem)]">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1325] via-transparent to-black/50" />
                <button
                  onClick={() => setReadingArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded bg-black/60 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-[#c5a059] font-bold uppercase tracking-wider">{readingArticle.category}</span>
                <span>·</span>
                <span>{readingArticle.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  title="Compartilhar Link"
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
                {!readingArticle.image && (
                  <button
                    onClick={() => setReadingArticle(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif-luxury text-white font-medium mb-4 leading-snug">
              {readingArticle.title}
            </h2>

            <div className="text-xs text-slate-400 mb-8 pb-4 border-b border-slate-800">
              Autoria: <strong className="text-slate-200">{readingArticle.author}</strong> · Coordenação SRAB Advogados
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-4 font-light">
              <p className="text-base text-slate-200 font-normal">
                {readingArticle.summary}
              </p>
              <div className="h-px bg-slate-800 my-4" />
              <p>{readingArticle.content}</p>
              <p>
                No cenário contemporâneo, a atuação jurídica preventiva não constitui mero centro de custo, mas sim instrumento estratégico indispensável para assegurar a perenidade dos fluxos operacionais e a blindagem contra passivos imprevistos. O escritório <strong>Sales Rodrigues, Alcoforado, Bacelar &amp; Advogados Associados</strong> mantém constante monitoramento das decisões dos tribunais estaduais e federais para antecipar impactos e desenhar estratégias personalizadas para nossos clientes.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Conteúdo de caráter estritamente informativo (Provimento 205/2021 CFOAB).
              </div>
              <button
                onClick={() => setReadingArticle(null)}
                className="w-full sm:w-auto px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Fechar Artigo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Perguntas Frequentes (FAQ) */}
      <section className="py-20 bg-[#0b101d] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider text-[#c5a880] uppercase mb-2">
              Dúvidas Institucionais
            </div>
            <h2 className="text-2xl md:text-4xl font-serif-luxury font-medium text-white">
              Perguntas Frequentes sobre a Atuação do SRAB
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-[#c5a880] transition-colors cursor-pointer"
                  >
                    <span className="font-serif-luxury text-base md:text-lg font-medium">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#c5a880] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-xs md:text-sm leading-relaxed border-t border-slate-800/60 font-light">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
