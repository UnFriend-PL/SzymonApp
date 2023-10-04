import "./Experience.scss";
import TimeLine from "./TimeLine/TimeLine";
import bg from "../../../../public/img/experience.jpg";
import Line from "../Line/Line";

const title = "Experience";
const datas = [
  {
    date: "Now",
    content: "Skontaktuj się ze mną :)",
    company: "Jobless",
    months: "08.2023 - Now",
    position: "",
  },
  {
    date: "2023",
    content:
      "Na tym stanowisku byłem odpowiedzialny za tworzenie zautomatyzowanych testów i aplikacji przy użyciu języka programowania C#. Przeprowadzałem procesy walidacji, aby zapewnić dokładność i niezawodność naszych rozwiązań programowych.  Byłem odpowiedzialny za konfigurację maszyn w celu wydajnego uruchamiania naszego oprogramowania. Brałem udział w ulepszaniu środowiska programistycznego, aby ułatwić rozwój naszego oprogramowania.",
    company: "Solidigm",
    months: "08.2022 - 08.2023",
    position: "Intern Software Engineer",
  },
  {
    date: "2023",
    content:
      "W mojej roli zapewniałem obsługę klienta poprzez prezentowanie ofert banku klientom. Dodatkowo byłem odpowiedzialny za archiwizację i organizację dokumentów w banku.",
    company: "mBank ",
    months: "01.2022 - 08.2022",
    position: "Assistant",
  },
  {
    date: "2020",
    content:
      "Modernizacja elektronicznego systemu zamówień, Modernizacja systemu sprzedaży biletów.",
    company: "InfoComp",
    months: "08.2020 - 10.2020",
    position: "Front End Developer",
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
