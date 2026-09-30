import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ, { FAQS } from '../components/FAQ'

export default function Faq() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Perguntas frequentes | Chazan Tech'

    // Dados estruturados FAQPage para os resultados de busca
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    })
    document.head.appendChild(script)

    return () => {
      document.title = previousTitle
      script.remove()
    }
  }, [])

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main className="bg-deep">
        <FAQ asPage />
      </main>
      <Footer />
    </div>
  )
}
