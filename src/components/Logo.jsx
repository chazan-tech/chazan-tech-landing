/**
 * Logo component.
 * variant="dark"  — fundo escuro  → usa logo-dark.png (Chazan branco + CT ciano)
 * variant="light" — fundo claro   → usa logo-light.png (Chazan cinza + CT ciano)
 *
 * NOTA: os PNGs têm fundo branco. Para remoção perfeita do fundo,
 * solicitar ao designer versão com fundo transparente (.png) ou em SVG.
 */
export default function Logo({ variant = 'dark', height = 40 }) {
  const src = variant === 'light' ? '/logo-light.png' : '/logo-dark.png'

  return (
    <img
      src={src}
      alt="Chazan Tech"
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}
