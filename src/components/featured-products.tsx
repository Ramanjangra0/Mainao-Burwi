"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/lib/product"
import { ProductCard } from "./product-card"

export function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-2 block">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl">Featured Pieces</h2>
          </div>
          <Link 
            href="/shop" 
            className="inline-flex items-center text-sm tracking-wider hover:text-muted-foreground transition-colors group"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
