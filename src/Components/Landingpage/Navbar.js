import styles from "./Navbar.module.css";
import btnStyles from "./ButtonStyles.module.css";
import { useContext, useState } from "react";
import appContext from "../Context/AppContext";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const nav = useContext(appContext);

  return (
    <div>
      <div className={`${styles.navContainer} ${nav.header? styles.navBg:""} `}>
        <nav
          className={`${styles.navBar} d-flex container align-content-center justify-content-between py-3`}
        >
          <div className="logo d-flex align-items-center">
            <div className={`${styles.navHeading} mb-0`}>
              <span className={`${styles.htext1}`}>Clock</span><span className={`${styles.htext2}`}>Studio</span>
            </div>
            {/* <h3 className={`${styles.navHeading} mb-0`}>ClockStudio</h3> */}
          </div>

          <div className="nav-items d-flex align-items-center justify-content-center">
            <ul className={`${styles.navitems} d-flex list-unstyled mb-0 p-0`}>
              <li>
              <NavLink
                  className={`${location.pathname === '/'? styles.navItemActive:""}`}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={`${location.pathname === '/services'? styles.navItemActive:""}`} to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink className={`${location.pathname === '/aboutus'? styles.navItemActive:""}`} to="/aboutus">About Us</NavLink>
              </li>
            </ul>
          </div>
          <div className={`${styles.navButtons} ${btnStyles.actionButtons}`}>
            <button className={` ${btnStyles.btn1} mx-2`}>Login</button>
            <button id="signupBtn" className={`${btnStyles.btn2}  `}>
              <span className={`${styles.txtSignup}`}>Signup</span>
            </button>
          </div>
          <div className={`${styles.menuIco}`}  >
            <i onClick={nav.showMobileNav} className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </div>

      <div className={`${styles.mobileNav} ${styles[nav.navShow]}`}>
        <div className={`${styles.mobNavContainer} container`}>
          <ul>
            <li>
            <NavLink
                  className={`${location.pathname === '/'? styles.navItemActive:""}`}
                  to="/"
                >
                  Home
                </NavLink>
            </li>
            <li>
            <NavLink className={`${location.pathname === '/services'? styles.navItemActive:""}`} to="/services">Services</NavLink>
            </li>
            <li>
            <NavLink className={`${location.pathname === '/aboutus'? styles.navItemActive:""}`} to="/aboutus">About Us</NavLink> 
            </li>
          </ul>
          <div
            className={`${styles.navButtons} ${styles.mobNavButtons} ${btnStyles.actionButtons}`}
          >
            <button className={` ${btnStyles.btn1} mx-2`}>Login</button>
            <button id="signupBtn" className={`${btnStyles.btn2}  `}>
              <span className={`${styles.txtSignup}`}>Signup</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
