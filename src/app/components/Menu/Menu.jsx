"use client";
import Image from "next/image";
import "./Menu.scss";
import { React, useState } from "react";

const menuLinks = ["Start", "About", "Experience", "Education"];

export default function Menu() {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);

  return (
    <>
      <nav id="nav" className="nav">
        <a href="#">
          <span className="tagImitator">{"<"}</span>
          <span className="tagName">UnFriend</span>
          <span className="tagImitator">{"/>"}</span>
        </a>
        <button hidden={true}>Menu</button>
        <ul className="nav-wrap">
          {menuLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedLinkIndex(index);
              }}
            >
              <a href="#start">
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
          {/* <li>
            <a href="#start">
              <span className="tagName-small">Start</span>
              <span className="tagImitator-small">{"/>"}</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
