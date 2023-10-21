import "./Contact.scss";
import bg from "../../../../public/img/contact.jpg";
import email from "../../../../public/img/email.svg";
import phone from "../../../../public/img/phone.svg";

import Line from "../Line/Line";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="Contact"
      class="contact"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="contact-title">GET IN TOUCH</div>
      <dvi className="contact-wrap">
        <div className="contact-wrap-section">
          <Image width={250} height={250} src={phone}></Image>
          <a href="tel:+48600029636">+48 600 029 636</a>
        </div>
        <div className="contact-wrap-section">
          <Image width={250} height={250} src={email}></Image>
          <a href="mailto:szymonecki1233@gmail.com">
            szymonecki1233@gamail.com
          </a>
        </div>
      </dvi>
      <Line sectionName={"Contact"}></Line>
    </section>
  );
}
