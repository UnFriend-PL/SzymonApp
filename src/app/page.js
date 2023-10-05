import Image from "next/image";
import Menu from "./components/Menu/Menu";
import Start from "./components/About/Start";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

export default function Home() {
  return (
    <main>
      <Menu></Menu>
      <Start></Start>
      <Experience></Experience>
      <Education></Education>
    </main>
  );
}
