import Image from "next/image";

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
    </div>
  );
}
