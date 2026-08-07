import { HeroSection } from '../components/home/HeroSection';
import { AdvantagesSection } from '../components/home/AdvantagesSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { WhySection } from '../components/home/WhySection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import '../components/illustrations/Decor.css';
import './HomePage.css';

export function HomePage() {
  return (
    <div className="home">
      <HeroSection />
      <AdvantagesSection />
      <ProductsSection />
      <WhySection />
      <NewsletterSection />
    </div>
  );
}
