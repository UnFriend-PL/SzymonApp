import Image from "next/image";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

export default function Home() {
  return (
    <main>
      <Menu></Menu>
      <About></About>
      <Experience></Experience>
    </main>
  );
}
