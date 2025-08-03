import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface PriceSidebarProps {
  currentStep: number;
  selectedMode: string;
  setSelectedMode: (mode: string) => void;
  total: number;
  couponCode: string;
  setCouponCode: (code: string) => void;
}

export default function PriceSidebar({
  currentStep,
  selectedMode,
  setSelectedMode,
  total,
  couponCode,
  setCouponCode,
}: PriceSidebarProps) {
  const [thingsExpanded, setThingsExpanded] = useState(false);

  return (
    <div className="space-y-6">
      {currentStep === 1 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Choose Shipment Mode
            </h3>
            <RadioGroup
              value={selectedMode}
              onValueChange={setSelectedMode}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <RadioGroupItem value="express" id="express" />
                <div className="flex-1">
                  <Label
                    htmlFor="express"
                    className="font-medium cursor-pointer"
                  >
                    Express
                  </Label>
                  <div className="text-sm text-gray-600">
                    <span className="text-xs">Delivery</span>
                    <div className="font-semibold">7 Days</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <RadioGroupItem value="priority" id="priority" />
                <div className="flex-1">
                  <Label
                    htmlFor="priority"
                    className="font-medium cursor-pointer"
                  >
                    Priority
                  </Label>
                  <div className="text-sm text-gray-600">
                    <span className="text-xs">Delivery</span>
                    <div className="font-semibold">3 Days</div>
                  </div>
                </div>
              </div>
            </RadioGroup>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-xl font-bold text-gray-900">
                  ₹{total}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Price Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Freight Charge</span>
                <span className="font-medium">₹381.35</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ODA Charges</span>
                <span className="font-medium">₹850.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GST @18%</span>
                <span className="font-medium">₹221.64</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-gray-900">
                    ₹{total}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">💰</span>
                </div>
                <div>
                  <div className="font-semibold">Earn 5% Avaan Coins</div>
                  <div className="text-sm opacity-90">with this booking</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {(currentStep === 3 || currentStep === 4) && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Final Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{total - 100}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avaan Protect</span>
                <span className="font-medium">₹100.00</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-gray-900">
                    ₹{total}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Coupon Code */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Coupon Code
          </h3>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>

      {currentStep === 2 && (
        <Card>
          <CardContent className="p-6">
            <Collapsible open={thingsExpanded} onOpenChange={setThingsExpanded}>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <h3 className="text-lg font-semibold text-gray-900">
                  Things to keep in mind
                </h3>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    thingsExpanded ? "rotate-90" : ""
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Ensure all items are properly packed</p>
                  <p>• Prohibited items are not allowed</p>
                  <p>• Keep pickup address accessible</p>
                  <p>• Have valid ID ready during pickup</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
