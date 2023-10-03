import "./About.scss";
import bg from "../../../../public/img/background.jpg";
import Line from "../Line/Line";
export default function About() {
  return (
    <>
      <Line sectionName={"About"}></Line>
      <section
        id="#About"
        className="About"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></section>
    </>
  );
}
