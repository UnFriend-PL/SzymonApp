"use client";
import { useEffect } from "react";
import Line from "../Line/Line";
import "./Skills.scss";
import Prism from "prismjs";

var code = [
  "namespace SzymonSkillsApp {",
  "   internal class Program {",
  "       static void Main(string[] args) {",
  '           Console.WriteLine("Hello, World!");',
  "       }",
  "   }",
  "}",
];

export default function Skills() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section id="Skills" className="skills-wrap">
      {code.map((line, index) => (
        <pre className="skills-line-wrap" key={index}>
          <code className="language-csharp skills-line-wrap-content">
            {line}
          </code>
        </pre>
      ))}
      <Line sectionName={"Skills"}></Line>
    </section>
  );
}
