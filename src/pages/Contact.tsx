import Header from "@/components/header";
import Contact from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-foreground">
      <Header />
      <Contact />
      <SiteFooter />
    </main>
  );
}
