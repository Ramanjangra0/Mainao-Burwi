import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function EditorialSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80"
              alt="The Art of Craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center py-8">
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
              Our Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              The Art of
              <br />
              Craftsmanship
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              For over a century, we have been dedicated to the pursuit of excellence. 
              Each piece in our collection is a testament to the skilled artisans who 
              bring our designs to life, using time-honored techniques passed down 
              through generations.
            </p>
            <div>
              <Button asChild variant="inverse" size="lg">
                <Link href="/about">
                  Discover Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
