import { React, useContext } from "react";
import heroImage from "./images/Programmer-rafiki.png";
import styles from "./HeroSection.module.css";
import btnStyles from './ButtonStyles.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import appContext from "../Context/AppContext";

function HeroSection() {
  const heroS = useContext(appContext)
  // const handleBodyClick = (event) => {
  //   const cntctbtn = document.getElementById('cntctBtn');
  //   const cntctpg = document.getElementById('cntctpg');
  //   if (navico && !navico.contains(event.target) && !mobnav.contains(event.target) ) {
  //     heroS.setcontact('');
  //   }
  // };
  // document.body.addEventListener("click", handleBodyClick);
  AOS.init({
    duration: "500"
  });
  return (
    <div>
      <div className={`${styles.heroContainer} container align-items-center`}>
        <div className="row justify-content-between align-items-center">
          <div  className={`col-lg-6`}>
            <div className={`${styles.headingSection}`}>
            <div className={`${styles.lightText}`}
            data-aos="fade-up"
            data-aos-delay="100"
            >
              <span className={`${styles.lightText1}`}>
                Welcome to Clock Studio
              </span>
              <span className={`${styles.lightText2}`}>
                Your partner for best IT solutions
              </span>
            </div>
            <div className={`${styles.heroHeading}`}
            data-aos="fade-up"
            data-aos-delay="100"
            >
              <h1 >
                Get Personalized Solutions for Your Cutting Edge Ideas
              </h1>
            </div>
            <div className={`${styles.heroDescription}`}
            data-aos="fade-up"
            data-aos-delay="200"
            >
              <p>
                We have the knowledge and expertise in design and modern
                programming languages and platforms
                 {/* to help startups and growing companies build successful products. */}
              </p>
            </div>
            </div>
            
            <div className={`${styles.heroButtons} ${btnStyles.actionButtons}`}
            data-aos="fade-up"
            data-aos-delay="300"
            >
              <button onClick={heroS.showContact} id={heroS.contactBtn} className={`${btnStyles.btn1}`}>Contact Us</button>
              <button className={`${btnStyles.btn2}`}>Explore Clock Studio <i className={`${styles.exploreIcon} fa-solid fa-greater-than`}></i></button>
          </div>
          </div>
          <div className="col-lg-6">
            <div className="img-wrap"
            data-aos="fade-left"
            data-aos-delay="400"
            >
            <img className="img-fluid" src={heroImage} alt="heroImage" />
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
