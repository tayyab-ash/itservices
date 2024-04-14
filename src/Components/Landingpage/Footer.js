import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={`${styles.footer}`}>
        <div className="container ">
            <div className={`row justify-content-between text-light ${styles.mainFooter}`}>
                <div className={`${styles.mainText} col-lg-3`}>
                  <h3>CLOCK STUDIO</h3>
                  <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                  </span>
                  <div>

                  </div>
                </div>

                <div className='col-lg-2'>
                  <h3>About</h3>
                  <ul className={`${styles.footerList}`}>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Plans & Pricing</a></li>
                    <li><a href="/">Services</a></li>
                  </ul>
                </div>

                <div className='col-lg-2'>
                  <h3>Resources</h3>
                  <ul className={`${styles.footerList}`}>
                    <li><a href="/">Support Center</a></li>
                    <li><a href="/">Documentation</a></li>
                    <li><a href="/">Newsletter</a></li>
                    <li><a href="/">Changelog</a></li>
                  </ul>
                </div>

                <div className='col-lg-3'>
                  <h3>Contact</h3>
                  <ul className={`${styles.footerList}`}>
                    <li><a href="/">info@clockstudio.com</a></li>
                    <li><a href="/">0404507839</a></li>
                    <li><a href="/">123 Street, Lahore, Punjab, Pakistan</a></li>
                  </ul>
                </div>
            </div>
            <hr className={`${styles.line}`} />
            <div className='row'>
              <div className={`${styles.copyrightText} col-lg-12 text-center`}>
                <span className={`${styles.cpText}`}>Copyright ©2024 All rights reserved | Clock Studio.</span>  <span className='mx-2'><a href="/">Terms & Conditions</a></span> <span ><a href="/">Privacy Policy</a></span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer