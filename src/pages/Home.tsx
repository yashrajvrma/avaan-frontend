import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { StepsSection } from "@/components/step-section";
import { TrustSection } from "@/components/trust-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <StepsSection />
      <TrustSection />
      <ServicesSection />
      <SiteFooter />
    </main>
  );
}
