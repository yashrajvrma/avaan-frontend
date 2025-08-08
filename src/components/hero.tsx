import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import homeDelivery from "../../public/images/homeDeliveryImg.jpg";

export function Hero() {
  return (
    <section className="relative mt-20 px-10">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-10">
        <div className="flex flex-col items-center max-w-5xl text-center mt-32 ">
          {/* <Badge className="w-fit bg-yellow-50 text-yellow-600 hover:bg-yellow-50">
            Excess Baggage
          </Badge> */}
          <div className="text-4xl md:text-7xl font-semibold tracking-tight text-neutral-900 ">
            Door to Door Excess
            <div>Baggage Delivery</div>
          </div>
          <div className="mt-6 text-neutral-600 max-w-xl text-center">
            Skip airline charges—save up to 80% on excess luggage delivery.
            Real-time tracking and doorstep pickup.
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Button className="bg-yellow-500 hover:bg-yellow-500 hover:cursor-pointer hover:scale-110">
              Book Now
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full ">
          <img
            src={homeDelivery}
            alt="Courier delivering baggage at doorstep"
            className="w-full h-auto rounded-2xl object-cover border shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
