import { ShieldCheck, Truck, IndianRupee, Clock } from "lucide-react";
import packageImg from "../../public/images/depositphotos_165317552-stock-photo-cheerful-delivery-man-happy-young.jpg";

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
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      {/* Heading */}
      <div className="mb-8">
        <div className="text-3xl md:text-4xl font-semibold tracking-tight">
          <span className="text-yellow-500">Package and Baggage Shipping?</span>{" "}
          Why Millions Trust Xcess
        </div>
        <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
          <div className="w-[15%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
        </div>
      </div>

      {/* Features + Image side by side */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Features */}
        <ul className="space-y-6 flex-1">
          {features.map((f) => (
            <li key={f.text} className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-yellow-50 text-yellow-500 p-2">
                <f.icon className="h-8 w-8" />
              </div>
              <p className="text-foreground font-medium text-lg">{f.text}</p>
            </li>
          ))}
        </ul>

        {/* Image */}
        <div className="flex">
          <img
            src={packageImg}
            alt="Insured shipping card preview"
            className="rounded-3xl border shadow-sm max-w-sm w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
