import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollAnimation, staggerDelay } from '../hooks/useScrollAnimation'

const VALUES = [
  {
    title: 'Base técnica de verdade',
    description:
      'Formação técnica pelo CEFET aliada à graduação universitária. Sabemos o que estamos fazendo e entendemos por quê cada decisão técnica importa para a sua operação.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: 'Apaixonados pelo que fazem',
    description:
      'Tecnologia não é só profissão pra gente. É o que escolhemos estudar, construir e evoluir todo dia. Essa paixão aparece na qualidade do que entregamos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Resultado acima de tudo',
    description:
      'Medimos o sucesso pelo impacto gerado na operação do cliente, não pelo código entregue. Cada projeto tem métricas claras antes de começar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

const TEAM = [
  {
    initials: 'AC',
    name: 'Anna Chazan',
    role: 'Fundadora & Engenheira de Software',
    tags: ['Técnico em Informática · CEFET Nova Friburgo', 'Sistemas de Informação · UFF'],
    featured: true,
  },
  {
    initials: 'TT',
    name: 'Time Técnico',
    role: 'Especialistas em Desenvolvimento & Automação',
    tags: ['Técnico em Informática · CEFET', 'Graduados na área'],
    featured: false,
  },
]

export default function QuemSomos() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] bg-deep flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-electric/6 blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <PageHeroContent />
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white line-grid">
        <div className="max-w-6xl mx-auto px-6">
          <Story />
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-deep">
        <div className="max-w-6xl mx-auto px-6">
          <Team />
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white line-grid">
        <div className="max-w-6xl mx-auto px-6">
          <Values />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-deep overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-electric/8 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <CtaBlock />
        </div>
      </section>

      <Footer />
    </div>
  )
}

function PageHeroContent() {
  const { ref, isVisible } = useScrollAnimation(0)

  return (
    <div
      ref={ref}
      className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <span className="text-electric font-semibold text-sm tracking-widest uppercase">
        Quem somos
      </span>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mt-4 mb-6">
        O time por trás dos sistemas<br className="hidden sm:block" />{' '}
        que <span className="text-electric">transformam operações.</span>
      </h1>
      <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl">
        Por trás de cada sistema entregue há uma equipe técnica apaixonada. Especialistas que entendem a operação antes de escrever a primeira linha de código.
      </p>
    </div>
  )
}

function Story() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="max-w-2xl">
        <span className="text-electric font-semibold text-sm tracking-widest uppercase">
          Nossa história
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-deep mt-3 leading-tight mb-8">
          Como nasceu<br className="hidden md:block" /> a Chazan Tech
        </h2>

        <div className="flex flex-col gap-5 text-deep/60 leading-relaxed">
          <p>
            A Chazan Tech nasceu de uma percepção simples: a maioria das empresas convive com processos manuais não por falta de tecnologia disponível, mas por falta de quem entenda a operação antes de propor uma solução.
          </p>
          <p>
            Nossa fundadora, Anna Chazan, tem formação técnica em Informática pelo CEFET Nova Friburgo e graduação em Sistemas de Informação pela UFF. Foi essa combinação de base técnica sólida com visão de sistemas que moldou a forma como a Chazan Tech trabalha: diagnóstico antes de código, resultado antes de contrato.
          </p>
          <p>
            O time foi construído com o mesmo critério: especialistas com passagem pelo CEFET e graduação na área, apaixonados por tecnologia e comprometidos com o impacto real que cada projeto gera na operação do cliente.
          </p>
        </div>
      </div>
    </div>
  )
}

function Team() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div>
      <div
        ref={ref}
        className={`max-w-2xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <span className="text-electric font-semibold text-sm tracking-widest uppercase">
          O time
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
          Especialistas formados<br className="hidden md:block" /> para entregar resultado
        </h2>
        <p className="text-white/45 text-lg mt-4 leading-relaxed">
          Um time pequeno, técnico e comprometido. Quem faz o diagnóstico é quem constrói a solução.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </div>
  )
}

function TeamCard({ member, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      style={staggerDelay(index, 120)}
      className={`p-7 rounded-xl border border-white/8 bg-white/4 hover:border-electric/30 transition-all duration-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-electric/15 border border-electric/25 flex items-center justify-center text-electric font-bold text-sm flex-shrink-0">
          {member.initials}
        </div>
        <div>
          <p className="text-white font-semibold">{member.name}</p>
          <p className="text-white/45 text-sm">{member.role}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {member.tags.map(tag => (
          <span key={tag} className="text-xs text-electric/70 bg-electric/8 border border-electric/15 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function Values() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div>
      <div
        ref={ref}
        className={`max-w-2xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <span className="text-electric font-semibold text-sm tracking-widest uppercase">
          O que nos move
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-deep mt-3 leading-tight">
          Os valores por trás<br className="hidden md:block" /> de cada projeto
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VALUES.map((value, i) => (
          <ValueCard key={value.title} value={value} index={i} />
        ))}
      </div>
    </div>
  )
}

function ValueCard({ value, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      style={staggerDelay(index, 110)}
      className={`group p-7 rounded-xl border border-deep/8 bg-deep/2 hover:border-electric/40 hover:bg-electric/3 transition-all duration-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-10 h-10 text-deep/30 mb-5 group-hover:text-electric transition-colors duration-300">
        {value.icon}
      </div>
      <h3 className="text-deep font-semibold text-base mb-2">{value.title}</h3>
      <p className="text-deep/50 leading-relaxed text-sm">{value.description}</p>
    </div>
  )
}

function CtaBlock() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="inline-flex items-center gap-2.5 border border-electric/25 rounded-full px-4 py-1.5 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse-slow" aria-hidden="true" />
        <span className="text-electric/75 text-xs font-medium tracking-[0.15em] uppercase">
          Vamos conversar
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
        Tem um projeto em mente?<br className="hidden md:block" />{' '}
        <span className="text-electric">Conta pra gente.</span>
      </h2>

      <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-10">
        Em 30 minutos de conversa, identificamos onde está o maior potencial de ganho na sua operação, sem compromisso.
      </p>

      <a
        href="/#contato"
        className="inline-flex items-center gap-3 bg-electric text-deep font-bold text-base px-9 py-4 rounded-lg
                   hover:bg-electric-light hover:shadow-electric-lg transition-all duration-200 group"
      >
        Agendar análise gratuita
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>

      <p className="text-white/30 text-sm mt-6">Resposta em até 24h · Sem obrigação de contratar</p>
    </div>
  )
}
