import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const [fields, setFields]   = useState(INITIAL)
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const [errors, setErrors]   = useState({})

  function validate() {
    const e = {}
    if (!fields.name.trim())                       e.name    = 'Informe seu nome.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'E-mail inválido.'
    if (!fields.message.trim())                    e.message = 'Escreva sua mensagem.'
    return e
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStatus('sending')

    try {
      const res = await fetch('https://formsubmit.co/ajax/techchazan@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    fields.name,
          email:   fields.email,
          subject: fields.subject || 'Contato via site',
          message: fields.message,
          _subject: `[Chazan Tech] ${fields.subject || 'Nova mensagem de contato'}`,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFields(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function change(field) {
    return (ev) => {
      setFields(f => ({ ...f, [field]: ev.target.value }))
      if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
    }
  }

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-deep-darker overflow-hidden">

      {/* Background accents */}
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full
                   bg-electric/6 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2.5 border border-electric/25 rounded-full px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse-slow" aria-hidden="true" />
              <span className="text-electric/75 text-xs font-medium tracking-[0.15em] uppercase">
                Fale com a gente
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Tem um projeto em mente?<br className="hidden md:block" />{' '}
              <span className="text-electric">Conte para nós.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              Preencha o formulário e nossa equipe responde em até 24h. Sem compromisso.
            </p>
          </div>

          {/* Card */}
          <div className="grid md:grid-cols-5 gap-8 items-start">

            {/* Info sidebar */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'E-mail',
                  value: 'contato@chazantech.com.br',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: 'Tempo de resposta',
                  value: 'Até 24 horas',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.003 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
                    </svg>
                  ),
                  label: 'Conversa inicial',
                  value: 'Gratuita e sem obrigação',
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-5 rounded-xl border border-white/8 bg-white/3 hover:border-electric/25 transition-colors duration-200">
                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-electric/10 flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-white/80 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-3 rounded-2xl border border-white/8 bg-white/3 p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                  <div className="w-14 h-14 rounded-full bg-electric/15 flex items-center justify-center mb-2">
                    <svg className="w-7 h-7 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Mensagem enviada!</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Recebemos seu contato e retornaremos em até 24 horas.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-electric text-sm hover:text-electric-light transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nome *" error={errors.name}>
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={fields.name}
                        onChange={change('name')}
                        className={inputClass(errors.name)}
                      />
                    </Field>
                    <Field label="E-mail *" error={errors.email}>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={fields.email}
                        onChange={change('email')}
                        className={inputClass(errors.email)}
                      />
                    </Field>
                  </div>

                  <Field label="Assunto">
                    <input
                      type="text"
                      placeholder="Ex: Automação de processos"
                      value={fields.subject}
                      onChange={change('subject')}
                      className={inputClass()}
                    />
                  </Field>

                  <Field label="Mensagem *" error={errors.message}>
                    <textarea
                      rows={5}
                      placeholder="Descreva brevemente seu projeto ou dúvida..."
                      value={fields.message}
                      onChange={change('message')}
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                  </Field>

                  {status === 'error' && (
                    <p className="text-red-400/80 text-sm">
                      Ocorreu um erro ao enviar. Tente novamente ou envie para{' '}
                      <a href="mailto:techchazan@gmail.com" className="underline hover:text-red-300 transition-colors">
                        techchazan@gmail.com
                      </a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="self-start inline-flex items-center gap-3 bg-electric text-deep font-bold text-sm px-8 py-3.5 rounded-lg
                               hover:bg-electric-light hover:shadow-electric transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed group"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" strokeOpacity=".25" />
                          <path d="M12 2a10 10 0 0110 10" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <svg
                          className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function inputClass(error) {
  return `w-full bg-white/5 border ${
    error ? 'border-red-400/60' : 'border-white/10'
  } rounded-lg px-4 py-3 text-white text-sm placeholder-white/25
  focus:outline-none focus:border-electric/60 focus:bg-white/8 transition-colors duration-200`
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/50 text-xs font-medium uppercase tracking-widest">{label}</label>
      {children}
      {error && <p className="text-red-400/70 text-xs">{error}</p>}
    </div>
  )
}
