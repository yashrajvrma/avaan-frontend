// import { useState, useEffect } from "react";
// // import { Button } from "./ui/button";
// import { useNavigate } from "react-router-dom";
// import truck from "../../public/images/shipping-truck.png";

// export function Hero() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//   });

//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Trigger the animation after component mounts
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100); // Small delay to ensure smooth animation

//     return () => clearTimeout(timer);
//   }, []);

//   const handleClick = () => {
//     // Navigate to domestic page
//     console.log("Navigate to domestic");
//   };

//   const handleInputChange = (e: any) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleBookNow = () => {
//     // Handle booking logic here
//     console.log("Booking data:", formData);
//     navigate("/domestic");
//   };

//   return (
//     <section className="mt-20 relative">
//       {/* Desktop Layout */}
//       <div className="hidden lg:block h-[90vh]">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[80vh]"
//           style={{ backgroundImage: `url(/images/n7.jpeg)` }}
//         ></div>

//         {/* Gradient Overlay from left to right */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent h-[80vh]"></div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col justify-center px-20 pt-40">
//           {/* Main Content with Animation */}
//           <div
//             className={`max-w-2xl mb-16 mt-20 transition-all duration-1000 ease-out ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             {/* Logo */}
//             <div className="flex items-center gap-x-2 mb-4">
//               <div className="bg-neutral-50 rounded-lg px-3 py-2.5">
//                 <img src={truck} alt="shipping truck img" className="w-8 h-8" />
//               </div>
//               <span className="text-neutral-50 px-1 font-medium text-base">
//                 Excess Baggage
//               </span>
//             </div>

//             {/* Main Heading */}
//             <div className="text-5xl sm:text-7xl font-bold text-neutral-50 tracking-tight mb-2">
//               We handle,
//               <div className="sm:pt-2 pt-0">You Travel</div>
//             </div>

//             {/* Subtitle */}
//             <p className="text-white/90 text-lg font-medium mb-5 mt-5 max-w-lg">
//               Door-to-door luggage delivery across India — safe, reliable, and
//               affordable.
//             </p>

//             {/* Book Now Button */}
//             <button
//               onClick={handleClick}
//               className="bg-yellow-500 hover:scale-105 text-md px-10 py-3 transition-all duration-200 rounded-lg text-neutral-50 hover:cursor-pointer font-medium"
//             >
//               Book a Pickup
//             </button>
//           </div>

//           {/* Centered Booking Card with Animation */}
//           <div
//             className={`flex justify-center transition-all duration-1000 ease-out delay-300 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-4xl">
//               {/* Tab Header */}
//               {/* <div className="mb-1">
//                 <div className="inline-flex bg-gray-100 rounded-lg p-1">
//                   <Button
//                     variant="outline"
//                     className="border-yellow-500 border-2 py-2 px-6 text-sm font-medium rounded-md"
//                   >
//                     Domestic
//                   </Button>
//                 </div>
//               </div> */}

//               {/* Form Fields in a row */}
//               <div className="flex gap-4 items-end">
//                 <div className="flex-1">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Name*"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
//                   />
//                 </div>

//                 <div className="flex-1">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="E-mail*"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
//                   />
//                 </div>

//                 <div className="flex flex-1">
//                   <div className="flex items-center px-3 py-3 border border-gray-300 rounded-l-lg border-r-0 bg-gray-50">
//                     {/* <span className="text-2xl mr-2">🇮🇳</span> */}
//                     <span className="text-gray-600 text-sm">+91</span>
//                   </div>
//                   <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Mobile Number"
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:border-transparent"
//                   />
//                 </div>

//                 <button
//                   onClick={handleBookNow}
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 whitespace-nowrap"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="lg:hidden h-screen relative">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[70vh]"
//           style={{
//             backgroundImage: `url(/images/woman-delivering-package-man.jpg)`,
//           }}
//         ></div>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/30 bg-opacity-100 h-[70vh]"></div>

//         {/* Content positioned at bottom with Animation */}
//         <div className="relative z-10 h-full flex flex-col pt-20 px-6">
//           <div
//             className={`transition-all duration-1000 ease-out ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             {/* Logo */}
//             <div className="flex items-center gap-3 mb-2">
//               <span className="text-neutral-200 font-medium text-sm">
//                 Excess Baggage
//               </span>
//             </div>

//             {/* Main Heading */}
//             <div className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
//               Travel Light,
//               <br />
//               Arrive Happy
//             </div>

//             {/* Subtitle */}
//             <p className="text-white/90 text-lg mb-3">
//               Door-to-door luggage delivery across India — safe, reliable, and
//               affordable.
//             </p>
//           </div>
//         </div>

//         {/* Mobile Booking Card - Fixed at bottom with Animation */}
//         <div
//           className={`absolute bottom-0 left-0 right-0 bg-white rounded-lg p-6 mx-6 shadow-lg lg:hidden transition-all duration-1000 ease-out delay-300 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           {/* Tab Header */}
//           <div className="mb-4">
//             <div className="inline-flex bg-gray-100 rounded-lg p-1">
//               <button className="bg-yellow-500 text-white py-2 px-4 text-sm font-medium rounded-md">
//                 Domestic
//               </button>
//             </div>
//           </div>

