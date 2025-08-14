import bannerImg from "../../public/images/aboutbanner.png";

const About = () => {
  const locations = [
    {
      city: "Hyderabad",
      airport: "Rajiv Gandhi International Airport, Hyderabad",
      details: "Terminal 1, Gate 8 and Visitor Departures",
    },
    {
      city: "Delhi",
      airport: "Indira Gandhi International Airport, Delhi",
      details: "Terminal 3, Gate 4, Departures",
    },
    {
      city: "Jaipur",
      airport: "Jaipur International Airport",
      details: "Terminal 1, Departures",
    },
    {
      city: "Guwahati",
      airport: "Lokpriya Gopinath Bordoloi International Airport, Guwahati",
      details: "Terminal 1, Outside Departures",
    },
  ];

  const features = [
    {
      title: "Safe",
      description: "Secure handling, packaging, and real-time tracking.",
      icon: "🛡️",
    },
    {
      title: "Convenient",
      description: "Hands-free travel without the hassle of carrying bags.",
      icon: "✈️",
    },
    {
      title: "Cost-Effective",
      description:
        "Transparent, affordable rates for individuals, families, and groups.",
      icon: "💰",
    },
    {
      title: "Reliable",
      description: "On-time pickups and deliveries every time.",
      icon: "⏰",
    },
  ];

  return (
    <div className="min-h-screen mt-20">
      {/* Hero Section with background image */}
      <div className="relative bg-gray-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto sm:text-center text-start">
          <p className="text-yellow-500 text-sm font-bold uppercase tracking-tight sm:mb-4 mb-2">
            ABOUT US
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Seamless Logistics: Excess Baggage
            <br />
            and Timely Delivery, Worldwide
          </h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
              About <span className="text-yellow-500">Xcess Luggage</span>
            </div>
            <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
              <div className="w-[15%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-lg text-neutral-900 mb-6">
                With decades of logistics expertise,{" "}
                <span className="font-semibold text-yellow-600">
                  Xcess Luggage
                </span>{" "}
                was founded with a simple mission — to let you travel light
                while we take care of your bags. Our nationwide coverage spans
                thousands of pin codes, reaching metros and remote towns alike.
              </p>
              <p className="text-lg text-neutral-900 leading-relaxed">
                We believe luggage delivery should be seamless, secure, and
                stress-free for every traveler.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-yellow-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-yellow-600 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-900 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      {/* <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4 text-center">
              Our <span className="text-yellow-500">Mission and Vision</span>
            </div>
            <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
              <div className="w-[8%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-1/2 transform -translate-x-1/2 rounded-sm"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-500">
                  Our Mission
                </h3>
              </div>
              <p className="text-neutral-900 leading-relaxed">
                To simplify global travel by providing secure, seamless and
                on-time delivery of excess baggage and packages - relieving
                travel stress and enriching every journey with peace of mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">V</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-500">
                  Our Vision
                </h3>
              </div>
              <p className="text-neutral-900 leading-relaxed">
                To transform the future of travel and logistics by being the
                world's most trusted solution for effortless baggage and package
                delivery - offering unmatched reliability and joyful customer
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Key Locations Section */}
      {/* <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4 text-center">
              Key <span className="text-yellow-500">Locations</span>
            </div>
            <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
              <div className="w-[6%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-1/2 transform -translate-x-1/2 rounded-sm"></div>
            </div>
          </div>

          <div className="grid lg:grid-`cols-2 gap-8">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {location.city}
                    </h3>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">
                    {location.airport}
                  </p>
                  <p className="text-gray-600 text-sm">{location.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
