import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Memo from "./components/Memo";
import Experience from "./components/Experience";
import Client from "./components/Client";
import WhatWeDo from "./components/WhatWeDo";
import Carosel from "./components/Carosel";
import Update from "./components/Update";
import Partnership from "./components/Partnership";

export default function Home() {
  return (
    <>
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <About />
      <AboutMe />
      <Memo />
      <Experience />
      <Client />
      <WhatWeDo />
      <Carosel />
      <Update />
      <Partnership />
    </div>
    </>
  );
}
