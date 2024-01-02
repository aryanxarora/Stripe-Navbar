import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="start-bg">
      <div className="w-screen h-screen flex justify-center items-center flex-col p-5 lg:p-10">
        <h1 className="font-sans text-3xl lg:text-5xl font-bold text-center">
          Next.js Starter Template
        </h1>
        <p>
          by{" "}
          <a href="https://aryanarora.vercel.app/" className="text-blue-500">
            Aryan Arora
          </a>
        </p>
        <div className="flex mt-10 gap-5">
          <Image
            src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
            alt="Next.js Logo"
            width={40}
            height={40}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
            alt="Tailwind Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            alt="Tailwind Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
