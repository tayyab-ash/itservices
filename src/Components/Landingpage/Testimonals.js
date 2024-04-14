import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import styles from "./Testimonals.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import img1 from "./images/person_1.jpg.webp";
// eslint-disable-next-line
import img2 from "./images/person_2.jpg.webp";
// eslint-disable-next-line
import img3 from "./images/person_3.jpg.webp";

function Testimonals() {
  // AOS.init();
  const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div className={`item ${styles.item}`} data-value="1">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${styles.item}`} data-value="2">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${styles.item}`} data-value="3">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${styles.item}`} data-value="4">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${styles.item}`} data-value="5">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${styles.item}`} data-value="6">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${styles.item}`} data-value="7">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${styles.item}`} data-value="8">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${styles.item}`} data-value="9">
      <div className={`${styles.testimonalv2}`}>
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.”
        </p>
        <div className={`${styles.author} d-flex`}>
          <div className={`${styles.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${styles.authorname} `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
  ];
  return (
    <div>
      <div className={`${styles.Testimonals}`}>
      <div className="container">
        <div className="row mb-5" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-10 d-flex flex-column align-items-center mx-auto text-center">
            <div className={`${styles.clientsHeading} mb-4`}>
              <h1>What our clients say is extremely important to us</h1>
            </div>
            <div className={`${styles.clientsDescription}`}>
              <span>
                We are a customer-first eCommerce agency, combining the best of
                UX design, technology and analytics to create sites that
                shoppers love and retention tactics that keep them coming back
              </span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="default"
            keyboardNavigation="true"
            animationDuration={1000}
            autoPlay="true"
            infinite="true"
            autoPlayInterval={1500}
            disableButtonsControls="true"
          />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Testimonals;
