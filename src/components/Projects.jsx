import { Link } from 'react-router-dom'
import { SOFTWARE } from '../data/software'

// Ordem de exibição; nome, segmento e resumo vêm de src/data/software.js.
const ORDER = ['pedro', 'condfin', 'gestao-financeira', 'banco-de-talentos', 'sempre-crianca']

const ICONS = {
  condfin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
    </svg>
  ),
  'gestao-financeira': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  pedro: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9 10h.01M12 10h.01M15 10h.01" strokeWidth="2" />
    </svg>
  ),
  'banco-de-talentos': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  'sempre-crianca': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>
  ),
}

const RESULTS = [
  { process: 'Análise financeira de condomínios', before: '4 pessoas, 3 dias por mês', after: 'Zero intervenção humana' },
  { process: 'Gestão de mais de 500 beneficiários', before: '5 pessoas, 8h por dia', after: '1 pessoa supervisionando' },
  { process: 'Relatórios semanais', before: '2 pessoas, 4h por semana', after: 'Relatório no e-mail às 7h' },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-16 md:py-24 bg-white line-grid">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-electric font-semibold text-sm tracking-widest uppercase">
            Alguns dos nossos projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-deep mt-3 leading-tight">
            Sistemas que já estão<br className="hidden md:block" /> trabalhando por eles
          </h2>
          <p className="text-deep/55 text-lg mt-4 leading-relaxed">
            Alguns viraram software que vendemos. Outros foram feitos sob medida.
            Em todos, o processo manual saiu do caminho da equipe.
          </p>
        </div>

        {/* Grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-6 -mx-6 px-6 pb-2 no-scrollbar sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {ORDER.map((slug) => (
            <ProjectCard key={slug} slug={slug} project={SOFTWARE[slug]} />
          ))}
          <MoreCard />
        </div>

        <Results />
      </div>
    </section>
  )
}

function ProjectCard({ slug, project }) {
  const custom = project.kind === 'sob-medida'
  const to = `${custom ? '/projetos' : '/software'}/${slug}`

  return (
    <Link
      to={to}
      className="w-[82%] flex-shrink-0 snap-start sm:w-auto sm:flex-shrink group flex flex-col p-6 rounded-xl border border-deep/8 bg-deep/2 hover:border-electric/40 hover:bg-electric/3 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-9 h-9 text-deep/30 group-hover:text-electric transition-colors duration-300">
          {ICONS[slug]}
        </div>
        <span
          className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
            custom ? 'text-deep/50 border-deep/15' : 'text-electric bg-electric/10 border-electric/25'
          }`}
        >
          {custom ? 'Sob medida' : 'Software'}
        </span>
      </div>

      <h3 className="text-deep font-semibold text-lg">{project.name}</h3>
      <p className="text-deep/40 text-xs mt-1 mb-3 sm:min-h-[2rem]">{project.audience}</p>
      <p className="text-deep/60 text-sm leading-relaxed">{project.tagline}</p>

      <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-electric text-sm font-semibold group-hover:text-electric-light transition-colors">
        {custom ? 'Conhecer o projeto' : 'Conhecer o software'}
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  )
}

function MoreCard() {
  return (
    <a
      href="/contato"
      className="w-[82%] flex-shrink-0 snap-start sm:w-auto sm:flex-shrink group flex flex-col justify-between p-6 rounded-xl border border-dashed border-electric/40 bg-electric/4 hover:bg-electric/8 transition-all duration-300"
    >
      <div>
        <span className="text-electric text-[10px] font-semibold tracking-widest uppercase">E outros</span>
        <h3 className="text-deep font-semibold text-lg mt-4">Tem um processo travando a sua equipe?</h3>
        <p className="text-deep/60 text-sm leading-relaxed mt-3">
          Cada projeto começa pelo problema de quem contrata. Conte o seu e desenhamos a solução, pronta ou sob medida.
        </p>
      </div>
      <span className="pt-5 inline-flex items-center gap-1.5 text-electric text-sm font-semibold group-hover:text-electric-light transition-colors">
        Conversar sobre o meu caso
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </a>
  )
}

function Results() {
  return (
    <div className="mt-12 p-6 md:p-8 rounded-xl bg-deep">
      <p className="text-electric text-xs font-semibold tracking-widest uppercase mb-6">
        Antes e depois, em processos reais
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {RESULTS.map((r) => (
          <div key={r.process}>
            <p className="text-white font-semibold text-sm mb-3">{r.process}</p>
            <p className="text-white/35 text-sm line-through decoration-white/20">{r.before}</p>
            <p className="text-electric text-sm font-medium mt-1">{r.after}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-white/60 text-sm leading-relaxed max-w-xl">
          Quer ver um deles funcionando? Mostramos ao vivo, com dados fictícios, ou desenhamos um novo para o seu processo.
        </p>
        <a
          href="/contato"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-electric text-deep font-semibold px-6 py-3.5 rounded-lg
                     hover:bg-electric-light hover:shadow-electric-lg transition-all duration-200 group text-sm"
        >
          Agendar demonstração
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
