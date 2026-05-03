"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useStore, type Product } from "@/lib/store-context"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useStore()
  const inWishlist = isInWishlist(product.id)

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <Link 
      href={`/product/${product.id}`} 
      className={cn("group block", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted dark:bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <Button
          variant="ghost"
          size="icon-sm"
          className={cn(
            "absolute top-2 right-2 sm:top-3 sm:right-3 h-8 w-8 sm:h-9 sm:w-9 bg-background dark:bg-background/95 backdrop-blur-sm hover:bg-background border border-border/50 dark:border-border/30",
            "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300",
            inWishlist && "opacity-100 bg-background"
          )}
          onClick={handleWishlistClick}
        >
          <Heart 
            className={cn(
              "h-3.5 w-3.5 sm:h-4 sm:w-4 transition-colors",
              inWishlist && "fill-destructive text-destructive-foregroundt"
            )} 
          />
          <span className="sr-only">
            {inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </span>
        </Button>
        <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4 bg-gradient-to-t from-foreground/40 dark:from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
          <Button 
            variant="accent"
            size="sm"
            className="w-full text-xs sm:text-sm"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.location.href = `/product/${product.id}`
            }}
          >
            Quick View
          </Button>
        </div>
      </div>
      <div className="mt-2 sm:mt-4 space-y-0.5 sm:space-y-1">
        <h3 className="text-xs sm:text-sm font-medium tracking-wide group-hover:text-muted-foreground transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
          ${product.price.toLocaleString()}
        </p>
        {product.colors && (
          <div className="flex gap-1 pt-0.5 sm:pt-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <span
                key={color}
                className="text-[10px] sm:text-xs text-muted-foreground"
              >
                {color}
                {index < Math.min(product.colors!.length - 1, 2) && ", "}
              </span>
            ))}
            {product.colors.length > 3 && (
              <span className="text-[10px] sm:text-xs text-muted-foreground">+{product.colors.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
