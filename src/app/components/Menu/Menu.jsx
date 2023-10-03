import Image from "next/image";
import "./Menu.scss";

export default function Menu() {
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
          <li>
            <a href="#start">
              <span className="tagImitator-small">{"<"}</span>
              <span className="tagName-small">Start</span>
              <span className="tagImitator-small">{"/>"}</span>
            </a>
          </li>
          <li>
            <a href="#start">
              <span className="tagImitator-small">{"<"}</span>
              <span className="tagName-small">About</span>
              <span className="tagImitator-small">{"/>"}</span>
            </a>
          </li>
          <li>
            <a href="#start">
              <span className="tagImitator-small">{"<"}</span>
              <span className="tagName-small">Experience</span>
              <span className="tagImitator-small">{"/>"}</span>
            </a>
          </li>
          <li>
            <a href="#start">
              <span className="tagImitator-small">{"<"}</span>
              <span className="tagName-small">Education</span>
              <span className="tagImitator-small">{"/>"}</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
