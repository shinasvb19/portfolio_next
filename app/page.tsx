import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/*  about  */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/*  Experience  */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/*  skills  */}
      {/*  projects  */}
      {/*  contact me  */}
    </main>
  );
}
