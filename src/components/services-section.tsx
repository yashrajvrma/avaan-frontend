import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Airline Travel",
    description:
      "Avoid heavy excess baggage fees with our cost-effective rates.",
    imgSrc: "/images/n4.jpeg",
  },
  {
    title: "Vacation Travel",
    description: "Enjoy your trip without carrying bulky luggage.",
    imgSrc: "/images/n1.jpeg",
  },
  {
    title: "Business Trips",
    description:
      "Arrive ready to work, with your bags delivered to your office or hotel.",
    imgSrc: "/images/businessTrips.jpg",
  },
  {
    title: "Special Events",
    description:
      "Move clothes, gifts, and essentials with zero stress for weddings and events.",
    imgSrc: "/images/n3.jpeg",
  },
  {
    title: "Student Relocation",
    description:
      "Send books, clothes, and personal items to your hostel or campus.",
    imgSrc: "/images/n2.jpeg",
  },
  {
    title: "Family Travel",
    description: "Extra convenience and care for those who need it most.",
    imgSrc: "/images/elderlyTravel.jpg",
  },
];

export function ServicesSection() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/domestic");
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
          <span className="text-yellow-500"> We deliver all types </span>
          of Luggage
        </div>
        <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
          <div className="w-[10%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
        </div>
      </div>

      {/* Services Grid - 3 columns on large screens, 1 column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gradient-to-br from-yellow-50/80 to-yellow-400/60 rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:scale-105"
          >
            {/* Service Image */}
            <div className="mb-6 relative h-48 rounded-xl overflow-hidden">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Service icon/logo overlay */}
              {/* <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              </div> */}
            </div>

            {/* Service Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-yellow-500 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-800 opacity-80 leading-relaxed mb-6 h-10">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                {/* <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition-colors duration-200">
                  Explore
                </button> */}
                <button
                  className="hover:cursor-pointer"
                  onClick={() => handleExplore()}
                >
                  Explore
                </button>

                {/* Arrow Icon */}
                <div className="w-8 h-8 border border-neutral-900 rounded-full flex items-center justify-center text-neutral-900 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-200 cursor-pointer">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-10">
              <div className="w-20 h-20 border-2 border-yellow-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      {/* <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
          <span>Reliable</span>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <span>Fast</span>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <span>Secure</span>
        </div>
      </div> */}
    </section>
  );
}
