import { Link } from 'react-router-dom'

const SERVICES = [
  // {
  //   title: 'Bots de Atendimento no WhatsApp',
  //   description:
  //     'Responde clientes, conduz trocas e cadastros e retoma quem sumiu. Avisa a equipe no Telegram e sai da frente quando você assume.',
  //   href: '/software/pedro',
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  //       <path d="M9 10h.01M12 10h.01M15 10h.01" strokeWidth="2" strokeLinecap="round" />
  //     </svg>
  //   ),
  //   tag: 'Software',
  // },
  {
    title: 'Automação de Processos',
    description:
      'Cadastros, boletos, relatórios e assinaturas rodando sozinhos. A equipe entra só nas exceções.',
    href: '#projetos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    tag: null,
  },
  {
    title: 'Inteligência Artificial Aplicada',
    description:
      'IA que lê boletos e PDFs, aponta gasto fora da curva e gera relatórios, integrada ao seu sistema.',
    href: '/software/condfin',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M7 10H4M7 14H4M17 10h3M17 14h3M10 7V4M14 7V4M10 20v-3M14 20v-3" />
      </svg>
    ),
    tag: 'Diferencial',
  },
  {
    title: 'Software Customizado',
    description:
      'Quando nenhum software pronto cabe, construímos o sistema exato para a sua operação.',
    href: '/contato',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tag: null,
    featured: false,
  },
  {
    title: 'Integração de Sistemas',
    description:
      'Conectamos ERP, CRM, planilhas e e-commerce via API para os dados fluírem sozinhos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    href: '/contato',
    tag: null,
  },
  {
    title: 'Inteligência de Dados',
    description:
      'Dashboards em tempo real no lugar de planilhas desatualizadas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6"  y1="20" x2="6"  y2="14" />
        <line x1="2"  y1="20" x2="22" y2="20" />
      </svg>
    ),
    href: '/contato',
    tag: null,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-deep">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-electric font-semibold text-sm tracking-widest uppercase">
            O que entregamos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
            Soluções que transformam<br className="hidden md:block" /> sua operação
          </h2>
          <p className="text-white/45 text-lg mt-4 leading-relaxed">
            Softwares prontos para contratar e sistemas sob medida. Cada projeto começa por onde o impacto é maior.
          </p>
        </div>

        {/* Grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-6 -mx-6 px-6 pb-2 no-scrollbar sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} featured={service.featured} />
          ))}
        </div>
      </div>
    </section>
  )
}

const LINK_CLASS =
  'mt-5 flex items-center gap-1.5 text-electric/60 sm:text-electric/0 group-hover:text-electric/70 transition-colors duration-300 text-sm font-medium'

function ServiceCard({ service, index, featured }) {
  const isPage = service.href.startsWith('/')
  const cta = (
    <>
      <span>{service.href.startsWith('/software') ? 'Conhecer o software' : 'Saiba mais'}</span>
      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </>
  )

  return (
    <div
      className={`w-[82%] flex-shrink-0 snap-start sm:w-auto sm:flex-shrink relative group p-5 rounded-xl border border-white/8 bg-white/4
                  hover:border-electric/35 hover:bg-white/6
                  transition-all duration-300
                  ${featured ? 'sm:col-span-2' : ''}`}
    >
      {/* Optional tag */}
      {service.tag && (
        <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-widest uppercase
                         text-electric bg-electric/10 border border-electric/20 px-2.5 py-1 rounded-full">
          {service.tag}
        </span>
      )}

      {/* Icon */}
      <div className="w-8 h-8 text-electric/50 mb-3 group-hover:text-electric transition-colors duration-300">
        {service.icon}
      </div>

      {/* Text */}
      <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
      <p className="text-white/45 leading-relaxed text-sm">{service.description}</p>

      {/* Hover indicator */}
      {isPage ? (
        <Link to={service.href} className={LINK_CLASS}>{cta}</Link>
      ) : (
        <a href={service.href} className={LINK_CLASS}>{cta}</a>
      )}
    </div>
  )
}
