"use client";
import { Inter } from "next/font/google";
import { useGetAllPokemon, useFindPokemonDBImage } from "@/hooks/use-pokeapi";
import PokemonCard from "@/components/pokemon-card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoading, data, error } = useGetAllPokemon();
  // const { isLoading, data, error } = getPokemonFromRegion("kanto");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <main className="min-h-screen pt-28">
      <article className="container">
        {isLoading ? (
          "Loading"
        ) : (
          <div className="grid grid-col-1 md:grid-cols-4">
            {data?.map((pokemon, index) => (
              <PokemonCard
                key={index}
                pokemonName={pokemon.name}
                pokemonImgUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
              />
            ))}
          </div>
        )}
      </article>
    </main>
  );
}
