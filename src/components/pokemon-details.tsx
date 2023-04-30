import { PokemonData } from "@/types";
import React, { useEffect, useRef } from "react";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { capitalize } from "@/lib/utils";
import gsap from "gsap";

import { AnimatedValue } from "./animated-value";
import { StatsBar } from "./stats-bar";

type Props = {
  pokemonData: PokemonData;
  pokemonImageURL: string;
};

export default function PokemonDetails({
  pokemonData,
  pokemonImageURL,
}: Props) {
  return (
    <div className="container flex  flex-col gap-10 md:flex-row  md:grid-cols-2">
      <div className="">
        <div className="flex text-center gap-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {capitalize(pokemonData.name)}
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            #{pokemonData.id}
          </h2>
        </div>

        <img
          className="w-52 h-52 mix-blend-multiply bg-transparent"
          src={pokemonImageURL}
        />

        <div className="flex h-20 items-center space-x-4 text-sm">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            <AnimatedValue value={pokemonData.weight!} /> kg
          </h2>
          <Separator orientation="vertical" />
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            <AnimatedValue value={pokemonData.height!} /> m
          </h2>
        </div>

        <div className="">
          {pokemonData.types.map((type, index) => (
            <Badge key={index} type={`${type.type.name}`}>
              {capitalize(type.type.name)}
            </Badge>
          ))}
        </div>
      </div>

      <div className="w-full ">
        {pokemonData.stats.map((stats, index) => (
          <div key={index}>
            <p>
              {capitalize(stats.stat.name)} : {stats.base_stat}
            </p>
            <StatsBar value={stats.base_stat} />
          </div>
        ))}
      </div>
    </div>
  );
}
