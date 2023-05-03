import PokemonList from "@/components/pokemon/pokemon-list";

export default function Home() {
  return (
    <main className="min-h-screen pt-14">
      <article className="container p-10">
        <PokemonList />
      </article>
    </main>
  );
}
