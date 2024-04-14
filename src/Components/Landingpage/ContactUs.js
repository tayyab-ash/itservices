import React, { useContext } from "react";
import styles from "./ContactUs.module.css";
import appContext from "../Context/AppContext";

function ContactUs() {
    const contact = useContext(appContext)
  return (
    <div>
      <div id={contact.contactPg} className={`${styles.contactUs} ${styles[contact.contact]}`}>
        <div className={`${styles.contactUsInner}`}>
          <div
            className={`${styles.contactUsHeading} d-flex w-100 justify-content-between`}
          >
            <span>Contact Us</span>
              <i onClick={contact.showContact} className="fa-solid fa-xmark"></i>
          </div>
          <hr className={`${styles.hr}`} />
          <p>
            Give us a call or fill in the form below and we will contact you. We
            endeavor to answer all inquiries within 24 hours on business days.
          </p>
          <div
            className={`${styles.contactDetails} d-flex justify-content-between `}
          >
            <div className={`${styles.contactInfo}`}>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:0404507839">0404507839</a>
            </div>
            <div className={`${styles.contactInfo}`}>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info@clockstudio.com">info@clockstudio.com</a>
            </div>
          </div>

          <div className={`${styles.contactForm}`} >
            <form action="">
                <input className="w-100" type="text" placeholder="Enter your name" />
                <input className="w-100" type="email" placeholder="Enter your email"/>
                <input className="w-100" type="phone" placeholder="Enter your phone"/>
                <textarea className={`w-100`} rows="4" type="text" placeholder="Your message"/>
                <button type="submit" className={`w-100`}>Submit</button>
            </form>
          </div>
          <div className={`${styles.socialLinks}`}>
            <a href="/"><div className={`${styles.link}`}><i className="fa-brands fa-facebook"></i></div></a>
            <a href="/"><div className={`${styles.link}`}><i className="fa-brands fa-instagram"></i></div></a>
            <a href="/"><div className={`${styles.link}`}><i className="fa-brands fa-x-twitter"></i></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
