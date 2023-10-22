import Image from "next/image";
import Menu from "./components/Menu/Menu";
import Start from "./components/About/Start";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { MenuContextProvider } from "./services/MenuContext";
import Interests from "./components/Interests/Interests";

export default function Home() {
  return (
    <main>
      <MenuContextProvider>
        <Menu></Menu>
        <Start></Start>
        <Experience></Experience>
        <Skills></Skills>
        <Education></Education>
        <Contact></Contact>
        <Interests></Interests>
      </MenuContextProvider>
    </main>
  );
}
