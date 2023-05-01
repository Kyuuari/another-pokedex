import { PokemonData } from "@/types";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { capitalize } from "@/lib/utils";

import { AnimatedValue } from "./animated-value";
import { StatsBar } from "./stats-bar";
import { getSpeciesInfo } from "@/hooks/use-pokeapi";
import { RatioBar } from "./ratio-bar";

type Props = {
  pokemonData: PokemonData;
  pokemonImageURL: string;
};

export default function PokemonDetails({
  pokemonData,
  pokemonImageURL,
}: Props) {
  const { data: speciesInfo } = getSpeciesInfo(pokemonData.species.url);
  const { flavor_text_entries, color, egg_groups, gender_rate, capture_rate } =
    speciesInfo ?? {};

  const enText = flavor_text_entries?.find(
    (text) => text.language.name === "en"
  )?.flavor_text;
  const jpText = flavor_text_entries?.find(
    (text) => text.language.name === "ja-Hrkt"
  )?.flavor_text;

  const femaleRate = speciesInfo?.gender_rate;
  const genderRatioFemale = 12.5 * femaleRate!;
  const genderRatioMale = 12.5 * (8 - femaleRate!);

  const catchRate = Math.round((100 / 255) * speciesInfo?.capture_rate!);

  return (
    <div className="flex h-full flex-col gap-10 md:flex-row  md:grid-cols-2">
      <div className="flex flex-col gap-2 min-w-fit">
        <div className="flex text-center gap-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {capitalize(pokemonData.name)}
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            #{pokemonData.id}
          </h2>
        </div>

        <div className="">
          {pokemonData.types.map((type, index) => (
            <Badge key={index} type={`${type.type.name}`}>
              {capitalize(type.type.name)}
            </Badge>
          ))}
        </div>

        <img
          className="w-52 h-52 mix-blend-multiply bg-transparent my-4 object-contain"
          src={pokemonImageURL}
          alt="pokemon image"
        />

        <div className="flex h-20 items-center space-x-4 text-sm">
          <div className="flex flex-col">
            <p>Height</p>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <AnimatedValue round={2} value={pokemonData.height!} /> m
            </h2>
          </div>

          <Separator orientation="vertical" />
          <div className="flex flex-col">
            <p>Weight</p>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <AnimatedValue round={2} value={pokemonData.weight!} /> kg
            </h2>
          </div>
        </div>

        <div className="w-full ">
          {pokemonData.stats.map((stats, index) => (
            <div key={index}>
              <p>
                {capitalize(stats.stat.name)} :{" "}
                <AnimatedValue round={0} value={stats.base_stat} />
              </p>
              <StatsBar value={stats.base_stat} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Description
          </h3>
          {enText && <p>{enText}</p>}
          {jpText && <p>{jpText}</p>}

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Abilities
          </h3>
          {pokemonData.abilities.map((ability, index) => (
            <p key={index}>{capitalize(ability.ability.name)}</p>
          ))}
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Color
          </h3>
          <p>{speciesInfo?.color.name}</p>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Egg Group
          </h3>
          {speciesInfo?.egg_groups.map((group, index) => (
            <p key={index}>{group.name}</p>
          ))}
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Gender Ratio
          </h3>
          <RatioBar value1={speciesInfo?.gender_rate!} />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Catch Rate
          </h3>
          <p>{catchRate}%</p>
        </div>
      </div>
    </div>
  );
}
