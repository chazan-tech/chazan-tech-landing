import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero   from './components/Hero'

const Process        = lazy(() => import('./components/Process'))
const Services       = lazy(() => import('./components/Services'))
const SavingsSection = lazy(() => import('./components/SavingsSection'))
const WhyChazan      = lazy(() => import('./components/WhyChazan'))
const CTASection     = lazy(() => import('./components/CTASection'))
const FAQ            = lazy(() => import('./components/FAQ'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer         = lazy(() => import('./components/Footer'))
const WhatsAppWidget = lazy(() => import('./components/WhatsAppWidget'))
const CookieBanner   = lazy(() => import('./components/CookieBanner'))
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'))

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Process />
          <Services />
          <SavingsSection />
          <WhyChazan />
          <CTASection />
          <FAQ />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
        <ExitIntentPopup />
      </Suspense>
    </div>
  )
}
