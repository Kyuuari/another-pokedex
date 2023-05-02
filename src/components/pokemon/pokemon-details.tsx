"use client";
import PokedataCard from "./pokedata-card";
import SpeciesInfo from "./species-info";
import { Suspense, useState } from "react";
import Loading from "../loading";
import { findPokemonDBImage, useGetPokemon } from "@/hooks/use-pokeapi";
import { PokemonData } from "@/types";

type Props = {
  pokemonName: string;
};

export default function PokemonDetails({ pokemonName }: Props) {
  const { data, isLoading, isSuccess } = useGetPokemon(pokemonName);
  // const [pokemonData, setPokemonData] = useState<PokemonData>();

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    console.log(data);
    // setPokemonData(data);
  }

  return (
    <section className="flex h-full flex-col gap-10 md:flex-row  md:grid-cols-2">
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-start-1 col-span-3">
            <PokedataCard
              pokemonData={data}
              pokemonImageURL={findPokemonDBImage(data.name)}
            />
          </div>

          <div className="md:col-start-4 md:col-span-full">
            <Suspense fallback={<Loading />}>
              <SpeciesInfo pokemonData={data} />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
}
