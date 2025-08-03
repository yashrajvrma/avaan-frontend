import { useState } from "react";
import { Button } from "@/components/ui/button";
import ShippingDetails from "@/components/shipping-details";
import AdditionalDetails from "@/components/additional-details";
import Summary from "@/components/summary";
import Payment from "@/components/payment";
import StepSidebar from "@/components/steps-sidebar";
import PriceSidebar from "@/components/price-sidebar";

interface BagOption {
  id: string;
  name: string;
  maxWeight: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
}

export default function DomesticShipmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shipFrom, setShipFrom] = useState("Mumbai, Maharashtra 4000...");
  const [shipTo, setShipTo] = useState("Hyderabad, Telangana 500...");
  const [selectedMode, setSelectedMode] = useState("express");
  const [pickupDate, setPickupDate] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [termsExpanded, setTermsExpanded] = useState(false);

  const [bagOptions, setBagOptions] = useState<BagOption[]>([
    {
      id: "small",
      name: "Small box | Max: 5 Kgs",
      maxWeight: "5",
      originalPrice: 531.35,
      discountedPrice: 381.35,
      quantity: 1,
    },
    {
      id: "cabin",
      name: "Cabin bag | Max: 10 Kgs",
      maxWeight: "10",
      originalPrice: 962.71,
      discountedPrice: 762.71,
      quantity: 0,
    },
    {
      id: "medium",
      name: "Medium box | Max: 15 Kgs",
      maxWeight: "15",
      originalPrice: 1344.06,
      discountedPrice: 1114.06,
      quantity: 0,
    },
    {
      id: "check-in",
      name: "Check in bag | Max: 20 Kgs",
      maxWeight: "20",
      originalPrice: 1795.42,
      discountedPrice: 1525.42,
      quantity: 0,
    },
    {
      id: "large",
      name: "Large bag | Max: 25 Kgs",
      maxWeight: "25",
      originalPrice: 2106.77,
      discountedPrice: 1906.77,
      quantity: 0,
    },
    {
      id: "xl",
      name: "XL bag | Max: 30 Kgs",
      maxWeight: "30",
      originalPrice: 2468.13,
      discountedPrice: 2288.13,
      quantity: 0,
    },
  ]);

  const steps = [
    { id: 1, name: "Shipping Details", completed: currentStep > 1 },
    { id: 2, name: "Additional Details", completed: currentStep > 2 },
    { id: 3, name: "Summary", completed: currentStep > 3 },
    { id: 4, name: "Payment", completed: false },
  ];

  const updateBagQuantity = (bagId: string, change: number) => {
    setBagOptions((prev) =>
      prev.map((bag) =>
        bag.id === bagId
          ? { ...bag, quantity: Math.max(0, bag.quantity + change) }
          : bag
      )
    );
  };

  const calculateTotal = () => {
    return selectedMode === "express" ? 1453 : 1903;
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ShippingDetails
            shipFrom={shipFrom}
            setShipFrom={setShipFrom}
            shipTo={shipTo}
            setShipTo={setShipTo}
            bagOptions={bagOptions}
            updateBagQuantity={updateBagQuantity}
          />
        );
      case 2:
        return (
          <AdditionalDetails
            pickupDate={pickupDate}
            setPickupDate={setPickupDate}
            termsExpanded={termsExpanded}
            setTermsExpanded={setTermsExpanded}
          />
        );
      case 3:
        return (
          <Summary
            shipFrom={shipFrom}
            shipTo={shipTo}
            bagOptions={bagOptions}
            selectedMode={selectedMode}
            pickupDate={pickupDate}
          />
        );
      case 4:
        return <Payment total={calculateTotal()} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-purple-600">av</span>
                <span className="text-yellow-500">aa</span>
                <span className="text-purple-600">n</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
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
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Book Now
              </Button>
              <Button variant="outline" size="icon">
                📞
              </Button>
              <Button variant="outline" size="icon">
                👤
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create <span className="text-purple-600">A Shipment</span>
          </h1>
          <div className="w-16 h-1 bg-purple-600 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Step Sidebar */}
          <div className="lg:col-span-1">
            <StepSidebar
              steps={steps}
              currentStep={currentStep}
              onStepClick={goToStep}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {renderCurrentStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 bg-transparent"
              >
                <span>← Back</span>
              </Button>
              <Button
                onClick={nextStep}
                disabled={currentStep === 4}
                className="bg-purple-600 hover:bg-purple-700 text-white flex items-center space-x-2"
              >
                <span>Next →</span>
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <PriceSidebar
              currentStep={currentStep}
              selectedMode={selectedMode}
              setSelectedMode={setSelectedMode}
              total={calculateTotal()}
              couponCode={couponCode}
              setCouponCode={setCouponCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
