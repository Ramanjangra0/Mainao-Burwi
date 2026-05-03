import { CategoryGrid } from "@/components/category-grid";
import { EditorialSection } from "@/components/editorial-section";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StoreProvider } from "@/lib/store-context";

export default function Home() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <CategoryGrid />
          <FeaturedProducts />
          <EditorialSection />
        </main>
        <Footer/>
      </div>
    </StoreProvider>
  );
}
