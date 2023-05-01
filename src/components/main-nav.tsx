"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
// import { Icons } from "./icons";

type Props = {};

export default function MainNav({}: Props) {
  return (
    <div className="mr-4 flex font-display">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="hidden font-bold sm:inline-block">{"Pokedex"}</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium font-sub italic">
        {/* <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80"
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link> */}
        {/* <Link
          href="/about"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          About
        </Link> */}
        {/* <Link
          href="/typography"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Typography
        </Link> */}
        <Link
          href={"https://github.com/Kyuuari"}
          className={cn(
            " text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
