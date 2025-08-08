import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import logo from "../../public/images/Excess-logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/domestic");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <img src={logo} alt="Logo" className="w-28 h-20" />
              {/* <span className="text-yellow-500">Xcess img</span> */}
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About{" "}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact{" "}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              How We Work{" "}
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-gray-900">
              Tracking
            </a> */}
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleClick}
              className="bg-yellow-500 hover:bg-yellow-500 text-neutral-50 hover:cursor-pointer"
            >
              Book Now
            </Button>

            <Button variant="outline" size="icon" className="rounded-full">
              <UserRound />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
