import { Heart, Award, Users, Handshake } from "lucide-react";

const WhoWeAreSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "25+ Years",
      description: "Of proven logistics expertise",
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "More than just delivery service",
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "India's preferred luggage experts",
    },
    {
      icon: Handshake,
      title: "Lasting Relationships",
      description: "Built on reliability & trust",
    },
  ];

  return (
    <section className="py-16 px-6 my-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Who <span className="text-yellow-500">We Are</span>
          </div>
          <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
            <div className="w-[15%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow- border">
              <p className="text-base font-medium text-neutral-900  mb-6">
                We are India's trusted luggage transport experts, dedicated to
                making travel simpler, safer, and stress-free. Backed by over 25
                years of experience in logistics and customer care,{" "}
                <span className="font-semibold text-yellow-600">
                  Xcess Luggage
                </span>{" "}
                is more than just a delivery service — we deliver peace of mind.
              </p>

              <p className="text-base font-medium text-neutral-900  mb-6">
                Inspired by the warmth, reliability, and service excellence of
                our flagship group, we've built a reputation for delivering on
                promises, creating lasting relationships, and setting benchmarks
                in reliability.
              </p>

              <div className="bg-yellow-50 p-2 rounded-xl border border-yellow-200">
                <p className="text-base text-neutral-900  italic">
                  From the friendly smile at your doorstep to the meticulous
                  care we take in handling your belongings — every step reflects
                  our commitment to making your journey worry-free.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <highlight.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA or Additional Info */}
        {/* <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Your Journey, Our{" "}
              <span className="text-yellow-500">Commitment</span>
            </h3>
            <p className="text-neutral-900 text-lg leading-relaxed max-w-2xl mx-auto">
              Every package we handle represents someone's precious belongings,
              cherished memories, or important essentials. We don't just move
              luggage — we carry your trust.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeAreSection;
