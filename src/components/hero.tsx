import homeDelivery from "../../public/images/homeDeliveryImg.jpg";
import delivery from "../../public/images/woman-delivering-package-man.jpg";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/domestic");
  };

  return (
    <section className="mt-20 relative">
      {/* Desktop Layout */}
      <div className="hidden lg:block h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeDelivery})` }}
        ></div>

        {/* Gradient Overlay from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-20">
          <div className="w-full">
            <div className="max-w-2xl">
              {/* Logo */}
              <div className="flex items-center mb-2">
                <span className="text-neutral-200 px-1 font-medium text-sm">
                  Excess Baggage
                </span>
              </div>

              {/* Main Heading */}
              <div className="text-5xl sm:text-7xl font-semibold text-neutral-50 tracking-tight mb-2">
                Travel Light,
                <div className="sm:pt-2 pt-0">Arrive Happy</div>
              </div>

              {/* Subtitle */}
              <p className="text-white/90 text-lg mb-5 mt-5 max-w-lg">
                Door-to-door luggage delivery across India — safe, reliable, and
                affordable.
              </p>

              {/* Book Now Button */}
              <button
                onClick={handleClick}
                className="bg-yellow-500 hover:bg-yellow-700 text-lg px-10 py-3 transition-all duration-200 hover:scale-105 rounded-lg text-neutral-50 hover:cursor-pointer"
              >
                Book a Pickup
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-screen relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center  bg-no-repeat"
          style={{ backgroundImage: `url(${delivery})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 bg-opacity-60"></div>

        {/* Content positioned at bottom */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-neutral-200 font-medium text-sm">
              Excess Baggage
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-4">
            {/* Door to Door Excess
            <div>Baggage Delivery</div> */}
            Travel Light, Arrive Happy
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-lg mb-3">
            Door-to-door luggage delivery across India — safe, reliable, and
            affordable.
          </p>

          {/* Book Now Button */}
          <button
            onClick={handleClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-base px-10 py-3 transition-all duration-200 hover:scale-105 rounded-lg text-neutral-50 hover:cursor-pointer"
          >
            Book a Pickup
          </button>
        </div>
      </div>
    </section>
  );
}
