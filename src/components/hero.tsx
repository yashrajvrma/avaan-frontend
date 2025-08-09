import { Button } from "@/components/ui/button";
import homeDelivery from "../../public/images/homeDeliveryImg.jpg";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/domestic");
  };
  return (
    <section className="mt-20 px-6">
      <div className="mx-auto sm:max-w-7xl max-w-5xl flex flex-col items-center gap-10">
        {/* <div className="flex flex-col items-center max-w-6xl text-center mt-32 ">
          <div className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 ">
            Door to Door Excess
            <div>Baggage Delivery</div>
          </div>
          <div className="mt-6 text-neutral-600 max-w-xl text-center">
            Skip airline charges—save up to 80% on excess luggage delivery.
            Real-time tracking and doorstep pickup.
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Button
              onClick={handleClick}
              className="bg-yellow-500 hover:bg-yellow-500 hover:cursor-pointer hover:scale-110"
            >
              Book Now
            </Button>
          </div>
        </div> */}
        <div className="flex flex-col items-center max-w-6xl text-center sm:mt-32 mt-20">
          <div className="text-5xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900">
            {/* Mobile layout (hidden on sm and above) */}
            <div className="block sm:hidden">
              <div>Door to Door</div>
              <div>Excess Baggage</div>
              <div>Delivery</div>
            </div>

            {/* Desktop layout (hidden on mobile) */}
            <div className="hidden sm:block">
              Door to Door Excess
              <div>Baggage Delivery</div>
            </div>
          </div>

          <div className="mt-6 text-neutral-600 max-w-xl text-center">
            Skip airline charges—save up to 80% on excess luggage delivery.
            Real-time tracking and doorstep pickup.
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Button
              onClick={handleClick}
              className="bg-yellow-500 hover:bg-yellow-500 hover:cursor-pointer hover:scale-110"
            >
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
