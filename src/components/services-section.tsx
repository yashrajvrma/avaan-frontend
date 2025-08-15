const services = [
  {
    title: "Airline Travel",
    description:
      "Avoid heavy excess baggage fees with our cost-effective rates.",
    bgColor: "bg-gray-100",
    textColor: "text-gray-800",
    letter: "A",
    letterBg: "bg-yellow-100",
    imgSrc: "/images/istockphoto-927771744-612x612.jpg",
  },
  {
    title: "Vacation Travel",
    description: "Enjoy your trip without carrying bulky luggage.",
    bgColor: "bg-gray-900",
    textColor: "text-white",
    letter: "V",
    letterBg: "bg-yellow-600",
    imgSrc: "/images/family-photo.avif",
  },
  {
    title: "Business Trips",
    description:
      "Arrive ready to work, with your bags delivered to your office or hotel.",
    bgColor: "bg-yellow-100",
    textColor: "text-neutral-900",
    letter: "B",
    letterBg: "bg-yellow-600",
    imgSrc: "/images/businessTrips.jpg",
  },
  {
    title: "Special Events",
    description:
      "Move clothes, gifts, and essentials with zero stress for weddings and events.",
    bgColor: "bg-gray-100",
    textColor: "text-gray-800",
    letter: "E",
    letterBg: "bg-yellow-100",
    imgSrc: "/images/copper-events-01.jpg",
  },
  {
    title: "Student Relocation",
    description:
      "Send books, clothes, and personal items to your hostel or campus.",
    bgColor: "bg-gray-900",
    textColor: "text-white",
    letter: "S",
    letterBg: "bg-yellow-600",
    imgSrc: "/images/Student-Relocation-1-1024x656.jpg",
  },
  {
    title: "Family Travel",
    description: "Extra convenience and care for those who need it most.",
    bgColor: "bg-yellow-100",
    textColor: "text-neutral-900",
    letter: "F",
    letterBg: "bg-yellow-600",
    imgSrc: "/images/elderlyTravel.jpg",
  },
];

export function ServicesSection() {
  // const handleExplore = (serviceTitle) => {
  //   // Navigate to service-specific page or your existing navigation
  //   window.location.href = "/domestic"; // Using your existing navigation
  // };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        {/* <div className="text-sm text-gray-500 mb-2">/ services /</div> */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 leading-tight">
          SHIPPING SERVICES WHICH WE
          <br />
          PROVIDE TO OUR CUSTOMERS
        </h2>
        {/* <div className="flex justify-end mt-6">
          <Button
            variant="outline"
            className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-none"
          >
            All services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className={`${service.bgColor} ${service.textColor} p-8 relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105`}
          >
            {/* Large Letter Background */}
            {/* <div className="absolute top-4 right-4 opacity-20">
              <div
                className={`${service.letterBg} w-32 h-32 rounded-full flex items-center justify-center`}
              >
                <span className="text-6xl font-bold text-neutral-900">
                  {service.letter}
                </span>
              </div>
            </div> */}

            {/* Service Images Collage */}
            <div className="mb-8 relative">
              <div className="grid grid-cols-2 gap-2 h-48">
                <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg opacity-80 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url(${service.imgSrc})` }}
                  ></div>
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg opacity-80"></div>
                <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg opacity-80"></div>
                <div className="bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg opacity-80 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url(${service.imgSrc})` }}
                  ></div>
                </div>
              </div>
              {/* Small icon indicator */}
              {/* <div className="absolute bottom-4 right-4">
                <div className="w-6 h-6 border-2 border-current rounded-sm flex items-center justify-center opacity-70">
                  <div className="w-2 h-2 bg-current rounded-sm"></div>
                </div>
              </div> */}
            </div>

            {/* Service Content */}
            <div className="space-y-4">
              <div className="h-28">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="w-full h-0.5 bg-current opacity-30 mb-4"></div>
                </div>

                <p className="text-sm opacity-90 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Icon */}
              <div className="pt-4 ">
                <div className="w-8 h-8 border border-current rounded-sm flex items-center justify-center opacity-60">
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
          <span>Reliable</span>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <span>Fast</span>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <span>Secure</span>
        </div>
      </div>
    </section>
  );
}
