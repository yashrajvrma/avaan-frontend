import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import EstimateCard from "@/components/estimate-card";

export default function Schedule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-50">
      <Header />
      <div className="container mx-auto px-4 sm:px-0 py-8 sm:py-12">
        <HeroSection />
      </div>
      <EstimateCard />
    </div>
  );
}
