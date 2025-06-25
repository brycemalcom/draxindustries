import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import WhyGrapheneSection from '@/components/sections/WhyGrapheneSection';
import DraxAdvantageSection from '@/components/sections/DraxAdvantageSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import BusinessModelSection from '@/components/sections/BusinessModelSection';
import SustainabilitySection from '@/components/sections/SustainabilitySection';
import InvestmentSection from '@/components/sections/InvestmentSection';
import AboutSection from '@/components/sections/AboutSection';
import ResourcesCTA from '@/components/sections/ResourcesCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyGrapheneSection />
      <DraxAdvantageSection />
      <ComparisonSection />
      <BusinessModelSection />
      <SustainabilitySection />
      <InvestmentSection />
      <AboutSection />
      <ResourcesCTA />
    </>
  );
}