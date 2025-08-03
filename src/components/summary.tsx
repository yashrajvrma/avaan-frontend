import { Package, MapPin, Calendar, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  const selectedBags = bagOptions.filter((bag) => bag.quantity > 0);
  const totalBags = selectedBags.reduce((sum, bag) => sum + bag.quantity, 0);
  const totalWeight = selectedBags.reduce(
    (sum, bag) => sum + bag.quantity * Number.parseInt(bag.maxWeight),
    0
  );

  return (
    <div className="space-y-6">
      {/* Shipment Overview */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Shipment Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">From</p>
                  <p className="text-sm text-gray-600">{shipFrom}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">To</p>
                  <p className="text-sm text-gray-600">{shipTo}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Pickup Date
                  </p>
                  <p className="text-sm text-gray-600">
                    {pickupDate || "Not selected"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CreditCard className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Delivery Mode
                  </p>
                  <Badge
                    variant={
                      selectedMode === "express" ? "default" : "secondary"
                    }
                  >
                    {selectedMode === "express"
                      ? "Express (7 Days)"
                      : "Priority (3 Days)"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Bags */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Selected Bags
          </h2>
          {selectedBags.length > 0 ? (
            <div className="space-y-3">
              {selectedBags.map((bag) => (
                <div
                  key={bag.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">{bag.name}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {bag.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">
                      ₹{(bag.discountedPrice * bag.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{(bag.originalPrice * bag.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">
                      Total: {totalBags} bags
                    </p>
                    <p className="text-sm text-gray-600">
                      Estimated weight: {totalWeight} kg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No bags selected</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Additional Services */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Additional Services
          </h2>
          <div className="flex items-center space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <Shield className="w-5 h-5 text-yellow-600" />
            <div>
              <p className="font-medium text-gray-900">Avaan Protect</p>
              <p className="text-sm text-gray-600">
                Insurance coverage up to ₹5000
              </p>
            </div>
            <Badge variant="outline" className="ml-auto">
              ₹100
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Important Notes
          </h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Pickup timings are from 12 PM to 8 PM</p>
            <p>• Please ensure all items are properly packed</p>
            <p>• Prohibited items are not allowed in shipments</p>
            <p>• Keep pickup address accessible during pickup hours</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
