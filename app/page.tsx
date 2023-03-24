import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      {/*  hero  */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/*  about  */}
      {/*  Experience  */}
      {/*  skills  */}
      {/*  projects  */}
      {/*  contact me  */}
    </main>
  );
}
