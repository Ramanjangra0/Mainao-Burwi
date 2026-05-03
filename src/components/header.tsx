"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store-context";
// import { ThemeToggle } from "@/components/theme-toggle"


export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, wishlist } = useStore();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 dark:bg-background/90 dark:supports-[backdrop-filter]:bg-background/70">
      {/* Top Bar */}
      <div className="border-b border-border/50 dark:border-border/30">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between py-1.5 sm:py-2 text-[10px] sm:text-xs tracking-wider">
            <span className="hidden lg:block text-muted-foreground">
              Free shipping on orders over $500
            </span>
            <div className="flex items-center gap-4 sm:gap-6 mx-auto lg:mx-0">
              <Link
                href="/stores"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Find a Store
              </Link>
              <Link
                href="/customer-service"
                className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              >
                Customer Service
              </Link>
              <Link
                href="/customer-service"
                className="text-muted-foreground hover:text-foreground transition-colors sm:hidden"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border/50 dark:border-border/30">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-1 text-center lg:flex-none lg:text-left"
            >
              <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.15em] sm:tracking-[0.2em] font-medium">
                MAINAO BURWI
              </h1>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-0.5 sm:gap-1 lg:gap-2 ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10 hover:cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? (
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
                <span className="sr-only">Search</span>
              </Button>

              {/* <ThemeToggle /> */}

              <Link href="/account" className="sm:block">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 sm:h-10 sm:w-10 hover:cursor-pointer"
                >
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>

              <Link href="/wishlist" className="relative sm:block">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 sm:h-10 sm:w-10 hover:cursor-pointer"
                >
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Wishlist</span>
                </Button>
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 w-4 sm:h-5 sm:w-5 bg-accent text-destructive text-[9px] sm:text-[10px] font-semibold flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 sm:h-10 sm:w-10 hover:cursor-pointer"
                >
                  <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 w-4 sm:h-5 sm:w-5 bg-accent text-destructive text-[9px] sm:text-[10px] font-semibold flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-b border-border/50 dark:border-border/30 bg-background animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-3 sm:gap-4 max-w-2xl mx-auto">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 bg-transparent border-none outline-none text-base sm:text-lg placeholder:text-muted-foreground min-w-0"
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(false)}
                className="flex-shrink-0 hover:cursor-pointer"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
