import React from "react";
import styles from "./WhyUs.module.css";
import btnStyles from "./ButtonStyles.module.css";
import Whyusimg from "./images/ Why-choose-us-page-amico.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

function WhyUs() {
  // AOS.init();
  return (
    <div>
      <div className="container">
        <div className="row justify-content-around align-items-center">

          <div className={`col-lg-5`} data-aos="fade-right" data-aos-delay="300">
            <div className="img-wrap">
              <img className="img-fluid" src={Whyusimg} alt="Whyusimage" />
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
            <div className="textSection">
              <div className={`${styles.lightText}`}>
                <span className={`${styles.lightText1}`}>
                  Why choose Cock Studio?
                </span>
              </div>
              <div className={`${styles.whyUsHeading}`}>
                <h1>Get Personalized Solutions for Your Cutting Edge Ideas</h1>
              </div>
              <div className={`${styles.whyUsDescription}`}>
                <p>
                  We develop enjoyable consumer experiences, from digital
                  strategy and content to media and analysis. Leading to
                  meaningful results and satisfied clients.
                </p>
              </div>
            </div>

            <div
              className={`${styles.whyUsButtons} ${btnStyles.actionButtons}`}
            >
              <button className={`${btnStyles.btn2}`}>
                Explore Clock Studio{" "}
                <i className={`${styles.exploreIcon} fa-solid fa-greater-than`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
