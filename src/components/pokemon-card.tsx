import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

type Props = {
  pokemonName: string;
  pokemonImgUrl?: string;
};

export default function PokemonCard({ pokemonName, pokemonImgUrl }: Props) {
  return (
    <Link href={`/pokemon/${pokemonName}`}>
      <Card>
        <CardHeader>
          <CardTitle className="uppercase">{pokemonName}</CardTitle>
        </CardHeader>
        <CardContent className="self-center justify-center flex">
          <Suspense fallback={<div>Loading...</div>}>
            <img className="w-36 h-36" src={pokemonImgUrl} />
          </Suspense>
        </CardContent>
      </Card>
    </Link>
  );
}
