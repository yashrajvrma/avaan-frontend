import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-yellow-400">Excess</span>
            </div>
          </div>
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Excess Baggage
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Package Delivery
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Airport Transfer
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Tracking
            </a>
          </nav> */}
          <div className="flex items-center space-x-4">
            <Button className="bg-yellow-500 hover:bg-yellow-500 text-neutral-50">
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
