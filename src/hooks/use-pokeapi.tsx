import { PokemonData, PokemonType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

// https://jsonplaceholder.typicode.com/posts/
// https://pokeapi.co/api/v2/pokemon/ditto

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
