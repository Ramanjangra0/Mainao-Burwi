import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary - solid black/white depending on theme
        default: 
          'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]',
        // Luxury filled - elegant with subtle animation
        luxury: 
          'bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98] shadow-sm',
        // Outline - minimal border style
        outline:
          'border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background active:scale-[0.98]',
        // Outline subtle - thinner border
        'outline-subtle':
          'border border-border bg-transparent text-foreground hover:border-foreground hover:bg-muted active:scale-[0.98]',
        // Secondary - muted background
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]',
        // Ghost - minimal hover state
        ghost:
          'hover:bg-accent/10 hover:text-accent-foreground active:scale-[0.98]',
        // Link - underline style
        link: 
          'text-foreground underline-offset-4 hover:underline normal-case tracking-normal',
        // Destructive
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 active:scale-[0.98]',
        // Inverse - for dark backgrounds
        inverse:
          'bg-background text-foreground hover:bg-background/90 active:scale-[0.98] shadow-sm',
        // Gold accent
        accent:
          'bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98]',
        transpart:
        'bg-backgroun/95',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-sm',
        xl: 'h-14 px-10 text-base',
        icon: 'size-10',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
