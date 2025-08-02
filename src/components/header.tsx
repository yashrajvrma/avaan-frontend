import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 sm:p-6">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center">
          <div className="text-yellow-400 font-bold text-lg sm:text-xl">X</div>
        </div>
        <div className="text-black">
          <div className="font-bold text-base sm:text-lg">XCESS</div>
          <div className="text-xs sm:text-sm">LUGGAGE</div>
        </div>
      </div>
      <Button className="bg-black text-white hover:bg-gray-800 px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base">
        Login
      </Button>
    </header>
  );
}
