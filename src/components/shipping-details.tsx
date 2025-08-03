import { Search, Package, Plus, Minus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface BagOption {
  id: string;
  name: string;
  maxWeight: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
}

interface ShippingDetailsProps {
  shipFrom: string;
  setShipFrom: (value: string) => void;
  shipTo: string;
  setShipTo: (value: string) => void;
  bagOptions: BagOption[];
  updateBagQuantity: (bagId: string, change: number) => void;
}

export default function ShippingDetails({
  shipFrom,
  setShipFrom,
  shipTo,
  setShipTo,
  bagOptions,
  updateBagQuantity,
}: ShippingDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Enter Locations */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Enter Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="ship-from"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Ship From
              </Label>
              <div className="relative">
                <Input
                  id="ship-from"
                  value={shipFrom}
                  onChange={(e) => setShipFrom(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <Label
                htmlFor="ship-to"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Ship To
              </Label>
              <div className="relative">
                <Input
                  id="ship-to"
                  value={shipTo}
                  onChange={(e) => setShipTo(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Bags */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Bags</h2>
          <div className="space-y-3">
            {bagOptions.map((bag) => (
              <div
                key={bag.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">
                        {bag.name}
                      </span>
                      <Info className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="line-through">₹{bag.originalPrice}</span>
                      <span className="ml-2 font-medium text-green-600">
                        ₹{bag.discountedPrice}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {bag.quantity > 0 ? (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-transparent"
                        onClick={() => updateBagQuantity(bag.id, -1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {bag.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-transparent"
                        onClick={() => updateBagQuantity(bag.id, 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white"
                      onClick={() => updateBagQuantity(bag.id, 1)}
                    >
                      Add
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
