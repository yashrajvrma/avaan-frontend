import { useState } from "react";
import { User, LogOut } from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    emailAddress: "",
  });

  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  // @ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    setShowLogoutDialog(false);
  };

  // @ts-ignore
  const handleMenuItemClick = (label) => {
    if (label === "Log out") {
      setShowLogoutDialog(true);
    }
  };

  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: "Profile", active: true },
    // { icon: <Package className="w-5 h-5" />, label: "My Orders" },
    // { icon: <MapPin className="w-5 h-5" />, label: "Saved Addresses" },
    // { icon: <Coins className="w-5 h-5" />, label: "Avaan Coins" },
    // { icon: <Share2 className="w-5 h-5" />, label: "Refer and Earn" },
    { icon: <LogOut className="w-5 h-5" />, label: "Log out" },
  ];

  return (
    <div className="sm:mt-28 mt-20 mb-44">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="text-2xl font-medium tracking-tight sm:hidden ">
            Account Setting
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {" "}
            <div className="bg-white rounded-lg">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleMenuItemClick(item.label)}
                  className={`flex items-center space-x-3 px-6 py-4 border-b border-gray-100 last:border-b-0 cursor-pointer ${
                    item.active
                      ? "bg-yellow-50 border-1 border-yellow-500 text-yellow-600 rounded-lg"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border py-5 px-5">
              <div className="mb-4">
                <div className="text-2xl font-bold text-neutral-900 mb-2">
                  Profile
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                    />
                  </div>
                </div>

                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 rounded-md">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 w-full">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Confirm Logout
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowLogoutDialog(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 font-medium"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
