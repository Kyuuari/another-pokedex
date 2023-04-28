import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

// https://jsonplaceholder.typicode.com/posts/
// https://pokeapi.co/api/v2/pokemon/ditto

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonData {
  id: number;
  name: string;
  types: Type[];
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export const usePost = (postId: number) => {
//   return useQuery({
//     // queryKey: ["myquery"],
//     queryFn: async () => {
//       // await wait(2000);
//       const { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${postId}`
//       );
//       return data as Data;
//     },
//   });
// };

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
    select: (data) => ({ id: data.id, name: data.name, types: data.types }),
  });
};

export const getPokemonType = (pokemonName: string) => {
  return useQuery<Type[]>({
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

// export const getPokemonType = (pokemonName: string) => {
//   return useQuery<string[]>({
//     // queryKey: ["pokemonType"],
//     queryFn: async () => {
//       // await wait(2000);
//       const { data } = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//       );
//       return data.types;
//     },
//     // select: (data) => ({}),
//   });
// };

export const useAllPokemon = () => {
  return useQuery<PokemonData[]>({
    queryKey: ["allPokemon"],
    queryFn: async () => {
      // await wait(2000);
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      return data.results;
    },
  });
};

// const pokemonIndex = url.split("/")[url.split("/").length - 2];
// const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

export const findPokemonImage = (index: number) => {
  // return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
  return `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
};

// export const getPokemonType = ()
