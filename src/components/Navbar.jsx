import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#servicos',      label: 'Serviços'       },
  { href: '/#diferenciais',  label: 'Por que nós'    },
  { href: '/#faq',           label: 'FAQ'            },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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
            <a
              key={href}
              href={href}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <Link
            to="/quem-somos"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Quem somos
          </Link>
        </nav>

        <a
          href="/#contato"
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
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors p-1.5 -mr-1.5"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 border-t border-electric/10' : 'max-h-0'
        } bg-deep/98 backdrop-blur-md`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/60 hover:text-white text-sm font-medium border-b border-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
          <Link
            to="/quem-somos"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-white/60 hover:text-white text-sm font-medium border-b border-white/5 transition-colors"
          >
            Quem somos
          </Link>
          <a
            href="/#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block text-center bg-electric text-deep font-semibold text-sm px-5 py-3 rounded-lg hover:bg-electric-light transition-colors"
          >
            Agende uma análise
          </a>
        </div>
      </div>
    </header>
  )
}
