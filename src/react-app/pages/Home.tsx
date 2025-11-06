import { useEffect } from 'react';
import HeroSection from '@/react-app/components/HeroSection';
import HowItWorksSection from '@/react-app/components/HowItWorksSection';
import WhyChooseSection from '@/react-app/components/WhyChooseSection';
import VehicleTypesSection from '@/react-app/components/VehicleTypesSection';
import SimulatorSection from '@/react-app/components/SimulatorSection';
import PartnersSection from '@/react-app/components/PartnersSection';
import FAQSection from '@/react-app/components/FAQSection';
import FinalCTASection from '@/react-app/components/FinalCTASection';
import Footer from '@/react-app/components/Footer';
import ScrollToTopButton from '@/react-app/components/ScrollToTopButton';

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Update document font family
    document.documentElement.style.fontFamily = 'Poppins, system-ui, sans-serif';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <VehicleTypesSection />
      <SimulatorSection />
      <PartnersSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
