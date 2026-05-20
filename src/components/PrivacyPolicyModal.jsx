export default function PrivacyPolicyModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Política de Privacidade"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-deep-darker border border-white/10 shadow-2xl flex flex-col max-h-[85vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8 flex-shrink-0">
          <h2 className="text-white font-bold text-lg">Política de Privacidade</h2>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white/70 transition-colors"
            aria-label="Fechar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-5 flex flex-col gap-5 text-white/55 text-sm leading-relaxed">

          <p className="text-white/35 text-xs">Última atualização: abril de 2026</p>

          <Section title="1. Quem somos">
            A <strong className="text-white/80">Chazan Tech</strong> é responsável pelo tratamento dos dados pessoais
            coletados neste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </Section>

          <Section title="2. Quais dados coletamos">
            Coletamos apenas os dados que você nos fornece voluntariamente pelo formulário de contato:
            <ul className="mt-2 flex flex-col gap-1 pl-4 list-disc marker:text-electric/50">
              <li>Nome</li>
              <li>Endereço de e-mail</li>
              <li>Assunto e mensagem</li>
            </ul>
            Não coletamos dados de navegação, cookies de rastreamento ou informações de terceiros.
          </Section>

          <Section title="3. Para que usamos seus dados">
            Os dados coletados são usados exclusivamente para:
            <ul className="mt-2 flex flex-col gap-1 pl-4 list-disc marker:text-electric/50">
              <li>Responder à sua solicitação de contato ou orçamento</li>
              <li>Agendar a análise gratuita solicitada</li>
            </ul>
            Não compartilhamos, vendemos ou cedemos seus dados a terceiros.
          </Section>

          <Section title="4. Base legal">
            O tratamento é fundamentado no <strong className="text-white/80">consentimento</strong> (Art. 7º, I da LGPD),
            manifestado ao preencher e enviar o formulário de contato.
          </Section>

          <Section title="5. Por quanto tempo armazenamos">
            Seus dados são mantidos pelo tempo necessário para atender sua solicitação ou enquanto houver
            relação comercial ativa. Após esse período, são excluídos de forma segura.
          </Section>

          <Section title="6. Seus direitos">
            Nos termos da LGPD, você tem direito a:
            <ul className="mt-2 flex flex-col gap-1 pl-4 list-disc marker:text-electric/50">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar, corrigir ou excluir seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
          </Section>

          <Section title="7. Contato">
            Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail{' '}
            <a href="mailto:contato@chazantech.com.br" className="text-electric hover:text-electric-light transition-colors underline underline-offset-2">
              contato@chazantech.com.br
            </a>.
          </Section>

        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-white/8">
          <button
            onClick={onClose}
            className="w-full bg-electric text-deep font-semibold text-sm py-2.5 rounded-lg
                       hover:bg-electric-light transition-colors duration-200"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-white/80 font-semibold mb-1.5">{title}</h3>
      <div>{children}</div>
    </div>
  )
}
