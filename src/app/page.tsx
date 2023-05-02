"use client";
import { useEffect, useState } from "react";
import { useGetAllPokemonPage } from "@/hooks/use-pokeapi";
import usePaginationStore from "@/components/store/store";
import { PokemonData } from "@/types";
import { Button } from "@/components/ui/button";

import Loading from "@/components/loading";
import PokemonCard from "@/components/pokemon/pokemon-card";

export default function Home() {
  const { currentPage, itemsPerPage, updatePagePosition } =
    usePaginationStore();

  const {
    isLoading,
    data: pokemonPage,
    error,
  } = useGetAllPokemonPage(itemsPerPage, currentPage);

  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  useEffect(() => {
    setPokemonList(pokemonPage ?? []);
  }, [pokemonPage]);

  if (isLoading) {
    return <Loading />;
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

        <div className="fixed bottom-0 flex flex-row gap-2 md:bottom-[-10] right-4 mb-4 mr-4">
          <Button size={"lg"} onClick={() => updatePagePosition(-itemsPerPage)}>
            -
          </Button>
          <Button size={"lg"} onClick={() => updatePagePosition(itemsPerPage)}>
            +
          </Button>
        </div>
      </article>
    </main>
  );
}
