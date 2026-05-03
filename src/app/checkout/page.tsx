"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StoreProvider, useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, CreditCard, Lock } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

function CheckoutContent() {
  const router = useRouter()
  const { cart, cartTotal, clearCart } = useStore()
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const shipping = cartTotal >= 500 ? 0 : 25
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  if (cart.length === 0 && step !== "confirmation") {
    router.push("/cart")
    return null
  }

  const handlePlaceOrder = () => {
    clearCart()
    setStep("confirmation")
  }

  if (step === "confirmation") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-20 max-w-lg">
            <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-3xl mb-4">Thank You for Your Order</h1>
            <p className="text-muted-foreground mb-2">
              Order confirmation has been sent to your email.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Order #LX{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <Button asChild variant="luxury" size="lg">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* Back Link */}
          <Link 
            href="/cart" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Bag
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl mb-8">Checkout</h1>

              {/* Steps */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setStep("shipping")}
                  className={`text-sm ${step === "shipping" ? "font-medium" : "text-muted-foreground"}`}
                >
                  1. Shipping
                </button>
                <div className="h-px w-8 bg-border" />
                <button
                  onClick={() => step === "payment" && setStep("payment")}
                  className={`text-sm ${step === "payment" ? "font-medium" : "text-muted-foreground"}`}
                  disabled={step === "shipping"}
                >
                  2. Payment
                </button>
              </div>

              {step === "shipping" && (
                <div className="space-y-6">
                  <h2 className="font-medium text-lg">Contact Information</h2>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </Field>
                  </FieldGroup>

                  <Separator />

                  <h2 className="font-medium text-lg">Shipping Address</h2>
                  <FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                        <Input id="firstName" placeholder="First name" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                        <Input id="lastName" placeholder="Last name" />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="address">Address</FieldLabel>
                      <Input id="address" placeholder="Street address" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="apartment">Apartment, suite, etc. (optional)</FieldLabel>
                      <Input id="apartment" placeholder="Apt, Suite, Unit" />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="city">City</FieldLabel>
                        <Input id="city" placeholder="City" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="state">State</FieldLabel>
                        <Select>
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                            <SelectItem value="fl">Florida</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="zip">ZIP Code</FieldLabel>
                        <Input id="zip" placeholder="ZIP" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="phone">Phone</FieldLabel>
                        <Input id="phone" type="tel" placeholder="Phone number" />
                      </Field>
                    </div>
                  </FieldGroup>

                  <div className="flex items-center gap-2">
                    <Checkbox id="save-address" />
                    <Label htmlFor="save-address" className="text-sm text-muted-foreground">
                      Save this address for future orders
                    </Label>
                  </div>

                  <Button variant="luxury" className="w-full" size="lg" onClick={() => setStep("payment")}>
                    Continue to Payment
                  </Button>
                </div>
              )}

              {step === "payment" && (
                <div className="space-y-6">
                  <h2 className="font-medium text-lg">Payment Method</h2>

                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="border border-border p-4 flex items-center gap-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 flex-1 cursor-pointer">
                        <CreditCard className="h-5 w-5" />
                        Credit Card
                      </Label>
                    </div>
                    <div className="border border-border p-4 flex items-center gap-4">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        PayPal
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <FieldGroup className="mt-6">
                      <Field>
                        <FieldLabel htmlFor="cardNumber">Card Number</FieldLabel>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </Field>
                      <div className="grid grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="expiry">Expiry Date</FieldLabel>
                          <Input id="expiry" placeholder="MM/YY" />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="cvv">CVV</FieldLabel>
                          <Input id="cvv" placeholder="123" />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="cardName">Name on Card</FieldLabel>
                        <Input id="cardName" placeholder="Name as shown on card" />
                      </Field>
                    </FieldGroup>
                  )}

                  <Separator />

                  <h2 className="font-medium text-lg">Billing Address</h2>
                  <div className="flex items-center gap-2">
                    <Checkbox id="same-address" defaultChecked />
                    <Label htmlFor="same-address" className="text-sm text-muted-foreground">
                      Same as shipping address
                    </Label>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    Your payment information is encrypted and secure
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline-subtle" className="flex-1" size="lg" onClick={() => setStep("shipping")}>
                      Back
                    </Button>
                    <Button variant="luxury" className="flex-1" size="lg" onClick={handlePlaceOrder}>
                      Place Order
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-secondary p-6 md:p-8 sticky top-24">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                      <div className="relative w-16 aspect-[3/4] bg-muted overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                        <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs w-5 h-5 flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        {item.selectedSize && (
                          <p className="text-xs text-muted-foreground">Size: {item.selectedSize}</p>
                        )}
                        {item.selectedColor && (
                          <p className="text-xs text-muted-foreground">Color: {item.selectedColor}</p>
                        )}
                      </div>
                      <p className="text-sm">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Complimentary" : `$${shipping}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <StoreProvider>
      <CheckoutContent />
    </StoreProvider>
  )
}
