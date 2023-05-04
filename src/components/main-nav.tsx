import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

type Props = {};

export default function MainNav({}: Props) {
  return (
    <div className="mr-4 flex font-display">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo aria-label="Pokedex Home Icon" className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{"Pokedex"}</span>
      </Link>
    </div>
  );
}
