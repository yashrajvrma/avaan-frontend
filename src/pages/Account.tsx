import Header from "@/components/header";
import Profile from "@/components/profile";
import { SiteFooter } from "@/components/site-footer";

export default function AccountPage() {
  return (
    <main className="text-foreground">
      <Header />
      <Profile />
      <SiteFooter />
    </main>
  );
}
