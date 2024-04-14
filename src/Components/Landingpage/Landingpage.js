import React from "react";
import HeroSection from "./HeroSection";
import styles from "./Landingpage.module.css";
import Services from "./Services";
import WhyUs from "./WhyUs";
import AboutUs from "./AboutUs";
import Testimonals from "./Testimonals";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "./ContactUs";
import ContactSection from "./ContactSection";

function Landingpage() {
    AOS.init();
  return (
    <div>
      <div className={`${styles.contactUs}`}>
        <ContactUs />
      </div>
      <div className={`${styles.section1}`}>
        <HeroSection />
      </div>
      <div className={`${styles.section2}`}>
        <Services />
      </div>
      <div className={`${styles.section3}`}>
        <WhyUs />
      </div>
      <div className={`${styles.section4}`}>
        <AboutUs />
      </div>
      {/* <div className={`${styles.section5}`}>
        <Testimonals />
      </div>
      <div className={`${styles.section6}`}>
        <ContactSection />
      </div> */}
    </div>
  );
}

export default Landingpage;
