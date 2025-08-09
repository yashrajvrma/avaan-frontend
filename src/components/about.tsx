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

  return (
    <div className="min-h-screen mt-20">
      {/* Hero Section */}
      {/* <div className="relative bg-gray-800 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            minWidth: "100%",
            minHeight: "100%",
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="text-yellow-500 text-sm uppercase tracking-wide mb-4">
            ABOUT US
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Seamless Logistics: Excess Baggage
            <br />
            and Timely Delivery, Worldwide
          </h1>
        </div>
      </div> */}
      {/* Gray header section */}

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

      {/* Mission and Vision Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Our <span className="text-yellow-500">Mission and Vision</span>
            </div>
            <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
              <div className="w-[8%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To simplify global travel by providing secure, seamless and
                on-time delivery of excess baggage and packages - relieving
                travel stress and enriching every journey with peace of mind.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To transform the future of travel and logistics by being the
                world's most trusted solution for effortless baggage and package
                delivery - offering unmatched reliability and joyful customer
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Locations Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Key <span className="text-yellow-500">Locations</span>
            </div>
            <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
              <div className="w-[6%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Locations Grid */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="border-1 p-6 rounded-lg shadow-sm  transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {location.city}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {location.airport}
                  </p>
                  <p className="text-gray-600 text-sm">{location.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
