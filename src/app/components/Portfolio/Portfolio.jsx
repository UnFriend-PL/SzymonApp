"use client";
import "./Portfolio.scss";
import Line from "../Line/Line";
import { useMenuContext } from "@/app/services/MenuContext";
import { React } from "react";

import cvwebsite from "../../../../public/img/cv_website.png";
import studioKobiet from "../../../../public/img/studio_kobiet.png";
import Image from "next/image";

export default function Portfolio() {
  const { currentSection, setCurrentSection } = useMenuContext();
  const portfolio = [
    {
      title: "Online CV - website 1.0",
      link: "https://unfriend-pl.github.io/CV/",
      image: cvwebsite,
    },
    {
      title: "Studio Kobiet Włocławek",
      link: "https://smarcinkowski.pl/studio_kobiet/",
      image: studioKobiet,
    },
  ];

  return (
    <>
      <section
        onMouseOver={() => {
          setCurrentSection("Portfolio");
        }}
        id="Portfolio"
        className="portfolio"
      >
        <div className="portfolio-wrap">
          <Line sectionName={"Portfolio"}></Line>

          {portfolio.map((item, index) => (
            <div
              className="portfolio-wrap-item"
              key={index}
              data-aos={index % 2 == 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-duration="1000"
            >
              <div className="portfolio-wrap-item-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  unoptimized={true}
                  objectFit="cover"
                />
              </div>
              <div className="portfolio-wrap-item-title">
                <a href={item.link} target="_blank">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
