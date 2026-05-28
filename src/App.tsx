import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import PageNav from './components/PageNav'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import InstitutionsPage from './pages/InstitutionsPage'
import PlatformPage from './pages/PlatformPage'
import ProgramsPage from './pages/ProgramsPage'
import StudentsPage from './pages/StudentsPage'

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {!isHome && <PageNav />}
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
      <Footer />
    </div>
  )
}
