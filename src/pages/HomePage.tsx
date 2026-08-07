import { TopBar } from '../components/layout/TopBar';
import { BottomFeatures } from '../components/home/BottomFeatures';
import { FeaturesStrip } from '../components/home/FeaturesStrip';
import { HeroSection } from '../components/home/HeroSection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { WhySection } from '../components/home/WhySection';
import './HomePage.css';

export function HomePage() {
  return (
    <div className="page">
      <TopBar />
      <main>
        <HeroSection />
        <FeaturesStrip />
        <ProductsSection />
        <WhySection />
        <NewsletterSection />
      </main>
      <footer>
        <BottomFeatures />
      </footer>
    </div>
  );
}
