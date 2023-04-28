"use client";
import { getPokemon, findPokemonImage } from "@/hooks/use-pokemon";

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading } = getPokemon(params.slug);
  const imageurl = findPokemonImage(data?.id!);
  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <h1>{JSON.stringify(data)}</h1>
          <img src={imageurl} />
        </>
      )}
    </>
  );
}
