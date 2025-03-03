import styles from "./LandingHero.module.css";
import bgVideo from "../../../assets/landingPage/backgroundvideo.mp4";

const HeroSection = () => {
  const handleClick = () => {
    const landingRoleSection = document.getElementById("landingRole");
    if (landingRoleSection) {
      landingRoleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Health: Unified & Accessible</h1>
        <p className={styles.heroDescription}>
        A Unified Healthcare System for Faster, Smarter, and More Secure Patient Care.
        Our platform seamlessly connects hospitals, clinics, 
        and healthcare providers to give you real-time access to critical patient data.
        </p>
        <button className={styles.heroButton} onClick={handleClick}>
          Confirm your role
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
