import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import type { FormData } from "@/components/estimate-card";

interface Package {
  id: number;
  name: string;
  qty: number;
  weight: string;
  amount: string;
}

interface TripInfoFormProps {
  formData: FormData;
  onFormDataChange: (field: keyof FormData, value: string) => void;
}

export default function TripInfoForm({
  formData,
  onFormDataChange,
}: TripInfoFormProps) {
  const [packages, setPackages] = useState<Package[]>([
    {
      id: 1,
      name: "Extra Small bag",
      qty: 0,
      weight: "00.00",
      amount: "00.00",
    },
    { id: 2, name: "Small Bag", qty: 0, weight: "00.00", amount: "00.00" },
    { id: 3, name: "Medium Bag", qty: 0, weight: "00.00", amount: "00.00" },
    { id: 4, name: "Large Bag", qty: 0, weight: "00.00", amount: "00.00" },
    {
      id: 5,
      name: "Extra Large bag",
      qty: 0,
      weight: "00.00",
      amount: "00.00",
    },
  ]);

  const updatePackageQty = (id: number, change: number) => {
    setPackages((packages) =>
      packages.map((pkg) =>
        pkg.id === id ? { ...pkg, qty: Math.max(0, pkg.qty + change) } : pkg
      )
    );
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-3 block">
              Drop Point City <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Drop Point City"
              value={formData.dropPointCity}
              onChange={(e) =>
                onFormDataChange("dropPointCity", e.target.value)
              }
              className="w-full"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-3 block">
              Pincode <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Pincode"
              value={formData.dropPointPincode}
              onChange={(e) =>
                onFormDataChange("dropPointPincode", e.target.value)
              }
              className="w-full"
            />
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-4">
            Add Packages
          </h3>
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border overflow-x-auto">
            <div className="min-w-[300px]">
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-gray-600 mb-4 pb-2 border-b border-gray-200">
                <div>QTY</div>
                <div>Item</div>
                <div>Weight</div>
                <div>Amount</div>
              </div>

              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="grid grid-cols-4 gap-2 sm:gap-4 items-center py-2 sm:py-3 border-b border-gray-200 last:border-b-0 transition-all duration-200 hover:bg-gray-100 rounded"
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updatePackageQty(pkg.id, -1)}
                      className="w-6 h-6 sm:w-7 sm:h-7 p-0 hover:bg-red-50 hover:border-red-300 transition-colors duration-200"
                      disabled={pkg.qty === 0}
                    >
                      <Minus className="w-2 h-2 sm:w-3 sm:h-3" />
                    </Button>
                    <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-medium">
                      {pkg.qty.toString().padStart(2, "0")}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updatePackageQty(pkg.id, 1)}
                      className="w-6 h-6 sm:w-7 sm:h-7 p-0 hover:bg-green-50 hover:border-green-300 transition-colors duration-200"
                    >
                      <Plus className="w-2 h-2 sm:w-3 sm:h-3" />
                    </Button>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    {pkg.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {pkg.weight}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {pkg.amount}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t-2 border-gray-300 font-medium text-gray-800 text-xs sm:text-sm">
                <div></div>
                <div>Total</div>
                <div>00.00</div>
                <div>00.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4 sm:pt-6">
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
          Add Drop Point
        </Button>
      </div>
    </div>
  );
}
