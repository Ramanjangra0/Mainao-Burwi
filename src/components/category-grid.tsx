import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Handbags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    href: "/shop?category=Handbags",
  },
  {
    name: "Ready to Wear",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    href: "/shop?category=Ready to Wear",
  },
  {
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    href: "/shop?category=Shoes",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?w=800&q=80",
    href: "/shop?category=Accessories",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto px-4">
            Explore our curated collections of luxury fashion, accessories, and lifestyle pieces.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden bg-muted"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent dark:from-foreground/70 dark:via-foreground/30 group-hover:from-foreground/70 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-3 sm:p-4 lg:p-6">
                <h3 className="text-background text-sm sm:text-base lg:text-xl font-medium tracking-wide">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
