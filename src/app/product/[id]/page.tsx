"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { StoreProvider, useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"
import { Heart, Minus, Plus, ChevronRight, Truck, RefreshCw, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getProductById, products } from "@/lib/product"

function ProductContent({ id }: { id: string }) {
  const product = getProductById(id)
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore()
  const [selectedSize, setSelectedSize] = useState<string | undefined>()
  const [selectedColor, setSelectedColor] = useState<string | undefined>()
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    notFound()
  }

  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor)
    }
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  // Get related products from same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  // Mock additional images (in real app these would come from product data)
  const productImages = [product.image, product.image, product.image]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link 
                href={`/shop?category=${product.category}`} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {product.category}
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                <Image
                  src={productImages[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      "relative aspect-square bg-muted overflow-hidden border-2 transition-colors",
                      activeImage === index ? "border-foreground" : "border-transparent"
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <span className="text-sm text-muted-foreground tracking-wider uppercase">
                  {product.category}
                </span>
                <h1 className="font-serif text-3xl md:text-4xl mt-2 mb-4">{product.name}</h1>
                <p className="text-2xl">${product.price.toLocaleString()}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">
                    Color: <span className="text-muted-foreground">{selectedColor || "Select"}</span>
                  </h3>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          "px-4 py-2 border text-sm transition-colors",
                          selectedColor === color
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground"
                        )}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium">
                      Size: <span className="text-muted-foreground">{selectedSize || "Select"}</span>
                    </h3>
                    <button className="text-sm text-muted-foreground underline hover:text-foreground">
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "min-w-[48px] px-4 py-2 border text-sm transition-colors",
                          selectedSize === size
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <Button
                  variant="luxury"
                  size="xl"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  Add to Bag
                </Button>
                <Button
                  variant="secondary"
                  size="icon-lg"
                  className="h-14 w-14"
                  onClick={handleWishlistToggle}
                >
                  <Heart className={cn("h-8 w-8", inWishlist && "fill-destructive text-destructive")} />
                  <span className="sr-only">
                    {inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                  </span>
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 py-8 border-y border-border mb-8">
                <div className="text-center">
                  <Truck className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Free Shipping</span>
                </div>
                <div className="text-center">
                  <RefreshCw className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Easy Returns</span>
                </div>
                <div className="text-center">
                  <Shield className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Secure Payment</span>
                </div>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm tracking-wide">
                    Product Details
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {product.description} Made with premium materials and expert craftsmanship. 
                    Features include signature hardware and carefully selected materials.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-sm tracking-wide">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Complimentary shipping on all orders over $500. Standard shipping takes 3-5 business days. 
                    Returns accepted within 30 days of purchase with original tags attached.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger className="text-sm tracking-wide">
                    Care Instructions
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Store in the provided dust bag when not in use. Avoid prolonged exposure to direct sunlight. 
                    Clean with a soft, dry cloth. For professional cleaning, contact customer service.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="bg-secondary py-16">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <StoreProvider>
      <ProductContent id={id} />
    </StoreProvider>
  )
}
