import { Icons } from "./icons";

type Props = {};

export default function loading({}: Props) {
  return (
    <main className="min-h-screen w-full flex pt-14 justify-center items-center">
      {/* <article className="container"> */}
      <div className="animate-bounce flex flex-row gap-2">
        <Icons.logo />
        <h1>Loading</h1>
      </div>
      {/* </article> */}
    </main>
  );
}
