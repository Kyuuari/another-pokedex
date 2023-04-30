import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary border-transparent text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
      },
      type: {
        normal: "bg-stone-500 border-transparent text-primary-foreground",
        fire: "bg-orange-500 border-transparent text-primary-foreground",
        water: "bg-sky-500 border-transparent text-primary-foreground",
        grass: "bg-green-600 border-transparent text-primary-foreground",
        electric: "bg-yellow-400 border-transparent text-primary-foreground",
        ice: "bg-blue-300 border-transparent text-primary-foreground",
        fighting: "bg-red-500 border-transparent text-primary-foreground",
        poison: "bg-fuchsia-600 border-transparent text-primary-foreground",
        ground: "bg-orange-300 border-transparent text-primary-foreground",

        flying: "bg-violet-300 border-transparent text-primary-foreground",
        psychic: "bg-pink-600 border-transparent text-primary-foreground",
        bug: "bg-lime-500 border-transparent text-primary-foreground",
        rock: "bg-stone-600 border-transparent text-primary-foreground",
        ghost: "bg-violet-400 border-transparent text-primary-foreground",
        dark: "bg-stone-800 border-transparent text-primary-foreground",
        dragon: "bg-violet-600 border-transparent text-primary-foreground",
        steel: "bg-slate-400 border-transparent text-primary-foreground",
        fairy: "bg-pink-300 border-transparent text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, type, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, type }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
