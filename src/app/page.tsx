'use client'

import Ability from "@/components/Ability";
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Scene from "@/components/Scene";
import { useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    console.log('scrolled')
    const target = e.currentTarget
    const progress = target.scrollTop / (target.scrollHeight - target.clientHeight)
    setScrollProgress(progress)
  }

  return (
    <>
      <Scene progress={scrollProgress} />
      <div onScroll={(e) => handleScroll(e)} className="relative z-10 w-full h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
        <Header />
        <Hero />
        <About />
        <Ability />
        <Info />
      </div>
    </>
  );
}
