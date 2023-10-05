import "./About.scss";
import bg from "../../../../public/img/background.jpg";
import Line from "../Line/Line";
import Messenger from "./Messenger";

const messages = ["develop websites", "programming", "thinking"];
export default function About() {
  return (
    <>
      <section
        id="#About"
        className="about"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <Line sectionName={"About"}></Line>

        <div className="about-curtain">
          <span className="about-firstLine">Hello, my name is </span>
          <h1>
            <strong className="about-name">Szymon Marcinkowski</strong>
          </h1>
          <div className="about-secondLine">
            I <em className="">LOVE </em>
            <Messenger messages={messages} />
          </div>
        </div>
      </section>
    </>
  );
}
