import React from "react";
import styles from "./AboutUs.module.css";
import styles2 from "./WhyUs.module.css";
import btnStyles from "./ButtonStyles.module.css";
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutImg from "./images/About us page-rafiki.png";

function AboutUs() {
  AOS.init();
  return (
    <div>
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
            <div className="textSection">
              <div className={`${styles2.lightText}`}>
                <span className={`${styles2.lightText1}`}>About Us</span>
              </div>
              <div className={`${styles2.whyUsHeading}`}>
                <h1>Our staff comes from many different disciplines</h1>
              </div>
              <div className={`${styles.aboutDescription}`}>
                <p>
                  If you want the best care possible for your four-legged
                  friend, our certified professionals are here to help
                </p>
              </div>
            </div>
            <div
              className={`${styles2.whyUsButtons} ${btnStyles.actionButtons}`}
            >
             <Link to="/aboutus"> <button className={`${btnStyles.btn2}`}>About Us</button></Link>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap" data-aos="fade-left" data-aos-delay="300">
              <img className="img-fluid" src={aboutImg} alt="Whyusimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
