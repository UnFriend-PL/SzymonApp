import "./Start.scss";
import bg from "../../../../public/img/background.jpg";
import Line from "../Line/Line";
import Messenger from "./Messenger";

const messages = ["develop websites", "programming", "thinking"];
export default function Start() {
  return (
    <>
      <section
        id="Start"
        className="start"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <Line sectionName={"Start"}></Line>

        <div className="start-curtain">
          <span className="start-firstLine">Hello, my name is </span>
          <h1>
            <strong className="start-name">Szymon Marcinkowski</strong>
          </h1>
          <div className="start-secondLine">
            I <em className="">LOVE </em>
            <Messenger messages={messages} />
          </div>
        </div>
      </section>
    </>
  );
}