//           {/* Form Fields */}
//           <div className="grid grid-cols-1 gap-3 mb-3">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name*"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="E-mail*"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
//             />
//           </div>

//           <div className="flex flex-col gap-y-4">
//             <div className="flex">
//               <div className="flex items-center px-3 py-2 border border-gray-300 rounded-l-lg border-r-0 bg-gray-50">
//                 {/* <span className="text-lg mr-1">🇮🇳</span> */}
//                 <span className="text-gray-600 text-xs">+91</span>
//               </div>
//               <input
//                 type="tel"
//                 name="mobile"
//                 placeholder="Mobile Number"
//                 value={formData.mobile}
//                 onChange={handleInputChange}
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg text-sm"
//               />
//             </div>

//             <button
//               onClick={handleBookNow}
//               className=" bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from "react";
// import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import truck from "../../public/images/shipping-truck.png";

import placeholder1 from "../../public/images/placeholder1.png";
import placeholder2 from "../../public/images/placeholder2.jpg";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Image slideshow array - keeping original first image and adding placeholders
  const slideImages = [
    "/images/n7.jpeg", // Original image from your code
    placeholder1, // Placeholder image 1
    placeholder2, // Placeholder image 2
  ];

  const mobileSlideImages = [
    "/images/woman-delivering-package-man.jpg", // Original mobile image from your code
    placeholder1, // Placeholder image 1
    placeholder2, // Placeholder image 2
  ];

  useEffect(() => {
    // Trigger the animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay to ensure smooth animation

    return () => clearTimeout(timer);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slideImages.length]);

  const handleClick = () => {
    // Navigate to domestic page
    console.log("Navigate to domestic");
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookNow = () => {
    // Handle booking logic here
    console.log("Booking data:", formData);
    navigate("/domestic");
  };

  return (
    <section className="mt-20 relative">
      {/* Desktop Layout */}
      <div className="hidden lg:block h-[90vh]">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 h-[80vh] overflow-hidden">
          {slideImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        {/* Gradient Overlay from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent h-[80vh]"></div>

        {/* Slide Indicators - Hidden on small screens */}
        <div className="absolute bottom-32 left-20 z-20 hidden md:flex space-x-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-yellow-500 scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-20 pt-40">
          {/* Main Content with Animation */}
          <div
            className={`max-w-2xl mb-16 mt-20 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center gap-x-2 mb-4">
              <div className="bg-neutral-50 rounded-lg px-3 py-2.5">
                <img src={truck} alt="shipping truck img" className="w-8 h-8" />
              </div>
              <span className="text-neutral-50 px-1 font-medium text-base">
                Excess Baggage
              </span>
            </div>

            {/* Main Heading */}
            <div className="text-5xl sm:text-7xl font-bold text-neutral-50 tracking-tight mb-2">
              We handle,
              <div className="sm:pt-2 pt-0">You Travel</div>
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-lg font-medium mb-5 mt-5 max-w-lg">
              Door-to-door luggage delivery across India — safe, reliable, and
              affordable.
            </p>

            {/* Book Now Button */}
            <button
              onClick={handleClick}
              className="bg-yellow-500 hover:scale-105 text-md px-10 py-3 transition-all duration-200 rounded-lg text-neutral-50 hover:cursor-pointer font-medium"
            >
              Book a Pickup
            </button>
          </div>

          {/* Centered Booking Card with Animation */}
          <div
            className={`flex justify-center transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-4xl">
              {/* Form Fields in a row */}
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
                  />
                </div>

                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
                  />
                </div>

                <div className="flex flex-1">
                  <div className="flex items-center px-3 py-3 border border-gray-300 rounded-l-lg border-r-0 bg-gray-50">
                    <span className="text-gray-600 text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:border-transparent"
                  />
                </div>

                <button
                  onClick={handleBookNow}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 whitespace-nowrap"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-screen relative">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 h-[70vh] overflow-hidden">
          {mobileSlideImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 bg-opacity-100 h-[70vh]"></div>

        {/* Mobile Slide Indicators - Hidden on small screens */}
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex space-x-2">
          {mobileSlideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-yellow-500 scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Content positioned at bottom with Animation */}
        <div className="relative z-10 h-full flex flex-col pt-20 px-6">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-neutral-200 font-medium text-sm">
                Excess Baggage
              </span>
            </div>

            {/* Main Heading */}
            <div className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Travel Light,
              <br />
              Arrive Happy
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-lg mb-3">
              Door-to-door luggage delivery across India — safe, reliable, and
              affordable.
            </p>
          </div>
        </div>

        {/* Mobile Booking Card - Fixed at bottom with Animation */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-lg p-6 mx-6 shadow-lg lg:hidden transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Tab Header */}
          <div className="mb-4">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button className="bg-yellow-500 text-white py-2 px-4 text-sm font-medium rounded-md">
                Domestic
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-3 mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              value={formData.email}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex">
              <div className="flex items-center px-3 py-2 border border-gray-300 rounded-l-lg border-r-0 bg-gray-50">
                <span className="text-gray-600 text-xs">+91</span>
              </div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg text-sm"
              />
            </div>

            <button
              onClick={handleBookNow}
              className=" bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
