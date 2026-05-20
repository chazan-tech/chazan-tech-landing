import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import QuemSomos      from './pages/QuemSomos'

const WhatsAppWidget  = lazy(() => import('./components/WhatsAppWidget'))
const CookieBanner    = lazy(() => import('./components/CookieBanner'))
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'))

function Home() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/quem-somos"  element={<QuemSomos />} />
      </Routes>
    </BrowserRouter>
  )
}
