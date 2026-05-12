import { useState, useEffect } from 'react'

const STORAGE_KEY = 'chazan_exit_shown'

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    function handleMouseLeave(e) {
      if (e.clientY <= 0) show()
    }

    // Mobile fallback: show after 40s of inactivity
    const idleTimer = setTimeout(show, 40000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(idleTimer)
    }
  }, [])

  function show() {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(true)
  }

  function close() {
    setVisible(false)
  }

  function goToContact() {
    close()
    setTimeout(() => {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Oferta antes de sair"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-fade-up">

        {/* Top accent bar */}
        <div className="h-1 w-full bg-electric" />

        {/* Content */}
        <div className="bg-deep-darker px-8 py-8">

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/30 hover:text-white/70 transition-colors"
            aria-label="Fechar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-electric/25 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse-slow" aria-hidden="true" />
            <span className="text-electric/75 text-xs font-medium tracking-[0.15em] uppercase">
              Antes de sair
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl font-bold text-white leading-snug mb-3">
            Quanto custa manter<br />
            <span className="text-electric">processos manuais</span> por mais um mês?
          </h2>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed mb-7">
            Em 30 minutos de conversa, identificamos onde está o maior potencial de ganho
            na sua operação — sem compromisso e sem custo.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mb-8 pb-6 border-b border-white/8">
            {[
              { value: 'IA',       label: 'em cada projeto'  },
              { value: 'Grátis',   label: 'análise inicial'   },
              { value: 'Zero',     label: 'obrigação'          },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-electric font-bold text-lg leading-none">{value}</p>
                <p className="text-white/35 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button
              onClick={goToContact}
              className="w-full flex items-center justify-center gap-2 bg-electric text-deep font-bold text-sm
                         py-3.5 rounded-lg hover:bg-electric-light hover:shadow-electric transition-all duration-200 group"
            >
              Quero minha análise gratuita
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button
              onClick={close}
              className="text-white/30 hover:text-white/60 text-xs text-center transition-colors duration-200 py-1"
            >
              Agora não
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
