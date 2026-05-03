import type { Product } from "./store-context"

export const products: Product[] = [
  // Handbags
  {
    id: "bag-1",
    name: "Bamboo Handle Tote",
    price: 2980,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    category: "Handbags",
    description: "Crafted from premium leather with signature bamboo handle. Features magnetic closure and interior pockets.",
    colors: ["Black", "Tan", "Burgundy"],
  },
  {
    id: "bag-2",
    name: "Chain Shoulder Bag",
    price: 2450,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    category: "Handbags",
    description: "Quilted leather shoulder bag with gold chain strap. Timeless elegance for any occasion.",
    colors: ["Black", "Cream", "Red"],
  },
  {
    id: "bag-3",
    name: "Mini Crossbody",
    price: 1850,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    category: "Handbags",
    description: "Compact crossbody with adjustable strap. Perfect for everyday essentials.",
    colors: ["Beige", "Black", "Pink"],
  },
  // Ready to Wear - Women
  {
    id: "rtw-1",
    name: "Silk Pleated Dress",
    price: 3200,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    category: "Ready to Wear",
    description: "Flowing silk dress with delicate pleating. Features a flattering A-line silhouette.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Blush", "Navy"],
  },
  {
    id: "rtw-2",
    name: "Tailored Blazer",
    price: 2800,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    category: "Ready to Wear",
    description: "Impeccably tailored wool blazer with peak lapels. A wardrobe essential.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Navy"],
  },
  {
    id: "rtw-3",
    name: "Cashmere Coat",
    price: 4500,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    category: "Ready to Wear",
    description: "Luxurious cashmere-wool blend coat. Double-breasted design with horn buttons.",
    sizes: ["S", "M", "L"],
    colors: ["Camel", "Black", "Grey"],
  },
  // Shoes
  {
    id: "shoes-1",
    name: "Leather Loafers",
    price: 890,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    category: "Shoes",
    description: "Classic leather loafers with metal hardware. Hand-stitched for lasting quality.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Brown"],
  },
  {
    id: "shoes-2",
    name: "Stiletto Pumps",
    price: 950,
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80",
    category: "Shoes",
    description: "Elegant suede pumps with 90mm heel. Perfect for evening occasions.",
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: ["Black", "Nude", "Red"],
  },
  {
    id: "shoes-3",
    name: "Ankle Boots",
    price: 1150,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    category: "Shoes",
    description: "Sleek leather ankle boots with block heel. Features side zip closure.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Burgundy", "Tan"],
  },
  // Accessories
  {
    id: "acc-1",
    name: "Leather Belt",
    price: 450,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
    category: "Accessories",
    description: "Smooth calfskin belt with signature gold buckle. Width: 3cm.",
    sizes: ["75", "80", "85", "90", "95"],
    colors: ["Black", "Brown", "Tan"],
  },
  {
    id: "acc-2",
    name: "Silk Scarf",
    price: 380,
    image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?w=800&q=80",
    category: "Accessories",
    description: "Hand-rolled silk twill scarf with exclusive print. Dimensions: 90x90cm.",
    colors: ["Multicolor", "Navy", "Burgundy"],
  },
  {
    id: "acc-3",
    name: "Aviator Sunglasses",
    price: 420,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
    category: "Accessories",
    description: "Classic aviator frames with polarized lenses. Includes leather case.",
    colors: ["Gold/Brown", "Silver/Grey", "Black"],
  },
  // Jewelry
  {
    id: "jew-1",
    name: "Chain Necklace",
    price: 1200,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Jewelry",
    description: "18k gold-plated chain with signature pendant. Length: 42cm.",
    colors: ["Gold", "Silver"],
  },
  {
    id: "jew-2",
    name: "Hoop Earrings",
    price: 680,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    category: "Jewelry",
    description: "Medium hoop earrings in polished gold. Diameter: 3cm.",
    colors: ["Gold", "Silver", "Rose Gold"],
  },
  // Men
  {
    id: "men-1",
    name: "Leather Briefcase",
    price: 2200,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    category: "Men",
    description: "Classic leather briefcase with laptop compartment. Features detachable shoulder strap.",
    colors: ["Black", "Brown", "Tan"],
  },
  {
    id: "men-2",
    name: "Wool Suit",
    price: 3800,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    category: "Men",
    description: "Two-piece wool suit with half-canvas construction. Italian fabric.",
    sizes: ["46", "48", "50", "52", "54"],
    colors: ["Navy", "Charcoal", "Black"],
  },
  {
    id: "men-3",
    name: "Leather Sneakers",
    price: 750,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    category: "Men",
    description: "Premium leather sneakers with rubber sole. Minimalist design.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["White", "Black", "Navy"],
  },
]

export const categories = [
  "All",
  "Handbags",
  "Ready to Wear",
  "Shoes",
  "Accessories",
  "Jewelry",
  "Men",
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter(product => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 8)
}

export function getNewArrivals(): Product[] {
  return products.slice(-4)
}
