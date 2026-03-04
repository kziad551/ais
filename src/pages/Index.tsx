import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesOverview from "@/components/home/ServicesOverview";
import ApproachSection from "@/components/home/ApproachSection";
import DeliveryProcess from "@/components/home/DeliveryProcess";
import UseCases from "@/components/home/UseCases";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesOverview />
      <ApproachSection />
      <DeliveryProcess />
      <UseCases />
      <FAQSection />
      <FinalCTA />
    </>
  );
};

export default Index;
