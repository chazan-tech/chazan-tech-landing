import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

export default function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const previous = document.title
    document.title = 'Contato | Chazan Tech'
    return () => { document.title = previous }
  }, [])

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main className="pt-12 bg-deep-darker">
        <ContactSection asPage />
      </main>
      <Footer />
    </div>
  )
}
