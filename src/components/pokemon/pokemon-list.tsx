"use client";
import React, { useEffect, useState } from "react";
import PokemonCard from "./pokemon-card";
import { useGetAllPokemonPage } from "@/hooks/use-pokeapi";
import Loading from "../loading";
import { PokemonData } from "@/types";
import usePaginationStore from "../store/store";
import { Button } from "../ui/button";

type Props = {};

export default function PokemonList({}: Props) {
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
    <div className="grid grid-cols-1 md:grid-cols-4">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemonName={pokemon.name}
          pokemonImgUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        />
      ))}

      <div className="fixed bottom-0 flex flex-row gap-2 md:bottom-[-10] right-4 mb-4 mr-4">
        <Button size={"lg"} onClick={() => updatePagePosition(-itemsPerPage)}>
          -
        </Button>
        <Button size={"lg"} onClick={() => updatePagePosition(itemsPerPage)}>
          +
        </Button>
      </div>
    </div>
  );
}
