"use client";
import { useEffect } from "react";
import Line from "../../Line/Line";
import "./Skills.scss";

// var code = [
//   "namespace SzymonSkillsApp {",
//   "   internal class Program {",
//   "       static void Main(string[] args) {",
//   '           Console.WriteLine("Hello, World!");',
//   "       }",
//   "   }",
//   "}",
// ];

// var code1 = (line) => {
//   var x = line.split(" ");
//   return (
//     <>
//       {x.map((element, index) => (
//         <div key={index} className={element}>
//           {element}
//         </div>
//       ))}
//       <pre></pre>
//     </>
//   );
// };

export default function Skills() {
  const data = [
    { lang: "C#", class: "devicon-csharp-plain", text: "" },
    { lang: "C#", class: "devicon-csharp-plain", text: "" },
  ];
  return (
    <section id="Skills" className="skills-wrap">
      <div className="skils-squares-wrap">
        <div className="skills-square">
          <div className="skills-square-title">
            <div className="skills-square-title-icon">
              <i class="devicon-csharp-plain"></i>
            </div>
            <div className="skills-square-title-text">
              Programming Languages
            </div>
          </div>
          <div className="skills-square-content">
            <div className="skills-square-content-skill">c#</div>
          </div>
        </div>
        <div className="skills-square">
          <div className="skills-square-title">
            <div className="skills-square-title-icon">IMG</div>
            <div className="skills-square-title-text">
              Programming Languages
            </div>
          </div>
          <div className="skills-square-content">
            <div className="skills-square-content-skill">c#</div>
          </div>
        </div>
        <div className="skills-square">
          <div className="skills-square-title">
            <div className="skills-square-title-icon">IMG</div>
            <div className="skills-square-title-text">
              Programming Languages
            </div>
          </div>
          <div className="skills-square-content">
            <div className="skills-square-content-skill">c#</div>
          </div>
        </div>{" "}
        <div className="skills-square">
          <div className="skills-square-title">
            <div className="skills-square-title-icon">IMG</div>
            <div className="skills-square-title-text">
              Programming Languages
            </div>
          </div>
          <div className="skills-square-content">
            <div className="skills-square-content-skill">c#</div>
          </div>
        </div>{" "}
        <div className="skills-square">
          <div className="skills-square-title">
            <div className="skills-square-title-icon">IMG</div>
            <div className="skills-square-title-text">
              Programming Languages
            </div>
          </div>
          <div className="skills-square-content">
            <div className="skills-square-content-skill">c#</div>
          </div>
        </div>{" "}
        <div className="skills-square">
          <div className="skills-square-title">
            <div className="skills-square-title-icon">IMG</div>
            <div className="skills-square-title-text">
              Programming Languages
            </div>
          </div>
          <div className="skills-square-content">
            <div className="skills-square-content-skill">c#</div>
          </div>
        </div>
      </div>
      {/* <div className="skills-line-wrap">
        <pre className="skills-line-wrap-content">
          <span className="object">function </span>
          <span className="function">Skills</span>
          <span className="tag">{`(){`}</span>
        </pre>
      </div>
      <div className="skills-line-wrap">
        <div className="skills-line-wrap">
          <pre className="skills-line-wrap-content">
            <span className="tag">{`}`}</span>
          </pre>
        </div>
      </div> */}
      <Line sectionName={"Skills"}></Line>
    </section>
  );
}
