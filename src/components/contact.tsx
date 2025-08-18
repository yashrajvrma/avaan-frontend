import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const googleMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5292710653093!2d72.81665487593494!3d18.996385554465615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfa40bc2cc35%3A0xe26bb585072d9ae!2sScorpion%20Containers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1755456675122!5m2!1sen!2sin";

  return (
    <div className="min-h-screen mt-20">
      {/* Header Banner */}
      <div className="bg-gray-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Have any queries? We're all ears!
          </div>
          <p className="sm:text-base text-sm text-gray-300">
            Our team is trained, equipped & ready to guide you from scratch to
            success.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-lg py-6 px-5 border-1">
            <div className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
              We'd like to get to know you better.
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-vertical"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                // @ts-ignore
                onSubmit={() => handleSubmit()}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-8">
            <div className="p-2 w-full h-72 rounded-lg border-1 overflow-hidden">
              {/* <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Interactive Map Location</p>
                    <p className="text-xs">Xcess - Excess Baggage</p>
                  </div>
                </div>

                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>
              </div> */}
              <iframe
                title="template google map"
                src={googleMapUrl}
                className="map w-full h-full"
                allowFullScreen
              ></iframe>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="border-1 rounded-lg shadow-xs p-6 flex items-center space-x-4">
                <div className=" p-3 rounded-full">
                  <Phone className="sm:w-10 sm:h-10 w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Call Us At
                  </h3>
                  <p className="text-gray-600">+91 1800221945</p>
                </div>
              </div>

              {/* Email */}
              <div className="border-1 rounded-lg shadow-xs p-6 flex items-center space-x-4">
                <div className=" p-3 rounded-full">
                  <Mail className="sm:w-10 sm:h-10 w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Write to us
                  </h3>
                  <p className="text-gray-600">customerservice@xcess.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="border-1 rounded-lg shadow-xs p-6 flex items-center space-x-4">
                <div className=" p-3 rounded-full">
                  <MapPin className="sm:w-10 sm:h-10 w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Visit us
                  </h3>
                  <p className="text-gray-600">
                    610, Shah & Nahar Industrial Estate, Dr.E.Moses Road, Worli,
                    Mumbai, India - 400018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
