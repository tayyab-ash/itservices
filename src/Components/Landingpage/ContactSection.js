import React, { useContext } from "react";
import styles from "./ContactSection.module.css";
import btnStyles from "./ButtonStyles.module.css";
import appContext from "../Context/AppContext";

function ContactSection() {
  const contactS = useContext(appContext);
  return (
    <div>
      <div className={`${styles.contactSection}`}>
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-10 d-flex flex-column align-items-center mx-auto text-center">
            <div className={`${styles.contactHeading} mb-4`}>
              <h1>
                We start by listening and let that shape our design process,
                with our clients as partners
              </h1>
            </div>
            <div className={`${styles.contactDescription}`}>
              <span>
                We are a customer-first eCommerce agency, combining the best of
                UX design, technology and analytics to create sites that
                shoppers love and retention tactics that keep them coming back
              </span>
            </div>
            <div
              className={`${styles.contactButton} ${btnStyles.actionButtons}`}
            >
              <button
                id={contactS.contactSbtn}
                onClick={contactS.showContact}
                className={`${btnStyles.btn2}`}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default ContactSection;
