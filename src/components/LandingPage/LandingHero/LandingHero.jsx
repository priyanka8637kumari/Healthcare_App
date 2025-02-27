import React from "react";
import styles from "./LandingHero.module.css";
import heroImage from "../../../assets/landingPage/heroImage.png";

const HeroSection = () => {
    return (
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Dummy text title</h1>
          <p className={styles.heroDescription}>
            Qualified doctors, handled directly by general doctors and
            experienced specialists doctors.
          </p>
          <button className={styles.heroButton}>Confirm your role</button>
        </div>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="Doctor with patient" />
        </div>
      </div>
    );
  };
  
  export default HeroSection;