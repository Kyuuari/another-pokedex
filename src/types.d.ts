export interface PokemonType {
  slot: number;
  type: {
    name: TypeName;
    url: string;
  };
}

interface species {
  name: string;
  url: string;
}

export interface PokemonData {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStats[];
  abilities: PokemonAbility[];
  weight: number;
  height: number;
  species: species;
}

interface Ability {
  name: string;
  url: string;
}

interface PokemonAbility {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface egg_groups {
  name: string;
  url: string;
}

interface color {
  name: string;
  url: string;
}

interface language {
  name: string;
  url: string;
}

interface flavor_text_entries {
  flavor_text: string;
  language: language;
  // version: {
  //   name: string;
  //   url: string;
  // };
}

interface form_descriptions {
  description: string;
  // language: {
  //   name: string;
  //   url: string;
  // };
}

export interface SpeciesInfo {
  //   id: number;
  //   name: string;
  //   order: number;
  gender_rate: number;
  capture_rate: number;
  //   base_happiness: number;
  //   is_baby: boolean;
  //   is_legendary: boolean;
  //   is_mythical: boolean;
  hatch_counter: number;
  //   has_gender_differences: boolean;
  //   forms_switchable: boolean;
  //   growth_rate: {
  //     name: string;
  //     url: string;
  //   };
  //   pokedex_numbers: {
  //     entry_number: number;
  //     pokedex: {
  //       name: string;
  //       url: string;
  //     };
  //   }[];
  egg_groups: egg_groups[];
  color: color;
  //   shape: {
  //     name: string;
  //     url: string;
  //   };
  //   evolves_from_species: {
  //     name: string;
  //     url: string;
  //   } | null;
  //   evolution_chain: {
  //     url: string;
  //   };
  //   habitat: {
  //     name: string;
  //     url: string;
  //   } | null;
  //   generation: {
  //     name: string;
  //     url: string;
  //   };
  //   names: {
  //     name: string;
  //     language: {
  //       name: string;
  //       url: string;
  //     };
  //   }[];
  flavor_text_entries: flavor_text_entries[];
  form_descriptions: form_descriptions[];
  //   genera: {
  //     genus: string;
  //     language: {
  //       name: string;
  //       url: string;
  //     };
  //   }[];
  //   varieties: {
  //     is_default: boolean;
  //     pokemon: {
  //       name: string;
  //       url: string;
  //     };
  //   }[];
}

type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

type TypeName =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground";
"flying" |
  "psychic" |
  "bug" |
  "rock" |
  "ghost" |
  "dark" |
  "dragon" |
  "steel" |
  "fairy";

interface Stat {
  name: StatName;
  url: string;
}

interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: Stat;
}
