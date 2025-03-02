import React from "react";
import styles from "./LandingAbout.module.css";
import aboutImage from "../../../assets/landingPage/aboutImage.png";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs} id="about">
      <h2 className={styles.title}>About Us</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={aboutImage}
            alt="Doctor with a patient"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <p className={styles.description}>
            &quot;We are a team of healthcare and technology experts committed
            to transforming the medical industry through digital innovation. Our
            centralized medical system simplifies patient data management,
            enhances doctor-patient interactions, and improves healthcare
            accessibility for everyone.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
