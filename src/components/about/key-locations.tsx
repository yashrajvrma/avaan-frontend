import { Card, CardContent } from "@/components/ui/card";
import indianMap from "../../../public/images/map-bg-remove.png";

const locations = [
  {
    city: "Mumbai",
    airport: "Rajiv Gandhi International Airport, Mumbai",
    terminal: "Terminal 1, Gate 8 and Visitor Departures",
  },
  {
    city: "Pune",
    airport: "Indira Gandhi International Airport, Pune",
    terminal: "Terminal 3, Gate 6, Departures",
  },
  {
    city: "Hyderabad",
    airport: "Rajiv Gandhi International Airport, Hyderabad",
    terminal: "Terminal 1, Gate 8 and Visitor Departures",
  },
  {
    city: "Delhi",
    airport: "Indira Gandhi International Airport, Delhi",
    terminal: "Terminal 3, Gate 6, Departures",
  },
  {
    city: "Jaipur",
    airport: "Jaipur International Airport",
    terminal: "Terminal 1, Departures",
  },
  {
    city: "Guwahati",
    airport: "Lokpriya Gopinath Bordoloi International Airport, Guwahati",
    terminal: "Terminal 1, Outside Departures",
  },
];

export function KeyLocations() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2 tracking-tight">
            Key Locations
          </div>
          {/* <div className="w-16 h-1 bg-yellow-500"></div> */}
          <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
            <div className="w-[15%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col justify-between">
          {/* Location Cards */}
          <div className="lg:col-span-2 w-full">
            <div className="flex flex-row flex-wrap gap-y-4 gap-x-4">
              {locations.map((location, index) => (
                <Card
                  key={index}
                  className="bg-yellow-50/20 shadow-sm transition-shadow p-0 w-xs"
                >
                  <CardContent className="px-6 py-10">
                    <div className="text-xl font-semibold text-neutral-900 mb-2">
                      {location.city}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold  text-neutral-900">
                        {location.airport}
                      </p>
                      <p className="text-sm text-gray-700">
                        {location.terminal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <div className="sm:min-w-xl sm:pt-0 pt-10">
              <img src={indianMap} width={800} height="580" alt="indian map" />
            </div>
            {/* <div className="rounded-lg p-6 h-full min-h-[300px] flex items-center justify-center border border-yellow-200">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  India Map with Location Markers
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
