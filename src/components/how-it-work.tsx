import deliveryImg from "../../public/images/how-we-work.jpg";

const HowItWorks = () => {
  return (
    <div className="mt-20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4 tracking-tight">
            <span className="text-yellow-500">Simple Steps!</span> Ship in Just
            3
          </div>
          <div className="w-full h-[2px] bg-gray-300 relative rounded-sm mt-4">
            <div className="w-[15%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex justify-center align-middle items-center space-x-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 align-middle">
                <span className="text-2xl font-semibold text-white">1</span>
              </div>
              <div className="pt-4">
                <p className="text-xl text-neutral-900 font-medium leading-relaxed">
                  Schedule a Pickup anytime via website, WhatsApp, or call. Get
                  instant pricing!
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex justify-center align-middle items-center space-x-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-semibold text-white">2</span>
              </div>
              <div className="pt-4">
                <p className="text-xl text-neutral-900 font-medium leading-relaxed">
                  Our team arrives within 2 hours, packs, and seals your parcel.
                  We do the work for you so you can remain stress-free!
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex justify-center align-middle items-center space-x-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-semibold text-white">3</span>
              </div>
              <div className="pt-4">
                <p className="text-xl text-neutral-900 font-medium leading-relaxed">
                  Track your package in real time & enjoy quick delivery!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image and Tracking */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative">
              {/* <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center"> */}
              {/* Image Placeholder */}
              <div className="w-full h-full rounded-2xl border-neutral-400">
                <img
                  className="rounded-2xl"
                  src={deliveryImg}
                  alt="delivery-img"
                />
                {/* <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <p className="text-lg">Delivery Image Placeholder</p> */}
              </div>
              {/* </div> */}

              {/* Protected Badge */}
              {/* <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    Protected
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
