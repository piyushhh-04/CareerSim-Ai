import MainLayout from "../../layouts/MainLayout";
import HeroSection from "../../components/home/HeroSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import HowItWorks from "../../components/home/HowItWorks";
import CTASection from "../../components/home/CTASection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <CTASection />
    </MainLayout>
  );
}
