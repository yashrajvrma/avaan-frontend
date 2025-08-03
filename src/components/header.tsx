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

// Example layout showing how to handle the fixed header
function Layout({ children }) {
  return (
    <div>
      <Header />
      {/* Add padding-top to prevent content from being hidden behind fixed header */}
      <main className="pt-16">{children}</main>
    </div>
  );
}

// Demo content to show the fixed header in action
function App() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Page Content</h1>
          <p className="text-gray-600">
            This content is below the fixed header. Notice how the header stays
            at the top when you scroll.
          </p>

          {/* Add some dummy content to demonstrate scrolling */}
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Section {i + 1}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
