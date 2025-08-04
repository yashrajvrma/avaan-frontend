import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface AdditionalDetailsProps {
  pickupDate: string;
  setPickupDate: (value: string) => void;
  termsExpanded: boolean;
  setTermsExpanded: (value: boolean) => void;
}

export default function AdditionalDetails({
  pickupDate,
  setPickupDate,
  termsExpanded,
  setTermsExpanded,
}: AdditionalDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Add Address Details */}
      <Card className="py-0">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Add Address Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Pickup Address
              </Label>
              <Button
                variant="outline"
                className="w-full justify-between bg-transparent hover:bg-gray-50"
              >
                Add Complete Pickup Address
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Delivery Address
              </Label>
              <Button
                variant="outline"
                className="w-full justify-between bg-transparent hover:bg-gray-50"
              >
                Add Complete Delivery Address
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Avaan Protect */}
      <Card className="py-0">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Avaan Protect
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="protect" />
              <Label htmlFor="protect" className="text-sm text-gray-700">
                Secure your shipment for ₹100 (₹5000 max coverage)
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pickup Timings */}
      <Card className="py-0">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Pickup Timings
          </h2>
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="pickup-date"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Pickup Date
              </Label>
              <Input
                id="pickup-date"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                placeholder="Select Pickup Date"
                className="w-full"
              />
            </div>
            <div className="bg-yellow-50 border border-purple-200 rounded-lg p-3">
              <p className="text-sm text-yellow-700">
                <strong>Important Info:</strong> Our pickup timings are from 12
                PM to 8 PM.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <Card className="py-0">
        <CardContent className="p-6">
          <Collapsible open={termsExpanded} onOpenChange={setTermsExpanded}>
            <CollapsibleTrigger className="flex items-center justify-between w-full">
              <h2 className="text-xl font-semibold text-gray-900">
                Terms and Conditions
              </h2>
              <ChevronRight
                className={`w-5 h-5 transition-transform ${
                  termsExpanded ? "rotate-90" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms1" />
                <Label
                  htmlFor="terms1"
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  I agree with the Terms & Conditions and guarantee that the
                  shipment does not contain any restricted items, declare that
                  the contents of the parcel are mentioned correctly.
                  Declaration: See Avaan Protection Terms and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Conditions here
                  </a>
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms2" />
                <Label
                  htmlFor="terms2"
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  I would like to receive offers/product/service related news,
                  updates and communication from Avaan.
                </Label>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
}
