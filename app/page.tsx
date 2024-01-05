import Carousel from '@/components/carousel'
import HeroSection from './hero-section/page'
import Navbar from './navbar/page'
// import CategorySection from './category-section/page'
import JoinUs from './joinus-section/page'
import PhotographerCard from './photographer-hero-card-section/page'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Carousel />
      {/* <CategorySection /> */}
      <PhotographerCard />
      <JoinUs />
    </div>
  )
}
