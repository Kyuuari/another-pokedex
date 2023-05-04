import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnimatedValue } from "../animated-value";
import { StatsBar } from "../stats-bar";
import { PokemonData } from "@/types";
import { capitalize } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

type Props = {
  pokemonData: PokemonData;
  pokemonImageURL: string;
};

export default function PokedataCard({ pokemonData, pokemonImageURL }: Props) {
  return (
    <Card className="flex flex-col gap-8  md:flex-col">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle className="flex flex-col md:flex-row gap-4 flex-wrap">
          <span className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {capitalize(pokemonData.name)}
          </span>
          <span className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            #{pokemonData.id ?? 0}
          </span>
        </CardTitle>
        <div>
          {pokemonData.types.map((type, index) => (
            <Badge key={index} type={`${type.type.name}`}>
              {capitalize(type.type.name)}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Suspense fallback={<div>Loading...</div>}>
            <img
              className="w-52 h-52 mix-blend-multiply bg-transparent my-4 object-contain"
              src={pokemonImageURL}
              alt="pokemon image"
            />
          </Suspense>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex h-20 items-center space-x-4 text-sm">
          <div className="flex flex-col">
            <p>Height</p>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <AnimatedValue round={2} value={pokemonData.height} /> m
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

        <div className="w-full pt-5">
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
      </CardContent>
    </Card>
  );
}
