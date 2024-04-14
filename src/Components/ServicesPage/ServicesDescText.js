import React from 'react'
import styles from './ServicesPage.module.css'

function ServicesDescText() {
  return (
    <div>
        <div className={`${styles.textContainer}`}>
              <h2>Heading</h2>
              <p>We are a customer-first eCommerce agency, combining the best
                  of UX design, technology and analytics to create sites that
                  shoppers love and retention tactics that keep them coming
                  back</p>
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i>First key point of this service</li>
                    <li><i className="fa-solid fa-circle-check"></i>Second key point of this service</li>
                    <li><i className="fa-solid fa-circle-check"></i>Third key point of this service</li>
                  </ul>
                  <div className={`${styles.learnmore}`}>
                  <a href="/">Learn More</a>
                  <i className="fa-solid fa-arrow-right"></i>
                  </div>
              </div>
    </div>
  )
}

export default ServicesDescText