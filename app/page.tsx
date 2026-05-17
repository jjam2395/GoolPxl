import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedVideos } from '@/components/featured-videos'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <FeaturedVideos />
      <AboutSection />
      <Footer />
    </main>
  )
}
