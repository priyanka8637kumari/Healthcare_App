import React from "react";
import styles from "./LandingAbout.module.css";
import aboutImage from "../../../assets/landingPage/aboutImage.png";

const AboutUs = () => {
    return (
      <section className={styles.aboutUs} id="about">
        <h2 className={styles.title}>About Us</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={aboutImage} alt="Doctor with a patient" className={styles.image} />
            {/* <div className={styles.playIcon}>&#9654;</div>  */}
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.heading}>dummy text dummy text dummy text</h3>
            <p className={styles.description}>
              Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing. Various versions have evolved over the years, sometimes by accident, sometimes chunks as necessary making.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;