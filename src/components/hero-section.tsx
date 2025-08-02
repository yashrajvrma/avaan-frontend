export default function HeroSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
      <div className="order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-6 lg:mb-8">
          Because travel should be about the{" "}
          <span className="text-yellow-800">journey,</span>
          <br />
          <span className="text-yellow-800">not the baggage.</span>
        </h1>
      </div>
      <div className="flex justify-center order-1 lg:order-2">
        <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 w-full max-w-sm lg:max-w-md">
          <img
            src="/hero-image-1.png"
            alt="Travel luggage"
            width={400}
            height={300}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
