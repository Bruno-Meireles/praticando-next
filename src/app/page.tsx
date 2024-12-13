import Image from "next/image";
import Card from "./Card/Card";

export default function Home() {
  return (
    <main className="container">
      <h1 className=" flex justify-center mt-10 text-3xl font-bold underline">
        Shows Disponíveis
      </h1>
      <Card/>
    </main>
  );
}
