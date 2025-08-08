import { ShieldCheck, Truck, IndianRupee, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    text: "We ship to over 25,000 Indian pincodes & 190+ countries",
  },
  {
    icon: IndianRupee,
    text: "Affordable rates starting at just ₹75*/kg",
  },
  {
    icon: Clock,
    text: "Guaranteed 4-day delivery across India with real-time tracking",
  },
  {
    icon: ShieldCheck,
    text: "Insurance cover of ₹5000 available",
  },
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="text-yellow-500">Package and Baggage Shipping?</span>{" "}
          Why Millions Trust Xcess
        </h2>
        <div className="mt-2 h-1 w-28 bg-yellow-500 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-6">
          {features.map((f) => (
            <li key={f.text} className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 text-yellow-500">
                <f.icon className="h-5 w-5" />
              </div>
              <p className="text-muted-foreground">{f.text}</p>
            </li>
          ))}
        </ul>

        <div className="relative">
          <img
            src="/images/trust.png"
            alt="Insured shipping card preview"
            width={900}
            height={700}
            className="rounded-2xl border shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
