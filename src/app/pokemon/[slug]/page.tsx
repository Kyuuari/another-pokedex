import PokemonDetails from "@/components/pokemon/pokemon-details";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen flex pt-14 justify-center items-center">
      <article className="container">
        <PokemonDetails pokemonName={params.slug} />
        <div className="fixed bottom-0 flex flex-row gap-2 md:bottom-[-10] right-4 mb-4 mr-4">
          <Link href="/">
            <Button size={"lg"}>Back</Button>
          </Link>
        </div>
      </article>
    </main>
  );
}
