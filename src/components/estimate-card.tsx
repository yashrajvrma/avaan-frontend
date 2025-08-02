import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import TabNavigation from "./TabNavigation";
import ScheduleTripForm from "./ScheduleTripForm";
import TripInfoForm from "./TripInfoForm";

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
    <Card className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
          Get Estimate
        </h2>

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
            onFormDataChange={handleFormDataChange}
          />
        )}
      </CardContent>
    </Card>
  );
}
