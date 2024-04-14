import React from "react";
import styles from "./AboutUsPage.module.css";
import aboutImg from "./images/about-us-classic.jpg";
import img2 from "./images/mimi-thian-vdXMSiX-n6M-unsplash.jpg";
import person from "./images/person_3.jpg.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-circular-progressbar/dist/styles.css";
import ContactUs from "../Landingpage/ContactUs";

function AboutUsPage() {
  AOS.init();
  return (
    <div>
      <div className={`${styles.aboutUs}`}>
      <div className={`${styles.contactUs}`}>
        <ContactUs/>
      </div>
        <div className={`${styles.imageSection} g-0 row position-relative`}>
          <div
            className={`position-absolute col-lg-6 col-md-8 col-10 text-center`}
          >
            <h2>Things to Know About Us</h2>
            <p>
              Our design and business core competencies make company goals work
              on future-oriented systems and day our consultants are proud to
              help.
            </p>
          </div>
          <div className={`${styles.img}`}>
            <img src={aboutImg} alt="" />
          </div>
        </div>

        <div className={`${styles.section1}`}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div
                className={`${styles.textArea} col-lg-5`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className={`${styles.lightText}`}>
                  <span>Get to know about us</span>
                </div>
                <div className={`${styles.aboutHeading} mt-3`}>
                  <h1>We provide the best of your choice</h1>
                </div>
                <div className={`${styles.aboutDescription}`}>
                  <p>
                    Our design and business core competencies make company goals
                    work on future-oriented systems and day our consultants are
                    proud to help.Our design and business core competencies make
                    company goals work on future-oriented systems and day our
                    consultants are proud to help.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className={`${styles.sectionImg}`}>
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.section2}`}>
          <div className="container">
            <div className="row mb-5">
              <div
                className={`col-lg-10 mx-auto text-center`}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className={`${styles.servicesHeading} mb-4`}>
                  <h1>Our staff comes from many different disciplines</h1>
                </div>
                <div className={`${styles.servicesDescription}`}>
                  <span>
                    If you want the best care possible for your four-legged
                    friend, our certified professionals are here to help
                  </span>
                </div>
              </div>
            </div>

            <div className="row justify-content-center g-0">
              <div
                className={`${styles.profileCard} text-center col-lg-4`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={person} alt="" />
                <h3>Luke Skywalker</h3>
                <span>Manager</span>
                <p>
                  Creative directors are creative leads atadvertising agencies
                  or in house for the marketing
                </p>
              </div>

              <div
                className={`${styles.profileCard} text-center col-lg-4`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={person} alt="" />
                <h3>Luke Skywalker</h3>
                <span>Manager</span>
                <p>
                  Creative directors are creative leads atadvertising agencies
                  or in house for the marketing
                </p>
              </div>

              <div
                className={`${styles.profileCard} text-center col-lg-4`}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img src={person} alt="" />
                <h3>Luke Skywalker</h3>
                <span>Manager</span>
                <p>
                  Creative directors are creative leads atadvertising agencies
                  or in house for the marketing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.section3}`}>
          <div className="container">
          <div className="row mb-5">
              <div
                className={`col-lg-10 mx-auto text-center`}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className={`${styles.servicesHeading} mb-4`}>
                  <h1>We build digital brands and experiences</h1>
                </div>
                <div className={`${styles.servicesDescription}`}>
                  <span>
                  We design, build and support websites and apps for clients worldwide.
We make your business stand out. Interested? Let's chat.
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center g-0">
              <div className={`${styles.progressCard} col-lg-3`} data-aos="fade-up" data-aos-delay="100">
                <h1>5.5</h1>
                <span>Years Experiance</span>
              </div>
              <div className={`${styles.progressCard} col-lg-3`} data-aos="fade-up" data-aos-delay="200">
                <h1>50+</h1>
                <span>Project challanges</span>
              </div>
              <div className={`${styles.progressCard} col-lg-3`} data-aos="fade-up" data-aos-delay="300">
                <h1>1000+</h1>
                <span>Positive Reviews</span>
              </div>
              <div className={`${styles.progressCard} col-lg-3`} data-aos="fade-up" data-aos-delay="400">
                <h1>100K+</h1>
                <span>Social Reach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
