import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRound, Menu, X } from "lucide-react";
import logo from "../../public/images/Excess-logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/domestic");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md z-50 fixed top-0 w-full left-0">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-20 min-w-0">
            <div className="flex items-center flex-shrink-0">
              <div className="text-2xl font-bold">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-20 h-12 sm:w-28 sm:h-20 object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                How We Work
              </a>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <Button
                onClick={handleClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                Book Now
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <UserRound />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <UserRound />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMenu}
                className="rounded-full"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          {/* Menu Header */}
          <div className="flex justify-between items-center h-20 px-4 border-b border-gray-200">
            <img src={logo} alt="Logo" className="w-20 h-12 object-contain" />
            <Button
              variant="outline"
              size="icon"
              onClick={closeMenu}
              className="rounded-full"
            >
              <X />
            </Button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col h-full pt-8 pb-20">
            <nav className="flex-1 px-6">
              <div className="space-y-6">
                <a
                  href="#"
                  className="block text-gray-800 hover:text-yellow-500 py-4 text-2xl font-medium border-b border-gray-100 transition-colors"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-yellow-500 py-4 text-2xl font-medium border-b border-gray-100 transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-yellow-500 py-4 text-2xl font-medium border-b border-gray-100 transition-colors"
                  onClick={closeMenu}
                >
                  How We Work
                </a>
              </div>
            </nav>

            {/* Bottom Section with Book Now Button */}
            <div className="px-6 pt-8 border-t border-gray-200">
              <Button
                onClick={() => {
                  handleClick();
                  closeMenu();
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 text-lg font-medium"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop - Optional if you want to prevent body scroll */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
