"use client";
import "./Education.scss";
import bg from "../../../../public/img/education.jpg";
import Line from "../Line/Line";
import TimeLine from "../TimeLine/TimeLine";
import { useState } from "react";
import { useMenuContext } from "@/app/services/MenuContext";

const educationTitle = "Education";
const certificatesTitle = "Certificates";
const education = [
  {
    date: "Now",
    content: "Engineer in Computer Science - spec. 'Programming'",
    company: "WSB Merito Universit",
    months: "10.2021 - Now",
    position: "Computer science engineer",
  },
  {
    date: "2021",
    content: "Upon completion, I received the title of IT technician",
    company: "ZSMEiE in Toruń",
    months: "09.2017 - 05.2021",
    position: "IT technician",
  },
];
const certificates = [
  {
    date: "2022",
    content: "",
    company: "AgilePM® Foundation Certificate",
    months: "2022",
    position: "",
  },

  {
    date: "2021",
    content: "",
    company: "Java Programming Course Certificate",
    months: "2021",
    position: "",
  },
  {
    date: "2020",
    content: "",
    company: "Web Design Course Certificate",
    months: "2021",
    position: "",
  },
  {
    date: "2019",
    content: "",
    company: "Cisco IT Essentials",
    months: "2019",
    position: "",
  },
  {
    date: "2019",
    content: "",
    company: "European Union Game Design Course in Java Certificate",
    months: "2019",
    position: "",
  },
];
export default function Education() {
  const [isDisplayingCertificates, setIsDisplayingCertificates] =
    useState(false);
  const handleChangeTimeLine = () => {
    setIsDisplayingCertificates((prev) => !prev);
  };
  const { currentSection, setCurrentSection } = useMenuContext();

  return (
    <section
      onMouseOver={() => {
        setCurrentSection("Education");
      }}
      id="Education"
      className="education"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <button className="education-button" onClick={handleChangeTimeLine}>
        {isDisplayingCertificates ? educationTitle : certificatesTitle}
      </button>
      <Line sectionName={"Education"}></Line>
      <TimeLine
        title={isDisplayingCertificates ? certificatesTitle : educationTitle}
        datas={isDisplayingCertificates ? certificates : education}
      ></TimeLine>
    </section>
  );
}
