"use client";
import PokemonDetails from "@/components/pokemon-details";
import { useGetPokemon, useFindPokemonDBImage } from "@/hooks/use-pokeapi";
import { PokemonData } from "@/types";

//TODO: turn this page to server component
export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading } = useGetPokemon(params.slug);
  const imageurl = useFindPokemonDBImage(data?.name!);

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <main className="min-h-screen flex pt-14 justify-center items-center">
          <article className="container ">
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
