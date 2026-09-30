import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { whatsappUrl, trackContact } from '../lib/contact'

const NAV_LINKS = [
  { href: '/#projetos',      label: 'Projetos'       },
  { href: '/#servicos',      label: 'Serviços'       },
  { href: '/#como-funciona', label: 'Como funciona'  },
  { href: '/faq',           label: 'FAQ'            },
  { href: '/#diferenciais',  label: 'Por que nós'    },
  { href: '/quem-somos',     label: 'Quem somos'     },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { pathname, hash } = useLocation()
  const closeRef = useRef(null)

  // Fecha o menu ao trocar de página/âncora
  useEffect(() => { setMenuOpen(false) }, [pathname, hash])

  // Com o menu aberto: trava a rolagem, fecha com Esc e ao voltar para o desktop
  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // foca o botão de fechar depois que o painel termina de deslizar
    const focusTimer = setTimeout(() => closeRef.current?.focus(), 320)
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => { if (e.matches) setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      clearTimeout(focusTimer)
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep/95 backdrop-blur-md border-b border-electric/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" aria-label="Chazan Tech — início">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contato"
          className="hidden md:inline-flex items-center gap-2 bg-electric text-deep font-semibold text-sm px-5 py-2.5 rounded-lg
                     hover:bg-electric-light hover:shadow-electric transition-all duration-200 group"
        >
          Agende uma análise
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors p-1.5 -mr-1.5"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>

    {/* Mobile side drawer (fora do <header> para não herdar o backdrop-filter) */}
    <div
      className={`md:hidden fixed inset-0 z-[110] bg-black/60 transition-opacity duration-300 ${
        menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setMenuOpen(false)}
      aria-hidden="true"
    />
    <aside
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className={`md:hidden fixed top-0 right-0 z-[120] h-full w-[84%] max-w-sm bg-deep-darker border-l border-electric/15 shadow-2xl
                  flex flex-col transition-[transform,visibility] duration-300 ease-out ${
        menuOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <Link to="/" aria-label="Chazan Tech — início">
          <Logo height={32} />
        </Link>
        <button
          ref={closeRef}
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
          className="text-white/70 hover:text-white transition-colors p-1.5 -mr-1.5"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6" aria-label="Navegação mobile">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            to={href}
            className="block py-4 text-white/80 hover:text-white text-lg font-medium border-b border-white/8 transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="px-6 pt-4 pb-8 flex flex-col gap-3">
        <Link
          to="/contato"
          className="block text-center bg-electric text-deep font-semibold px-5 py-3.5 rounded-lg hover:bg-electric-light transition-colors"
        >
          Agende uma análise
        </Link>
        <a
          href={whatsappUrl('Olá! Vim pelo site da Chazan Tech e gostaria de conversar sobre um projeto.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact('menu_whatsapp')}
          className="block text-center border border-white/20 text-white/80 hover:text-white hover:border-electric/50 font-medium px-5 py-3.5 rounded-lg transition-colors"
        >
          Falar no WhatsApp
        </a>
      </div>
    </aside>
    </>
  )
}
