import { useState } from 'react'
import { useScrollAnimation, staggerDelay } from '../hooks/useScrollAnimation'

const FAQS = [
  {
    q: 'Quanto tempo leva para ter o primeiro resultado?',
    a: 'O prazo depende da complexidade do projeto e é definido no diagnóstico inicial. Trabalhamos em ciclos curtos — cada fase já vai para produção, então você vê retorno antes de o projeto terminar.',
  },
  {
    q: 'Preciso ter uma equipe técnica interna?',
    a: 'Não. Atuamos como o time técnico completo da operação. Você não precisa de desenvolvedor, arquiteto ou analista interno — cuidamos de tudo desde o diagnóstico até a entrega.',
  },
  {
    q: 'Vocês integram com sistemas que já uso?',
    a: 'Sim. Integramos com ERPs, planilhas, sistemas legados e APIs de terceiros. A migração é sempre incremental — nenhuma operação é interrompida durante o processo.',
  },
  {
    q: 'O que acontece se o escopo mudar durante o projeto?',
    a: 'Mudança de escopo é normal e prevista. Trabalhamos com ciclos curtos exatamente para isso: cada fase é validada antes da próxima começar, então ajustes têm custo controlado e não comprometem o que já foi entregue.',
  },
  {
    q: 'Como funciona o suporte após a entrega?',
    a: 'Cada sistema entregue vem com documentação técnica e treinamento para sua equipe. Você não fica dependente de nós para operar — mas oferecemos suporte contínuo para evolução e manutenção conforme o projeto.',
  },
  {
    q: 'É possível começar com um projeto menor antes de um contrato maior?',
    a: 'Sim, e costumamos recomendar isso. Uma prova de conceito ou automação pontual permite que você veja nossa forma de trabalhar com risco mínimo — e já entrega valor real antes de qualquer compromisso maior.',
  },
]

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [open, setOpen] = useState(null)

  function toggle(i) {
    setOpen(prev => (prev === i ? null : i))
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-deep">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2.5 border border-electric/25 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse-slow" aria-hidden="true" />
            <span className="text-electric/75 text-xs font-medium tracking-[0.15em] uppercase">
              Dúvidas frequentes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Perguntas que a maioria<br className="hidden md:block" /> faz antes de contratar
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Bottom nudge */}
        <p className="text-center text-white/35 text-sm mt-10">
          Não achou o que precisava?{' '}
          <a href="#contato" className="text-electric hover:text-electric-light transition-colors underline underline-offset-2">
            Fale com a gente
          </a>
          .
        </p>
      </div>
    </section>
  )
}

function AccordionItem({ faq, index, isOpen, onToggle }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      style={staggerDelay(index, 60)}
      className={`rounded-xl border transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${
        isOpen
          ? 'border-electric/30 bg-electric/5'
          : 'border-white/8 bg-white/3 hover:border-white/15'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className={`font-medium text-sm md:text-base transition-colors duration-200 ${
          isOpen ? 'text-white' : 'text-white/75'
        }`}>
          {faq.q}
        </span>

        {/* +/– icon */}
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'border-electric bg-electric text-deep rotate-45'
              : 'border-white/20 text-white/40'
          }`}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <rect x="4" y="0" width="2" height="10" rx="1" />
            <rect x="0" y="4" width="10" height="2" rx="1" />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 pb-5 text-white/55 text-sm leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  )
}
