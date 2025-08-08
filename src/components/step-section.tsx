import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Hand,
  MapPin,
  MousePointerClick,
  Package,
  Truck,
} from "lucide-react";
import ServicesImg from "../../public/images/services-img.jpg";

const steps = [
  {
    icon: Package,
    title: "1. Choose a Service",
    desc: "Select from Xcess Baggage, Package Delivery, or Airport Transfer based on your shipping needs.",
  },
  {
    icon: MousePointerClick,
    title: "2. Book Online",
    desc: "Use the Xcess website or app to book your delivery—choose domestic or international, enter details, and confirm.",
  },
  {
    icon: Hand,
    title: "3. Pickup or Drop",
    desc: "We can pick up from your doorstep, or you can drop off at our airport kiosks.",
  },
  {
    icon: Truck,
    title: "4. Track Your Shipment",
    desc: "Get real-time updates through our tracking portal.",
  },
  {
    icon: CheckCircle2,
    title: "5. Support & Rewards",
    desc: "24/7 customer support and rewards on every booking.",
  },
];

export function StepsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              How to Ship with Xcess
            </h2>
            <div className="mt-2 h-1 w-24 bg-yellow-500 rounded-full" />
            <p className="mt-4 text-muted-foreground">
              Sending packages with Xcess is simple. Pack securely and we do the
              rest.
            </p>
          </div>

          <div className="mt-2 grid gap-5">
            {steps.map((s) => (
              <div key={s.title} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-yellow-500">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <Button className="bg-yellow-500 hover:bg-yellow-600">
              Book now
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={ServicesImg}
            alt="Happy customer image with chat bubbles"
            className="rounded-2xl border shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
