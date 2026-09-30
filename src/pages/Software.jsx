import { useEffect } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SOFTWARE, SOFTWARE_SLUGS } from '../data/software'
import { whatsappUrl, trackContact } from '../lib/contact'

// index.html fixa título, descrição e canonical da home; cada página ajusta os seus e devolve ao sair.
function setPageMeta({ title, description, url }) {
  const targets = [
    ['link[rel="canonical"]', 'href', url],
    ['meta[name="description"]', 'content', description],
    ['meta[property="og:title"]', 'content', title],
    ['meta[property="og:description"]', 'content', description],
    ['meta[property="og:url"]', 'content', url],
  ]
  const previousTitle = document.title
  document.title = title
  const previous = targets.map(([selector, attr, value]) => {
    const el = document.querySelector(selector)
    const old = el?.getAttribute(attr)
    if (el) el.setAttribute(attr, value)
    return [el, attr, old]
  })
  return () => {
    document.title = previousTitle
    previous.forEach(([el, attr, old]) => { if (el && old != null) el.setAttribute(attr, old) })
  }
}

export default function Software() {
  const { slug } = useParams()
  const { pathname } = useLocation()
  const software = SOFTWARE[slug]
  const custom = software?.kind === 'sob-medida'

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!software) return
    const restore = setPageMeta({
      title: `${software.name} | Chazan Tech`,
      description: `${software.tagline}. ${software.problem}`,
      url: `https://chazantech.com.br${pathname}`,
    })
    return restore
  }, [slug, software, pathname])

  if (!software) return <Navigate to="/" replace />
  if (custom !== pathname.startsWith('/projetos')) {
    return <Navigate to={`${custom ? '/projetos' : '/software'}/${slug}`} replace />
  }

  const others = SOFTWARE_SLUGS.filter((s) => s !== slug)

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-deep overflow-hidden pt-20">
        <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-electric/6 blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block text-electric text-xs font-semibold tracking-[0.15em] uppercase border border-electric/25 rounded-full px-4 py-1.5 mb-6">
              {custom ? 'Projeto sob medida' : 'Software Chazan Tech'}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              {software.name}
            </h1>
            <p className="text-electric text-xl md:text-2xl font-semibold leading-snug mb-6">
              {software.tagline}
            </p>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-3">{software.problem}</p>
            <p className="text-white/35 text-sm mb-10">Para: {software.audience}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <DemoButton software={software} />
              {software.link && (
                <a
                  href={software.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-medium px-7 py-4 rounded-lg hover:border-electric/50 hover:text-white transition-all duration-200"
                >
                  {software.link.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo institucional (opcional) */}
      {software.video && (
        <section className="py-16 bg-white line-grid">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <video
              src={software.video.src}
              poster={software.video.poster}
              controls
              playsInline
              preload="none"
              className="w-full max-w-[340px] rounded-xl border border-deep/10 bg-deep"
            >
              Seu navegador não suporta vídeo.
            </video>
            <p className="text-deep/40 text-xs mt-3">Veja o {software.name} em funcionamento</p>
          </div>
        </section>
      )}

      {/* Screenshots (opcional) */}
      {software.images.length > 0 && (
        <section className="py-16 bg-white line-grid">
          <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2">
            {software.images.map((src) => (
              <img key={src} src={src} alt={`Tela do ${software.name}`} loading="lazy" className="rounded-xl border border-deep/10 w-full" />
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-24 md:py-28 bg-white line-grid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-electric font-semibold text-sm tracking-widest uppercase">O que faz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-deep mt-3 leading-tight">
              {custom ? 'O que a plataforma faz' : `Do que o ${software.name} cuida por você`}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {software.features.map((f) => (
              <div key={f.title} className="p-7 rounded-xl border border-deep/8 bg-deep/2 hover:border-electric/40 hover:bg-electric/3 transition-all duration-300">
                <h3 className="text-deep font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-deep/55 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-28 bg-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-electric font-semibold text-sm tracking-widest uppercase">Como funciona</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">Em três passos</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {software.steps.map((step, i) => (
              <li key={step} className="p-7 rounded-xl border border-white/8 bg-white/4">
                <span className="text-electric font-bold text-3xl leading-none">{i + 1}</span>
                <p className="text-white/70 text-sm leading-relaxed mt-4">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA + other software */}
      <section className="relative py-24 md:py-28 bg-deep-darker overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {custom ? 'Precisa de um sistema' : `Quer ver o ${software.name}`} <span className="text-electric">{custom ? 'assim?' : 'funcionando?'}</span>
          </h2>
          <p className="text-white/50 text-lg mb-9">{custom ? 'Conte o seu processo e desenhamos a solução. Sem compromisso.' : 'Mostramos ao vivo, com os seus dados ou com dados fictícios. Sem compromisso.'}</p>
          <div className="flex justify-center">
            <DemoButton software={software} />
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-white/35 text-xs uppercase tracking-widest mb-5">Outros softwares</p>
            <div className="flex flex-wrap justify-center gap-3">
              {others.map((s) => (
                <Link
                  key={s}
                  to={`/software/${s}`}
                  className="text-white/60 hover:text-white text-sm border border-white/12 hover:border-electric/40 rounded-full px-5 py-2 transition-colors"
                >
                  {SOFTWARE[s].name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function DemoButton({ software }) {
  return (
    <a
      href={whatsappUrl(software.message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackContact(`software_${software.name}`)}
      className="inline-flex items-center justify-center gap-2 bg-electric text-deep font-semibold px-7 py-4 rounded-lg
                 hover:bg-electric-light hover:shadow-electric-lg transition-all duration-200 group"
    >
      {software.cta}
      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  )
}
