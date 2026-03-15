import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { TopModelsChart } from '@/components/top-models-chart'
import { LeaderboardTable } from '@/components/leaderboard-table'
import { ModelComparison } from '@/components/model-comparison'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TopModelsChart />
      <LeaderboardTable />
      <ModelComparison />
      <Footer />
    </main>
  )
}
