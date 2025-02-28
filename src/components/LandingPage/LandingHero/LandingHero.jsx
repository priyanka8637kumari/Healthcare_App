import React from "react";
import styles from "./LandingHero.module.css";
import heroImage from "../../../assets/landingPage/heroImage.png";
import bgVideo from "../../../assets/landingPage/backgroundvideo.mp4";

const HeroSection = () => {
    return (
      <section className={styles.hero} id="home">
        {/* <video  width="640" height="360" controls autoPlay loop>
          <source src={bgVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video> */}
        <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Dummy text title</h1>
          <p className={styles.heroDescription}>
            Qualified doctors, handled directly by general doctors and
            experienced specialists doctors. Qualified doctors, handled directly by general doctors and
            experienced specialists doctors.
          </p>
          <button className={styles.heroButton}>Confirm your role</button>
        </div>
        {/* <div className={styles.heroImage}>
          <img src={heroImage} alt="Doctor with patient" />
        </div> */}
      </section>
    );
  };
  
  export default HeroSection;