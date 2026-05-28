import ChoosePathSection from '../components/ChoosePathSection'
import CTASection from '../components/CTASection'
import Hero from '../components/Hero'
import InstitutionPlatformSection from '../components/InstitutionPlatformSection'
import LearningExperienceGrid from '../components/LearningExperienceGrid'
import OutcomeStrip from '../components/OutcomeStrip'
import PartnersMarquee from '../components/PartnersMarquee'
import ProgramsSection from '../components/ProgramsSection'
import ValueSection from '../components/ValueSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <ChoosePathSection />
      <LearningExperienceGrid />
      <InstitutionPlatformSection />
      <ProgramsSection />
      <CTASection />
      <ValueSection />
      <OutcomeStrip />
    </>
  )
}
