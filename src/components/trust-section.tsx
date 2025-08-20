import { useState, useEffect, useRef } from "react";
import map from "../../public/images/map-marker-check.png";
import userExp from "../../public/images/userExp.png";
import money from "../../public/images/money-transfer-smartphone.png";
import privacy from "../../public/images/privacy-settings.png";
import truck from "../../public/images/shipping-truck.png";
import personWithLaptop from "../../public/images/person-with-laptop.jpeg";
import indiaMap from "../../public/images/xcessluggugae_4.png";

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

const images = [indiaMap, personWithLaptop];

export function TrustSection() {
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            // Animate features one by one from top to bottom with delay
            features.forEach((_, index) => {
              setTimeout(() => {
                //@ts-ignore
                setVisibleFeatures((prev) => [...prev, index]);
              }, index * 150); // 150ms delay between each feature
            });
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the section comes into view
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

  // Auto slideshow effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-12 md:py-16">
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
        {/* Features with Animation */}
        <ul className="space-y-6 flex-1">
          {features.map((f, index) => (
            <li
              key={f.text}
              className={`flex items-center gap-4 transition-all duration-600 ease-out ${
                // @ts-ignore
                visibleFeatures.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: hasTriggered ? "0ms" : `${index * 150}ms`,
              }}
            >
              <div className="flex items-center justify-center rounded-lg text-yellow-500 p-2 flex-shrink-0">
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

        {/* Image slideshow with slight animation */}
        <div
          className={`flex relative overflow-hidden transition-all duration-800 ease-out delay-500 ${
            hasTriggered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative bg-neutral-100 p-1 rounded-2xl sm:max-w-lg max-w-sm w-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slideshow image ${index + 1}`}
                className={`w-full object-cover rounded-2xl transition-opacity duration-500 ${
                  index === currentImageIndex
                    ? "opacity-100"
                    : "opacity-0 absolute top-1 left-1 right-1 bottom-1"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
