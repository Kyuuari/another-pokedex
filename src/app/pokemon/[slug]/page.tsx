"use client";
import PokemonDetails from "@/components/pokemon-details";
import { getPokemon, findPokemonDBImage } from "@/hooks/use-pokeapi";
import { PokemonData } from "@/types";

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading } = getPokemon(params.slug);
  const imageurl = findPokemonDBImage(data?.name!);

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <main className="min-h-screen bg-violet-50 flex  justify-center items-center">
          <article className="container">
            <PokemonDetails
              pokemonData={data as PokemonData}
              pokemonImageURL={imageurl}
            />
          </article>
        </main>
      )}
    </>
  );
}
