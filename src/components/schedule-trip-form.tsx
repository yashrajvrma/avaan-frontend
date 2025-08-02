import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plane, Train, Truck } from "lucide-react";
import type { FormData } from "./estimate-card";

interface ScheduleTripFormProps {
  formData: FormData;
  onFormDataChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  isFormValid: boolean;
}

export default function ScheduleTripForm({
  formData,
  onFormDataChange,
  onNext,
  isFormValid,
}: ScheduleTripFormProps) {
  return (
    <div className="space-y-6 animate-in slide-in-from-left duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            Trip Type <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={formData.tripType}
            onValueChange={(value) => onFormDataChange("tripType", value)}
            className="flex space-x-4 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="single"
                id="single"
                className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
              />
              <Label
                htmlFor="single"
                className="cursor-pointer text-sm sm:text-base"
              >
                Single
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="return"
                id="return"
                className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
              />
              <Label
                htmlFor="return"
                className="cursor-pointer text-sm sm:text-base"
              >
                Return
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            Select From City <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.fromCity}
            onValueChange={(value) => onFormDataChange("fromCity", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
              <SelectItem value="kolkata">Kolkata</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            Pincode <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Pincode"
            value={formData.pincode}
            onChange={(e) => onFormDataChange("pincode", e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-700 mb-4 block">
          Transport Mode <span className="text-red-500">*</span>
        </Label>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onFormDataChange("transportMode", "road")}
            className={`flex items-center space-x-2 transition-all duration-200 ${
              formData.transportMode === "road"
                ? "bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-500"
                : "hover:bg-yellow-50 hover:border-yellow-300"
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Road</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => onFormDataChange("transportMode", "train")}
            className={`flex items-center space-x-2 transition-all duration-200 ${
              formData.transportMode === "train"
                ? "bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-500"
                : "hover:bg-yellow-50 hover:border-yellow-300"
            }`}
          >
            <Train className="w-4 h-4" />
            <span>Train</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => onFormDataChange("transportMode", "air")}
            className={`flex items-center space-x-2 transition-all duration-200 ${
              formData.transportMode === "air"
                ? "bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-500"
                : "hover:bg-yellow-50 hover:border-yellow-300"
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>Air</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-center pt-4 sm:pt-6">
        <Button
          onClick={onNext}
          disabled={!isFormValid}
          className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
            isFormValid
              ? "bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg hover:shadow-xl transform hover:scale-105"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
