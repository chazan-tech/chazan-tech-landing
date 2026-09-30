import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SOFTWARE } from '../data/software'

const NAV_LINKS = [
  { href: '/#projetos',      label: 'Projetos'       },
  { href: '/#servicos',      label: 'Serviços'       },
  { href: '/#como-funciona', label: 'Como funciona'  },
  { href: '/faq',           label: 'FAQ'            },
  { href: '/#diferenciais',  label: 'Por que nós'    },
  { href: '/contato',        label: 'Contato'        },
]

const PROJECTS = ['pedro', 'condfin', 'gestao-financeira', 'banco-de-talentos', 'sempre-crianca'].map((slug) => ({
  to: `${SOFTWARE[slug].kind === 'sob-medida' ? '/projetos' : '/software'}/${slug}`,
  label: SOFTWARE[slug].name,
}))

export default function Footer() {
  return (
    <footer className="bg-deep-darker border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_auto] items-start gap-8 md:gap-10">

          {/* Brand */}
          <div>
            <Link to="/"><Logo /></Link>
            <p className="text-white/30 text-sm mt-3 max-w-xs leading-relaxed">
              Sistemas que otimizam operações e devolvem tempo para quem opera de verdade.
            </p>
          </div>

          {/* Projects */}
          <nav className="flex flex-col gap-3" aria-label="Projetos">
            <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Projetos</span>
            {PROJECTS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Nav */}
          <nav className="flex flex-col gap-3" aria-label="Navegação rodapé">
            <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Site</span>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className="text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                {label}
              </Link>
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
