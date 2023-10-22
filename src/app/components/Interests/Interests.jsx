"use client";
import "./Interests.scss";
import TimeLine from "../TimeLine/TimeLine";
import Line from "../Line/Line";
import { useMenuContext } from "@/app/services/MenuContext";
import music from "../../../../public/img/music.svg";
import design from "../../../../public/img/design.svg";
import programming from "../../../../public/img/programming.svg";
import drone from "../../../../public/img/drone.svg";
import gym from "../../../../public/img/gym.svg";
import travel from "../../../../public/img/travel.svg";
import cosmos from "../../../../public/img/cosmos.svg";
import learn from "../../../../public/img/learn.svg";
import Image from "next/image";

export default function Interests() {
  const { currentSection, setCurrentSection } = useMenuContext();
  const data = [
    { title: "Design", icon: design },
    { title: "programming", icon: programming },
    { title: "music", icon: music },
    { title: "gym", icon: gym },
    { title: "drones", icon: drone },
    { title: "traveling", icon: travel },
    { title: "cosmos", icon: cosmos },
    { title: "learning", icon: learn },
  ];
  return (
    <section
      onMouseOver={() => {
        setCurrentSection("Interests");
      }}
      id="Interests"
      className="interests"
    >
      <h1>I LIKE</h1>
      <div className="interests-wrap">
        {data.map((element, index) => (
          <div className="interests-wrap-element" key={index}>
            <div className="interests-wrap-element-icon">
              <Image
                width={100}
                height={100}
                src={element.icon}
                alt={element.title}
              />
            </div>
            <div className="interests-wrap-element-title">{element.title}</div>
          </div>
        ))}
      </div>
      <Line sectionName={"Interests"}></Line>
    </section>
  );
}
