import homeDelivery from "../../public/images/home-delivery.jpg";

export default function HeroSection() {
  return (
    <div className="flex justify-between gap-4 items-center mb-12 lg:mb-16 px-12">
      <div className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-neutral-800 leading-tighter mb-6 lg:mb-8 sm:text-start text-center tracking-tight">
        Because travel should
        <br />
        be about the journey,
        <br />
        not the baggage.
      </div>

      <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out transform w-full max-w-sm lg:max-w-sm border-neutral-100 border-4">
        <img src={homeDelivery} className="w-full" alt="home-img" />
      </div>
    </div>
  );
}
