import { useState, useEffect } from 'react'
import PrivacyPolicyModal from './PrivacyPolicyModal'

const STORAGE_KEY = 'chazan_cookie_consent'

export default function CookieBanner() {
  const [visible,      setVisible]      = useState(false)
  const [policyOpen,   setPolicyOpen]   = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <div
        className="fixed bottom-0 inset-x-0 z-[90] border-t border-white/10"
        style={{ background: 'rgba(20, 35, 35, 0.97)', backdropFilter: 'blur(12px)' }}
        role="dialog"
        aria-label="Aviso de cookies e privacidade"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">

          {/* Text */}
          <div className="flex items-start gap-3 min-w-0">
            <svg
              className="w-5 h-5 text-electric flex-shrink-0 mt-0.5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <p className="text-white/60 text-sm leading-relaxed">
              Usamos cookies para melhorar sua experiência.
              Ao continuar navegando, você concorda com nossa{' '}
              <button
                onClick={() => setPolicyOpen(true)}
                className="text-electric hover:text-electric-light underline underline-offset-2 transition-colors"
              >
                Política de Privacidade
              </button>
              {' '}em conformidade com a{' '}
              <span className="text-white/80">LGPD</span>.
            </p>
          </div>

          {/* Accept */}
          <button
            onClick={accept}
            className="flex-shrink-0 bg-electric text-deep font-semibold text-sm px-5 py-2 rounded-lg
                       hover:bg-electric-light transition-colors duration-200"
          >
            Aceitar
          </button>
        </div>
      </div>

      {policyOpen && <PrivacyPolicyModal onClose={() => setPolicyOpen(false)} />}
    </>
  )
}
