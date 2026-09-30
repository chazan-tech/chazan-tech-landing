import { Link } from 'react-router-dom'

const PROJECTS = [
  {
    name: 'CondFin',
    slug: 'condfin',
    kind: 'Software',
    segment: 'Administradoras de condomínio',
    problem: 'Fechar prestação de contas e montar relatório de assembleia na mão, condomínio por condomínio.',
    solution:
      'Plataforma financeira com IA: sobe o PDF de qualquer administradora, planilha ou foto e o sistema extrai, categoriza e confere os totais.',
    features: [
      'Detector de gasto atípico com sugestão de economia',
      'Resumo executivo de assembleia em 1 clique',
      'Ranking de inadimplência e custo por unidade da carteira',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
      </svg>
    ),
  },
  {
    name: 'Gestão Financeira',
    slug: 'gestao-financeira',
    kind: 'Software',
    segment: 'Empresas com contas a pagar recorrentes',
    problem: 'Contas a pagar em planilha e pastas no Drive: boleto esquecido, juros pagos por descuido.',
    solution:
      'Painel único do que vence, do que foi pago e para onde vai o dinheiro. O boleto é encaminhado em PDF para um bot no Telegram, que lê e cadastra sozinho.',
    features: [
      'Leitura de boleto por IA: valor, fornecedor e vencimento',
      'Despesas fixas geradas automaticamente todo mês',
      'Aviso às 8h no Telegram com os boletos do dia anexados',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    name: 'Pedro',
    slug: 'pedro',
    kind: 'Software',
    segment: 'Lojas de celular',
    problem: 'A mesma pergunta o dia inteiro no WhatsApp, cliente que some no "vou pensar" e ninguém para puxar de volta.',
    solution:
      'Atendente no WhatsApp com o catálogo e o horário da loja. Responde na hora, conduz a troca de aparelho e retoma quem parou no meio da conversa.',
    features: [
      'Troca conduzida até estar pronta para avaliação',
      'Aviso no Telegram e o lojista assume a conversa quando quiser',
      'Preço, desconto e valor de troca continuam sendo do lojista',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Banco de Talentos',
    slug: 'banco-de-talentos',
    kind: 'Software',
    segment: 'RH, associações, cooperativas e órgãos públicos',
    problem: 'Cadastro em massa na mão: ficha de papel, dado faltando, termo para imprimir e alguém digitando tudo numa planilha.',
    solution:
      'O cadastro acontece numa conversa no WhatsApp, uma pergunta por vez, e continua de onde parou. O termo vai por link, com assinatura digital pelo celular.',
    features: [
      'Reenvio automático para quem ficou com assinatura pendente',
      'Painel com busca por nome e perfis de acesso por equipe',
      'Geração do cartão de identificação e administração pelo Telegram',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: 'Sempre Criança',
    path: '/projetos/sempre-crianca',
    kind: 'Sob medida',
    segment: 'ONG · Campanha de Natal',
    problem: '500 cartinhas de Natal geridas por 3 pessoas: foto de cada carta enviada uma a uma no WhatsApp e status numa planilha.',
    solution:
      'Plataforma de autoatendimento: o padrinho entra, lê as cartinhas disponíveis e escolhe a sua. A equipe acompanha tudo em um painel.',
    features: [
      'Status atualizado sozinho: disponível, apadrinhada, entregue',
      'Dezenas de horas de trabalho braçal liberadas para a equipe',
      'Fim da planilha e do envio manual de cartinhas',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-white line-grid">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-electric font-semibold text-sm tracking-widest uppercase">
            Projetos no ar
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <BottomNote />
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const isSoftware = project.kind === 'Software'

  return (
    <article className="group flex flex-col p-7 rounded-xl border border-deep/8 bg-deep/2 hover:border-electric/40 hover:bg-electric/3 transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="w-10 h-10 text-deep/30 group-hover:text-electric transition-colors duration-300">
          {project.icon}
        </div>
        <span
          className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
            isSoftware
              ? 'text-electric bg-electric/10 border-electric/25'
              : 'text-deep/50 border-deep/15'
          }`}
        >
          {project.kind}
        </span>
      </div>

      <h3 className="text-deep font-semibold text-xl">{project.name}</h3>
      <p className="text-deep/40 text-xs mt-1 mb-5">{project.segment}</p>

      <p className="text-deep/70 text-sm leading-relaxed mb-3">
        <strong className="text-deep font-semibold">O problema: </strong>
        {project.problem}
      </p>
      <p className="text-deep/55 text-sm leading-relaxed mb-5">
        <strong className="text-deep font-semibold">O que construímos: </strong>
        {project.solution}
      </p>

      <ul className="mt-auto flex flex-col gap-2 pt-5 border-t border-deep/8">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-deep/60 text-sm leading-snug">
            <svg className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {(project.slug || project.path) && (
        <Link
          to={project.path ?? `/software/${project.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-electric text-sm font-semibold hover:text-electric-light transition-colors"
        >
          {isSoftware ? 'Conhecer o software' : 'Conhecer o projeto'}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      )}
    </article>
  )
}

function BottomNote() {
  return (
    <div className="mt-12 p-6 rounded-xl border border-electric/20 bg-electric/4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <p className="text-deep/70 text-sm leading-relaxed max-w-xl">
          <strong className="text-deep font-semibold">Quer ver funcionando?</strong>
          {' '}Mostramos qualquer um desses sistemas ao vivo, com dados fictícios, ou desenhamos
          um novo para o seu processo.
        </p>
        <a
          href="#contato"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-electric text-deep font-semibold px-6 py-3.5 rounded-lg
                     hover:bg-electric-light hover:shadow-electric-lg transition-all duration-200 group text-sm"
        >
          Agendar demonstração
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
