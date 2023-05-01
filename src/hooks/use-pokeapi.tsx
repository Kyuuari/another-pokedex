"use client";
import { PokemonData, PokemonType, SpeciesInfo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getPokemon = (pokemonName: string) => {
  return useQuery<PokemonData>({
    queryKey: ["pokemon", pokemonName],
    queryFn: async () => {
      // await wait(2000);
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      return data as PokemonData;
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      types: data.types,
      stats: data.stats,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities,
      species: data.species,
    }),
  });
};

export const getPokemonType = (pokemonName: string) => {
  return useQuery<PokemonType[]>({
    queryKey: ["pokemonType"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      return data.types;
    },
    // select: (data) => {...data},
  });
};

export const getPokemonFromRegion = (region: string) => {
  return useQuery<PokemonData[]>({
    queryKey: ["allPokemonFromRegion"],
    queryFn: async () => {
      // await wait(2000);
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokedex/${region}/?limit=8`
      );
      return data.pokemon_entries;
    },
  });
};

export const getAllPokemon = () => {
  return useQuery<PokemonData[]>({
    queryKey: ["allPokemon"],
    queryFn: async () => {
      // await wait(2000);
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=8"
      );
      return data.results;
    },
  });
};

// const pokemonIndex = url.split("/")[url.split("/").length - 2];
// const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg

export const findPokemonImage = (index: number) => {
  // return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
  return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
};

export const findPokemonDBImage = (pokemonName: string) => {
  // return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
  return `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`;
};

export const getSpeciesInfo = (url: string) => {
  return useQuery<SpeciesInfo>({
    queryKey: ["species", url],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data as SpeciesInfo;
    },
    select: (data) => ({
      gender_rate: data.gender_rate,
      capture_rate: data.capture_rate,
      hatch_counter: data.hatch_counter,
      egg_groups: data.egg_groups,
      color: data.color,
      flavor_text_entries: data.flavor_text_entries,
      form_descriptions: data.form_descriptions,
    }),
  });
};

//TODO: wip hook
export async function fetchData(params: string) {
  const { data: pokemonData, isLoading: isLoadingPokemon } = await getPokemon(
    params
  );
  const { data: speciesInfo, isLoading: isLoadingInfo } = await getSpeciesInfo(
    pokemonData!.species.url
  );
  return { pokemonData, speciesInfo, isLoadingPokemon, isLoadingInfo };
}
