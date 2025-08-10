import {
  CheckCircle2,
  Hand,
  MousePointerClick,
  Package,
  Truck,
} from "lucide-react";
import ServicesImg from "../../public/images/services-img.jpg";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/domestic");
  };
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 space-y-10 mt-10">
      {/* Top: Title + Line + Description + Button */}
      <div className="flex flex-col md:flex-row  gap-x-10">
        <div className="flex flex-col sm:w-[50%] ">
          <div className="text-3xl md:text-4xl font-semibold tracking-tight text-yellow-500">
            How to Ship with
            <span className="text-neutral-900"> Xcess</span>
          </div>
          <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
            <div className="w-[15%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
          </div>
        </div>

        <div className="flex flex-col sm:w-[50%] space-y-4">
          <div className="sm:mt-0 mt-4 text-muted-foreground text-sm">
            Sending packages with Xcess is simple. Pack your baggage with
            package securely and we will do the rest.
          </div>
          <button
            onClick={handleClick}
            className="bg-yellow-500 hover:bg-yellow-600 w-full rounded-md py-2 font-medium text-neutral-100"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Bottom: Image + Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10 items-start">
        {/* Left: Image */}
        <div className="sm:w-sm h-full sm:mx-auto">
          <img
            src={ServicesImg}
            alt="Happy customer image with chat bubbles"
            className="w-full h-full object-cover rounded-3xl border shadow-sm"
          />
        </div>

        {/* Right: Steps */}
        <div className="grid gap-5 sm:mt-0 mt-10">
          {steps.map((s) => (
            <div key={s.title} className="flex gap-2">
              <div className="mt-1 flex h-20 w-20 shrink-0 items-center align-middle rounded-full  text-yellow-500">
                <s.icon className="h-14 w-14" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <div className="font-semibold text-lg">{s.title}</div>
                <div className="text-sm text-muted-foreground">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
