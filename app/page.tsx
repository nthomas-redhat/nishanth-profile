import { IntroSection } from "@/components/intro-section"
import { ImpactSection } from "@/components/impact-section"
import { LeadershipSection } from "@/components/leadership-section"
import { TechnicalSection } from "@/components/technical-section"
import { OpenSourceSection } from "@/components/opensource-section"
import { JourneySection } from "@/components/journey-section"

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      <IntroSection />
      <ImpactSection />
      <LeadershipSection />
      <TechnicalSection />
      <OpenSourceSection />
      <JourneySection />
    </main>
  )
}
