import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'

const ChoosePathSection = lazy(() => import('../components/ChoosePathSection'))
const CTASection = lazy(() => import('../components/CTASection'))
const InstitutionPlatformSection = lazy(() => import('../components/InstitutionPlatformSection'))
const LearningExperienceGrid = lazy(() => import('../components/LearningExperienceGrid'))
const OutcomeStrip = lazy(() => import('../components/OutcomeStrip'))
const PartnersMarquee = lazy(() => import('../components/PartnersMarquee'))
const ProgramsSection = lazy(() => import('../components/ProgramsSection'))
const ValueSection = lazy(() => import('../components/ValueSection'))

function HomeSectionFallback() {
  return <div className="h-20" />
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<HomeSectionFallback />}>
        <PartnersMarquee />
        <ChoosePathSection />
        <LearningExperienceGrid />
        <InstitutionPlatformSection />
        <ProgramsSection />
        <CTASection />
        <ValueSection />
        <OutcomeStrip />
      </Suspense>
    </>
  )
}
