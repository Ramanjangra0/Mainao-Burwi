"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StoreProvider, useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

function CartContent() {
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useStore()

  const shipping = cartTotal >= 500 ? 0 : 25
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-20">
            <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-serif text-3xl mb-4">Your Bag is Empty</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Discover our collection and find something you love.
            </p>
            <Button asChild variant="luxury" size="lg">
              <Link href="/shop">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
          <h1 className="font-serif text-3xl md:text-4xl mb-8">Shopping Bag</h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 md:gap-6 pb-6 border-b border-border">
                    {/* Image */}
                    <Link href={`/product/${item.id}`} className="relative w-24 md:w-32 aspect-[3/4] bg-muted flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link 
                            href={`/product/${item.id}`}
                            className="font-medium hover:text-muted-foreground transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                          {item.selectedColor && (
                            <p className="text-sm text-muted-foreground">Color: {item.selectedColor}</p>
                          )}
                          {item.selectedSize && (
                            <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="h-8 w-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </button>
                      </div>

                      <div className="mt-auto flex items-end justify-between">
                        {/* Quantity */}
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-4 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-8">
                <Link 
                  href="/shop" 
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary p-6 md:p-8 sticky top-24">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>

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

                <div className="flex justify-between text-lg font-medium mb-6">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="text-sm text-muted-foreground mb-2 block normal-case tracking-normal">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter code" className="flex-1" />
                    <Button variant="outline-subtle" size="sm">Apply</Button>
                  </div>
                </div>

                <Button asChild variant="luxury" className="w-full" size="lg">
                  <Link href="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  {cartTotal < 500 && `Spend $${(500 - cartTotal).toFixed(2)} more for free shipping`}
                  {cartTotal >= 500 && "You qualify for free shipping"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CartPage() {
  return (
    <StoreProvider>
      <CartContent />
    </StoreProvider>
  )
}
