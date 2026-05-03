"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
          alt="Luxury fashion"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-foreground/30 to-transparent dark:from-foreground/60 dark:via-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
        <div className="max-w-xl lg:max-w-2xl">
          <span className="inline-block text-background/90 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            New Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-background leading-[1.1] mb-4 sm:mb-6">
            Timeless elegance
            <br />
            meets modern craft
          </h2>
          <p className="text-background/80 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-md lg:max-w-lg leading-relaxed">
            Discover our latest collection of luxury pieces, meticulously crafted for those who appreciate the finer things in life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              variant="accent"
              className="w-full sm:w-auto text-sm sm:text-base border-background/80 bg-transparent text-background hover:bg-background hover:text-foreground"
            >
              <Link href="/shop">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {/* <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-sm sm:text-base border-2 border-background/80 bg-transparent text-background hover:bg-background hover:text-foreground"
            >
              <Link href="/shop?category=Handbags">
                Shop Handbags
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
