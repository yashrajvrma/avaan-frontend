import { useState, useEffect, useRef } from "react";
// import ServicesImg from "../../public/images/services-img.jpg";
import { useNavigate } from "react-router-dom";
import pickup from "../../public/images/picking.png";
import boxOpen from "../../public/images/box-open.png";
import truck from "../../public/images/shipping-truck.png";
import clock from "../../public/images/time-fast.png";
import order from "../../public/images/digital-payment.png";
import packageImg from "../../public/images/n9.jpeg";

const steps = [
  {
    icon: boxOpen,
    title: "1. Book Your Pickup",
    desc: "Schedule online or by phone in just a few clicks.",
  },
  {
    icon: order,
    title: "2. Book Online",
    desc: "Use the Xcess website or app to book your delivery—choose domestic or international, enter details, and confirm.",
  },
  {
    icon: pickup,
    title: "3. Doorstep Collection",
    desc: "Our team collects your bags from your home, office, or hotel.",
  },
  {
    icon: truck,
    title: "4. Safe Transit",
    desc: "We securely pack, track, and transport your luggage nationwide",
  },
  {
    icon: clock,
    title: "5. On-Time Delivery",
    desc: "Receive your bags at your destination, ready when you are.",
  },
];

export function StepsSection() {
  const navigate = useNavigate();
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            // Animate steps one by one with delay
            steps.forEach((_, index) => {
              setTimeout(() => {
                // @ts-ignore
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200); // 200ms delay between each step
            });
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before the section comes into view
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

  const handleClick = () => {
    navigate("/domestic");
  };

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-12 md:py-16 space-y-10 sm:mt-40 mt-20"
    >
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
          <div className="sm:mt-0 mt-4 text-base font-medium text-gray-600">
            Sending packages with Xcess is simple. Pack your baggage with
            package securely and we will do the rest.
          </div>
          <button
            onClick={handleClick}
            className="bg-yellow-500 hover:bg-yellow-600 w-full rounded-md py-2 font-medium text-neutral-100"
          >
            Check Rates
          </button>
        </div>
      </div>

      {/* Bottom: Image + Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 pt-10 items-start">
        {/* Left: Image */}
        <div className="sm:w-lg h-full sm:mx-auto">
          <img
            src={packageImg}
            alt="Happy customer image with chat bubbles"
            className="w-full h-full object-cover rounded-3xl border shadow-sm"
          />
        </div>

        {/* Right: Steps with Animation */}
        <div className="grid gap-5 sm:mt-0 mt-10">
          {steps.map((s, index: any) => (
            <div
              key={s.title}
              className={`flex gap-x-8 gap-y-2 transition-all duration-700 ease-out ${
                // @ts-ignore
                visibleSteps.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{
                transitionDelay: hasTriggered ? "0ms" : `${index * 200}ms`,
              }}
            >
              <div className="mt-1 flex h-20 w-20 shrink-0 items-center align-middle rounded-full text-yellow-500">
                {/* <s.icon className="h-14 w-14" /> */}
                <img src={s.icon} alt="all icons" className="w-16 h-16" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <div className="font-semibold text-2xl tracking-tight">
                  {s.title}
                </div>
                <div className="text-base font-normal text-gray-600">
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
