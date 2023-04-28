"use client";
import { Inter } from "next/font/google";
import {
  findPokemonImage,
  getPokemonType,
  useAllPokemon,
} from "@/hooks/use-pokemon";
import PokemonCard from "@/components/pokemon-card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoading, data, error } = useAllPokemon();
  const type = getPokemonType("ivysaur");
  console.log(JSON.stringify(type.data));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <main className="">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="grid grid-col-1 md:grid-cols-4">
          {data?.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemonName={pokemon.name}
              pokemonImgUrl={`${findPokemonImage(index + 1)}`}
              // pokemonTypes={getPokemonType(pokemon.name)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
