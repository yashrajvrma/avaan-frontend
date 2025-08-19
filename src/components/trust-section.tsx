import { ShieldCheck, Truck, IndianRupee, Clock, MapPin } from "lucide-react";
// import packageImg from "../../public/images/depositphotos_165317552-stock-photo-cheerful-delivery-man-happy-young.jpg";
import packageImg from "../../public/images/n9.jpeg";
import map from "../../public/images/map-marker-check.png";
import userExp from "../../public/images/userExp.png";
import money from "../../public/images/money-transfer-smartphone.png";
import privacy from "../../public/images/privacy-settings.png";
import truck from "../../public/images/shipping-truck.png";
import indiaMap from "../../public/images/xcessluggugae_1.png";

const features = [
  {
    icon: privacy,
    text: "Professional handling with real-time tracking.",
    title: "Safe & Secure",
  },
  {
    icon: truck,
    text: "We handle everything from pickup to delivery.",
    title: "Hassle-Free",
  },
  {
    icon: money,
    text: "Transparent pricing without hidden costs.",
    title: "Affordable",
  },
  {
    icon: map,
    text: "From metro cities to remote towns, we've got you covered.",
    title: "Nationwide Reach",
  },
  {
    icon: userExp,
    text: "25+ years of proven logistics expertise.",
    title: "Experience You Can Trust",
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
              <div className="flex items-center justify-center rounded-lg text-yellow-500 p-2 flex-shrink-0">
                {/* <f.icon className="h-8 w-8" /> */}
                <img src={f.icon} alt="icon" className="w-16 h-16" />
              </div>
              <div>
                <div className="font-semibold text-2xl tracking-tight mb-1">
                  {f.title}
                </div>
                <div className="text-base font-normal text-gray-600">
                  {f.text}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Image */}
        <div className="flex">
          <img
            src={indiaMap}
            alt="Insured shipping card preview"
            className="rounded-3xl border shadow-sm sm:max-w-lg max-w-sm w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
