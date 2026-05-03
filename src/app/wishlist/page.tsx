"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { StoreProvider, useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"

function WishlistContent() {
  const { wishlist } = useStore()

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-20">
            <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-serif text-3xl mb-4">Your Wishlist is Empty</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Save your favorite items to your wishlist and revisit them anytime.
            </p>
            <Button asChild size="lg">
              <Link href="/shop">
                Explore Collection
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-3xl md:text-4xl">My Wishlist</h1>
            <span className="text-muted-foreground">
              {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function WishlistPage() {
  return (
    <StoreProvider>
      <WishlistContent />
    </StoreProvider>
  )
}
