"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { StoreProvider } from "@/lib/store-context"
import { cn } from "@/lib/utils"
import { SlidersHorizontal, Grid3X3, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { categories, getProductsByCategory } from "@/lib/product"

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category") || "All"
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [sortBy, setSortBy] = useState("featured")
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(4)

  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  const filteredProducts = getProductsByCategory(selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover our curated collection of luxury fashion and accessories.
            </p>
          </div>
        </div>

        {/* Filters and Products */}
        <div className="container mx-auto px-4 py-12">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-8 border-b border-border">
            {/* Category Filters - Desktop */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "text-sm tracking-wide",
                    selectedCategory === category && "bg-foreground text-background"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Mobile Filter */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline-subtle" className="w-full">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filter & Sort
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[60vh]">
                  <SheetHeader>
                    <SheetTitle>Filter & Sort</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">Category</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "luxury" : "outline-subtle"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-3">Sort By</h4>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="featured">Featured</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="name">Name</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Sort and View Options - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {sortedProducts.length} products
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-1 border border-border p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("h-8 w-8", gridCols === 3 && "bg-muted")}
                  onClick={() => setGridCols(3)}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("h-8 w-8", gridCols === 4 && "bg-muted")}
                  onClick={() => setGridCols(4)}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={cn(
              "grid gap-4 md:gap-6",
              gridCols === 2 && "grid-cols-2",
              gridCols === 3 && "grid-cols-2 md:grid-cols-3",
              gridCols === 4 && "grid-cols-2 md:grid-cols-4"
            )}
          >
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function ShopPage() {
  return (
    <StoreProvider>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <ShopContent />
      </Suspense>
    </StoreProvider>
  )
}