import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import PageNav from './components/PageNav'
import HomePage from './pages/HomePage'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const InstitutionsPage = lazy(() => import('./pages/InstitutionsPage'))
const PlatformPage = lazy(() => import('./pages/PlatformPage'))
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'))
const StudentsPage = lazy(() => import('./pages/StudentsPage'))

function RouteFallback() {
  return <div className="min-h-[60vh]" />
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {!isHome && <PageNav />}
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/institutions" element={<InstitutionsPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}
