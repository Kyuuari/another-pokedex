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
  pokemonImgUrl: string;
};

export default function PokemonCard({ pokemonName, pokemonImgUrl }: Props) {
  return (
    <Link href={`/pokemon/${pokemonName}`}>
      <Card>
        <CardHeader>
          <CardTitle>{pokemonName}</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading...</div>}>
            <img src={pokemonImgUrl} />
          </Suspense>
        </CardContent>
      </Card>
    </Link>
  );
}
