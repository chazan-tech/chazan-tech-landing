import { lazy, Suspense, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { track } from './lib/tracking'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Process        from './components/Process'
import Services       from './components/Services'
import Projects       from './components/Projects'
import WhyChazan      from './components/WhyChazan'
import FAQ            from './components/FAQ'
import Footer         from './components/Footer'

const QuemSomos       = lazy(() => import('./pages/QuemSomos'))
const Software        = lazy(() => import('./pages/Software'))
const Contato         = lazy(() => import('./pages/Contato'))
const WhatsAppWidget  = lazy(() => import('./components/WhatsAppWidget'))
const CookieBanner    = lazy(() => import('./components/CookieBanner'))
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'))

function Home() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <FAQ />
        <WhyChazan />
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

// O pixel já registra a primeira página; aqui contamos as trocas de rota dentro do site.
function RouteTracker() {
  const { pathname } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) { first.current = false; return }
    track('PageView')
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/quem-somos"  element={<QuemSomos />} />
        <Route path="/contato"     element={<Contato />} />
        <Route path="/software/:slug" element={<Software />} />
        <Route path="/projetos/:slug"  element={<Software />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
