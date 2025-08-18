// import { Card, CardContent } from "@/components/ui/card";
import person from "../../../public/images/person-photo.avif";

export function MeetFounder() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2 tracking-tight">
            Meet our <span className="text-yellow-500">Founder</span>
          </div>
          {/* <div className="w-16 h-1 bg-yellow-500"></div> */}
          <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
            <div className="w-[8%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
          </div>
        </div>

        <div className="flex flex-col border-0 px-4">
          <div className="flex sm:flex-row flex-col gap-x-14">
            {/* Founder Image */}

            <div className="rounded-2xl">
              <img
                src={person}
                alt="person img"
                className="w-lg object-contain rounded-2xl"
              />
            </div>

            {/* <div className="w-full max-w-sm mx-auto">
                  <div className="aspect-[3/4] bg-yellow-200 rounded-lg flex items-center justify-center border border-yellow-300">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-semibold">M</span>
                      </div>
                      <p className="text-sm text-gray-600">Founder Photo</p>
                    </div>
                  </div>
                </div> */}

            {/* Founder Info */}
            <div className="lg:col-span-2 space-y-6 pt-2">
              <div>
                <div className="text-2xl font-semibold text-neutral-900 mb-1 sm:pt-0 pt-10">
                  John Doe
                </div>
                <div className="text-lg text-gray-700">
                  <p className="font-medium text-lg">
                    Co-Founder & CTO, ExampleCorp
                  </p>
                  <p className="font-medium text-lg">
                    Ex-Lead Engineer, Sample Startup
                  </p>
                  <p className="font-medium">Tech Conference Speaker</p>
                </div>
              </div>

              <div className="space-y-4 text-sm font-normal text-neutral-900">
                <p className="text-lg">
                  John is a graduate of Example University with a degree in
                  Computer Science and holds a Master’s in Business Technology
                  from Demo Institute.
                </p>

                <p className="text-lg">
                  He has over a decade of experience in the software industry,
                  having played a key role in scaling multiple tech products and
                  leading engineering teams across different domains.
                </p>

                <p className="text-lg">
                  John is passionate about building scalable solutions and has
                  been recognized for his contributions to open-source projects
                  and community-driven initiatives.
                </p>
                <p className="text-lg">
                  He has been recognized for his contributions to open-source
                  projects and community-driven initiatives.
                </p>

                <p className="text-lg">
                  Currently, John is working on ExampleCorp, a platform that
                  leverages AI to simplify business workflows. The company has
                  been recognized with several innovation awards and continues
                  to grow globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
