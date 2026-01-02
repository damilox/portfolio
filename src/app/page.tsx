"use client"

import { About } from "./components/sections/About";
import Contact from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import Services from "./components/sections/Services";
import { TechStack } from "./components/sections/TechStack"

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full">
      <Hero />
      <About/>
      <TechStack/>
      <Projects/>
      <Services/>
      <Contact/>
    </main>
  );
}

