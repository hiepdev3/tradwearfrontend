import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Check,
  CreditCard,
  Truck,
  User,
  FileText,
  Shield,
  Minus,
  Plus,
  Tag,
  ArrowLeft,
  Lock,
} from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  method: string;
}

interface PaymentInfo {
  cardNumber: string;
  nameOnCard: string;
  expiryDate: string;
  cvv: string;
  sameAsBilling: boolean;
}

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    method: "standard",
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvv: "",
    sameAsBilling: true,
  });
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Sample cart items
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Pho Bowl Tee",
      image: "/placeholder.svg",
      color: "Charcoal",
      size: "M",
      quantity: 2,
      price: 32,
    },
    {
      id: 2,
      name: "Dong Ho Painting Hoodie",
      image: "/placeholder.svg",
      color: "Navy",
      size: "L",
      quantity: 1,
      price: 58,
    },
  ];

  const steps = [
    { number: 1, label: "Information", icon: User },
    { number: 2, label: "Shipping", icon: Truck },
    { number: 3, label: "Payment", icon: CreditCard },
    { number: 4, label: "Review", icon: FileText },
  ];

  const shippingMethods = [
    {
      id: "standard",
      label: "Standard Shipping",
      price: 5.99,
      time: "5-7 business days",
    },
    {
      id: "express",
      label: "Express Shipping",
      price: 12.99,
      time: "2-3 business days",
    },
    {
      id: "free",
      label: "Free Shipping",
      price: 0,
      time: "7-10 business days",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost =
    shippingMethods.find((method) => method.id === shippingInfo.method)
      ?.price || 0;
  const tax = subtotal * 0.08;
  const discount = promoApplied ? 10 : 0;
  const total = subtotal + shippingCost + tax - discount;

  const updateQuantity = (id: number, change: number) => {
    // In a real app, this would update the cart state
    console.log(`Update quantity for item ${id} by ${change}`);
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoApplied(true);
    }
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

  const placeOrder = () => {
    console.log("Order placed:", {
      customerInfo,
      shippingInfo,
      paymentInfo,
      cartItems,
      total,
    });
  };

  const isStepComplete = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return (
          customerInfo.firstName && customerInfo.lastName && customerInfo.email
        );
      case 2:
        return (
          shippingInfo.address &&
          shippingInfo.city &&
          shippingInfo.state &&
          shippingInfo.zipCode
        );
      case 3:
        return (
          paymentInfo.cardNumber &&
          paymentInfo.nameOnCard &&
          paymentInfo.expiryDate &&
          paymentInfo.cvv
        );
      default:
        return false;
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="min-h-screen bg-tradwear-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center flex-1"
              >
                <div className="flex items-center w-full">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${
                      currentStep === step.number
                        ? "bg-tradwear-green text-white"
                        : currentStep > step.number
                          ? "bg-tradwear-green text-white"
                          : "bg-white border-2 border-gray-300 text-gray-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-0.5 mx-4">
                      <div className="h-full bg-gray-200 rounded">
                        <motion.div
                          className="h-full bg-tradwear-green rounded"
                          initial={{ width: "0%" }}
                          animate={{
                            width: currentStep > step.number ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    currentStep >= step.number
                      ? "text-tradwear-green"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side - Forms */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: Customer Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Customer Information
                          </h2>
                          <p className="text-gray-600">
                            Enter your details to continue with your order.
                          </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              value={customerInfo.firstName}
                              onChange={(e) =>
                                setCustomerInfo({
                                  ...customerInfo,
                                  firstName: e.target.value,
                                })
                              }
                              className="mt-2 rounded-xl"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              value={customerInfo.lastName}
                              onChange={(e) =>
                                setCustomerInfo({
                                  ...customerInfo,
                                  lastName: e.target.value,
                                })
                              }
                              className="mt-2 rounded-xl"
                              placeholder="Enter your last name"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={customerInfo.email}
                            onChange={(e) =>
                              setCustomerInfo({
                                ...customerInfo,
                                email: e.target.value,
                              })
                            }
                            className="mt-2 rounded-xl"
                            placeholder="Enter your email address"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={customerInfo.phone}
                            onChange={(e) =>
                              setCustomerInfo({
                                ...customerInfo,
                                phone: e.target.value,
                              })
                            }
                            className="mt-2 rounded-xl"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="pt-6">
                          <Button
                            onClick={nextStep}
                            disabled={!isStepComplete(1)}
                            className="w-full bg-tradwear-green hover:bg-tradwear-dark-green text-white py-6 text-lg rounded-xl button-glow"
                          >
                            Continue to Shipping
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Shipping */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Shipping Information
                          </h2>
                          <p className="text-gray-600">
                            Where should we send your order?
                          </p>
                        </div>
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            value={shippingInfo.address}
                            onChange={(e) =>
                              setShippingInfo({
                                ...shippingInfo,
                                address: e.target.value,
                              })
                            }
                            className="mt-2 rounded-xl"
                            placeholder="Enter your street address"
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              value={shippingInfo.city}
                              onChange={(e) =>
                                setShippingInfo({
                                  ...shippingInfo,
                                  city: e.target.value,
                                })
                              }
                              className="mt-2 rounded-xl"
                              placeholder="City"
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State</Label>
                            <Input
                              id="state"
                              value={shippingInfo.state}
                              onChange={(e) =>
                                setShippingInfo({
                                  ...shippingInfo,
                                  state: e.target.value,
                                })
                              }
                              className="mt-2 rounded-xl"
                              placeholder="State"
                            />
                          </div>
                          <div>
                            <Label htmlFor="zipCode">Zip Code</Label>
                            <Input
                              id="zipCode"
                              value={shippingInfo.zipCode}
                              onChange={(e) =>
                                setShippingInfo({
                                  ...shippingInfo,
                                  zipCode: e.target.value,
                                })
                              }
                              className="mt-2 rounded-xl"
                              placeholder="Zip Code"
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Shipping Method</Label>
                          <RadioGroup
                            value={shippingInfo.method}
                            onValueChange={(value) =>
                              setShippingInfo({
                                ...shippingInfo,
                                method: value,
                              })
                            }
                            className="mt-4 space-y-4"
                          >
                            {shippingMethods.map((method) => (
                              <div
                                key={method.id}
                                className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-tradwear-green transition-colors"
                              >
                                <RadioGroupItem
                                  value={method.id}
                                  id={method.id}
                                />
                                <div className="flex-1">
                                  <div className="flex justify-between items-center">
                                    <label
                                      htmlFor={method.id}
                                      className="font-medium text-gray-900 cursor-pointer"
                                    >
                                      {method.label}
                                    </label>
                                    <span className="font-semibold text-tradwear-green">
                                      {method.price === 0
                                        ? "Free"
                                        : `$${method.price}`}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {method.time}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        <div className="flex space-x-4 pt-6">
                          <Button
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1 py-6 text-lg rounded-xl border-gray-300"
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                          </Button>
                          <Button
                            onClick={nextStep}
                            disabled={!isStepComplete(2)}
                            className="flex-1 bg-tradwear-green hover:bg-tradwear-dark-green text-white py-6 text-lg rounded-xl button-glow"
                          >
                            Continue to Payment
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Payment */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Payment Information
                          </h2>
                          <p className="text-gray-600">
                            Your payment information is secure and encrypted.
                          </p>
                        </div>
                        <div className="bg-tradwear-cream p-6 rounded-xl">
                          <div className="flex items-center space-x-3 mb-4">
                            <CreditCard className="w-8 h-8 text-tradwear-green" />
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                Credit Card
                              </h3>
                              <p className="text-sm text-gray-600">
                                We accept all major credit cards
                              </p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input
                                id="cardNumber"
                                value={paymentInfo.cardNumber}
                                onChange={(e) =>
                                  setPaymentInfo({
                                    ...paymentInfo,
                                    cardNumber: e.target.value,
                                  })
                                }
                                className="mt-2 rounded-xl"
                                placeholder="1234 5678 9012 3456"
                              />
                            </div>
                            <div>
                              <Label htmlFor="nameOnCard">Name on Card</Label>
                              <Input
                                id="nameOnCard"
                                value={paymentInfo.nameOnCard}
                                onChange={(e) =>
                                  setPaymentInfo({
                                    ...paymentInfo,
                                    nameOnCard: e.target.value,
                                  })
                                }
                                className="mt-2 rounded-xl"
                                placeholder="Full name as it appears on card"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="expiryDate">
                                  Expiration Date
                                </Label>
                                <Input
                                  id="expiryDate"
                                  value={paymentInfo.expiryDate}
                                  onChange={(e) =>
                                    setPaymentInfo({
                                      ...paymentInfo,
                                      expiryDate: e.target.value,
                                    })
                                  }
                                  className="mt-2 rounded-xl"
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div>
                                <Label htmlFor="cvv">CVV</Label>
                                <Input
                                  id="cvv"
                                  value={paymentInfo.cvv}
                                  onChange={(e) =>
                                    setPaymentInfo({
                                      ...paymentInfo,
                                      cvv: e.target.value,
                                    })
                                  }
                                  className="mt-2 rounded-xl"
                                  placeholder="123"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="sameAsBilling"
                            checked={paymentInfo.sameAsBilling}
                            onCheckedChange={(checked) =>
                              setPaymentInfo({
                                ...paymentInfo,
                                sameAsBilling: checked as boolean,
                              })
                            }
                          />
                          <Label htmlFor="sameAsBilling" className="text-sm">
                            Use same address for billing
                          </Label>
                        </div>
                        <div className="flex space-x-4 pt-6">
                          <Button
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1 py-6 text-lg rounded-xl border-gray-300"
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                          </Button>
                          <Button
                            onClick={nextStep}
                            disabled={!isStepComplete(3)}
                            className="flex-1 bg-tradwear-green hover:bg-tradwear-dark-green text-white py-6 text-lg rounded-xl button-glow"
                          >
                            Review Order
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Review Your Order
                          </h2>
                          <p className="text-gray-600">
                            Please review your information before placing your
                            order.
                          </p>
                        </div>

                        {/* Customer Info Review */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="font-semibold text-gray-900 mb-3">
                            Customer Information
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <p>
                              <span className="font-medium">Name:</span>{" "}
                              {customerInfo.firstName} {customerInfo.lastName}
                            </p>
                            <p>
                              <span className="font-medium">Email:</span>{" "}
                              {customerInfo.email}
                            </p>
                            <p>
                              <span className="font-medium">Phone:</span>{" "}
                              {customerInfo.phone}
                            </p>
                          </div>
                        </div>

                        {/* Shipping Info Review */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="font-semibold text-gray-900 mb-3">
                            Shipping Information
                          </h3>
                          <div className="text-sm space-y-1">
                            <p>{shippingInfo.address}</p>
                            <p>
                              {shippingInfo.city}, {shippingInfo.state}{" "}
                              {shippingInfo.zipCode}
                            </p>
                            <p className="font-medium text-tradwear-green mt-2">
                              {
                                shippingMethods.find(
                                  (m) => m.id === shippingInfo.method,
                                )?.label
                              }
                            </p>
                          </div>
                        </div>

                        {/* Payment Info Review */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="font-semibold text-gray-900 mb-3">
                            Payment Information
                          </h3>
                          <div className="text-sm">
                            <p>
                              <span className="font-medium">Card:</span> ****
                              **** **** {paymentInfo.cardNumber.slice(-4)}
                            </p>
                            <p>
                              <span className="font-medium">Name:</span>{" "}
                              {paymentInfo.nameOnCard}
                            </p>
                          </div>
                        </div>

                        <div className="flex space-x-4 pt-6">
                          <Button
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1 py-6 text-lg rounded-xl border-gray-300"
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                          </Button>
                          <Button
                            onClick={placeOrder}
                            className="flex-1 bg-tradwear-green hover:bg-tradwear-dark-green text-white py-6 text-lg rounded-xl button-glow"
                          >
                            <Lock className="w-4 h-4 mr-2" />
                            Place Order
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="bg-white border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Order Summary
                  </h3>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {item.color}, {item.size}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="font-semibold text-tradwear-green">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6 p-4 bg-tradwear-cream rounded-xl">
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-tradwear-green" />
                      <span className="text-sm font-medium text-gray-900">
                        Promo Code
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 rounded-xl"
                        disabled={promoApplied}
                      />
                      <Button
                        onClick={applyPromoCode}
                        disabled={promoApplied || !promoCode}
                        className="bg-tradwear-green hover:bg-tradwear-dark-green text-white rounded-xl px-4"
                      >
                        {promoApplied ? "Applied" : "Apply"}
                      </Button>
                    </div>
                    {promoApplied && (
                      <p className="text-sm text-tradwear-green mt-2">
                        ✓ WELCOME10 applied - $10 off
                      </p>
                    )}
                  </div>

                  {/* Order Totals */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>${shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-sm text-tradwear-green">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Security Icons */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <Shield className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600 font-medium">
                        Secure Checkout
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 opacity-60">
                      <div className="text-xs font-semibold">VISA</div>
                      <div className="text-xs font-semibold">MASTERCARD</div>
                      <div className="text-xs font-semibold">PAYPAL</div>
                      <div className="text-xs font-semibold">APPLE PAY</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
