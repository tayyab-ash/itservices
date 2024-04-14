import React from "react";
import styles from "./ServicesPage.module.css";
import serviceImg from "./images/services-classic.jpg";
import serviceImg2 from "./images/service.jpg";
import ServicesDescText from "./ServicesDescText";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonals from "../Landingpage/Testimonals";
import ContactSection from "../Landingpage/ContactSection";
import ContactUs from "../Landingpage/ContactUs";

function ServicesPage() {
  AOS.init();
  return (
    <div>
      <div className={`${styles.services}`}>
      <div className={`${styles.contactUs}`}>
        <ContactUs />
      </div>
        <div className={`${styles.imageSection} g-0 row position-relative`}>
          <div
            className={`position-absolute col-lg-6 col-md-8 col-10 text-center`}
          >
            <h2>Experaince Our Innovative Solutions Suite</h2>
            <p>
              Our design and business core competencies make company goals work
              on future-oriented systems and day our consultants are proud to
              help.
            </p>
          </div>
          <div className={`${styles.img}`}>
          <img src={serviceImg} alt="" />
          </div>
          
        </div>

        <div className={`${styles.new}`}>
          <div className="container">
            <div className="row mb-5">
              <div
                className={`col-lg-8 mx-auto text-center`}
                data-aos="zoom-in"
              >
                <div className={`${styles.servicesHeading} mb-4`}>
                  <h1>Our Services Include</h1>
                </div>
                <div className={`${styles.servicesDescription}`}>
                  <span>
                    We are a customer-first eCommerce agency, combining the best
                    of UX design, technology and analytics to create sites that
                    shoppers love and retention tactics that keep them coming
                    back
                  </span>
                </div>
              </div>
            </div>


            <div className="row justify-content-around align-items-center py-5">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                <ServicesDescText />
              </div>
              <div className="col-lg-6">
                <div className="img-wrap" data-aos="fade-left" data-aos-delay="200">
                  <img src={serviceImg2} alt="" className={`${styles.imgShadow} img-fluid`} />
                </div>
              </div>
            </div>

            <div className="row justify-content-around align-items-center py-5">
              <div className="col-lg-6">
                <div className="img-wrap" data-aos="fade-right" data-aos-delay="100">
                  <img src={serviceImg2} alt="" className={`${styles.imgShadow} img-fluid`} />
                </div>
              </div>
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="200">
                <ServicesDescText />
              </div>
            </div>

            <div className="row justify-content-around align-items-center py-5">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                <ServicesDescText />
              </div>
              <div className="col-lg-6">
                <div className="img-wrap" data-aos="fade-left" data-aos-delay="200">
                  <img src={serviceImg2} alt="" className={`${styles.imgShadow} img-fluid`} />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
