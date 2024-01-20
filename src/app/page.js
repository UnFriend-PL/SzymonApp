"use client";
import React, { useEffect } from "react";
import Menu from "./components/Menu/Menu";
import Start from "./components/About/Start";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { MenuContextProvider } from "./services/MenuContext";
import Interests from "./components/Interests/Interests";
import Portfolio from "./components/Portfolio/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <MenuContextProvider>
        <Menu></Menu>
        <Start></Start>
        <Experience></Experience>
        <Skills></Skills>
        <Education></Education>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Interests></Interests>
      </MenuContextProvider>
    </main>
  );
}
