import { useState } from "react";
import ScheduleTripForm from "@/components/schedule-trip-form";
import { Card, CardContent } from "./ui/card";
import TripInfoForm from "./trip-info-form";
import TabNavigation from "./trip-navigation";

export interface FormData {
  tripType: string;
  fromCity: string;
  pincode: string;
  transportMode: string;
  dropPointCity: string;
  dropPointPincode: string;
}

export default function EstimateCard() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [formData, setFormData] = useState<FormData>({
    tripType: "return",
    fromCity: "",
    pincode: "",
    transportMode: "air",
    dropPointCity: "",
    dropPointPincode: "",
  });

  const isScheduleFormValid = () => {
    return (
      formData.tripType &&
      formData.fromCity &&
      formData.pincode &&
      formData.transportMode
    );
  };

  const handleTabChange = (tab: string) => {
    if (tab === "info" && !isScheduleFormValid()) {
      return; // Prevent switching to Trip Info if Schedule Trip is not complete
    }
    setActiveTab(tab);
  };

  const handleFormDataChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (isScheduleFormValid()) {
      setActiveTab("info");
    }
  };

  return (
    <Card className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <CardContent className="sm:py-2 sm:px-6">
        <div className="text-sm sm:text-lg font-semibold text-neutral-800 mb-2 sm:mb-3">
          Get Estimate
        </div>

        <TabNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
          isScheduleFormValid={isScheduleFormValid()}
        />

        {activeTab === "schedule" ? (
          <ScheduleTripForm
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNext}
            isFormValid={isScheduleFormValid()}
          />
        ) : (
          <TripInfoForm
            formData={formData}
            onFormDataChange={handleFormDataChange()}
          />
        )}
      </CardContent>
    </Card>
  );
}
