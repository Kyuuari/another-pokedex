"use client";
import { PokemonData, PokemonType, SpeciesInfo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPokemon = (pokemonName: string) => {
  return useQuery<PokemonData>({
    queryKey: ["pokemon", pokemonName],
    queryFn: async () => {
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

export const useGetPokemonType = (pokemonName: string) => {
  return useQuery<PokemonType[]>({
    queryKey: ["pokemonType"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      return data.types;
    },
  });
};

export const useGetPokemonFromRegion = (region: string) => {
  return useQuery<PokemonData[]>({
    queryKey: ["allPokemonFromRegion"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokedex/${region}/?limit=8`
      );
      return data.pokemon_entries;
    },
  });
};

export const useGetAllPokemon = () => {
  return useQuery<PokemonData[]>({
    queryKey: ["allPokemon"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=8"
      );
      return data.results;
    },
  });
};

export const useGetAllPokemonPage = (limit: number, offset: number) => {
  return useQuery<PokemonData[]>({
    queryKey: ["allPokemon", limit, offset],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      );
      return data.results;
    },
  });
};

export const useFindPokemonImage = (index: number) => {
  return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
};

export const findPokemonDBImage = (pokemonName: string) => {
  return `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`;
};

export const useGetSpeciesInfo = (url: string) => {
  return useQuery<SpeciesInfo>({
    queryKey: ["species", url],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data as SpeciesInfo;
    },
    select: (data) =>
      ({
        gender_rate: data.gender_rate,
        capture_rate: data.capture_rate,
        hatch_counter: data.hatch_counter,
        egg_groups: data.egg_groups,
        color: data.color,
        flavor_text_entries: data.flavor_text_entries,
        form_descriptions: data.form_descriptions,
      } || {}),
  });
};

//TODO: wip hook
// export async function fetchData(params: string) {
//   const { data: pokemonData, isLoading: isLoadingPokemon } = await getPokemon(
//     params
//   );
//   const { data: speciesInfo, isLoading: isLoadingInfo } = await getSpeciesInfo(
//     pokemonData!.species.url
//   );
//   return { pokemonData, speciesInfo, isLoadingPokemon, isLoadingInfo };
// }
