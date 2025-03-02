import React from "react";
import styles from "./LandingFeature.module.css";
import fileSharing from "../../../assets/landingPage/fileSharing.png";
import aiInterpreter from "../../../assets/landingPage/AI.png";
import medicalRecord from "../../../assets/landingPage/medicalRecord.png";
import smartIcon from "../../../assets/landingPage/smartIcon.png";
import labTest from "../../../assets/landingPage/labTest.png";
import callIcon from "../../../assets/landingPage/callIcon.png";

const FeaturesSection = () => {

  // .....Features data.....
  const features = [
    { image: fileSharing, title: "Secure cloud file sharing" },
    { image: aiInterpreter, title: "AI powered interpreter" },
    { image: medicalRecord, title: "Unified Medical Records" },
    { image: smartIcon, title: "Smart Appointment" },
    { image: labTest, title: "Lab Test Analysis" },
    { image: callIcon, title: "Emergency Alert" },
  ];

  return (
    <section className={styles.featuresSection} id="features">
      <div className={styles.overlay}>
        <h2>Our Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div className={styles.featureItem} key={index}>
              <div className={styles.imageContainer}>
                <img src={feature.image} alt={feature.title} />
              </div>
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
