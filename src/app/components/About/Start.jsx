"use client";
import "./Start.scss";
import bg from "../../../../public/img/background.jpg";
import Line from "../Line/Line";
import Messenger from "./Messenger";
import { useMenuContext } from "@/app/services/MenuContext";

const messages = ["website development", "programming", "thinking"];
export default function Start() {
  const { currentSection, setCurrentSection } = useMenuContext();

  return (
    <>
      <section
        onMouseOver={() => {
          setCurrentSection("Start");
        }}
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
            <strong className="start-name" data-aos-delay="50">
              Szymon Marcinkowski
            </strong>
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
