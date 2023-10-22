"use client";
import Image from "next/image";
import "./Menu.scss";
import { React, useEffect, useState } from "react";
import menuSvg from "../../../../public/img/menu.svg";
import { useMenuContext } from "@/app/services/MenuContext";
const menuLinks = [
  "Start",
  "Experience",
  "Skills",
  "Education",
  "Contact",
  "Interests",
];

export default function Menu() {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentSection, setCurrentSection } = useMenuContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let findSectionIndex = menuLinks.indexOf(currentSection);
    setSelectedLinkIndex(findSectionIndex);
  }, [currentSection]);
  return (
    <>
      <nav id="nav" className="nav">
        <a href="#">
          <span className="tagImitator">{"<"}</span>
          <span className="tagName">UnFriend</span>
          <span className="tagImitator">{"/>"}</span>
        </a>
        <button className="nav-menuButton" onClick={toggleMenu}>
          <span>
            <Image
              src={menuSvg}
              alt="menu"
              layout="responsive"
              width={500}
              height={300}
            />{" "}
          </span>
        </button>
        <ul className={`nav-wrap ${isMenuOpen ? "open" : ""}`}>
          {menuLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedLinkIndex(index);
              }}
            >
              <a href={`#${link}`}>
                <span
                  className={`tagName-small ${
                    selectedLinkIndex == index ? "selected" : ""
                  }`}
                >
                  {link}
                </span>
                <span className="tagImitator-small">{"/>"}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
