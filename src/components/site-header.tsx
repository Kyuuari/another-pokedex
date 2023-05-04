import React from "react";
import MainNav from "./main-nav";
import { CommandSearch } from "./command-search";
import { Icons } from "./icons";

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <a
            href={"https://github.com/Kyuuari/another-pokedex"}
            target="_blank"
            rel="noreferrer"
            aria-label="github link"
            className="font-medium underline underline-offset-4 hover:opacity-30"
          >
            <Icons.gitHub className=" h-6 w-6 md:inline-block" />
          </a>
          <a
            href={"https://twitter.com/Kyu_uari"}
            target="_blank"
            rel="noreferrer"
            aria-label="twitter link"
            className="font-medium underline underline-offset-4 hover:opacity-30"
          >
            <Icons.twitter className=" h-6 w-6 md:inline-block" />
          </a>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandSearch />
          </div>
        </div>
      </div>
    </header>
  );
}
