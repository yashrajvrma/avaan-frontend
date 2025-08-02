import { Calendar, Info } from "lucide-react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isScheduleFormValid: boolean;
}

export default function TabNavigation({
  activeTab,
  onTabChange,
  isScheduleFormValid,
}: TabNavigationProps) {
  return (
    <div className="flex w-full mb-6 sm:mb-8 font-ge">
      <div className="flex w-full relative">
        {/* Schedule Trip Tab */}
        <button
          onClick={() => onTabChange("schedule")}
          className={`flex-1 flex items-center justify-center text-sm space-x-1 sm:space-x-2 px-3 py-2.5 sm:px-6 rounded-full border-2 transition-all duration-300 ease-in-out ${
            activeTab === "schedule" || activeTab === "info"
              ? "bg-white text-teal-600 border-teal-500 shadow-md"
              : "bg-gray-50 text-gray-600 border-gray-300 hover:border-gray-400"
          }`}
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base">
            Schedule Trip
          </span>
        </button>

        {/* Connecting Line */}
        <div className="flex items-center px-1 sm:px-2">
          <div
            className={`w-4 sm:w-8 h-0.5 transition-colors duration-300 ${
              activeTab === "info" ? "bg-teal-500" : "bg-gray-300"
            }`}
          ></div>
        </div>

        {/* Trip Info Tab */}
        <button
          onClick={() => onTabChange("info")}
          disabled={!isScheduleFormValid}
          className={`flex-1 flex items-center justify-center text-sm space-x-1 sm:space-x-2 py-2.5 px-3 sm:px-6 rounded-full border-2 transition-all duration-300 ease-in-out ${
            activeTab === "info"
              ? "bg-white text-teal-600 border-teal-500 shadow-md"
              : isScheduleFormValid
              ? "bg-gray-50 text-gray-600 border-gray-300 hover:border-gray-400 cursor-pointer"
              : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-60"
          }`}
        >
          <Info className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base">Trip Info</span>
        </button>
      </div>
    </div>
  );
}
