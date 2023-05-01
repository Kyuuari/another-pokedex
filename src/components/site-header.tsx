"use client";
import React from "react";
import MainNav from "./main-nav";

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        {/* <MobileNav /> */}
        {/* <div className="flex flex-1 items-center space-x-2 sm:space-x-4 justify-end ">
          <nav className="flex items-center space-x-1">
          </nav>
        </div> */}
      </div>
    </header>
  );
}
