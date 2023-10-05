import "./Experience.scss";
import TimeLine from "../TimeLine/TimeLine";
import bg from "../../../../public/img/experience.jpg";
import Line from "../Line/Line";

const title = "Experience";
const datas = [
  {
    date: "Now",
    content: "Please contact with me :)",
    company: "Looking for job",
    months: "08.2023 - Now",
    position: "",
  },
  {
    date: "2023",
    content:
      "In my role, I was responsible for developing automated tests and software applications using the C# programming language. I conducted validation processes to ensure the accuracy and reliability of our software solutions.  I was in charge of configuring machines to run our software efficiently. I took part in improving the development environment to facilitate the development of our software.",
    company: "Solidigm",
    months: "08.2022 - 08.2023",
    position: "Intern Software Engineer",
  },
  {
    date: "2022",
    content:
      "In my role, I provided customer service by presenting the bank's offers to clients. Additionally, I was responsible for document archiving and organization within the bank.",
    company: "mBank ",
    months: "01.2022 - 08.2022",
    position: "Assistant",
  },
  {
    date: "2020",
    content:
      "Modernization of the electronic order system, Modernization of the ticket sales system.",
    company: "InfoComp",
    months: "08.2020 - 10.2020",
    position: "Front End Developer",
  },

  {
    date: "2020",
    content: "Developing the company's internal project ",
    company: "InfoComp",
    months: "06.2020 - 07.2020",
    position: "School Internship",
  },
  {
    date: "2020",
    content:
      "I helped customers who called with their technical problems and took calls.",
    company: "TellBridge",
    months: "04.2020 - 07.2020",
    position: "Helpdesk/Office Assistant",
  },
];
export default function Experience() {
  return (
    <section
      id="Experience"
      className="experience"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <Line sectionName={"Experience"}></Line>
      <TimeLine title={title} datas={datas}></TimeLine>
    </section>
  );
}
