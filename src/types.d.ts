export interface PokemonType {
  slot: number;
  type: {
    name: TypeName;
    url: string;
  };
}

export interface PokemonData {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStats[];
  weight?: number;
  height?: number;
}


type StatName = "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed";

type TypeName = "normal" | "fire" | "water" | "grass" | "electric" | "ice" | "fighting" | "poison" | "ground"
                "flying" | "psychic" | "bug" | "rock" | "ghost" | "dark" | "dragon" | "steel" | "fairy";

interface Stat {
  name: StatName;
  url: string;
}

interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

