import Image from "next/image";
import Menu from "./components/Menu/Menu";
import Start from "./components/About/Start";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/About/Skills/Skills";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Menu></Menu>
      <Start></Start>
      <Experience></Experience>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
    </main>
  );
}
