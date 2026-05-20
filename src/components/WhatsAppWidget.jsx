import { useState, useEffect, useRef } from "react";

// Substitua pelo número real com DDI (ex: 5511999999999)
const WHATSAPP_NUMBER = "5521994097502";

const FAQS = [
  {
    q: "Quanto tempo leva para desenvolver um sistema?",
    a: "O prazo varia conforme o projeto e é definido no diagnóstico inicial. Trabalhamos em ciclos curtos para você ver resultado em cada etapa. 🚀",
  },
  {
    q: "Qual é o investimento?",
    a: "Cada projeto é orçado conforme o escopo. Fazemos uma análise gratuita antes de qualquer proposta — sem compromisso! 😊",
  },
  {
    q: "Vocês integram com sistemas que já uso?",
    a: "Sim! Integramos com ERPs, planilhas, APIs e sistemas legados. A migração é incremental e não interrompe sua operação. ✅",
  },
  {
    q: "Como funciona o suporte após a entrega?",
    a: "Cada sistema vem com documentação técnica e treinamento para sua equipe. Suporte contínuo disponível conforme o projeto. 🛠️",
  },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [notified, setNotified] = useState(false);
  const chatRef = useRef(null);

  const time = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Scroll to bottom whenever a FAQ is selected
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [selected, open]);

  // Show notification badge after 4s if not opened yet
  useEffect(() => {
    if (notified) return;
    const t = setTimeout(() => setNotified(true), 4000);
    return () => clearTimeout(t);
  }, [notified]);

  function toggle() {
    setOpen((o) => {
      if (!o) setSelected(null);
      return !o;
    });
    setNotified(false);
  }

  function openWhatsApp() {
    const text = selected
      ? selected.q
      : "Olá! Gostaria de saber mais sobre os serviços da Chazan Tech.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {/* Widget panel */}
      {open && (
        <div
          className="w-[calc(100vw-3rem)] sm:w-80 rounded-2xl overflow-hidden shadow-2xl animate-fade-up"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          {/* ── Header ─────────────────────────────────────────── */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: "#075E54" }}
          >
            <div
              className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "#128C7E" }}
            >
              CT
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">
                Chazan Tech
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <p className="text-white/70 text-xs">online agora</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1 -mr-1"
              aria-label="Fechar"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Chat area ──────────────────────────────────────── */}
          <div
            ref={chatRef}
            className="px-3 py-4 flex flex-col gap-2 overflow-y-auto"
            style={{ background: "#ECE5DD", maxHeight: "min(380px, 55vh)" }}
          >
            {/* Date pill */}
            <div className="flex justify-center mb-1">
              <span
                className="text-[11px] px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  color: "#667781",
                }}
              >
                HOJE
              </span>
            </div>

            {/* Greeting messages */}
            <ReceivedBubble time={time}>
              Olá! 👋 Bem-vindo(a) à <strong>Chazan Tech</strong>.<br />
              Como posso te ajudar?
            </ReceivedBubble>

            {!selected ? (
              <>
                <ReceivedBubble time={time}>
                  Selecione uma das dúvidas abaixo ou clique no botão para falar
                  diretamente com a gente:
                </ReceivedBubble>

                <div className="flex flex-col gap-1.5 mt-1">
                  {FAQS.map((faq) => (
                    <button
                      key={faq.q}
                      onClick={() => setSelected(faq)}
                      className="text-left text-sm px-3 py-2 rounded-lg border-2 font-medium transition-all duration-150 hover:brightness-95 active:scale-[0.98]"
                      style={{
                        background: "white",
                        borderColor: "#25D366",
                        color: "#128C7E",
                      }}
                    >
                      {faq.q}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <SentBubble time={time}>{selected.q}</SentBubble>
                <ReceivedBubble time={time}>{selected.a}</ReceivedBubble>
                <ReceivedBubble time={time}>
                  Ficou com mais alguma dúvida? Pode falar com a gente no
                  WhatsApp! 😊
                </ReceivedBubble>

                <button
                  onClick={() => setSelected(null)}
                  className="text-xs mt-1 self-center underline underline-offset-2 transition-opacity hover:opacity-70"
                  style={{ color: "#128C7E" }}
                >
                  ← Ver outras dúvidas
                </button>
              </>
            )}
          </div>

          {/* ── Footer / CTA ───────────────────────────────────── */}
          <div
            className="px-3 py-3 flex items-center gap-2"
            style={{ background: "#f0f2f5", borderTop: "1px solid #e9edef" }}
          >
            <button
              onClick={openWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 active:scale-95"
              style={{ background: "#25D366" }}
            >
              <WhatsAppIcon size={17} />
              Continuar no WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* ── Floating button ────────────────────────────────────── */}
      <div className="relative">
        {/* Notification badge */}
        {!open && notified && (
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[10px] font-bold
                       flex items-center justify-center animate-bounce z-10"
            style={{ background: "#ef4444" }}
          >
            1
          </span>
        )}

        {/* Pulse ring when notification is visible */}
        {!open && notified && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ background: "#25D366" }}
          />
        )}

        <button
          onClick={toggle}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl
                     hover:scale-110 active:scale-95 transition-transform duration-200"
          style={{ background: "#25D366" }}
          aria-label={open ? "Fechar chat" : "Falar pelo WhatsApp"}
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <WhatsAppIcon size={28} />
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────────────── */

function ReceivedBubble({ children, time }) {
  return (
    <div className="flex max-w-[88%]">
      <div
        className="rounded-lg rounded-tl-none px-3 py-2 text-sm shadow-sm"
        style={{ background: "white", color: "#111b21" }}
      >
        <div className="leading-snug">{children}</div>
        <span
          className="block text-right text-[10px] mt-1"
          style={{ color: "#8696a0" }}
        >
          {time}
        </span>
      </div>
    </div>
  );
}

function SentBubble({ children, time }) {
  return (
    <div className="flex justify-end">
      <div
        className="rounded-lg rounded-tr-none px-3 py-2 text-sm shadow-sm max-w-[88%]"
        style={{ background: "#DCF8C6", color: "#111b21" }}
      >
        <div className="leading-snug">{children}</div>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[10px]" style={{ color: "#8696a0" }}>
            {time}
          </span>
          {/* Double blue check (read receipt) */}
          <svg width="16" height="11" viewBox="0 0 16 11" fill="#53bdeb">
            <path d="M15.854.146a.5.5 0 01.066.638l-.066.075L6.5 10.207 1.146 4.854a.5.5 0 01.638-.765l.069.058L6.5 9.293 15.146.146a.5.5 0 01.708 0z" />
            <path d="M11.854.146a.5.5 0 01.066.638l-.066.075L2.5 10.207l-.354-.354 9.5-9.707a.5.5 0 01.708 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
