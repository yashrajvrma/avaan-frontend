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
import { cn } from "@/lib/utils";

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
    <div className="space-y-4 max-w-xs">
      {currentStep === 1 && (
        <Card>
          <CardContent className="px-4">
            <div className="text-xl font-semibold tracking-tight text-neutral-900 mb-4">
              Choose Shipment Mode
              <div className="w-full h-0.5 bg-neutral-200 mt-2"></div>
            </div>
            <RadioGroup
              value={selectedMode}
              onValueChange={setSelectedMode}
              className="space-y-4"
            >
              <div
                className={cn(
                  "flex flex-col p-4 border rounded-lg",
                  selectedMode === "express" ? "bg-yellow-50" : "bg-white"
                )}
              >
                <div className="flex justify-between">
                  <div className="flex gap-x-3 items-center">
                    <RadioGroupItem
                      className="w-6 h-6"
                      value="express"
                      id="express"
                    />

                    <Label
                      htmlFor="express"
                      className="font-semibold cursor-pointer text-xl text-neutral-500"
                    >
                      Express
                    </Label>
                  </div>

                  <div className="flex flex-col gap-y-0.5 text-sm text-neutral-600">
                    <span className="text-sm">Delivery</span>
                    <div className="text-lg font-semibold">7 Days</div>
                  </div>
                </div>

                <div className="w-full h-0.5 bg-neutral-400 mt-2"></div>
                <div className="flex justify-between mt-2">
                  <span className="text-yellow-500 text-xl font-semibold">
                    Total
                  </span>
                  <span className="text-yellow-500 text-xl font-semibold">
                    ₹ 450
                  </span>
                </div>
              </div>
              <div
                className={cn(
                  "flex flex-col p-4 border rounded-lg",
                  selectedMode === "priority" ? "bg-yellow-50" : "bg-white"
                )}
              >
                <div className="flex justify-between gap-x-3">
                  <div className="flex gap-x-3 items-center">
                    <RadioGroupItem
                      className="w-6 h-6"
                      value="priority"
                      id="priority"
                    />

                    <Label
                      htmlFor="priority"
                      className="font-semibold cursor-pointer text-xl text-neutral-500"
                    >
                      Priority
                    </Label>
                  </div>

                  <div className="flex flex-col gap-y-0.5 text-sm text-neutral-600">
                    <span className="text-sm">Delivery</span>
                    <div className="text-lg font-semibold">3 Days</div>
                  </div>
                </div>

                <div className="w-full h-0.5 bg-neutral-400 mt-2"></div>
                <div className="flex justify-between mt-2">
                  <span className="text-yellow-500 text-xl font-semibold">
                    Total
                  </span>
                  <span className="text-yellow-500 text-xl font-semibold">
                    ₹ 950
                  </span>
                </div>
              </div>
              {/* <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <RadioGroupItem value="priority" id="priority" />
                <div className="flex-1">
                  <Label
                    htmlFor="priority"
                    className="font-medium cursor-pointer"
                  >
                    Priority
                  </Label>
                  <div className="text-sm text-neutral-600">
                    <span className="text-xs">Delivery</span>
                    <div className="font-semibold">3 Days</div>
                  </div>
                </div>
              </div> */}
            </RadioGroup>

            {/* <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-neutral-900">Total</span>
                <span className="text-xl font-bold text-neutral-900">
                  ₹{total}
                </span>
              </div>
            </div> */}
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Price Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-600">Freight Charge</span>
                <span className="font-medium">₹381.35</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">ODA Charges</span>
                <span className="font-medium">₹850.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">GST @18%</span>
                <span className="font-medium">₹221.64</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-900">Total</span>
                  <span className="text-xl font-bold text-neutral-900">
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
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Price Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-600">Freight Charge</span>
                <span className="font-medium">₹381.35</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">GST @18%</span>
                <span className="font-medium">₹68.64</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-900">Total</span>
                  <span className="text-xl font-bold text-neutral-900">
                    ₹450
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6 py-4 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                {/* <span className="text-xl font-bold">💰</span> */}
              </div>
              <div>
                <div className="text-center font-medium text-sm">
                  Earn 5% Avaan Coins with this booking
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Coupon Code */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Coupon Code
          </h3>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
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
                <h3 className="text-lg font-semibold text-neutral-900">
                  Things to keep in mind
                </h3>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    thingsExpanded ? "rotate-90" : ""
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <div className="text-sm text-neutral-600 space-y-2">
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
