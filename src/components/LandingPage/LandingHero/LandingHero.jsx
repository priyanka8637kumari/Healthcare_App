import React, {useState} from "react";
import styles from "./LandingHero.module.css";
import heroImage from "../../../assets/landingPage/heroImage.png";
import bgVideo from "../../../assets/landingPage/backgroundvideo.mp4";
import LandingRole from "../LandingRole/LandingRole";

const HeroSection = () => {
 
  const handleClick = () => {
    const landingRoleSection = document.getElementById('landingRole');
    if (landingRoleSection) {
      landingRoleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Dummy text title</h1>
        <p className={styles.heroDescription}>
          Qualified doctors, handled directly by general doctors and experienced
          specialists doctors. Qualified doctors, handled directly by general
          doctors and experienced specialists doctors.
        </p>
        <button className={styles.heroButton} onClick={handleClick}>Confirm your role</button>
      </div>
      
    </section>
  );
};

export default HeroSection;
