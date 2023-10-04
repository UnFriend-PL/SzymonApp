"use client";
import { useState } from "react";
import "./TimeLine.scss";

export default function TimeLine({ title, datas }) {
  const [selectedDateContentIndex, setSelectedDateContentIndex] =
    useState(null);

  const handleMouseOver = (index) => {
    setSelectedDateContentIndex(index);
  };
  const handleMouseOut = () => {
    setSelectedDateContentIndex(null);
  };
  return (
    <div className="timeLine">
      <div className="timeLine-title">
        <h2>{title}</h2>
      </div>
      <div className="timeLine-wrap">
        {datas.map((data, index) => (
          <div className="timeLine-dateWrap" key={index}>
            <div
              className={`timeLine-dateWrap-date ${
                selectedDateContentIndex === index ? "selectedDate" : ""
              }`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut()}
            >
              {data?.date}
            </div>

            <div
              className={`timeLine-dateWrap-content ${
                selectedDateContentIndex === null ||
                selectedDateContentIndex === index
                  ? `fadeIn ${
                      selectedDateContentIndex === index ? "moreContent" : ""
                    }`
                  : "fadeOut"
              }`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut()}
            >
              <span className="timeLine-dateWrap-content-months">
                {data?.months}
              </span>
              <h2 className="timeLine-dateWrap-content-company">
                {data?.company}
              </h2>
              <h3 className="timeLine-dateWrap-content-position">
                {data?.position}
              </h3>
              {selectedDateContentIndex === index ? (
                <p className="timeLine-dateWrap-content-desc">{data.content}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
