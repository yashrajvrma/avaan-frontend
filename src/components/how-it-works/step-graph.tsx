import box from "../../../public/images/box-circle-check.png";
import confirmation from "../../../public/images/confirmed-user.png";
import picking from "../../../public/images/picking-box.png";
import clock from "../../../public/images/time-fast.png";

const steps = [
  {
    id: 1,
    icon: box,
    title: "Book Your Pickup",
    desc: "Schedule online or by phone in just a few clicks.",
  },
  {
    id: 2,
    icon: picking,
    title: "Doorstep Collection",
    desc: "Our team collects your bags from your home, office, or hotel.",
  },
  {
    id: 3,
    icon: clock,
    title: "On-Time Delivery",
    desc: "Receive your bags at your destination, ready when you are.",
  },
  {
    id: 4,
    icon: confirmation,
    title: "Confirmation",
    desc: "Get instant updates and confirmation when delivery is complete.",
  },
];

export default function ShipSteps() {
  return (
    <section className="w-full py-12 mt-24">
      <div className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Ship in Just 4 Steps
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 px-4 max-w-7xl mx-auto pt-10">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="flex-1 flex flex-col items-center text-center relative"
          >
            {/* Circle + Number */}
            <div className="sm:w-36 sm:h-36 w-28 h-28 flex items-center justify-center rounded-full border-2 border-dashed border-yellow-400 text-yellow-500 relative mb-3 bg-white z-10">
              {/* <step.icon className="w-8 h-8" /> */}
              <img src={step.icon} alt="icon images" className="sm:w-16 w-12" />
              {/* <span className="absolute -right-3 bg-yellow-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                {step.id}
              </span> */}
            </div>

            {/* Connector Line */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-18 left-1/2 w-full h-0 border-t-2 border-dashed border-neutral-900 z-0"></div>
            )}

            {/* Title + Desc */}
            <h3 className="font-semibold text-lg mt-2">{step.title}</h3>
            <p className="text-sm text-gray-600 mt-1 max-w-[220px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
