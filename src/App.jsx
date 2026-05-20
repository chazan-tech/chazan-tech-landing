import { lazy, Suspense } from 'react'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Process        from './components/Process'
import Services       from './components/Services'
import SavingsSection from './components/SavingsSection'
import WhyChazan      from './components/WhyChazan'
import CTASection     from './components/CTASection'
import FAQ            from './components/FAQ'
import ContactSection from './components/ContactSection'
import Footer         from './components/Footer'

const WhatsAppWidget  = lazy(() => import('./components/WhatsAppWidget'))
const CookieBanner    = lazy(() => import('./components/CookieBanner'))
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'))

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
        <CTASection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppWidget />
        <CookieBanner />
        <ExitIntentPopup />
      </Suspense>
    </div>
  )
}
