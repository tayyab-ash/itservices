import React from "react";
import styles from "./Services.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  AOS.init();
  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <div className={`col-lg-7 mx-auto text-center`}
          data-aos="zoom-in"
          >
            <div className={`${styles.servicesHeading} mb-4`}>
              <h1>Our Services</h1>
            </div>
            <div className={`${styles.servicesDescription}`}>
              <span>
                We are a customer-first eCommerce agency, combining the best of
                UX design, technology and analytics to create sites that
                shoppers love and retention tactics that keep them coming back
              </span>
            </div>
          </div>
        </div>

        <div className={`row justify-content-center ${styles.cardContainer} g-0`}>

          <div className={`${styles.card} col-lg-4`}
          data-aos="fade-up"
          data-aos-delay="100"
          >
            <div className="text-center">
              <div className={`${styles.cardIcon}`}>
                <i className="fa-solid fa-thumbs-up"></i>
              </div>
              <h3>IT Consulting</h3>
              <p >
              We help you develop apps to deliver digital services and technology.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>

          <div className={`${styles.card} col-lg-4`}
          data-aos="fade-up"
          data-aos-delay="200"
          >
            <div className="text-center">
              <div className={`${styles.cardIcon} ${styles.cardIcon2}`}>
              <i className="fa-solid fa-code"></i>
              </div>
              <h3>Development</h3>
              <p >
              We help you develop apps to deliver digital services and technology.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>

          <div className={`${styles.card} col-lg-4`}
          data-aos="fade-up"
          data-aos-delay="300"
          >
            <div className="text-center">
              <div className={`${styles.cardIcon} ${styles.cardIcon3}`}>
              <i className="fa-solid fa-pen-nib"></i>
              </div>
              <h3>Data Analytics</h3>
              <p >
              We help you develop apps to deliver digital services and technology.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services;
