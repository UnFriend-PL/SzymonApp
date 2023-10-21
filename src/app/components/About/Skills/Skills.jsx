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
    { title: "Csharp", class: "devicon-csharp-plain" },
    { title: "JavaScript", class: "devicon-javascript-plain" },
    { title: "Java", class: "devicon-java-plain" },
    { title: "React", class: "devicon-react-original" },
    { title: "HTML", class: "devicon-html5-plain" },
    { title: "CSS", class: "devicon-css3-plain" },
    { title: "SQL", class: "devicon-mysql-plain" },
    { title: "GitHub", class: "devicon-github-plain" },
    { title: "Communication skills", class: "" },
    { title: "Can-do attitude", class: "" },
    { title: "Attention to detail", class: "" },
    { title: "Problem-solving", class: "" },
    { title: "Perseverance", class: "" },
    { title: "Teamwork", class: "" },
    { title: "Creativity", class: "" },
  ];
  return (
    <section id="Skills" className="skills-wrap">
      <div className="skils-squares-wrap">
        {data.map((skill, index) => (
          <div className="skills-square" key={index}>
            <div className="skills-square-title">
              {skill.class !== "" ? (
                <div className="skills-square-title-icon">
                  <i className={skill.class}></i>
                </div>
              ) : (
                <></>
              )}
              <div className="skills-square-title-text">{skill.title}</div>
            </div>
          </div>
        ))}
      </div>
      <Line sectionName={"Skills"}></Line>
    </section>
  );
}
