import { Link } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#servicos',      label: 'Serviços'       },
  { href: '/#diferenciais',  label: 'Por que nós'    },
  { href: '/#faq',           label: 'FAQ'            },
  { href: '/#contato',       label: 'Contato'        },
]

export default function Footer() {
  return (
    <footer className="bg-deep-darker border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <Link to="/"><Logo /></Link>
            <p className="text-white/30 text-sm mt-3 max-w-xs leading-relaxed">
              Sistemas que otimizam operações e devolvem tempo para quem opera de verdade.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Navegação rodapé">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <Link
              to="/quem-somos"
              className="text-white/40 hover:text-white text-sm transition-colors duration-200"
            >
              Quem somos
            </Link>
          </nav>

          {/* Contact */}
          <a
            href="mailto:contato@chazantech.com.br"
            className="text-white/40 hover:text-electric text-sm transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            contato@chazantech.com.br
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Chazan Tech. Todos os direitos reservados.
          </p>
          <p className="text-white/15 text-xs">
            Desenvolvido pela Chazan Tech
          </p>
        </div>
      </div>
    </footer>
  )
}
