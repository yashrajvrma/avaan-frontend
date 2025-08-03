import { Package, ChevronDown, Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

interface BagOption {
  id: string;
  name: string;
  maxWeight: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
}

interface SummaryProps {
  shipFrom: string;
  shipTo: string;
  bagOptions: BagOption[];
  selectedMode: string;
  pickupDate: string;
}

export default function Summary({
  shipFrom,
  shipTo,
  bagOptions,
  selectedMode,
  pickupDate,
}: SummaryProps) {
  const [baggageExpanded, setBaggageExpanded] = useState(true);
  const [addressExpanded, setAddressExpanded] = useState(true);

  const selectedBags = bagOptions.filter((bag) => bag.quantity > 0);

  return (
    <div className="space-y-6">
      {/* Baggage Details */}
      <Card>
        <CardContent className="p-0">
          <Collapsible open={baggageExpanded} onOpenChange={setBaggageExpanded}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-6 hover:bg-gray-50">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  Baggage Details
                </h2>
                <Edit className="w-4 h-4 text-yellow-600" />
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  baggageExpanded ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-6 pb-6 border-t">
                {selectedBags.length > 0 ? (
                  <div className="space-y-3 pt-4">
                    {selectedBags.map((bag) => (
                      <div
                        key={bag.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <Package className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">
                              {bag.name}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            {bag.quantity} x ₹{bag.discountedPrice}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No bags selected</p>
                  </div>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Address Details */}
      <Card>
        <CardContent className="p-0">
          <Collapsible open={addressExpanded} onOpenChange={setAddressExpanded}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-6 hover:bg-gray-50">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  Address Details
                </h2>
                <Edit className="w-4 h-4 text-yellow-600" />
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  addressExpanded ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-6 pb-6 border-t pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-yellow-600 mb-2">
                      Pickup Address
                    </h3>
                    <p className="text-sm text-gray-700">
                      1k1k, kksksks, Mumbai, Maharashtra - 400089 | 9172197403
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-yellow-600 mb-2">
                      Destination Address
                    </h3>
                    <p className="text-sm text-gray-700">
                      jsjsj, jj, Hyderabad, Telangana - 500100 | 9172197403
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-yellow-600 mb-2">
                      Pickup Date
                    </h3>
                    <p className="text-sm text-gray-700">
                      {pickupDate || "06/08/2025"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-yellow-600 mb-2">
                      Pickup Time
                    </h3>
                    <p className="text-sm text-gray-700">12pm to 8pm</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
}
