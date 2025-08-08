import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import homeDelivery from "../../public/images//homeDeliveryImg.jpg";

export function Hero() {
  return (
    <section className="relative h-[520px] flex items-center mt-20">
      {/* Background Image */}
      <img
        src={homeDelivery}
        alt="Courier delivering baggage at doorstep"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <Badge className="w-fit bg-yellow-50 text-yellow-500 hover:bg-yellow-50">
          Excess Baggage
        </Badge>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Door to Door Excess Baggage Delivery
        </h1>
        <p className="mt-4 text-white/80 max-w-prose">
          Skip airline charges—save up to 80% on Excess luggage delivery.
          Real-time tracking and doorstep pickup.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Button className="bg-yellow-500 hover:bg-yellow-600">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
