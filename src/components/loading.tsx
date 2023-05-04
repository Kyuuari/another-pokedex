import { Icons } from "./icons";

type Props = {};

export default function loading({}: Props) {
  return (
    <main className="w-full h-full grow flex pt-14 justify-center items-center">
      <div className="animate-bounce flex flex-row gap-2">
        <Icons.logo />
        <h1>Loading</h1>
      </div>
    </main>
  );
}
