import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OutcomeStrip from './components/OutcomeStrip'
import PartnersMarquee from './components/PartnersMarquee'
import ValueSection from './components/ValueSection'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050507] text-white">
      <Hero />
      <PartnersMarquee />
      <CTASection />
      <ValueSection />
      <OutcomeStrip />
      <Footer />
    </div>
  )
}
