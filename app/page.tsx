import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="start-bg">
      <div className="w-screen h-screen flex justify-center items-center flex-col p-5 lg:p-10">
        <h1 className="font-sans text-3xl lg:text-5xl font-bold text-center">
          Responsive Navbar
        </h1>
        <p>
          by{" "}
          <a href="https://aryanarora.vercel.app/" className="underline">
            Aryan Arora
          </a>
        </p>
      </div>
    </main>
  );
}
