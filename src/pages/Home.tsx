import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { StepsSection } from "@/components/step-section";
import { TrustSection } from "@/components/trust-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
// import WhoWeAreSection from "@/components/who-we-are";

export default function Page() {
  return (
    <main className="min-h-screen text-foreground">
      <Header />
      <Hero />
      {/* <WhoWeAreSection /> */}
      <StepsSection />
      <TrustSection />
      <ServicesSection />
      <SiteFooter />
    </main>
  );
}
