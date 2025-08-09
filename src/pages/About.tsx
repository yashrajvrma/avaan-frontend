import Header from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import About from "@/components/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground">
      <Header />
      <About />
      <SiteFooter />
    </main>
  );
}
