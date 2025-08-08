import {
  CreditCard,
  Wallet,
  Building,
  Smartphone,
  Shield,
  Check,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface PaymentProps {
  total: number;
}

export default function Payment({ total }: PaymentProps) {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, RuPay",
    },
    {
      id: "upi",
      name: "UPI",
      icon: Smartphone,
      description: "Pay using UPI ID or QR code",
    },
    {
      id: "wallet",
      name: "Digital Wallet",
      icon: Wallet,
      description: "Paytm, PhonePe, Google Pay",
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: Building,
      description: "All major banks supported",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Payment Methods */}
      <Card className="py-0">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Select Payment Method
          </h2>
          <RadioGroup
            value={selectedPayment}
            onValueChange={setSelectedPayment}
            className="space-y-3"
          >
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50"
                >
                  <RadioGroupItem value={method.id} id={method.id} />
                  <IconComponent className="w-5 h-5 text-gray-600" />
                  <div className="flex-1">
                    <Label
                      htmlFor={method.id}
                      className="font-medium cursor-pointer"
                    >
                      {method.name}
                    </Label>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Payment Details */}
      {selectedPayment === "card" && (
        <Card className="py-0">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Card Details
            </h3>
            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="card-number"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Card Number
                </Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="expiry"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Expiry Date
                  </Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    maxLength={5}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="cvv"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={3}
                    type="password"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="card-name"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Cardholder Name
                </Label>
                <Input
                  id="card-name"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedPayment === "upi" && (
        <Card className="py-0">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              UPI Payment
            </h3>
            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="upi-id"
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  UPI ID
                </Label>
                <Input id="upi-id" placeholder="yourname@upi" />
              </div>
              <div className="text-center py-8">
                <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">QR Code</p>
                </div>
                <p className="text-sm text-gray-600">Scan QR code to pay</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Security Features */}
      <Card className="py-0">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Secure Payment
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">256-bit SSL encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">PCI DSS compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">Secure payment gateway</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Summary */}
      <Card className="py-0">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Payment Summary
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹{(total - 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Xcess Protect</span>
              <span className="font-medium">₹100.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Processing Fee</span>
              <span className="font-medium">₹0.00</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-900">
                Total Amount
              </span>
              <span className="text-lg font-bold text-gray-900">
                ₹{total.toFixed(2)}
              </span>
            </div>
          </div>
          <Button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white">
            Pay ₹{total.toFixed(2)}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
