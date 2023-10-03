import "./About.scss";
import bg from "../../../../public/img/background.jpg";
import Line from "../Line/Line";

const words = ["develop websites", "coding", "thinking"];
export default function About() {
  return (
    <>
      <Line sectionName={"About"}></Line>
      <section
        id="#About"
        className="about"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="about-curtain">
          <span className="about-firstLine">Hello, my name is </span>
          <h1>
            <strong className="about-name">Szymon Marcinkowski</strong>
          </h1>
          <span className="about-secondLine">
            I <em className="">LOVE</em> develop websites
            <div class="roller">
              <span id="rolltext">
                HTML
                <br />
                CSS
                <br />
                Curiosity
                <br />
                <span id="spare-time">too much spare time?</span>
                <br />
              </span>
            </div>
          </span>
        </div>
      </section>
    </>
  );
}
