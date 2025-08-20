import { Plane, Shield, Package, MapPin, Truck, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import whyChooseUsImg from "../../public/images/person-with-laptop.jpeg";

const features = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Reach the airport hassle-free",
    description: "with timely pickups tailored to your flight schedule.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Protect up to ₹5000 of your",
    description: "shipment for just ₹100 — peace of mind, guaranteed.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "We pick, carry, and manage your",
    description: "luggage—no lifting or dragging needed.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Your baggage is handled securely",
    description: "for both domestic and global flights",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Dedicated counters assist you at",
    description: "the airport with luggage and coordination.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Track your package in real time &",
    description: "enjoy quick delivery!",
  },
];

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            // Animate items one by one with delay
            features.forEach((_, index) => {
              setTimeout(() => {
                // @ts-ignore
                setVisibleItems((prev) => [...prev, index]);
              }, index * 100); // 100ms delay between each item
            });

            // Animate image after features
            setTimeout(() => {
              // @ts-ignore
              setVisibleItems((prev) => [...prev, "image"]);
            }, features.length * 100 + 200);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasTriggered]);

  return (
    <section ref={sectionRef} className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4">
            <span className="text-yellow-500">Why Choose</span> Xcess for
            Baggage Delivery?
          </h2>
          {/* <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
          </div> */}
          <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
            <div className="w-[8%] h-[4px] bg-yellow-500 absolute top-[-1px] left-0 rounded-sm"></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Features Column */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 group transition-all duration-600 ease-out ${
                    // @ts-ignore
                    visibleItems.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: hasTriggered ? "0ms" : `${index * 100}ms`,
                  }}
                >
                  <div className="flex-shrink-0 p-3 bg-yellow-50 rounded-xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                    {/* <img
                      src={feature.icon}
                      alt="all icons"
                      className="w-16 h-16"
                    /> */}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-2xl tracking-tight">
                      {feature.title}
                    </div>
                    <div className="text-base font-normal text-gray-600">
                      {feature.description}
                    </div>
                    {/* <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div
              className={`relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg transition-all duration-800 ease-out ${
                // @ts-ignore
                visibleItems.includes("image")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: hasTriggered
                  ? "0ms"
                  : `${features.length * 100 + 200}ms`,
              }}
            >
              {/* Placeholder for team image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
                <img
                  src="/api/placeholder/400/300"
                  alt="Avaan Excess team at airport"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // @ts-ignore
                    e.target.style.display = "none";
                    // @ts-ignore

                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div></div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-50">
                  <img src={whyChooseUsImg} alt="Why choose us image" />
                  {/* <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plane className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-yellow-700 font-semibold">
                      Avaan Excess Team
                    </p>
                    <p className="text-yellow-600 text-sm">Airport Service</p>
                  </div> */}
                </div>
              </div>

              {/* Cost Saving Badge */}
              {/* <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg min-w-[140px]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-900 mb-1">
                    ₹XX,000
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Cost Saving</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">90%</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
