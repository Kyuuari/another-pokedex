"use client";
import { useGetSpeciesInfo } from "@/hooks/use-pokeapi";
import { capitalize } from "@/lib/utils";
import { PokemonData } from "@/types";
import React from "react";
import { RatioBar } from "../ratio-bar";
import { Separator } from "@radix-ui/react-separator";
import Loading from "../loading";

type Props = {
  pokemonData: PokemonData;
};

export default function SpeciesInfo({ pokemonData }: Props) {
  const { data: speciesInfo, isLoading } = useGetSpeciesInfo(
    pokemonData.species.url
  );
  const { flavor_text_entries, color, egg_groups, gender_rate, capture_rate } =
    speciesInfo ?? {};

  const enText = flavor_text_entries?.find(
    (text) => text.language.name === "en"
  )?.flavor_text;
  const jpText = flavor_text_entries?.find(
    (text) => text.language.name === "ja-Hrkt"
  )?.flavor_text;

  const catchRate = Math.round((100 / 255) * speciesInfo?.capture_rate!);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {speciesInfo && (
        <aside className="flex flex-col gap-4 p-6">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Description
            </h3>
            <div className="flex flex-col gap-6">
              {enText && <p>{enText}</p>}
              {jpText && <p>{jpText}</p>}
            </div>
          </div>

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Abilities
            </h3>
            <div>
              {pokemonData.abilities.map((ability, index) => (
                <p key={index}>{capitalize(ability.ability.name)}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Gender Ratio
            </h3>
            <RatioBar value={speciesInfo?.gender_rate!} />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Egg Group
              </h3>
              {speciesInfo?.egg_groups.map((group, index) => (
                <p key={index}>{capitalize(group.name)}</p>
              ))}
            </div>
            <Separator orientation="vertical" />
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Catch Rate
              </h3>
              <p>{catchRate}%</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Color
              </h3>
              <p>{capitalize(speciesInfo.color.name)}</p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
