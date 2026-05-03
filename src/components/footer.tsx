import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  "Customer Service": [
    { href: "/contact", label: "Contact Us" },
    { href: "/shipping", label: "Shipping & Returns" },
    { href: "/faq", label: "FAQ" },
    { href: "/size-guide", label: "Size Guide" },
    { href: "/care-guide", label: "Care Guide" },
  ],
  "About LUXE": [
    { href: "/about", label: "Our Story" },
    { href: "/careers", label: "Careers" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/press", label: "Press" },
  ],
  "Legal": [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/accessibility", label: "Accessibility" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background dark:bg-card dark:text-card-foreground dark:border-t dark:border-border/30">
      {/* Newsletter */}
      <div className="border-b border-background/10 dark:border-border/20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-xl sm:text-2xl mb-2">Join Our World</h3>
            <p className="text-background/70 dark:text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6 px-4">
              Subscribe for exclusive previews, personalized recommendations, and the latest from LUXE.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-background/30 dark:border-border/50 text-background dark:text-foreground placeholder:text-background/50 dark:placeholder:text-muted-foreground focus-visible:ring-background/50 dark:focus-visible:ring-ring/50"
              />
              <Button className="border-2 border-background/50 dark:border-border/50 bg-transparent text-background dark:text-foreground hover:bg-background hover:text-foreground dark:hover:bg-foreground dark:hover:text-background w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Social */}
          <div className="col-span-2 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-medium">
              MAINAO BURWI
            </Link>
            <p className="text-background/60 dark:text-muted-foreground text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed max-w-xs">
              Timeless elegance meets contemporary design. Since 1921.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-6">
              <a href="#" className="text-background/60 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-background/60 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-background/60 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium text-xs sm:text-sm tracking-wider mb-3 sm:mb-4">{title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-background/60 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 dark:border-border/20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-background/60 dark:text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} MAINAO BURWI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-background/60 dark:text-muted-foreground">
              <span>United States ($)</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
