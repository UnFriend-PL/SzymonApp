"use client";
import "./Contact.scss";
import bg from "../../../../public/img/contact.jpg";
import email from "../../../../public/img/email.svg";
import phone from "../../../../public/img/phone.svg";

import Line from "../Line/Line";
import Image from "next/image";
import { useMenuContext } from "@/app/services/MenuContext";

export default function Contact() {
  const { currentSection, setCurrentSection } = useMenuContext();

  return (
    <section
      onMouseOver={() => {
        setCurrentSection("Contact");
      }}
      id="Contact"
      className="contact"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="contact-title" data-aos="fade-up">
        GET IN TOUCH
      </div>
      <dvi className="contact-wrap">
        <div className="contact-wrap-section" data-aos="fade-up">
          <span className="material-icons">phone_android</span>
          <span className="contact-wrap-section-text"> Call to me</span>
          <a href="tel:+48600029636">+48 600 029 636</a>
        </div>
        <div className="contact-wrap-section" data-aos="fade-up">
          <span className="material-icons">email</span>
          <span className="contact-wrap-section-text"> Send me an email</span>
          <a href="mailto:szymonecki1233@gmail.com">
            szymonecki1233@gamail.com
          </a>
        </div>
        <div className="contact-wrap-section " data-aos="fade-up">
          <i className="devicon-linkedin-plain material-icons"></i>
          <span className="contact-wrap-section-text"> Connect with me</span>
          <a
            href="https://www.linkedin.com/in/szymonmarcinkowski20/"
            target="_blank"
          >
            Szymon Marcinkowski
          </a>
        </div>
        <div className="contact-wrap-section" data-aos="fade-up">
          <i className="devicon-github-original material-icons"></i>
          <span className="contact-wrap-section-text">
            Check my repositories
          </span>
          <a href="https://github.com/UnFriend-PL" target="_blank">
            UnFriendPL
          </a>
        </div>
      </dvi>
      <Line sectionName={"Contact"}></Line>
    </section>
  );
}
