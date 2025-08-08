import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-yellow-600 text-yellow-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-extrabold">
              <span className="text-white">ava</span>
              <span className="text-rose-300">a</span>
              <span className="text-white">n</span>
            </div>
            <ul className="text-sm space-y-1 text-purple-100/80">
              <li>Kothaguda, Hitech City, Hyderabad, 500084</li>
              <li>customerservice@avaanexcess.com</li>
              <li>+91 80694 05400</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="text-sm space-y-2 text-purple-100/80">
              <li>
                <a href="#">Excess Baggage</a>
              </li>
              <li>
                <a href="#">Package Delivery</a>
              </li>
              <li>
                <a href="#">Airport Transfer</a>
              </li>
              <li>
                <a href="#">Storage</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="text-sm space-y-2 text-purple-100/80">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Tracking</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Subscribe</h4>
            <p className="text-sm text-purple-100/80">
              Get special offers, giveaways, and once‑in‑a‑lifetime deals.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter email address"
                className="bg-white text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wide text-purple-100/70">
                Download our app
              </p>
              <div className="mt-2 flex gap-2">
                <Button
                  variant="secondary"
                  className="bg-black text-white hover:bg-black/90 text-xs"
                >
                  App Store
                </Button>
                <Button
                  variant="secondary"
                  className="bg-black text-white hover:bg-black/90 text-xs"
                >
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-xs text-purple-100/70 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>©2025 Avaan Excess. All rights reserved.</span>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Booking Policy
          </a>
          <a href="#" className="hover:text-white">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
