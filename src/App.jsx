import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Process        from './components/Process'
import Services       from './components/Services'
import SavingsSection from './components/SavingsSection'
import WhyChazan      from './components/WhyChazan'
import FAQ            from './components/FAQ'
import ContactSection from './components/ContactSection'
import WhatsAppWidget from './components/WhatsAppWidget'
import CookieBanner      from './components/CookieBanner'
import ExitIntentPopup  from './components/ExitIntentPopup'
import Footer         from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Services />
        <SavingsSection />
        <WhyChazan />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <CookieBanner />
      <ExitIntentPopup />
    </div>
  )
}
