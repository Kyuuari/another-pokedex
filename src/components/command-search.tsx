"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useCallback, useEffect, useState } from "react";
import { PokemonSearchData } from "@/lib/data/pokemon-search";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { capitalize, cn } from "@/lib/utils";
import { DialogProps } from "@radix-ui/react-dialog";

export function CommandSearch({ ...props }: DialogProps) {
  const pokemonSearch = PokemonSearchData.results;
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search Pokemon...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandInput placeholder="Type a pokemon to search..." />
        <CommandList>
          <CommandGroup heading="Pokemon">
            {pokemonSearch.map((pokemon, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  runCommand(() => router.push(`/pokemon/${pokemon.name}`));
                }}
              >
                {capitalize(pokemon.name)}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
