import React, { Suspense } from "react";

import Link from "next/link";
import { capitalize } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  pokemonName: string;
  pokemonImgUrl?: string;
};

export default function PokemonCard({ pokemonName, pokemonImgUrl }: Props) {
  return (
    <Link href={`/pokemon/${pokemonName}`}>
      <Card>
        <CardHeader>
          <CardTitle>{capitalize(pokemonName)}</CardTitle>
        </CardHeader>
        <CardContent className="self-center justify-center flex">
          <Suspense fallback={<div>Loading...</div>}>
            <img
              className="w-36 h-36 object-contain"
              src={pokemonImgUrl}
              alt={`${pokemonName} image`}
            />
          </Suspense>
        </CardContent>
      </Card>
    </Link>
  );
}
