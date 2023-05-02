"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import {
  useGetAllPokemon,
  useFindPokemonDBImage,
  useGetAllPokemonPage,
} from "@/hooks/use-pokeapi";
import usePaginationStore from "@/components/store/store";
import { PokemonData } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import PokemonCard from "@/components/pokemon-card";
import { CommandSearch } from "@/components/command-search";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentPage, itemsPerPage, setCurrentPage, updatePagePosition } =
    usePaginationStore();
  const {
    isLoading,
    data: pokemonPage,
    error,
  } = useGetAllPokemonPage(itemsPerPage, currentPage);

  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  useEffect(() => {
    setPokemonList(pokemonPage ?? []);
    console.log("pokemon list set");
  }, [pokemonPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <main className="min-h-screen pt-14">
      <article className="container p-10">
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4">
            {pokemonList.map((pokemon, index) => (
              <PokemonCard
                key={index}
                pokemonName={pokemon.name}
                pokemonImgUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
              />
            ))}
          </div>
        )}

        <div className="fixed bottom-0 right-0 mb-4 mr-4">
          <Button onClick={() => updatePagePosition(-itemsPerPage)}>-</Button>
          <Button onClick={() => updatePagePosition(itemsPerPage)}>+</Button>
        </div>
      </article>
    </main>
  );
}
